# FaceToFace — Rəsmi Veb-sayt

FaceToFace sosial şəbəkə tətbiqinin rəsmi təqdimat saytı. Azərbaycan dilində, kinematik
qaranlıq dizayn, texniki SEO strukturu və mərkəzləşdirilmiş məzmun idarəetməsi ilə.

**Texnologiya:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Lucide icons

---

## 1. Tez başlanğıc

```bash
bun install        # asılılıqları quraşdır
bun run dev        # dev server (port 3000)
bun run lint       # kod keyfiyyəti yoxlaması
```

> Qeyd: bu sandbox mühitində avtomatik dev server işləyir (`bun run dev` əl ilə
> başlatmağa ehtiyac yoxdur). Production build üçün: `bun run build` — README-nin
> 6-cı bölməsinə baxın.

---

## 2. Marşrut arxitekturası

**Sandbox məhdudiyyəti:** bu mühitdə yalnız `/` marşrutu xarici istifadəçiyə görünür.
Buna görə çoxsəhifəli arxitektura hash-router ilə həyata keçirilir
(`src/lib/router.tsx`) — bütün səhifələr `/` daxilində render olunur:

| Hash ünvanı | Səhifə | Komponent |
|---|---|---|
| `#/` | Ana səhifə | `HomePage` |
| `#/features` | İmkanlar | `FeaturesPage` |
| `#/about` | Tətbiq haqqında | `AboutPage` |
| `#/download` | Yükləmə | `DownloadPage` |
| `#/founder` (+ `#/founder/ibadulla`) | Qurucu | `FounderPage` |
| `#/blog` | Bloq siyahısı | `BlogPage` |
| `#/blog/<slug>` | 3 məqalə | `BlogArticlePage` |
| `#/privacy` | Məxfilik və təhlükəsizlik | `PrivacyPage` |
| `#/terms` | İstifadə şərtləri | `TermsPage` |
| `#/faq` | Suallar (FAQPage JSON-LD) | `FaqPage` |
| `#/contact` | Əlaqə və dəstək | `ContactPage` |
| istənilən başqa | 404 | `NotFoundPage` |

**SEO qeydi:** hash-ünvanlar axtarış sistemləri üçün ideal deyil. Production-a keçid
addımları bölmə 6-da. Hər səhifənin title/description/canonical-ı marşrut
dəyişdikdə avtomatik yenilənir (`src/app/page.tsx`), JSON-LD səhifə daxilində
inject olunur (Organization, WebSite, SoftwareApplication, Person, BlogPosting,
FAQPage, BreadcrumbList).

---

## 3. Mərkəzləşdirilmiş konfiqurasiya (sahibkar üçün)

**Bütün yer tutucu dəyərlər üç fayldadır:**

### `src/config/site.ts` — brend, linklər, əlaqə
- `SITE.url` — ⚠️ real istehsalat domeni ilə əvəz olunmalı
- `SITE.playStoreUrl` — ✅ təsdiqlənmiş Google Play linki: `com.axtarget.facetoface`
- `SITE.contact.email / supportEmail` — ⚠️ dəstək e-poçtları (null = UI-da gizlədilir)
- `SITE.socials` — ⚠️ yalnız təsdiqlənmiş sosial profillər əlavə olunur
- `SITE.founder.portrait` — portret şəkli (null = İ hərfi ilə avatar göstərilir)

### `src/config/appScreens.ts` — telefon ekranları (SINGLE SOURCE OF TRUTH)
Bütün `PhoneMockup` komponentləri ekranları YALNIZ buradan alır:

```ts
APP_SCREENS = {
  heroScreen:      "/images/app-screens/hero.svg",
  feedScreen:      "/images/app-screens/feed.svg",
  chatScreen:      "/images/app-screens/chat.svg",
  discoverScreen:  "/images/app-screens/discover.svg",
  profileScreen:   "/images/app-screens/profile.svg",
}
```

**Real skrinşot ilə əvəz etmək:**
1. Skrinşotu `public/images/app-screens/` qovluğuna kopyalayın (məs. `hero.png`, 1080×2340).
2. `appScreens.ts` daxilində uyğun dəyəri dəyişin.
3. Bitdi — maket (frame) dəyişmir, yalnız ekran dəyişir; aspect nisbəti avtomatik qorunur (`object-cover`).

### `src/config/content.ts` — məzmun
- `CONFIRMED_FEATURES` — tətbiqdə faktiki mövcud imkanlar
- `PLANNED_FEATURES` — planlaşdırılanlar (ayrı etiketlə göstərilir, heç vaxt işlək kimi təqdim olunmur)
- `HOW_IT_WORKS`, `FAQS`, `BLOG_POSTS`, `FOUNDER_BIO`, `FOUNDER_PRINCIPLES`

---

## 4. SEO infrastrukturu

| Fayl | Məqsəd |
|---|---|
| `src/lib/seo.ts` | Metadata registry (PAGE_META), JSON-LD generatorları, canonical |
| `public/robots.txt` | Crawl qaydaları (⚠️ real domen yazıldıqdan sonra sitemap URL-i yeniləyin) |
| `public/sitemap.xml` | 13 canonical, indexable URL |
| `public/llms.txt` | AI-əlçatan məzmun təsviri (isteğə bağlı; indeksləmə zəmanəti deyil) |
| `public/images/brand/og-image.png` | Open Graph şəkli (1200×630) |

