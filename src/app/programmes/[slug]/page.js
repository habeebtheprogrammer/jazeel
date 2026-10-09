import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, ProgrammeCard } from "@/components/site/Sections";
import { getProgramme, programmes } from "@/lib/content";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) return {};
  return {
    title: programme.name,
    description: `${programme.tagline} ${programme.intro[0]}`,
    alternates: { canonical: `/programmes/${programme.slug}` },
  };
}

export default async function ProgrammePage({ params }) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();

  const Icon = programme.icon;
  const others = programmes.filter((p) => p.slug !== programme.slug);
  const atAGlance = [
    ["Who it's for", programme.audience],
    ["Format", "Live, interactive online classes"],
    ["Pace", "Personalized to each learner's ability, goals and schedule"],
    ["Support", "Ongoing progress tracking and guidance"],
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
        <BrandMark tone="light" className="absolute -top-8 right-4 w-64 opacity-[0.07] sm:w-80 lg:right-16" />
        <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-20 sm:px-8 lg:pb-28">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-cream/60">
            <Link href="/programmes" className="hover:text-cream">
              Programmes
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-cream/90">{programme.shortName}</span>
          </nav>
          <div className="mt-14 max-w-4xl motion-safe:animate-rise">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-gold/15 text-gold-light">
              <Icon className="size-7" />
            </span>
            <p className="mt-8 text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Programme {programme.number} · {programme.stage}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {programme.name}
            </h1>
            <p className="mt-6 font-display text-2xl italic text-gold-light sm:text-3xl">{programme.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link href={`/enroll?programme=${programme.slug}`}>
                  Enroll in this programme <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="light" size="lg">
                <Link href="/programmes">All programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <p className="eyebrow">Overview</p>
          <div className="mt-6 space-y-5 text-xl leading-relaxed text-stone">
            {programme.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ol className="mt-12 flex flex-wrap items-center gap-2">
            {programme.path.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-mist px-4 py-2 font-display text-lg text-navy">{step}</span>
                {i < programme.path.length - 1 && <ArrowRight className="size-4 text-bronze" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1}>
          <aside className="rounded-[2rem] border border-line bg-white p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl text-navy">At a glance</h2>
            <dl className="mt-6 divide-y divide-line">
              {atAGlance.map(([label, value]) => (
                <div key={label} className="py-4">
                  <dt className="text-xs font-bold tracking-[0.18em] text-bronze uppercase">{label}</dt>
                  <dd className="mt-1.5 text-navy">{value}</dd>
                </div>
              ))}
            </dl>
            <Button asChild className="mt-4 w-full">
              <Link href={`/enroll?programme=${programme.slug}`}>
                Start here <ArrowRight />
              </Link>
            </Button>
          </aside>
        </Reveal>
      </section>

      {/* Focus */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow">What learners gain</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-navy sm:text-5xl">{programme.focusTitle}</h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programme.focus.map((item, i) => (
              <li key={item}>
                <Reveal delay={(i % 3) * 0.08} className="flex h-full gap-4 rounded-[1.5rem] bg-cream p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-gold-light">
                    <Check className="size-4" />
                  </span>
                  <span className="pt-1.5 text-lg leading-snug font-medium text-navy">{item}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Aim */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-28">
        <Reveal>
          {programme.closing.map((paragraph) => (
            <p key={paragraph} className="mb-10 text-xl leading-relaxed text-stone">
              {paragraph}
            </p>
          ))}
          <BrandMark className="mx-auto w-9" />
          <blockquote className="mt-8 font-display text-3xl leading-snug text-navy text-balance sm:text-4xl">
            {programme.aim}
          </blockquote>
        </Reveal>
      </section>

      {/* Other programmes */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-navy sm:text-4xl">Continue the journey</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {others.map((p, i) => (
              <ProgrammeCard key={p.slug} programme={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={programme.shortName}
        title="Ready to begin? Let's find the right class for your learner."
        text="Tell us about the learner's age, current level and goals, and we'll guide you to the right starting point."
      />
    </>
  );
}
