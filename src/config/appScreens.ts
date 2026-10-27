/**
 * ============================================================
 *  FaceToFace — APP SCREEN CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * ============================================================
 *  Bütün telefon maketləri (PhoneMockup) ekran şəkillərini
 *  YALNIZ bu fayldan alır. Heç bir komponentdə şəkil URL-i
 *  hardcode olunmayıb.
 *
 *  ✅ Hazırda REAL skrinşotlardan istifadə olunur
 *     (public/images/app-screens/*.jpg).
 *
 *  ▶ EKRAN ŞƏKİLLƏRİNİ NECƏ ƏVƏZ ETMƏLİ?
 *
 *  1) YENİ SKRİNŞOT İLƏ ƏVƏZ ETMƏK (ən asan yol):
 *     - Real Android skrinşotunu kopyalayın:
 *       public/images/app-screens/ qovluğuna
 *       (məs. home-feed.jpg faylının üzərinə yazın)
 *     - Bitdi! Heç bir kod dəyişikliyi lazım deyil —
 *       maket komponenti (PhoneMockup) ekranı avtomatik
 *       öz ölçüsünə uyğunlaşdırır (object-cover).
 *
 *  2) XARİCİ URL İSTİFADƏ ETMƏK:
 *     - Aşağıdakı src dəyərini birbaşa URL ilə əvəz edin:
 *         heroScreen: "https://cdn.yourdomain.com/screens/feed.png"
 *
 *  3) ŞƏKİL QAYDALARI:
 *     - Tələb olunan nisbət: ~9:19.5 (məs. 1080×2340 px)
 *     - PNG / JPG / WebP formatı dəstəklənir
 *     - Aspect nisbəti fərqlidirsə, PhoneMockup avtomatik kəsir
 *       (object-cover) — maket qurğusu dəyişmir, yalnız ekran dəyişir.
 * ============================================================
 */

export type AppScreenKey =
  | "heroScreen"
  | "chatScreen"
  | "discoverScreen"
  | "profileScreen"
  | "menuScreen";

export const APP_SCREENS: Record<AppScreenKey, { src: string; alt: string }> = {
  /** Ana ekran — sosial lent: paylaşımlar, bəyənmə və şərhlər (REAL skrinşot) */
  heroScreen: {
    src: "/images/app-screens/home-feed.jpg",
    alt: "FaceToFace tətbiqinin ana ekranı — sosial lentdə paylaşımlar, bəyənmə və şərh düymələri ilə real tətbiq skrinşotu",
  },

  /** Kəşf — AxtarTarget Ekosistemi (Radar): qlobal və yaxınlıqdakı insanlar (REAL skrinşot) */
  discoverScreen: {
    src: "/images/app-screens/discover-radar.jpg",
    alt: "AxtarTarget Ekosistemi Radar ekranı — Dost Tap düyməsi ilə qlobal və yaxınlıqdakı insanları kəşf etmə (real tətbiq skrinşotu)",
  },

  /** Şəxsi yazışmalar — məsafə göstəricisi ilə real vaxt mesajları (REAL skrinşot) */
  chatScreen: {
    src: "/images/app-screens/chat.jpg",
    alt: "FaceToFace şəxsi yazışma ekranı — məsafə göstəricisi (12.7 km) ilə real vaxt mesajlaşması (real tətbiq skrinşotu)",
  },

  /** İstifadəçi profili — balans, hədiyyələr və paylaşımlar (REAL skrinşot) */
  profileScreen: {
    src: "/images/app-screens/profile.jpg",
    alt: "FaceToFace istifadəçi profil ekranı — Balans və Hədiyyələr kartı, coin balansı və şəxsi paylaşımlar (real tətbiq skrinşotu)",
  },

  /** Tətbiq menyusu — Radar, Bildirişlər, Anonim link və Ayarlar (REAL skrinşot) */
  menuScreen: {
    src: "/images/app-screens/menu.jpg",
    alt: "FaceToFace tətbiq menyusu — AxtarTarget Radar, Bildirişlər, Anonim link və Ümumi Ayarlar bölmələri (real tətbiq skrinşotu)",
  },
};
