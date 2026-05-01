import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FeatureBlock, BluaSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Sanitas International Residents — Seguro Médico para Extranjeros | Sanitas Ventas",
  description: "Sanitas International Residents: cobertura completa con reembolso 80-90% para extranjeros en España. Todo incluido, Dental 21 incluido, válido para residencia.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-extranjeros/sanitas-international-residents/" }
}

const pageFaqs = [
  { question: "¿Es válido para solicitar la residencia en España?", answer: "Sí. Sanitas International Residents cumple los requisitos de cobertura sanitaria exigidos para residencia comunitaria y otros trámites de extranjería. Consúltanos con tu tipo de visado o trámite concreto para confirmarlo." },
  { question: "¿Qué es un seguro de cuadro médico y qué es el reembolso?", answer: "El cuadro médico te da acceso a los médicos y centros de la red Sanitas. El reembolso te permite ir a cualquier médico del mundo fuera de esa red y Sanitas te devuelve un porcentaje de los gastos. International Residents incluye ambas modalidades." },
  { question: "¿Puedo usar el seguro desde fuera de España?", answer: "Sí. Dispones de cobertura de urgencias en el extranjero hasta 12.000€/año para estancias fuera de España. Además, el reembolso aplica a médicos en cualquier parte del mundo. Para asistencia urgente en el extranjero: +34 91 345 65 84." },
  { question: "¿Puedo contratar si acabo de llegar a España?", answer: "Sí, desde que tengas dirección de residencia en España. El seguro se activa desde la fecha de efecto que acuerdes al contratar." },
  { question: "¿Hay gastos adicionales cuando uso el seguro?", answer: "No. No existen gastos adicionales por uso ni franquicias de ningún tipo. El único pago es la prima mensual o anual." },
  { question: "¿Incluye cobertura dental?", answer: "Sí. Sanitas Dental 21 está incluido: 30 servicios dentales en cobertura y hasta un 21% de descuento en el resto de tratamientos en toda la red dental Sanitas." }
]

