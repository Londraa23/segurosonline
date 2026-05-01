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
  ComparisonTable,
  FeatureBlock,
  LegalNote
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Más Salud Extranjeros — Seguro Médico para Residentes en España | Segurosonline",
  description: "Sanitas Más Salud Extranjeros: cobertura completa sin copago válida para visado y residencia en España. Hospitalización, dental 32 servicios y Blua gratis. Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-mas-salud-extranjeros/"
  }
}

const pageFaqs = [
  { 
    question: "¿Este seguro es válido para todos los tipos de visado?", 
    answer: "Está diseñado para cumplir los requisitos de cobertura completa exigidos para residencia comunitaria, visados de estudios y ciudadanía UE. Para otros tipos de visado, consúltanos con tu caso concreto para confirmarlo." 
  },
  { 
    question: "¿Puedo contratar sin tener NIE todavía?", 
    answer: "Sí. Permite la contratación con pasaporte. Es ideal para personas que acaban de llegar a España y aún no tienen NIE." 
  },
  { 
    question: "¿Tiene copago cuando voy al médico?", 
    answer: "No. No hay copagos ni franquicias de ningún tipo. El único pago es la prima mensual o anual." 
  },
  { 
    question: "¿Incluye cobertura dental?", 
    answer: "Sí, con 32 servicios incluidos. Es una cobertura dental más amplia que la de los seguros estándar de Sanitas." 
  },
  { 
    question: "¿Puedo incluir a mis familiares?", 
    answer: "Sí. El seguro está pensado para extranjeros residentes, sus familiares y estudiantes en España." 
  },
  { 
    question: "¿Qué pasa si necesito atención médica fuera de España?", 
    answer: "Dispones de cobertura de urgencias en viajes al extranjero para estancias de hasta 90 días, hasta 12.000€. Para asistencia urgente en el extranjero llama al +34 91 345 65 84." 
  },
  { 
    question: "¿Tiene periodos de carencia?", 
    answer: "Sí, como en todos los seguros médicos. Puedes eliminarlos si llevas al menos 1 año en otra compañía de cobertura completa al contratar (excepto parto)." 
  }
]

const condicionesRows = [
  { feature: "Copagos", valA: "Ninguno", valB: "Sin costes al usar el seguro" },
  { feature: "Edad máxima contratación", valA: "Sin límite", valB: "Consúltanos tu caso" },
  { feature: "Contratación con", valA: "Pasaporte, NIF, NIE o CIF", valB: "Válido desde el primer día" },
  { feature: "Descuento pago anual", valA: "4%", valB: "Aplicado automáticamente" },
  { feature: "Carencias", valA: "Estándar", valB: "Eliminables con seguro previo" }
]

export default function SanitasMasSaludExtranjerosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Más Salud Extranjeros" }
        ]}
        label="Válido para visado y residencia · Sin copago · Sin límite gastos"
        h1={<>Sanitas Más Salud Extranjeros.<br />El seguro médico ideal para<br />vivir en España.</>}
        body="Diseñado para extranjeros residentes en España, sus familiares y estudiantes. Válido para solicitar y renovar visado y permiso de residencia. Sin copagos."
        badges={["Apto Visado", "Sin copagos", "Hospitalización"]}
        trustItems={["Válido para residencia", "Sin copago", "Hospitalización incluida", "Dental 32 servicios"]}
        imageSrc="https://images.unsplash.com/photo-1555529902-5261145633bf?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "0€", label: "Copagos" },
        { value: "Válido", label: "Para Visado/Residencia" },
        { value: "58.000+", label: "Médicos en España" },
        { value: "24h", label: "Asistencia telefónica" },
      ]} />

      <ProductFeatureSection title="¿Qué es Sanitas Más Salud Extranjeros?">
        <p>
          Para trámites como la solicitud de residencia comunitaria, visados de estudios o ciudadanía de la Unión Europea, es fundamental disponer de un seguro médico de cobertura completa contratado con una aseguradora que opere en España.
        </p>
        <p>
          Sanitas Más Salud Extranjeros ha sido diseñado específicamente para satisfacer estas necesidades: asegura tu cobertura de salud completa y cumple con los requisitos legales exigidos. Contratación posible con pasaporte, sin necesidad de NIE. Sin copagos — el único pago es la prima mensual o anual.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Qué puedes obtener con este seguro?">
        <FeatureList items={[
          "Cobertura completa: urgencias, asistencia ambulatoria y hospitalaria",
          "Válido para solicitar visado y permiso de residencia en España",
          "Sin límite de gastos médicos al año",
          "Repatriación incluida por fallecimiento",
          "Contratación con pasaporte — sin necesidad de NIE previo",
          "Sin copagos ni franquicias — solo la prima mensual",
          "Hospitalización en habitación individual con cama para acompañante",
          "Gastos médicos urgentes en el extranjero hasta 12.000€/año"
        ]} />
      </ProductFeatureSection>

      <ProductFeatureSection title="Coberturas incluidas">
        <FeatureList items={[
          "Medicina primaria: urgencias, medicina general, pediatría y enfermería",
          "Acceso a todas las especialidades: ginecología, cardiología, etc.",
          "Pruebas diagnósticas simples y de alta tecnología (TAC, resonancias)",
          "Métodos terapéuticos simples y complejos (quimioterapia, radioterapia)",
          "Intervenciones quirúrgicas ambulatorias y con ingreso",
          "Hospitalización en habitación individual con cama para acompañante",
          "Cobertura dental: 32 servicios incluidos",
          "Segunda opinión médica internacional gestionada por Sanitas",
          "Blua digital: videoconsulta, urgencias 24h, programas de salud"
        ]} />
      </ProductFeatureSection>

      <FeatureBlock 
        title="Red médica Sanitas"
        description="Con Sanitas Más Salud Extranjeros accedes a una de las redes médicas privadas más completas de España."
        items={[
          "Más de 45.000 profesionales médicos",
          "4.200 centros médicos en toda España",
          "4 hospitales propios Sanitas",
          "20 centros médicos Milenium exclusivos"
        ]}
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format"
        badge="Red Líder en España"
      />

      <ProductFeatureSection title="Condiciones de contratación">
        <ComparisonTable 
          title="Resumen de condiciones"
          subtitle="Transparencia total en tu contratación para trámites de extranjería."
          rows={condicionesRows}
          colA="Concepto"
          colB="Detalle de cobertura"
        />
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Para qué trámites es válido?">
        <p>
          Sanitas Más Salud Extranjeros cumple los requisitos de cobertura sanitaria completa exigidos para:
        </p>
        <FeatureList items={[
          "Solicitud de residencia comunitaria (ciudadanos UE)",
          "Visado de estudios",
          "Renovación de permiso de residencia",
          "Ciudadanía española para extranjeros",
          "Otros trámites de extranjería con requisito de cobertura completa"
        ]} />
      </ProductFeatureSection>

      <LegalNote>
        Si en el momento de contratar llevas al menos 1 año en una póliza de salud de cobertura completa de otra compañía española, puedes eliminar los periodos de carencia (excepto parto). Solo necesitas aportar tus condiciones particulares y el último recibo.
      </LegalNote>

      <FaqSection 
        title="Preguntas sobre Sanitas Más Salud Extranjeros"
        description="Información clave para tu estancia y trámites en España."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="BIENVENIDO A ESPAÑA"
        title="Bienvenido a España. Tu salud, en buenas manos."
        description="Te ayudamos a contratar y a preparar toda la documentación para tus trámites de residencia o visado."
      />

      <Footer />
    </main>
  )
}
