import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Operación de Cataratas con Láser Femtosegundo Sanitas",
  description: "Operación de cataratas con láser de femtosegundo en Sanitas. Mayor precisión y seguridad que la cirugía tradicional. Sin hospitalización.",
  path: "/servicios-de-salud/vista/laser-de-cataratas"
})

const pageFaqs = [
  { 
    question: "¿Necesito ingresar en el hospital para operarme de cataratas?", 
    answer: "No. La cirugía de cataratas con láser de femtosegundo en Sanitas es ambulatoria. No requiere hospitalización ni anestesia general." 
  },
  { 
    question: "¿A qué edad se opera una catarata?", 
    answer: "La mayoría de personas conservan bien su visión hasta alrededor de los 45 años. A partir de ahí el cristalino comienza a endurecerse. La operación se recomienda cuando la catarata afecta de forma significativa a la calidad visual." 
  },
  { 
    question: "¿Cuál es la diferencia entre el láser de femtosegundo y la cirugía tradicional?", 
    answer: "El láser de femtosegundo actúa a ojo cerrado sin incisiones, con mayor precisión y menor riesgo de infección. La cirugía tradicional utiliza ultrasonidos a través de una punta cortante, lo que implica mayor variabilidad en el resultado." 
  },
  { 
    question: "¿Necesito seguro Sanitas para acceder a este servicio?", 
    answer: "No. El servicio está disponible para clientes y no clientes. Los clientes de Sanitas tienen descuentos adicionales y condiciones de financiación preferentes." 
  }
]

export default function LaserCataratasPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        type="MedicalWebPage"
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Vista", item: "https://segurosonline.net/servicios-de-salud/vista" },
          { name: "Láser de Cataratas", item: "https://segurosonline.net/servicios-de-salud/vista/laser-de-cataratas" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Vista", href: "/servicios-de-salud/vista" },
          { label: "Láser de Cataratas" }
        ]}
        label="Primera consulta gratuita · Sin hospitalización · Láser femtosegundo · Precios especiales"
        h1={<>Láser de Cataratas Sanitas.<br />La última tecnología para recuperar tu visión.</>}
        body="En Sanitas te ofrecemos la última tecnología láser en la cirugía de cataratas para que puedas recuperar tu visión con mayor precisión y seguridad. Esta cirugía consiste en la extracción del cristalino opacificado y su sustitución por una lente intraocular, consiguiendo la restauración de la visión. Primera consulta de valoración gratuita y sin compromiso."
        badges={["Láser femtosegundo", "Sin hospitalización", "Sin anestesia general", "Recuperación rápida"]}
        trustItems={["Láser femtosegundo", "Sin hospitalización", "Sin anestesia general", "Recuperación rápida"]}
        imageSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Qué es una catarata?">
        <p>
          La catarata es la principal causa de ceguera en el mundo. El cristalino del ojo normalmente es transparente y actúa como una lente, enfocando la luz a medida que pasa hacia la parte posterior del ojo.
        </p>
        <p>
          Hasta los 45 años aproximadamente, el cristalino puede cambiar de forma para enfocar objetos cercanos o lejanos. A medida que una persona envejece, las proteínas del cristalino comienzan a descomponerse y este se torna opaco. Lo que el ojo ve aparece borroso. Esta afección es lo que se conoce como catarata.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Quién puede desarrollar cataratas?">
        <p>
          Las soluciones de Sanitas para las cataratas están dirigidas a personas que las desarrollan por las siguientes causas:
        </p>
        <FeatureList items={[
          "Envejecimiento del cristalino a partir de los 45 años",
          "Condicionantes genéticos",
          "Traumatismos oculares",
          "Enfermedades oculares previas",
          "Consumo de ciertos fármacos",
          "Catarata congénita"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="El láser de femtosegundo — ventaja frente a la cirugía tradicional">
        <p>
          La utilización del láser de femtosegundo para la operación de catarata supone un avance tecnológico y quirúrgico de última generación frente a la cirugía tradicional. Sus principales ventajas son:
        </p>
        <FeatureList items={[
          "Programación personalizada de las maniobras quirúrgicas mediante visualización tridimensional",
          "Realización a ojo cerrado, sin necesidad de cortes ni incisiones",
          "Automatización de la intervención, optimizando la precisión del cirujano",
          "Microfragmentación del cristalino a través de energía lumínica, en vez de ultrasonidos"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="Ventajas de la operación de cataratas con Sanitas">
        <FeatureList items={[
          "Técnica de gran precisión y seguridad",
          "La intervención no requiere anestesia general ni hospitalización",
          "Primera consulta de valoración gratuita y sin compromiso",
          "Descuentos especiales sobre precio privado para clientes Sanitas",
          "Condiciones especiales de financiación"
        ]} />
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre la operación de cataratas"
        description="Información detallada sobre el procedimiento láser de última generación."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="NUEVA TECNOLOGÍA"
        title="Recupera tu visión con la última tecnología."
        description="Primera consulta gratuita. Te explicamos todo sin compromiso y valoramos si eres candidato."
      />

      <Footer />
    </main>
  )
}
