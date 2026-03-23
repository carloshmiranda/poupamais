import { MetadataRoute } from "next";

// Dynamic sitemap — add new pages here as they're created
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://poupamais.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-03-23",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
