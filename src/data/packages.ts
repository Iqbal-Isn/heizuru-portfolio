export interface PricingPackage {
  name: string;
  price: string;
  note: string;
  tagline: string;
  timeline: string;
  featured: boolean;
  features: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    name: "Landing Page",
    price: "Rp 600.000",
    note: "mulai dari",
    tagline: "Untuk kampanye, produk, atau layanan tunggal",
    timeline: "1–2 hari kerja",
    featured: false,
    features: [
      "1 halaman desain kustom, responsif penuh",
      "Gratis hosting dan domain .com 1 tahun",
      "Copywriting dasar & struktur konten konversi",
      "Tombol WhatsApp click-to-chat",
      "SEO on-page dasar (meta, OG image, sitemap)",
      "Bantuan peluncuran + koneksi domain",
      "2 putaran revisi",
    ],
  },
  {
    name: "Company Profile",
    price: "Rp 1.200.000",
    note: "mulai dari",
    tagline: "Website lengkap 5–7 halaman untuk kredibilitas bisnis",
    timeline: "3–5 hari kerja",
    featured: true,
    features: [
      "Semua yang ada di paket Landing Page",
      "Struktur multi-halaman (tentang, layanan, portofolio, kontak)",
      "Schema markup lengkap & sitemap otomatis",
      "Performa Lighthouse ≥ 95 di semua kategori",
      "Analitik terpasang & laporan performa",
      "3 putaran revisi",
    ],
  },
  {
    name: "Website Custom",
    price: "Hubungi",
    note: "penawaran khusus",
    tagline: "Untuk pengembangan fitur tingkat lanjut dan kustomisasi penuh",
    timeline: "menyesuaikan",
    featured: false,
    features: [
      "Pengembangan fitur dan alur khusus",
      "Integrasi Database dinamis",
      "Integrasi Payment Gateway otomatis",
      "Sistem Booking & Reservasi",
      "Koneksi dengan API / layanan eksternal",
      "Scope, fitur & harga dirancang bersama",
    ],
  },
];