Strukturlaşdırılmış məlumat:
- **Organization** + **WebSite** — bütün səhifələrdə (site səviyyəsi)
- **SoftwareApplication** — ana səhifə (reytinq/endirmə rəqəmi UYDURULMAYIB)
- **Person** — founder səhifəsi (yalnız təsdiqlənmiş məlumat)
- **BlogPosting** — hər blog məqaləsində (müəllif, tarixlər)
- **FAQPage** — /faq (səhifədə real görünən suallarla üst-üstə düşür)
- **BreadcrumbList** — alt səhifələrdə

**Hreflang:** az = default. EN/TR versiyaları hazırlandıqdan sonra
`layout.tsx → alternates.languages` bölməsinə əlavə olunmalıdır.

---

## 5. Sahibkar üçün FƏALİYYƏT SİYAHISI (nəşrə qədər)

1. ☐ `SITE.url` — real domen (məs. `https://facetoface.az`) → sonra `robots.txt`, `sitemap.xml`, `llms.txt` içindəki `facetoface.example.az` də əvəz edin
2. ✅ `SITE.playStoreUrl` — təsdiqlənmiş Google Play linki əlavə olundu (`com.axtarget.facetoface`)
3. ☐ `SITE.contact.email` / `supportEmail` — dəstək ünvanları (kontakt formasının backend-i üçün də lazımdır)
4. ☐ `SITE.socials` — rəsmi sosial profil linkləri (uydurulmuş profil YOXDUR)
5. ☐ Founder bio qırmızı xəttlərin təsdiqi: `FOUNDER_BIO` + `FounderPage`-dəki “Redaksiya üçün açıq məqamlar” bloku (ailə adı, təhsil, xronologiya, developer profilləri, portret)
6. ☐ Məxfilik siyasəti və İstifadə şərtləri: hüquqi DRAFT-ların yoxlanması/imzalanması (E2E şifrələmə və ya sertifikat iddiası ƏLAVƏ OLUNMAYIB)
7. ✅ Real Android skrinşotları əvəz edildi (home-feed, discover-radar, chat, profile, menu). Yenisini əvəz etmək üçün `public/images/app-screens/` qovluğundakı faylın üzərinə yazın
8. ✅ Rəsmi tətbiq logosu inteqrasiya olundu: `public/images/brand/logo.png` (header/footer), `src/app/icon.png` (favicon), `src/app/apple-icon.png` (iOS), `public/images/brand/og-image.png` (sosial paylaşım önizləməsi). Yeniləmək üçün həmin faylların üzərinə yazın
9. ☐ Kontakt formasının göndərmə backend-i (hazırda yalnız valyasiya işləyir, düzgün “konfiqurasiya edilməyib” mesajı göstərir)

---

## 6. Deploy: real marşrutlara keçid

Sandbox-da hash-router ilə işləyən səhifələri production-da real App Router
marşrutlarına çevirmək üçün:

1. `src/components/pages/*` fayllarındakı hər səhifə komponentini
   `src/app/<route>/page.tsx` kimi sarın:
   ```
   src/app/page.tsx              → HomePage
   src/app/features/page.tsx     → <FeaturesPage />
   src/app/about/page.tsx        → <AboutPage />
   src/app/download/page.tsx     → <DownloadPage />
   src/app/founder/page.tsx      → <FounderPage />
   src/app/blog/page.tsx         → <BlogPage />
   src/app/blog/[slug]/page.tsx  → <BlogArticlePage slug={params.slug} />
   src/app/privacy/page.tsx      → <PrivacyPage />
   src/app/terms/page.tsx        → <TermsPage />
   src/app/faq/page.tsx          → <FaqPage />
   src/app/contact/page.tsx      → <ContactPage />
   src/app/not-found.tsx         → <NotFoundPage />
   ```
2. Hər marşrut faylında `export const metadata = generateMetadata(path)` əlavə edin
   (`src/lib/seo.ts` → `PAGE_META` hazır mənbədir). JSON-LD script-lərini server
   tərəfdə render edin (hazırda client-side inject olunur).
3. `src/lib/router.tsx`-dəki `Link` komponentini Next `<Link>` ilə əvəz edin
   (API uyğundur).
4. `bun run build && bun run start` ilə production build yoxlayın.
5. Canonical/hreflang: `SITE.url` real domeni yazıldıqdan sonra metadata
   avtomatik düzəlir.

---

## 7. Google Search Console & Bing Webmaster (nəşrdən sonra)

1. Domeni deploy edin və HTTPS-i yoxlayın.
2. **Google Search Console:** Property əlavə edin (DNS TXT vasitəsilə domain verification tövsiyə olunur) → `https://<domain>/sitemap.xml` ünvanını Sitemaps bölməsində göndərin → URL Inspection ilə əsas səhifələr üçün indeksləmə sorğusu verin.
3. **Bing Webmaster Tools:** GSC-dən import etmək mümkündür → eyni şəkildə sitemap göndərin.
4. Rich Results Test (search.google.com/test/rich-results) ilə JSON-LD yoxlayın.
5. 2–4 həftə ərzində Performance hesabatında sorğuları izləyin.

Qeyd: sitemap mövcudluğu indekslənməyə zəmanət vermir; indeksləmə axtarış
sisteminin qərarıdır.

---

## 8. Performans və əlçatanlıq qeydləri

- Animasiyalar yalnız CSS transform/opacity istifadə edir (Framer Motion yoxdur)
- `prefers-reduced-motion` dəstəyi: bütün dekorativ animasiyalar söndürülür
- Klaviatura naviqasiyası: fokus halqaları, Escape ilə mobil menyu, aria-label-lər
- Şəkillər: `loading="lazy"` (hero istisna — eager), semantik alt mətnlər
- Layout shift: telefon maketləri sabit aspect nisbətində (9:19.5)
- Kontakt forması: client valyasiyası + dəqiq xəta mesajları + dəyərli toast
