/**
 * ============================================================
 *  FaceToFace — CONTENT CONFIGURATION
 * ============================================================
 *  İmkanlar, addımlar, suallar və blog məqalələri.
 *  Məzmun burada mərkəzləşdirilib — səhifələr bu məlumatı oxuyur.
 *
 *  ⚠️ DƏYƏRLİK QAYDASI: Yalnız tətbiqdə FAKTİKİ mövcud olan
 *  imkanlar "available: true" olaraq işarələnib. Planlaşdırılan
 *  imkanlar "planned: true" ilə ayrı blokda göstərilir.
 *  İstifadəçi sayı, reytinq, endirmə göstəriciləri UYDURULMAYIB.
 * ============================================================
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon adı
  screen?: "heroScreen" | "chatScreen" | "discoverScreen" | "profileScreen" | "menuScreen";
  anchor?: string;
}

/** ✅ Cari versiyada təsdiqlənmiş imkanlar */
export const CONFIRMED_FEATURES: Feature[] = [
  {
    id: "profiles",
    title: "İstifadəçi profilləri",
    description:
      "Şəxsi profil yaradın: ad, təsvir, foto və maraq sahələrinizi əlavə edin. Profil hesabınızın üzüdür — sizin istədiyiniz kimi təqdim edin.",
    icon: "UserRound",
    screen: "profileScreen",
    anchor: "profiles",
  },
  {
    id: "posts",
    title: "Paylaşımlar — foto və video",
    description:
      "Anlarınızı lentə paylaşın: şəkil və videolar yükləyin, izahat yazın və izləyicilərinizlə bölüşün.",
    icon: "ImagePlus",
    screen: "heroScreen",
    anchor: "posts",
  },
  {
    id: "interactions",
    title: "Bəyən, şərh et, paylaş",
    description:
      "Başqalarının paylaşımlarına reaksiya verin, düşüncələrinizi şərhlə bölüşün və bəyəndiyiniz məzmunu yenidən paylaşın.",
    icon: "Heart",
    screen: "heroScreen",
    anchor: "interactions",
  },
  {
    id: "messaging",
    title: "Şəxsi yazışmalar",
    description:
      "Real vaxt rejimində şəxsi mesajlar göndərin. Tanışlıqdan dostluğa — bütün ünsiyyət birbaşa və özəl şəkildə aparılır.",
    icon: "MessageCircle",
    screen: "chatScreen",
    anchor: "messaging",
  },
  {
    id: "discover",
    title: "Yaxınlıqdakı insanları kəşf et",
    description:
      "Yaxınlığınızda olan insanları tapın və ya maraq sahələrinə görə yeni tanışlıqlar kəşf edin. Kəşf sizin üçün uyğun insanları önə çıxarır.",
    icon: "MapPin",
    screen: "discoverScreen",
    anchor: "discover",
  },
  {
    id: "notifications",
    title: "Bildirişlər",
    description:
      "Yeni bəyənmə, şərh, mesaj və izləyicilər barədə dərhal xəbərdar olun — heç nəyi qaçırmayın.",
    icon: "Bell",
    screen: "menuScreen",
    anchor: "notifications",
  },
];

/**
 * ⚠️ PLANLAŞDIRILAN / EKSPERİMENTAL İMKANLAR
 * Bunlar cari versiyada İŞLƏMİR — saytda ayrıca "planlaşdırılır"
 * kimi etiketlənir və heç vaxt işlək imkan kimi təqdim olunmur.
 */
export const PLANNED_FEATURES: Feature[] = [
  {
    id: "gifts",
    title: "Hədiyyələr və sikkələr",
    description:
      "Dostlarınıza virtual hədiyyələr göndərmək və profilinizi fərqləndirmək üçün planlaşdırılan sistem.",
    icon: "Gift",
  },
  {
    id: "web",
    title: "Veb təcrübəsi",
    description:
      "Brauzerdən istifadə üçün əlavə veb versiya ideyası — hazırda yalnız tədqiqat mərhələsindədir.",
    icon: "Globe",
  },
  {
    id: "groups",
    title: "Qruplar və icmalar",
    description:
      "Ümumi maraqlara görə qrup yaratmaq və icma salmaq planı gələcək versiyalar üçün nəzərdə tutulub.",
    icon: "Users",
  },
];

