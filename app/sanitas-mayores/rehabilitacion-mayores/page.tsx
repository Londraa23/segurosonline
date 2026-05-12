import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Rehabilitación para Mayores Sanitas — Fisioterapia y Terapia Ocupacional | SegurosOnline",
  description: "Rehabilitación para personas mayores con Sanitas: fisioterapia avanzada, terapia ocupacional, logopedia y rehabilitación cognitiva. En centros y a domicilio. ☎ 624 21 73 23",
  path: "/sanitas-mayores/rehabilitacion-mayores/"
})

const faqData = [
  { 
    question: "¿Necesito seguro Sanitas para acceder a la rehabilitación?", 
    answer: "No. Los servicios de rehabilitación de Sanitas Mayores están disponibles para cualquier persona, independientemente de si tiene o no póliza Sanitas." 
  },
  { 
    question: "¿Cuántas sesiones necesitará mi familiar?", 
    answer: "Depende completamente de la situación, la patología y los objetivos del tratamiento. Tras la evaluación inicial el equipo elabora un plan personalizado con la frecuencia e intensidad del tratamiento recomendado." 
  },
  { 
    question: "¿La rehabilitación a domicilio es tan efectiva como en centro?", 
    answer: "Para determinados objetivos, la rehabilitación a domicilio es igual o incluso más efectiva porque trabaja en el entorno real del paciente. Para tratamientos que requieren equipamiento específico, el centro puede ser más adecuado." 
  },
  { 
    question: "¿Se puede compaginar con la actividad del Centro de Día?", 
    answer: "Sí. En muchos casos la rehabilitación está integrada dentro del programa del Centro de Día, de forma que el mayor recibe las sesiones durante su estancia en el centro." 
  },
  { 
    question: "¿La fisioterapia preventiva está cubierta por el seguro Sanitas?", 
    answer: "Las coberturas de fisioterapia varían según el producto. Consúltanos qué incluye tu seguro concreto para la fisioterapia de mantenimiento y preventiva." 
  }
]

export default function RehabilitacionMayoresPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sanitas Mayores", href: "/sanitas-mayores" },
          { label: "Rehabilitación para Mayores" }
        ]}
        h1={<>Rehabilitación para Mayores Sanitas.<br />Recupera capacidades.<br />Mantén tu independencia.</>}
        body="Las terapias más avanzadas aplicadas por expertos en la atención a personas mayores. Para recuperar lo que se ha perdido y mantener lo que aún está."
        badges={["Centros de rehabilitación avanzada", "Domicilio disponible", "Equipo multidisciplinar", "Fisioterapia", "Terapia Ocupacional"]}
        trustItems={["Fisioterapia avanzada", "Terapia ocupacional", "Rehabilitación cognitiva", "En centros y a domicilio"]}
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="Por qué la rehabilitación es clave en la tercera edad">
        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            La rehabilitación en personas mayores no es solo una cuestión de recuperación tras una lesión o intervención quirúrgica. Es una herramienta fundamental para mantener la autonomía, prevenir caídas, acelerar recuperaciones postoperatorias y frenar el deterioro cognitivo.
          </p>
          <FeatureList items={[
            "Mantener la autonomía el mayor tiempo posible",
            "Prevenir caídas: reducción significativa del riesgo",
            "Acelerar la recuperación postoperatoria (cadera, rodilla, etc.)",
            "Frenar el deterioro cognitivo y enlentecer la progresión de demencias"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="Servicios de rehabilitación de Sanitas Mayores">
        <Reveal>
          <h3 className="text-2xl font-bold text-[#002A54] mt-8 mb-4">Fisioterapia avanzada</h3>
          <FeatureList items={[
            "Rehabilitación post-quirúrgica: cadera, rodilla, columna",
            "Fisioterapia neurológica post-ictus",
            "Tratamiento del dolor crónico: artrosis, artritis",
            "Prevención de caídas: equilibrio y fuerza",
            "Fisioterapia respiratoria y drenaje linfático"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Terapia Ocupacional</h3>
          <FeatureList items={[
            "Entrenamiento en actividades de la vida diaria (AVD)",
            "Adaptación del entorno doméstico y accesibilidad",
            "Rehabilitación de la mano y miembro superior",
            "Estimulación cognitiva funcional"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Logopedia y rehabilitación cognitiva</h3>
          <FeatureList items={[
            "Rehabilitación de la afasia y disartria",
            "Evaluación y tratamiento de la disfagia (problemas al tragar)",
            "Psicoestimulación para memoria y atención",
            "Terapia de reminiscencia y musicoterapia"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <WhiteCardGrid 
        title="Dónde se realiza la rehabilitación"
        cards={[
          {
            icon: "star",
            title: "Centros Especializados",
            description: "Red de Centros de Rehabilitación Avanzada con la tecnología más moderna y equipos multidisciplinares."
          },
          {
            icon: "clock",
            title: "En Residencias y Centros de Día",
            description: "Equipo propio que trabaja con residentes y usuarios de forma continua e integrada en su actividad diaria."
          },
          {
            icon: "shield",
            title: "A domicilio",
            description: "Fisioterapia y terapia ocupacional en el entorno real del paciente para trabajar la autonomía en su propio espacio."
          }
        ]}
      />

      <ProductFeatureSection title="¿Cuándo es especialmente importante?">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div>
              <h4 className="font-bold text-[#002A54] mb-2">Tras un ictus</h4>
              <p className="text-sm text-gray-600">La rehabilitación neurológica inmediata es fundamental para maximizar la recuperación funcional.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#002A54] mb-2">Tras una fractura de cadera</h4>
              <p className="text-sm text-gray-600">Determinante para la recuperación de la movilidad y la calidad de vida posterior.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#002A54] mb-2">En el Parkinson</h4>
              <p className="text-sm text-gray-600">Fundamental para prevenir caídas y mantener la marcha y la autonomía.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#002A54] mb-2">Deterioro cognitivo</h4>
              <p className="text-sm text-gray-600">Las terapias no farmacológicas enlentecen la progresión y mejoran el bienestar.</p>
            </div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre rehabilitación para mayores"
        description="Encuentra las respuestas que necesitas sobre los programas de recuperación de Sanitas."
        faqs={faqData}
      />

      <ContactSection 
        label="LOS MEJORES EXPERTOS"
        title="Los mejores expertos para la recuperación de tu familiar."
        description="Cuéntanos la situación y te orientamos sobre el programa de rehabilitación más adecuado."
      />
      <Footer />
    </main>
  )
}
