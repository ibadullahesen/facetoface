"use client";

/**
 * FaceToFace — Footer: sticky-bottom safe (parent uses mt-auto),
 * semantic, contact placeholders auto-hidden when empty.
 */

import { FOOTER_ABOUT, FOOTER_LINKS, NAV_LINKS, SITE, hasRealContact } from "@/config/site";
import { LogoFull } from "@/components/site/brand";
import { Link } from "@/lib/router";

export function Footer() {
  const contactReady = hasRealContact();
  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-[#05070f] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" ariaLabel="FaceToFace ana səhifə" className="w-fit rounded-xl">
              <LogoFull />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">{FOOTER_ABOUT}</p>
            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-xl text-sm font-semibold text-[#22d3ee] transition-colors hover:text-[#67e8f9]"
            >
              Google Play-də yüklə →
            </a>
          </div>

          {/* Main nav */}
          <nav aria-label="Alt naviqasiya — səhifələr">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Səhifələr</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.slice(1).map((item) => (
                <li key={item.href}>
                  <a href={`#${item.href}`} className="rounded text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Extra links */}
          <nav aria-label="Alt naviqasiya — hüquqi">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Resurslar</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={`#${item.href}`} className="rounded text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + ecosystem */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Əlaqə</h3>
            {contactReady ? (
              <ul className="space-y-2.5 text-sm text-slate-400">
                {SITE.contact.email && (
                  <li>
                    <a href={`mailto:${SITE.contact.email}`} className="rounded transition-colors hover:text-white">
                      {SITE.contact.email}
                    </a>
                  </li>
                )}
                {SITE.contact.supportEmail && (
                  <li>
                    <a href={`mailto:${SITE.contact.supportEmail}`} className="rounded transition-colors hover:text-white">
                      {SITE.contact.supportEmail}
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <p className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-xs leading-relaxed text-amber-200/80">
                Əlaqə məlumatları hazırlanır. Hal-hazırda suallar üçün{" "}
                <a href="#/contact" className="underline underline-offset-2 hover:text-amber-100">əlaqə səhifəsi</a>{" "}
                vasitəsilə müraciət edin.
              </p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-slate-500">{SITE.ecosystem.description}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {SITE.copyrightYear} {SITE.name}. Bütün hüquqlar qorunur.
          </p>
          <p className="text-xs text-slate-600">
            {SITE.name}, {SITE.ecosystem.name} layihələr ekosisteminin bir hissəsidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
