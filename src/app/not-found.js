import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/site/Logo";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pattern-on-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center">
        <BrandMark className="w-14" />
        <p className="eyebrow mt-8">Page not found</p>
        <h1 className="mt-4 font-display text-5xl tracking-tight text-navy sm:text-6xl">
          This page has wandered off.
        </h1>
        <p className="mt-5 text-lg text-stone">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              Back to home <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/programmes">Our programmes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
