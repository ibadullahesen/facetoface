"use client";

/**
 * ============================================================
 *  FaceToFace — SHARED BRAND UI
 * ============================================================
 *  Logo, telefon maketi, atmosfera effektləri, düymələr,
 *  scroll-reveal və JSON-LD inject komponenti.
 * ============================================================
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { APP_SCREENS, type AppScreenKey } from "@/config/appScreens";
import { SITE } from "@/config/site";

/* ---------------------------------------------------------------- */
/*  Logo                                                            */
/* ---------------------------------------------------------------- */

export function LogoMark({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Rəsmi logo — public/images/brand/logo.png (app ikonası ilə eyni fayl) */}
      <img
        src="/images/brand/logo.png"
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain"
        draggable={false}
      />
    </span>
  );
}

export function LogoFull({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={36} />
      <span className={`font-bold tracking-tight ${compact ? "text-lg" : "text-xl"}`}>
        Face<span className="ftf-gradient-text">ToFace</span>
      </span>
    </span>
  );
}

/* ---------------------------------------------------------------- */
/*  Atmosphere — glows + particles (decorative, reduced-motion safe) */
/* ---------------------------------------------------------------- */

export function Atmosphere({ variant = "hero" }: { variant?: "hero" | "soft" | "cta" }) {
  const particles = useMemo(() => {
    const seed = variant.length * 7 + 3; // deterministic per variant
    return Array.from({ length: variant === "hero" ? 14 : 8 }, (_, i) => {
      const n = (i * seed * 9301 + 49297) % 233280;
      const rnd = n / 233280;
      const n2 = ((i + 5) * seed * 4021 + 7919) % 104729;
      const rnd2 = n2 / 104729;
      return {
        left: `${(rnd * 96 + 2).toFixed(1)}%`,
        size: 3 + rnd2 * 5,
        duration: 26 + rnd * 34,
        delay: -rnd * 40,
        bottom: `${(rnd2 * 30).toFixed(1)}%`,
      };
    });
  }, [variant]);

  const glow = variant === "hero"
    ? "bg-[radial-gradient(ellipse_at_top,rgba(46,124,246,0.22),transparent_55%)]"
    : variant === "cta"
      ? "bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.25),transparent_60%)]"
      : "bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.10),transparent_55%)]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${glow}`} />
      {variant === "hero" && (
        <>
          <div className="ftf-anim-pulse absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#2e7cf6]/15 blur-[120px]" />
          <div className="ftf-anim-pulse absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/15 blur-[130px] [animation-delay:2s]" />
          <div className="ftf-anim-pulse absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#22d3ee]/10 blur-[110px] [animation-delay:4s]" />
        </>
      )}
      {variant === "cta" && (
        <>
          <div className="ftf-anim-pulse absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-[#ec4899]/12 blur-[120px]" />
          <div className="ftf-anim-pulse absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#2e7cf6]/12 blur-[110px] [animation-delay:3s]" />
        </>
      )}
      {particles.map((p, i) => (
        <span
          key={i}
          className="ftf-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  PhoneMockup — Samsung Galaxy S26 Ultra style                    */
/*  Frame və screen ayrılıb: ekranı dəyişmək üçün yalnız            */
/*  src/config/appScreens.ts faylını yeniləmək kifayətdir.          */
/* ---------------------------------------------------------------- */

export function PhoneMockup({
  screen,
  className,
  priority = false,
}: {
  screen: AppScreenKey;
  className?: string;
  priority?: boolean;
}) {
  const { src, alt } = APP_SCREENS[screen];
  return (
    <div className={`relative ${className ?? ""}`} role="img" aria-label={alt}>
      {/* Ambient glow behind phone */}
      <div
        className="ftf-anim-float-slow absolute inset-4 rounded-[3rem] bg-gradient-to-br from-[#2e7cf6]/40 via-[#8b5cf6]/40 to-[#ec4899]/40 blur-2xl"
        aria-hidden="true"
      />
      {/* Titanium frame */}
      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-[#3d465f] via-[#12172b] to-[#2b3348] p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="rounded-[2.45rem] bg-[#05070f] p-[7px]">
          {/* Screen — keep frame separate from screenshot content */}
          <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-[#0b1026]">
            {/* @ts-ignore next/image unused: raw img keeps placeholder swap trivial */}
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Punch-hole camera (S26 Ultra style) */}
            <div
              className="absolute left-1/2 top-2.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/15"
              aria-hidden="true"
            >
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a2238]" />
            </div>
            {/* Glass reflection */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/[0.045] to-white/[0.10]"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute -right-[3px] top-[19%] h-16 w-[3px] rounded-r bg-[#3d465f]" aria-hidden="true" />
        <div className="absolute -right-[3px] top-[30%] h-10 w-[3px] rounded-r bg-[#3d465f]" aria-hidden="true" />
        <div className="absolute -left-[3px] top-[22%] h-8 w-[3px] rounded-l bg-[#3d465f]" aria-hidden="true" />
        <div className="absolute -left-[3px] top-[29%] h-12 w-[3px] rounded-l bg-[#3d465f]" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Buttons                                                         */
/* ---------------------------------------------------------------- */

export function PlayStoreButton({
  size = "lg",
  source = "header",
}: {
  size?: "md" | "lg";
  source?: string;
}) {
  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`ftf-btn-primary inline-flex items-center gap-3 rounded-2xl font-semibold text-white ${
        size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
      }`}
      data-cta={`google-play-${source}`}
    >
      <svg viewBox="0 0 24 24" width={size === "lg" ? 22 : 18} height={size === "lg" ? 22 : 18} fill="currentColor" aria-hidden="true">
        <path d="M3.6 1.8c-.4.2-.6.6-.6 1.1v18.2c0 .5.2.9.6 1.1l.1.1 10.2-10.2v-.2L3.7 1.7l-.1.1z" fill="#00D2FF" />
        <path d="M17.3 15.4l-3.4-3.4v-.2l3.4-3.4.1.1 4 2.3c1.2.7 1.2 1.8 0 2.4l-4 2.3-.1-.1z" fill="#FFCE00" />
        <path d="M17.4 15.3L13.9 12 3.6 22.2c.4.4 1 .5 1.7.1l12.1-6.9" fill="#FF3A44" />
        <path d="M17.4 8.7L5.3 1.8c-.7-.4-1.3-.3-1.7.1L13.9 12l3.5-3.3z" fill="#00F076" />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-normal opacity-85">Google Play-də əldə edin</span>
        <span className="mt-1">Tətbiqi yüklə</span>
      </span>
    </a>
  );
}

export function OutlineLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "ftf-btn-outline inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold text-slate-200";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <a href={`#${href}`} className={cls}>
      {children}
    </a>
  );
}

/* ---------------------------------------------------------------- */
/*  Scroll reveal wrapper (IntersectionObserver, no libraries)       */
/* ---------------------------------------------------------------- */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`ftf-reveal ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  JSON-LD injector (client-side; production should use metadata)  */
/* ---------------------------------------------------------------- */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.ftfJsonLd = "true";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [data]);
  return null;
}

/* ---------------------------------------------------------------- */
/*  Section heading + misc                                          */
/* ---------------------------------------------------------------- */

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      {kicker && (
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2e7cf6]/30 bg-[#2e7cf6]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#7dd3fc]">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true">/</span>}
          {i === items.length - 1 ? (
            <span aria-current="page" className="text-slate-300">{item.name}</span>
          ) : (
            <a href={`#${item.path}`} className="transition-colors hover:text-[#22d3ee]">
              {item.name}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
