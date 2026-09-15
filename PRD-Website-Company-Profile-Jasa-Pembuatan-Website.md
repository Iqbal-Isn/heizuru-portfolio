# Product Requirements Document (PRD)

## Website Company Profile — Jasa Pembuatan Website (Landing Page & Company Profile)

**Versi Dokumen:** 1.0 (Static site, tanpa CMS — Astro JS)
**Tanggal:** 25 Agustus 2026
**Disusun oleh:** Heizuru
**Untuk:** Bisnis sendiri — jasa pembuatan website

> **Catatan asumsi:** Nama brand/usaha masih placeholder `Heizuru` — isi setelah ditentukan. Struktur 7 halaman & stack Astro JS tanpa CMS mengikuti standar kerja yang sudah ditetapkan di skill `company-profile-builder`.

---

## 1. Latar Belakang

Sebagai penyedia jasa pembuatan website yang fokus ke **company profile & landing page berorientasi performa dan konversi**, dibutuhkan website sendiri yang berfungsi sebagai:

- Etalase/portofolio kemampuan (showcase produk yang dijual)
- Alat kredibilitas untuk meyakinkan calon klien (UMKM, startup, personal brand)
- Sarana lead generation langsung (klien datang dari website ini sendiri, bukan cuma dari platform freelance)

Website ini sekaligus jadi **bukti nyata** (proof of work) — kalau website sendiri saja cepat, rapi, dan mengonversi, calon klien lebih percaya hasil kerja untuk mereka juga akan sama.

## 2. Tujuan Proyek

1. Membangun personal/company branding sebagai jasa pembuatan website yang kredibel dan profesional.
2. Menampilkan portofolio & studi kasus dari berbagai industri yang sudah/bisa ditangani.
3. Menjelaskan paket layanan secara jelas (apa yang didapat, harga jika ingin ditampilkan, proses kerja).
4. Menyediakan jalur kontak yang mudah untuk konversi jadi klien (WhatsApp, form).
5. Menjadi contoh nyata "produk sendiri" — performa tinggi, SEO baik, desain rapi.

## 3. Target Pengguna

| Segmen                              | Kebutuhan                                                             |
| ----------------------------------- | --------------------------------------------------------------------- |
| Pemilik UMKM                        | Cari jasa pembuatan website company profile dengan harga terjangkau   |
| Startup/personal brand              | Cari landing page untuk campaign/produk baru                          |
| Freelancer/profesional lain         | Cari jasa desain/dev untuk kebutuhan sendiri atau proyek klien mereka |
| Calon mitra (agency lain, referral) | Cek portofolio sebelum kerja sama/subkontrak                          |

## 4. Ruang Lingkup (Scope)

### 4.1 Termasuk dalam scope

- Desain & pengembangan website company profile **static** sebanyak **7 halaman** (rincian pada poin 5)
- Showcase portofolio dari berbagai industri (travel, mebel, konstruksi, klinik kecantikan, kursus, real estate, rental kendaraan, business consulting, dll)
- Integrasi kontak (WhatsApp Click-to-Chat, form inquiry via layanan pihak ketiga seperti Formspree/Web3Forms)
- Responsive design, dioptimasi maksimal untuk performa (sebagai bukti kemampuan)
- SEO on-page lengkap (meta title, meta description, sitemap.xml, schema markup)

### 4.2 Tidak termasuk (out of scope) — untuk versi awal

- CMS/Admin Dashboard (update konten manual via kode, konsisten dengan standar kerja sendiri)
- Sistem pembayaran/invoice online
- Portal klien (client area untuk tracking progres project)
- Blog/artikel rutin (bisa jadi fase 2 jika dirasa perlu untuk SEO jangka panjang)

## 5. Struktur Halaman (Sitemap) — 7 Halaman

1. **Beranda (Home)**
   - Hero section (value proposition: "Website company profile & landing page cepat, SEO-friendly, fokus konversi")
   - Ringkasan layanan (Company Profile / Landing Page)
   - Keunggulan (fokus performa, harga transparan, proses jelas, tech stack modern)
   - Highlight portofolio terbaik
   - Testimoni klien (jika sudah ada; jika belum, bisa ditunda dulu bagiannya)
   - CTA kontak/WhatsApp

2. **Tentang Saya/Kami**
   - Profil singkat (latar belakang, keahlian: Astro JS, React, Tailwind, dll)
   - Cara kerja/filosofi (kenapa fokus ke performa & konversi, bukan sekadar "website jadi")
   - Alasan memilih Astro JS/static site sebagai pendekatan utama

3. **Layanan & Paket**
   - Paket **Landing Page** (untuk campaign/produk tunggal): scope, estimasi harga, timeline
   - Paket **Company Profile** (5-7 halaman): scope, estimasi harga, timeline
   - Add-on (jika ada, mis. copywriting, optimasi SEO lanjutan, maintenance)

4. **Portofolio**
   - Showcase project per industri (bisa berupa studi kasus fiktif/template dulu sebelum ada klien asli, lalu diganti dengan project nyata)
   - Tiap portofolio: screenshot, industri, teknologi dipakai, hasil (mis. skor Lighthouse, waktu pengerjaan)

5. **Proses Kerja**
   - Alur kerja step-by-step (Requirement gathering → Desain → Development → Testing → Deploy)
   - Estimasi timeline umum per tipe project

6. **Testimoni** _(bisa dikosongkan dulu / diisi placeholder sampai ada testimoni asli)_
   - Review dari klien yang sudah pernah dibantu

