"use server";

import nodemailer from "nodemailer";
import { programmes } from "@/lib/content";
import { site } from "@/lib/site";

const required = ["name", "country", "age", "programme"];
const fields = [...required, "learner", "level", "schedule", "contact", "message"];

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function buildMessage(data) {
  const programme = programmes.find((p) => p.slug === data.programme);
  const lines = [
    `New enrollment enquiry from the ${site.name} website.`,
    "",
    `Name: ${data.name}`,
    `Learner: ${data.learner} (age ${data.age})`,
    `Country: ${data.country}`,
    `Programme: ${programme ? programme.name : "Not sure — please advise"}`,
    data.level ? `Current level: ${data.level}` : null,
    data.schedule ? `Preferred schedule: ${data.schedule}` : null,
    data.contact ? `Contact: ${data.contact}` : null,
    data.message ? `\n${data.message}` : null,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

export async function sendEnquiry(input) {
  // Honeypot: real visitors never see or fill this field.
  if (input?.website) return { ok: true };

  const data = Object.fromEntries(
    fields.map((key) => [key, clean(input?.[key], key === "message" ? 5000 : 200)])
  );
  if (required.some((key) => !data[key])) {
    return { ok: false, error: "Please fill in all the required fields." };
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  const to = site.contact.email;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !to) {
    console.error("Enquiry email is not configured: set GMAIL_USER, GMAIL_APP_PASSWORD and site.contact.email.");
    return { ok: false, error: "We couldn't send your enquiry right now. Please try again later." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact) ? data.contact : undefined;

  try {
    await transporter.sendMail({
      from: `"${site.name} Website" <${GMAIL_USER}>`,
      to,
      replyTo,
      subject: `Enrollment enquiry — ${data.name.replace(/[\r\n]+/g, " ")}`,
      text: buildMessage(data),
    });
    return { ok: true };
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return { ok: false, error: "We couldn't send your enquiry right now. Please try again later." };
  }
}
