import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://heizuru.id",
  integrations: [
    icon({
      include: { ph: ["*"], fa: ["whatsapp"] },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
