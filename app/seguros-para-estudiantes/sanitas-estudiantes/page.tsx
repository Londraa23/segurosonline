import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { 
  ProductStatBar, 
  ProductFeatureSection, 
  FeatureList, 
  FeatureBlock,
  LegalNote
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Estudiantes — Seguro Médico para Jóvenes en el Extranjero | Segurosonline",
  description: "Sanitas Estudiantes: cobertura sanitaria completa para Erasmus y estancias fuera de España. Urgencias, hospitalización, repatriación y asistencia 24h. Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-para-estudiantes/sanitas-estudiantes/"
  }
}

const pageFaqs = [
  { 
    question: "¿Puedo contratar si mi Erasmus empieza en menos de un mes?", 
    answer: "Sí, el seguro puede contratarse y activarse rápidamente. Contacta con nosotros con la mayor antelación posible para gestionar toda la documentación a tiempo." 
  },
  { 
    question: "¿La tarjeta sanitaria europea no es suficiente?", 
    answer: "La tarjeta sanitaria europea cubre asistencia básica en países de la UE pero no cubre la repatriación sanitaria, no es válida fuera de la UE y presenta limitaciones. Sanitas Estudiantes complementa o sustituye a la tarjeta europea con cobertura completa." 
  },
  { 
    question: "¿Qué pasa si tengo que volver a España por una emergencia médica?", 
    answer: "La repatriación sanitaria está incluida. Si tu estado de salud requiere tratamiento en España, el traslado médico está cubierto por el seguro." 
  },
  { 
    question: "¿La cobertura incluye enfermedades previas (preexistencias)?", 
    answer: "Consúltanos tu caso concreto. Las condiciones sobre preexistencias pueden variar según la modalidad y duración de la póliza que contrates." 
  },
  { 
    question: "¿Puedo contratar si no soy el propio estudiante sino sus padres?", 
    answer: "Sí. Los padres o tutores pueden contratar el seguro en nombre del estudiante. Consúltanos el proceso." 
  },
  { 
    question: "¿El seguro cubre toda la estancia o solo las urgencias?", 
    answer: "Cubre toda la asistencia médica necesaria durante la estancia: consultas, urgencias, hospitalización y repatriación. No es solo un seguro de urgencias." 
  }
]

export default function SanitasEstudiantesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Estudiantes", href: "/seguros-estudiantes" },
          { label: "Sanitas Estudiantes" }
        ]}
        label="Cobertura internacional · Urgencias y hospitalización · Repatriación incluida"
        h1={<>Sanitas Estudiantes.<br />Estudia fuera de España<br />sin preocuparte por tu salud.</>}
        body="Cobertura sanitaria completa para estudiantes en el extranjero. Erasmus, másters internacionales, programas de intercambio y cualquier estancia fuera de España."
        badges={["Erasmus+", "Cobertura Mundial", "Repatriación"]}
        trustItems={["Válido en el extranjero", "Urgencias y hospitalización", "Repatriación sanitaria", "Varios idiomas"]}
        imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "Mundial", label: "Cobertura geográfica" },
        { value: "Erasmus+", label: "Válido para programas" },
        { value: "24h", label: "Asistencia multilingüe" },
        { value: "Incluida", label: "Repatriación médica" },
      ]} />

      <ProductFeatureSection title="¿Qué es Sanitas Estudiantes?">
        <p>
          Sanitas Estudiantes es el seguro de asistencia sanitaria diseñado para estudiantes españoles que realizan su estancia fuera de España: Erasmus, másters en universidades extranjeras, programas de intercambio universitario, cursos de idiomas de larga duración y cualquier otro programa de formación internacional.
        </p>
        <p>
          Con Sanitas Estudiantes, el joven dispone de cobertura médica completa en el país de destino, urgencias y hospitalización si las necesitas, repatriación sanitaria en caso necesario y asistencia disponible 24 horas en varios idiomas. Para que lo único en lo que pienses sea aprender.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Coberturas incluidas">
        <FeatureList items={[
          "Asistencia médica en destino: acceso a médico y especialistas",
          "Urgencias médicas los 365 días del año en el país de destino",
          "Hospitalización: ingresos y estancias hospitalarias cubiertos",
          "Repatriación sanitaria de vuelta a España si fuera necesario",
          "Repatriación en caso de fallecimiento con traslado incluido",
          "Asistencia 24 horas en varios idiomas durante toda la estancia",
          "Blua digital: videoconsulta en español desde cualquier lugar del mundo",
          "Gestiones online vía app Mi Sanitas"
        ]} />
      </ProductFeatureSection>

      <FeatureBlock 
        title="¿Para qué programas es válido?"
        description="Cualquier tipo de estancia académica fuera de España, sin restricción de programa ni destino."
        items={[
          "Programas Erasmus+ en países europeos",
          "Másters y posgrados en universidades extranjeras",
          "Programas de intercambio universitario",
          "Cursos de idiomas de larga duración",
          "Destinos en toda Europa, EE.UU., Canadá, Asia y Oceanía"
        ]}
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format"
        badge="Aceptado Universidades"
      />

      <FeatureBlock 
        title="Repatriación sanitaria"
        description="Muchos estudiantes confían en la tarjeta sanitaria europea, que no cubre la repatriación. Si tu estado de salud requiere tratamiento en España, el traslado médico está cubierto."
        items={[
          "Traslado médico de vuelta a España incluido",
          "Sin coste adicional para el estudiante ni su familia",
          "Asistencia coordinada por profesionales médicos 24h"
        ]}
        imageSrc="https://images.unsplash.com/photo-1540339832862-4745299807c3?w=900&q=80&auto=format"
        badge="Seguridad Total"
        reverse
      />

      <ProductFeatureSection title="Atención en varios idiomas">
        <p>
          Una de las mayores preocupaciones es la comunicación en una urgencia. Sanitas Estudiantes incluye asistencia multilingüe. Además, con Blua, puedes hacer videoconsultas en español con médicos de Sanitas desde cualquier parte del mundo.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Requisito de admisión">
        <p>
          Muchas universidades y programas Erasmus exigen acreditar un seguro médico válido. Sanitas Estudiantes cumple con los requisitos de la mayoría de instituciones internacionales europeas y americanas.
        </p>
      </ProductFeatureSection>

      <LegalNote>
        La duración del seguro se adapta a la duración de tu estancia. Consulta requisitos específicos si tu destino es EE.UU. o Canadá para asegurar el cumplimiento de las normativas locales.
      </LegalNote>

      <FaqSection 
        title="Preguntas sobre Sanitas Estudiantes"
        description="Prepara tu estancia internacional con total seguridad."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="ESTUDIA SEGURO"
        title="Que lo único que te preocupe sea aprender."
        description="Cuéntanos cuándo y adónde vas. Te preparamos el seguro en tiempo récord y sin complicaciones."
      />

      <Footer />
    </main>
  )
}
