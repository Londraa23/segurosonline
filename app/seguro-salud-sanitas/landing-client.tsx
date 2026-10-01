"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Building2,
  Check,
  ClipboardList,
  HeartPulse,
  Headset,
  Hospital,
  MapPin,
  MessagesSquare,
  Microscope,
  Phone,
  Scale,
  Siren,
  Smartphone,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Video,
} from "lucide-react"
import { FaqSection } from "@/components/faq-section"
import { QuoteForm, type QuoteMode } from "./quote-form"
import { H1_VARIANTS, LANDING_FAQS, PRICE_DISCLAIMER, type H1Variant } from "./content"

const PHONE_DISPLAY = "624 21 73 23"
const PHONE_HREF = "tel:+34624217323"

const HERO_BENEFITS = [
  "Videoconsulta con especialistas y servicios digitales de salud.",
  "Opciones desde cobertura ambulatoria hasta seguros completos con hospitalización.",
  "Cobertura dental incluida en las principales modalidades.",
]

const TRUST_ITEMS = [
  { icon: Smartphone, text: "Blua incluido" },
  { icon: MapPin, text: "Amplio cuadro médico en toda España" },
  { icon: Building2, text: "5 hospitales propios de Sanitas" },
  { icon: Headset, text: "Asesoramiento sin compromiso" },
]

const PRODUCTS = [
  {
    name: "Sanitas Avanza",
    shortName: "Avanza",
    badge: "Más cobertura",
    price: "33,60",
    description: "Más pruebas y servicios, manteniendo una prima ajustada y sin incluir hospitalización.",
    features: [
      "Medicina primaria y todas las especialidades.",
      "Pruebas diagnósticas complejas.",
      "Más de 400 intervenciones incluidas.",
      "Cobertura dental y Blua.",
    ],
  },
  {
    name: "Sanitas Más Salud",
    shortName: "Más Salud",
    badge: "Cobertura completa",
    price: "41,67",
    description:
      "Para quienes buscan asistencia sanitaria completa, incluyendo hospitalización e intervenciones quirúrgicas.",
    features: [
      "Medicina primaria y especialidades.",
      "Pruebas y métodos terapéuticos complejos.",
      "Hospitalización e intervenciones quirúrgicas.",
      "Cobertura dental y Blua.",
    ],
  },
  {
    name: "Sanitas Único",
    shortName: "Único",
    badge: "Mayores de 60",
    price: "48,10",
    description: "Seguro de asistencia sanitaria pensado especialmente para mayores de 60 años.",
    features: [
      "Consultas de medicina primaria y especialidades.",
      "Pruebas diagnósticas frecuentes.",
      "Cobertura dental básica.",
      "Servicios digitales y programas específicos para mayores.",
    ],
  },
]

const WHY_BLOCKS = [
  {
    icon: MapPin,
    title: "Cuadro médico amplio",
    text: "Consulta una extensa red de profesionales y centros médicos en toda España.",
  },
  {
    icon: Smartphone,
    title: "Atención digital con Blua",
    text: "Videoconsultas, programas digitales de salud y herramientas para cuidar tu bienestar desde el móvil.",
  },
  {
    icon: Scale,
    title: "Opciones para cada necesidad",
    text: "Desde atención ambulatoria hasta modalidades completas con hospitalización y cirugía.",
  },
  {
    icon: UserRoundCheck,
    title: "Asesoramiento personalizado",
    text: "Te explicamos coberturas, copagos y condiciones para que sepas exactamente qué estás contratando.",
  },
]

const COVERAGES = [
  { icon: Baby, text: "Medicina general y pediatría" },
  { icon: Stethoscope, text: "Especialidades médicas" },
  { icon: Microscope, text: "Pruebas diagnósticas" },
  { icon: Siren, text: "Urgencias" },
  { icon: Bone, text: "Fisioterapia y rehabilitación" },
  { icon: Hospital, text: "Hospitalización y cirugía (según modalidad)" },
  { icon: Sparkles, text: "Cobertura dental" },
  { icon: Video, text: "Videoconsulta y salud digital" },
]

