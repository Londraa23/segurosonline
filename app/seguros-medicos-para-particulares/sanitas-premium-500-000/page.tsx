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
  title: "Sanitas Premium 500.000 — Seguro de Reembolso Máximo | Segurosonline",
  description: "Sanitas Premium 500.000: reembolso hasta 500.000€/año, farmacia, dental y cobertura en EE.UU. El seguro de reembolso más completo de Sanitas. Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-premium-500-000/"
  }
}

const pageFaqs = [
  { 
    question: "¿El reembolso es del 100% de los gastos?", 
    answer: "El porcentaje de reembolso depende de las condiciones específicas de tu póliza. Consúltanos para conocer exactamente qué porcentaje aplica en cada tipo de gasto y servicio." 
  },
  { 
    question: "¿La cobertura en EE.UU. es solo para urgencias?", 
    answer: "Incluye tanto atención de urgencias como tratamientos. Consúltanos los detalles exactos para tu caso concreto, ya que las condiciones pueden variar." 
  },
  { 
    question: "¿Puedo usar cualquier farmacia?", 
    answer: "Sí. Puedes comprar en cualquier farmacia con receta médica y solicitar el reembolso posterior con la documentación requerida." 
  },
  { 
    question: "¿Incluye también cuadro médico Sanitas?", 
    answer: "Sanitas Premium 500.000 es principalmente un seguro de reembolso. Si quieres combinar cuadro médico y reembolso máximo en una sola póliza, la alternativa sería Sanitas TOP QUANTUM. Consúltanos y te orientamos." 
  },
  { 
    question: "¿Tiene periodos de carencia?", 
    answer: "Sí, con carencias estándar por tipo de cobertura. Eliminables si llevas +1 año en otra compañía de cobertura completa al contratar (excepto parto)." 
  }
]

export default function SanitasPremium500Page() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Premium 500.000" }
        ]}
        label="Hasta 500.000€/año · Reembolso farmacia y dental · Cobertura en EE.UU."
        h1={<>Sanitas Premium 500.000.<br />El reembolso más alto del mercado.<br />Libertad total para elegir tu médico.</>}
        body="Hasta 500.000€ por persona y año. Cualquier médico en España o en el extranjero. Con reembolso de farmacia, dental y cobertura completa en EE.UU."
        badges={["500.000€ Límite", "Reembolso farmacia", "Cobertura EE.UU."]}
        trustItems={["500.000€ límite anual", "Reembolso farmacia", "Cobertura EE.UU.", "Subsidio hospitalización"]}
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "500.000€", label: "Límite reembolso/año" },
        { value: "100%", label: "Libertad de elección" },
        { value: "Farmacia", label: "Reembolso incluido" },
        { value: "EE.UU.", label: "Cobertura completa" },
      ]} />

      <ProductFeatureSection title="¿Qué es Sanitas Premium 500.000?">
        <p>
          Sanitas Premium 500.000 es el seguro de reembolso más completo de Sanitas. Con un límite de reembolso de hasta 500.000€ por persona y año, te da libertad total para elegir cualquier médico o centro en España o en cualquier parte del mundo, y Sanitas te devuelve los gastos según las condiciones de tu póliza.
        </p>
        <p>
          Sin listas, sin preguntar si tu médico está en el cuadro. Eliges al mejor profesional para tu caso y Sanitas se encarga del reembolso. Para quienes no quieren limitaciones de ningún tipo en el cuidado de su salud.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Coberturas incluidas">
        <FeatureList items={[
          "Libertad total de elección: cualquier médico o especialista en el mundo",
          "Reembolso de gastos médicos hasta 500.000€ por persona y año",
          "Hospitalización e intervenciones quirúrgicas completas",
          "Urgencias médicas en cualquier centro",
          "Pruebas diagnósticas de alta tecnología: TAC, resonancias, etc.",
          "Reembolso de farmacia: gastos en medicamentos con receta médica",
          "Reembolso de gastos dentales incluidos en la póliza",
          "Subsidio por hospitalización: compensación diaria por ingreso",
          "Cobertura completa en EE.UU.: asistencia sanitaria urgente y programada",
          "Segunda opinión médica internacional",
          "Blua digital incluido gratis para siempre"
        ]} />
      </ProductFeatureSection>

      <FeatureBlock 
        title="El techo más alto del mercado"
        description="Los seguros de reembolso habitualmente limitan los gastos a 90.000€ o 150.000€. Sanitas Premium 500.000 quintuplica ese límite para cubrir los tratamientos más costosos."
        items={[
          "Ideal para tratamientos oncológicos de alto coste",
          "Indispensable para estancias frecuentes en el extranjero",
          "Acceso a los mejores especialistas mundiales",
          "La máxima tranquilidad sin límites relevantes"
        ]}
        imageSrc="https://images.unsplash.com/photo-1454165833267-028cc2402f1b?w=900&q=80&auto=format"
        badge="Máximo Nivel"
      />

      <FeatureBlock 
        title="Cobertura en Estados Unidos"
        description="Los gastos médicos en EE.UU. son los más elevados del mundo. Con Sanitas Premium 500.000 tienes cubierta la asistencia sanitaria en EE.UU. tanto para urgencias como para tratamientos programados."
        items={[
          "Protección ante los altos costes hospitalarios en EE.UU.",
          "Cobertura dentro del límite anual de 500.000€",
          "Tranquilidad total para viajes o estancias frecuentes"
        ]}
        imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format"
        badge="Protección Global"
        reverse
      />

      <ProductFeatureSection title="Reembolso de farmacia y dental">
        <p>
          A diferencia de los seguros de cuadro médico estándar, Sanitas Premium 500.000 incluye reembolso de farmacia (medicamentos con receta) y reembolso de gastos dentales, dos coberturas que habitualmente no forman parte de los seguros convencionales y que suponen un ahorro significativo.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Subsidio por hospitalización">
        <p>
          En caso de ingreso hospitalario, además de la cobertura de los gastos médicos, el seguro incluye un subsidio por hospitalización: una indemnización diaria durante los días de ingreso. Un apoyo económico adicional para hacer frente a los costes indirectos que genera una hospitalización.
        </p>
      </ProductFeatureSection>

      <LegalNote>
        Porcentajes de reembolso sujetos a condiciones particulares. Cobertura en EE.UU. incluye tratamientos programados previo aviso. Periodos de carencia estándar eliminables con seguro previo (excepto parto).
      </LegalNote>

      <FaqSection 
        title="Preguntas sobre Sanitas Premium 500.000"
        description="Dudas frecuentes sobre el seguro de reembolso más exclusivo."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="LÍMITE MÁXIMO"
        title="El techo más alto. La libertad más amplia."
        description="Si buscas el seguro de reembolso más completo del mercado, este es. Cuéntanos tu situación."
      />

      <Footer />
    </main>
  )
}
