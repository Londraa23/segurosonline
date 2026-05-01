import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { 
  ProductStatBar, 
  FeatureBlock, 
  ProductFeatureSection, 
  FeatureList, 
  WhiteCardGrid,
  ComparisonTable,
  LegalNote
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Profesionales — Seguro Médico para Autónomos desde 37,60€/mes | Segurosonline",
  description: "Sanitas Profesionales: seguro médico completo para autónomos con coberturas por incapacidad temporal, accidentes laborales, dental incluido y deducción IRPF. ☎ Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-profesionales/"
  }
}

const pageFaqs = [
  { 
    question: "¿Cuánto me puedo deducir exactamente por el seguro?", 
    answer: "Como autónomo puedes deducir hasta 500€/año por ti, más 500€ por tu pareja e hijos menores de 26 años convivientes. En caso de discapacidad el límite es 1.500€ por persona. Esta deducción no aplica en el País Vasco. Consulta siempre con tu asesor fiscal." 
  },
  { 
    question: "¿Incluye accidentes laborales de serie?", 
    answer: "Sí. La cobertura de accidentes de tráfico y laborales está incluida de serie en Sanitas Profesionales — una cobertura que habitualmente está excluida en los seguros médicos estándar para autónomos." 
  },
  { 
    question: "¿Cuál es la diferencia entre las tres modalidades?", 
    answer: "Las coberturas médicas son las mismas en las tres. La diferencia está en la prima mensual y los copagos: Sin Copago — mayor prima, cero costes al usar el seguro. Plus — prima intermedia, copago con tope de 360€/año. Óptima — menor prima, copago sin tope anual." 
  },
  { 
    question: "¿Puedo incluir a toda mi familia?", 
    answer: "Sí, sin límite máximo de miembros. Cónyuge e hijos con las mismas coberturas, y sus primas también son deducibles fiscalmente como autónomo." 
  },
  { 
    question: "¿Qué pasa si me pongo enfermo y no puedo trabajar?", 
    answer: "El seguro incluye coberturas específicas para este momento: reembolso de la prima durante la baja, apoyo doméstico, cuidado de hijos, asistencia informática en casa, envío de medicamentos y más." 
  }
]

const carenciaRows = [
  { feature: "Intervenciones quirúrgicas Grupo 0–II", valA: "3 meses", valB: "Eliminable" },
  { feature: "Pruebas diagnósticas de alta tecnología", valA: "6 meses", valB: "Eliminable" },
  { feature: "Psicología", valA: "3 meses", valB: "Eliminable" },
  { feature: "Parto o cesárea", valA: "8 meses", valB: "No eliminable" },
  { feature: "Hospitalización e intervenciones Grupo III–VIII", valA: "8 meses", valB: "Eliminable" },
  { feature: "Métodos terapéuticos complejos", valA: "6 meses", valB: "Eliminable" },
  { feature: "Ligadura de trompas y vasectomía", valA: "10 meses", valB: "Eliminable" }
]