/** "FaceToFace necə işləyir" — 5 addım */
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Tətbiqi yüklə",
    description:
      "Google Play-dən FaceToFace tətbiqini Android telefonunuza yükləyin — quraşdırma bir neçə saniyə çəkir.",
  },
  {
    step: 2,
    title: "Hesab yarat və ya daxil ol",
    description:
      "Tətbiq daxilində qeydiyyatdan keçin. Hesab birbaşa Android tətbiqində idarə olunur.",
  },
  {
    step: 3,
    title: "Profili tamamla",
    description:
      "Fotonuz, təqdimatınız və maraq sahələrinizlə profili doldurun — beləcə sizi tanımaq asanlaşır.",
  },
  {
    step: 4,
    title: "İnsanları və məzmunu kəşf et",
    description:
      "Lenti izləyin, yaxınlıqdakı və maraqlı insanları tapın, paylaşımlara reaksiya verin.",
  },
  {
    step: 5,
    title: "Yazış və paylaş",
    description:
      "Şəxsi mesaj yazın, yeni tanışlıqlarla ünsiyyət qurun və öz anlarınızı lentə paylaşın.",
  },
] as const;

/** FAQ — /faq səhifəsi + FAQPage JSON-LD üçün */
export const FAQS = [
  {
    q: "FaceToFace nədir?",
    a: "FaceToFace, İbadulla Həsənov tərəfindən hazırlanmış və AxtarGet layihələr ekosisteminə aid olan sosial şəbəkə tətbiqidir. Tətbiq insanları bir araya gətirmək, ünsiyyəti asanlaşdırmaq və yeni əlaqələr qurmaq üçün yaradılıb: profil yarada, foto və video paylaşa, bəyənib şərh yaza, şəxsi yazışa və yaxınlıqdakı insanları kəşf edə bilərsiniz.",
  },
  {
    q: "Tətbiqi haradan yükləyə bilərəm?",
    a: "FaceToFace hazırda Android üçün Google Play üzərindən yüklənir. Saytın yuxarısındakı \"Tətbiqi yüklə\" düyməsi sizi rəsmi Google Play səhifəsinə yönləndirir.",
  },
  {
    q: "FaceToFace pulsuzdur?",
    a: "Tətbiqi yükləmək və əsas imkanlardan istifadə etmək pulsuzdur. Gələcək versiyalarda əlavə imkanlar barədə məlumat rəsmi kanallar vasitəsilə elan olunacaq.",
  },
  {
    q: "Hesabımı necə silə bilərəm?",
    a: "Hesabınızı silmək üçün tətbiq daxilində Parametrlər → Hesab bölməsinə keçin və \"Hesabı sil\" seçimini istifadə edin. Sual yaranarsa dəstək səhifəmizdəki əlaqə vasitələri ilə müraciət edə bilərsiniz. Məxfilik siyasətimizdə hesab silindikdən sonra məlumatların necə idarə olunduğu izah olunub.",
  },
  {
    q: "Saytda yaratdığım hesab Android tətbiqində işləyir?",
    a: "Xeyr. Bu sayt yalnız təqdimat və məlumat məqsədi daşıyır — burada hesab yaratmaq mümkün deyil. FaceToFace hesabı birbaşa Android tətbiqi daxilində yaradılır və idarə olunur.",
  },
  {
    q: "Məxfiliyim necə qorunur?",
    a: "Sizin nəzarətiniz sizindir: profili kimin görəcəyini seçə, istəmədiyiniz istifadəçiləri bloklaya və uyğunsuz məzmunu şikayət edə bilərsiniz. Məxfilik siyasətimizdə hansı məlumatların toplanması və necə istifadə olunması ətraflı izah olunub. Ətraflı məlumat üçün Məxfilik səhifəsinə baxın.",
  },
  {
    q: "Tətbiqdə kimisə bloklaya və ya şikayət edə bilərəm?",
    a: "Bəli. Hər bir profil və paylaşım üçün şikayət imkanı, istənilən istifadəçini bloklamaq imkanı nəzərdə tutulub. Şikayət edilən məzmun dəstək tərəfindən yoxlanılır.",
  },
  {
    q: "FaceToFace hansı dillərdə mövcuddur?",
    a: "Tətbiqin əsas dili Azərbaycan dilidir. Sayt azərbaycanca təqdim olunur; gələcək versiyalarda ingilis və türk dilləri üçün dəstək planlaşdırılır.",
  },
  {
    q: "Kim FaceToFace-i hazırlayıb?",
    a: "FaceToFace müstəqil tərtibatçı İbadulla Həsənov tərəfindən hazırlanır və onun AxtarGet layihələr ekosisteminin bir hissəsidir. Ətraflı məlumat Qurucu səhifəsindədir.",
  },
  {
    q: "Texniki problem yaşayıram, nə etməliyəm?",
    a: "Əlaqə səhifəmizdəki dəstək kanallarından istifadə edərək problemi təsvir edin — mümkün qədər tez cavab almağa çalışacaqsınız. Tətbiqin versiyasını və telefonunuzu göstərmək problemi daha sürətli həll etməyə kömək edir.",
  },
] as const;

