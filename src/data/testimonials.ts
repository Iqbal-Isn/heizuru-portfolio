export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bekerja dengan dia untuk project internal tim kami: komunikasinya jelas, hasilnya bisa diandalkan, dan tidak ada detail yang terlewat. Cara kerjanya rapi dari awal sampai akhir.",
    name: "Adhi Nugroho",
    role: "Senior Software Architect",
  },
  {
    quote:
      "Saya sering minta second opinion soal struktur dan optimasi performa. Analisisnya tajam dan selalu diberi alasan — bukan sekadar disuruh ganti tanpa penjelasan.",
    name: "Sinta Mahardika",
    role: "UI/UX Designer",
  },
  {
    quote:
      "Dia tipe yang lebih banyak mendengar dulu baru bertindak. Setelah lihat brief, kami dapat website yang benar-benar sesuai kebutuhan — bukan template asal jadi.",
    name: "Bambang Suryadi",
    role: "Konsultan Senior",
  },
];