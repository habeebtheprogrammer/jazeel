import Link from "next/link";
import { FaqJsonLd, FaqList } from "@/components/site/Faq";
import { CtaBand, PageHero } from "@/components/site/Sections";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Jazeel Quran Academy — live one-on-one classes, teachers, pricing, class times, the Arabic course, enrollment and sponsoring a student.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <PageHero eyebrow="FAQ" title="Your questions, answered.">
        <p>
          Everything you need to know about learning with Jazeel Quran Academy. Can&apos;t find what
          you&apos;re looking for?{" "}
          <Link href="/enroll" className="font-semibold text-navy underline decoration-gold underline-offset-4">
            Send us a message
          </Link>
          .
        </p>
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
        <FaqList items={faqs} />
      </section>

      <CtaBand />
    </>
  );
}
