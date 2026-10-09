import { Amiri, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const title = `${site.name} | ${site.tagline}`;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "online Quran classes",
    "Quran academy",
    "learn Quran online",
    "Tajweed",
    "Hifz",
    "Quran memorization",
    "Islamic studies",
    "Arabic for kids",
    "Jazeel Quran Academy",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    url: "/",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#2d3e50",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} ${amiri.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
