import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList, ComparisonTable } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Test Genético Prenatal No Invasivo Sanitas — Detección Trisomías | Sanitas Ventas",
  description: "Test genético prenatal no invasivo Sanitas desde semana 10 de embarazo. Detecta síndrome de Down y otras trisomías sin riesgo. Muestra de sangre materna.. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/servicios-de-salud/maternidad/test-genetico-prenatal-no-invasivo/"
  }
}

const pageFaqs = [
  { 
    question: "¿Es definitivo el resultado del test?", 
    answer: "El test tiene una alta precisión en la detección de trisomías pero es una prueba de cribado, no diagnóstica. En caso de resultado positivo, el especialista recomendará confirmar con una prueba diagnóstica invasiva (amniocentesis o biopsia corial)." 
  },
  { 
    question: "¿Desde qué semana puede realizarse?", 
    answer: "A partir de la semana 10 de embarazo." 
  },
  { 
    question: "¿Tiene riesgo para el bebé?", 
    answer: "No. Es completamente seguro para la madre y el feto. Solo requiere una extracción de sangre materna." 
  },
  { 
    question: "¿Necesito seguro Sanitas para realizarlo?", 
    answer: "No. El servicio está disponible para clientes y no clientes de Sanitas. Los clientes pueden tener condiciones especiales." 
  }
]

const comparisonRows = [
  { feature: "Riesgo de pérdida fetal", withCopago: "Sin riesgo", withoutCopago: "Riesgo asociado" },
  { feature: "Tipo de muestra", withCopago: "Sangre materna", withoutCopago: "Punción invasiva" },
  { feature: "Semana de inicio", withCopago: "Semana 10", withoutCopago: "Posteriores" },
  { feature: "Precisión diagnóstica", withCopago: "Alta (Cribado)", withoutCopago: "Definitiva" },
  { feature: "Periodo recuperación", withCopago: "Ninguno", withoutCopago: "Reposo necesario" }
]

export default function TestPrenatalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Maternidad", href: "/servicios-de-salud/maternidad" },
          { label: "Test Genético Prenatal" }
        ]}
        label="Desde semana 10 · Sin riesgo madre ni bebé · Solo muestra de sangre · Gran precisión"
        h1={<>Test Genético Prenatal<br />No Invasivo Sanitas. Conoce la salud de tu bebé sin riesgo.</>}
        body="El test genético prenatal no invasivo permite detectar durante el embarazo anomalías cromosómicas que pueden afectar al feto. Se realiza a partir de la semana 10 de embarazo mediante una simple muestra de sangre materna. Sin ningún riesgo ni para la madre ni para el bebé. La mejor alternativa no invasiva a la amniocentesis o la biopsia corial."
        badges={["Desde semana 10", "Sin riesgo", "Alta precisión", "Alternativa a amniocentesis"]}
        trustItems={["Desde semana 10", "Sin riesgo", "Alta precisión", "Alternativa a amniocentesis"]}
        imageSrc="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Qué es el test genético prenatal no invasivo?">
        <p>
          El test genético prenatal no invasivo (también conocido como test de ADN fetal en sangre materna) permite la detección durante el periodo gestacional de anomalías cromosómicas, tales como las trisomías.
        </p>
        <p>
          Se trata de un análisis fiable y sencillo: se obtiene una muestra de sangre de la madre y se analiza el ADN fetal que circula por su sangre. A diferencia de otras pruebas como la amniocentesis o la biopsia corial, no conlleva ningún riesgo ni para la madre ni para el feto.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Qué anomalías detecta?">
        <h3 className="text-xl font-bold mb-3">Trisomía 21 — Síndrome de Down</h3>
        <p>
          La trisomía más frecuente. Puede causar discapacidad intelectual de leve a moderada y malformaciones digestivas o defectos cardíacos.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Trisomía 18 — Síndrome de Edwards</h3>
        <p>
          Menos frecuente y con elevado índice de aborto espontáneo. Los nacidos suelen presentar problemas cardíacos graves.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Trisomía 13 — Síndrome de Patau</h3>
        <p>
          La menos frecuente de las tres y con graves implicaciones para el desarrollo y la supervivencia.
        </p>
      </ProductFeatureSection>

      <ComparisonTable 
        title="Ventajas frente a pruebas invasivas"
        subtitle="Diferencias clave entre el test no invasivo y las técnicas tradicionales."
        rows={comparisonRows}
        colA="Test No Invasivo"
        colB="Amniocentesis"
      />

      <ProductFeatureSection title="¿Cómo se realiza el test?">
        <ol className="list-decimal pl-5 space-y-3">
          <li>Extracción de sangre materna a partir de la semana 10</li>
          <li>Análisis del ADN fetal presente en la sangre de la madre</li>
          <li>Determinación del riesgo de las principales trisomías con gran precisión</li>
          <li>Entrega de resultados con informe detallado</li>
          <li>Asesoramiento médico sobre los resultados</li>
        </ol>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Para quién está especialmente indicado?">
        <FeatureList items={[
          "Mujeres de 35 o más años (mayor riesgo estadístico)",
          "Resultados de cribado combinado del primer trimestre alterados",
          "Embarazo previo con anomalía cromosómica",
          "Cualquier embarazada que prefiera una prueba sin riesgo"
        ]} />
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre el test genético prenatal"
        description="Dudas frecuentes sobre el test de ADN fetal en sangre materna."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="PRUEBA PRENATAL"
        title="Conoce la salud de tu bebé con total tranquilidad."
        description="Te explicamos cómo funciona el test y cómo solicitar una consulta sin compromiso."
      />

      <Footer />
    </main>
  )
}
