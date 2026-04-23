import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProcessSteps } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Complementos de Salud Sanitas — Personaliza tu Seguro | Sanitas Ventas",
  description: "Amplía tu seguro Sanitas con complementos opcionales: farmacia, óptica, reembolso, genómica, accidentes, renta hospitalaria y más. Asesoramiento. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/complementos-de-salud/"
  }
}

const complementos = [
  {
    title: "Mi Salud Genómica",
    label: "// MEDICINA PREVENTIVA",
    tagline: "Conoce la medicina más preventiva y personalizada.",
    description: "Incorpora la medicina genómica a tu seguro. Analiza tu ADN para anticiparte a enfermedades, personalizar tratamientos y tomar decisiones de salud basadas en tu propio cuerpo. La medicina del futuro, disponible hoy con Sanitas."
  },
  {
    title: "Complemento de Farmacia y Servicios a Domicilio",
    label: "// FARMACIA Y DOMICILIO",
    tagline: "Cuídate desde la comodidad de tu hogar.",
    description: "Reembolso en medicamentos con receta y servicios médicos directamente en tu domicilio: analíticas, fisioterapia, envío de medicamentos. Sin desplazamientos innecesarios."
  },
  {
    title: "Clínica Universidad de Navarra",
    label: "// ESPECIALIZACIÓN MÉDICA",
    tagline: "Incorpórala a tu cuadro médico disponible.",
    description: "Añade la Clínica Universidad de Navarra, uno de los centros médicos más prestigiosos de España, a tu cuadro médico Sanitas. Acceso a sus especialistas y servicios sin salir de tu póliza."
  },
  {
    title: "Cobertura de Óptica",
    label: "// ÓPTICA",
    tagline: "Ahora, tus gafas y lentillas te costarán la mitad.",
    description: "Reduce a la mitad tus gastos en material óptico: lentes de contacto graduadas y cristales graduados. Un complemento sencillo con impacto inmediato en tu bolsillo."
  },
  {
    title: "Cobertura de Farmacia",
    label: "// FARMACIA",
    tagline: "50% de reembolso en tus medicamentos.",
    description: "Sanitas te reembolsa el 50% de los medicamentos recetados por un médico Sanitas, hasta el límite establecido en tu póliza. Tus tratamientos, a mitad de precio."
  },
  {
    title: "Cobertura de Reembolso",
    label: "// LIBERTAD DE ELECCIÓN",
    tagline: "Toda la flexibilidad para elegir tu mejor opción.",
    description: "¿Quieres ir a un médico que no está en el cuadro Sanitas? Con la cobertura de reembolso Sanitas te devuelve un porcentaje de los gastos. Varios límites disponibles según tus necesidades: 75.000€, 200.000€ o 300.000€ por persona y año."
  },
  {
    title: "Sanitas Renta",
    label: "// HOSPITALIZACIÓN",
    tagline: "Si estás hospitalizado, solo tienes que preocuparte de ti.",
    description: "Indemnización diaria en caso de hospitalización. Si ingresas, Sanitas te abona una cantidad por cada día de ingreso — hasta un máximo de 90 días — para que no tengas que pensar en gastos adicionales durante la recuperación."
  },
  {
    title: "Cobertura en EE.UU.",
    label: "// ESTADOS UNIDOS",
    tagline: "La cobertura más completa en Estados Unidos.",
    description: "Amplía tu cobertura para incluir atención médica completa en Estados Unidos. Imprescindible para quienes viajan o residen frecuentemente en EE.UU., donde los costes médicos sin seguro son extraordinariamente elevados."
  },
  {
    title: "Accidentes de Tráfico y Laborales",
    label: "// ACCIDENTES",
    tagline: "Te garantizamos la asistencia sanitaria.",
    description: "Cobertura médica completa ante accidentes de tráfico y accidentes laborales. Una garantía para situaciones imprevistas que requieren atención inmediata y seguimiento, frecuentemente excluidos en los seguros estándar."
  },
  {
    title: "Reembolso Pediatría, Obstetricia y Ginecología",
    label: "// FAMILIA",
    tagline: "60% de reembolso en las especialidades más familiares.",
    description: "Benefíciate de un reembolso del 60% en consultas de pediatría, obstetricia y ginecología con cualquier médico fuera del cuadro Sanitas. El complemento perfecto para familias con hijos o en proceso de maternidad."
  },
  {
    title: "Cobertura de Accidentes",
    label: "// ACCIDENTES PERSONALES",
    tagline: "Garantía para ti y tu familia cuando más lo necesitéis.",
    description: "Protección económica ante cualquier accidente personal: indemnización por invalidez, fallecimiento accidental y gastos médicos derivados de un accidente. Una red de seguridad para los imprevistos más inesperados."
  },
  {
    title: "Asistencia Familiar",
    label: "// HOGAR Y FAMILIA",
    tagline: "Ayuda cualificada ante situaciones imprevistas.",
    description: "Servicios de apoyo en el hogar cuando más lo necesitas: auxiliar a domicilio, acompañamiento, cuidado de hijos, envío de medicamentos y otras prestaciones ante situaciones médicas o de hospitalización imprevistas."
  }
]

