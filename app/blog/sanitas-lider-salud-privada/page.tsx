import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Por Qué Sanitas es Líder en Salud Privada en España: Innovación y Red Médica | Sanitas Ventas",
  description: "Sanitas lleva más de 60 años siendo referente de la salud privada en España. Te contamos por qué: red médica, innovación digital, hospitalización y Blua. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/sanitas-lider-salud-privada/"
  }
}

export default function SanitasLiderSaludPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Sanitas Líder Salud Privada" }
        ]}
        label="Sobre Sanitas"
        h1="Por qué Sanitas es líder en salud privada en España: innovación, red médica y experiencia."
        body="Descubre los pilares que hacen de Sanitas la aseguradora de referencia: hospitales propios, salud digital de vanguardia y respaldo internacional."
        badges={[{ text: "Lectura: 7 min", variant: "blue" }]}
        trustItems={["+60 años de historia", "57.000+ médicos", "Hospitales universitarios", "Líder en salud digital"]}
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-02-13">13 de febrero de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>7 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Sobre Sanitas</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              Con más de 60 años de historia, Sanitas es la aseguradora de salud privada más reconocida de España. No es casualidad: detrás de ese liderazgo hay una red médica sin parangón, una apuesta decidida por la innovación digital y una filosofía de atención centrada en la persona.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">La red médica más amplia de España</h2>
            <p>El cuadro médico de Sanitas es el más completo del país, garantizando que siempre habrá un especialista disponible en tu zona:</p>
            <ul className="space-y-3">
              <li>Más de 57.000 profesionales médicos en toda España.</li>
              <li>4 hospitales universitarios propios (La Moraleja, La Zarzuela, Virgen del Mar y CIMA).</li>
              <li>Hospital Blua Sanitas Valdebebas: el primer hospital nativo digital de España.</li>
              <li>Más de 200 clínicas Milenium Dental y 25 centros multiespecialidad.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Blua — Salud digital de vanguardia</h2>
            <p>Sanitas ha transformado la atención sanitaria con Blua, plataforma incluida gratis en sus seguros:</p>
            <ul className="space-y-3">
              <li>Videoconsulta con más de 3.100 especialistas.</li>
              <li>Urgencias 24h por videoconsulta sin cita previa.</li>
              <li>Evaluador de síntomas basado en inteligencia artificial.</li>
              <li>Programas de salud personalizados (nutrición, psicología, etc.).</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Respaldo del Grupo Bupa</h2>
            <p>Sanitas pertenece al Grupo Bupa, líder mundial en salud con presencia en más de 190 países. Este respaldo garantiza solvencia financiera, innovación constante y acceso a las mejores prácticas médicas globales.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Únete a la compañía líder en salud</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contrata tu seguro Sanitas con el asesoramiento experto de Sanitas Ventas, con más de 30 años de experiencia.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Contactar ahora
                </a>
                <a href="/seguros-medicos-para-particulares" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0091DA] text-[#0091DA] rounded-full font-bold hover:bg-[#0091DA]/5 transition-colors">
                  Ver seguros médicos
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <BlogPreview />

      <Footer />
    </main>
  )
}
