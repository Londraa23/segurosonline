import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Más Salud vs Avanza: Diferencias",
  description: "Comparativa entre Sanitas Más Salud y Sanitas Avanza: coberturas, hospitalización, precio y para quién es cada uno. Desde 33,60€/mes. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/sanitas-mas-salud-vs-avanza/"
  }
}

export default function MasSaludVsAvanzaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Más Salud vs Avanza" }
        ]}
        label="Guías y consejos"
        h1="Sanitas Más Salud vs Avanza: ¿cuál elegir?"
        body="Los dos seguros más contratados de Sanitas para particulares, comparados cobertura por cobertura para que elijas con criterio."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Avanza: desde 33,60€/mes", "Más Salud: desde 55,26€/mes", "Diferencia clave: hospitalización", "Blua incluido en ambos"]}
        imageSrc="/images/unsplash/photo-1666214280391-8ff5bd3c0bf0.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-04-06">6 de abril de 2026</time>
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
              Sanitas Más Salud y Sanitas Avanza son, junto con Sanitas Accede, los seguros más contratados por particulares. Comparten buena parte de las coberturas, pero hay una diferencia fundamental entre ambos que determina cuál te conviene.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">La diferencia clave: la hospitalización</h2>
            <p>Sanitas Avanza da acceso a todo el cuadro médico Sanitas y a más de 400 intervenciones quirúrgicas ambulatorias (sin necesidad de ingreso hospitalario), pero no incluye hospitalización. Sanitas Más Salud, en cambio, incluye hospitalización completa con habitación privada, además de todas las especialidades y pruebas diagnósticas.</p>
            <p className="mt-4">Si tu prioridad es tener acceso a todo el cuadro médico al mejor precio y no prevés necesitar un ingreso hospitalario a corto plazo, Avanza es una opción sólida. Si quieres la máxima tranquilidad ante cualquier imprevisto, incluida una posible hospitalización, Más Salud es la opción más completa.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Qué comparten ambos seguros</h2>
            <ul className="space-y-3">
              <li>Medicina primaria y acceso a todas las especialidades sin restricciones</li>
              <li>Pruebas diagnósticas: análisis, ecografías, radiografías y más</li>
              <li>Urgencias 24h, presenciales y por videoconsulta con Blua</li>
              <li>Blua digital incluido gratis para siempre</li>
              <li>Cobertura dental básica (Avanza) o Sanitas Dental 21 (Más Salud)</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Precio</h2>
            <ul className="space-y-3">
              <li><strong>Sanitas Avanza:</strong> desde 33,60€/mes</li>
              <li><strong>Sanitas Más Salud:</strong> desde 55,26€/mes</li>
            </ul>
            <p className="mt-4">Ambos incluyen un 4% de descuento adicional si eliges pago anual, y un 10% de descuento vitalicio desde 4 asegurados en la misma póliza.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">¿Puedo pasar de uno a otro más adelante?</h2>
            <p>Sí. Si empiezas con Sanitas Avanza y más adelante decides que necesitas cobertura de hospitalización, puedes ampliar a Sanitas Más Salud sin perder antigüedad ni las coberturas ya adquiridas.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿No tienes claro cuál elegir?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cuéntanos tu situación y te decimos si Avanza o Más Salud encaja mejor contigo.
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
