"use client";

/**
 * FaceToFace — FOUNDER PAGE
 * Authentic, editorial biography. Only verified facts:
 * name İbadulla Həsənov, independent developer, FaceToFace creator, AxtarGet ecosystem.
 * No invented surname/education/awards/user counts.
 */

import { Smartphone, Code2, Compass, ShieldCheck, Quote } from "lucide-react";
import { SITE } from "@/config/site";
import { FOUNDER_BIO, FOUNDER_PRINCIPLES } from "@/config/content";
import { Atmosphere, Reveal, SectionHeading, Breadcrumbs, JsonLd, OutlineLink } from "@/components/site/brand";
import { PAGE_META, personJsonLd, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";

export function FounderPage() {
  const meta = PAGE_META["/founder"];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Qurucu", path: "/founder" }]} />

        {/* Identity card */}
        <Reveal>
          <div className="ftf-card relative overflow-hidden p-8 sm:p-10">
            <div className="ftf-glow-ring absolute -right-20 -top-20 h-56 w-56 rounded-full" aria-hidden="true" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              {SITE.founder.portrait ? (
                // Sahibkar portret təqdim edəndə avtomatik göstərilir
                <img
                  src={SITE.founder.portrait}
                  alt={`${SITE.founder.name} — FaceToFace qurucusunun portreti`}
                  className="h-24 w-24 rounded-3xl object-cover ring-1 ring-white/10"
                />
              ) : (
                <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2e7cf6] via-[#8b5cf6] to-[#ec4899] text-4xl font-extrabold text-white" aria-hidden="true">
                  İ
                </span>
              )}
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">{SITE.founder.name}</h1>
                <p className="mt-1.5 text-base text-[#67e8f9]">{SITE.founder.role} · {SITE.ecosystem.name}</p>
              </div>
            </div>
            <p className="relative mt-7 text-base leading-relaxed text-slate-300">{FOUNDER_BIO.intro}</p>
          </div>
        </Reveal>

        {/* Editorial biography */}
        <Reveal className="mt-12">
          <article className="space-y-6 text-base leading-relaxed text-slate-300">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50">
              FaceToFace-ın arxasındakı <span className="ftf-gradient-text">fikir</span>
            </h2>
            <p>{FOUNDER_BIO.motivation}</p>
            <p>
              İbadulla Həsənov rəqəmsal məhsullar və tətbiqlər üzrə işləyən müstəqil tərtibatçıdır. FaceToFace onun
              ən böyük ictimai layihəsidir: sıfırdan konsepsiya, interfeys, tətbiq kodu və dəstək — hamısı
              bir şəxsin uzunmüddətli vizyonu ətrafında qurulub. Müstəqil tərtibatçı kimi o, eyni vaxtda
              məhsul menecer, dizayner və mühəndir rolunu daşıyır; bu isə hər imkanın diqqətlə düşünülərək
              əlavə olunması deməkdir.
            </p>
            <p>
              Layihə {SITE.ecosystem.name} adlanan layihələr ekosisteminin bir hissəsidir. Ekosistem yanaşması
              FaceToFace-in tək başına deyil, strateji plan çərçivəsində inkişaf etdiyini bildirir: yeniləmələr
              ardıcıllıqla buraxılır, istifadəçi geri bildirişləri roadmap-a daxil edilir və texniki
              infrastruktur gələcək böyüməyə hesablanır.
            </p>
            <p>{FOUNDER_BIO.vision}</p>
          </article>
        </Reveal>

        {/* Principles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {FOUNDER_PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="ftf-card h-full p-6">
                <ShieldCheck className="mb-4 h-5 w-5 text-[#5eead4]" aria-hidden="true" />
                <h3 className="mb-2 text-sm font-semibold text-slate-100">{p.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quote */}
        <Reveal className="mt-14">
          <blockquote className="ftf-card relative p-8">
            <Quote className="mb-4 h-6 w-6 text-[#8b5cf6]" aria-hidden="true" />
            <p className="text-lg italic leading-relaxed text-slate-200">
              “Texnologiyanın ən yaxşı tərəfi insanları yaxınlaşdırmaqdır. FaceToFace məhz bunu —
              yeni tanışlıqları və real əlaqələri — asanlaşdırmaq üçün yaradılıb.”
            </p>
            <footer className="mt-4 text-sm text-slate-500">— {SITE.founder.name}, FaceToFace qurucusu</footer>
          </blockquote>
        </Reveal>

        {/* Editorial placeholders — owner must complete */}
        <Reveal className="mt-12">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold text-amber-200">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Redaksiya üçün açıq məqamlar (sahibkar təsdiqi gözləyir)
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-amber-100/70">
              <li>— Ailə adı, təhsil və peşəkar keçmiş (yalnız sahibkar təqdim edərsə əlavə olunacaq).</li>
              <li>— Layihə tarixlərinin dəqiq xronologiyası (il/ay baxımından).</li>
              <li>— Təsdiqlənmiş developer profilləri və digər layihələrə keçidlər.</li>
              <li>— Portret fotoqrafiyası (təqdim olunarsa səhifə avtomatik göstərir).</li>
            </ul>
          </div>
        </Reveal>

        {/* CTA row */}
        <Reveal className="mt-14">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              İbadulla Həsənovun yaratdığı platformanı sınamaq istəyirsən? FaceToFace Google Play-də səni gözləyir.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <OutlineLink href="/download">Tətbiqi yüklə</OutlineLink>
              <Link href="/blog/facetoface-development-story" className="inline-flex items-center gap-2 rounded-xl px-2 py-3.5 text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]">
                İnkişaf hekayəsini oxu →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Qurucu", path: "/founder" }])} />
    </div>
  );
}
