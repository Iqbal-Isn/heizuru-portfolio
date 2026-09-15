export const SITE = {
  name: "Heizuru",
  title: "Heizuru — Jasa Pembuatan Website Company Profile & Landing Page",
  description:
    "Jasa pembuatan website company profile dan landing page yang cepat, SEO-friendly, dan fokus konversi. Skor performa tinggi, hasil tervalidasi alat audit independen.",
  url: "https://heizuru.id",
  email: "halo@heizuru.id",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  waMessage:
    "Halo Heizuru, saya ingin konsultasi pembuatan website untuk bisnis saya.",
};

export const waLink = (message = SITE.waMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/proses", label: "Proses" },
  { href: "/kontak", label: "Kontak" },
];
