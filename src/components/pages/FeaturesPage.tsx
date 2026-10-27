"use client";

/**
 * FaceToFace — FEATURES PAGE
 * Detailed feature list (confirmed vs planned) + phone visuals.
 */

import {
  UserRound, ImagePlus, Heart, MessageCircle, MapPin, Bell, Gift, Globe, Users, Sparkles, ArrowRight,
} from "lucide-react";
import { CONFIRMED_FEATURES, PLANNED_FEATURES } from "@/config/content";
import { Atmosphere, PhoneMockup, PlayStoreButton, Reveal, SectionHeading, Breadcrumbs, JsonLd } from "@/components/site/brand";
import { PAGE_META, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  UserRound, ImagePlus, Heart, MessageCircle, MapPin, Bell, Gift, Globe, Users,
};

export function FeaturesPage() {
  const meta = PAGE_META["/features"];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "İmkanlar", path: "/features" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="İMKANLAR"
            title={<>FaceToFace nə <strong className="ftf-gradient-text">edə bilir?</strong></>}
            description={meta.description}
          />
        </Reveal>

        {/* Confirmed features — alternating phone/text rows */}
        <div className="mt-16 space-y-16">
          {CONFIRMED_FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? Sparkles;
            const flip = i % 2 === 1;
            return (
              <Reveal key={f.id} delay={60}>
                <article
                  id={f.anchor}
                  className={`grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[direction:rtl]" : ""}`}
                >
                  <div className="max-lg:[direction:ltr] lg:[direction:ltr]">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2e7cf6]/25 to-[#8b5cf6]/25 ring-1 ring-[#2e7cf6]/30">
                      <Icon className="h-6 w-6 text-[#7dd3fc]" aria-hidden="true" />
                    </span>
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">{f.title}</h2>
                    <p className="max-w-lg text-base leading-relaxed text-slate-400">{f.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {f.id === "messaging" && (
                        <>
                          <span className="rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-3.5 py-1.5 text-xs text-[#67e8f9]">Real vaxt</span>
                          <span className="rounded-full border border-[#2e7cf6]/30 bg-[#2e7cf6]/10 px-3.5 py-1.5 text-xs text-[#93c5fd]">Şəxsi söhbətlər</span>
                        </>
                      )}
                      {f.id === "discover" && (
                        <>
                          <span className="rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-3.5 py-1.5 text-xs text-[#67e8f9]">Yaxınlıq</span>
                          <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3.5 py-1.5 text-xs text-[#c4b5fd]">Maraqlara görə</span>
                        </>
                      )}
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs text-emerald-300">✓ Cari versiyada mövcuddur</span>
                    </div>
                  </div>
                  <div className="mx-auto w-56 max-lg:[direction:ltr] sm:w-64 lg:w-72 lg:[direction:ltr]">
                    <PhoneMockup screen={f.screen ?? "heroScreen"} className={flip ? "" : "ftf-anim-float-slow"} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Planned features */}
        <Reveal className="mt-24">
          <div className="ftf-card p-8">
            <h2 className="text-xl font-bold text-slate-50">Planlaşdırılan imkanlar</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              Bunlar gələcək versiyalar üçün nəzərdə tutulub. İşlək imkan kimi təqdim olunmur —
              hazır olarkən rəsmi kanallarda elan olunacaq.
            </p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {PLANNED_FEATURES.map((p) => {
                const Icon = ICONS[p.icon] ?? Sparkles;
                return (
                  <li key={p.id} className="rounded-2xl border border-dashed border-slate-600/60 p-5">
                    <Icon className="mb-3 h-5 w-5 text-slate-400" aria-hidden="true" />
                    <h3 className="text-sm font-semibold text-slate-200">{p.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{p.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <PlayStoreButton source="features" />
        </Reveal>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "İmkanlar", path: "/features" }])} />
    </div>
  );
}