/** Blog məqalələri */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateModified?: string;
  readTime: string;
  category: string;
  sections: { h2: string; paragraphs: string[]; h3s?: { h3: string; paragraphs: string[] }[] }[];
  related: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "face-to-face-azerbaijan-social-platform",
    title: "FaceToFace nədir? Azərbaycanda yaradılan sosial tanışlıq platforması ilə tanış olun",
    description:
      "FaceToFace sosial şəbəkə tətbiqinin nə olduğunu, hansı imkanları təqdim etdiyini və kimin üçün yaradıldığını ətraflı öyrənin.",
    date: "2026-10-20",
    readTime: "6 dəqiqə",
    category: "Məhsul",
    sections: [
      {
        h2: "FaceToFace nədir?",
        paragraphs: [
          "FaceToFace, İbadulla Həsənov tərəfindən hazırlanan və AxtarGet layihələr ekosisteminə aid olan sosial şəbəkə tətbiqidir. Tətbiqin əsas məqsədi sadədir: insanları bir araya gətirmək, ünsiyyəti asanlaşdırmaq və yeni əlaqələr qurmaq üçün rahat bir rəqəmsal mühit yaratmaq. Bazarda bir çox sosial platforma mövcuddur, lakin FaceToFace Azərbaycan istifadəçilərinin ehtiyaclarından çıxış edərək yerli dəyərlər üzərində qurulub.",
          "Tətbiq Android əməliyyat sistemi üçün Google Play üzərindən yüklənir. Quraşdırdıqdan sonra istifadəçi öz profilini yaradır, maraq sahələrini göstərir və dərhal lentə qoşulur. FaceToFace-in fərqləndiyi nöqtə, tanışlıq və paylaşımın bir platformada birləşdirilməsidir — yəni həm məzmun paylaşmaq, həm də yeni insanlarla tanış olmaq mümkündür.",
        ],
        h3s: [
          {
            h3: "Kimlər üçün uyğundur?",
            paragraphs: [
              "FaceToFace yeni insanlarla tanışmaq istəyən, maraqlarına uyğun danışıq partnerləri axtaran və ya sadəcə gündəlik anlarını paylaşmaq istəyən hər kəs üçün nəzərdə tutulub. Şəhər dəyişən tələbə, yeni mühitə uyğunlaşan gənc, ya da öz maraq dairəsini genişləndirmək istəyən hər hansı istifadəçi üçün tətbiq praktik vasitə təklif edir.",
              "Eyni zamanda platforma məsuliyyətli istifadəni önə çəkir: bloklama və şikayət mexanizmləri, məxfilik parametrləri və dəstək kanalları tətbiqin tərkib hissəsidir. Bu, yalnız böyüməyi deyil, təhlükəsizliyi də prioritet hesab edən yanaşmadır.",
            ],
          },
        ],
      },
      {
        h2: "Tətbiqin əsas imkanları",
        paragraphs: [
          "FaceToFace-in cari versiyasında istifadəçilər üçün yeddi əsas imkan mövcuddur. Bunlar profillər və hesab idarəçiliyi, foto və video paylaşımlar, bəyənmələr, şərhlər və paylaşım, real vaxt şəxsi yazışmalar, yaxınlıqdakı insanların kəşfi, maraqlara əsaslanan tanışlıqlar və bildirişlərdir. Hər bir imkan tətbiqin daxilində vahid təcrübə olaraq işləyir.",
          "Məsələn, kəşf bölməsi istifadəçiyə yaxınlığında olan insanları tapmağa imkan verir, lentin özü isə maraq sahələrinə görə məzmun təqdim edir. Beləliklə, tətbiq həm məkan, həm də maraq üzrə iki istiqamətdə tanışlıq yaradır. Şəxsi yazışmalar isə tanışlığın davamını təmin edən əsas körpüdür — bütün ünsiyyət birbaşa və özəl şəkildə aparılır.",
        ],
      },
      {
        h2: "AxtarGet ekosistemi daxilində FaceToFace",
        paragraphs: [
          "FaceToFace tək layihə deyil — müstəqil tərtibatçı İbadulla Həsənovun qurduğu AxtarGet layihələr ekosisteminin bir hissəsidir. Ekosistemin ideyası rəqəmsal məhsulları bir yerdə inkişaf etdirmək və Azərbaycandan çıxan texnoloji məhsullara nümunə yaratmaqdır. FaceToFace bu vizyonun sosial istiqamətini təmsil edir.",
          "Bu yanaşmanın praktik faydası odur ki, tətbiqin inkişafı uzunmüddətli plan üzərində qurulub: yeniləmələr, yeni imkanlar və texniki dəstək vahid strategiya çərçivəsində həyata keçirilir. İstifadəçilər üçün bu, stabillik və ardıcıllıq deməkdir.",
        ],
      },
      {
        h2: "Yekun",
        paragraphs: [
          "FaceToFace, Azərbaycanda yaradılan və yerli dəyərlərə söykənən sosial şəbəkə tətbiqidir. Əgər yeni insanlarla tanış olmaq, maraqlarınızı paylaşmaq və rahat ünsiyyət qurmaq istəyirsinizsə, tətbiqi Google Play-dən yükləyib sınaya bilərsiniz. Tətbiqin inkişafı davam edir — fikirləriniz və təklifləriniz bu yoluforma düşmək üçün vacibdir.",
        ],
      },
    ],
    related: ["how-to-discover-new-people-online", "facetoface-development-story"],
  },
  {
    slug: "how-to-discover-new-people-online",
    title: "Onlayn yeni insanlarla necə tanış olmalı? Təhlükəsiz və realist bələdçi",
    description:
      "Onlayn tanışlıqlarda profilinizi necə qurmalı, kiminlə danışmalı və təhlükəsizliyinizi necə qorumalı — praktik məsləhətlər bələdçisi.",
    date: "2026-10-24",
    readTime: "8 dəqiqə",
    category: "Bələdçi",
    sections: [
      {
        h2: "Niyə onlayn tanışlıq fərqlidir?",
        paragraphs: [
          "İnternet tanışlıqları üzbəüz materiallara çevrilib: insanlar gün ərzində onlarla yeni adamla qarşılaşır — sosial şəbəkələrdə, tətbiqlərdə, icmalarda. Bu imkan böyükdür, amma real həyatdakı tanışlıqdan fərqlənən mühüm məqamları var. Şəxsən görmədiyiniz, ətraf mühitini bilmədiyiniz bir insanla ünsiyyət qurarkən bəzi qaydalara riayət etmək həm sizin, həm də qarşı tərəfin rahatlığı üçün vacibdir.",
          "Bu bələdçi FaceToFace kimi sosial tətbiqlərdən istifadə edərkən tətbiq etmək mümkün olan universal prinsiplərə yönəlib. Məqsəd sizə daha çox tanışlıq qazandırmaq deyil — daha keyfiyyətli və təhlükəsiz tanışlıqlar qazandırmaqdır.",
        ],
        h3s: [
          {
            h3: "1. Profili real və konkret edin",
            paragraphs: [
              "Yaxşı tanışlıq yaxşı profildən başlayır. Adınızı düzgün yazın, real fotonuz yerləşdirin və təqdimatınızı konkret edin: \"salam\" deyil, maraqlarınızı, nə haqda danışmaq istədiyinizi göstərin. Boş profilə yazışmaq istəyən adam az olur — profil sizin ilk təqdimatınızdır.",
              "Eyni qayda qarşı tərəfə aiddir: məzmunlu profilə malik insanlarla yazışmaq daha məhsuldar olur. FaceToFace-də profildə maraq sahələrini göstərmək söhbətin mövzusunu dərhal tapmağa kömək edir.",
            ],
          },
          {
            h3: "2. İlk mesajı maraqla başlayın",
            paragraphs: [
              "\"Salam, necəsən\" mesajı çox vaxt cavabsız qalır, çünki cavablandırmaq mümkün olan heç nə ehtiva etmir. Əvəzində, qarşı tərəfin profilində və ya paylaşımında sizə maraqlı görünən konkret bir nüansı qeyd edin. Bu, ciddiyyətinizi göstərir və danışığın real mövzuda başlamasını təmin edir.",
            ],
          },
          {
            h3: "3. Tələsməyin",
            paragraphs: [
              "Etibar zamanla formalaşır. İlk söhbətlərdə şəxsi ünvanınızı, maliyyə məlumatlarınızı və ya şəxsi sənədlərinizi heç vaxt paylaşmayın. Onlayn tanışlıqlarda ən geniş yayılmış risklərdən biri sürətli etimad qurulmasından istifadə etməkdir. Əgər bir adam sizdən pul, kart məlumatı və ya oxşar şey istəyirsə, bu qırmızı xəttdir — danışığı dayandırın və istifadəçini bloklayıb şikayət edin.",
            ],
          },
        ],
      },
      {
        h2: "Təhlükəsizlik qaydaları",
        paragraphs: [
          "Onlayn mühitdə təhlükəsizlik üçün bir neçə sadə qayda kifayətdir. Birincisi, şəxsi məlumatları tələsmədən paylaşmayın — tam ad, ünvan, iş yeri kimi məlumatları etibar qurulduqdan sonra bölüşün. İkincisi, tətbiqin təhlükəsizlik alətlərindən istifadə edin: FaceToFace-də hər istifadəçini bloklamaq və uyğunsuz davranışı şikayət etmək mümkündür. Üçüncüsü, şübhəli hal gördükdə dəstək komandasına müraciət edin.",
          "Xarici resurslardan istifadə edərkən də ehtiyatlı olun: tanışlıqdan sonra danışığı başqa platformaya köçürmək təklif edən şəxslərə qarşı diqqətli olun, çünki belə keçidlər çox vaxt tətbiqdəki təhlükəsizlik mexanizmlərindən kənarda baş verir.",
        ],
        h3s: [
          {
            h3: "Görüş qaydaları",
            paragraphs: [
              "Onlayn tanışlığı real görüşə çevirmək qərarına gəlirsinizsə, bir neçə praktik qayda yada salın: ilk görüşü ictimai yerdə planlaşdırın, tanıdığınız birinə harada olduğunuzu bildirin və nəqliyyatınızdan özünüz istifadə edin. Bunlar narahatçılıq deyil — məsuliyyətli yanaşmanın normal hissəsidir.",
            ],
          },
        ],
      },
      {
        h2: "Nəticə",
        paragraphs: [
          "Onlayn tanışlıq imkanlarla dolu bir mühitdir, amma onun qaydaları var. Real profil, maraqla başlanan danışıq, tələsmədən qurulan etibar və təhlükəsizlik alətlərindən istifadə — bu dörd prinsip FaceToFace kimi platformalarda tanışlıqlarınızı keyfiyyətli edir. Hazırsınızsa, tətbiqi yükləyin və ilk söhbətinizi başladın.",
        ],
      },
    ],
    related: ["face-to-face-azerbaijan-social-platform", "facetofface-development-story"],
  },
  {
    slug: "facetoface-development-story",
    title: "FaceToFace-in inkişaf tarixçəsi: bir ideyadan Android tətbiqinə",
    description:
      "FaceToFace tətbiqinin necə yarandığı, hansı problemləri həll etdiyi və AxtarGet ekosistemindəki yeri — inkişaf hekayəsi.",
    date: "2026-10-26",
    readTime: "5 dəqiqə",
    category: "Layihə",
    sections: [
      {
        h2: "Başlanğıc: sadə sual",
        paragraphs: [
          "FaceToFace-in yaranma tarixi adi bir müşahidədən başlayıb: insanlar rəqəmsal dünyada bir-birinə daha yaxın olsalar da, yeni tanışlıq qurmaq keçən qədər asan deyil. Sosial şəbəkələrin əksəriyyəti mövcud dairənizlə ünsiyyəti saxlamağa yönəlib — yeni insanlarla tanışlıq üçün xüsusi vasitə isə, xüsusilə Azərbaycan bazarında, zəif təmsil olunub.",
          "Müstəqil tərtibatçı İbadulla Həsənov bu boşluğu qapadacaq bir məhsul üzərində işləməyə başladı. Məqsəd təkcə başqa bir tətbiq deyil — tanışlığı və ünsiyyəti əsas prioritet hesab edən, yerli istifadəçinin dilini və kontekstini anlayan bir platforma idi.",
        ],
      },
      {
        h2: "İnkişaf prosesi və AxtarGet",
        paragraphs: [
          "FaceToFace-in hazırlanması bir neçə mərhələdən keçib: ideya və konsepsiya, interfeys dizaynı, tətbiqin kodlaşdırılması, sınaq və Google Play-də dərc olunma. Hər mərhələdə əsas sual eyni qalıb: bu imkan istifadəçiyə hansı real dəyəri verir? Yalnız cavabı aydın olan funksiyalar tətbiqə daxil edilib — profil yaradmaq, paylaşmaq, bəyənmək, yazışmaq və kəşf etmək.",
          "Layihə İbadulla Həsənovun qurduğu AxtarGet layihələr ekosisteminin bir hissəsi kimi inkişaf edir. Bu, FaceToFace-in təkbaşına deyil, uzunmüddətli məhsul strategiyası çərçivəsində dəstəkləndiyini deməkdir. Ekosistem yanaşması yeniləmələrin ardıcıllığını və məhsulun gələcək planlarını daha dayanıqlı edir.",
        ],
        h3s: [
          {
            h3: "Müstəqil tərtibatçı olmağın reallıqları",
            paragraphs: [
              "Sosial tətbiq yaratmaq texniki bacarıqdan çox istəyir: istifadəçi təcrübəsi, server infrastrukturu, təhlükəsizlik, məzmun moderasiyası və dəstək — hamısı bir-birinə bağlı sahələrdir. Kiçik komanda və ya tək tərtibatçı üçün bu, ehtiyatlı prioritetləşdirmə deməkdir: əvvəlcə işləyən əsas təcrübə, sonra əlavə imkanlar.",
              "Bu yanaşmanın nəticəsi olaraq FaceToFace-in cari versiyası gündəlik istifadə üçün lazımlı olan imkanlara fokuslanır, gələcək versiyalar üçün planlar isə açıq şəkildə \"planlaşdırılır\" kimi qeyd olunur.",
            ],
          },
        ],
      },
      {
        h2: "İrəliyə baxış",
        paragraphs: [
          "FaceToFace-in inkişafı davam edir. Gələcək versiyalar üçün hədiyyələr və sikkələr sistemi, qruplar və icmalar, dillər üzrə genişlənmə kimi planlar mövcuddur — bunlar planlaşdırılan imkanlardır və cari versiyada mövcud deyil. Tətbiqi sınayıb fikrinizi bildirmək, onun inkişafında birbaşa iştirak formasıdır.",
        ],
      },
    ],
    related: ["face-to-face-azerbaijan-social-platform", "how-to-discover-new-people-online"],
  },
];

