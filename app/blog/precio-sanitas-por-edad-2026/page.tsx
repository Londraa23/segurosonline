import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Precio de Sanitas por Edad en 2026",
  description: "Qué factores influyen en el precio de un seguro Sanitas según la edad del asegurado, y precios orientativos desde 22,10€/mes por plan. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/precio-sanitas-por-edad-2026/"
  }
}

export default function PrecioSanitasPorEdadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Precio de Sanitas por Edad" }
        ]}
        label="Guías y consejos"
        h1="Precio de Sanitas por edad en 2026: qué influye en tu prima."
        body="La edad es uno de los factores que Sanitas tiene en cuenta al calcular tu prima, pero no el único. Te explicamos cómo funciona y qué precios de partida puedes esperar."
        badges={[{ text: "Lectura: 7 min", variant: "blue" }]}
        trustItems={["Desde 22,10€/mes", "4% dto. pago anual", "10% dto. desde 4 asegurados", "Precio según edad y plan"]}
        imageSrc="/images/unsplash/photo-1450101499163-c8848c66ca85.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-03-02">2 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>7 min de lectura</span>
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
              Una de las preguntas más habituales al contratar un seguro de salud privado es cuánto va a costar según la edad del asegurado. Sanitas, como el resto de aseguradoras, aplica un cálculo de prima que tiene en cuenta la edad junto con otros factores.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Por qué influye la edad en el precio?</h2>
            <p>Estadísticamente, el uso de servicios médicos tiende a aumentar con la edad. Por eso la prima de un asegurado de 60 años suele ser más alta que la de uno de 30 años para el mismo producto. Es un criterio actuarial estándar en todo el sector, no algo exclusivo de Sanitas.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Qué más influye además de la edad</h2>
            <ul className="space-y-3">
              <li><strong>El plan elegido:</strong> un seguro de entrada como Sanitas Accede parte de un precio más bajo que uno todo incluido como Sanitas Más Salud.</li>
              <li><strong>La modalidad de copago:</strong> elegir una modalidad con copago reduce la prima mensual.</li>
              <li><strong>El número de asegurados:</strong> desde 4 asegurados en la misma póliza, se aplica un 10% de descuento vitalicio.</li>
              <li><strong>La forma de pago:</strong> pagar la prima de forma anual da derecho a un 4% de descuento adicional.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Precios de partida por producto (2026)</h2>
            <p>Estos son los precios "desde" de nuestros productos más contratados para particulares. El precio final para tu caso concreto depende de tu edad y las coberturas seleccionadas:</p>
            <ul className="space-y-3">
              <li>Sanitas Accede: desde 22,10€/mes</li>
              <li>Sanitas Avanza: desde 33,60€/mes</li>
              <li>Sanitas Único (60 años en adelante, sin cuestionario de salud): desde 48,10€/mes</li>
              <li>Sanitas Más Salud (todo incluido): desde 55,26€/mes</li>
              <li>Sanitas TOP QUANTUM (premium, con reembolso): desde 57,96€/mes</li>
            </ul>
            <p className="mt-4">Para mayores de 60 años sin cuestionario de salud previo, Sanitas Único es habitualmente la opción más adecuada, ya que no aplica un incremento de prima por historial médico.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">¿Cómo consigo el precio exacto para mi edad?</h2>
            <p>Los precios de partida son orientativos. Para conocer tu precio exacto, lo más rápido es que nos indiques tu edad, el plan que te interesa y si quieres incluir a más personas en la póliza — te damos el precio final en minutos, sin compromiso.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Quieres saber cuánto te costaría a ti?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te calculamos el precio exacto según tu edad, tu plan y el número de personas a asegurar.
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
