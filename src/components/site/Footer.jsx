import Link from "next/link";
import { Facebook, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Logo } from "@/components/site/Logo";
import { programmes, verses } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  tiktok: FaTiktok,
};

function FooterColumn({ title, className, children }) {
  return (
    <div className={className}>
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-cream/70 transition-colors hover:text-cream">
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const { contact } = site;
  const whatsapp = whatsappLink();
  const socials = Object.entries(site.socials).filter(([, url]) => url);
  const hasContact = whatsapp || contact.email || contact.phone;

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pattern-on-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo tone="light" className="h-20" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A global e-learning platform for Muslims of all ages to learn, read, memorize, and live
              by the teachings of the Quran and the Prophet <span lang="ar">ﷺ</span>.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socials.map(([name, url]) => {
                  const Icon = socialIcons[name];
                  return (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold hover:text-gold-light"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <FooterColumn title="Academy">
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/programmes">Programmes</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/#how-it-works">How it works</FooterLink>
            <FooterLink href="/sponsor">Sponsor a student</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/enroll">Enroll</FooterLink>
          </FooterColumn>

          <FooterColumn title="Programmes">
            {programmes.map((p) => (
              <FooterLink key={p.slug} href={`/programmes/${p.slug}`}>
                {p.shortName}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Get in touch" className="col-span-2 lg:col-span-1">
            {whatsapp && (
              <li>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-cream/70 hover:text-cream">
                  <MessageCircle className="size-4 text-gold" /> WhatsApp
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-cream/70 hover:text-cream">
                  <Mail className="size-4 text-gold" /> {contact.email}
                </a>
              </li>
            )}
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-cream/70 hover:text-cream">
                  <Phone className="size-4 text-gold" /> {contact.phone}
                </a>
              </li>
            )}
            {!hasContact && <FooterLink href="/enroll">Send us a message</FooterLink>}
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <figure className="sm:text-right">
            <p lang="ar" dir="rtl" className="text-left text-xl text-gold-light/80 sm:text-right">
              {verses.tartil.arabic}
            </p>
            <figcaption className="mt-1 text-xs text-cream/60">
              “{verses.tartil.translation}” — {verses.tartil.source}
            </figcaption>
          </figure>
        </div>
      </div>
    </footer>
  );
}
