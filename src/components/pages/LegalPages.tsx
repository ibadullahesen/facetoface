"use client";

/**
 * FaceToFace — LEGAL PAGES (Privacy & Terms)
 * ⚠️ Hüquqi sənədlər DRAFT statusundadır: yoxlanılmamış təhlükəsizlik
 * iddiaları (E2E şifrələmə, sertifikatlar) BURAXILIB.
 * Sahibkar hüquqi mətni təsdiq etmədən nəşr etməməlidir.
 */

import { Lock, UserX, LifeBuoy, Trash2, FileText, AlertTriangle } from "lucide-react";
import { SITE } from "@/config/site";
import { FAQS } from "@/config/content";
import { Atmosphere, Reveal, SectionHeading, Breadcrumbs, JsonLd, OutlineLink } from "@/components/site/brand";
import { PAGE_META, webPageJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";

function DraftNotice({ subject }: { subject: string }) {
  return (
    <div className="mb-10 rounded-2xl border border-amber-400/25 bg-amber-400/[0.05] p-5">
      <p className="flex items-start gap-2.5 text-sm leading-relaxed text-amber-200/90">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          <strong>DRAFT sənəd:</strong> bu {subject} layihə sahibi tərəfindən təsdiqlənməmişdir.
          Nəşrdən əvvəl hüquqi mətnin yoxlanılması və imzalanması tələb olunur. Hal-hazırda yalnız
          yoxlana bilən faktlar təqdim olunur.
        </span>
      </p>
    </div>
  );
}

/* ----------------------------- PRIVACY ---------------------------- */

export function PrivacyPage() {
  const meta = PAGE_META["/privacy"];
  const sections = [
    {
      icon: Lock,
      title: "Məxfilik və şəxsi məlumatlar",
      body: [
        "FaceToFace tətbiqinə daxil olan məlumatlar profili qurmaq və sosial imkanları işlətmək üçün istifadə olunur: ad, profil foto, paylaşım məzmunu və yazışmalar. Platforma məxfilik siyasəti hazırlanarkən “minimum məlumat” prinsipinə uyğun işləyir — yalnız tətbiqin funksiyaları üçün lazım olan məlumat tələb olunur.",
        "Sizin nəzarətinizdə olan parametrlər: profilinizin görünmə dərəcəsi, kimi izlədiyiniz və sizi kimin izlədiyi, paylaşımlarınıza reaksiya imkanları. Hər hansı bir istifadəçinin profilini bloklamaq məzmunun və ünsiyyətin həmin şəxs üçün bağlanması deməkdir.",
        "Dəqiqlik qeydi: məlumatların konkret texniki saxlama müddəti, server yerləşməsi və üçüncü tərəflərlə paylaşım siyasəti hüquqi mətndə DRAFT statusundadır və sahibkar tərəfindən doldurulmalıdır.",
      ],
    },
    {
      icon: UserX,
      title: "Blok və şikayət mexanizmləri",
      body: [
        "Tətbiqdə istənilən istifadəçini bloklamaq mümkündür: bloklanan şəxs sizin profilinizi görmür və sizə mesaj göndərə bilmir. Bu, dərhal tətbiq olunur və bloklayan şəxsin məlumatı əks tərəfə ötürülmür.",
        "Uyğunsuz məzmun və ya davranış qeyd edilərsə, hər profil və paylaşım üçün şikayət funksiyası mövcuddur. Şikayət edilən hal dəstək tərəfindən yoxlanılır və qaydaları pozan məzmun ya dəyişdirilir, ya da silinir.",
      ],
    },
    {
      icon: Trash2,
      title: "Hesabın silinməsi",
      body: [
        "Hesabınızı silmək üçün tətbiq daxilində Parametrlər → Hesab → “Hesabı sil” yolunu istifadə edin. Silinmədən əvvəl sistem sizə nəticələr barədə məlumat verir: profil, paylaşımlar və yazışmaların hesabla birlikdə silinməsi.",
        "Silinmə prosesi tamamlandıqdan sonra hesabınızı bərpa etmək mümkün deyil. Sual yaranarsa dəstək kanallarından istifadə edin.",
      ],
    },
    {
      icon: LifeBuoy,
      title: "Dəstək ilə əlaqə",
      body: [
        "Məxfilik sualları, hesab problemləri və ya təhlükəsizlik qayğıları üçün əlaqə səhifəmizdəki kanallardan istifadə edin. Məxfilik ilə bağlı müraciətlər prioritet qaydada qeydə alınır.",
        "Qeyd: dəstək e-poçt ünvanı hazırda təsdiqlənməyib — sahibkar real ünvanı təqdim etdikdən sonra burada və əlaqə səhifəsində dərc olunacaq.",
      ],
    },
  ];

  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Məxfilik və təhlükəsizlik", path: "/privacy" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="MƏXFİLİK"
            title={<>Məxfilik və <strong className="ftf-gradient-text">təhlükəsizlik</strong></>}
            description="FaceToFace-də təhlükəsizlik nəzarəti, məxfilik parametrləri və hesab idarəetməsi haqqında məlumat."
          />
        </Reveal>
        <Reveal className="mt-10">
          <DraftNotice subject="məxfilik siyasəti" />
        </Reveal>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <section className="ftf-card p-7">
                <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-50">
                  <s.icon className="h-5 w-5 text-[#5eead4]" aria-hidden="true" />
                  {s.title}
                </h2>
                <div className="space-y-4">
                  {s.body.map((p, pi) => (
                    <p key={pi} className="text-sm leading-relaxed text-slate-300">{p}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
            <p className="text-sm text-slate-400">Suallarınız var? Suallar bölməmizə baxın və ya əlaqə saxlayın.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <OutlineLink href="/faq">Suallar</OutlineLink>
              <OutlineLink href="/contact">Əlaqə</OutlineLink>
            </div>
          </div>
        </Reveal>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Məxfilik və təhlükəsizlik", path: "/privacy" }])} />
    </div>
  );
}

/* ------------------------------ TERMS ----------------------------- */

export function TermsPage() {
  const meta = PAGE_META["/terms"];
  const sections = [
    {
      title: "1. Ümumi müddəalar",
      body: [
        "FaceToFace sosial şəbəkə tətbiqindən istifadə etməklə siz bu istifadə şərtləri ilə razılaşırsınız. Tətbiq müstəqil tərtibatçı tərəfindən hazırlanır və AxtarGet layihələr ekosistemi daxilində inkişaf etdirilir.",
        "Şərtlərin qüvvədə olan versiyası hər zaman bu səhifədə dərc olunur. Əhəmiyyətli dəyişikliklər tətbiq daxilində və ya bu səhifədə elan olunur.",
      ],
    },
    {
      title: "2. Hesab və istifadə qaydaları",
      body: [
        "Tətbiqdə hesab yaratmaq üçün tətbiqin tələb etdiyi minimum yaş şərtlərinə uyğun olmalısınız. Hesabınızın təhlükəsizliyi — parolun qorunması və daxil olma məlumatlarının paylaşılmaması — istifadəçinin məsuliyyətidir.",
        "Qadağan edilən davranışlar: başqa şəxs kimi təqdim etmək, spam göndərmək, ayrı-seçkilik edən və ya zorakılığı təbliğ edən məzmun yaymaq, digər istifadəçilərin məxfiliyini pozmaq, tətbiqin texniki işini pozmaq.",
      ],
    },
    {
      title: "3. Məzmun",
      body: [
        "Sizin paylaşdığınız məzmunun (foto, video, yazı) müəllif hüquqları sizində qalır. Tətbiqə yüklədiyiniz məzmunu yaymaq və tətbiq daxilində göstərmək üçün texniki lisenziya vermiş olursunuz.",
        "Qaydaları pozan məzmun şikayət mexanizmi və ya dəstək vasitəsilə silinir. Təkrar pozuntular hesabın dayandırılması ilə nəticələnə bilər.",
      ],
    },
    {
      title: "4. Məsuliyyət məhdudiyyəti və dəyişikliklər",
      body: [
        "Tətbiq “olduğu kimi” təqdim olunur və fasiləsiz inkişaf mərhələsindədir. Qanunvericiliyin icazə verdiyi həddə tətbiqin istifadəsi ilə bağlı dolayı zərərlərə görə məsuliyyət məhdudlaşdırılır.",
        "⚠️ DRAFT: bu bölmə hüquqi yoxlanış tələb edir. Tam hüquqi mətn layihə sahibi tərəfindən təsdiqlənənə qədər bu sənəd ilkin redaksiya hesab edilir.",
      ],
    },
  ];

  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "İstifadə şərtləri", path: "/terms" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="ŞƏRTLƏR"
            title={<>İstifadə <strong className="ftf-gradient-text">şərtləri</strong></>}
            description={meta.description}
          />
        </Reveal>
        <Reveal className="mt-10">
          <DraftNotice subject="istifadə şərtləri sənədi" />
        </Reveal>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <section className="ftf-card p-7">
                <h2 className="mb-4 text-xl font-bold text-slate-50">{s.title}</h2>
                <div className="space-y-4">
                  {s.body.map((p, pi) => (
                    <p key={pi} className="text-sm leading-relaxed text-slate-300">{p}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Əlaqəli sənədlər: <Link href="/privacy" className="text-[#22d3ee] hover:underline">Məxfilik siyasəti</Link>
          </p>
        </Reveal>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "İstifadə şərtləri", path: "/terms" }])} />
    </div>
  );
}

/* ------------------------------- FAQ ------------------------------ */

export function FaqPage() {
  const meta = PAGE_META["/faq"];
  const faqs = FAQS as unknown as { q: string; a: string }[];
  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Suallar", path: "/faq" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="SUALLAR"
            title={<>Tez-tez verilən <strong className="ftf-gradient-text">suallar</strong></>}
            description={meta.description}
          />
        </Reveal>
        <Reveal className="mt-12">
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="ftf-card group p-5 [&[open]]:border-[#2e7cf6]/40">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-[#22d3ee] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <p className="mb-4 text-sm text-slate-400">Cavabını tapmadın? Bizə yaz.</p>
          <OutlineLink href="/contact">Əlaqə səhifəsinə keç</OutlineLink>
        </Reveal>
      </div>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Suallar", path: "/faq" }])} />
    </div>
  );
}
