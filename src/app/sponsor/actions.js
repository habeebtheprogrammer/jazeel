"use server";

import { isEmail, readFields, sendSubmission } from "@/lib/mail";

const fields = ["name", "email", "country", "students", "message"];

export async function sendSponsorEnquiry(input) {
  // Honeypot: real visitors never see or fill this field.
  if (input?.website) return { ok: true };

  const data = readFields(input, fields, { long: ["message"] });
  if (!data.name || !data.email) {
    return { ok: false, error: "Please enter your name and email address." };
  }
  if (!isEmail(data.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.country ? `Country: ${data.country}` : null,
    `Students to sponsor: ${data.students || "1"}`,
    data.message ? `\n${data.message}` : null,
  ];

  return sendSubmission({
    kind: "sponsorship enquiry",
    subject: `Sponsorship enquiry — ${data.name}`,
    name: data.name,
    email: data.email,
    details: lines.filter((line) => line !== null).join("\n"),
  });
}
