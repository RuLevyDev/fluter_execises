"use client";

import React, { useMemo, useState } from "react";

// Portafolio de Rubén Orero Levy — React + Tailwind + i18n (ES/EN)
// ⭐ Modern UI (glass + gradient), accesible, responsive .


// ——— Data ——————————————————————————————————————————————————————————————
const profile = {
  name: "Rubén Orero Levy", 
  avatar: "/avatar.png",
  role: {
    es: "Lead/Senior Flutter Developer",
    en: "Lead/Senior Flutter Developer",
  },
  headline: {
    es: "Desarrollo apps móviles y multiplataforma con Flutter. Arquitecturas limpias, CI/CD y foco en performance.",
    en: "I build high‑quality cross‑platform apps with Flutter. Clean Architecture, CI/CD and performance focus.",
  },
  location: { es: "Malaga, España", en: "Malaga, Spain" },
  email: "rulevydeveloper@gmail.com",
 
  linkedin: "https://www.linkedin.com/in/ruben-orero-levy",
  github: "https://github.com/RulevyDev", 
  availability: { es: "Disponible para proyectos y liderazgo técnico", en: "Open to projects & tech leadership" },
  summary: {
    es: "Full‑Stack y Flutter Dev con experiencia liderando equipos y apps en producción (120k+ usuarios). Clean Architecture, MVVM/BLoC/Provider, Firebase y CI/CD (Jenkins/GitHub Actions). Enfoque en automatización, calidad y métricas.",
    en: "Full‑Stack & Flutter Dev with experience leading teams and production apps (120k+ users). Clean Architecture, MVVM/BLoC/Provider, Firebase and CI/CD (Jenkins/GitHub Actions). Focus on automation, quality and metrics.",
  },
  stats: [
    { value: "120k+", label: { es: "usuarios en apps", en: "app users" } },
    { value: "400+", label: { es: "proyectos usando mi librería", en: "projects using my package" } },
    { value: "6+", label: { es: "años de experiencia", en: "years experience" } },
  ],
  skills: [
    {
      title: { es: "Mobile / Multiplataforma", en: "Mobile / Cross‑Platform" },
      items: ["Flutter", "Dart", "Android", "Kotlin", "Swift (basic)", "PWA"],
    },
    {
      title: { es: "Arquitectura", en: "Architecture" },
      items: ["Clean Architecture", "MVVM", "BLoC", "Provider", "DDD", "SOLID"],
    },
    {
      title: { es: "Backend & Cloud", en: "Backend & Cloud" },
      items: [
        "Firebase (Auth, Firestore, FCM, Storage)",
        "Node.js",
        "NestJS",
        "Dio/REST",
        "PostgreSQL",
        "Cloud Functions",
      ],
    },
    {
      title: { es: "CI/CD & DevOps", en: "CI/CD & DevOps" },
      items: ["Jenkins", "GitHub Actions", "Fastlane", "Docker", "Play Console / App Store Connect"],
    },
    { title: { es: "Calidad", en: "Quality" }, items: ["Unit/Widget Tests", "Golden Tests", "Lint", "Sentry"] },
  ],
  projects: [
    {
      title: "Backgroud Task Optimizer - pub.dev",
      image: "/dart.png",
      period: "2023–Presente",
       description: {
        es: "Paquete oficial en Dart/Flutter, usado en más de 400 proyectos. Diseñado para ejecutar operaciones costosas en segundo plano mediante isolates, evitando bloquear la UI. Ofrece soporte para profiling de rendimiento, gestión de timeouts y lógica de reintentos con backoff exponencial. Ideal para operaciones intensivas como procesamiento de datos, peticiones HTTP o conversión de medios.",
        en: "Official Dart/Flutter package used in 400+ projects. Designed to run heavy operations in the background using isolates, keeping the UI responsive. Includes built-in performance profiling, timeout handling, and retry logic with exponential backoff. Perfect for intensive tasks like data processing, HTTP requests, or media conversion.",
      },
      highlights: ["Dart", "Flutter", "OSS"],
      link: "https://pub.dev/packages/background_task_optimizer",
    },
    {
      title: "Baby Mam",
      image: "/baby-mam.png",
      period: "2023",
       description: {
       es: "App móvil para embarazadas que combina seguros de maternidad con herramientas de acompañamiento. Incluye contador regresivo al parto, seguimiento del crecimiento del bebé, artículos, consejos, videos formativos y foros para futuras mamás.con énfasis en accesibilidad, rendimiento y buenas prácticas.",
       en: "Mobile app for pregnant women combining maternity insurance with support tools. Features countdown to due date, baby growth tracker, articles, tips, video training and community forums. With focus on accessibility, performance, and best practices.",
      },
      highlights: ["Flutter", "BLoC", "Firebase", "CI/CD", "A11y","Clean Architecture"],
      link: "https://www.babymam.com/",
    },{
      title: "Koru: Your Acne Coach App",
      image: "/koru.png",
      period: "2024",
      description: {
        es: "App móvil para el cuidado de la piel con enfoque en el acné. Incluye escáner facial con IA, contenidos de dermatólogos y psicólogos, seguimiento del progreso con selfies, registro de hábitos y emociones, retos personalizados y recordatorios. Enfoque en accesibilidad, rendimiento y Clean Architecture.",
        en: "Mobile app for skincare with a focus on acne. Features AI facial scanner, dermatologist and mental health expert content, progress tracking with selfies, habit and mood logging, personalized challenges and reminders. Focused on accessibility, performance and Clean Architecture.",
      },
      highlights: ["Flutter", "BLoC", "Firebase","TensorFlow", "CI/CD", "AI", "A11y","Clean Architecture","MVVM"],
      link: "https://www.koruacne.com/",
    },
    {
      title: "Prodigy Padel App",
      image: "/padel.png",
      period: "2024–2025",
      description: {
        es: "App móvil de alto rendimiento para padel que combina entrenamiento digital con suscripciones in-app. Basada en el método Prodigy, ofrece más de 140 golpes en video, consejos diarios, retos interactivos y guías tácticas. Incluye doble rol (coach/player) con sistema de referidos: el coach genera un código y recibe un porcentaje cuando el jugador se suscribe. Con foco en escalabilidad, arquitectura limpia y experiencia de usuario.",
        en: "High-performance padel training app combining digital coaching with in-app subscriptions. Built on the Prodigy Method, it features 140+ video shots, daily tips, interactive challenges, and tactical play guidance. Supports dual role (coach/player) with a referral system: coaches generate a code and earn a percentage when players subscribe. Focusing on scalability, clean architecture, and user experience.",
      },
      highlights: ["Flutter", "In-App Purchases", "Firebase", "Clean Architecture", "CI/CD"],
      link: "https://prodigypadel.com/",
    },
    // {
    //   title: "Gestr App — Autónomos (ES)",
    //   period: "2025",
    //   description: {
    //     es: "Facturación, IVA/IRPF, dashboard con métricas y evolución mensual. Generación de PDF y gestión de imágenes.",
    //     en: "Invoicing, VAT/withholding, dashboards with metrics and monthly evolution. PDF generation and image handling.",
    //   },
    //   highlights: ["Flutter", "fl_chart", "PDF", "Bloc", "In-App Purchases", "Firebase", "Clean Architecture", "CI/CD"],
    //   link: "#",
    // },
    // {
    //   title: "Módulo E‑Learning — Certificación",
    //   period: "2025",
    //   description: {
    //     es: "Unidades, lecciones, vídeo, tests, bookmarks y progreso. VideoPlayerController y expansión por unidad.",
    //     en: "Units, lessons, video, tests, bookmarks and progress. VideoPlayerController and expandable units.",
    //   },
    //   highlights: ["Flutter", "BLoC", "Video", "Testing"],
    //   link: "#",
    // },
  ],
  certificates: [
    {
      name: "Flutter & Dart — The Complete Guide [2023]",
      issuer: "Udemy (Academind by Maximilian Schwarzmüller)",
      date: { es: "28 de abril de 2023", en: "Apr 28, 2023" },
      hours: "68.5h",
      link: "/fluttercertificado.PNG", // ← url del certificado udemy
    },
    {
      name: "Microsoft Learn — DevOps (Achievements)",
      issuer: "Microsoft Learn",
      date: { es: "—", en: "—" },
      hours: "—",
      link: "https://learn.microsoft.com/en-us/users/rubenlevy-5371/", 
    },
  ],
};

