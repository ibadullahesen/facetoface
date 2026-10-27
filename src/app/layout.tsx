import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Root metadata — homepage level. Per-page titles/descriptions are
 * managed in src/lib/seo.ts (PAGE_META) and updated client-side by
 * the shell. In production each route should export its own metadata.
 */
export const metadata: Metadata = {
  title: "FaceToFace — Sosial şəbəkə və yeni insanlarla tanışlıq",
  description:
    "FaceToFace haqqında məlumat əldə et, tətbiqin imkanlarını kəşf et və yeni insanlarla ünsiyyət qurmaq üçün rəsmi tətbiq səhifəsinə keç.",
  verification: {
    google: "eCiwKwC0TCcyq0YzMsFSPUqxkIten3AEANXi0120N8Y",
  },
  keywords: ["FaceToFace", "sosial şəbəkə", "tanışlıq tətbiqi", "AxtarGet", "İbadulla Həsənov", "Azərbaycan tətbiq"],
  authors: [{ name: SITE.founder.name }],
  creator: SITE.founder.name,
  publisher: SITE.name,
  applicationName: SITE.name,
  metadataBase: new URL(SITE.url),
  // favicon — Next.js src/app/icon.png + apple-icon.png fayllarından avtomatik yaradılır
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: SITE.url,
    siteName: SITE.name,
    title: "FaceToFace — Sosial şəbəkə və yeni insanlarla tanışlıq",
    description: SITE.shortDescription,
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630, alt: "FaceToFace — sosial şəbəkə tətbiqi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaceToFace — Sosial şəbəkə və yeni insanlarla tanışlıq",
    description: SITE.shortDescription,
    images: ["/images/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "/",
    languages: {
      az: "/",
      // ⚠️ EN/TR versiyaları hazırlandıqdan sonra hreflang əlavə olunur
      "x-default": "/",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070a18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
