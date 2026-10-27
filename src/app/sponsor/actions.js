"use server";

import { isEmail, readFields, sendSiteEmail } from "@/lib/mail";
import { site } from "@/lib/site";

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
    `New student sponsorship enquiry from the ${site.name} website.`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.country ? `Country: ${data.country}` : null,
    `Students to sponsor: ${data.students || "1"}`,
    data.message ? `\n${data.message}` : null,
  ];

  return sendSiteEmail({
    subject: `Sponsorship enquiry — ${data.name}`,
    text: lines.filter((line) => line !== null).join("\n"),
    replyTo: data.email,
  });
}
