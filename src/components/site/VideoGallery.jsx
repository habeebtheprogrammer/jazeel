"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

function VideoModal({ video, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full text-cream/80 hover:bg-cream/10 hover:text-cream"
        >
          <X className="size-6" />
        </button>
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl bg-black"
        />
      </div>
    </div>
  );
}

// Poster-only until played, so the page never downloads video it doesn't show.
export function VideoCard({ video, label, className }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${video.title}`}
        style={{ aspectRatio: video.aspect }}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-ink"
      >
        <img
          src={video.poster}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Labelled tiles dim the poster so the label reads cleanly over busy frames. */}
        <span
          className={
            label
              ? "absolute inset-0 bg-ink/75 transition-colors group-hover:bg-ink/65"
              : "absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent"
          }
          aria-hidden="true"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
          <span className="relative flex size-16 items-center justify-center rounded-full bg-cream/95 text-navy shadow-xl transition-transform group-hover:scale-110">
            <span className="absolute inset-0 animate-ping rounded-full bg-cream/40" aria-hidden="true" />
            <Play className="relative ml-1 size-6 fill-current" />
          </span>
          {label && <span className="font-display text-xl text-cream">{label}</span>}
        </span>
        {video.duration && (
          <span className="absolute right-4 bottom-4 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur">
            {video.duration}
          </span>
        )}
      </button>
      {!label && (
        <figcaption className="mt-5 px-1">
          <span className="block font-display text-xl text-navy">{video.title}</span>
          {video.caption && <span className="mt-1 block leading-relaxed text-stone">{video.caption}</span>}
        </figcaption>
      )}
      {open && <VideoModal video={video} onClose={close} />}
    </figure>
  );
}
