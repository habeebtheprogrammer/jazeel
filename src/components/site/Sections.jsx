import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { subjects } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, children, align = "left", tone = "dark", className }) {
  const light = tone === "light";
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-2xl", className)}>
      {eyebrow && <p className={cn("eyebrow", light && "text-gold-light")}>{eyebrow}</p>}
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl",
          light ? "text-cream" : "text-navy"
        )}
      >
        {title}
      </h2>
      {children && (
        <div className={cn("mt-5 text-lg leading-relaxed text-pretty", light ? "text-cream/70" : "text-stone")}>
          {children}
        </div>
      )}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, children, aside }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pattern-on-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:pt-20 lg:pb-24">
        <div className="motion-safe:animate-rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.04] tracking-tight text-navy text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
        {children && (
          <div className="space-y-4 text-lg leading-relaxed text-stone motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
            {children}
          </div>
        )}
        {aside}
      </div>
    </section>
  );
}

export function ProgrammeCard({ programme, tone = "light", index = 0 }) {
  const Icon = programme.icon;
  const dark = tone === "dark";
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        href={`/programmes/${programme.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition-all duration-300 hover:-translate-y-1",
          dark
            ? "border-cream/10 bg-cream/[0.04] hover:border-gold/40 hover:bg-cream/[0.07]"
            : "border-line bg-white hover:border-gold/60 hover:shadow-[0_30px_60px_-30px_rgba(45,62,80,0.25)]"
        )}
      >
        <div className="flex items-start justify-between">
          <span
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl",
              dark ? "bg-gold/15 text-gold-light" : "bg-mist text-slate"
            )}
          >
            <Icon className="size-6" />
          </span>
          <span
            className={cn(
              "font-display text-5xl leading-none",
              dark ? "text-cream/15" : "text-navy/10"
            )}
          >
            {programme.number}
          </span>
        </div>
        <p className={cn("mt-8 text-xs font-bold uppercase tracking-[0.18em]", dark ? "text-gold" : "text-bronze")}>
          {programme.stage}
        </p>
        <h3 className={cn("mt-3 font-display text-2xl leading-snug", dark ? "text-cream" : "text-navy")}>
          {programme.shortName}
        </h3>
        <p className={cn("mt-2 font-display italic", dark ? "text-gold-light/90" : "text-steel")}>
          {programme.tagline}
        </p>
        <p className={cn("mt-4 leading-relaxed", dark ? "text-cream/65" : "text-stone")}>{programme.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {programme.path.map((step) => (
            <li
              key={step}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold",
                dark ? "border-cream/15 text-cream/75" : "border-line text-navy/80"
              )}
            >
              {step}
            </li>
          ))}
        </ul>
        <span
          className={cn(
            "mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold",
            dark ? "text-gold-light" : "text-navy"
          )}
        >
          Explore programme
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </Reveal>
  );
}

export function SubjectsGrid({ className }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {subjects.map((subject, i) => (
        <li key={subject.title}>
          <Reveal delay={(i % 2) * 0.06} className="h-full">
            {/* Compact row on phones; number + Arabic above the title from sm up. */}
            <div className="group grid h-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-2xl border border-line bg-white/60 px-5 py-4 transition-colors hover:border-gold/60 hover:bg-white sm:p-6">
              <span className="col-start-1 row-start-1 text-xs font-bold tracking-[0.18em] text-bronze sm:self-start">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                lang="ar"
                dir="rtl"
                className="col-start-2 row-span-2 row-start-1 text-2xl leading-none text-steel/80 transition-colors group-hover:text-steel sm:row-span-1 sm:self-start"
              >
                {subject.arabic}
              </span>
              <p className="col-start-1 row-start-2 font-semibold text-navy sm:col-span-2 sm:mt-6 sm:self-end">
                {subject.title}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  eyebrow = "A global learning community",
  title = "Begin your Quran journey — wherever you are in the world.",
  text = "Geographical location does not have to be a barrier to quality Islamic education. Families can access structured learning from wherever they are while building a consistent Quran and Islamic learning routine.",
}) {
  const whatsapp = whatsappLink("Assalamu alaikum, I'd like to enroll at Jazeel Quran Academy.");
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
        <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-40 -right-40 size-[28rem] rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-gold-light">{eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-cream text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button asChild variant="gold" size="lg">
              <Link href="/enroll">
                Enroll now <ArrowRight />
              </Link>
            </Button>
            {whatsapp ? (
              <Button asChild variant="light" size="lg">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="size-5" /> Chat on WhatsApp
                </a>
              </Button>
            ) : (
              <Button asChild variant="light" size="lg">
                <Link href="/programmes">Explore programmes</Link>
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
