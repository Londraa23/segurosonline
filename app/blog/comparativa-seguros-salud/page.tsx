import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Comparativa Seguros de Salud: Qué Ofrece Sanitas Frente a Otras Aseguradoras | Sanitas Ventas",
  description: "Comparativa honesta entre Sanitas y otras aseguradoras de salud en España: red médica, precios, coberturas digitales y atención al cliente. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/comparativa-seguros-salud/"
  }
}

export default function ComparativaSegurosSaludPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Comparativa Seguros de Salud" }
        ]}
        label="Guías y consejos"
        h1="Comparativa de seguros de salud: ¿Qué ofrece Sanitas frente a otras aseguradoras?"
        body="Analizamos los factores clave (red médica, digitalización y precio) para ayudarte a elegir el mejor seguro privado en España."
        badges={[{ text: "Lectura: 10 min", variant: "blue" }]}
        trustItems={["Sanitas vs Competencia", "Salud Digital", "Red de Hospitales", "Atención al cliente"]}
        imageSrc="https://images.unsplash.com/photo-1454165833267-028cc2402f1b?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2025-03-28">28 de marzo de 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>10 min de lectura</span>
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
              Elegir un seguro de salud es una decisión importante y, en muchos casos, se hace sin la información suficiente para comparar realmente lo que hay sobre la mesa. ¿Es Sanitas mejor que Adeslas o Mapfre? ¿Compensa pagar más por el nombre?
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">Cuadro médico — Sanitas vs. competencia</h2>
            <p>La amplitud y calidad de la red es el factor determinante. Sanitas destaca por sus hospitales universitarios propios, mientras que competidores como Adeslas tienen una cuota de mercado mayor pero menos centros propios.</p>
            <ul className="space-y-3">
              <li><strong>Sanitas:</strong> 57.000 profesionales y red hospitalaria propia líder en tecnología.</li>
              <li><strong>Adeslas:</strong> Red concertada muy extensa en todas las provincias.</li>
              <li><strong>Mapfre / Asisa:</strong> Opciones competitivas en determinadas zonas geográficas.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Salud digital — La gran diferencia</h2>
            <p>Aquí es donde Sanitas toma la delantera clara. Blua es la plataforma más avanzada, incluyendo programas de prevención que otras compañías aún no ofrecen de forma integrada.</p>
            <ul className="space-y-3">
              <li><strong>Blua de Sanitas:</strong> Videoconsultas, urgencias 24h, IA evaluadora y programas de salud incluidos gratis.</li>
              <li><strong>Competencia:</strong> Servicios digitales correctos pero más limitados en especialidades y herramientas preventivas.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">¿Cuándo elegir Sanitas?</h2>
            <p>Sanitas es la mejor opción si valoras la digitalización, el acceso a hospitales propios de prestigio y la solidez de una marca líder internacional.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Quieres que te ayudemos a comparar?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sin compromiso y sin coste, analizamos tu caso para ver qué seguro te conviene más.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Te llamamos gratis
                </a>
                <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0091DA] text-[#0091DA] rounded-full font-bold hover:bg-[#0091DA]/5 transition-colors">
                  Solicitar presupuesto
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
