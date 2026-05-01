import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguro Médico para Embarazo: Guía Completa para Futuras Madres 2026 | Sanitas Ventas",
  description: "Todo lo que necesitas saber sobre el seguro médico privado durante el embarazo: coberturas, carencias, cuándo contratar y qué incluye Sanitas. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/seguro-medico-embarazo/"
  }
}

export default function SeguroMedicoEmbarazoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seguro Médico para Embarazo" }
        ]}
        label="Maternidad y familia"
        h1="Seguro médico para embarazo: guía completa para futuras madres."
        body="Descubre qué cubre tu seguro Sanitas durante la gestación, el parto y el postparto, y cómo gestionar los periodos de carencia."
        badges={[{ text: "Lectura: 10 min", variant: "blue" }]}
        trustItems={["Ginecólogo a tu elección", "Parto y cesárea", "Habitación individual", "Atención postparto"]}
        imageSrc="https://images.unsplash.com/photo-1559734840-f9509ee5677f?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-03-27">27 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>10 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Maternidad y familia</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              Estar embarazada es uno de los momentos más importantes de la vida. También uno de los que más se valora tener acceso rápido y de calidad a los mejores profesionales: tu ginecólogo de confianza, sin esperas, en el centro que eliges. Con toda la tranquilidad de saber que estás en las mejores manos.
            </p>
            <p>
              Un seguro de salud privado puede marcar una gran diferencia durante el embarazo, el parto y el postparto. En esta guía te explicamos exactamente qué cubre, cuándo contratar, cómo funcionan los periodos de carencia y qué ventajas concretas ofrece el seguro Sanitas para madres y bebés.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Vale la pena tener seguro privado durante el embarazo?</h2>
            <p>Muchas mujeres optan por la sanidad privada durante el embarazo por razones muy concretas:</p>
            <ul className="space-y-3">
              <li><strong>Elección de ginecólogo:</strong> eliges al profesional con el que más cómoda te sientes y mantienes esa continuidad.</li>
              <li><strong>Sin esperas para consultas:</strong> tienes cita en días para resolver cualquier duda.</li>
              <li><strong>Pruebas complementarias:</strong> acceso a ecografías adicionales y pruebas genéticas prenatales como el test no invasivo.</li>
              <li><strong>Habitación individual:</strong> con cama para el acompañante en el momento del parto.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué cubre el seguro Sanitas durante el embarazo?</h2>
            
            <h3 className="text-2xl mt-10 mb-4">Seguimiento del embarazo</h3>
            <ul className="space-y-3">
              <li>Consultas con ginecólogo sin límite</li>
              <li>Ecografías del primer, segundo y tercer trimestre</li>
              <li>Analíticas y pruebas de laboratorio del control gestacional</li>
              <li>Test de O'Sullivan y pruebas genéticas si se indican</li>
            </ul>

            <h3 className="text-2xl mt-10 mb-4">Parto y cesárea</h3>
            <ul className="space-y-3">
              <li>Asistencia al parto vaginal o cesárea y anestesia epidural</li>
              <li>Hospitalización en habitación individual con cama para acompañante</li>
              <li>Todos los gastos médicos del parto e ingreso hospitalario</li>
            </ul>

            <h3 className="text-2xl mt-10 mb-4">El bebé recién nacido</h3>
            <p>El bebé puede incorporarse a la póliza familiar desde su nacimiento, con acceso a pediatría desde el primer día.</p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Los periodos de carencia — la clave que debes conocer</h2>
            <p>En Sanitas, la cobertura de parto tiene un periodo de carencia de 8 meses. Esto significa que debes contratar el seguro antes de quedarte embarazada o muy al principio para que la carencia expire antes del parto.</p>
            <p><strong>Eliminación de carencia:</strong> Si llevas al menos 1 año en otra compañía de cobertura completa, puedes eliminar la carencia de parto al pasarte a Sanitas.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">Pruebas genéticas prenatales con Sanitas</h2>
            <p>Sanitas ofrece el Test Genético Prenatal No Invasivo a partir de la semana 10, detectando trisomías frecuentes sin ningún riesgo para la madre ni el bebé.</p>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Estás planificando un embarazo o ya estás esperando un bebé?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Te orientamos sobre qué puedes cubrir ahora mismo y cómo gestionar tu alta en Sanitas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Llamar 91 726 46 33
                </a>
                <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0091DA] text-[#0091DA] rounded-full font-bold hover:bg-[#0091DA]/5 transition-colors">
                  Solicitar información
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