// ——— i18n Copy ——————————————————————————————————————————————————————
const copy = {
  es: {
    nav: { about: "Sobre mí", skills: "Skills", projects: "Proyectos", certs: "Certificados", contact: "Contacto" },
    principles: "Principios",
    principlesList: [
      "Arquitecturas predecibles y testeables",
      "Automatización y CI/CD desde el día 1",
      "Medición, logs y trazabilidad para escalar",
    ],
    techFav: "Tech favorita",
    stackTitle: "Stack y habilidades",
    featured: "Proyectos destacados",
    seeMore: "Ver más",
    certsTitle: "Certificaciones & formación",
    contactTitle: "¿Hablamos?",
    contactBody: "Escríbeme para colaborar en apps Flutter, liderar equipos o acelerar tus releases.",
    contactEmail: "Enviar email",
    website: "Web personal",
    langLabel: "ES",
  },
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", certs: "Certificates", contact: "Contact" },
    principles: "Principles",
    principlesList: [
      "Predictable, testable architectures",
      "Automation & CI/CD from day one",
      "Measurement, logging and traceability to scale",
    ],
    techFav: "Favorite tech",
    stackTitle: "Stack & skills",
    featured: "Featured projects",
    seeMore: "Read more",
    certsTitle: "Certificates & training",
    contactTitle: "Let’s talk",
    contactBody: "Reach out to collaborate on Flutter apps, lead teams or speed up your releases.",
    contactEmail: "Send email",
    website: "Personal website",
    langLabel: "EN",
  },
} as const;

