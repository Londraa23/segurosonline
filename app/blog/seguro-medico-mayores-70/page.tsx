import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro Médico para Mayores de 70 Años",
  description: "A los 70 años muchas aseguradoras dejan de admitir nuevas altas. Te explicamos qué opciones de seguro médico y de decesos ofrece Sanitas sin límite de edad. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/seguro-medico-mayores-70/"
  }
}

export default function SeguroMedicoMayores70Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro médico mayores de 70" }
        ]}
        label="Sanitas Mayores"
        h1="Seguro médico para mayores de 70 años: sin límite de edad."
        body="A partir de los 70, muchas aseguradoras directamente dejan de admitir nuevas altas. Te contamos qué opciones siguen disponibles con Sanitas."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Sin edad máxima", "Sin cuestionario de salud", "Geriatría incluida", "Asistencia Senior desde 75"]}
        imageSrc="/images/unsplash/photo-1447452001602-7090c7ab2db3.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-09-08">8 de septiembre de 2026</time>
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
              A partir de los 70 años, buena parte del mercado asegurador limita o encarece mucho el acceso a nuevas pólizas de salud. Es precisamente en esta etapa cuando más sentido tiene contar con una cobertura sin restricciones de edad.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">Sanitas Único no tiene edad máxima</h2>
            <p>Sanitas Único puede contratarse a partir de los 60 años y no existe límite de edad máxima, ni para darte de alta ni para mantener la póliza activa con el paso de los años. Tampoco exige cuestionario de salud, por lo que tu historial médico previo no condiciona la contratación.</p>
            <p className="mt-4">El precio de partida es de 48,10€/mes, e incluye medicina primaria, especialidades, pruebas diagnósticas, fisioterapia, cobertura dental básica y Blua digital.</p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Cuidados y bienestar en Sanitas Mayores</h2>
            <p>Más allá del seguro médico, Sanitas dispone de una red específica de servicios pensados para esta etapa: residencias, centros de día, cuidados a domicilio y rehabilitación para mayores. Son servicios independientes del seguro de salud, y los clientes de Sanitas Único acceden a condiciones preferentes en esta red.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Asistencia Senior: protección para mayores de 75 años</h2>
            <p>Para quienes tienen 75 años o más y no cuentan con un seguro de decesos, Sanitas ofrece Asistencia Senior Prima Única: un único pago que cubre el servicio fúnebre, el traslado del fallecido y los acompañantes, la asistencia jurídica y el otorgamiento de testamento notarial. No es un seguro médico, sino un complemento pensado para dar tranquilidad a la familia.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué pasa si ya tengo un seguro y quiero cambiarme?</h2>
            <p>Si llevas al menos 1 año con una póliza de salud completa en otra compañía, puedes solicitar la eliminación de los periodos de carencia de tu nueva póliza Sanitas Único al aportar la documentación de tu seguro anterior.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Te preocupa que te digan que no por la edad?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Con Sanitas Único no hay cuestionario de salud ni edad máxima. Te explicamos las condiciones exactas para tu caso.
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
