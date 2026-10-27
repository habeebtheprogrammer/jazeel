"use server";

import { formatPrice, getPlan, programmes } from "@/lib/content";
import { readFields, sendSiteEmail } from "@/lib/mail";
import { site } from "@/lib/site";

const required = ["name", "country", "age", "programme"];
const fields = [...required, "learner", "level", "plan", "schedule", "contact", "message"];

function buildMessage(data) {
  const programme = programmes.find((p) => p.slug === data.programme);
  const plan = getPlan(data.plan);
  const lines = [
    `New enrollment enquiry from the ${site.name} website.`,
    "",
    `Name: ${data.name}`,
    `Learner: ${data.learner} (age ${data.age})`,
    `Country: ${data.country}`,
    `Programme: ${programme ? programme.name : "Not sure — please advise"}`,
    plan ? `Plan: ${plan.name} (${formatPrice(plan.price)}/month)` : null,
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

  const data = readFields(input, fields, { long: ["message"] });
  if (required.some((key) => !data[key])) {
    return { ok: false, error: "Please fill in all the required fields." };
  }

  return sendSiteEmail({
    subject: `Enrollment enquiry — ${data.name}`,
    text: buildMessage(data),
    replyTo: data.contact,
  });
}
