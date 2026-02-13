Dokter Khitan Pekanbaru — Website Landing Page (Next.js)

Ringkas

- Website landing page “Dokter Khitan Pekanbaru” dibangun dengan Next.js (App Router), React, dan Tailwind CSS v4.
- Desain mengikuti “Playful Landing Page” dengan warna utama salmon.
- Sudah terintegrasi animasi GSAP, WhatsApp booking, Google Maps, dan Instagram feed via Elfsight.

Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- GSAP v3 + @gsap/react (useGSAP, ScrollTrigger)
- Elfsight Instagram Feed Widget
- Next/Image dengan remotePatterns (Unsplash, Googleusercontent, randomuser.me, Instagram CDN)

Fitur Utama

- Hero image dari public (dr-sugeng.png) dengan animasi masuk.
- Booking form yang langsung menyusun pesan dan membuka WhatsApp.
- Bagian layanan (Services) dengan gambar dari folder public.
- Testimonial berfoto (randomuser.me) yang sudah diizinkan di next.config.ts.
- Google Maps iframe di footer.
- Instagram feed menggunakan Elfsight (lazy load).

Menjalankan Secara Lokal

- Prasyarat: Node.js 18+ dan npm.
- Instalasi dependency:
  - npm install
- Menjalankan dev server:
  - npm run dev
- Linting dan build produksi:
  - npm run lint
  - npm run build

Catatan Kualitas Kode

- TypeScript strict diaktifkan.
- ESLint aktif (konfigurasi Next core web vitals).
- Folder .trae sudah dikecualikan dari lint dan TypeScript.

Struktur Direktori Singkat

- src/app
  - layout.tsx, page.tsx, globals.css
- src/components
  - Header.tsx, Hero.tsx, Services.tsx, WhyChooseUs.tsx, StatsRibbon.tsx
  - Testimonials.tsx, BookingForm.tsx, Gallery.tsx, Footer.tsx
- public
  - dr-sugeng.png, Alisklamp.jpg, Stapler.png, Lem.png, E-Cauter.png

Konfigurasi Penting

- next.config.ts
  - Menambahkan domain gambar eksternal:
    - images.unsplash.com, randomuser.me, lh3.googleusercontent.com
    - scontent.cdninstagram.com (untuk kesiapan media Instagram)
- Tailwind v4
  - Menggunakan custom color variables (primary, secondary, accent, dll) di globals.css.

Integrasi WhatsApp (Booking Form)

- Lokasi: src/components/BookingForm.tsx
- Tombol “Kirim Pendaftaran” menyusun teks otomatis dari input dan membuka link wa.me dengan pre-filled message.

Animasi GSAP

- Hero.tsx menggunakan @gsap/react (useGSAP) untuk animasi badge, judul, deskripsi, gambar, dan doodle.
- Services.tsx menggunakan ScrollTrigger untuk animasi “reveal on scroll” pada kartu layanan.

Instagram Feed (Elfsight)

- Lokasi: src/components/Gallery.tsx
- Script dimuat menggunakan next/script dengan strategy “lazyOnload”.
- Cara ganti widget:
  - Ubah class elfsight-app-857cfd12-a1a9-4d67-8507-7fb3c9154878 menjadi ID milik Anda di Gallery.tsx.
  - Pastikan domain script Elfsight (static.elfsight.com) dapat diakses.

Menyesuaikan Gambar & Konten

- Ganti hero: public/dr-sugeng.png.
- Ganti metode layanan: public/Alisklamp.jpg, Stapler.png, Lem.png, E-Cauter.png.
- Sesuaikan teks di masing-masing komponen pada src/components.

Deployment

- Build produksi: npm run build
- Start server produksi: npm start
- Rekomendasi platform: Vercel, karena native untuk Next.js.
