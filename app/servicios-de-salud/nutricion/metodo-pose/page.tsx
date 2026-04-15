import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ThreeColumnFeatures, BluaSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Método POSE Sanitas Madrid — Reducción de Estómago sin Cirugía | Sanitas Ventas",
  description: "Método POSE en Sanitas Madrid: reducción del estómago por vía endoscópica sin incisiones. La opción menos invasiva contra la obesidad. Primera consulta gratuita. ☎ 91 726 46 33",
  path: "/servicios-de-salud/nutricion/metodo-pose/"
})

const pageFaqs = [
  { question: "¿Es reversible el método POSE?", answer: "A diferencia del balón intragástrico, el método POSE no es reversible: los pliegues son permanentes. Sin embargo, esto también es una ventaja a largo plazo para el mantenimiento del peso." },
  { question: "¿Cuánto tiempo dura la intervención?", answer: "Entre 30 y 45 minutos. Es ambulatoria — no requiere hospitalización prolongada." },
  { question: "¿Puedo hacer vida normal al día siguiente?", answer: "En la mayoría de casos sí. Si te operas un viernes, el lunes puedes retomar tu actividad habitual." },
  { question: "¿Contraindicaciones con otras técnicas?", answer: "No. El método POSE no contraindica otra cirugía en caso de que fuera necesaria en el futuro." }
]

export default function MetodoPosePage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Nutrición", item: "https://segurosonline.net/servicios-de-salud/nutricion" },
          { name: "Método POSE", item: "https://segurosonline.net/servicios-de-salud/nutricion/metodo-pose" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Nutrición", href: "/servicios-de-salud/nutricion" },
          { label: "Método POSE" }
        ]}
        label="Primera consulta gratuita · Sin incisiones · Sin cicatrices · Técnica ambulatoria"
        h1={<>Método POSE Sanitas.<br className="hidden lg:block"/> Reducción de estómago sin incisiones ni cicatrices.</>}
        body="El método POSE permite la reducción del volumen del estómago por vía endoscópica, sin necesidad de incisiones externas. Es la opción menos invasiva y más segura para tratar el sobrepeso y la obesidad. Técnica ambulatoria — en la mayoría de casos el paciente puede retomar su actividad normal en 24–48 horas. Primera consulta gratuita, sin compromiso."
        badges={["Menos invasiva", "Rápida recuperación", "Sin cirugía abierta"]}
        trustItems={["Sin incisiones", "Sin cicatrices", "Ambulatorio", "Descuentos clientes Sanitas"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "0", label: "Incisiones externas" },
        { value: "45", label: "Minutos de intervención" },
        { value: "24h", label: "Para retomar actividad" },
        { value: "100%", label: "Seguimiento médico" },
      ]} />

      <FeatureBlock 
        title="¿En qué consiste el método POSE?"
        description="El Método POSE (Primary Obesity Surgery Endoluminal) es una técnica no quirúrgica para la reducción del estómago que se realiza por vía endoscópica."
        items={[
          "Creación de varios pliegues en zonas específicas del estómago mediante suturas de anclaje de gran resistencia.",
          "Reducción de su capacidad y ralentización de su vaciado gástrico.",
          "Mayor sensación de saciedad con menores cantidades de comida.",
          "Pérdida de peso progresiva sin necesidad de cirugía abierta ni laparoscópica (sin dejar cicatrices externas)."
        ]}
        imageSrc="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=800&q=80&auto=format"
        badge="El Funcionamiento"
      />

      <FeatureBlock 
        title="¿Para quién está indicado el método POSE?"
        description="El método POSE está indicado principalmente para lograr una reducción de peso sin los riesgos de intervenciones mayores."
        items={[
          "Pacientes con obesidad grado I o fases iniciales de obesidad grado II (IMC entre 28 y 35 aproximadamente).",
          "Personas que han fracasado en tratamientos no quirúrgicos de adelgazamiento (dietas, cambios de hábitos).",
          "Pacientes candidatos a balón intragástrico que por diversas causas médicas no pueden colocárselo.",
          "Personas que buscan una técnica ambulatoria con recuperación rápida. No apto para obesidad mórbida grave."
        ]}
        imageSrc="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80&auto=format"
        badge="Indicaciones"
        reverse
      />

      <ThreeColumnFeatures 
        title="El proceso de intervención y recuperación."
        columns={[
          { title: "Intervención rápida", body: "La intervención se realiza por vía endoscópica introduciendo el endoscopio por la boca. Dura entre 30 y 45 minutos y se realiza bajo sedación. El paciente no suele permanecer más de 24 horas." },
          { title: "Recuperación express", body: "Es más rápida que cualquier cirugía convencional. Si te sometes al método POSE un viernes, el lunes puedes retomar tus actividades diarias sin molestias ni cuidados especiales." },
          { title: "Pérdida de peso", body: "Los resultados en la pérdida de peso empiezan a ser verdaderamente evidentes a partir de la cuarta semana tras la intervención, acompañados de tu reeducación de hábitos." }
        ]}
        bgColor="bg-[#002A54]"
      />

      <BluaSection 
        title="Seguimiento tras el método POSE."
        description="Como en toda la cirugía médica, la intervención no garantiza resultados si no se sigue un plan integral posterior."
        items={[
          "Seguimiento nutricional: plan de alimentación personalizado supervisado por nutricionistas expertos.",
          "Seguimiento psicológico: apoyo para mantenerse firme en los objetivos y gestionar los cambios en tu rutina.",
          "Seguimiento deportivo: plan de actividad física adaptado al paciente desde los primeros meses.",
          "Descuentos especiales sobre precio privado exclusivos para clientes Sanitas."
        ]} 
      />

      <FaqSection 
        title="Preguntas frecuentes sobre el método POSE." 
        description="Resolvemos tus principales dudas acerca de la reducción de estómago sin cirugía." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Primera consulta gratuita. Sin compromiso." 
        description="Te explicamos si el método POSE es la solución más adecuada para tu caso concreto y evaluamos tus opciones." 
      />
      
      <Footer />
    </main>
  )
}
