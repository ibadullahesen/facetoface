/**
 * ============================================================
 *  FaceToFace — CENTRAL SITE CONFIGURATION
 * ============================================================
 *  Yalnız bu faylda yerləşən dəyərləri dəyişməklə bütün
 *  saytın brend məlumatlarını yeniləyə bilərsiniz.
 *
 *  ⚠️ PLACEHOLDER VALUES — OWNER ACTION REQUIRED
 *  Aşağıdakı dəyərlər yer tutucudur və NƏŞRDƏN ƏVVƏL
 *  real məlumatlarla əvəz olunmalıdır:
 *   - SITE.url          → real istehsalat domeni (məs. https://facetoface.az)
 *   - SITE.playStoreUrl → təsdiqlənmiş Google Play siyahısı
 *   - SITE.contact.*    → real əlaqə məlumatları
 *   - SITE.socials      → rəsmi sosial media profilləri
 * ============================================================
 */

export const SITE = {
  /** ⚠️ PLACEHOLDER: real istehsalat domeni ilə əvəz edin */
  url: "https://facetoface.example.az",

  name: "FaceToFace",
  legalName: "FaceToFace", // ⚠️ Hüquqi şəxs varsa rəsmi adını yazın, yoxdursa silin

  tagline: "Yeni insanlarla tanış ol. Yeni hekayələr paylaş.",
  shortDescription:
    "FaceToFace insanları bir araya gətirmək, ünsiyyəti asanlaşdırmaq və yeni əlaqələr qurmaq üçün yaradılmış sosial platformadır.",
  longDescription:
    "FaceToFace — Azərbaycanda yaradılmış sosial şəbəkə və insan kəşfiyyatı tətbiqi. Profil yarat, paylaş, yazış və yaxınlıqında olan yeni insanlarla tanış ol.",

  ecosystem: {
    name: "AxtarGet",
    description:
      "FaceToFace, İbadulla Həsənov tərəfindən qurulmuş AxtarGet layihələr ekosisteminin bir hissəsidir.",
  },

  founder: {
    name: "İbadulla Həsənov",
    role: "Qurucu və Tərtibatçı",
    /** ⚠️ PLACEHOLDER: real portret şəkli təqdim olunarsa burada istinad verin, yoxdursa null */
    portrait: null as string | null,
  },

  /**
   * ✅ Təsdiqlənmiş Google Play siyahısı:
   * https://play.google.com/store/apps/details?id=com.axtarget.facetoface
   */
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.axtarget.facetoface",

  /** ⚠️ PLACEHOLDER: real əlaqə məlumatları ilə əvəz edin */
  contact: {
    email: null as string | null, // məs. "support@facetoface.az"
    supportEmail: null as string | null, // məs. "privacy@facetoface.az"
  },

  /** ⚠️ PLACEHOLDER: yalnız təsdiqlənmiş profilləri əlavə edin */
  socials: [] as { label: string; url: string }[],

  copyrightYear: new Date().getFullYear(),

  locale: "az-AZ",
  defaultLanguage: "az",
  languages: ["az", "en", "tr"] as const,
};

export type SiteConfig = typeof SITE;

/** Naviqasiya strukturu — header, footer və mobil menyu eyni mənbədən istifadə edir */
export const NAV_LINKS = [
  { label: "Ana səhifə", href: "/" },
  { label: "İmkanlar", href: "/features" },
  { label: "İnsanları kəşf et", href: "/features?focus=discover" },
  { label: "Tətbiq haqqında", href: "/about" },
  { label: "Qurucu", href: "/founder" },
  { label: "Xəbərlər və məqalələr", href: "/blog" },
  { label: "Məxfilik və təhlükəsizlik", href: "/privacy" },
  { label: "Əlaqə", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Tətbiqi yüklə", href: "/download" },
  { label: "Tətbiq haqqında", href: "/about" },
  { label: "Qurucu haqqında", href: "/founder" },
  { label: "Məxfilik siyasəti", href: "/privacy" },
  { label: "İstifadə şərtləri", href: "/terms" },
  { label: "Suallar", href: "/faq" },
  { label: "Əlaqə və dəstək", href: "/contact" },
] as const;

/** Footer-də göstərilən qısa brend təsviri */
export const FOOTER_ABOUT =
  "FaceToFace — yeni insanlarla tanışlıq, ünsiyyət və paylaşım üçün yaradılmış sosial platforma. AxtarGet ekosisteminin layihəsi.";

/** Yer tutucu əlaqə məlumatı olub-olmamasını yoxlayan helper */
export function hasRealContact(): boolean {
  return Boolean(SITE.contact.email || SITE.contact.supportEmail);
}
