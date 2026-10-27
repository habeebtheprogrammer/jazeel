import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroArch } from "@/components/site/HeroArch";
import { PricingPlans } from "@/components/site/Pricing";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, ProgrammeCard, SectionHeading, SubjectsGrid } from "@/components/site/Sections";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoCard } from "@/components/site/VideoGallery";
import { offerings, pillars, programmes, programmesIntro, steps, verses } from "@/lib/content";
import { publicFileExists } from "@/lib/media";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const featuredOfferings = ["structured", "personalized", "pace", "simplify", "progress"].map((id) =>
  offerings.find((o) => o.id === id)
);

export default function HomePage() {
  const heroVideo = publicFileExists(site.videos.hero) ? site.videos.hero : null;
  const classVideos = site.videos.classes.filter((video) => publicFileExists(video.src));
  const reviewVideo = publicFileExists(site.videos.testimonials?.src) ? site.videos.testimonials : null;

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div
          className="pattern-on-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pt-10 pb-24 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pt-16 lg:pb-32">
          <div className="motion-safe:animate-rise">
            <p className="eyebrow">{site.tagline}</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-navy text-balance sm:text-6xl lg:text-[5.25rem]">
              Learn, recite, memorize &amp; <em className="text-steel">live</em> by the Quran.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone text-pretty">
              A global e-learning platform for Muslims of all ages — making Quranic and Islamic
              education accessible, simplified, engaging and practical, wherever you are in the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/enroll">
                  Enroll now <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/programmes">Explore programmes</Link>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                ["For", "All ages"],
                ["Classes", "Live & online"],
                ["Learning", "At your pace"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold tracking-[0.18em] text-bronze uppercase">{label}</dt>
                  <dd className="mt-1.5 font-display text-xl text-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="motion-safe:animate-rise motion-safe:[animation-delay:150ms]">
            <HeroArch video={heroVideo} />
          </div>
        </div>
      </section>

      {/* Hadith */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
          <p lang="ar" dir="rtl" className="text-3xl leading-[1.9] text-gold-light sm:text-5xl">
            {verses.bestOfYou.arabic}
          </p>
          <p className="mt-4 font-display text-2xl italic text-cream/90 sm:text-3xl">
            “{verses.bestOfYou.translation}”
          </p>
          <p className="mt-5 text-xs font-bold tracking-[0.25em] text-gold uppercase">{verses.bestOfYou.source}</p>
        </Reveal>
      </section>

      {/* Who we are */}
      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <SectionHeading eyebrow="Who we are" title="Quranic education that meets every learner where they are.">
          <p>
            Jazeel Quran Academy is an online Quran and Islamic studies school for Muslims of all
            ages to learn, read, memorize, and live by the teachings of the Quran and the Prophet{" "}
            <span lang="ar">ﷺ</span>.
          </p>
          <p className="mt-4">
            Our goal is to make Quranic and Islamic education accessible, simplified, engaging, and
            practical — regardless of where you are in the world.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:decoration-navy"
          >
            Our approach <ArrowRight className="size-4" />
          </Link>
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-[1.75rem] p-7",
                  i === 0 ? "bg-navy text-cream" : "border border-line bg-white"
                )}
              >
                <span className={cn("font-display text-sm", i === 0 ? "text-gold" : "text-bronze")}>
                  0{i + 1}
                </span>
                <h3 className={cn("mt-10 font-display text-3xl", i === 0 ? "text-cream" : "text-navy")}>
                  {pillar.title}
                </h3>
                <p className={cn("mt-3 leading-relaxed", i === 0 ? "text-cream/70" : "text-stone")}>{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="What we offer" title="Everything a learner needs to grow with the Quran." />
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/about#approach">
                  How we teach <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredOfferings.map((offering, i) => {
              const Icon = offering.icon;
              const wide = i === 0;
              return (
                <Reveal key={offering.id} delay={(i % 3) * 0.08} className={cn(wide && "md:col-span-2")}>
                  <article
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8",
                      wide ? "bg-navy text-cream lg:p-10" : "bg-cream"
                    )}
                  >
                    {wide && <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />}
                    <span
                      className={cn(
                        "relative flex size-12 items-center justify-center rounded-xl",
                        wide ? "bg-gold/15 text-gold-light" : "bg-mist text-slate"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3
                      className={cn(
                        "relative mt-8 font-display text-2xl leading-snug",
                        wide ? "max-w-md text-3xl text-cream lg:text-4xl" : "text-navy"
                      )}
                    >
                      {offering.title}
                    </h3>
                    <p className={cn("relative mt-3 leading-relaxed", wide ? "max-w-xl text-lg text-cream/70" : "text-stone")}>
                      {offering.short}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Quran & Islamic studies" title="Beyond reading — an all-round Islamic education.">
            <p>
              Our curricula reflect the growing demands of today&apos;s world and offer solutions for
              navigating them in the light of the Quran — helping students build a meaningful
              relationship with Allah.
            </p>
          </SectionHeading>
          <Reveal delay={0.1}>
            <p className="mt-8 border-l-2 border-gold pl-5 font-display text-xl italic text-navy">
              Laying a solid foundation for grooming learners into Young Scholars.
            </p>
          </Reveal>
        </div>
        <SubjectsGrid />
      </section>

      {/* Programmes */}
      <section className="relative overflow-hidden bg-ink">
        <div className="pattern-on-dark absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <SectionHeading
            eyebrow="Our programmes"
            title="A journey that grows with every learner."
            tone="light"
            align="center"
          >
            <p>{programmesIntro[0]}</p>
          </SectionHeading>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {programmes.map((programme, i) => (
              <ProgrammeCard key={programme.slug} programme={programme} tone="dark" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading eyebrow="How it works" title="From your first message to steady, lasting progress." align="center" />
        <div className="relative mt-16">
          <div
            className="absolute top-7 right-[12%] left-[12%] hidden border-t border-dashed border-gold/60 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.1} className="lg:text-center">
                  <span className="relative flex size-14 items-center justify-center rounded-full border border-gold/60 bg-cream font-display text-xl text-navy lg:mx-auto">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-xl text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Class recordings */}
      {classVideos.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="Inside our classes" title="See how our students learn.">
                <p>
                  Real moments from our live online lessons — patient, step-by-step teaching from
                  the comfort of home.
                </p>
              </SectionHeading>
              <Reveal delay={0.1}>
                <p className="text-sm text-stone">Student faces are blurred for privacy.</p>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-6">
              {classVideos.map((video, i) => (
                <Reveal key={video.src} delay={i * 0.08}>
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials video={reviewVideo} />

      {/* Pricing */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Monthly plans" title="Less than the cost of your daily coffee.">
              <p>Nurture your connection with the Quran every day with personalized, one-on-one sessions.</p>
            </SectionHeading>
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/pricing">
                  Pricing details <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
          <PricingPlans className="mt-14" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
