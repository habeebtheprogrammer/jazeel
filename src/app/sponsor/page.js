import Link from "next/link";
import { ArrowDown, BookHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/Sections";
import { SponsorForm } from "@/components/site/SponsorForm";
import { sponsorship } from "@/lib/content";

export const metadata = {
  title: "Sponsor a Student",
  description:
    "Sponsor a student's Quran classes at Jazeel Quran Academy — a Sadaqah Jariyah supporting new Muslims, students in financial need and orphans on their Quran journey.",
  alternates: { canonical: "/sponsor" },
};

export default function SponsorPage() {
  return (
    <>
      <PageHero eyebrow="Sponsor a student" title="An investment whose rewards continue long after you're gone.">
        <p>
          Imagine helping a student learn to recite the Quran correctly, memorize its verses, and
          carry its guidance throughout their life. Through your sponsorship, you could help make
          that possible, bi&apos;idhnillah.
        </p>
        <Button asChild size="lg" className="mt-2">
          <Link href="#sponsor-form">
            Sponsor a student <ArrowDown />
          </Link>
        </Button>
      </PageHero>

      {/* What sponsorship achieves */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="Your impact" title="What your sponsorship can help a student achieve." />
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {sponsorship.achievements.map((item, i) => (
            <li key={item}>
              <Reveal delay={i * 0.08} className="flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-8">
                <span className="font-display text-4xl text-navy/20">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-8 font-display text-2xl leading-snug text-navy">{item}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Sadaqah Jariyah */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
          <p lang="ar" dir="rtl" className="text-4xl leading-[1.9] text-gold-light sm:text-6xl">
            صَدَقَةٌ جَارِيَةٌ
          </p>
          <p className="mt-6 font-display text-2xl leading-snug text-balance sm:text-3xl">
            As your contribution helps them learn and practise the Quran, you shall continue to earn
            reward even after you have departed this world, by Allah&apos;s permission.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/70">
            This is the hope of Sadaqah Jariyah: a charitable investment whose benefits can continue
            beyond your lifetime.
          </p>
        </Reveal>
      </section>

      {/* Who it supports */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
          <SectionHeading eyebrow="Who will your Sadaqah support?" title="Opening the door to the Quran for those who need it most.">
            <p>
              Your Sadaqah will help provide access to Quranic learning for individuals who may
              otherwise face financial barriers.
            </p>
          </SectionHeading>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {sponsorship.beneficiaries.map((group, i) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-[1.75rem] bg-cream p-8">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-mist text-slate">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-8 font-display text-2xl text-navy">{group.title}</h3>
                    <p className="mt-3 leading-relaxed text-stone">{group.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="mt-12 max-w-3xl border-l-2 border-gold pl-5 font-display text-xl italic text-navy">
              Through your generosity, you can help make Quranic education more accessible and nurture
              a lasting connection with the Book of Allah, bi&apos;idhnillah.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sponsor form */}
      <section
        id="sponsor-form"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-14 lg:py-28"
      >
        <div className="space-y-6">
          <SectionHeading eyebrow="You can be part of this journey" title="Sponsor a student today.">
            <p>
              Help empower a student&apos;s Quran journey for less than the cost of your monthly
              subscription, and invest in a legacy of Quranic learning, bi&apos;idhnillah.
            </p>
          </SectionHeading>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-cream">
              <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
              <span className="relative flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                <BookHeart className="size-5" />
              </span>
              <p className="relative mt-6 text-xs font-bold tracking-[0.2em] text-gold uppercase">Sadaqah Jariyah plan</p>
              <h3 className="relative mt-2 font-display text-3xl">Sponsor a Student — 1 Month</h3>
              <p className="relative mt-3 leading-relaxed text-cream/70">
                One month of Quran classes for a student in need. Send us your details and we&apos;ll
                share how to complete your sponsorship.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <SponsorForm />
        </Reveal>
      </section>
    </>
  );
}
