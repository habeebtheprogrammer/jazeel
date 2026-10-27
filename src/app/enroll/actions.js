"use server";

import { formatPrice, getPlan, programmes } from "@/lib/content";
import { isEmail, readFields, sendSubmission } from "@/lib/mail";

const required = ["name", "email", "country", "age", "programme"];
const fields = [...required, "learner", "level", "plan", "schedule", "phone", "message"];

function buildDetails(data) {
  const programme = programmes.find((p) => p.slug === data.programme);
  const plan = getPlan(data.plan);
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Learner: ${data.learner} (age ${data.age})`,
    `Country: ${data.country}`,
    `Programme: ${programme ? programme.name : "Not sure — please advise"}`,
    plan ? `Plan: ${plan.name} (${formatPrice(plan.price)}/month)` : null,
    data.level ? `Current level: ${data.level}` : null,
    data.schedule ? `Preferred schedule: ${data.schedule}` : null,
    data.message ? `\n${data.message}` : null,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

export async function sendEnquiry(input) {
  // Honeypot: real visitors never see or fill this field.
  if (input?.website) return { ok: true };

  const data = readFields(input, fields, { long: ["message"] });
  if (required.some((key) => !data[key])) {
    return { ok: false, error: "Please fill in all the required fields." };
  }
  if (!isEmail(data.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  return sendSubmission({
    kind: "enrollment enquiry",
    subject: `Enrollment enquiry — ${data.name}`,
    name: data.name,
    email: data.email,
    details: buildDetails(data),
  });
}
