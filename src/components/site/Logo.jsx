import { cn } from "@/lib/utils";

// Traced from the official logo: navy for light backgrounds, cream for dark ones.
// Size it with a height class (e.g. "h-16"); width follows the aspect ratio.
export function Logo({ tone = "dark", className }) {
  return (
    <img
      src={tone === "light" ? "/brand/logo-light.svg" : "/brand/logo.svg"}
      alt="Jazeel Quran Academy"
      width={2346}
      height={1431}
      className={cn("h-14 w-auto", className)}
    />
  );
}

// The ج on its own, used as a decorative brand accent.
export function BrandMark({ tone = "dark", className }) {
  return (
    <img
      src={tone === "light" ? "/brand/mark-light.svg" : "/brand/mark.svg"}
      alt=""
      aria-hidden="true"
      width={1037}
      height={1431}
      className={cn("h-auto select-none", className)}
    />
  );
}
