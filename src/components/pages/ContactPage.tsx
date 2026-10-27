"use client";

/**
 * FaceToFace — CONTACT PAGE + 404
 * Contact form is validated client-side. ⚠️ No backend is claimed:
 * until the owner supplies a real support email, the form shows an
 * explicit "delivery not yet configured" state instead of faking success.
 */

import { useState } from "react";
import { Mail, LifeBuoy, Send, AlertTriangle, Home, Search } from "lucide-react";
import { SITE, hasRealContact } from "@/config/site";
import { Atmosphere, Reveal, SectionHeading, Breadcrumbs, OutlineLink, JsonLd } from "@/components/site/brand";
import { PAGE_META, webPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/* ------------------------------ CONTACT --------------------------- */

export function ContactPage() {
  const meta = PAGE_META["/contact"];
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactReady = hasRealContact();

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Adınızı yazın (ən azı 2 hərf).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Düzgün e-poçt ünvanı yazın.";
    if (form.message.trim().length < 20) e.message = "Mesajınızı bir az genişləndirin (ən azı 20 simvol).";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      toast({ title: "Formanı yoxlayın", description: "Bəzi sahələr düzgün doldurulmayıb.", variant: "destructive" });
      return;
    }
    // ⚠️ Backend göndərilməsi sahə sahibi tərəfindən konfiqurasiya edilməyib.
    // Heç bir uydurma "mesaj göndərildi" iddiası göstərilmir.
    toast({
      title: "Dəstək kanalı hazırlanır",
      description:
        "Forma valyasiyası işləyir, lakin mesajın çatdırılması üçün dəstək e-poçt ünvanı hələ təsdiqlənməyib. Sahibkar real ünvanı təqdim etdikdən sonra göndərmə aktivləşəcək.",
      variant: "destructive",
    });
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: ev.target.value })),
    "aria-invalid": Boolean(errors[key]),
  });

  return (
    <div className="relative pb-24 pt-32 sm:pt-40">
      <Atmosphere variant="soft" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Ana səhifə", path: "/" }, { name: "Əlaqə", path: "/contact" }]} />
        <Reveal>
          <SectionHeading
            align="left"
            kicker="ƏLAQƏ"
            title={<>Bizimlə <strong className="ftf-gradient-text">əlaqə saxla</strong></>}
            description="Texniki dəstək, məxfilik sualları və geri bildirişlər üçün aşağıdakı kanallardan istifadə edin."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info panel */}
          <Reveal>
            <div className="space-y-5">
              <div className="ftf-card p-6">
                <LifeBuoy className="mb-3 h-5 w-5 text-[#5eead4]" aria-hidden="true" />
                <h2 className="mb-2 font-semibold text-slate-100">Dəstək</h2>
                {contactReady ? (
                  <ul className="space-y-2 text-sm text-slate-300">
                    {SITE.contact.email && <li>E-poçt: <a className="text-[#22d3ee] hover:underline" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></li>}
                    {SITE.contact.supportEmail && <li>Məxfilik: <a className="text-[#22d3ee] hover:underline" href={`mailto:${SITE.contact.supportEmail}`}>{SITE.contact.supportEmail}</a></li>}
                  </ul>
                ) : (
                  <p className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3.5 text-xs leading-relaxed text-amber-200/80">
                    <AlertTriangle className="mb-1.5 h-3.5 w-3.5" aria-hidden="true" />
                    Dəstək e-poçt ünvanı hələ təsdiqlənməyib. Sahibkar ünvanı{" "}
                    <code className="rounded bg-black/30 px-1">src/config/site.ts</code> faylında təqdim etdikdən
                    sonra burada görünəcək.
                  </p>
                )}
              </div>
              <div className="ftf-card p-6">
                <Mail className="mb-3 h-5 w-5 text-[#7dd3fc]" aria-hidden="true" />
                <h2 className="mb-2 font-semibold text-slate-100">Tez cavab almaq üçün</h2>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-400">
                  <li>Tətbiqin versiyasını və telefon modelini qeyd edin.</li>
                  <li>Problemin harada yarandığını təsvir edin.</li>
                  <li>Ekran şəkli əlavə etmək araşdırmanı sürətləndirir.</li>
                </ul>
              </div>
              <div className="ftf-card p-6">
                <h2 className="mb-2 font-semibold text-slate-100">Digər suallar</h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  Sualların çoxu cavab səhifəmizdə var — formadan əvvəl ora baxmaq vaxt qazandırır.
                </p>
                <OutlineLink href="/faq">Suallara keç</OutlineLink>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="ftf-card flex h-full flex-col gap-5 p-7">
              <h2 className="text-lg font-bold text-slate-50">Mesaj göndər</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Adınız *</Label>
                  <Input id="c-name" placeholder="Ad və soyad" {...field("name")} />
                  {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">E-poçt *</Label>
                  <Input id="c-email" type="email" placeholder="siz@nümunə.az" {...field("email")} />
                  {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-subject">Mövzu</Label>
                <Input id="c-subject" placeholder="Məsələn: Tətbiqdə bildiriş problemi" {...field("subject")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">Mesajınız *</Label>
                <Textarea id="c-message" rows={5} placeholder="Sualınızı və ya problemi ətraflı yazın..." {...field("message")} />
                {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
              </div>
              <Button type="submit" className="ftf-btn-primary mt-auto w-full rounded-2xl border-0 text-white sm:w-fit">
                <Send className="mr-2 h-4 w-4" aria-hidden="true" /> Göndər
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
      <JsonLd data={webPageJsonLd(meta.path, meta.title, meta.description)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Ana səhifə", path: "/" }, { name: "Əlaqə", path: "/contact" }])} />
    </div>
  );
}

/* ------------------------------- 404 ------------------------------ */

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center pb-24 pt-32">
      <Atmosphere variant="cta" />
      <div className="relative mx-auto max-w-lg px-4 text-center">
        <p className="ftf-gradient-text text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-50">Səhifə tapılmadı</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Axtardığınız səhifə mövcud deyil və ya ünvanı dəyişib. Ana səhifədən davam edə bilərsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="ftf-btn-primary inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white">
            <Home className="h-4 w-4" aria-hidden="true" /> Ana səhifə
          </Link>
          <OutlineLink href="/blog">
            <Search className="mr-2 h-4 w-4" aria-hidden="true" /> Bloqa bax
          </OutlineLink>
        </div>
      </div>
    </div>
  );
}
