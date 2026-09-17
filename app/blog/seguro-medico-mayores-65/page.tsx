import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro Médico para Mayores de 65 Años",
  description: "Seguro médico Sanitas para mayores de 65 años: sin cuestionario de salud, sin límite de edad y con servicios a domicilio. Desde 48,10€/mes. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/seguro-medico-mayores-65/"
  }
}

export default function SeguroMedicoMayores65Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro médico mayores de 65" }
        ]}
        label="Sanitas Mayores"
        h1="Seguro médico para mayores de 65 años: qué opciones tienes."
        body="A partir de los 65 años, encontrar un seguro médico sin cuestionario de salud ni límite de edad es clave. Te explicamos cómo funciona Sanitas Único."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Sin cuestionario de salud", "Sin límite de edad", "Servicios a domicilio", "Desde 48,10€/mes"]}
        imageSrc="/images/unsplash/photo-1516307365426-bea591f05011.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-03-09">9 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>6 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Sanitas Mayores</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              Contratar un seguro de salud a partir de los 65 años suele ser más complicado que a los 30: muchas aseguradoras exigen cuestionarios de salud exhaustivos o directamente limitan la edad de contratación. Sanitas Único está diseñado específicamente para evitar ese problema.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">Sanitas Único: la opción pensada para esta etapa</h2>
            <p>Sanitas Único puede contratarse desde los 60 años, sin límite de edad máxima ni para contratar ni para mantener la póliza activa, y sin necesidad de rellenar un cuestionario de salud previo, independientemente de las patologías o antecedentes del asegurado.</p>
            <p className="mt-4">El precio de partida es de 48,10€/mes.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Qué incluye</h2>
            <ul className="space-y-3">
              <li>Medicina primaria y todas las especialidades incluidas</li>
              <li>Pruebas diagnósticas simples y de alta tecnología</li>
              <li>Fisioterapia: 10 sesiones incluidas</li>
              <li>Cobertura dental básica</li>
              <li>Videoconsulta y urgencias 24h con Blua</li>
              <li>Atención telefónica especializada para mayores</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Servicios a domicilio incluidos</h2>
            <p>Además de la cobertura médica, Sanitas Único incluye una serie de servicios pensados para el día a día: envío de medicamentos a domicilio, auxiliar ante situaciones imprevistas, fisioterapeuta a domicilio, podología y peluquería, y acompañamiento a citas médicas y durante la hospitalización.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">¿Y si necesito hospitalización o cirugía?</h2>
            <p>Sanitas Único incluye intervenciones quirúrgicas con o sin ingreso hospitalario. Si en tu caso buscas una cobertura hospitalaria aún más completa, también puedes valorar Sanitas Más Salud, sin límite de edad para mantener la póliza, aunque en ese caso sí se realiza cuestionario de salud al contratar.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Buscas seguro médico sin cuestionario de salud?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te explicamos si Sanitas Único encaja con tu situación y te damos el precio exacto para tu edad.
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
