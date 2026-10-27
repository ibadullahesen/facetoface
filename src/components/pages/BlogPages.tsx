"use client";

/**
 * FaceToFace — BLOG LIST + ARTICLE PAGES
 */

import { ArrowLeft, CalendarDays, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/config/content";
import { SITE } from "@/config/site";
import { Atmosphere, Reveal, SectionHeading, Breadcrumbs, JsonLd } from "@/components/site/brand";
import { PAGE_META, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";
import { NotFoundPage } from "@/components/pages/ContactPage";

function fmtDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("az-AZ", { day: "numeric", month: "long", year: "numeric" });
}

/* ---------------------------- BLOG LIST --------------------------- */

export function BlogPage() {
  const meta = PAGE_META["/blog"];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Bloq", path: "/blog" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="BLOQ"
            title={<>Xəbərlər və <strong className="ftf-gradient-text">məqalələr</strong></>}
            description={meta.description}
          />
        </Reveal>
        <div className="mt-12 space-y-5">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <article className="ftf-card p-7">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full border border-[#2e7cf6]/30 bg-[#2e7cf6]/10 px-3 py-1 font-semibold text-[#93c5fd]">{post.category}</span>
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{fmtDate(post.date)}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden="true" />{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold leading-snug text-slate-50">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[#67e8f9]">{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{post.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Müəllif: {SITE.founder.name}</span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 rounded-xl text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]">
                    Oxu <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- BLOG ARTICLE -------------------------- */

export function BlogArticlePage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;

  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <article className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Ana səhifə", path: "/" },
            { name: "Bloq", path: "/blog" },
            { name: post.category, path: `/blog/${post.slug}` },
          ]}
        />
        <Reveal>
          <header>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-[#2e7cf6]/30 bg-[#2e7cf6]/10 px-3 py-1 font-semibold text-[#93c5fd]">{post.category}</span>
              <time dateTime={post.date}>{fmtDate(post.date)}</time>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">{post.description}</p>
            <div className="mt-6 flex items-center gap-3 border-y border-white/[0.06] py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2e7cf6] to-[#ec4899] font-bold text-white" aria-hidden="true">İ</span>
              <div className="text-sm">
                <p className="font-semibold text-slate-200">{SITE.founder.name}</p>
                <p className="text-xs text-slate-500">{SITE.founder.role} · {SITE.name}</p>
              </div>
            </div>
          </header>
        </Reveal>

        {post.sections.map((sec, si) => (
          <Reveal key={sec.h2} delay={40}>
            <section className="mt-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50">{sec.h2}</h2>
              <div className="mt-4 space-y-4">
                {sec.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-base leading-relaxed text-slate-300">{p}</p>
                ))}
              </div>
              {sec.h3s?.map((sub) => (
                <div key={sub.h3} className="mt-6">
                  <h3 className="text-lg font-semibold text-slate-100">{sub.h3}</h3>
                  <div className="mt-3 space-y-4">
                    {sub.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-base leading-relaxed text-slate-300">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </Reveal>
        ))}

        {/* Related */}
        <Reveal className="mt-14">
          <aside className="ftf-card p-7">
            <h2 className="mb-4 text-lg font-bold text-slate-50">Əlaqəli məqalələr</h2>
            <ul className="space-y-3">
              {post.related
                .map((slug2) => BLOG_POSTS.find((p) => p.slug === slug2))
                .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p))
                .map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.04]">
                      <span className="text-sm font-medium text-slate-200 group-hover:text-[#67e8f9]">{p.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </Reveal>

        <Reveal className="mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Bütün məqalələr
          </Link>
        </Reveal>
      </article>
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Bloq", path: "/blog" }, { name: post.category, path: `/blog/${post.slug}` }])} />
    </div>
  );
}
