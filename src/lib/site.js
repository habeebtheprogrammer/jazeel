// Central site configuration. Fill in the contact details before going live —
// anything left empty is simply hidden from the site.
export const site = {
  name: "Jazeel Quran Academy",
  shortName: "Jazeel",
  tagline: "Online Quran & Islamic Studies School",
  description:
    "Jazeel Quran Academy is an online Quran and Islamic studies school helping Muslims of all ages around the world learn, read, memorize, and live by the teachings of the Quran and the Prophet ﷺ.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  contact: {
    // International format without "+" or spaces, e.g. "2348012345678"
    whatsapp: "",
    email: "",
    phone: "",
  },

  socials: {
    instagram: "",
    facebook: "",
    youtube: "",
    tiktok: "",
  },

  // Files live in /public/videos. Slots whose file is missing are hidden.
  videos: {
    // Optional looping clip inside the hero arch; the Quran verse shows when unset.
    hero: null,
    classes: [
      {
        src: "/videos/class-arabic-letters.mp4",
        poster: "/videos/class-arabic-letters.jpg",
        title: "Learning the Arabic letters",
        caption: "A live Quran Foundations lesson on letter recognition and pronunciation.",
        duration: "2:16",
        aspect: "12 / 5",
      },
      {
        src: "/videos/class-reading-harakat.mp4",
        poster: "/videos/class-reading-harakat.jpg",
        title: "Reading words with harakat",
        caption: "Joining letters and reading words with their vowel marks, step by step.",
        duration: "0:57",
        aspect: "12 / 5",
      },
    ],
    testimonials: {
      src: "/videos/testimonials.mp4",
      poster: "/videos/testimonials.jpg",
      title: "Parent & student reviews",
      duration: "0:40",
      aspect: "1 / 1",
    },
  },
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/enroll", label: "Contact" },
];

export function whatsappLink(message) {
  if (!site.contact.whatsapp) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.contact.whatsapp}${text}`;
}
