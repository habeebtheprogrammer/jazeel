import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { programmes, programmesIntro } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Programmes",
  description:
    "Explore Jazeel Quran Academy's programmes: The Quran Foundations Class, The Quran Stewards Memorization Program, The Moral & Mentorship Builders Program, and The Intensive Arabic Proficiency Course.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero eyebrow="Our programmes" title="Every learner begins from a different point.">
        {programmesIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-6 px-5 py-24 sm:px-8 lg:py-28">
        {programmes.map((programme, i) => {
          const Icon = programme.icon;
          const flip = i % 2 === 1;
          return (
            <Reveal key={programme.slug}>
              <article
                id={programme.slug}
                className="grid overflow-hidden rounded-[2.5rem] border border-line bg-white lg:grid-cols-2"
              >
                <div className={cn("p-8 sm:p-12 lg:p-14", flip && "lg:order-2")}>
                  <p className="text-xs font-bold tracking-[0.18em] text-bronze uppercase">
                    {programme.number} · {programme.stage}
                  </p>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-navy text-balance sm:text-4xl">
                    {programme.name}
                  </h2>
                  <p className="mt-3 font-display text-xl italic text-steel">{programme.tagline}</p>
                  <p className="mt-6 text-lg leading-relaxed text-stone">{programme.intro[0]}</p>
                  <ul className="mt-6 space-y-2">
                    {programme.focus.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-navy">
                        <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={`/programmes/${programme.slug}`}>
                        View programme <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/enroll?programme=${programme.slug}`}>Enroll</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative flex min-h-80 flex-col justify-between overflow-hidden bg-navy p-8 sm:p-12 lg:p-14">
                  <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
                  <BrandMark tone="light" className="absolute -right-6 -bottom-10 w-52 opacity-[0.08]" />
                  <div className="relative flex items-center justify-between">
                    <span className="flex size-16 items-center justify-center rounded-2xl bg-gold/15 text-gold-light">
                      <Icon className="size-7" />
                    </span>
                    <span className="font-display text-7xl text-cream/10">{programme.number}</span>
                  </div>
                  <ol className="relative mt-12 space-y-3">
                    {programme.path.map((step, j) => (
                      <li key={step} className="flex items-center gap-4">
                        <span className="flex size-8 items-center justify-center rounded-full border border-gold/50 text-xs font-bold text-gold-light">
                          {j + 1}
                        </span>
                        <span className="font-display text-2xl text-cream">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      {/* Programme finder */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <SectionHeading eyebrow="Not sure where to start?" title="Find the right programme for your learner." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((programme, i) => (
              <Reveal key={programme.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/programmes/${programme.slug}`}
                  className="group flex h-full flex-col rounded-[1.75rem] bg-cream p-8 transition-colors hover:bg-white"
                >
                  <p className="text-lg leading-relaxed text-stone">
                    If your learner {programme.finder}…
                  </p>
                  <p className="mt-auto flex items-center justify-between gap-4 pt-8 font-display text-2xl text-navy">
                    {programme.shortName}
                    <ArrowUpRight className="size-5 shrink-0 text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-stone">
              Still unsure?{" "}
              <Link href="/enroll" className="font-semibold text-navy underline decoration-gold underline-offset-4">
                Tell us about your learner
              </Link>{" "}
              and we&apos;ll recommend the right place to begin.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
