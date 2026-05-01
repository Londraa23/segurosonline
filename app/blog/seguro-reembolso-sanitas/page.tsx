import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro de Salud con Reembolso Sanitas: Qué Es y Cómo Funciona | Sanitas Ventas",
  description: "Guía completa sobre los seguros de reembolso de Sanitas: qué es, cómo funciona, diferencias con el cuadro médico y qué productos ofrece Sanitas. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/seguro-reembolso-sanitas/"
  }
}

export default function SeguroReembolsoSanitasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro de Reembolso Sanitas" }
        ]}
        label="Guías y consejos"
        h1="Seguro de salud con reembolso Sanitas: qué es y cómo funciona."
        body="Descubre la libertad total de elegir cualquier médico del mundo y cómo Sanitas te devuelve los gastos de tu consulta."
        badges={[{ text: "Lectura: 8 min", variant: "blue" }]}
        trustItems={["Libertad total de elección", "Reembolso mundial", "Hasta 500.000€/año", "Cuadro médico incluido"]}
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-02-27">27 de febrero de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>8 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Guías y consejos</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              ¿Cuadro médico o reembolso? Esta es una de las dudas más frecuentes cuando alguien se plantea contratar un seguro de salud privado. Muchas personas no entienden bien la diferencia y acaban contratando una modalidad que no es la que más les conviene.
            </p>
            <p>
              En esta guía te explicamos de forma clara qué es exactamente un seguro de reembolso, cómo funciona en la práctica, en qué se diferencia del cuadro médico tradicional y qué opciones ofrece Sanitas.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué es un seguro de salud con reembolso?</h2>
            <p>Es un tipo de póliza que te permite acudir a cualquier médico o centro del mundo, pertenezca o no a la red de Sanitas. Tú abonas la factura y la aseguradora te devuelve un porcentaje (70%, 80% o 90%) hasta un límite anual.</p>
            <p>Es la opción ideal para quienes quieren acceder a los mejores especialistas mundiales sin restricciones de red.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Cómo funciona en la práctica?</h2>
            <ol className="space-y-4">
              <li><strong>Eliges al médico:</strong> En cualquier lugar de España o del extranjero.</li>
              <li><strong>Abonas la consulta:</strong> Pagas directamente en el centro.</li>
              <li><strong>Solicitas el reembolso:</strong> Envías la factura y el informe vía app Mi Sanitas.</li>
              <li><strong>Recibes el dinero:</strong> Sanitas te ingresa el porcentaje contratado en tu cuenta.</li>
            </ol>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Los seguros de reembolso de Sanitas</h2>
            <ul className="space-y-4">
              <li><strong>Sanitas Más 90.000:</strong> Cuadro médico completo + reembolso del 70% hasta 90.000€/año.</li>
              <li><strong>Sanitas Premium 500.000:</strong> El reembolso más alto del mercado, con farmacia, dental y cobertura en EE.UU.</li>
              <li><strong>Sanitas International Residents:</strong> Diseñado para extranjeros, con reembolso mundial hasta 300.000€.</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Buscas la máxima libertad médica?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te orientamos sobre qué seguro de reembolso se adapta mejor a tu perfil y presupuesto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Consultar opciones
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
