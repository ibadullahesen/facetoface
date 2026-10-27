"use client";

/**
 * ============================================================
 *  FaceToFace — SITE SHELL (entry point)
 * ============================================================
 *  Sandbox məhdudiyyəti: yalnız "/" marşrutu istifadəçiyə görünür.
 *  Bu səbəbdən çoxsəhifəli arxitektura hash-router ilə işləyir.
 *  Production-a keçid təlimatı: README.md → "Deploy: real marşrutlar".
 *
 *  Hər səhifə dəyişdikdə: document.title + meta description +
 *  canonical güncəllənir (SEO üçün minimal client metadata).
 * ============================================================
 */

import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useRoute, useFocusAnchor } from "@/lib/router";
import { metaFor, canonical } from "@/lib/seo";
import { orgJsonLd, websiteJsonLd } from "@/lib/seo";
import { BLOG_POSTS } from "@/config/content";

import { HomePage } from "@/components/pages/HomePage";
import { FeaturesPage } from "@/components/pages/FeaturesPage";
import { AboutPage, DownloadPage } from "@/components/pages/AboutDownloadPages";
import { FounderPage } from "@/components/pages/FounderPage";
import { BlogPage, BlogArticlePage } from "@/components/pages/BlogPages";
import { PrivacyPage, TermsPage, FaqPage } from "@/components/pages/LegalPages";
import { ContactPage, NotFoundPage } from "@/components/pages/ContactPage";

export default function Page() {
  const { path, query } = useRoute();
  useFocusAnchor(query);

  // Client-side metadata sync (per-route title/description/canonical)
  useEffect(() => {
    const known =
      ["/", "/features", "/about", "/download", "/founder", "/founder/ibadulla", "/blog", "/privacy", "/terms", "/faq", "/contact"].includes(path) ||
      (path.startsWith("/blog/") && BLOG_POSTS.some((p) => p.slug === path.replace("/blog/", "")));
    let meta = metaFor(path);
    const blogSlug = path.startsWith("/blog/") ? path.replace("/blog/", "") : null;
    if (blogSlug) {
      const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
      if (post) meta = { path, title: `${post.title}`, description: post.description };
    }
    if (!known) {
      meta = { path, title: "Səhifə tapılmadı — FaceToFace", description: meta.description };
    }
    document.title = meta.title;
    const set = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!el) {
        const isLink = selector.includes("link");
        el = document.createElement(isLink ? "link" : "meta") as HTMLMetaElement | HTMLLinkElement;
        if (isLink) (el as HTMLLinkElement).rel = "canonical";
        else el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "description");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    set('meta[name="description"]', "content", meta.description);
    set('link[rel="canonical"]', "href", canonical(meta.path));
  }, [path]);

  const render = () => {
    if (path === "/") return <HomePage />;
    if (path === "/features") return <FeaturesPage />;
    if (path === "/about") return <AboutPage />;
    if (path === "/download") return <DownloadPage />;
    if (path === "/founder") return <FounderPage />;
    if (path === "/founder/ibadulla") return <FounderPage />;
    if (path === "/blog") return <BlogPage />;
    if (path.startsWith("/blog/")) return <BlogArticlePage slug={path.replace("/blog/", "")} />;
    if (path === "/privacy") return <PrivacyPage />;
    if (path === "/terms") return <TermsPage />;
    if (path === "/faq") return <FaqPage />;
    if (path === "/contact") return <ContactPage />;
    return <NotFoundPage />;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" id="main">
        {render()}
      </main>
      <Footer />
      {/* Site-level JSON-LD (Organization + WebSite) — layout equivalent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
    </div>
  );
}