const BLUA_FEATURES = [
  { icon: Video, title: "Videoconsulta", text: "Consulta online con profesionales de distintas especialidades." },
  {
    icon: MessagesSquare,
    title: "Evalúa tus síntomas",
    text: "Orientación digital para ayudarte a identificar el profesional o la atención que necesitas.",
  },
  {
    icon: Activity,
    title: "Fisio Digital",
    text: "Ejercicios y programas de prevención, tratamiento y rehabilitación física online.",
  },
  {
    icon: HeartPulse,
    title: "Programas de salud",
    text: "Opciones digitales relacionadas con nutrición, embarazo, entrenamiento y salud infantil, entre otras.",
  },
]

const STEPS = [
  { title: "Calcula", text: "Déjanos tus datos básicos para poder orientarte con un precio real." },
  { title: "Comparamos", text: "Revisamos contigo las modalidades y diferencias de cobertura." },
  { title: "Eliges", text: "Contrata la opción que mejor encaje contigo, con toda la información clara." },
]

const ctaClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#FFE169] px-7 py-3.5 text-base font-bold text-[#002A54] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#FFD633] hover:shadow-lg"

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#0091DA]">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-[#002A54] sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-neutral-600">{intro}</p>}
    </div>
  )
}

export default function LandingSanitasClient({ variant }: { variant: H1Variant }) {
  const [heroMode, setHeroMode] = useState<QuoteMode>("precio")
  const [heroPlan, setHeroPlan] = useState(variant === "mayores" ? "Sanitas Único" : "")
  const [finalMode, setFinalMode] = useState<QuoteMode>("precio")
  const [showStickyBar, setShowStickyBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 700)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const goToHeroForm = (options: { plan?: string; mode?: QuoteMode } = {}) => {
    if (options.plan !== undefined) setHeroPlan(options.plan)
    setHeroMode(options.mode ?? "precio")
    document.getElementById("calcular")?.scrollIntoView({ behavior: "smooth", block: "start" })
    // Focus the first field once the form is in place, without fighting the smooth scroll
    setTimeout(() => {
      document.querySelector<HTMLElement>("#calcular select, #calcular input")?.focus({ preventScroll: true })
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-[#0091DA]/20">
      {/* 01. HEADER COMPACTO */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <Image src="/sanitas_logo.webp" alt="Sanitas" width={96} height={48} className="h-8 w-auto" priority />
            <span className="hidden border-l border-neutral-200 pl-3 text-xs leading-tight text-neutral-500 sm:block">
              SegurosOnline.net
              <br />
              Agencia exclusiva Sanitas
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 rounded-full border border-neutral-200 p-2.5 text-sm font-semibold text-[#002A54] transition-colors hover:border-[#0091DA] hover:text-[#0091DA] sm:border-0 sm:px-0"
              aria-label={`Llamar al ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4 text-[#0091DA]" />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>
            <button onClick={() => goToHeroForm()} className={`${ctaClass} !px-4 !py-2.5 !text-sm sm:!px-5`}>
              Calcular mi precio
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 02. HERO + FORMULARIO */}
        <section className="sanitas-gradient-soft relative overflow-hidden pb-12 pt-8 sm:pt-12 lg:pb-20 lg:pt-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-8 px-4 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#0091DA]">Seguro de salud Sanitas</p>
              <h1 className="text-balance text-[2.1rem] font-bold leading-[1.1] tracking-tight text-[#002A54] sm:text-5xl lg:text-[3.4rem]">
                {H1_VARIANTS[variant]}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                Disfruta de medicina privada presencial y digital, un amplio cuadro médico y Blua incluido. Calcula tu precio
                y te ayudamos a encontrar la opción que mejor se adapta a ti.
              </p>
            </div>

            <div
              id="calcular"
              className="scroll-mt-20 rounded-2xl border border-neutral-100 bg-white p-6 shadow-2xl shadow-[#002A54]/10 sm:p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
            >
              <QuoteForm
                formId="landing-sanitas-hero"
                mode={heroMode}
                plan={heroPlan}
                onModeChange={setHeroMode}
                onPlanChange={setHeroPlan}
              />
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <ul className="space-y-3">
                {HERO_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0091DA]/10">
                      <Check className="h-4 w-4 text-[#0091DA]" />
                    </span>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 hidden flex-wrap items-center gap-4 lg:flex">
                <button onClick={() => goToHeroForm()} className={ctaClass}>
                  Calcular mi precio <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => goToHeroForm({ mode: "llamada" })}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#002A54]/15 px-6 py-3 font-semibold text-[#002A54] transition-colors hover:border-[#0091DA] hover:text-[#0091DA]"
                >
                  <Phone className="h-4 w-4" /> Prefiero que me llaméis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 03. FRANJA DE CONFIANZA */}
        <section className="bg-[#005B8E] py-6 sm:py-8" aria-label="Ventajas">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex flex-col items-center gap-2 px-2 text-center text-white sm:flex-row sm:justify-center sm:text-left">
                <Icon className="h-6 w-6 shrink-0 text-[#E8F4FD]" />
                <span className="text-sm font-medium leading-tight">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 04. PRODUCTOS */}
        <section className="py-16 sm:py-24" id="modalidades">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Modalidades"
              title="Elige el seguro que encaja contigo"
              intro="Sanitas ofrece distintas modalidades según el nivel de cobertura que necesitas. Te ayudamos a compararlas y a calcular tu precio real según edad y código postal."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {PRODUCTS.map((product) => (
                <article
                  key={product.name}
                  className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
                >
                  <span className="mb-4 self-start rounded-full bg-[#E8F4FD] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#005B8E]">
                    {product.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#002A54]">{product.name}</h3>
                  <p className="mt-3 text-neutral-500">
                    Desde{" "}
                    <span className="text-4xl font-black tracking-tight text-[#0091DA]">{product.price} €</span>
                    <span className="font-medium">/mes*</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{product.description}</p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-neutral-100 pt-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0091DA]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => goToHeroForm({ plan: product.name })} className={`${ctaClass} mt-8 w-full`}>
                    Calcular precio de {product.shortName}
                  </button>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-neutral-500">{PRICE_DISCLAIMER}</p>
          </div>
        </section>

        {/* 05. POR QUÉ SANITAS + COBERTURAS */}
        <section className="bg-neutral-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Por qué elegir Sanitas"
              title="Todo lo que necesitas para cuidar tu salud, en un solo seguro"
              intro="Combina atención presencial, servicios digitales y distintas modalidades de cobertura para que puedas elegir según tus necesidades y presupuesto."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_BLOCKS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0091DA]/10">
                    <Icon className="h-6 w-6 text-[#0091DA]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#002A54]">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{text}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-8 mt-16 text-center text-2xl font-bold text-[#002A54]">Coberturas principales</h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {COVERAGES.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-neutral-100"
                >
                  <Icon className="h-7 w-7 text-[#0091DA]" />
                  <span className="text-sm font-medium leading-snug text-neutral-800">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-[#E8F4FD] p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-lg font-semibold text-[#002A54]">
                Cuéntanos qué necesitas y te diremos qué modalidad de Sanitas encaja mejor contigo.
              </p>
              <button onClick={() => goToHeroForm()} className={`${ctaClass} shrink-0`}>
                Calcular mi precio <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 06. BLUA */}
        <section className="sanitas-gradient py-16 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#E8F4FD]">Blua: tu salud también desde el móvil</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Blua incluido para cuidar tu salud estés donde estés
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Con los servicios digitales de Sanitas puedes consultar con profesionales, hacer seguimiento de tu salud y
                acceder a programas personalizados sin desplazarte.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BLUA_FEATURES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm">
                  <Icon className="mb-4 h-7 w-7 text-white" />
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/85">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. CÓMO FUNCIONA */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Cómo funciona" title="Tu seguro Sanitas en 3 pasos" />
            <div className="relative">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 bg-neutral-100 md:block" aria-hidden />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex flex-col items-center text-center">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0091DA] text-xl font-bold text-white ring-8 ring-white">
                    {index + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-[#002A54]">{step.title}</h3>
                  <p className="max-w-xs text-neutral-600">{step.text}</p>
                </li>
              ))}
            </ol>
            </div>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="flex items-center gap-2 text-xl font-semibold text-[#002A54]">
                <ClipboardList className="h-6 w-6 text-[#0091DA]" /> ¿Quieres saber cuánto te costaría?
              </p>
              <button onClick={() => goToHeroForm()} className={ctaClass}>
                Calcular mi precio <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 08. PREGUNTAS FRECUENTES */}
        <FaqSection label="Resolvemos tus dudas" title="Preguntas frecuentes" description="" faqs={LANDING_FAQS} />

        {/* 09. CTA FINAL + FORMULARIO */}
        <section className="sanitas-gradient-soft py-16 sm:py-24" id="cta-final">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[#002A54] sm:text-4xl">
                Calcula ahora tu seguro Sanitas
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Dinos a quién quieres asegurar y te ayudamos a encontrar la modalidad adecuada, con un precio personalizado y
                sin compromiso.
              </p>
              <div className="mt-8 rounded-2xl border border-neutral-200 bg-white/70 p-6">
                <p className="font-semibold text-[#002A54]">¿Prefieres hablar con una persona?</p>
                <p className="mt-1 text-sm text-neutral-600">Llámanos o déjanos tu teléfono y te contactamos.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#002A54]/15 px-5 py-2.5 font-semibold text-[#002A54] transition-colors hover:border-[#0091DA] hover:text-[#0091DA]"
                  >
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </a>
                  <button
                    onClick={() => setFinalMode("llamada")}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-[#0091DA] hover:underline"
                  >
                    Hablar con un asesor
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-2xl shadow-[#002A54]/10 sm:p-8">
              <QuoteForm formId="landing-sanitas-final" mode={finalMode} onModeChange={setFinalMode} />
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER LEGAL */}
      <footer className="border-t border-neutral-100 bg-white pb-28 pt-10 md:pb-10">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xs leading-relaxed text-neutral-500">{PRICE_DISCLAIMER}</p>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Image src="/sanitas_logo.webp" alt="Sanitas" width={80} height={40} className="h-6 w-auto opacity-80" />
              <p className="text-xs text-neutral-500">
                © {new Date().getFullYear()} SegurosOnline.net — Agencia de Seguros Exclusiva de Sanitas S.A. de Seguros.
                DFGS: C032039934768Y.
              </p>
            </div>
            <nav className="flex gap-6 text-xs text-neutral-500" aria-label="Legal">
              <a href="/politica-privacidad" className="hover:text-neutral-900">Política de Privacidad</a>
              <a href={PHONE_HREF} className="hover:text-neutral-900">{PHONE_DISPLAY}</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* CTA FIJO INFERIOR (MÓVIL) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showStickyBar}
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <a
            href={PHONE_HREF}
            tabIndex={showStickyBar ? 0 : -1}
            className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-4 py-3 text-sm font-semibold text-[#002A54]"
          >
            <Phone className="h-4 w-4 text-[#0091DA]" /> Llamar
          </a>
          <button
            onClick={() => goToHeroForm()}
            tabIndex={showStickyBar ? 0 : -1}
            className={`${ctaClass} flex-1 !py-3 !text-sm`}
          >
            Calcular precio
          </button>
        </div>
      </div>
    </div>
  )
}
