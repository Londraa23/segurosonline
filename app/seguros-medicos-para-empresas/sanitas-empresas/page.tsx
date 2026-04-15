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
  title: "Sanitas Empresas — Seguro Médico para Empresas y Pymes | Sanitas Ventas Madrid",
  description: "Sanitas Empresas: asistencia sanitaria completa para tus empleados. Dental incluido, programas de salud, segunda opinión médica y ventajas fiscales. Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-empresas/sanitas-empresas/" }
}

const pageFaqs = [
  { question: "¿A partir de cuántos empleados está disponible?", answer: "Sanitas Empresas está orientado a empresas de mayor tamaño, generalmente a partir de 20 empleados. Para plantillas más pequeñas, te recomendamos Sanitas Pymes Digital o Sanitas Inicia." },
  { question: "¿Qué diferencia hay entre Sanitas Empresas y Sanitas Pymes Digital?", answer: "Sanitas Pymes Digital está diseñado específicamente para pymes (desde 5 empleados) e incluye servicios digitales exclusivos en el entorno laboral. Sanitas Empresas está orientado a empresas de mayor tamaño con una estructura de beneficios sociales más compleja." },
  { question: "¿Pueden los empleados añadir a sus familiares?", answer: "Sí. Los empleados pueden extender la cobertura a sus familiares directos, con ventajas fiscales adicionales." },
  { question: "¿La gestión es centralizada para la empresa?", answer: "Sí. La empresa gestiona la contratación y las altas y bajas de empleados de forma centralizada a través de Mi Sanitas." }
]

export default function SanitasEmpresasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Empresas", href: "/seguros-medicos-para-empresas" },
          { label: "Sanitas Empresas" }
        ]}
        label="Asistencia completa · Dental 21 incluido · Deducible empresa"
        h1={<>Sanitas Empresas.<br className="hidden lg:block" /> Un beneficio social que desgrava y mejora la productividad.</>}
        body="Cuidamos la salud de tus empleados para asegurar la salud de tu negocio. Sanitas Empresas ofrece asistencia sanitaria completa para equipos de cualquier tamaño: medicina primaria, especialidades, hospitalización, dental y Blua incluido. Con ventajas fiscales reales para empresa y empleado."
        badges={["Exento IRPF empleado", "Cobertura Total"]}
        trustItems={["Hospitalización completa", "Dental incluido", "Segunda opinión médica", "Blua digital"]}
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
      />

      <FeatureBlock
        title="¿Qué incluye Sanitas Empresas?"
        description="Completa protección de alto valor para cuidar globalmente de tu equipo sin exclusiones importantes."
        items={[
          "Medicina primaria y todas las especialidades médicas sin excepciones",
          "Pruebas diagnósticas y métodos terapéuticos avanzados",
          "Intervenciones quirúrgicas y hospitalización en habitación privada",
          "Cobertura Dental 21: más de 46 servicios incluidos por ley",
          "Segunda opinión médica con expertos internacionales",
          "Atención médica y urgencias a domicilio",
          "Urgencias en viajes al extranjero"
        ]}
        imageSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80&auto=format"
        badge="Coberturas"
      />

      <BluaSection items={[
        "Urgencias 24h por videoconsulta sin cita (generales y pediátricas)",
        "Programas de asesoramiento médico sin límite (psicólogos, nutricionistas)",
        "Entrenadores personales, niño sano, cuidado de suelo pélvico",
      ]} />

      {/* Opcionales Grid */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-3">
              Complementos Opcionales
            </h2>
            <p className="text-muted-foreground">Posibilidad de enriquecer aún más tu plan de beneficios sociales.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cobertura de farmacia (reembolso medicamentos)",
              "Cobertura de óptica (cristales y lentillas)",
              "Sanitas Renta (indemnización diaria en hospitalización)",
              "Fisioterapia a domicilio/centro de trabajo",
              "Envío de medicamentos y analítica a domicilio",
              "Asistencia en viajes pro para expatriados"
            ].map((opcional, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0091DA] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-medium text-sm text-gray-700">{opcional}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fiscal section text */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              Ventajas fiscales para empresa y empleado.
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal delay={0.1}>
              <div className="bg-[#002A54] p-8 rounded-3xl h-full flex flex-col justify-center">
                <div className="text-[#0091DA] font-bold uppercase tracking-wider text-sm mb-3">Empresa</div>
                <p className="text-white/90 leading-relaxed text-lg">
                  El coste del seguro de salud de los empleados es deducible como gasto empresarial. Una ventaja fiscal directa que reduce la carga tributaria del negocio.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-[#0091DA]/5 border border-[#0091DA]/20 p-8 rounded-3xl h-full flex flex-col justify-center">
                <div className="text-[#0091DA] font-bold uppercase tracking-wider text-sm mb-3">Empleado</div>
                <p className="text-gray-700 leading-relaxed">
                  Los primeros 500€ anuales por persona cubierta están exentos de IRPF para el trabajador (incluidos cónyuge e hijos menores de 25 años). Para personas con discapacidad, el límite es de 1.500€. El empleado recibe un beneficio real sin que compute como retribución salarial tributable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection title="Preguntas sobre Sanitas Empresas" description="Conoce todo sobre la implementación en tu empresa." faqs={pageFaqs} />
      
      <ContactSection 
        label="La salud de tu equipo es la salud de tu empresa." 
        title="¿Te llamamos?" 
        description="Te preparamos una propuesta personalizada según el tamaño y las necesidades de tu plantilla." 
      />
      <Footer />
    </main>
  )
}
