import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, BluaSection, LegalNote } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Inclusivo — Seguro Médico para Personas con Discapacidad | Sanitas Ventas",
  description: "Sanitas Inclusivo: seguro médico sin cuestionario de salud para personas con discapacidad. Sin límite de edad, sin carencias, desde 25€/mes.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-inclusivo-discapacidad/" }
}

const pageFaqs = [
  { question: "¿Puedo contratar si tengo una enfermedad preexistente grave?", answer: "Sí. Al no haber cuestionario de salud, no se excluye ninguna patología preexistente. Puedes contratar independientemente de tu estado de salud." },
  { question: "¿Cuál es el requisito de discapacidad?", answer: "Es necesario que al menos uno de los asegurados tenga un certificado de discapacidad reconocida (mínimo 33%)." },
  { question: "¿Puedo incluir a familiares sin discapacidad?", answer: "Sí, se pueden añadir familiares. El único requisito es que al menos un asegurado presente el certificado de discapacidad." },
  { question: "¿Incluye hospitalización?", answer: "No. Sanitas Inclusivo es extrahospitalario. No cubre hospitalización ni intervenciones quirúrgicas con ingreso." },
  { question: "¿Tiene carencias?", answer: "Casi ninguna. Solo resonancias magnéticas y TAC tienen 6 meses de carencia. El resto de servicios son accesibles desde el primer día." }
]

export default function SanitasInclusivoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Inclusivo" }
        ]}
        label="Sanitas Inclusivo"
        h1={<>Sanitas Inclusivo.<br className="hidden lg:block" /> La salud no entiende de barreras.</>}
        body="El seguro médico de Sanitas para personas con discapacidad. Sin cuestionario de salud, sin límite de edad y desde 25€/mes. Acceso completo a casi todas las coberturas desde el primer día."
        badges={["Desde 25€/mes", "Sin cuestionario de salud", "Sin límite de edad", "Blua GRATIS"]}
        trustItems={["Sin cuestionario de salud", "Desde 0 años", "Sin límite de edad", "Acceso desde el primer día"]}
        imageSrc="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "25€", label: "Prima desde (al mes)" },
        { value: "0", label: "Cuestionario de salud" },
        { value: "∞", label: "Sin límite de edad" },
        { value: "24h", label: "Urgencias digitales" },
      ]} />

      <FeatureBlock
        title="Cobertura ambulatoria completa, sin barreras."
        description="Acceso desde el primer día a casi todas las coberturas, sin necesidad de demostrar buen estado de salud previo."
        items={[
          "Consultas de medicina primaria y todas las especialidades sin límite",
          "Pruebas diagnósticas simples: análisis, radiografías, ecografías",
          "Resonancias magnéticas y TAC (carencia de 6 meses)",
          "Métodos terapéuticos simples",
          "Cobertura dental básica",
          "Urgencias en el extranjero hasta 15.000€/año",
        ]}
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80&auto=format"
        badge="Acceso desde el primer día"
      />

      <CoverageCardGrid
        title="Servicios específicos para cada necesidad."
        cards={[
          { icon: "shield", title: "Sin cuestionario de salud", description: "No se excluye ninguna patología preexistente. Contratas independientemente de tu estado de salud." },
          { icon: "star", title: "Sin límite de edad", description: "A diferencia de la mayoría de seguros, Sanitas Inclusivo no tiene edad máxima de contratación ni de permanencia." },
          { icon: "check", title: "Servicios a domicilio", description: "Envío de medicamentos, auxiliar a domicilio, acompañamiento a citas médicas y durante la hospitalización." },
          { icon: "clock", title: "Analítica a domicilio", description: "Si necesitas analítica y no puedes desplazarte, Sanitas la realiza en tu domicilio." },
          { icon: "smartphone", title: "Blua digital incluido", description: "Videoconsulta con especialistas y urgencias 24h sin cita previa desde tu dispositivo." },
          { icon: "shield", title: "Incluye familiares", description: "Puedes añadir familiares sin discapacidad a la póliza. Solo hace falta que un asegurado tenga el certificado (mín. 33%)." },
        ]}
      />

      <BluaSection items={[
        "Videoconsulta de urgencias 24h sin cita previa",
        "Programas de salud digitales: nutrición, embarazo, salud infantil, entrenador personal",
        "Gestiones online: citas, autorizaciones, resultados desde la app Mi Sanitas",
      ]} />

      <FeatureBlock
        title="Apoyo en el día a día."
        description="Sanitas Inclusivo no es solo medicina. Es apoyo real cuando lo necesitas."
        items={[
          "Envío de medicamentos a domicilio (3 servicios/año, entrega en máx. 3h)",
          "Auxiliar a domicilio ante situaciones imprevistas",
          "Acompañamiento a cita médica: 3 servicios de ida y vuelta por año",
          "Acompañamiento durante hospitalización superior a 48h",
          "Auxiliar a domicilio tras hospitalización (máx. 20h/año)",
        ]}
        imageSrc="https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?w=900&q=80&auto=format"
        reverse
        badge="Servicios de Apoyo"
      />

      <section className="py-10 bg-[#001C3D]">
        <div className="container mx-auto max-w-4xl px-4">
          <LegalNote>
            Seguro desarrollado por Sanitas en colaboración con ILUNION Correduría de Seguros. Requiere certificado de discapacidad (mínimo 33%) para al menos un asegurado. Sin cuestionario de salud previo ni límite de edad. Seguro extrahospitalario: no cubre hospitalización ni cirugía con ingreso.
          </LegalNote>
        </div>
      </section>

      <FaqSection
        title="Preguntas sobre Sanitas Inclusivo."
        description="Todo lo que necesitas saber antes de contratar."
        faqs={pageFaqs}
      />

      <ContactSection
        label="¿HABLAMOS?"
        title="Tu salud merece la misma atención que la de todos."
        description="Te explicamos todo sin prisa. Sin jerga y sin cuestionarios previos."
      />
      <Footer />
    </main>
  )
}
