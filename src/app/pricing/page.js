import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { PricingPlans } from "@/components/site/Pricing";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { faqs, planIncludes, sessionLength } from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description: `Monthly plans for personalized one-on-one online Quran classes at Jazeel Quran Academy — 2, 3 or 5 days per week from USD 45/month, with ${sessionLength} sessions.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Less than the cost of your daily coffee.">
        <p>
          Nurture your connection with the Quran every day with personalized, one-on-one sessions —
          choose the plan that fits your week.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <PricingPlans />
        <Reveal>
          <p className="mt-10 text-center text-stone">
            Not sure which plan is right?{" "}
            <Link href="/enroll" className="font-semibold text-navy underline decoration-gold underline-offset-4">
              Tell us about your learner
            </Link>{" "}
            and we&apos;ll recommend one.
          </p>
        </Reveal>
      </section>

      {/* Every plan includes */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <SectionHeading eyebrow="Every plan includes" title="Learning that fits your life — with feedback that helps you grow." />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {planIncludes.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-[1.75rem] bg-cream p-8">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-mist text-slate">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-8 font-display text-2xl leading-snug text-navy">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-stone">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing questions */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-28">
        <SectionHeading eyebrow="Questions" title="Good to know before you start.">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-base font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:decoration-navy"
          >
            All FAQs <ArrowRight className="size-4" />
          </Link>
        </SectionHeading>
        <FaqList items={faqs.filter((faq) => faq.pricing)} />
      </section>

      <CtaBand
        eyebrow="Pricing"
        title="Ready to begin? Choose a plan and we'll find the right class."
        text="Tell us about the learner's age, current level and goals, and we'll guide you to the right starting point."
      />
    </>
  );
}
