import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ebrima Sompo — Software Engineer",
    short_name: "Ebrima Sompo",
    description: "Software Engineer & UI/UX Designer based in The Gambia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0D12",
    theme_color: "#0B0D12",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
