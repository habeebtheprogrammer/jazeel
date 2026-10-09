"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { programmes } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const learnerOptions = ["Myself", "My child", "Family members"];
const ageOptions = ["Under 7", "7 – 12", "13 – 17", "18+"];
const levelOptions = [
  "New to Quran reading",
  "Can read with some help",
  "Reads fluently",
  "Already memorizing",
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-stone/60 transition-colors focus:border-steel focus:bg-white focus:outline-none focus:ring-4 focus:ring-steel/10";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-bronze"> *</span>}
      </span>
      {children}
    </label>
  );
}

function buildMessage(data) {
  const programme = programmes.find((p) => p.slug === data.programme);
  const lines = [
    `Assalamu alaikum, I'd like to enroll at ${site.name}.`,
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

export function EnrollForm({ defaultProgramme = "" }) {
  const [learner, setLearner] = useState(learnerOptions[1]);
  const [sent, setSent] = useState(null);
  const canWhatsapp = Boolean(site.contact.whatsapp);
  const canEmail = Boolean(site.contact.email);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const message = buildMessage({ ...data, learner });

    if (canWhatsapp) {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      setSent("whatsapp");
    } else if (canEmail) {
      const subject = encodeURIComponent(`Enrollment enquiry — ${data.name}`);
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
      setSent("email");
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
      <fieldset>
        <legend className="text-sm font-semibold text-navy">Who is learning?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {learnerOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLearner(option)}
              aria-pressed={learner === option}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                learner === option
                  ? "border-navy bg-navy text-cream"
                  : "border-line bg-cream text-navy hover:border-navy/40"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Your name" required>
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Full name" />
        </Field>
        <Field label="Country of residence" required>
          <input name="country" required autoComplete="country-name" className={fieldClass} placeholder="e.g. United Kingdom" />
        </Field>
        <Field label="Learner's age" required>
          <select name="age" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select an age range
            </option>
            {ageOptions.map((age) => (
              <option key={age}>{age}</option>
            ))}
          </select>
        </Field>
        <Field label="Current level">
          <select name="level" defaultValue="" className={fieldClass}>
            <option value="">Select a level</option>
            {levelOptions.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </Field>
        <Field label="Programme" required>
          <select name="programme" required defaultValue={defaultProgramme} className={fieldClass}>
            <option value="" disabled>
              Choose a programme
            </option>
            {programmes.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.shortName}
              </option>
            ))}
            <option value="unsure">Not sure — please advise</option>
          </select>
        </Field>
        <Field label="Preferred days & times">
          <input name="schedule" className={fieldClass} placeholder="e.g. Weekends, after 4pm GMT" />
        </Field>
        <Field label="Email or phone (optional)">
          <input name="contact" autoComplete="email" className={fieldClass} placeholder="So we can follow up" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything we should know?">
            <textarea
              name="message"
              rows={4}
              className={cn(fieldClass, "resize-y")}
              placeholder="Goals, previous learning, questions…"
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        {canWhatsapp || canEmail ? (
          <>
            <p className="text-sm text-stone">
              {canWhatsapp
                ? "We'll open WhatsApp with your details filled in — just press send."
                : "We'll open your email app with your details filled in — just press send."}
            </p>
            <Button type="submit" size="lg">
              {canWhatsapp ? <FaWhatsapp className="size-5" /> : <Mail className="size-5" />}
              Send enquiry <ArrowRight />
            </Button>
          </>
        ) : (
          <p className="text-sm text-stone">
            Online enrollment is opening soon. Please check back shortly, in shaa Allah.
          </p>
        )}
      </div>

      {sent && (
        <p role="status" className="mt-6 rounded-xl bg-mist px-5 py-4 text-sm text-navy">
          Jazakum Allahu khairan! Your enquiry is ready in {sent === "whatsapp" ? "WhatsApp" : "your email app"}.
          If nothing opened, please check your pop-up settings and try again.
        </p>
      )}
    </form>
  );
}
