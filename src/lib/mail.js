import { after } from "next/server";
import nodemailer from "nodemailer";
import { site, whatsappLink } from "@/lib/site";

const failure = { ok: false, error: "We couldn't send your message right now. Please try again later." };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(value) {
  return emailPattern.test(value);
}

// Trims form input and caps its length; anything that isn't a string becomes "".
export function readFields(input, keys, { long = [] } = {}) {
  return Object.fromEntries(
    keys.map((key) => {
      const value = input?.[key];
      return [key, typeof value === "string" ? value.trim().slice(0, long.includes(key) ? 5000 : 200) : ""];
    })
  );
}

let transporter;

// Sends through Gmail SMTP using an App Password (GMAIL_USER / GMAIL_APP_PASSWORD).
async function send({ fromName, subject, ...message }) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !site.contact.email) {
    console.error("Site email is not configured: set GMAIL_USER, GMAIL_APP_PASSWORD and site.contact.email.");
    return false;
  }
  transporter ??= nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${GMAIL_USER}>`,
      subject: subject.replace(/[\r\n]+/g, " "),
      ...message,
    });
    return true;
  } catch (error) {
    console.error(`Failed to send email "${subject}":`, error);
    return false;
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function confirmationEmail({ kind, name, details }) {
  const whatsapp = whatsappLink();
  const intro = [
    `Assalamu alaikum ${name},`,
    `Jazakum Allahu khairan for reaching out to ${site.name}. We have received your ${kind} and will get back to you shortly, in shaa Allah.`,
    "Here is a copy of the details you sent:",
  ];
  const outro = [
    `If you have any questions in the meantime, simply reply to this email${whatsapp ? " or message us on WhatsApp" : ""}.`,
    `Warm regards,\nThe ${site.name} team`,
  ];

  const text = [...intro, details, ...outro, whatsapp ? `WhatsApp: ${whatsapp}` : null].filter(Boolean).join("\n\n");

  const paragraph = (value) =>
    `<p style="margin:0 0 16px;line-height:1.6">${escapeHtml(value).replace(/\n/g, "<br>")}</p>`;
  const html = `<div style="background:#fbf8f1;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#1b2836">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4dccb;border-radius:16px;padding:32px">
    <p style="margin:0 0 24px;font-family:Georgia,serif;font-size:22px;color:#2d3e50">${escapeHtml(site.name)}</p>
    ${intro.map(paragraph).join("\n    ")}
    <div style="margin:0 0 16px;padding:16px;background:#f3ecdd;border-radius:12px;white-space:pre-wrap;line-height:1.6">${escapeHtml(details)}</div>
    ${outro.map(paragraph).join("\n    ")}
    ${whatsapp ? `<p style="margin:0"><a href="${whatsapp}" style="color:#2d3e50;font-weight:bold">Chat with us on WhatsApp</a></p>` : ""}
  </div>
</div>`;

  return { subject: `We've received your ${kind} — ${site.name}`, text, html };
}

// Emails a form submission to the academy inbox (site.contact.email). Once that
// succeeds, a confirmation with a copy of the details goes to the visitor after
// the response is sent, so they aren't kept waiting on a second email.
export async function sendSubmission({ kind, subject, name, email, details }) {
  const delivered = await send({
    fromName: `${site.name} Website`,
    to: site.contact.email,
    replyTo: email,
    subject,
    text: `New ${kind} from the ${site.name} website.\n\n${details}`,
  });
  if (!delivered) return failure;

  after(() =>
    send({
      fromName: site.name,
      to: email,
      replyTo: site.contact.email,
      ...confirmationEmail({ kind, name, details }),
    })
  );
  return { ok: true };
}
