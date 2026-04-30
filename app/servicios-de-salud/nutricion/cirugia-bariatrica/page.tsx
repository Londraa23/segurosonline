import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ThreeColumnFeatures, BluaSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Cirugía Bariátrica Sanitas — Banda Gástrica y By-Pass | Sanitas Ventas",
  description: "Cirugía bariátrica Sanitas: banda gástrica, by-pass gástrico y técnicas laparoscópicas para obesidad mórbida. Primera consulta gratuita. Seguimiento médico completo.. ☎ 91 726 46 33",
  path: "/servicios-de-salud/nutricion/cirugia-bariatrica/"
})

const pageFaqs = [
  { question: "¿Cuánto tiempo dura el ingreso hospitalario?", answer: "Depende de la técnica. Con la banda gástrica el ingreso es de uno o dos días. Con el by-pass gástrico el ingreso es algo más prolongado. En todos los casos se trata de laparoscopia, lo que reduce significativamente la estancia." },
  { question: "¿La pérdida de peso es permanente?", answer: "Sí, con los cambios de hábitos adecuados. La cirugía bariátrica permite pérdidas de peso duraderas. La clave está en mantener una alimentación equilibrada, actividad física regular y el seguimiento con el equipo médico." },
  { question: "¿Puede mejorar enfermedades como la diabetes o la hipertensión?", answer: "Sí. El by-pass gástrico en particular tiene un importante efecto metabólico y puede mejorar o curar la diabetes tipo 2, la hipertensión y otros trastornos asociados a la obesidad." },
  { question: "¿Necesito seguro Sanitas?", answer: "No. El servicio está disponible para clientes y no clientes. Los clientes tienen precios especiales y condiciones de financiación preferentes." }
]

export default function CirugiaBariatricaPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Nutrición", item: "https://segurosonline.net/servicios-de-salud/nutricion" },
          { name: "Cirugía Bariátrica", item: "https://segurosonline.net/servicios-de-salud/nutricion/cirugia-bariatrica" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Nutrición", href: "/servicios-de-salud/nutricion" },
          { label: "Cirugía Bariátrica" }
        ]}
        label="Primera consulta gratuita · Laparoscópica · Asistencia integral · Precios especiales"
        h1={<>Cirugía Bariátrica Sanitas.<br className="hidden lg:block"/> Pérdida de peso permanente para casos de obesidad grave.</>}
        body="La cirugía bariátrica es el conjunto de procedimientos quirúrgicos diseñados para conseguir pérdidas de peso mantenidas y duraderas en el tiempo, modificando anatómica y funcionalmente el tracto digestivo. En Sanitas realizamos las técnicas más avanzadas por vía laparoscópica, con asistencia personalizada e integral: médica, psicológica y nutricional. Primera consulta de valoración gratuita."
        badges={["Laparoscopia avanzada", "Atención multidisciplinar", "Resultados duraderos"]}
        trustItems={["Laparoscópica", "Equipo especializado", "Seguimiento nutricional y psicológico", "Precio cerrado"]}
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "40+", label: "IMC Habitual de indicación" },
        { value: "100%", label: "Técnicas Laparoscópicas" },
        { value: "Premium", label: "Equipo de Cirujanos" },
        { value: "Integral", label: "Asistencia médica" },
      ]} />

      <FeatureBlock 
        title="¿Qué es la cirugía bariátrica?"
        description="La cirugía bariátrica engloba un conjunto de técnicas y procedimientos quirúrgicos que buscan modificar anatómica, funcional y metabólicamente el tracto digestivo."
        items={[
          "Busca disminuir el exceso de peso drásticamente, mejorando las condiciones y la calidad de vida del paciente.",
          "En Sanitas, todas las técnicas se realizan por vía laparoscópica: mínimamente invasiva.",
          "No existe necesidad de abrir el abdomen de forma convencional.",
          "Se efectúa a través de pequeñas incisiones para asegurar la mejor recuperación de los tejidos."
        ]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&auto=format"
        badge="El Concepto"
      />

      {/* Two techniques */}
      <ThreeColumnFeatures 
        title="Técnicas disponibles."
        columns={[
          { title: "Banda Gástrica", body: "Un anillo flexible de silicona que se coloca en la parte superior del estómago, creando una pequeña cavidad. La parte interna puede rellenarse de líquido regulando la presión. Produce saciedad precoz, conduciendo a comer menos y más despacio. Es la técnica más sencilla, de menor complicación y es la única completamente reversible. Ingreso de 1 a 2 días." },
          { title: "By-Pass Gástrico", body: "Reduce la capacidad del estómago creando un pequeño reservorio gástrico y reconecta el intestino delgado para reducir la absorción de calorías y nutrientes. Es la técnica con mayor efecto metabólico: puede mejorar o curar la diabetes tipo 2, hipertensión y apnea del sueño. Pérdida más rápida los primeros meses. Requiere suplementación de por vida." },
          { title: "¿Cuál es para mí?", body: "Siempre se realiza un estudio previo completo para garantizar que el paciente es apto médica y psicológicamente para la intervención elegida. Nuestros cirujanos evaluarán tus pautas metabólicas, de alimentación e historial, recomendándote la ruta con la mayor tasa de éxito." }
        ]}
        bgColor="bg-gray-50/50"
        textColor="text-[#002A54]"
      />

      <FeatureBlock 
        title="¿A quién está indicada y sus beneficios posteriores?"
        description="El éxito a largo plazo depende de la actitud del paciente junto al insustituible seguimiento post-operatorio del que nos encargamos."
        items={[
          "Pacientes con obesidad mórbida donde otros tratamientos fallaron (habitualmente IMC > 40 o superior a 35 con comorbilidades como diabetes).",
          "Aprenderás a comer de forma adecuada y a incorporar actividad física.",
          "Revisiones regulares para controlar evolución de peso y estado analítico.",
          "Si queda exceso de piel o flacidez post-pérdida, disponemos de tratamientos de cirugía estética post-bariátrica."
        ]}
        imageSrc="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80&auto=format"
        badge="Indicaciones y Futuro"
        reverse
      />

      <BluaSection 
        title="Tus Ventajas con Sanitas."
        description="Tranquilidad, profesionalidad y el prestigio de un cuadro de especialistas de primera línea."
        items={[
          "Asistencia personalizada e integral: médica, psicológica y nutricional antes, durante y después.",
          "Precios especiales preferentes y descuentos significativos para todos los clientes de Sanitas.",
          "Condiciones especiales de financiación adaptables.",
          "Equipo de cirujanos bariátricos con amplia y contrastable experiencia laparoscópica."
        ]} 
      />

      <FaqSection 
        title="Preguntas frecuentes sobre la cirugía bariátrica." 
        description="Tratamos todas las dudas habituales de nuestros pacientes respecto a esta intervención definitiva." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Da el paso definitivo hacia tu peso saludable." 
        description="Te explicamos qué técnica es la más adecuada para tu caso. Primera consulta gratuita y sin compromiso." 
      />
      
      <Footer />
    </main>
  )
}
