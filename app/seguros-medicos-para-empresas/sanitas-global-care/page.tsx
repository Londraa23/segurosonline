import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FeatureBlock, BluaSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Sanitas Global Care — Seguro Médico para Empleados en el Extranjero | Sanitas Ventas",
  description: "Sanitas Global Care: cobertura médica mundial para empleados expatriados. Reembolso 100%, hospitalización completa y sin número mínimo de asegurados. Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-empresas/sanitas-global-care/" }
}

const pageFaqs = [
  { question: "¿En qué países tiene cobertura?", answer: "Cobertura médica completa en cualquier país del mundo, sin restricciones geográficas. El reembolso es del 100% en todos los países, excepto en EE.UU. fuera de la red Sanitas donde aplica el 80%." },
  { question: "¿Cuánto tiempo debe estar el empleado en el extranjero para contratarlo?", answer: "Global Care está disponible para estancias a partir de 3 meses en el extranjero. Para desplazamientos más cortos, los seguros de empresa estándar incluyen urgencias en el extranjero hasta 12.000€/año." },
  { question: "¿Cuántos empleados necesito para contratarlo?", answer: "No hay número mínimo de asegurados. Puedes contratarlo para un solo empleado expatriado si lo necesitas." },
  { question: "¿El empleado puede seguir usando sus médicos de Sanitas en España?", answer: "Sí. Gracias a Blua, el empleado puede hacer videoconsulta con especialistas de Sanitas en España estando en cualquier parte del mundo." },
  { question: "¿Cómo funciona el reembolso en la práctica?", answer: "El empleado recibe la atención médica en cualquier centro del mundo, abona los gastos y solicita el reembolso posterior a Sanitas aportando la documentación correspondiente." }
]

export default function SanitasGlobalCarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Empresas", href: "/seguros-medicos-para-empresas" },
          { label: "Sanitas Global Care" }
        ]}
        label="Cobertura mundial · Reembolso 100% · Sin mínimo asegurados"
        h1={<>Sanitas Global Care.<br className="hidden lg:block" /> Tu empresa no tiene fronteras. El cuidado de tus empleados tampoco.</>}
        body="El seguro médico de Sanitas para empleados que trabajan o residen en el extranjero. Cobertura médica completa en cualquier parte del mundo, con reembolso del 100% de los gastos fuera del cuadro Sanitas. Disponible a partir de 3 meses de estancia en el extranjero, sin número mínimo de asegurados."
        badges={["Reembolso 100% mundial", "Desde 3 meses estancia"]}
        trustItems={["Cobertura mundial", "Reembolso 100%", "Hospitalización completa", "Sin mínimo asegurados"]}
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
      />

      <FeatureBlock
        title="Asistencia Hospitalaria y Libertad Total."
        description="Tus empleados pueden acudir a cualquier médico del mundo con reembolso del 100% (80% en EE.UU. fuera de la red). La asistencia no tiene límites."
        items={[
          "Hospitalización en habitación individual e intervenciones mundiales",
          "Cuidados intensivos, prótesis internas y diálisis",
          "Trasplante de órganos y tratamiento psiquiátrico hospitalario",
          "Alojamiento para los padres de pacientes menores de 18 años",
          "Gastos especiales en especialistas o urgencias premium extranjeras"
        ]}
        imageSrc="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=900&q=80&auto=format"
        badge="Tranquilidad Mundial"
      />

      <section className="py-16 bg-[#002A54] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <Reveal>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Asistencia Ambulatoria Total</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Además de hospitales, está la asistencia integral clínica: desde urgencias generales en Londres hasta diagnósticos complejos de fertilidad o tratamientos oncológicos pioneros. Global Care lo soporta todo.
              </p>
              <ul className="space-y-4">
                {[
                  "Gastos de especialistas a libre elección en cualquier nación",
                  "Cirugía ambulatoria local",
                  "Todas las pruebas diagnósticas ambulatorias cubiertas",
                  "Tratamientos oncológicos íntegros asegurados",
                  "Diagnóstico de fertilidad tras carencia estipulada"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 bg-[#0091DA] rounded-full mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Condiciones de contratación</h3>
                <div className="space-y-4 text-sm text-white/80">
                  <div className="flex border-b border-white/10 pb-3 justify-between">
                    <span>Mínimo de estancia extranjera temporal</span><span className="font-bold text-white">3 Meses</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-3 justify-between">
                    <span>Mínimo de personas requeridas en póliza</span><span className="font-bold text-white">1 Empleado</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-3 justify-between">
                    <span>Carencia Parto/Maternidad Extranjera</span><span className="font-bold text-white">8 Meses</span>
                  </div>
                  <div className="flex border-white/10 pt-1 justify-between">
                    <span>Frecuencia de Pagos permitida</span><span className="font-bold text-white text-right">Mensual, Trimestral,<br/>Semestral, Anual</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BluaSection items={[
        "Los empleados siguen conectados con Sanitas España por videoconsulta 24h",
        "Especialistas nacionales disponibles siempre, no importa el huso horario",
        "Programas de salud digitales listos sin sobrecargos en póliza expatriada"
      ]} />

      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">Dos modalidades para cada necesidad.</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-[#0091DA] font-bold uppercase tracking-wider text-sm mb-2">Global Care</div>
                <p className="text-gray-700 leading-relaxed">
                  Cobertura completa con amplios límites para equipos que trabajan en el extranjero. Todo lo que un empleado necesita para estar protegido en cualquier país del mundo, combinando seguridad sin un premium altísimo de capital asegurado hiper-extenso.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-md border-2 border-blue-100 h-full relative">
                <span className="absolute -top-3 left-8 bg-[#0091DA] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Premium Plus</span>
                <div className="text-[#002A54] font-bold uppercase tracking-wider text-sm mb-2">Global Care Premium</div>
                <p className="text-gray-700 leading-relaxed">
                  Modalidad hiper-premium con coberturas adicionales y un ratio mayor de capital disponible anual. Totalmente pensado para empresas que quieren o necesitan blindar ofreciendo el techo más alto de protección a directivos, CEO o expatriados esenciales.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection title="Preguntas sobre Sanitas Global Care" description="Conoce todo el detalle del seguro para expatriados." faqs={pageFaqs} />
      
      <ContactSection 
        label="Tus empleados en el mundo, protegidos por Sanitas." 
        title="¿Te llamamos?" 
        description="Cuéntanos cuántos empleados tienes en el extranjero y en qué países. Te preparamos la propuesta más adecuada." 
      />
      <Footer />
    </main>
  )
}
