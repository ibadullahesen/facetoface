"use client";

/**
 * FaceToFace — Header: sticky, glass, responsive, keyboard accessible.
 */

import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/config/site";
import { LogoFull, PlayStoreButton } from "@/components/site/brand";
import { useRoute, Link } from "@/lib/router";

export function Header() {
  const { path } = useRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (adjust-state-during-render pattern)
  const [prevPath, setPrevPath] = useState(path);
  if (prevPath !== path) {
    setPrevPath(path);
    if (open) setOpen(false);
  }

  // Escape closes the mobile menu (a11y)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    const base = href.split("?")[0].split("#")[0];
    return base === path;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "ftf-glass border-b border-white/[0.06] py-3 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.7)]" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" ariaLabel="FaceToFace ana səhifə" className="rounded-xl">
          <LogoFull />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Əsas naviqasiya" className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-[#22d3ee]"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <PlayStoreButton size="md" source="header" />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="ftf-mobile-menu"
            aria-label={open ? "Menyunu bağla" : "Menyunu aç"}
            onClick={() => setOpen((v) => !v)}
            className="ftf-btn-outline inline-flex h-11 w-11 items-center justify-center rounded-xl xl:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="ftf-mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobil naviqasiya" className="ftf-glass mx-4 mt-3 rounded-2xl border border-white/[0.06] p-3 sm:mx-6">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive(item.href) ? "bg-[#2e7cf6]/10 text-[#22d3ee]" : "text-slate-200 hover:bg-white/[0.05]"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="p-2 sm:hidden">
            <PlayStoreButton size="md" source="mobile-menu" />
          </div>
        </nav>
      </div>
    </header>
  );
}
