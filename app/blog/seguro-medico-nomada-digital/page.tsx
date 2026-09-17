import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro Médico para Nómada Digital en España",
  description: "Seguro médico Sanitas para el visado de nómada digital: cobertura completa sin copago, contratación con pasaporte y documentación para el trámite. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/seguro-medico-nomada-digital/"
  }
}

export default function SeguroMedicoNomadaDigitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro médico para nómada digital" }
        ]}
        label="Extranjeros en España"
        h1="Seguro médico para nómada digital en España."
        body="El visado de nómada digital exige un seguro médico de cobertura completa contratado en España. Te explicamos qué necesitas y cómo contratarlo sin estar todavía empadronado."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Contratación con pasaporte", "Cobertura completa sin copago", "Válido para el trámite", "Sin necesidad de NIE previo"]}
        imageSrc="/images/unsplash/photo-1499591934245-40b55745b905.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-03-30">30 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>6 min de lectura</span>
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
              España se ha convertido en uno de los destinos favoritos para trabajadores remotos gracias a su visado de nómada digital. Entre los requisitos del trámite está disponer de un seguro médico privado de cobertura completa contratado con una aseguradora autorizada para operar en España.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Por qué no vale cualquier seguro de viaje?</h2>
            <p>Un seguro de viaje internacional contratado en tu país de origen normalmente no cumple el requisito porque no está emitido por una aseguradora que opere en España. El trámite exige una póliza española, de cobertura completa y sin copagos, que garantice acceso a la atención sanitaria en las mismas condiciones que un residente.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Puedo contratarlo antes de llegar a España?</h2>
            <p>Sanitas Más Salud Extranjeros y Sanitas International Residents permiten la contratación con pasaporte, sin necesidad de tener NIE, NIF o CIF todavía. Solo necesitas poder aportar una dirección de residencia en España (empadronada o comprobable), por lo que puedes gestionarlo en cuanto tengas alojamiento confirmado, sin esperar a tener toda la documentación de extranjería resuelta.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Qué cobertura necesitas</h2>
            <ul className="space-y-3">
              <li>Cobertura sanitaria completa: medicina primaria, especialidades, pruebas diagnósticas y hospitalización</li>
              <li>Sin copagos por consulta o servicio</li>
              <li>Sin límite de gastos médicos al año</li>
              <li>Blua digital incluido, útil si aún no dominas el idioma o necesitas atención mientras te instalas</li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">Documentación para el trámite</h2>
            <p>Al contratar, te facilitamos la documentación sellada de la póliza necesaria para presentar junto con el resto de requisitos del visado de nómada digital. Te recomendamos consultarnos tu caso concreto antes de contratar, ya que la normativa de extranjería puede matizar requisitos según tu situación.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Vienes a España como nómada digital?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te ayudamos a contratar tu seguro médico y a preparar la documentación para el visado, sin necesidad de NIE.
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