/** Founder səhifəsi üçün bio (yoxlanılmış faktlarla məhdudlaşdırılıb) */
export const FOUNDER_BIO = {
  intro:
    "İbadulla Həsənov, rəqəmsal məhsullar və tətbiqlər üzrə ixtisaslaşan Azərbaycanlı müstəqil tərtibatçıdır. O, FaceToFace sosial şəbəkə tətbiqinin qurucusu və AxtarGet layihələr ekosisteminin yaradıcısıdır.",
  motivation:
    "İbadulla Həsənovun FaceToFace üzərində işləməyə başlamasının əsas səbəbi, yeni insanlarla tanışlığı asanlaşdıran və Azərbaycan istifadəçisinin dilini anlayan bir platformanın olmadığı müşahidəsidir. Məqsəd, ünsiyyəti sadə, təhlükəsiz və keyfiyyətli edən bir məhsul yaratmaqdır.",
  vision:
    "Uzunmüddətli vizyon, Azərbaycandan çıxan və beynəlxalq səviyyədə tanına biləcək texnoloji məhsul nümunəsi yaratmaqdır. Bu, mərhələli inkişaf, istifadəçi fikrinə söykənən yeniləmələr və dəyərli məhsul standartları ilə həyata keçirilir.",
} as const;

/** Founder bio üçün inkişaf mərhələləri (yalnız yoxlanıla bilən məlumat) */
export const FOUNDER_PRINCIPLES = [
  {
    title: "Sadəlik prioritetdir",
    description:
      "Hər yeni imkan istifadəçiyə real dəyər vermədikcə məhsula daxil edilmir. Mürəkkəblik deyil, aydınlıq əsasdır.",
  },
  {
    title: "İstifadəçi etibarı hər şeydən qiymətlidir",
    description:
      "Məxfilik, təhlükəsizlik və dürüst kommunikasiya — məhsulun böyüməsi bu üç sütunun üzərində qurulub.",
  },
  {
    title: "Yerli dəyərlər, qlobal standartlar",
    description:
      "Məhsul Azərbaycan üçün yaradılır, amma keyfiyyət standartları dünya tətbiqləri ilə eyni səviyyədə tutulur.",
  },
] as const;
