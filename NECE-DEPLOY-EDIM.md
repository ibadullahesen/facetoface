# FaceToFace — Deploy bələdçisi (GitHub + Vercel)

Bu qovluq saytın bütün mənbə fayllarıdır. Aşağıdakı 4 addımı yerinə yetirən kimi
sayt internetdə olacaq. Kod bilikləri lazım deyil — hər şey veb-saytlarda klik ilə.

## Addım 1 — GitHub hesabı və repo yaradın
1. https://github.com → **Sign up** (ad, e-poçt, şifrə)
2. Daxil olduqdan sonra sağ üstdəki **+** → **New repository**
3. Repository name: `facetoface` → **Private** seçin (məsləhət görülür) → **Create repository**

## Addım 2 — Faylları GitHub-a yükləyin
1. Yaratdığınız səhifədə **"uploading an existing file"** linkinə klikləyin
2. Bu qovluğun İÇİNDEKİ bütün fayl və qovluqları (src, public, package.json və s.)
   birbaşa ekrana sürüyüb buraxın (drag & drop)
   ⚠️ ZIP-in özünü yükləməyin — əvvəl açın (extract), içindəkiləri yükləyin
3. Aşağıda **Commit changes** düyməsinə basın — yüklənmə bitənə qədər gözləyin

## Addım 3 — Vercel ilə yayımlayın
1. https://vercel.com → **Continue with GitHub** ilə daxil olun
2. **Add New... → Project** → siyahıda `facetoface` reposunu **Import** edin
3. Heç bir parametr dəyişməyin → **Deploy** düyməsinə basın
4. ~2 dəqiqə sonra saytınız hazır: `https://facetoface-xxxx.vercel.app`

## Addım 4 — Sonrakı dəyişikliklər
- GitHub-dakı hər hansı faylı redaktə edib **Commit** etsəniz, Vercel saytı
  AVTOMATİK yeniləyir. Əlavə iş lazım deyil.

## Domen (istəyə bağlı)
- Hazırda `SITE.url` placeholder-dir (`facetoface.example.az`).
- Öz domeniniz varsa (məs. facetoface.az): Vercel → Project → Settings → Domains
  → əlavə edin, sonra `src/config/site.ts` içindəki `url` dəyərini real domenlə
  əvəz edib GitHub-a yükləyin.

## Qeydlər
- Deploy zamanı xəta çıxsa: Vercel → Deployments → klik → **Build Logs**-da səbəb yazılır.
- Bu layihə Next.js 16 + TypeScript + Tailwind 4 ilə qurulub — Vercel avtomatik tanıyır.
- Kontakt formasının backend-i hazırda konfiqurasiya olunmayıb (sayt göstərişi düzgündür).
