# Jazeel Quran Academy

Marketing website for Jazeel Quran Academy — an online Quran and Islamic studies school.
Built with Next.js 15 (App Router), Tailwind CSS v4 and Framer Motion. No database or backend.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live

1. **Contact details** — fill in `contact` (WhatsApp, email, phone) and `socials` in
   `src/lib/site.js`. Empty values are hidden. The enrollment form sends via WhatsApp when a
   number is set, otherwise via email.
2. **Site URL** — set `NEXT_PUBLIC_SITE_URL` (e.g. `https://jazeelquranacademy.com`) so canonical
   URLs, the sitemap and social previews point at the right domain.

## Videos

Videos live in `public/videos/` (H.264 MP4 with a `.jpg` poster each) and are listed in
`src/lib/site.js`. A slot whose file is missing is hidden. Cards show only the poster until
played, so videos don't slow the page down. When adding new ones, convert to web-friendly MP4
first — iPhone `.MOV` files are usually HEVC, which some browsers can't play:

```bash
ffmpeg -i input.mov -vf scale=1280:-2 -c:v libx264 -crf 26 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 96k -movflags +faststart output.mp4
ffmpeg -ss 5 -i input.mov -frames:v 1 -vf scale=1280:-2 -q:v 4 output.jpg
```

## Brand

`public/brand/` holds SVGs traced from the official logo — `logo.svg` / `mark.svg` in navy for
light backgrounds and `-light` cream versions for dark ones. App icons are `src/app/icon.png` and
`src/app/apple-icon.png`. Brand colours are defined once in `src/app/globals.css`.

## Where things live

- `src/lib/content.js` — programme, subject, "What we offer" and testimonial copy
- `src/lib/site.js` — name, contact details, socials, videos, navigation
- `src/app/` — pages: home, `/about`, `/programmes`, `/programmes/[slug]`, `/enroll`
- `src/components/site/` — header, footer, sections, video cards, testimonials, enrollment form
