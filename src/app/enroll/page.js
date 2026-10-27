import { Mail, MessageCircle, Phone } from "lucide-react";
import { EnrollForm } from "@/components/site/EnrollForm";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Sections";
import { getPlan, getProgramme, verses } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Enroll",
  description:
    "Enroll at Jazeel Quran Academy. Tell us about your learner and we'll recommend the right programme and level for live online Quran and Islamic studies classes.",
  alternates: { canonical: "/enroll" },
};

const nextSteps = [
  "We review the learner's age, level, goals and location.",
  "We recommend the right programme and class.",
  "Your learner begins live classes with a dedicated teacher.",
];

export default async function EnrollPage({ searchParams }) {
  const { programme, plan } = await searchParams;
  const defaultProgramme = getProgramme(programme)?.slug ?? "";
  const defaultPlan = getPlan(plan)?.id ?? "";
  const whatsapp = whatsappLink();
  const { email, phone } = site.contact;

  return (
    <>
      <PageHero eyebrow="Enroll" title="Begin your Quran journey.">
        <p>
          Tell us a little about the learner and we&apos;ll recommend the right programme and level
          — whether they&apos;re just starting out, reading fluently or ready for Hifz.
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:py-24">
        <Reveal>
          <EnrollForm defaultProgramme={defaultProgramme} defaultPlan={defaultPlan} />
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="rounded-[2rem] bg-sand p-8">
            <h2 className="font-display text-2xl text-navy">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/60 font-display text-navy">
                    {i + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-stone">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {(whatsapp || email || phone) && (
            <div className="rounded-[2rem] border border-line bg-white p-8">
              <h2 className="font-display text-2xl text-navy">Prefer to talk?</h2>
              <ul className="mt-5 space-y-3">
                {whatsapp && (
                  <li>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-navy hover:text-steel">
                      <MessageCircle className="size-5 text-bronze" /> Chat on WhatsApp
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="flex items-center gap-3 text-navy hover:text-steel">
                      <Mail className="size-5 text-bronze" /> {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-navy hover:text-steel">
                      <Phone className="size-5 text-bronze" /> {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          <figure className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-cream">
            <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
            <p lang="ar" dir="rtl" className="relative text-3xl leading-[1.9] text-gold-light">
              {verses.iqra.arabic}
            </p>
            <figcaption className="relative mt-3 font-display text-lg italic text-cream/85">
              “{verses.iqra.translation}”
              <span className="mt-2 block font-sans text-xs not-italic tracking-[0.2em] text-gold uppercase">
                {verses.iqra.source}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </>
  );
}
