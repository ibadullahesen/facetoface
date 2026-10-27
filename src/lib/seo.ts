/**
 * ============================================================
 *  FaceToFace — SEO HELPERS
 * ============================================================
 *  Mərkəzləşdirilmiş metadata registry + Schema.org JSON-LD
 *  generatorları. Bütün səhifələrin title/description/OG
 *  məlumatı burada saxlanılır.
 *
 *  ⚠️ Canonical URL-lar SITE.url-dən yaradılır — production
 *  domeni src/config/site.ts-də dəyişdirdikdən sonra bütün
 *  canonical-lar avtomatik düzəlir.
 * ============================================================
 */

import { SITE } from "@/config/site";

export const OG_IMAGE = `${SITE.url}/images/brand/og-image.png`;
export const LOGO_URL = `${SITE.url}/images/brand/logo.svg`;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

/** Bütün public səhifələrin unikal metası */
export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    path: "/",
    title: "FaceToFace — Sosial şəbəkə və yeni insanlarla tanışlıq",
    description:
      "FaceToFace haqqında məlumat əldə et, tətbiqin imkanlarını kəşf et və yeni insanlarla ünsiyyət qurmaq üçün rəsmi tətbiq səhifəsinə keç.",
  },
  "/about": {
    path: "/about",
    title: "Tətbiq haqqında — FaceToFace rəsmi səhifəsi",
    description:
      "FaceToFace sosial tətbiqinin məqsədi, imkanları və AxtarGet ekosistemi daxilindəki yeri haqqında ətraflı məlumat.",
  },
  "/features": {
    path: "/features",
    title: "İmkanlar — FaceToFace tətbiqinin funksiyaları",
    description:
      "Profillər, foto və video paylaşımlar, şəxsi yazışmalar, yaxınlıqdakı insanların kəşfi və digər FaceToFace imkanları ilə tanış olun.",
  },
  "/download": {
    path: "/download",
    title: "Tətbiqi yüklə — FaceToFace Android",
    description:
      "FaceToFace tətbiqini Google Play üzərindən Android telefonuna yüklə və yeni tanışlıqlara başla.",
  },
  "/founder": {
    path: "/founder",
    title: "Qurucu — FaceToFace-ın arxasındakı fikir: İbadulla Həsənov",
    description:
      "FaceToFace tətbiqinin qurucusu və AxtarGet layihələr ekosisteminin yaradıcısı İbadulla Həsənov haqqında məlumat.",
  },
  "/blog": {
    path: "/blog",
    title: "Xəbərlər və məqalələr — FaceToFace bloqu",
    description:
      "FaceToFace yenilikləri, sosial platformalar haqqında bələdçilər və layihənin inkişaf hekayəsi — rəsmi bloq.",
  },
  "/privacy": {
    path: "/privacy",
    title: "Məxfilik və təhlükəsizlik — FaceToFace",
    description:
      "FaceToFace tətbiqində məxfilik siyasəti, hesab təhlükəsizliyi, bloklama və şikayət mexanizmləri, hesabın silinməsi.",
  },
  "/terms": {
    path: "/terms",
    title: "İstifadə şərtləri — FaceToFace",
    description:
      "FaceToFace tətbiqindən istifadə qaydaları, istifadəçinin öhdəlikləri və məzmun siyasəti.",
  },
  "/contact": {
    path: "/contact",
    title: "Əlaqə və dəstək — FaceToFace",
    description:
      "FaceToFace dəstək komandası ilə əlaqə saxla: texniki dəstək, məxfilik sorğuları və geri bildiriş.",
  },
  "/faq": {
    path: "/faq",
    title: "Suallar və cavablar — FaceToFace",
    description:
      "FaceToFace tətbiqi haqqında ən çox verilən suallar: yükləmə, hesab, məxfilik və təhlükəsizlik.",
  },
};

export function metaFor(path: string): PageMeta {
  if (PAGE_META[path]) return PAGE_META[path];
  // Blog detail pages
  const blogPrefix = "/blog/";
  if (path.startsWith(blogPrefix)) {
    // resolved lazily in component to keep this file dependency-light
    return {
      path,
      title: "FaceToFace bloqu — məqalə",
      description: "FaceToFace rəsmi bloqundan məqalə.",
    };
  }
  return PAGE_META["/"];
}

export function canonical(path: string): string {
  return `${SITE.url}${path === "/" ? "" : path}`;
}

/* ------------------------------------------------------------------ */
/*  JSON-LD generators — yalnız yoxlanılmış dəyərlər istifadə olunur  */
/* ------------------------------------------------------------------ */

/** Organization + WebSite (sayt səviyyəsində, layout-da render olunur) */
export function orgJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.shortDescription,
    url: SITE.url,
    logo: LOGO_URL,
    founder: {
      "@type": "Person",
      name: SITE.founder.name,
      jobTitle: SITE.founder.role,
    },
  };
  // Yalnız təsdiqlənmiş linklər əlavə olunur
  if (SITE.socials.length > 0) {
    data.sameAs = SITE.socials.map((s) => s.url);
  }
  return data;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "az",
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

/** SoftwareApplication — Android tətbiqi (reytinq/endirmə UYDURULMUR) */
export function appJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "Android",
    description: SITE.shortDescription,
    url: SITE.url,
    offers: { "@type": "Offer", price: "0", priceCurrency: "AZN" },
    author: { "@type": "Person", name: SITE.founder.name },
    installUrl: SITE.playStoreUrl,
  };
}

/** Person — founder səhifəsi üçün (yalnız təsdiqlənmiş məlumat) */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder.name,
    jobTitle: SITE.founder.role,
    description:
      "FaceToFace tətbiqinin qurucusu və AxtarGet layihələr ekosisteminin yaradıcısı olan müstəqil tərtibatçı.",
    knowsAbout: ["Rəqəmsal məhsullar", "Mobil tətbiqlər", "Sosial platformalar"],
    nationality: "Azərbaycan",
  };
}

/** WebPage — ümumi səhifə */
export function webPageJsonLd(path: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical(path),
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    inLanguage: "az",
  };
}

/** FAQPage */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BlogPosting */
export function articleJsonLd(post: {
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    url: canonical(`/blog/${post.slug}`),
    mainEntityOfPage: canonical(`/blog/${post.slug}`),
    author: { "@type": "Person", name: SITE.founder.name, jobTitle: SITE.founder.role },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: LOGO_URL } },
    inLanguage: "az",
    image: OG_IMAGE,
  };
}

/** BreadcrumbList */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
