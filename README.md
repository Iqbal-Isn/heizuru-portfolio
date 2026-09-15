# Heizuru - Website Agency & Web Development Service

Website resmi **Heizuru**, penyedia jasa pembuatan website *company profile*, *landing page*, dan *website custom*. Website ini dirancang khusus dengan performa tinggi, skor Lighthouse 100, dan berfokus pada kecepatan, SEO on-page, serta konversi pengunjung.

## 🚀 Fitur Utama

- **Performa Tinggi**: Skor Lighthouse sempurna (100) di semua kategori (Performance, Accessibility, Best Practices, SEO).
- **Desain Responsif**: Tampilan optimal di berbagai ukuran layar (mobile, tablet, desktop).
- **SEO Optimized**: Meta tag lengkap, Open Graph, dan struktur HTML semantik (schema markup, sitemap).
- **Cepat Dimuat**: Menggunakan arsitektur Astro untuk pengiriman HTML yang sangat ringan tanpa JavaScript berlebih.

## 💼 Layanan Kami

1. **Landing Page**
   Halaman tunggal yang dioptimasi untuk kampanye marketing, peluncuran produk, atau layanan spesifik guna memaksimalkan *conversion rate*.
2. **Company Profile**
   Website multi-halaman lengkap yang dirancang untuk membangun kredibilitas dan profesionalisme bisnis Anda.
3. **Website Custom**
   Pengembangan website dengan fitur khusus tingkat lanjut seperti integrasi *database*, sistem *payment gateway*, dan fitur *booking/reservasi*.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *tech stack* modern:

- [Astro v5](https://astro.build/) - Web framework super cepat.
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS *utility-first* untuk styling UI.
- [TypeScript](https://www.typescriptlang.org/) - Memberikan *type safety*.
- [Astro Icon](https://astro-icon.dev/) - Manajemen dan integrasi ikon yang ringan (menggunakan Phosphor Icons & FontAwesome).
- [@fontsource](https://fontsource.org/) - Digunakan untuk manajemen font (*Outfit* dan *JetBrains Mono*).

## 💻 Menjalankan Proyek Secara Lokal

Pastikan Anda sudah menginstal Node.js di sistem Anda.

1. **Clone repository ini**
   ```bash
   git clone <url-repository>
   cd heizuru
   ```

2. **Instal dependensi**
   Anda bisa menggunakan `npm`, `yarn`, atau `pnpm`:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development)**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` di browser Anda untuk melihat hasilnya.

4. **Build untuk Produksi (Production)**
   ```bash
   npm run build
   ```
   Perintah ini akan membuat versi optimasi (*static build*) di dalam folder `dist/`.

## 📂 Struktur Direktori Utama

- `src/components/` - Berisi komponen-komponen antarmuka (Header, Footer, FAQ, dll).
- `src/layouts/` - Templat layout dasar (BaseLayout).
- `src/pages/` - Halaman-halaman utama berbasis sistem routing Astro (`index.astro`, `layanan.astro`, dll).
- `src/data/` - Penyimpanan data statis (JSON dan TypeScript) untuk portofolio, testimoni, FAQ, dan paket harga.
- `src/styles/` - Berkas CSS global (Tailwind).
- `public/` - Berkas statis yang diakses secara langsung seperti *favicon*, logo, dan gambar-gambar portofolio.

---

*Versi 2026 — Dibuat dengan teliti di Indonesia.*
