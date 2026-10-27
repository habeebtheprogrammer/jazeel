"use client";

import { sendSponsorEnquiry } from "@/app/sponsor/actions";
import { Field, FormFooter, fieldClass, useFormAction } from "@/components/site/Form";
import { cn } from "@/lib/utils";

export function SponsorForm() {
  const { status, error, onSubmit } = useFormAction(sendSponsorEnquiry);

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-white p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
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
            placeholder="So we can send you the details"
          />
        </Field>
        <Field label="Country of residence">
          <input name="country" autoComplete="country-name" className={fieldClass} placeholder="e.g. United Kingdom" />
        </Field>
        <Field label="Students to sponsor">
          <input name="students" type="number" min={1} max={100} defaultValue={1} className={fieldClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea
              name="message"
              rows={4}
              className={cn(fieldClass, "resize-y")}
              placeholder="Questions, or anything you'd like us to know…"
            />
          </Field>
        </div>
      </div>

      <FormFooter
        status={status}
        error={error}
        note="We'll get back to you with the sponsorship details, in shaa Allah."
        submitLabel="Sponsor a student"
        sentMessage="Jazakum Allahu khairan! We've received your sponsorship enquiry and will be in touch shortly."
      />
    </form>
  );
}
