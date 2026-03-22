import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

export const metadata: Metadata = {
  title: "PoupaMais",
  description: "Plataforma portuguesa de comparação e educação financeira — ajudamos os 44% que nunca comparam produtos financeiros a tomar decisões mais inteligentes",
  metadataBase: new URL("https://poupamais.vercel.app"),
  verification: {
    google: "", // Google Search Console
  },
  openGraph: {
    title: "PoupaMais",
    description: "Plataforma portuguesa de comparação e educação financeira — ajudamos os 44% que nunca comparam produtos financeiros a tomar decisões mais inteligentes",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "PoupaMais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PoupaMais",
    description: "Plataforma portuguesa de comparação e educação financeira — ajudamos os 44% que nunca comparam produtos financeiros a tomar decisões mais inteligentes",
    images: ["/api/og"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "PoupaMais",
      url: "https://poupamais.vercel.app",
      description: "Plataforma portuguesa de comparação e educação financeira — ajudamos os 44% que nunca comparam produtos financeiros a tomar decisões mais inteligentes",
    },
    {
      "@type": "WebSite",
      name: "PoupaMais",
      url: "https://poupamais.vercel.app",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
