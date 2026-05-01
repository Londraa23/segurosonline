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
  WhiteCardGrid,
  LegalNote,
  FeatureBlock
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Néctar Contigo — Seguro Médico Completo a Precio Accesible | Segurosonline",
  description: "Néctar Contigo: asistencia sanitaria completa con hospitalización a través de una red médica de más de 15.000 profesionales. Con y sin copago. Contrátalo aquí.",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/nectar-contigo/"
  }
}

const pageFaqs = [
  { 
    question: "¿Cuál es la diferencia entre Néctar Contigo y Sanitas Más Salud?", 
    answer: "La principal diferencia es la red médica: Néctar Contigo funciona con una red específica de más de 15.000 profesionales, mientras que Sanitas Más Salud da acceso al cuadro médico general de Sanitas (más de 58.000 profesionales en toda España). A cambio, Néctar Contigo tiene un precio más accesible manteniendo la cobertura completa con hospitalización." 
  },
  { 
    question: "¿Incluye hospitalización?", 
    answer: "Sí. A diferencia de otros seguros de entrada, Néctar Contigo incluye hospitalización completa: ingresos, cirugías y seguimiento postoperatorio." 
  },
  { 
    question: "¿Tiene urgencias en el extranjero?", 
    answer: "Sí. Incluye cobertura de urgencias médicas en viajes al extranjero hasta 12.000€/año." 
  },
  { 
    question: "¿Cómo sé si los médicos de mi zona están en la red Néctar?", 
    answer: "Consúltanos antes de contratar y verificamos la disponibilidad de médicos y centros en tu localidad sin ningún compromiso." 
  },
  { 
    question: "¿Puedo cambiar de modalidad (copago/sin copago) después?", 
    answer: "En los periodos de renovación es posible revisar y modificar las condiciones de tu póliza. Consúltanos para tu caso concreto." 
  }
]

export default function NectarContigoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Néctar Contigo" }
        ]}
        label="Hospitalización incluida · Con y sin copago · Red médica +15.000 profesionales"
        h1={<>Néctar Contigo.<br />Asistencia sanitaria completa<br />a un precio a medida.</>}
        body="Todas las coberturas esenciales, incluyendo hospitalización, a través de una red médica específica. Con copago o sin copago. Al precio más accesible."
        badges={["Precio accesible", "Hospitalización", "Red médica específica"]}
        trustItems={["Cobertura completa", "Hospitalización", "Urgencias 12.000€/año", "Sin carencias desde el inicio"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "+15.000", label: "Médicos en red Néctar" },
        { value: "12.000€", label: "Urgencias extranjero" },
        { value: "Completa", label: "Cobertura hospitalaria" },
        { value: "Ahorro", label: "Precio competitivo" },
      ]} />

      <ProductFeatureSection title="¿Qué es Néctar Contigo?">
        <p>
          Néctar Contigo es un seguro de asistencia sanitaria completa con hospitalización, acceso a todas las especialidades médicas y coberturas esenciales, a través de una red médica específica y reducida de más de 15.000 profesionales.
        </p>
        <p>
          Su principal ventaja es el precio: al funcionar con una red médica acotada en lugar del cuadro médico general de Sanitas, puede ofrecer una cobertura completa incluyendo hospitalización a un coste mensual significativamente más accesible. Con copago o sin copago — tú decides.
        </p>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Qué incluye Néctar Contigo?">
        <FeatureList items={[
          "Medicina general, pediatría, enfermería y urgencias generales",
          "Acceso a todas las especialidades médicas: cardiología, ginecología, traumatología, etc.",
          "Pruebas diagnósticas: análisis clínicos, radiografías, ecografías, TAC, etc.",
          "Métodos terapéuticos: rehabilitación, tratamientos oncológicos, radioterapia, etc.",
          "Intervenciones quirúrgicas ambulatorias y con ingreso hospitalario",
          "Hospitalización: ingreso y estancia en hospital",
          "Urgencias en viajes al extranjero: hasta 12.000€/año",
          "Sanitas 24 horas y Sanitas Welcome: asesoría médica profesional",
          "Gestiones online vía app Mi Sanitas"
        ]} />
      </ProductFeatureSection>

      <LegalNote>
        <strong>NOTA CLAVE:</strong> La cobertura médica de Néctar Contigo se presta exclusivamente a través de una red médica específica denominada "Néctar Contigo", con más de 15.000 profesionales médicos. No da acceso al cuadro médico general de Sanitas (58.000+ profesionales).
      </LegalNote>

      <WhiteCardGrid 
        title="Con copago o sin copago"
        subtitle="Las coberturas médicas son exactamente las mismas en ambas modalidades. Elige la que mejor se adapte a tu uso previsto."
        cards={[
          { 
            icon: "percent", 
            title: "Modalidad con copago", 
            description: "Prima mensual más reducida. Al usar el seguro abonas una pequeña cantidad por cada servicio. Ideal para quienes buscan el coste mensual más ajustado." 
          },
          { 
            icon: "shield", 
            title: "Modalidad sin copago", 
            description: "Prima mensual algo más alta pero sin ningún coste adicional al usar los servicios. Ideal para familias o quienes prevén un uso frecuente." 
          }
        ]}
      />

      <FeatureBlock 
        title="¿Para quién es Néctar Contigo?"
        description="Pensado para personas que necesitan una cobertura sanitaria completa con hospitalización, pero quieren hacerlo al precio más accesible del mercado."
        items={[
          "Quienes buscan hospitalización al precio más económico",
          "Quienes no requieren acceso a centros fuera de la red Néctar",
          "Personas que buscan un equilibrio entre cobertura y precio",
          "Familias que quieren cobertura completa sin disparar el gasto"
        ]}
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format"
        badge="Ahorro Inteligente"
        reverse
      />

      <ProductFeatureSection title="Periodos de carencia">
        <p>
          Visitas médicas y pruebas sencillas (análisis, ecografías, radiografías simples) están disponibles sin periodos de carencia o con carencias muy cortas desde el inicio.
        </p>
        <p>
          Si ya tienes otro seguro de salud y quieres pasarte a Néctar Contigo, puedes indicarlo al contratar para reducir o eliminar las carencias. Consúltanos los periodos concretos para cada cobertura según tu situación.
        </p>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre Néctar Contigo"
        description="Dudas frecuentes sobre el seguro médico de red optimizada."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="AHORRO Y COBERTURA"
        title="Cobertura completa al precio más accesible."
        description="Verificamos si los centros de tu zona están en la red Néctar y te calculamos el precio exacto sin compromiso."
      />

      <Footer />
    </main>
  )
}
