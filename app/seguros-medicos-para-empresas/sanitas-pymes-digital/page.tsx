import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FeatureBlock, BluaSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Pymes Digital — Seguro Médico para Pymes | Sanitas Ventas",
  description: "Sanitas Pymes Digital: el seguro de salud más innovador para pymes. Cobertura completa, dental incluido, videoconsulta 24h, fisioterapia en el trabajo.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-empresas/sanitas-pymes-digital/" }
}

const pageFaqs = [
  { question: "¿A partir de cuántos empleados puedo contratarlo?", answer: "Sanitas Pymes Digital está disponible a partir de 5 empleados. Consúltanos para condiciones específicas según el tamaño de tu plantilla." },
  { question: "¿La prima varía según la edad de los empleados?", answer: "No. En los seguros de empresa de Sanitas la prima es colectiva, no individual por edad. Todos los empleados tienen la misma prima independientemente de cuántos años tengan." },
  { question: "¿Los empleados pueden añadir a su familia?", answer: "Sí. Los empleados pueden extender la cobertura a su pareja e hijos. Además, estas primas familiares tienen ventajas fiscales adicionales." },
  { question: "¿Incluye accidentes de tráfico?", answer: "Sí. Sanitas Pymes Digital incluye asistencia médica en accidentes de tráfico y laborales sin límites y sin necesidad de trámites adicionales." },
  { question: "¿Tiene periodos de carencia?", answer: "Sí, algunos servicios tienen periodos de carencia estándar. Los desplazamientos al extranjero están cubiertos en estancias inferiores a 3 meses. Consúltanos los detalles específicos." }
]

export default function SanitasPymesDigitalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Empresas", href: "/seguros-medicos-para-empresas" },
          { label: "Sanitas Pymes Digital" }
        ]}
        label="Hospitalización · Dental 21 · Accidentes laborales · Videoconsulta 24h"
        h1={<>Sanitas Pymes Digital.<br className="hidden lg:block" /> El seguro de salud para pymes más innovador.</>}
        body="Con Sanitas Pymes Digital cuidas de tu empresa cuidando de tus empleados. Al contar con un seguro de salud, tu empleado se siente más cuidado, motivado y comprometido, lo que ayuda al buen funcionamiento de tu empresa. Cobertura sanitaria completa con servicios digitales exclusivos diseñados para el entorno laboral."
        badges={["Hospitalización incluida", "Servicios digitales únicos", "Dental incluido"]}
        trustItems={["Cobertura completa", "Dental incluido", "Accidentes laborales", "Fisioterapia en el trabajo"]}
        imageSrc="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=1600&q=80&auto=format"
      />

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-5">
              ¿Qué incluye Sanitas Pymes Digital?
            </h2>
            <p className="text-lg text-gray-600">
              Un seguro diseñado para cubrir lo esencial y proteger a tu equipo ante cualquier imprevisto sin interrumpir su vida laboral.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Tarjeta Coberturas Médicas */}
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 h-full flex flex-col">
                <div className="bg-[#002A54] text-white font-bold text-sm uppercase tracking-wider rounded-lg px-4 py-2 inline-block w-max mb-6">Coberturas Médicas</div>
                <ul className="space-y-4">
                  {[
                    "Medicina primaria: medicina general, pediatría, enfermería, urgencias",
                    "Acceso a todas las especialidades sin restricciones: cardiología, dermatología, ginecología y más",
                    "Pruebas diagnósticas: análisis clínicos, ecografías, resonancias, escáner",
                    "Métodos terapéuticos: rehabilitación, litotricia, oncológicos, etc.",
                    "Intervenciones quirúrgicas con o sin ingreso hospitalario",
                    "Cobertura Dental: Sanitas Dental 21 (>30 servicios incluidos, 21% dto en resto)",
                    "Asistencia médica en accidentes de tráfico y laborales sin trámites",
                    "Cobertura de óptica y 2ª opinión médica internacional",
                    "Urgencias en viajes al extranjero: hasta 12.000€/año"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-[#0091DA] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="space-y-8">
              {/* Tarjeta Digitales */}
              <Reveal delay={0.2}>
                <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 shadow-md flex flex-col h-full">
                  <div className="bg-[#0091DA] text-white font-bold text-sm uppercase tracking-wider rounded-lg px-4 py-2 inline-block w-max mb-6">Servicios Digitales Exclusivos</div>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Médico digital 24h: videoconsulta sin cita previa desde la oficina",
                      "Fisioterapia en el centro de trabajo: sin desplazarse",
                      "Envío de medicamentos a domicilio desde farmacia",
                      "Analítica a domicilio: sin que el empleado se desplace"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#002A54] font-medium">
                        <Check className="w-5 h-5 text-[#0091DA] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto bg-white p-5 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-[#002A54] mb-2 uppercase text-xs tracking-wider">Descuentos Aplicables</h4>
                    <p className="text-gray-600 text-sm mb-1">· 4% de descuento automático por pago anual</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <BluaSection items={[
        "Videoconsulta con todas las especialidades",
        "Urgencias 24h por videoconsulta sin cita previa",
        "Programas de salud digitales para empleados",
      ]} />

      <FeatureBlock
        title="Un seguro que trabaja tan duro como tu equipo."
        description="Sanitas Pymes Digital está pensado para que tus empleados nunca tengan que elegir entre su salud y su trabajo. El resultado: menos ausencias, mayor productividad y un equipo que valora el esfuerzo que hace su empresa por ellos."
        items={[
          "Videoconsulta disponible directamente desde la oficina",
          "Fisioterapia en el propio centro de trabajo",
          "Medicamentos y analíticas sin salir de casa/trabajo",
        ]}
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format"
        reverse
        badge="Eficiencia"
        bgColor="bg-gray-50"
      />

      <FaqSection title="Preguntas sobre Sanitas Pymes Digital" description="Toda la información clave antes de implementar tu plan." faqs={pageFaqs} />
      
      <ContactSection 
        label="El seguro que tu equipo merece." 
        title="¿Te llamamos?" 
        description="Te preparamos una propuesta para tu empresa sin ningún compromiso. Cuéntanos cuántos empleados sois." 
      />
      <Footer />
    </main>
  )
}
