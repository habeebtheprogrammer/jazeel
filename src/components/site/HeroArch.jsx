"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { verses } from "@/lib/content";
import { cn } from "@/lib/utils";

// Media errors can fire before hydration attaches onError, so check on mount too.
function useVideoStatus() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) setFailed(true);
    else if (v.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) setReady(true);
  }, []);

  return {
    ref,
    ready,
    failed,
    onLoadedData: () => setReady(true),
    onError: () => setFailed(true),
  };
}

export function HeroArch({ video }) {
  const { ref, ready, failed, onLoadedData, onError } = useVideoStatus();
  const reduce = useReducedMotion();
  const playing = video && ready && !failed;

  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:mr-0">
      <div className="absolute -inset-4 rounded-t-full rounded-b-[2.5rem] border border-gold/50" aria-hidden="true" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-navy shadow-[0_40px_80px_-40px_rgba(27,40,54,0.6)]">
        <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(227,179,65,0.22),transparent_60%)]" aria-hidden="true" />

        <figure className="absolute inset-x-8 top-[54%] -translate-y-1/2 text-center">
          <p lang="ar" dir="rtl" className="text-[2rem] leading-[1.7] text-gold-light text-balance sm:text-[2.6rem]">
            {verses.iqra.arabic}
          </p>
          <figcaption className="mt-4 font-display text-lg italic text-cream/85">
            “{verses.iqra.translation}”
          </figcaption>
          <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">{verses.iqra.source}</p>
        </figure>

        {video && !failed && (
          <video
            ref={ref}
            src={video}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onLoadedData={onLoadedData}
            onError={onError}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-1000",
              ready ? "opacity-100" : "opacity-0"
            )}
          />
        )}
        {playing && (
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true" />
        )}
      </div>

      <div className="absolute top-14 -left-1 rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-16">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-steel opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-steel" />
          </span>
          Live online classes
        </p>
        <p className="mt-0.5 text-xs text-stone">Qualified, dedicated teachers</p>
      </div>

      <div className="absolute -right-1 -bottom-8 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl sm:-right-12">
        <p className="text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">Learn</p>
        <p className="mt-1 font-display text-lg">Tajweed · Hifz · Arabic</p>
        <p className="text-xs text-cream/60">Hadith · Fiqh · Character</p>
      </div>
    </div>
  );
}