export default function SanitasProfesionalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Profesionales" }
        ]}
        label="Desde 37,60€/mes · Deducible IRPF hasta 500€/persona · Accidentes laborales · Blua GRATIS"
        h1={<>Sanitas Profesionales.<br />El seguro médico del autónomo<br />más completo del mercado.</>}
        body="Desde 37,60€/mes. Diseñado específicamente para autónomos y profesionales independientes. Con coberturas que ningún otro seguro incluye."
        badges={["Deducible IRPF", "Accidentes laborales", "Dental incluido"]}
        trustItems={["Deducible fiscalmente", "Accidentes de tráfico y laborales", "Hospitalización", "Dental incluido"]}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "37,60€", label: "Desde (al mes)" },
        { value: "500€", label: "Deducción IRPF" },
        { value: "57.000", label: "Médicos en España" },
        { value: "0€", label: "Accidentes laborales" },
      ]} />

      <ProductFeatureSection title="¿Qué es Sanitas Profesionales?">
        <p>
          Sanitas Profesionales es un seguro médico completo diseñado específicamente para autónomos y profesionales por cuenta propia. Incluye todas las coberturas de un seguro de salud completo más coberturas exclusivas pensadas para cubrir las situaciones que más afectan a un trabajador autónomo: incapacidad temporal, hospitalización inesperada y accidentes de tráfico o laborales.
        </p>
        <p>
          Desde 37,60€/mes tienes protección total para tu salud, con acceso a más de 57.000 médicos, 4.500 centros en toda España y Blua digital incluido gratis para siempre. Y lo más importante: la prima es deducible en tu declaración de IRPF.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="Coberturas médicas completas">
        <FeatureList items={[
          "Medicina primaria: medicina general, pediatría, enfermería y urgencias generales",
          "Acceso a todas las especialidades sin restricciones: cardiología, ginecología, traumatología, etc.",
          "Pruebas diagnósticas: análisis clínicos, radiografías, ecografías, TAC, endoscopias, etc.",
          "Métodos terapéuticos: rehabilitación, tratamientos oncológicos, radioterapia, etc.",
          "Intervenciones quirúrgicas con o sin ingreso hospitalario",
          "Hospitalización: ingreso y estancia en hospital",
          "Sanitas Dental 21 incluido: más de 30 servicios incluidos",
          "Segunda opinión médica internacional con especialistas de prestigio",
          "Urgencias en viajes al extranjero: hasta 12.000€/año",
          "Sanitas 24 horas y Sanitas Responde: asesoría médica profesional",
          "Gestiones online vía app Mi Sanitas: citas, resultados y autorizaciones",
          "Blua digital completo incluido gratis para siempre"
        ]} />
      </ProductFeatureSection>

      <FeatureBlock 
        title="Coberturas exclusivas para autónomos"
        description="Estas son las coberturas que marcan la diferencia de Sanitas Profesionales frente a cualquier seguro de salud estándar. Diseñadas específicamente para cubrir las situaciones en las que un autónomo se encuentra más desprotegido."
        items={[
          "Reembolso de la prima del seguro durante la baja",
          "Apoyo en las tareas del hogar y cuidado de hijos",
          "Envío de medicamentos y fisioterapeuta a domicilio",
          "Asistencia informática y traslado de correo al hogar",
          "Accidentes de tráfico y laborales incluidos de serie",
          "Capital por deceso en caso de accidente (hasta 5.250€)"
        ]}
        imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format"
        badge="Solo para Autónomos"
      />

      <WhiteCardGrid 
        title="Tres modalidades disponibles"
        subtitle="Elige la opción que mejor se adapte a tu ritmo de trabajo y presupuesto."
        cards={[
          { 
            icon: "shield", 
            title: "Sin Copago", 
            description: "Sin ningún coste adicional cada vez que usas el seguro. Ideal para quienes no quieren sorpresas y prevén un uso frecuente." 
          },
          { 
            icon: "trending", 
            title: "Plus", 
            description: "Prima más económica. Copago bajo con un tope máximo anual de 360€ por asegurado. Una vez alcanzado el tope, no pagas más." 
          },
          { 
            icon: "percent", 
            title: "Óptima", 
            description: "La prima más económica. Copago medio. Ideal para quienes usan los servicios de forma ocasional y quieren el coste mínimo." 
          }
        ]}
      />

      <ProductFeatureSection title="Ventaja fiscal para autónomos en 2026">
        <p>
          Contratar Sanitas Profesionales como autónomo no es solo una inversión en tu salud — es también una ventaja fiscal directa. Los autónomos en Régimen de Estimación Directa pueden deducirse en el IRPF las primas del seguro de salud:
        </p>
        <FeatureList items={[
          "Hasta 500€ por persona y año para el propio autónomo",
          "Hasta 500€ adicionales para el cónyuge o pareja",
          "Hasta 500€ adicionales por cada hijo menor de 26 años",
          "Hasta 1.500€ por persona en caso de discapacidad"
        ]} />
        <p className="mt-4 text-sm italic">
          * Esta deducción no es aplicable en el País Vasco. Los cónyuges e hijos tienen exactamente las mismas coberturas.
        </p>
      </ProductFeatureSection>

      <ComparisonTable 
        title="Periodos de carencia"
        subtitle="Eliminables si vienes de otra compañía (excepto parto)."
        rows={carenciaRows}
        colA="Periodo estándar"
        colB="Con seguro previo (+1 año)"
      />

      <ProductFeatureSection title="Blua digital — incluido gratis">
        <FeatureList items={[
          "Videoconsulta con más de 3.100 especialistas sin límite",
          "Urgencias por videoconsulta 24h sin cita previa",
          "Evaluador de síntomas: diagnóstico probable en minutos",
          "Fisioterapia y Psicología digital desde cualquier lugar",
          "Programas de salud personalizados: nutrición, entrenador personal, etc."
        ]} />
      </ProductFeatureSection>

      <LegalNote>
        Eliminación de carencias aplicable si llevas al menos 1 año en una póliza de cobertura completa de otra compañía española. Requiere aportar condiciones particulares y último recibo. Cobertura de decesos no aplicable en modalidad Óptima.
      </LegalNote>

      <FaqSection 
        title="Preguntas sobre Sanitas Profesionales"
        description="Dudas frecuentes sobre el seguro médico para autónomos."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="TU SALUD PROTEGIDA"
        title="Tu salud protegida. Tu fiscalidad optimizada."
        description="Te explicamos las coberturas y ventajas fiscales concretas para tu situación como autónomo. Sin compromiso."
      />

      <Footer />
    </main>
  )
}
