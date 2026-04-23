import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Reproducción Asistida Sanitas — FIV, Inseminación, ICSI | Sanitas Ventas",
  description: "Tratamientos de reproducción asistida Sanitas: FIV, inseminación artificial, ICSI y ovodonación. Primera consulta gratuita. 8% dto. para clientes.. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/servicios-de-salud/maternidad/reproduccion-asistida/"
  }
}

const pageFaqs = [
  { 
    question: "¿Cuándo se recomienda acudir a reproducción asistida?", 
    answer: "Se recomienda cuando lleváis más de 6 meses intentando quedaos embarazadas sin éxito. Para mujeres mayores de 35 años o con ciclos irregulares, se recomienda consultar antes de los 6 meses. Siempre de la mano de especialistas." 
  },
  { 
    question: "¿Necesito tener seguro Sanitas para acceder a este servicio?", 
    answer: "No. El servicio está disponible para clientes y no clientes. Los clientes de Sanitas tienen descuento del 8% sobre precio privado y condiciones de financiación especiales." 
  },
  { 
    question: "¿Cuál es la tasa de éxito?", 
    answer: "Depende de la técnica, la edad y las características de cada caso. Con ovodonación las tasas de gestación pueden llegar hasta el 95%. Te explicamos las probabilidades en función de vuestra situación en la consulta gratuita." 
  },
  { 
    question: "¿Es confidencial?", 
    answer: "Absolutamente. Toda la atención es discreta, confidencial y personalizada." 
  }
]

export default function ReproduccionAsistidaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Maternidad", href: "/servicios-de-salud/maternidad" },
          { label: "Reproducción Asistida" }
        ]}
        label="Primera consulta gratuita (+120€ valor) · 8% dto. clientes Sanitas · Precios cerrados"
        h1={<>Reproducción Asistida Sanitas.<br />Os ayudamos a hacer realidad el sueño de ser padres.</>}
        body="Los tratamientos de Reproducción Asistida de Sanitas os ayudan a hacer realidad el sueño de ser padres. Ponemos a vuestra disposición lo último en técnicas, en los centros más avanzados y de la mano de especialistas de gran prestigio. Primera consulta gratuita, valorada en más de 120€."
        badges={["Disponible sin póliza", "Técnicas más avanzadas", "Discreción total", "Equipo multidisciplinar"]}
        trustItems={["Consulta gratis", "Ahorro del 8%", "Precios cerrados", "Financiación"]}
        imageSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="La infertilidad tiene solución en la mayoría de los casos.">
        <p>
          Hoy en día la infertilidad es un problema que afecta a aproximadamente al 20% de las parejas, pero que tiene solución en la gran mayoría de los casos gracias a la Reproducción Asistida.
        </p>
        <p>
          Se recurre a la Reproducción Asistida cuando es necesaria la colaboración de un laboratorio de biología de reproducción especializado, donde los óvulos y/o espermatozoides son tratados para mejorar su capacidad fecundante.
        </p>
        <p className="mt-4">
          A partir de los 33-35 años, la fertilidad empieza a descender drásticamente. Se recomienda siempre hacer un estudio de fertilidad a mujeres mayores de 35 años, con ciclos irregulares, o que lleven más de 6 meses intentando quedarse embarazadas.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Técnicas de Reproducción Asistida disponibles">
        <h3 className="text-xl font-bold mb-3">Inseminación Artificial (IA)</h3>
        <p>
          Introducción de espermatozoides capacitados en el útero de la mujer para facilitar el encuentro con el óvulo. Es el tratamiento menos invasivo.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Fecundación In Vitro (FIV)</h3>
        <p>
          Los óvulos se extraen y se fecundan en el laboratorio. Los embriones obtenidos se transfieren al útero.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">ICSI (Inyección Intracitoplasmática)</h3>
        <p>
          Un único espermatozoide se inyecta directamente en el óvulo. Indicada para problemas graves de factor masculino.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">DGP (Diagnóstico Genético)</h3>
        <p>
          Estudio genético de los embriones para seleccionar aquellos sin anomalías, aumentando la probabilidad de éxito.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Ovodonación</h3>
        <p>
          Cuando la calidad ovocitaria es insuficiente. Los óvulos de donante se fecundan con el semen de la pareja. Tasas de gestación de hasta el 95%.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Ventajas con Sanitas">
        <FeatureList items={[
          "Las últimas y más exitosas técnicas de reproducción asistida",
          "Primera consulta gratuita valorada en más de 120€",
          "Descuento del 8% para clientes de Sanitas",
          "Condiciones especiales de financiación",
          "Precios cerrados — sin sorpresas durante el tratamiento",
          "Calidad asistencial de primer nivel",
          "Equipo médico de gran prestigio y trato cercano",
          "Acceso tanto si eres cliente como si no tienes póliza"
        ]} />
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre reproducción asistida"
        description="Información clara y honesta para vuestro camino a ser padres."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="FERTILIDAD"
        title="Primera consulta gratuita."
        description="Cuéntadnos vuestra situación y os orientamos hacia el mejor tratamiento para vuestro caso."
      />

      <Footer />
    </main>
  )
}
