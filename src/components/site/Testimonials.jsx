import { Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/Sections";
import { VideoCard } from "@/components/site/VideoGallery";
import { testimonials } from "@/lib/content";

// Swipeable row on phones, masonry columns from md up.
const tile = "w-[85%] shrink-0 snap-center md:mb-5 md:w-auto md:break-inside-avoid";

export function Testimonials({ video }) {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading eyebrow="Testimonials" title="Loved by parents and students around the world.">
          <p>Families in the USA, UK, Canada, the UAE and Nigeria learn with Jazeel.</p>
        </SectionHeading>

        <Reveal className="mt-14">
          <div className="-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:block md:columns-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:columns-3">
            {video && (
              <div className={tile}>
                <VideoCard video={video} label="Watch: parent & student reviews" />
              </div>
            )}
            {testimonials.map((t) => (
              <figure key={t.name} className={`${tile} flex flex-col rounded-[1.75rem] border border-line bg-white p-7`}>
                <div role="img" aria-label="Rated 5 out of 5" className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 leading-relaxed text-ink/80">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <span>
                    <span className="block font-semibold text-navy">{t.name}</span>
                    <span className="text-sm text-stone">{t.location}</span>
                  </span>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
