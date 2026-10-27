"use client";

/**
 * FaceToFace — ABOUT PAGE (+ DOWNLOAD PAGE)
 */

import { Target, Layers, Globe, ShieldCheck, ArrowRight, Smartphone, Download, CheckCircle2 } from "lucide-react";
import { SITE } from "@/config/site";
import { CONFIRMED_FEATURES } from "@/config/content";
import { Atmosphere, Reveal, SectionHeading, Breadcrumbs, PlayStoreButton, PhoneMockup, JsonLd } from "@/components/site/brand";
import { PAGE_META, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";

/* ------------------------------ ABOUT ---------------------------- */

export function AboutPage() {
  const meta = PAGE_META["/about"];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Tətbiq haqqında", path: "/about" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="HAQQINDA"
            title={<>FaceToFace <strong className="ftf-gradient-text">nə üçün yaradılıb?</strong></>}
            description={SITE.shortDescription}
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="space-y-6 text-base leading-relaxed text-slate-300">
            <p>
              FaceToFace, {SITE.founder.name} tərəfindən hazırlanmış Android sosial şəbəkə tətbiqidir və
              onun {SITE.ecosystem.name} layihələr ekosisteminin bir hissəsidir. Tətbiqin ideyası adi bir
              ehtiyacla başlayıb: insanlar mövcud dairələrində ünsiyyət saxlaya bilsələr də, yeni tanışlıq
              qurmaq üçün rahat, təhlükəsiz və yerli dildə çalışan bir platforma yox idi.
            </p>
            <p>
              Bu boşluğu doldurmaq üçün FaceToFace tanışlığı və paylaşımı bir yerdə birləşdirir. İstifadəçi
              profili yaradır, foto və video paylaşır, başqalarının məzmununa reaksiya verir, şəxsi yazışır
              və eyni zamanda yaxınlığındakı və ya maraqlarına uyğun insanları kəşf edir. Beləliklə,
              platforma həm məzmun şəbəkəsi, həm də tanışlıq vasitəsi kimi işləyir.
            </p>
            <p>
              Layihə müstəqil tərtibatçı tərəfindən inkişaf etdirilir. Bu, hər imkanın diqqətlə prioritetləşdirildiyi
              deməkdir: cari versiyada yalnız gündəlik istifadədə real dəyər verən funksiyalar var,
              gələcək planlar isə açıq şəkildə “planlaşdırılır” kimi qeyd olunur. Dürüst yanaşma —
              məhsulun əsas prinsipidir.
            </p>
          </div>
        </Reveal>

        {/* Mission pillars */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Target, title: "Missiya", text: "İnsanları bir araya gətirmək və ünsiyyəti asanlaşdırmaq — hər kəs üçün sadə və təhlükəsiz şəkildə." },
            { icon: Layers, title: "Ekosistem", text: `${SITE.ecosystem.name} daxilində inkişaf edən məhsul: vahid strategiya, uzunmüddətli dəstək, ardıcıl yeniləmələr.` },
            { icon: Globe, title: "Dillər", text: "Əsas dil Azərbaycan dilidir. İngilis və türk dilləri üçün dəstək gələcək versiyalarda planlaşdırılır." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="ftf-card h-full p-6">
                <c.icon className="mb-4 h-6 w-6 text-[#7dd3fc]" aria-hidden="true" />
                <h3 className="mb-2 font-semibold text-slate-100">{c.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quick links */}
        <Reveal className="mt-14">
          <div className="ftf-card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-50">Daha çox öyrənmək istəyirsən?</h2>
              <p className="mt-1.5 text-sm text-slate-400">İmkanları, qurucunu və təhlükəsizlik yanaşmasını nəzərdən keçir.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/features" className="ftf-btn-outline inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200">
                İmkanlar <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/founder" className="ftf-btn-outline inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200">
                Qurucu <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/privacy" className="ftf-btn-outline inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200">
                Məxfilik <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Tətbiq haqqında", path: "/about" }])} />
    </div>
  );
}

/* ----------------------------- DOWNLOAD --------------------------- */

export function DownloadPage() {
  const meta = PAGE_META["/download"];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="cta" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Yüklə", path: "/download" }]} />
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionHeading
              align="left"
              kicker="YÜKLƏMƏ"
              title={<>FaceToFace-i <strong className="ftf-gradient-text">yüklə</strong></>}
              description="Tətbiq hazırda Android üçün Google Play üzərindən mövcuddur. Quraşdırma pulsuzdur və bir neçə saniyə çəkir."
            />
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PlayStoreButton source="download-page" />
            </div>
            <ul className="mt-10 space-y-3 text-sm text-slate-300">
              {[
                "Android 7.0 və yuxarı versiyalar üçün uyğun",
                "Quraşdırma pulsuzdur — əsas imkanlar pulsuz istifadə olunur",
                "Hesab birbaşa tətbiq daxilində yaradılır",
                "Yalnız rəsmi Google Play linkindən yükləyin",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-xs leading-relaxed text-amber-200/80">
              ⚠️ Sahibkar qeydi: aşağıdakı düymənin Google Play linki hazırda yer tutucudur.
              Real tətbiq linki <code className="rounded bg-black/30 px-1">src/config/site.ts</code> faylında
              (“playStoreUrl”) əvəz olunmalıdır.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto w-60 sm:w-72">
            <PhoneMockup screen="heroScreen" className="ftf-anim-float" />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="ftf-card p-8">
            <h2 className="mb-5 flex items-center gap-2.5 text-lg font-bold text-slate-50">
              <Smartphone className="h-5 w-5 text-[#7dd3fc]" aria-hidden="true" />
              Quraşdıqdan sonra nə edim?
            </h2>
            <ol className="grid gap-4 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
              <li>1. Tətbiqi açıb hesab yarat və ya daxil ol.</li>
              <li>2. Profilini foton və maraq sahələrinlə tamamla.</li>
              <li>3. Lentə ilk paylaşımını göndər.</li>
              <li>4. Kəşf bölməsində yeni insanlarla tanış ol.</li>
            </ol>
            <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Yükləmə problem yaradarsa{" "}
              <Link href="/contact" className="text-[#22d3ee] underline underline-offset-2">dəstək səhifəmizə</Link> müraciət edin.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center text-sm text-slate-500">
          Cari versiyada {CONFIRMED_FEATURES.length} əsas imkan mövcuddur —{" "}
          <Link href="/features" className="text-[#22d3ee] hover:underline">baxıb tanış ol</Link>.
        </Reveal>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Yüklə", path: "/download" }])} />
    </div>
  );
}
