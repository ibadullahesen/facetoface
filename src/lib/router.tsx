"use client";

/**
 * ============================================================
 *  FaceToFace — CLIENT-SIDE ROUTER (sandbox single-route mode)
 * ============================================================
 *  Bu sandbox-da yalnız "/" marşrutu istifadəçiyə görünür,
 *  ona görə çoxsəhifəli arxitektura hash-yönləndirmə ilə
 *  həyata keçirilir:  /#/features, /#/blog/..., /#/faq ...
 *
 *  ▶ PRODUCTION QURULUŞU:
 *  Deploy zamanı hər səhifəni real App Router marşrutuna köçürmək
 *  üçün README.md-də addım-addım təlimat var. Router API-si
 *  (navigate + useRoute) Next router ilə bir-bir əvəz oluna bilər.
 * ============================================================
 */

import { useCallback, useEffect, useState } from "react";

export interface RouteState {
  /** "/features", "/blog/slug", "/" ... */
  path: string;
  /** URL search params after "?" (məs. ?focus=discover) */
  query: URLSearchParams;
}

function parseHash(): RouteState {
  if (typeof window === "undefined") return { path: "/", query: new URLSearchParams() };
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [pathPart, queryPart] = raw.split("?");
  const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  return { path: path.replace(/\/+$/, "") || "/", query: new URLSearchParams(queryPart || "") };
}

const listeners = new Set<() => void>();

function notifyAll() {
  listeners.forEach((l) => l());
}

if (typeof window !== "undefined") {
  window.addEventListener("hashchange", () => {
    notifyAll();
    window.scrollTo({ top: 0, behavior: "auto" });
  });
}

/** Current route state; re-renders on navigation */
export function useRoute(): RouteState {
  const [state, setState] = useState<RouteState>(() =>
    typeof window === "undefined" ? { path: "/", query: new URLSearchParams() } : parseHash()
  );

  useEffect(() => {
    const update = () => setState(parseHash());
    listeners.add(update);
    update();
    return () => {
      listeners.delete(update);
    };
  }, []);

  return state;
}

/** Programmatic navigation — mirrors Next.js router.push semantics */
export function navigate(href: string) {
  if (typeof window === "undefined") return;
  const target = href.startsWith("#") ? href.slice(1) : href;
  window.location.hash = target;
}

/**
 * Anchor that behaves like a real <a href> for crawlers/SEO
 * but uses hash routing in the sandbox.
 */
export function Link({
  href,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const handle = useCallback(
    (e: React.MouseEvent) => {
      // External links keep native behaviour
      if (/^https?:\/\//.test(href)) return;
      e.preventDefault();
      navigate(href);
      onClick?.();
    },
    [href, onClick]
  );
  return (
    <a href={`#${href}`} onClick={handle} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

/**
 * In-page anchor scroll: if a URL contains "?focus=<id>",
 * scroll to the element with that id after render.
 */
export function useFocusAnchor(query: URLSearchParams) {
  useEffect(() => {
    const focus = query.get("focus");
    if (!focus) return;
    const el = document.getElementById(focus);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [query]);
}
