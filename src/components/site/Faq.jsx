import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

// Native <details> keeps the answers readable without JavaScript and to search engines.
export function FaqList({ items, className }) {
  return (
    <Reveal className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((faq) => (
        <details key={faq.question} name="faq" className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl text-navy transition-colors hover:text-steel sm:text-2xl [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-bronze transition-transform duration-300 group-open:rotate-45">
              <Plus className="size-4" />
            </span>
          </summary>
          <div className="max-w-3xl pb-7 text-lg leading-relaxed text-stone">
            <p>{faq.answer}</p>
            {faq.link && (
              <Link
                href={faq.link.href}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-navy underline decoration-gold underline-offset-4 hover:decoration-navy"
              >
                {faq.link.label} <ArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </details>
      ))}
    </Reveal>
  );
}

export function FaqJsonLd({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
