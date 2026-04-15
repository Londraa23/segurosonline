import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductFeatureSection, FeatureList } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Conservación del Cordón Umbilical Sanitas — Células Madre 30 Años | Sanitas Ventas",
  description: "Conservación de células madre del cordón umbilical en banco privado durante 30 años con Sanitas. Proceso indoloro, laboratorio en Madrid, descuentos para clientes. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/servicios-de-salud/maternidad/sanitas-cordon-umbilical/"
  }
}

const pageFaqs = [
  { 
    question: "¿Es peligroso recoger la sangre del cordón umbilical?", 
    answer: "No. Es un proceso totalmente indoloro y sin ningún riesgo ni para la madre ni para el bebé. Se realiza tras el parto, una vez que el bebé está separado de la madre." 
  },
  { 
    question: "¿Cuándo debo contratar el servicio?", 
    answer: "Debe contratarse con suficiente antelación al parto. Te recomendamos hacerlo durante el embarazo para tener todo preparado. Contacta con nosotros y te orientamos." 
  },
  { 
    question: "¿Las células sirven solo para el propio bebé?", 
    answer: "No solo para él. Sirven también para trasplante entre hermanos compatibles (probabilidad del 30%) y potencialmente para otros familiares. El trasplante entre hermanos de células del cordón umbilical muestra mejores resultados en supervivencia comparado con otras fuentes." 
  },
  { 
    question: "¿Puede haber pagos adicionales al de conservación?", 
    answer: "El servicio tiene precio cerrado. Consúltanos para conocer el detalle de precios para clientes y no clientes de Sanitas." 
  }
]

export default function CordónUmbilicalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Maternidad", href: "/servicios-de-salud/maternidad" },
          { label: "Sanitas Cordón Umbilical" }
        ]}
        label="30 años de conservación · Laboratorio en Madrid · Proceso indoloro · Precios especiales"
        h1={<>Sanitas Cordón Umbilical.<br />Una pequeña gran reserva de salud para tu familia.</>}
        body="¿Sabías que la sangre del cordón umbilical de tu bebé contiene células madre que podrían salvarle la vida en el futuro? En Sanitas hemos creado un servicio para la conservación de las células madre del cordón umbilical en un banco privado, que pueden constituir una auténtica reserva de salud ahora y en el futuro. Conservación durante 30 años."
        badges={["30 años de conservación", "Laboratorio en Madrid", "Proceso indoloro", "Precios especiales clientes"]}
        trustItems={["Proceso indoloro", "Sin riesgo madre/bebé", "+70 enfermedades", "Disponible sin póliza"]}
        imageSrc="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Qué son las células madre del cordón umbilical?">
        <p>
          Las células madre son el origen del resto de células, de las cuales se derivan todas las estructuras del cuerpo. Las del cordón umbilical tienen un importante grado de inmadurez y capacidad para transformarse en casi cualquier tipo de tejido celular.
        </p>
        <p>
          La sangre del cordón umbilical es rica en células madre progenitoras hematopoyéticas, con aplicación terapéutica en más de 70 enfermedades hematológicas graves como leucemias, linfomas, anemias o inmunodeficiencias.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Por qué guardar las células madre del cordón umbilical">
        <FeatureList items={[
          "Por su valor terapéutico superior en enfermedades hematológicas",
          "Por su gran potencial futuro en regeneración celular (corazón, daño cerebral, etc.)",
          "Por su utilidad intrafamiliar: 30% de probabilidad de compatibilidad entre hermanos",
          "Disponibilidad inmediata para el entorno familiar",
          "Momento único: el parto es la única oportunidad para obtenerlas"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Cómo funciona el servicio Sanitas Cordón Umbilical?">
        <h3 className="text-xl font-bold mb-3">Antes del parto</h3>
        <p>
          Contratas el servicio con antelación y recibes el kit de recogida diseñado para garantizar la conservación de la muestra durante más de 72 horas.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">En el parto</h3>
        <p>
          El personal médico recoge la muestra una vez que el bebé está separado de la madre. Proceso indoloro y sin riesgo.
        </p>
        <h3 className="text-xl font-bold mt-8 mb-3">Procesamiento y conservación</h3>
        <p>
          La muestra se envía al laboratorio de Sanitas en Madrid para separar las células y conservarlas en nitrógeno líquido en un banco privado durante 30 años.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Qué incluye el servicio">
        <FeatureList items={[
          "Kit y dispositivo de recogida",
          "Toma de muestra en el momento del parto",
          "Análisis y procesamiento de la muestra",
          "Transporte hasta el banco privado",
          "Almacenamiento y conservación durante 30 años",
          "Laboratorio en Madrid: procesamiento más rápido y eficiente"
        ]} />
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre el cordón umbilical"
        description="Información vital para la seguridad futura de tu familia."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="CÉLULAS MADRE"
        title="Mira el futuro de tu familia con tranquilidad."
        description="El parto es el único momento para obtener estas células. Consúltanos ahora para tenerlo todo preparado."
      />

      <Footer />
    </main>
  )
}
