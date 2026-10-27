"use client";

import { useState } from "react";
import { sendEnquiry } from "@/app/enroll/actions";
import { Field, FormFooter, fieldClass, useFormAction } from "@/components/site/Form";
import { formatPrice, plans, programmes } from "@/lib/content";
import { cn } from "@/lib/utils";

const learnerOptions = ["Myself", "My child", "Family members"];
const ageOptions = ["Under 7", "7 – 12", "13 – 17", "18+"];
const levelOptions = [
  "New to Quran reading",
  "Can read with some help",
  "Reads fluently",
  "Already memorizing",
];

export function EnrollForm({ defaultProgramme = "", defaultPlan = "" }) {
  const [learner, setLearner] = useState(learnerOptions[1]);
  const { status, error, onSubmit } = useFormAction(sendEnquiry);

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
      <input type="hidden" name="learner" value={learner} />
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
        <Field label="Email address" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="We'll send a confirmation here"
          />
        </Field>
        <Field label="Phone / WhatsApp (optional)">
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Include your country code" />
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
        <Field label="Monthly plan">
          <select name="plan" defaultValue={defaultPlan} className={fieldClass}>
            <option value="">Not sure yet</option>
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name} — {formatPrice(plan.price)}/month
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Preferred days & times">
            <input name="schedule" className={fieldClass} placeholder="e.g. Weekends, after 4pm GMT" />
          </Field>
        </div>
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

      <FormFooter
        status={status}
        error={error}
        note="Your enquiry goes straight to our team, and we'll email you a confirmation."
        submitLabel="Send enquiry"
        sentMessage="Jazakum Allahu khairan! Your enquiry has been sent and a confirmation is on its way to your inbox. We'll get back to you shortly, in shaa Allah."
      />
    </form>
  );
}
