import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { formatPrice, plans, sessionLength } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingPlans({ className }) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-3", className)}>
      {plans.map((plan, i) => {
        const featured = plan.popular;
        const features = [
          "Personalized one-on-one Quran sessions",
          `${plan.classes} classes monthly`,
          `Each session: ${sessionLength}`,
        ];
        return (
          <Reveal key={plan.id} delay={i * 0.08} className="h-full">
            <article
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 sm:p-10",
                featured
                  ? "border-navy bg-navy text-cream shadow-[0_30px_60px_-30px_rgba(45,62,80,0.7)]"
                  : "border-line bg-white"
              )}
            >
              {featured && <div className="pattern-on-dark absolute inset-0" aria-hidden="true" />}
              {/* Badge slot is reserved on every card so the prices line up. */}
              <p className="relative flex h-6 items-center">
                {featured && (
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-[0.15em] text-ink uppercase">
                    Most popular
                  </span>
                )}
              </p>
              <h3 className={cn("relative mt-4 font-display text-2xl", featured ? "text-cream" : "text-navy")}>
                {plan.name}
              </h3>

              <p className="relative mt-8 flex items-baseline gap-2">
                <span className={cn("text-sm font-bold tracking-[0.15em]", featured ? "text-gold-light" : "text-bronze")}>
                  USD
                </span>
                <span className={cn("font-display text-6xl leading-none", featured ? "text-cream" : "text-navy")}>
                  {plan.price}
                </span>
                <span className={featured ? "text-cream/70" : "text-stone"}>/month</span>
              </p>
              <p className="relative mt-3 flex min-h-7 items-center gap-3 text-sm">
                {plan.was && (
                  <>
                    <s className={featured ? "text-cream/60" : "text-stone"}>{formatPrice(plan.was)}/month</s>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-bold",
                        featured ? "bg-gold/20 text-gold-light" : "bg-mist text-slate"
                      )}
                    >
                      Save {plan.save}
                    </span>
                  </>
                )}
              </p>

              <ul className={cn("relative mt-8 space-y-3 border-t pt-8", featured ? "border-cream/15" : "border-line")}>
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        featured ? "bg-gold text-ink" : "bg-navy text-gold-light"
                      )}
                    >
                      <Check className="size-3" />
                    </span>
                    <span className={featured ? "text-cream/90" : "text-navy"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-10">
                <Button asChild variant={featured ? "gold" : "default"} size="lg" className="w-full">
                  <Link href={`/enroll?plan=${plan.id}`}>
                    Choose plan <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
