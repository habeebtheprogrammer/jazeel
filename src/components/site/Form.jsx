"use client";

import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-stone/60 transition-colors focus:border-steel focus:bg-white focus:outline-none focus:ring-4 focus:ring-steel/10";

export function Field({ label, required, children }) {
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

const fallbackError = "We couldn't send your message right now. Please try again later.";

// Submits the form's fields to a server action. The form is only cleared once
// sending succeeds, so nothing the visitor typed is lost on an error.
export function useFormAction(action) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("sending");
    const result = await action(Object.fromEntries(new FormData(form))).catch(() => ({
      ok: false,
      error: fallbackError,
    }));

    if (result.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setError(result.error);
      setStatus("error");
    }
  };

  return { status, error, onSubmit };
}

export function FormFooter({ status, error, note, submitLabel, sentMessage }) {
  return (
    <>
      {/* Honeypot for bots — hidden from people and screen readers. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-stone">{note}</p>
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <LoaderCircle className="size-5 animate-spin" /> Sending…
            </>
          ) : (
            <>
              {submitLabel} <ArrowRight />
            </>
          )}
        </Button>
      </div>

      {status === "sent" && (
        <p role="status" className="mt-6 rounded-xl bg-mist px-5 py-4 text-sm text-navy">
          {sentMessage}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-6 rounded-xl border border-bronze/30 bg-cream px-5 py-4 text-sm text-navy">
          {error}
        </p>
      )}
    </>
  );
}
