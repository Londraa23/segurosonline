import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Qué Seguro Médico Necesito para un Visado en España",
  description: "Requisitos del seguro médico según el trámite: residencia comunitaria, visado de estudios, NIE o nacionalidad. Contratación con pasaporte, sin NIE. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/seguro-medico-visado-espana/"
  }
}

export default function SeguroMedicoVisadoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro médico para visado" }
        ]}
        label="Extranjeros en España"
        h1="Qué seguro médico necesito para un visado en España."
        body="Residencia comunitaria, visado de estudios, nacionalidad o simplemente sacarte el NIE: cada trámite tiene su propio requisito de cobertura sanitaria. Te lo explicamos."
        badges={[{ text: "Lectura: 7 min", variant: "blue" }]}
        trustItems={["Contratación con pasaporte", "Sin necesidad de NIE previo", "Cobertura completa sin copago", "Documentación para el trámite"]}
        imageSrc="/images/unsplash/photo-1436450412740-6b988f486c6b.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-09-11">11 de septiembre de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>7 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Extranjeros en España</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              Uno de los requisitos más comunes en los trámites de extranjería en España es acreditar un seguro médico de cobertura completa, contratado con una aseguradora que opere en territorio español. Pero "seguro médico" no significa lo mismo para todos los trámites.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Para qué trámites piden seguro médico?</h2>
            <p>Entre los más habituales están:</p>
            <ul className="space-y-3">
              <li>Solicitud de residencia comunitaria (ciudadanos de la UE)</li>
              <li>Visados de estudios</li>
              <li>Renovación del permiso de residencia</li>
              <li>Solicitud de la nacionalidad española</li>
              <li>Otros trámites de extranjería con requisito de cobertura completa</li>
            </ul>
            <p className="mt-4">El requisito general es que la póliza no tenga copagos ni carencias que limiten el acceso a la atención médica, y que ofrezca una cobertura equiparable a la sanidad pública. Cada trámite concreto puede tener matices específicos, así que conviene confirmarlo con tu caso antes de contratar.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Puedo contratarlo si todavía no tengo NIE?</h2>
            <p>Sí. Sanitas Más Salud Extranjeros y Sanitas International Residents permiten la contratación con pasaporte, sin necesidad de tener NIE, NIF o CIF en el momento de darte de alta. Es habitual para personas que acaban de llegar a España y están iniciando sus trámites. Solo necesitas poder acreditar una dirección de residencia en España.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Qué incluyen estos seguros</h2>
            <ul className="space-y-3">
              <li>Cobertura sanitaria completa: medicina primaria, especialidades, pruebas diagnósticas y hospitalización</li>
              <li>Sin copagos — el único pago es la prima mensual o anual</li>
              <li>Seguro dental incluido</li>
              <li>Blua digital incluido gratis para siempre</li>
              <li>Documentación sellada para presentar en el trámite correspondiente</li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">Antes de contratar, confirma tu caso concreto</h2>
            <p>Como cada tipo de visado o trámite puede tener requisitos ligeramente distintos (duración mínima de la póliza, cobertura de repatriación, límites económicos, etc.), te recomendamos consultarnos tu situación exacta antes de contratar para asegurarnos de que el seguro cumple con lo que te van a pedir.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Necesitas el seguro para tu trámite de extranjería?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Cuéntanos qué trámite estás haciendo y te confirmamos si el seguro cumple los requisitos antes de contratar.
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