const processSteps = [
  {
    title: "Paso 1 — Tienes tu seguro Sanitas",
    description: "Los complementos son coberturas adicionales que se añaden a una póliza Sanitas ya existente. No puedes contratar un complemento de forma independiente."
  },
  {
    title: "Paso 2 — Eliges lo que necesitas",
    description: "Cada complemento es independiente. Puedes añadir uno, varios o ninguno según tus circunstancias. Si tu situación cambia, puedes revisarlos en los períodos establecidos."
  },
  {
    title: "Paso 3 — Lo añadimos a tu póliza",
    description: "Desde Sanitas Ventas gestionamos la incorporación del complemento a tu póliza actual. Rápido, sin papeleo innecesario y con asesoramiento personalizado."
  }
]

const pageFaqs = [
  { question: "¿Puedo contratar un complemento sin tener un seguro Sanitas?", answer: "No. Los complementos son coberturas adicionales que se añaden a una póliza Sanitas existente. Si aún no tienes seguro, te asesoramos primero sobre qué póliza base se adapta mejor a ti." },
  { question: "¿Cuándo puedo añadir un complemento a mi póliza?", answer: "Generalmente en el momento de contratar el seguro base o en la renovación anual. Consúltanos para confirmar los períodos disponibles según tu póliza actual." },
  { question: "¿Todos los complementos son compatibles con mi seguro?", answer: "Depende del producto base que tengas contratado. Algunos complementos están disponibles solo para determinadas pólizas. Te lo confirmamos sin compromiso." },
  { question: "¿Puedo eliminar un complemento si dejo de necesitarlo?", answer: "Sí. En los períodos de renovación puedes revisar y modificar los complementos de tu póliza." },
  { question: "¿El complemento genómico es una prueba o una cobertura continua?", answer: "Mi Salud Genómica es un complemento de medicina preventiva y personalizada. Consúltanos los detalles sobre qué incluye y cómo funciona en la práctica según tu situación." }
]

export default function ComplementosDeSaludPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Complementos de Salud" }
        ]}
        label="11 complementos disponibles · Añadibles a tu póliza actual · Sin cambiar de seguro"
        h1={<>Complementos de Salud Sanitas.<br className="hidden lg:block"/> Tú construyes tu propio seguro.</>}
        body="Tu seguro Sanitas ya te cubre lo esencial. Los complementos te permiten ir más allá: añade solo lo que necesitas, cuando lo necesitas. Una amplia gama de coberturas opcionales para personalizar tu póliza a tu medida y a la de tu familia."
        badges={["11 complementos disponibles", "Añadibles a tu póliza actual"]}
        trustItems={["✓ Farmacia", "✓ Óptica", "✓ Reembolso", "✓ Accidentes", "✓ Genómica", "✓ Y más"]}
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80&auto=format"
      />

      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              Personaliza tu seguro con estos complementos.
            </h2>
            <p className="text-lg text-gray-600">
              Cada complemento se añade a tu póliza Sanitas existente. Consúltanos cuáles son compatibles con tu seguro actual.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {complementos.map((comp, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col hover:border-[#0091DA]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold text-[#0091DA] uppercase tracking-wider mb-3 block">{comp.label}</span>
                  <h3 className="text-xl font-bold text-[#002A54] mb-3">{comp.title}</h3>
                  <p className="font-medium text-gray-800 mb-4 leading-snug">{comp.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{comp.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps 
        title="¿Cómo funcionan los complementos?"
        steps={processSteps}
      />

      <section className="py-16 bg-white border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-4">
                ¿No sabes cuál necesitas?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                No todos los complementos son compatibles con todos los seguros Sanitas. En Sanitas Ventas te decimos exactamente cuáles puedes añadir a tu póliza actual y cuáles tienen más sentido según tu perfil y el de tu familia.
              </p>
            </Reveal>
        </div>
      </section>

      <FaqSection 
        title="Preguntas sobre complementos de salud"
        description="Aclara tus dudas sobre cómo añadir y gestionar complementos en tu póliza Sanitas."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="¿No sabes cuál necesitas?"
        title="¿Qué complemento necesita tu póliza?"
        description="Cuéntanos qué seguro tienes y qué buscas añadir. Te decimos en dos minutos si es compatible y si merece la pena para tu caso concreto."
      />

      <Footer />
    </main>
  )
}