// ——— UI Primitives ———————————————————————————————————————————————————
function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/40 px-3 py-1 text-sm font-medium backdrop-blur dark:bg-white/5">
      {text}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur transition hover:shadow-lg dark:bg-white/5">
      {children}
    </div>
  );
}

// ——— Page ——————————————————————————————————————————————————————————
export default function Portfolio() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = useMemo(() => copy[lang], [lang]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900 antialiased dark:from-gray-950 dark:via-gray-950 dark:to-gray-900 dark:text-gray-50">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl dark:bg-indigo-600/30" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl dark:bg-fuchsia-600/30" />
        <div className="absolute left-1/3 bottom-[-10%] h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl dark:bg-cyan-600/30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b/0 bg-white/60 backdrop-blur dark:bg-gray-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Rubén Orero Levy
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#about" className="hover:underline">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:underline">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:underline">
              {t.nav.projects}
            </a>
            <a href="#certs" className="hover:underline">
              {t.nav.certs}
            </a>
            <a href="#contact" className="hover:underline">
              {t.nav.contact}
            </a>
            <button
              onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
              className="rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              aria-label="Change language"
              title="Change language"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b/0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-20 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              {profile.role[lang]}
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{profile.headline[lang]}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                {lang === "es" ? "Contacto" : "Contact"}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {profile.stats.map((s) => (
                <div key={s.label[lang]} className="rounded-2xl border border-white/20 bg-white/60 px-4 py-3 text-center backdrop-blur dark:bg-white/10">
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{s.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
      {/* Profile Image */}
          <div className="">
            <div className="mx-auto w-52 sm:w-72">
              <img
                src={profile.avatar}
                alt="Foto de Rubén Orero Levy"
                className="aspect-square rounded-3xl object-cover shadow-lg ring-1 ring-black/5"
              />
            </div>
            <p className="mt-5 text-sm text-gray-700 dark:text-gray-300">
              {profile.location[lang]} · {profile.availability[lang]}
            </p>
          </div>

        </div>
      </section>

      {/* About */}
      <Section id="about" title={t.nav.about}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold">{lang === "es" ? "Resumen" : "Summary"}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{profile.summary[lang]}</p>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">{t.principles}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
              {t.principlesList.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-base font-semibold">{t.techFav}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Flutter", "Dart", "BLoC", "Provider", "Firebase", "Jenkins", "GitHub Actions", "Docker"].map((t) => (
                <Badge key={t} text={t} />
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={t.stackTitle}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <Card key={group.title.es}>
              <h3 className="text-base font-semibold">{group.title[lang]}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <Badge key={it} text={it} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.featured}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.projects.map((p) => (
            
           <Card key={p.title}>
 <div className="flex items-start justify-between">
  <div className="flex items-center gap-3">
    {p.image && (
      <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-blue/10 bg-blue">
        <img
          src={p.image}
          alt={`${p.title} logo`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    )}
    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
  </div>
  <span className="text-sm text-gray-500 dark:text-gray-400">{p.period}</span>
</div>

  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.description[lang]}</p>
  <div className="mt-3 flex flex-wrap gap-2">
    {p.highlights.map((h: string) => (
      <Badge key={h} text={h} />
    ))}
  </div>
  <div className="mt-4">
    <a
      href={p.link}
      target="_blank"
      className="text-sm font-medium underline underline-offset-4"
    >
      {t.seeMore}
    </a>
  </div>
</Card>

          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certs" title={t.certsTitle}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.certificates.map((c) => (
            <Card key={c.name}>
              <h3 className="text-base font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{c.issuer}</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                {c.date[lang]} {c.hours !== "—" && `· ${c.hours}`}
              </p>
              <div className="mt-3">
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">
                  {lang === "es" ? "Ver certificado" : "View certificate"}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.nav.contact}>
        <Card>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-semibold">{t.contactTitle}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{t.contactBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  lang === "es" ? "Contacto desde tu portfolio" : "Contact from your portfolio"
                )}&body=${encodeURIComponent(
                  lang === "es"
                    ? "Hola Rubén,\n\nMe gustaría hablar contigo sobre..."
                    : "Hi Rubén,\n\nI would like to talk to you about..."
                )}`}
                rel="noopener noreferrer"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
              >
                {t.contactEmail}
              </a>

              {/* Fallback: Copiar email al portapapeles */}
              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(profile.email);
                    alert(lang === "es" ? "Email copiado 📋" : "Email copied 📋");
                  } catch {
                    // Fallback extremo si el clipboard no está disponible
                    window.prompt(lang === "es" ? "Copia el email:" : "Copy the email:", profile.email);
                  }
                }}
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                {lang === "es" ? "Copiar email" : "Copy email"}
              </button>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/60 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t/0">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} {profile.name}. React + Tailwind. · {lang === "es" ? "Última actualización 08/25" : "Last update 08/25"}.
        </div>
      </footer>
    </div>
  );
}
