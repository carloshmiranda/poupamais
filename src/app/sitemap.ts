import { MetadataRoute } from "next";

// Dynamic sitemap — add new pages here as they're created
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://poupamais.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-03-22",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bancos`,
      lastModified: "2026-03-22",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
