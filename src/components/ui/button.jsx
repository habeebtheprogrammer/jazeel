import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-steel/40",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-cream shadow-[0_10px_30px_-14px_rgba(45,62,80,0.7)] hover:bg-slate hover:-translate-y-0.5",
        gold: "bg-gold text-ink hover:bg-gold-light hover:-translate-y-0.5",
        outline:
          "border border-navy/20 bg-transparent text-navy hover:border-navy/50 hover:bg-navy/5",
        light: "border border-cream/25 bg-cream/5 text-cream hover:bg-cream/15",
        ghost: "text-navy hover:bg-navy/5",
        link: "text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-[15px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
