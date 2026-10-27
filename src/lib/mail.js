import nodemailer from "nodemailer";
import { site } from "@/lib/site";

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

// Sends a plain-text email from the website to the academy inbox (site.contact.email).
export async function sendSiteEmail({ subject, text, replyTo }) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  const to = site.contact.email;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !to) {
    console.error("Site email is not configured: set GMAIL_USER, GMAIL_APP_PASSWORD and site.contact.email.");
    return failure;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${GMAIL_USER}>`,
      to,
      replyTo: isEmail(replyTo) ? replyTo : undefined,
      subject: subject.replace(/[\r\n]+/g, " "),
      text,
    });
    return { ok: true };
  } catch (error) {
    console.error("Failed to send site email:", error);
    return failure;
  }
}
