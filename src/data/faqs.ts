export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Landing page umumnya selesai dalam 5–7 hari kerja. Company profile 5–7 halaman membutuhkan 2–3 minggu. Keduanya tergantung pada kesiapan konten dan kecepatan feedback di sisi Anda.",
  },
  {
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer:
      "Belum. Domain dibeli atas nama Anda (sekitar Rp 150–300 ribu/tahun) dan saya bantu prosesnya. Untuk hosting, situs statis bisa di-hosting gratis di Cloudflare Pages atau Vercel — tanpa biaya bulanan.",
  },
  {
    question: "Saya belum punya konten dan foto, apakah bisa tetap dikerjakan?",
    answer:
      "Bisa. Struktur konten dan panduan foto akan disiapkan di awal, dan copywriting bisa diambil sebagai add-on. Sementara itu, slot foto memakai placeholder rapi sampai materi asli tersedia.",
  },
  {
    question: "Bagaimana sistem revisinya?",
    answer:
      "Setiap paket sudah termasuk 2–3 putaran revisi pada tahap desain dan pembangunan. Perubahan scope besar setelah desain disetujui akan dihitung sebagai pekerjaan tambahan, selalu disepakati dulu sebelum dikerjakan.",
  },
  {
    question: "Kenapa tidak pakai CMS yang berat saja?",
    answer:
      "Untuk kebutuhan company profile yang kontennya tidak berubah setiap hari, CMS justru menambah beban: pembaruan rutin, celah keamanan, dan biaya hosting. Pendekatan yang dipakai Heizuru menghasilkan situs yang lebih cepat dimuat, lebih aman, dan hampir bebas biaya operasional.",
  },
];