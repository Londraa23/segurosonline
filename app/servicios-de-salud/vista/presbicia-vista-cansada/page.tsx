import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Operación de Presbicia y Vista Cansada Sanitas | Sanitas Ventas",
  description: "Tratamiento de la presbicia (vista cansada) con láser excimer o lente intraocular multifocal en Sanitas. Recuperación inmediata. Primera consulta gratuita. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/servicios-de-salud/vista/presbicia-vista-cansada/"
  }
}

const pageFaqs = [
  { 
    question: "¿Se puede operar la presbicia sin otros defectos visuales?", 
    answer: "Solo si está asociada a miopía y/o hipermetropía. Los pacientes con presbicia pura, sin cataratas ni otros defectos refractivos, no son candidatos a la cirugía actualmente." 
  },
  { 
    question: "¿La recuperación es realmente inmediata?", 
    answer: "Sí. Con ambas técnicas el postoperatorio es indoloro y al día siguiente de la intervención puedes hacer vida normal. Es una cirugía ambulatoria sin hospitalización." 
  },
  { 
    question: "¿Se pueden operar los dos ojos a la vez?", 
    answer: "En tan solo 20 minutos y en una misma sesión se pueden operar ambos ojos." 
  },
  { 
    question: "¿Si me opero de presbicia, podré tener cataratas en el futuro?", 
    answer: "Depende de la técnica. Si se usa la técnica intraocular (sustitución del cristalino por una lente), el paciente ya no padecerá cataratas. Si se usa la técnica extraocular (sin sustituir el cristalino), el paciente podría desarrollar cataratas en el futuro." 
  }
]

export default function PresbiciaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Vista", href: "/servicios-de-salud/vista" },
          { label: "Presbicia (Vista Cansada)" }
        ]}
        label="Primera consulta gratuita · Recuperación inmediata · Láser excimer o lente intraocular"
        h1={<>Presbicia (Vista Cansada) Sanitas.<br />Devuélvele la juventud a tus ojos.</>}
        body="La presbicia o vista cansada es la dificultad para ver nítidamente objetos cercanos por el envejecimiento del cristalino. En Sanitas disponemos de soluciones para corregirla: técnicas extraoculares con láser excimer, o intraoculares que reemplazan el cristalino por una lente intraocular multifocal. Recuperación inmediata. Primera consulta gratuita."
        badges={["Técnicas extraoculares e intraoculares", "Sin hospitalización", "Recuperación al día siguiente", "Consulta gratuita"]}
        trustItems={["Técnicas variadas", "Sin hospitalización", "Recuperación al día siguiente", "Vida normal rápida"]}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Qué es la presbicia o vista cansada?">
        <p>
          La presbicia, llamada comúnmente vista cansada, es un defecto de la vista que consiste en la disminución de la capacidad de enfoque del ojo y, como consecuencia, dificultad para ver nítidamente los objetos cercanos.
        </p>
        <p>
          Se debe al envejecimiento natural del cristalino, por lo que es difícil de prevenir. Sin embargo, sí puede detectarse y tratarse con visitas periódicas al oftalmólogo.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">Síntomas habituales de presbicia:</h3>
        <FeatureList items={[
          "Sensación de vista cansada o fatiga visual",
          "Necesidad de cerrar un ojo para enfocar bien",
          "Tendencia a entrecerrar los ojos para leer",
          "Necesidad de alejar el teléfono o el periódico para leer",
          "Solo se puede leer bien con objetos más alejados que el brazo"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Quién puede operarse de presbicia?">
        <p>
          Solo pueden operarse aquellos pacientes con ojo sano, es decir, con presbicia asociada a miopía y/o hipermetropía.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">Edades orientativas:</h3>
        <FeatureList items={[
          "Límite de edad: 65 años",
          "Para hipermétropes con presbicia: a partir de los 45 años",
          "Para miopes con presbicia: a partir de los 55 años"
        ]} />
        <p className="mt-4">
          No pueden intervenirse personas con patologías intraoculares (alteraciones maculares, glaucoma, uveítis), ambliopía u otros defectos graves de córnea.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Cómo se opera la presbicia?">
        <h3 className="text-xl font-bold mb-3">Intervención con lente intraocular multifocal</h3>
        <p>
          Consiste en extraer el cristalino que ha perdido su capacidad de acomodación y sustituirlo por una lente intraocular multifocal, que permite formar tres planos de enfoque: lejano, media distancia y distancia próxima. El cerebro elige el enfoque más adecuado para cada situación.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Intervención con láser (visión multifocal)</h3>
        <p>
          Con este tratamiento se corrige la presbicia mejorando la visión intermedia y próxima. Un ojo está más especializado en ver de lejos (ojo dominante) y otro en ver de cerca (ojo lector). El tratamiento potencia esta especialización sin alterar la binocularidad.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Cómo es el postoperatorio">
        <p>
          El postoperatorio es totalmente indoloro y muy rápido con ambas técnicas. Al día siguiente de la intervención el paciente puede comenzar a hacer su vida normal siguiendo unas recomendaciones básicas.
        </p>
        <p>
          La intervención comienza con la aplicación de un colirio anestésico y la inmovilización de los párpados para evitar el parpadeo. No requiere hospitalización.
        </p>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre la operación de presbicia"
        description="Información clave para recuperar la visión de cerca."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="VISTA CANSADA"
        title="Primera consulta de valoración gratuita."
        description="Te decimos si eres candidato y qué técnica es la más adecuada para tu caso. Sin compromiso."
      />

      <Footer />
    </main>
  )
}