export default function SanitasInternationalResidentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Extranjeros", href: "/seguros-medicos-para-extranjeros" },
          { label: "Sanitas International Residents" }
        ]}
        label="Reembolso 80-90% · Todo incluido · Dental 21 incluido · Blua GRATIS"
        h1={<>Sanitas International Residents.<br className="hidden lg:block" /> Un seguro de salud específico para extranjeros residentes en España.</>}
        body="Asistencia sanitaria completa con libre elección de especialistas, reembolso de gastos médicos en cualquier parte del mundo y todo incluido. Diseñado para extranjeros residentes en España que quieren la máxima cobertura dentro y fuera del cuadro médico Sanitas. Con Blua digital incluido gratis para siempre."
        badges={["Todo incluido", "Reembolso mundial", "Válido trámites legales"]}
        trustItems={["Libre elección mundial", "Todo incluido", "Repatriación incluida", "Edad máx. 64 años"]}
        imageSrc="https://images.unsplash.com/photo-1512100356956-c1227c331f01?w=1600&q=80&auto=format"
      />

      <FeatureBlock
        title="¿Qué incluye tu seguro?"
        description="Sanitas International Residents es un seguro de salud de asistencia completa pensado para cubrir tus necesidades de salud tanto dentro como fuera del país."
        items={[
          "Atención primaria: medicina general, pediatría, enfermería, urgencias",
          "Acceso a todas las especialidades: dermatología, ginecología y más",
          "Pruebas diagnósticas: análisis, endoscopias, TAC, radiografías",
          "Métodos terapéuticos y oncológicos simples y complejos",
          "Intervenciones quirúrgicas ambulatorias y con ingreso hospitalario",
          "Hospitalización con ingresos y estancias completas"
        ]}
        imageSrc="https://images.unsplash.com/photo-1544568100-847a948585b9?w=900&q=80&auto=format"
        badge="Salud Integral"
      />

      <section className="py-16 bg-[#002A54] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Libertad total: Reembolso fuera del cuadro.</h2>
            <p className="text-white/80 leading-relaxed text-lg">
              Permite acudir al especialista o centro médico de cualquier parte del mundo y solicitar tu reembolso correspondiente abonando previamente el gasto.
            </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full backdrop-blur-sm relative">
                <div className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-3">Modalidad 150.000€</div>
                <h3 className="text-4xl font-black mb-3">80%</h3>
                <p className="text-white/80 leading-relaxed">
                  Reembolso del 80% de los gastos en cualquier médico o centro del mundo, hasta agotar un máximo anual de 150.000€ por persona.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full backdrop-blur-sm relative">
                <div className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-3">Modalidad 300.000€</div>
                <h3 className="text-4xl font-black mb-3">90%</h3>
                <p className="text-white/80 leading-relaxed">
                  Reembolso del 90% de los gastos en cualquier médico o centro del mundo, asegurando un techo más elevado de hasta 300.000€ anuales por persona.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-white/90">
                <div className="p-5 bg-white/5 rounded-2xl">
                  <strong>Cobertura Dental</strong><br/>Sanitas Dental 21 incluido — 30 servicios sin coste y resto al 21% de descuento.
                </div>
                <div className="p-5 bg-white/5 rounded-2xl">
                  <strong>Repatriación</strong><br/>Traslado integral al país de origen avalado por tramitadores en caso de fallecimiento.
                </div>
                <div className="p-5 bg-white/5 rounded-2xl">
                  <strong>2ª Opinión Médica</strong><br/>Acceso a especialistas internacionales de reconocido prestigio intercedido por Sanitas.
                </div>
                <div className="p-5 bg-white/5 rounded-2xl">
                  <strong>Modelo de Pago</strong><br/>Cero copagos ni franquicias en uso (0€). Sólo la prima regular y pago anual bonificado (4%).
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Carencias y Requisitos en Grid */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-bold tracking-tight text-[#002A54] mb-6">Periodos de Carencia</h2>
              <div className="bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col h-full space-y-4 text-sm text-gray-700">
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span>Cirugías G. 0–II (OMC)</span><span className="font-bold text-[#002A54]">3 Meses</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span>Alta tecnología y psicología</span><span className="font-bold text-[#002A54]">6 Meses</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span>Parto o cesárea</span><span className="font-bold text-[#002A54]">8 Meses</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span>Tratamientos complejos y litotricia</span><span className="font-bold text-[#002A54]">10 Meses</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span>Ligadura trompas / vasectomía</span><span className="font-bold text-[#002A54]">10 Meses</span>
                </div>
                <div className="flex justify-between">
                  <span>Hospitalización / Cirugías G. III–VIII</span><span className="font-bold text-[#002A54]">10 Meses</span>
                </div>
                <p className="text-xs text-gray-500 pt-4 mt-2 border-t border-gray-100">Si llevas al menos 1 año en póliza nacional puedes reducir estos tiempos al asegurar tu entrada en Sanitas.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold tracking-tight text-[#002A54] mb-6">Condiciones del Contrato</h2>
              <div className="bg-blue-50/50 rounded-3xl p-6 border border-blue-100 h-full flex flex-col space-y-4">
                <ul className="space-y-4">
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Residir en España al menos 6 meses al año (vigencia contrato)
                   </li>
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Aportar dirección de residencia empadronada o comprobable en España
                   </li>
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Documento válido legal en regla: NIF, CIF, Pasaporte o NIE
                   </li>
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Edad máxima permitida de contratación: 64 años
                   </li>
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Sin edad máxima de expulsión o permanencia una vez contratado
                   </li>
                   <li className="flex gap-3 text-gray-700 text-sm">
                     <span className="text-[#0091DA] font-bold">·</span> Recargo único del 0,15% solo sobre el primer mes
                   </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BluaSection items={[
        "Videoconsulta con especialistas sin salir de casa",
        "Evaluador de síntomas, fisioterapia digital y psicología online",
        "Llevas a tu médico de España siempre contigo en la app gratuita"
      ]} />

      <FaqSection title="Preguntas sobre International Residents" description="Resolviendo las cuestiones más particulares sobre coberturas extranjeras." faqs={pageFaqs} />
      
      <ContactSection 
        label="Tu salud en España, en buenas manos." 
        title="¿Te llamamos?" 
        description="Te ayudamos con la contratación y con la documentación que necesites para tus trámites. En el idioma que prefieras, guiado paso a paso por expertos en derecho migratorio." 
      />
      <Footer />
    </main>
  )
}
