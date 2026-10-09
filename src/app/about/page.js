import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading, SubjectsGrid } from "@/components/site/Sections";
import { offerings, pillars, verses } from "@/lib/content";

export const metadata = {
  title: "About Us",
  description:
    "Jazeel Quran Academy makes Quranic and Islamic education accessible, simplified, engaging and practical for Muslims of all ages, wherever they are in the world.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Jazeel" title="Quranic education for every Muslim, everywhere.">
        <p>
          Jazeel Quran Academy is an online Quran and Islamic studies school that provides a global
          e-learning platform for Muslims of all ages to learn, read, memorize, and live by the
          teachings of the Quran and the Prophet <span lang="ar">ﷺ</span>.
        </p>
      </PageHero>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Our goal</p>
          <p className="mt-6 font-display text-3xl leading-snug text-navy text-balance sm:text-4xl">
            To make Quranic and Islamic education <em className="text-steel">accessible</em>,{" "}
            <em className="text-steel">simplified</em>, <em className="text-steel">engaging</em>, and{" "}
            <em className="text-steel">practical</em> — regardless of where you are in the world.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="bg-cream p-8">
              <h2 className="font-display text-2xl text-navy">{pillar.title}</h2>
              <p className="mt-3 leading-relaxed text-stone">{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <SectionHeading eyebrow="What we offer" title="How we teach, and why it works." />
          <div className="mt-16 divide-y divide-line border-y border-line">
            {offerings.map((offering, i) => {
              const Icon = offering.icon;
              return (
                <Reveal key={offering.id}>
                  <article className="grid gap-6 py-12 lg:grid-cols-[5rem_1fr_1.4fr] lg:gap-10">
                    <span className="font-display text-4xl text-navy/20">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="flex size-12 items-center justify-center rounded-xl bg-cream text-slate">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-5 font-display text-2xl leading-snug text-navy sm:text-3xl">
                        {offering.title}
                      </h3>
                    </div>
                    <div className="space-y-4 text-lg leading-relaxed text-stone">
                      {offering.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
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
          <SectionHeading eyebrow="Our subjects" title="A combination of subjects for an all-round understanding of Islaam." />
          <Reveal delay={0.1}>
            <figure className="mt-10 rounded-[1.75rem] bg-navy p-8 text-cream">
              <p lang="ar" dir="rtl" className="text-3xl leading-[1.9] text-gold-light">
                {verses.bestOfYou.arabic}
              </p>
              <figcaption className="mt-3 font-display text-lg italic text-cream/85">
                “{verses.bestOfYou.translation}”
                <span className="mt-2 block font-sans text-xs not-italic tracking-[0.2em] text-gold uppercase">
                  {verses.bestOfYou.source}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <SubjectsGrid />
      </section>

      <CtaBand />
    </>
  );
}
