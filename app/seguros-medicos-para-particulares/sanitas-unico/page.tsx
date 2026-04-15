import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, BluaSection, LegalNote } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Único — Seguro Médico para Mayores de 60 sin Límite de Edad | Sanitas Ventas",
  description: "Sanitas Único: seguro médico desde 60 años sin límite de edad. Geriatría, servicios a domicilio, programas para mayores y Blua incluido. Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-unico/" }
}

const pageFaqs = [
  { question: "¿Desde qué edad puedo contratar Sanitas Único?", answer: "Desde los 60 años. No existe límite de edad máxima ni para contratar ni para mantener la póliza activa." },
  { question: "¿Requiere cuestionario de salud?", answer: "No. Sanitas Único puede contratarse sin cuestionario de salud, independientemente de las patologías o antecedentes del asegurado." },
  { question: "¿Incluye servicios a domicilio?", answer: "Sí. Incluye envío de medicamentos, auxiliar a domicilio, fisioterapia a domicilio, acompañamiento a citas médicas y durante la hospitalización, podología y peluquería, entre otros." },
  { question: "¿Qué es el copago progresivo?", answer: "El copago es el importe adicional que se abona al usar los servicios. En Sanitas Único es progresivo según el servicio utilizado. Te explicamos los detalles al contratar." }
]

export default function SanitasUnicoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Único" }
        ]}
        label="Sanitas Único"
        h1={<>Sanitas Único.<br className="hidden lg:block" /> El seguro médico que no te abandona con los años.</>}
        body="Diseñado específicamente para personas a partir de 60 años, sin límite de edad. Coberturas médicas completas, servicios a domicilio y programas de salud adaptados a mayores, con Blua incluido."
        badges={["Desde 60 años", "Sin límite de edad", "Sin cuestionario de salud"]}
        trustItems={["Desde 60 años", "Sin límite de edad", "Geriatría", "Servicios a domicilio"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "60+", label: "Años para contratar" },
        { value: "∞", label: "Sin límite de edad" },
        { value: "0", label: "Cuestionario de salud" },
        { value: "24h", label: "Atención senior telefónica" },
      ]} />

      <FeatureBlock
        title="Medicina completa para tu etapa de vida."
        description="Sanitas Único va mucho más allá de la asistencia médica convencional. Incluye servicios específicos para el bienestar en la madurez."
        items={[
          "Medicina primaria y todas las especialidades incluidas",
          "Pruebas diagnósticas simples y de alta tecnología",
          "Fisioterapia: 10 sesiones incluidas",
          "Cobertura dental básica",
          "Videoconsulta con especialistas y urgencias 24h",
          "Atención telefónica especializada para mayores",
        ]}
        imageSrc="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=900&q=80&auto=format"
        badge="Coberturas médicas"
      />

      <CoverageCardGrid
        title="Servicios pensados para tu bienestar."
        cards={[
          { icon: "shield", title: "Plan personal de cuidados", description: "Un asesor de salud especialista diseña contigo un plan adaptado a tu situación y necesidades." },
          { icon: "star", title: "Servicios a domicilio", description: "Auxiliar, fisioterapia, podología, peluquería, acompañamiento a citas médicas y durante la hospitalización." },
          { icon: "check", title: "Programas para mayores", description: "Nutrición especializada, gimnasio de la mente, programa de envejecimiento saludable y psicología." },
          { icon: "clock", title: "Descuentos Sanitas Mayores", description: "Acceso a descuentos en la red de residencias y centros de día de Sanitas Mayores." },
          { icon: "smartphone", title: "Blua digital incluido", description: "Videoconsulta con especialistas y urgencias 24h por videoconsulta sin cita previa." },
          { icon: "shield", title: "Sin límite de edad ni cuestionario", description: "Contratación desde 60 años sin límite máximo. Sin cuestionario de salud previo." },
        ]}
      />

      <BluaSection items={[
        "Videoconsulta con todas las especialidades sin límite de consultas",
        "Urgencias por videoconsulta 24h sin cita previa",
        "Programas de salud digitales personalizados para tu etapa de vida",
      ]} />

      <FeatureBlock
        title="Apoyo en el día a día, en tu hogar."
        description="Cuando más lo necesitas, Sanitas Único está contigo en casa."
        items={[
          "Envío de medicamentos a domicilio",
          "Auxiliar a domicilio ante situaciones imprevistas",
          "Fisioterapeuta a domicilio",
          "Podología y peluquería a domicilio",
          "Acompañamiento a cita médica (ida y vuelta)",
          "Acompañamiento durante la hospitalización",
        ]}
        imageSrc="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=80&auto=format"
        reverse
        badge="Servicios a Domicilio"
      />

      <section className="py-10 bg-[#001C3D]">
        <div className="container mx-auto max-w-4xl px-4">
          <LegalNote>
            Sanitas Único es un seguro con copago progresivo. Contratación desde 60 años sin límite de permanencia. No requiere cuestionario de salud previo.
          </LegalNote>
        </div>
      </section>

      <FaqSection
        title="Preguntas sobre Sanitas Único."
        description="Respondemos tus dudas sobre el seguro sin edad límite."
        faqs={pageFaqs}
      />

      <ContactSection
        label="¿HABLAMOS?"
        title="La edad es experiencia. Tu salud, protegida."
        description="Cuéntanos tu situación y te explicamos exactamente qué cubre Sanitas Único en tu caso."
      />
      <Footer />
    </main>
  )
}
