"use client";

/**
 * FaceToFace — HOME PAGE (minimalist)
 * Hero, 4 əsas imkan, şaquli ekran şousu, qurucu və final CTA.
 */

import {
  UserRound, ImagePlus, Heart, MessageCircle, MapPin, Pencil,
  Gift, ShieldCheck, ArrowRight, Sparkles, Smartphone, Compass,
} from "lucide-react";
import { CONFIRMED_FEATURES, FOUNDER_BIO } from "@/config/content";
import { SITE } from "@/config/site";
import { Atmosphere, PhoneMockup, PlayStoreButton, Reveal, SectionHeading, OutlineLink, JsonLd } from "@/components/site/brand";
import { appJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  UserRound, ImagePlus, Heart, MessageCircle, MapPin, Gift, ShieldCheck, Sparkles, Smartphone, Compass,
};

export function HomePage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      {/* Minimalist hero: qısa başlıq + yükləmə düyməsi + əsas ekran şəkli */}
      <section className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40" aria-labelledby="hero-title">
        <Atmosphere variant="hero" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
          <h1 id="hero-title" className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-50 sm:text-5xl xl:text-6xl">
            Yeni insanlarla tanış ol.{" "}
            <span className="ftf-gradient-text">Yeni hekayələr</span> paylaş.
          </h1>
          <div className="mt-8">
            <PlayStoreButton source="hero" />
          </div>
        </div>

        {/* Ana ekran şəkli + ətrafındakı üzən şəkillər */}
        <div className="relative mx-auto mt-12 flex max-w-6xl justify-center px-4 sm:mt-14 sm:px-6">
          <div className="relative w-64 sm:w-72 lg:w-[20rem]">
            <PhoneMockup screen="heroScreen" className="ftf-anim-float" priority />

            {/* Üzən şəkil 1 — Fikrini paylaş */}
            <div className="ftf-float-card ftf-anim-float-slow absolute -left-24 top-[14%] hidden items-center gap-2.5 rounded-2xl px-4 py-3 md:flex lg:-left-36" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#2e7cf6]/30 to-[#22d3ee]/30 ring-1 ring-[#22d3ee]/30">
                <MessageCircle className="h-4.5 w-4.5 text-[#7dd3fc]" />
              </span>
              <span className="text-sm font-semibold text-slate-100">Fikrini paylaş</span>
            </div>

            {/* Üzən şəkil 2 — Yorum yaz */}
            <div className="ftf-float-card ftf-anim-float-slow absolute -right-20 top-[30%] hidden items-center gap-2.5 rounded-2xl px-4 py-3 [animation-delay:1.2s] md:flex lg:-right-32" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6]/30 to-[#ec4899]/30 ring-1 ring-[#8b5cf6]/30">
                <Pencil className="h-4.5 w-4.5 text-[#c4b5fd]" />
              </span>
              <span className="text-sm font-semibold text-slate-100">Yorum yaz</span>
            </div>

            {/* Üzən şəkil 3 — Şəkil və video paylaş */}
            <div className="ftf-float-card ftf-anim-float-slow absolute -left-16 bottom-[16%] hidden items-center gap-2.5 rounded-2xl px-4 py-3 [animation-delay:2.4s] md:flex lg:-left-28" aria-hidden="true">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ec4899]/30 to-[#22d3ee]/30 ring-1 ring-[#ec4899]/30">
                <ImagePlus className="h-4.5 w-4.5 text-[#f9a8d4]" />
              </span>
              <span className="text-sm font-semibold text-slate-100">Video və şəkillər paylaş</span>
            </div>

            {/* Üzən şəkil 4 — Bəyən */}
            <div className="ftf-float-card ftf-anim-float-slow absolute -right-14 bottom-[6%] hidden items-center gap-2 rounded-2xl px-4 py-2.5 [animation-delay:3.2s] md:flex lg:-right-24" aria-hidden="true">
              <Heart className="h-4 w-4 fill-[#ec4899] text-[#ec4899]" />
              <span className="text-sm font-semibold text-slate-100">Bəyən</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== FEATURES ============================ */}
      <section className="relative py-20 sm:py-28" aria-labelledby="features-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              kicker="İMKANLAR"
              title={<span id="features-title">Tətbiqin<strong className="ftf-gradient-text"> imkanları</strong></span>}
              description="FaceToFace cari versiyasında sosial ünsiyyət üçün lazımlı olan hər şeyi təklif edir — hamısı sadə və aydın interfeysdə."
            />
          </Reveal>
          {/* Minimalist: yalnız 4 əsas imkan — qalanları /features səhifəsində */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONFIRMED_FEATURES.slice(0, 4).map((f, i) => {
              const Icon = ICONS[f.icon] ?? Sparkles;
              return (
                <Reveal key={f.id} delay={i * 70}>
                  <article className="ftf-card h-full p-6">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2e7cf6]/25 to-[#8b5cf6]/25 ring-1 ring-[#2e7cf6]/30">
                      <Icon className="h-6 w-6 text-[#7dd3fc]" aria-hidden="true" />
                    </span>
                    <h3 className="mb-2.5 text-lg font-semibold text-slate-100">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{f.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8 text-center">
            <Link href="/features" className="inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]">
              Bütün imkanları ətraflı gör <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== APP SHOWCASE (vertical scroll) ============ */}
      <section className="relative py-20 sm:py-28" aria-labelledby="showcase-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              kicker="TƏTBİQƏ BAX"
              title={<span id="showcase-title">Tətbiqin <strong className="ftf-gradient-text">ekranları</strong></span>}
              description="Aşağı sürüşdürdükcə tətbiqin real ekranlarını gör — hər birinin yanında nə edə bildiyini oxu."
            />
          </Reveal>
          <ShowcaseList />
        </div>
      </section>

      {/* ========================= FOUNDER ============================== */}
      <section className="relative py-20 sm:py-28" aria-labelledby="founder-title">
        <Atmosphere variant="soft" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                kicker="QURUCU"
                title={<span id="founder-title">FaceToFace-ın arxasındakı fikir: <strong className="ftf-gradient-text">İbadulla Həsənov</strong></span>}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>{FOUNDER_BIO.intro}</p>
                <p>{FOUNDER_BIO.motivation}</p>
              </div>
              <Link
                href="/founder"
                className="mt-7 inline-flex items-center gap-2 rounded-xl text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]"
              >
                Qurucu haqqında ətraflı oxu <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ftf-card relative overflow-hidden p-8">
              <div className="ftf-glow-ring absolute -right-16 -top-16 h-48 w-48 rounded-full" aria-hidden="true" />
              <div className="relative flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2e7cf6] to-[#ec4899] text-2xl font-bold text-white" aria-hidden="true">
                  İ
                </span>
                <div>
                  <p className="text-lg font-bold text-slate-50">{SITE.founder.name}</p>
                  <p className="text-sm text-slate-400">{SITE.founder.role}</p>
                </div>
              </div>
              <blockquote className="relative mt-6 border-l-2 border-[#22d3ee]/50 pl-5 text-sm italic leading-relaxed text-slate-300">
                “Məqsədim sadədir: yeni insanlarla tanışlığı asan, təhlükəsiz və keyfiyyətli etmək —
                Azərbaycandan çıxan texnoloji məhsul nümunəsi yaratmaqla.”
              </blockquote>
              <p className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3.5 py-1.5 text-xs text-[#c4b5fd]">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                {SITE.ecosystem.name} layihələr ekosistemi
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================= FINAL CTA ============================ */}
      <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="cta-title">
        <Atmosphere variant="cta" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 id="cta-title" className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-5xl">
              Yeni tanışlıqlar <span className="ftf-gradient-text">burada başlayır.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              FaceToFace-i Google Play-dən yüklə, profilini yarat və ilk söhbətini bu gün başlat.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PlayStoreButton source="final-cta" />
              <OutlineLink href="/about">Layihə haqqında öyrən</OutlineLink>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={appJsonLd()} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Showcase — şaquli sürüşdürmə qalereyası: telefon solda/sağda,      */
/*  yazı əks tərəfdə. Real skrinşotlar aşağı keçdikcə görünür.          */
/* ------------------------------------------------------------------ */

import type { AppScreenKey } from "@/config/appScreens";

function ShowcaseList() {
  const screens: {
    key: AppScreenKey;
    kicker: string;
    title: string;
    text: string;
    points: string[];
  }[] = [
    {
      key: "heroScreen",
      kicker: "ANA EKRAN",
      title: "Sosial lent",
      text: "İnsanların paylaşımlarını gəzərək yeni anları kəşf et — bəyən, şərh yaz və fikrini bölüş.",
      points: ["Fikrini paylaş", "Yorum yaz", "Bəyən və paylaş"],
    },
    {
      key: "discoverScreen",
      kicker: "KƏŞF ET",
      title: "Radar ilə insan tap",
      text: "AxtarTarget Ekosistemi (Radar) ilə qlobal və yaxınlıqda olan insanlarla qoşul — bir düymə ilə dost tap.",
      points: ["Qlobal axtarış", "Sənə ən yaxınlar", "Dost Tap düyməsi"],
    },
    {
      key: "chatScreen",
      kicker: "ÜNSİYYƏT",
      title: "Şəxsi yazışmalar",
      text: "Real vaxt mesajları ilə birbaşa söhbət — təhlükəsiz, sadə və məsafə göstəricisi ilə.",
      points: ["Real vaxt mesajları", "Məsafə göstəricisi", "Şəxsi söhbətlər"],
    },
    {
      key: "profileScreen",
      kicker: "PROFİL",
      title: "Sənin məkanın",
      text: "Profilin, paylaşımların və balansın bir yerdə — özünü istədiyin kimi təqdim et.",
      points: ["Balans və hədiyyələr", "Foto və yazı paylaşımları", "Şəxsi məlumatlar"],
    },
    {
      key: "menuScreen",
      kicker: "MENYU",
      title: "Hər şey əlin altında",
      text: "Bildirişlər, anonim link və ayarlar — hamısı tək tətbiq menyusunda.",
      points: ["Bildirişlər", "Anonim link", "Ümumi ayarlar"],
    },
  ];
  return (
    <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
      {screens.map((s, i) => {
        const flip = i % 2 === 1; // tək sıralarda telefon sağda
        return (
          <Reveal key={s.key} delay={40}>
            <article
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Telefon maketi */}
              <div className="mx-auto w-56 max-lg:[direction:ltr] sm:w-64 lg:w-72 lg:[direction:ltr]">
                <PhoneMockup screen={s.key} className={flip ? "" : "ftf-anim-float-slow"} />
              </div>
              {/* Yazı — telefonun sağ/sol tərəfində */}
              <div className="max-lg:[direction:ltr] max-lg:text-center lg:[direction:ltr]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2e7cf6]/30 bg-[#2e7cf6]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#7dd3fc]">
                  {s.kicker}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-lg max-lg:mx-auto text-base leading-relaxed text-slate-400">{s.text}</p>
                <ul className="mt-6 flex max-lg:flex-wrap max-lg:justify-center flex-col gap-2.5 text-sm text-slate-300">
                  {s.points.map((p) => (
                    <li key={p} className="flex max-lg:justify-center items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2e7cf6] to-[#22d3ee]" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
