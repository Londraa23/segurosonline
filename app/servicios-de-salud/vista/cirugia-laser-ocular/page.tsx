import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Cirugía Láser Ocular Sanitas — Miopía, Astigmatismo, Hipermetropía",
  description: "Cirugía láser ocular Sanitas para corregir miopía, astigmatismo e hipermetropía. Primera consulta gratuita, técnica mínimamente invasiva, 20 minutos.",
  path: "/servicios-de-salud/vista/cirugia-laser-ocular"
})

const pageFaqs = [
  { 
    question: "¿Cuánto dura la intervención?", 
    answer: "En tan solo 20 minutos y en una misma sesión puedes operarte ambos ojos. Es ambulatoria, no requiere ingreso hospitalario ni anestesia general." 
  },
  { 
    question: "¿Cuándo podré volver a mi vida normal?", 
    answer: "La recuperación es inmediata. La mayoría de pacientes pueden hacer vida normal al día siguiente de la intervención." 
  },
  { 
    question: "¿Qué tipo de láser se utiliza?", 
    answer: "Existen diferentes técnicas láser — Lasik, Lasek/PRK, Zyoptix, Intralase y Smile. El especialista determinará cuál es más adecuada para tu caso tras el estudio ocular previo." 
  },
  { 
    question: "¿Puedo operarme si tengo más de 40 años?", 
    answer: "Sí, la edad máxima recomendable es de 50 años (idealmente hasta 45). Si tienes presbicia (vista cansada) asociada a miopía o hipermetropía, existe un tratamiento específico." 
  },
  { 
    question: "¿Necesito tener seguro Sanitas?", 
    answer: "No. El servicio está disponible tanto para clientes como para personas sin póliza Sanitas. Los clientes tienen descuentos adicionales." 
  }
]

export default function CirugiaLaserOcularPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        type="MedicalWebPage"
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Vista", item: "https://segurosonline.net/servicios-de-salud/vista" },
          { name: "Cirugía Láser Ocular", item: "https://segurosonline.net/servicios-de-salud/vista/cirugia-laser-ocular" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Vista", href: "/servicios-de-salud/vista" },
          { label: "Cirugía Láser Ocular" }
        ]}
        label="Primera consulta gratuita · Seas o no cliente · Precios especiales · Financiación disponible"
        h1={<>Cirugía Láser Ocular Sanitas.<br />Di adiós a las gafas para siempre.</>}
        body="Si tienes entre 18 y 50 años y padeces astigmatismo, miopía o hipermetropía, puedes solucionar tu problema con cirugía láser ocular. El láser modifica la curvatura de la córnea para que los rayos de luz se enfoquen adecuadamente sobre la retina, logrando una visión nítida sin necesidad de gafas. Primera consulta de valoración gratuita y sin compromiso."
        badges={["18–50 años", "20 minutos, ambos ojos", "Sin anestesia general", "Recuperación inmediata"]}
        trustItems={["18–50 años", "20 minutos", "Sin anestesia general", "Recuperación inmediata"]}
        imageSrc="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Cómo funciona la cirugía láser ocular?">
        <p>
          La Cirugía Refractiva modifica la curvatura de la córnea para que los rayos de luz se enfoquen adecuadamente sobre la retina, logrando una visión nítida sin necesidad de gafas ni lentillas.
        </p>
        <p>
          Es un tratamiento que actúa sobre la superficie corneal mediante láser, aportando precisión, exactitud y optimización de los resultados. Existen diferentes tipos de láser: Lasik, Lasek/PRK, Zyoptix, Intralase y Smile. La determinación de cuál debe usarse será elección del especialista en función del diagnóstico de cada paciente.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Para qué problemas visuales está indicada?">
        <p>
          La miopía, hipermetropía y el astigmatismo se definen como defectos de refracción: la imagen se proyecta de forma anómala, generando una visión borrosa. Con la Cirugía Láser Ocular podemos poner fin a estos problemas de forma definitiva.
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Miopía:</strong> dificultad para ver de lejos con claridad</li>
          <li><strong>Hipermetropía:</strong> dificultad para ver de cerca</li>
          <li><strong>Astigmatismo:</strong> visión borrosa o distorsionada a cualquier distancia por una forma irregular de la córnea</li>
        </ul>
      </ProductFeatureSection>

      <ProductFeatureSection title="Ventajas de la cirugía láser ocular con Sanitas">
        <FeatureList items={[
          "Estudio ocular completo para garantizar la aptitud de la intervención",
          "Gran precisión y mayor seguridad",
          "Técnica mínimamente invasiva",
          "No requiere anestesia general",
          "Rapidez en la intervención: en tan solo 20 minutos y en una misma sesión puedes operarte ambos ojos",
          "Recuperación inmediata",
          "Primera consulta de valoración gratuita y sin compromiso"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Soy candidato para la cirugía láser ocular?">
        <p>
          Para poder realizarse la cirugía láser ocular, el paciente debe cumplir los siguientes requisitos:
        </p>
        <FeatureList items={[
          "Disfrutar de una buena salud ocular general",
          "Tener entre 18 y 50 años (recomendable hasta los 45)",
          "Estabilidad ocular: la graduación no debe avanzar al menos durante el año previo a la intervención",
          "Haber estado sin lentes de contacto el tiempo suficiente antes de la topografía corneal para que la córnea recupere su forma normal"
        ]} />
        <p className="text-sm mt-4 text-muted-foreground">
          Tiempos de espera para lentes de contacto:<br />
          — 2 semanas para lentes blandas<br />
          — 3 semanas para semi-rígidas<br />
          — 4 semanas para rígidas
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Ventajas de hacerlo con Sanitas">
        <p>
          Seas o no cliente de Sanitas tienes acceso a este servicio. Los clientes de Sanitas disfrutan de descuentos especiales sobre el precio privado y de condiciones especiales de financiación. Servicios con precio cerrado, sin sorpresas.
        </p>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas frecuentes sobre cirugía láser ocular"
        description="Resolvemos tus dudas sobre la operación para eliminar el uso de gafas y lentillas."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="CONTRATACIÓN"
        title="Primera consulta gratuita y sin compromiso."
        description="Cuéntanos tu situación y te ayudamos a saber si eres candidato para la cirugía láser ocular."
      />

      <Footer />
    </main>
  )
}