7. **Kontak**
   - Form inquiry (jenis project, budget range, deskripsi kebutuhan singkat)
   - Nomor WhatsApp
   - Link ke portofolio platform lain (jika ada, mis. profil Fastwork/Projects.co.id)

## 6. Kebutuhan Fungsional

| ID   | Fitur                              | Deskripsi                                                  | Prioritas |
| ---- | ---------------------------------- | ---------------------------------------------------------- | --------- |
| F-01 | Landing page dinamis               | Konten hero, value proposition, CTA dapat diupdate         | High      |
| F-02 | Halaman layanan & paket            | Penjelasan paket Landing Page vs Company Profile           | High      |
| F-03 | Showcase portofolio                | Grid/list project dengan detail per industri               | High      |
| F-04 | Form inquiry                       | Data terkirim ke email/WA via layanan form pihak ketiga    | High      |
| F-05 | Integrasi WhatsApp                 | Tombol kontak cepat di berbagai halaman                    | High      |
| F-06 | Halaman proses kerja               | Visualisasi alur kerja step-by-step                        | Medium    |
| F-07 | Testimoni                          | Tampilan review klien (dapat kosong di awal)               | Medium    |
| F-08 | Skor performa sebagai social proof | Tampilkan badge/skor Lighthouse sendiri di halaman relevan | Medium    |

## 7. Kebutuhan Non-Fungsional

- **Performance:** Ini adalah produk yang sekaligus jadi bukti kemampuan — wajib skor Lighthouse ≥95 di semua kategori
- **Responsive:** Mobile-first, mengingat banyak calon klien akan cek dari HP setelah lihat portofolio di media sosial
- **SEO friendly:** Ditarget untuk keyword seperti "jasa pembuatan website company profile", "jasa landing page murah", dst — riset keyword lebih lanjut disarankan
- **Keamanan:** HTTPS/SSL, proteksi form dari spam
- **Kompatibilitas browser:** Chrome, Firefox, Safari, Edge versi terbaru
- **Branding konsisten:** Desain harus mencerminkan kualitas kerja — jangan sampai website sendiri kalah rapi dari yang dibuat untuk klien

## 8. Rekomendasi Tech Stack

| Layer                     | Teknologi                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| Framework                 | **Astro JS** (Static Site Generation)                                                    |
| Styling                   | Tailwind CSS                                                                             |
| Interaktivitas (opsional) | Astro Islands / React component (mis. filter portofolio per industri)                    |
| Konten                    | Astro Content Collections (Markdown/MDX) untuk data portofolio & testimoni               |
| Form inquiry              | Layanan pihak ketiga (mis. Formspree, Web3Forms)                                         |
| Hosting                   | Static hosting (Vercel/Netlify/Cloudflare Pages — gratis untuk tier awal, sesuai budget) |
| Domain & SSL              | Domain sendiri (mis. .com/.id) untuk kredibilitas                                        |

## 9. Alur Kerja Proyek (High-Level Timeline)

| Tahap | Aktivitas                                                                         | Estimasi Durasi |
| ----- | --------------------------------------------------------------------------------- | --------------- |
| 1     | Finalisasi branding, nama usaha, paket layanan & harga                            | 3-5 hari        |
| 2     | Desain UI/UX (wireframe & mockup 7 halaman)                                       | 1 minggu        |
| 3     | Development dengan Astro JS                                                       | 1–1,5 minggu    |
| 4     | Input konten (copywriting, portofolio, paket) & testing                           | 3–5 hari        |
| 5     | Optimasi performa & SEO (pastikan skor Lighthouse tinggi sebagai bukti kemampuan) | 2–3 hari        |
| 6     | Deployment & go-live                                                              | 1 hari          |

_Total estimasi: ± 3–4 minggu — bisa lebih cepat karena tidak ada proses approval bolak-balik dengan "klien" (diri sendiri)_

## 10. Deliverables

- Source code website Astro JS
- Website live di domain sendiri
- Dokumentasi skor performa (Lighthouse report) sebagai bahan promosi
- Struktur portofolio yang mudah ditambah project baru ke depannya

## 11. Kriteria Keberhasilan (Success Metrics)

- Website live, skor Lighthouse ≥95 di semua kategori
- Minimal 1 inquiry masuk melalui form/WhatsApp dalam bulan pertama setelah live
- Halaman layanan & paket cukup jelas sehingga calon klien tidak perlu banyak bertanya ulang soal scope dasar
- Portofolio menampilkan variasi industri yang meyakinkan kapabilitas lintas sektor

## 12. Asumsi & Ketergantungan

- Nama brand/usaha, harga paket, dan copywriting perlu difinalisasi sebelum masuk tahap development
- Portofolio awal bisa memakai project PRD yang sudah dibuat (travel, mebel, konstruksi, dll) sebagai studi kasus konsep, sambil menunggu project klien nyata untuk menggantikannya
- Testimoni asli menyusul setelah ada klien pertama — sementara bisa dikosongkan atau memakai kutipan dari dosen/rekan sebagai social proof awal (jika relevan & jujur)

## 13. Catatan Tambahan

Karena ini adalah website untuk bisnis sendiri, ini kesempatan bagus untuk benar-benar menerapkan semua checklist performa & konversi dari skill `company-profile-builder` secara maksimal — hasilnya sekaligus jadi contoh nyata (proof of work) untuk ditunjukkan ke calon klien.

---

_Dokumen ini dapat diperbarui begitu nama brand, harga paket, dan detail lain sudah difinalisasi._
