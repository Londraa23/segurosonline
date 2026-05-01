import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguros Médicos para Autónomos: Ventajas Fiscales y Deducciones 2026 | Sanitas Ventas",
  description: "Guía completa sobre las ventajas fiscales del seguro médico para autónomos en 2026: cuánto te puedes deducir, cómo aplicarlo y qué cubre Sanitas Profesionales. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/seguros-autonomos-ventajas-fiscales-2026/"
  }
}

export default function SegurosAutonomosFiscalidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguros Autónomos Ventajas Fiscales" }
        ]}
        label="Autónomos y empresa"
        h1="Seguros médicos para autónomos: ventajas fiscales y nuevas deducciones en 2026."
        body="Descubre cómo ahorrar en tu declaración de IRPF deduciendo las primas de tu seguro de salud y el de tu familia."
        badges={[{ text: "Lectura: 9 min", variant: "blue" }]}
        trustItems={["Deducción hasta 500€/persona", "Ahorro fiscal directo", "Sanitas Profesionales", "Cónyuge e hijos incluidos"]}
        imageSrc="https://images.unsplash.com/photo-1554224155-1696413565d3?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-01-16">16 de enero de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>9 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Autónomos y empresa</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              Para un autónomo, el seguro de salud no es solo una cuestión de bienestar — es también una herramienta fiscal de primer orden. Cada euro que pagas en primas de seguro médico puede reducir lo que pagas en tu declaración de IRPF.
            </p>
            <p>
              En esta guía te explicamos exactamente cuánto puedes deducirte, cómo aplicar la deducción correctamente, qué ha cambiado en 2026 y por qué Sanitas Profesionales es el seguro más completo para trabajadores por cuenta propia.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Puede un autónomo deducirse el seguro médico?</h2>
            <p>Sí. La Ley del IRPF establece que los trabajadores autónomos en Régimen de Estimación Directa pueden deducirse las primas del seguro de salud privado como gasto de actividad económica.</p>
            <p>Esta deducción se aplica sobre:</p>
            <ul className="space-y-3">
              <li>La prima del propio autónomo</li>
              <li>La prima del cónyuge o pareja de hecho</li>
              <li>Las primas de los hijos menores de 26 años convivientes</li>
            </ul>
            <p className="mt-4 font-bold">Límite: 500€ por persona y año (1.500€ en caso de discapacidad).</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Cuánto me puedo deducir exactamente?</h2>
            <p>Imagina que eres autónomo con pareja y dos hijos menores de 26 años:</p>
            <ul className="space-y-3">
              <li>Tu prima: 500€ deducibles</li>
              <li>Prima pareja: 500€ deducibles</li>
              <li>Prima hijo 1: 300€ deducibles</li>
              <li>Prima hijo 2: 300€ deducibles</li>
            </ul>
            <p className="mt-4 font-bold">Total deducible: 1.600€/año de tu base imponible del IRPF.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Más allá de la fiscalidad — por qué Sanitas Profesionales</h2>
            <p>Si no trabajas, no ingresas. Sanitas Profesionales incluye coberturas exclusivas para autónomos:</p>
            <ul className="space-y-3">
              <li>Reembolso de la prima durante una baja por incapacidad</li>
              <li>Apoyo doméstico y cuidado de hijos</li>
              <li>Accidentes de tráfico y laborales incluidos</li>
              <li>Asistencia informática en casa y envío de medicamentos</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Quieres aprovechar al máximo las ventajas fiscales?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te explicamos cómo contratar Sanitas Profesionales y optimizar tu fiscalidad como autónomo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Asesoramiento gratuito
                </a>
                <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0091DA] text-[#0091DA] rounded-full font-bold hover:bg-[#0091DA]/5 transition-colors">
                  ¿Te llamamos?
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
