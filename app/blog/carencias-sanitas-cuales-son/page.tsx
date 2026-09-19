import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Carencias Sanitas: Cuáles Son y Cómo Eliminarlas",
  description: "Qué son los periodos de carencia de Sanitas, cuánto duran según la cobertura y cómo eliminarlos si vienes de otra compañía. Guía 2026. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/carencias-sanitas-cuales-son/"
  }
}

export default function CarenciasSanitasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Carencias Sanitas" }
        ]}
        label="Guías y consejos"
        h1="Carencias Sanitas: cuáles son y cómo eliminarlas."
        body="Los periodos de carencia son habituales en cualquier seguro de salud. Te explicamos cuánto duran en Sanitas y cómo reducirlos o eliminarlos al contratar."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Carencias por cobertura", "Eliminables con seguro previo", "Parto: no eliminable", "Sanitas Accede: sin carencias"]}
        imageSrc="/images/unsplash/photo-1576091160550-2173dba999ef.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-08-22">22 de agosto de 2026</time>
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
              Una carencia es el tiempo que debe pasar desde que contratas un seguro hasta que puedes usar una cobertura concreta. Es una práctica estándar del sector asegurador, y Sanitas no es una excepción: cuanto más compleja es la prestación, mayor suele ser el periodo de espera.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Cuánto duran las carencias en Sanitas?</h2>
            <p>Los plazos varían según el tipo de cobertura. A modo orientativo, en los seguros de cuadro médico completo (Sanitas Más Salud, TOP QUANTUM, Sanitas Profesionales) las carencias habituales son:</p>
            <ul className="space-y-3">
              <li>Intervenciones quirúrgicas grupo 0–II: 3 meses</li>
              <li>Psicología: 3 meses</li>
              <li>Pruebas diagnósticas de alta tecnología: 6 meses</li>
              <li>Hospitalización e intervenciones grupo III–VIII: 8 meses</li>
              <li>Parto o cesárea: 8 meses (no eliminable)</li>
              <li>Ligadura de trompas y vasectomía: 10 meses</li>
            </ul>
            <p className="mt-4">La medicina primaria, las urgencias y las consultas de especialista suelen estar disponibles desde el primer día en la mayoría de los productos.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Se pueden eliminar las carencias?</h2>
            <p>Sí, en la mayoría de los casos. Si en el momento de contratar llevas al menos 1 año con una póliza de salud completa en otra compañía en España, puedes solicitar la eliminación de las carencias de tu nueva póliza Sanitas (excepto la de parto, que nunca es eliminable).</p>
            <p>Para acreditarlo necesitas aportar:</p>
            <ul className="space-y-3">
              <li>Copia de las condiciones particulares de tu póliza anterior (o tarjeta sanitaria con fecha de alta)</li>
              <li>El último recibo o justificante de pago de esa póliza</li>
            </ul>
            <p className="mt-4">Puedes gestionarlo durante el proceso de contratación o justo después de darte de alta.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">¿Hay algún seguro Sanitas sin carencias?</h2>
            <p>Sí. Sanitas Accede, pensado como puerta de entrada a la red médica Sanitas, no tiene periodos de carencia: puedes usarlo desde el mismo día en que se activa la póliza. Los seguros dentales (Dental Milenium y Dental Premium) tampoco tienen carencias ni exclusiones por historial previo.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Quieres saber qué carencias tendrías en tu caso?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te decimos exactamente qué plazos aplican según el seguro que elijas y si puedes eliminarlos.
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
