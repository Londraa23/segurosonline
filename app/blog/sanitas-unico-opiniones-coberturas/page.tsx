import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Único: Coberturas, Precio y Para Quién Es",
  description: "Todo sobre Sanitas Único: coberturas, precio desde 48,10€/mes, a quién le conviene y qué lo diferencia de otros seguros para mayores de 60. ☎ 624 21 73 23",
  alternates: {
    canonical: "https://segurosonline.net/blog/sanitas-unico-opiniones-coberturas/"
  }
}

export default function SanitasUnicoOpinionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Sanitas Único" }
        ]}
        label="Guías y consejos"
        h1="Sanitas Único: coberturas, precio y a quién le conviene."
        body="Sin límite de edad ni cuestionario de salud. Te contamos qué incluye Sanitas Único y qué valoran quienes lo eligen."
        badges={[{ text: "Lectura: 6 min", variant: "blue" }]}
        trustItems={["Desde 48,10€/mes", "Sin cuestionario de salud", "Sin límite de edad", "Servicios a domicilio"]}
        imageSrc="/images/unsplash/photo-1573497019940-1c28c88b4f3e.jpg"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-04-13">13 de abril de 2026</time>
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
              Sanitas Único es el seguro de salud de Sanitas pensado específicamente para personas a partir de 60 años. Su diferencial no está solo en las coberturas médicas, sino en cómo elimina las dos barreras que más frenan a este colectivo al contratar un seguro: la edad y el cuestionario de salud.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">Lo que más se valora de Sanitas Único</h2>
            <ul className="space-y-3">
              <li><strong>Sin cuestionario de salud:</strong> se contrata independientemente de las patologías o antecedentes del asegurado.</li>
              <li><strong>Sin límite de edad máxima:</strong> ni para contratar ni para mantener la póliza activa con el paso de los años.</li>
              <li><strong>Servicios a domicilio:</strong> envío de medicamentos, auxiliar, fisioterapeuta, podología y peluquería, y acompañamiento a citas médicas.</li>
              <li><strong>Atención telefónica especializada</strong> para mayores, disponible 24h.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Coberturas médicas incluidas</h2>
            <ul className="space-y-3">
              <li>Medicina primaria y todas las especialidades incluidas</li>
              <li>Pruebas diagnósticas simples y de alta tecnología</li>
              <li>Fisioterapia: 10 sesiones incluidas</li>
              <li>Cobertura dental básica</li>
              <li>Videoconsulta y urgencias 24h con Blua digital</li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">¿Sanitas Único tiene copago?</h2>
            <p>No. Sanitas Único se ofrece en una única modalidad, sin copago por uso de los servicios incluidos: pagas tu prima mensual y accedes a las coberturas sin coste adicional por visita. Es una diferencia respecto a otros productos de Sanitas, como Sanitas Profesionales, donde sí existen modalidades con copago para ajustar la prima.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">Precio</h2>
            <p>Sanitas Único tiene un precio de partida de 48,10€/mes. El precio final depende de la edad exacta del asegurado en el momento de la contratación.</p>
          </Reveal>

          <Reveal delay={0.35}>
            <h2 className="text-3xl mt-16 mb-6">¿A quién le conviene?</h2>
            <p>Sanitas Único está pensado sobre todo para quienes buscan un seguro médico a partir de 60 años y quieren evitar el riesgo de que un cuestionario de salud encarezca o dificulte la contratación. Si buscas la máxima cobertura de hospitalización sin restricción de edad para el acceso, también puedes comparar con Sanitas Más Salud, que sí aplica cuestionario de salud al contratar.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Quieres saber si Sanitas Único encaja contigo?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te explicamos las coberturas en detalle y te damos el precio exacto para tu edad.
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
