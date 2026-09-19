import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro Sanitas Con Copago vs Sin Copago",
  description: "Diferencias entre las modalidades con copago y sin copago de Sanitas: qué pagas, cuánto ahorras en la prima y cuál te conviene según tu uso. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/copago-vs-sin-copago-sanitas/"
  }
}

export default function CopagoVsSinCopagoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Copago vs Sin Copago" }
        ]}
        label="Guías y consejos"
        h1="Seguro Sanitas con copago vs sin copago: ¿cuál te conviene?"
        body="Las mismas coberturas médicas, a distinto precio según cómo pagas cada visita. Te explicamos la diferencia para que elijas con criterio."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Mismas coberturas", "Prima más baja con copago", "Tope anual en algunas modalidades", "Depende de tu uso"]}
        imageSrc="/images/unsplash/photo-1519494026892-80bbd2d6fd0d.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-08-27">27 de agosto de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>6 min de lectura</span>
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
              En algunos productos de Sanitas, como Sanitas Profesionales, puedes elegir entre varias modalidades de la misma póliza. Las coberturas médicas son idénticas en todas — lo que cambia es cuánto pagas cada mes y cuánto pagas cada vez que usas el seguro.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué es el copago?</h2>
            <p>El copago es una pequeña cantidad que abonas cada vez que utilizas un servicio médico (una consulta, una prueba, una sesión de fisioterapia). A cambio de asumir ese coste puntual, la prima mensual del seguro es más baja.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Las tres modalidades de Sanitas Profesionales</h2>
            <ul className="space-y-3">
              <li><strong>Sin Copago:</strong> prima más alta, pero no pagas nada adicional al usar el seguro. Ideal si prevés un uso frecuente y quieres cero sorpresas.</li>
              <li><strong>Plus:</strong> prima intermedia, con un copago que tiene un tope máximo de 360€ al año por asegurado. Una vez alcanzado ese tope, no pagas más en el resto del año.</li>
              <li><strong>Óptima:</strong> la prima más económica, con copago sin tope anual. La opción más ajustada para quienes usan el seguro de forma ocasional.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">¿Cómo elegir la modalidad adecuada?</h2>
            <p>La decisión depende sobre todo de la frecuencia con la que prevés usar el seguro:</p>
            <ul className="space-y-3">
              <li>Si tienes hijos pequeños o visitas al médico con frecuencia, Sin Copago suele compensar a medio plazo.</li>
              <li>Si vas al médico de forma puntual (revisiones y algún imprevisto al año), Óptima es normalmente la opción más económica en el cómputo anual.</li>
              <li>Plus es un término medio razonable si no tienes claro tu patrón de uso.</li>
            </ul>
            <p className="mt-4">Puedes cambiar de modalidad en la renovación de tu póliza sin perder antigüedad ni coberturas, así que no es una decisión irreversible.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿No sabes cuál te sale más a cuenta?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cuéntanos cómo usas habitualmente el seguro médico y te calculamos qué modalidad te conviene.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34624217323" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
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

      <ContactSection
        label="CONTACTO"
        title="¿Hablamos de tu salud?"
        description="Estamos en España para ayudarte. Ven a vernos o llámanos para resolver cualquier duda."
      />

      <Footer />
    </main>
  )
}
