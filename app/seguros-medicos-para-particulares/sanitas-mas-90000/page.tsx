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
  WhiteCardGrid,
  LegalNote
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Más 90.000 — Cuadro Médico y Reembolso en un Solo Seguro | Segurosonline",
  description: "Sanitas Más 90.000: cuadro médico Sanitas completo más reembolso del 70% hasta 90.000€/año para médicos fuera del cuadro. Libertad total. Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-mas-90000/"
  }
}

const pageFaqs = [
  { 
    question: "¿El límite de 90.000€ es por persona o por póliza?", 
    answer: "Es por persona y por año. Cada asegurado tiene su propio límite independiente de 90.000€ anuales de reembolso." 
  },
  { 
    question: "¿El reembolso aplica fuera de España?", 
    answer: "Sí. Puedes usar el seguro con cualquier médico en España o en el extranjero y solicitar el reembolso del 70% hasta el límite anual." 
  },
  { 
    question: "¿Hay copago en el cuadro médico Sanitas?", 
    answer: "Depende de la modalidad que contrates. Consúltanos las opciones disponibles con y sin copago." 
  },
  { 
    question: "¿Necesito autorización previa para el reembolso?", 
    answer: "En algunos casos puede requerirse. Te explicamos el proceso exacto de reembolso al contratar para que no haya sorpresas." 
  },
  { 
    question: "¿En qué se diferencia de Sanitas Premium 500.000?", 
    answer: "Sanitas Más 90.000 combina cuadro médico completo + reembolso hasta 90.000€. Sanitas Premium 500.000 es un seguro de reembolso puro sin cuadro médico, pero con un límite de 500.000€ y más extras. Más 90.000 suele ser más cómodo para el día a día." 
  }
]

export default function SanitasMas90Page() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Más 90.000" }
        ]}
        label="Cuadro médico + reembolso · 70% reembolso · Hasta 90.000€/año"
        h1={<>Sanitas Más 90.000.<br />El médico que tú decidas.<br />Al precio de siempre.</>}
        body="Todo el cuadro médico Sanitas para el día a día, más reembolso del 70% hasta 90.000€/año si prefieres ir a cualquier médico fuera de la red. Sin renunciar a nada."
        badges={["Cuadro + Reembolso", "70% Reembolso", "Cobertura mundial"]}
        trustItems={["Cuadro médico completo", "Reembolso 70%", "Hasta 90.000€/año", "Cobertura mundial"]}
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "90.000€", label: "Límite reembolso" },
        { value: "70%", label: "Reembolso de gastos" },
        { value: "58.000+", label: "Médicos en cuadro" },
        { value: "Mundial", label: "Cobertura" },
      ]} />

      <ProductFeatureSection title="¿Qué es Sanitas Más 90.000?">
        <p>
          Sanitas Más 90.000 combina en una sola póliza lo mejor del cuadro médico y del seguro de reembolso. No tienes que elegir entre la comodidad de la red Sanitas y la libertad de ir al médico que prefieras — tienes ambas.
        </p>
        <p>
          Para las consultas del día a día tienes acceso a toda la red médica Sanitas: más de 57.000 profesionales, 4.500 centros y hospitales propios, sin esperas. Y si en algún momento prefieres ir a un médico que no está en el cuadro, Sanitas te reembolsa el 70% de los gastos hasta 90.000€ por persona y año.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Coberturas incluidas">
        <FeatureList items={[
          "Cuadro médico completo: medicina primaria y todas las especialidades",
          "Pruebas diagnósticas: análisis, ecografías, resonancias, TAC, etc.",
          "Intervenciones quirúrgicas y hospitalización completa en red Sanitas",
          "Reembolso del 70% para médicos fuera del cuadro Sanitas",
          "Límite de 90.000€ por persona y año para reembolso",
          "Cobertura de reembolso válida en España y en el extranjero",
          "Segunda opinión médica internacional",
          "Urgencias en viajes al extranjero",
          "Blua digital incluido gratis para siempre"
        ]} />
      </ProductFeatureSection>

      <WhiteCardGrid 
        title="¿Para quién es Sanitas Más 90.000?"
        subtitle="La combinación perfecta entre cercanía y libertad absoluta de elección."
        cards={[
          { 
            icon: "check", 
            title: "Uso cotidiano sin esperas", 
            description: "Acceso completo al cuadro Sanitas para citas rápidas y pruebas sencillas en centros propios." 
          },
          { 
            icon: "star", 
            title: "Tu médico de confianza", 
            description: "Si tu especialista no está en el cuadro, puedes seguir yendo a él y recuperar el 70% del coste." 
          },
          { 
            icon: "shield", 
            title: "Tranquilidad ante lo importante", 
            description: "Saber que puedes acudir al mejor especialista del mercado ante cualquier situación de salud grave." 
          }
        ]}
      />

      <ProductFeatureSection title="El reembolso en la práctica">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { step: "1", text: "Acudes al médico de tu elección fuera del cuadro Sanitas" },
            { step: "2", text: "Abonas los gastos directamente en la consulta o centro" },
            { step: "3", text: "Solicitas el reembolso con facturas y recetas vía app" },
            { step: "4", text: "Sanitas te devuelve el 70% hasta el límite anual" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center text-center">
              <span className="w-10 h-10 rounded-full bg-[#0091DA] text-white flex items-center justify-center font-bold mb-4">{item.step}</span>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </ProductFeatureSection>

      <FeatureBlock 
        title="Descuentos disponibles"
        description="Aprovecha las ventajas por número de asegurados y forma de pago."
        items={[
          "10% de descuento vitalicio para pólizas con 4 o más asegurados",
          "4% adicional por elección de pago anual",
          "Sin carencias si vienes de otra compañía (+1 año)"
        ]}
        imageSrc="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&auto=format"
        badge="Ahorro Familiar"
      />

      <LegalNote>
        El límite de reembolso de 90.000€ es independiente para cada asegurado de la póliza. Reembolso internacional sujeto a la entrega de documentación traducida si fuera necesario.
      </LegalNote>

      <FaqSection 
        title="Preguntas sobre Sanitas Más 90.000"
        description="Todo lo que necesitas saber sobre el seguro mixto."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="CUADRO + REEMBOLSO"
        title="Cuadro médico y libertad total. En un solo seguro."
        description="Te explicamos cómo funciona el reembolso y qué cubre exactamente en tu caso concreto."
      />

      <Footer />
    </main>
  )
}
