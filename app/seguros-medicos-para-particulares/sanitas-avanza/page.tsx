import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ProcessSteps, StatementBand, BluaSection, LegalNote } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Avanza — Seguro Médico con Cirugía sin Hospitalización | Sanitas Ventas Madrid",
  description: "Sanitas Avanza: el único seguro sin hospitalización que incluye más de 400 intervenciones quirúrgicas. Cuadro médico completo y Blua gratis. Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-avanza/" }
}

const pageFaqs = [
  { question: "¿Qué cirugías cubre exactamente?", answer: "Más de 400 intervenciones de los grados 0, 1 y 2 de la OMC: extirpaciones de pólipos, quistes, papilomas, lesiones cutáneas, extracción de muelas, vasectomías y muchas más." },
  { question: "¿Incluye parto?", answer: "No. El parto requiere hospitalización. Para cobertura de maternidad, consulta Sanitas Más Salud." },
  { question: "¿Tiene periodos de carencia?", answer: "Solo para intervenciones quirúrgicas: 3 meses. Si vienes de otra compañía con +1 año, puedes reducirlos o eliminarlos." },
  { question: "¿Puedo ampliar a hospitalización más adelante?", answer: "Sí, sin perder antigüedad ni coberturas. Te asesoramos cuando lo necesites." }
]

export default function SanitasAvanzaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Avanza" }
        ]}
        label="Sanitas Avanza"
        h1={<>Sanitas Avanza.<br className="hidden lg:block" /> El único seguro sin hospitalización con cirugía incluida.</>}
        body="Accede a todo el cuadro médico Sanitas y a más de 400 intervenciones quirúrgicas ambulatorias. Sin necesitar ingreso hospitalario. El equilibrio perfecto entre cobertura y precio."
        badges={["+400 intervenciones quirúrgicas", "Blua GRATIS", "Sin hospitalización"]}
        trustItems={["Cuadro médico completo", "400+ cirugías incluidas", "Urgencias 24h", "Blua digital"]}
        imageSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "400+", label: "Intervenciones quirúrgicas" },
        { value: "51.000+", label: "Médicos en España" },
        { value: "3m", label: "Carencia cirugía" },
        { value: "24h", label: "Urgencias digitales" },
      ]} />

      {/* Unique value: the surgery differentiator */}
      <StatementBand
        statement="El único seguro privado sin hospitalización que cubre más de 400 intervenciones quirúrgicas ambulatorias."
        attribution="Sanitas Avanza · El diferencial del mercado"
      />

      {/* Surgical image left */}
      <FeatureBlock
        title="Más de 400 intervenciones quirúrgicas. Sin ingreso."
        description="Grados 0, 1 y 2 de dificultad según la OMC. Anestesia y quirófano incluidos. Sin necesitar hospitalización."
        items={[
          "Extirpación de pólipos, quistes, papilomas y lesiones en la piel",
          "Extracción de muelas del juicio con anestesia",
          "Vasectomías y otras intervenciones de urología",
          "Corrección de desviación de tabique nasal",
          "Y cientos de intervenciones más — consulta el listado completo",
        ]}
        imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format"
        badge="Cirugía sin hospitalización"
        bgColor="bg-[#002A54]"
      />

      {/* How it works steps */}
      <ProcessSteps
        title="¿Cómo funciona la cirugía con Sanitas Avanza?"
        subtitle="El proceso es sencillo y sin burocracia."
        steps={[
          { title: "Consulta con el especialista", description: "Pide cita con el especialista correspondiente dentro del cuadro médico Sanitas." },
          { title: "Indicación quirúrgica", description: "El especialista evalúa tu caso y, si procede, indica la intervención y solicita la autorización." },
          { title: "Autorización Sanitas", description: "Sanitas gestiona la autorización de la intervención, habitualmente en 48-72 horas." },
          { title: "Intervención", description: "Acudes al centro para la cirugía. Sin ingreso, vuelves a casa el mismo día." },
        ]}
        bgColor="bg-[#001C3D]"
      />

      {/* Coberturas médicas */}
      <FeatureBlock
        title="Todo el cuadro médico Sanitas. Sin límites."
        description="Avanza incluye acceso completo a todas las especialidades del cuadro médico Sanitas, igual que Más Salud pero sin la parte hospitalaria."
        items={[
          "Medicina primaria y todas las especialidades sin restricciones",
          "Pruebas diagnósticas: análisis clínicos, ecografías, radiografías",
          "Métodos terapéuticos simples (fisioterapia, aerosolterapia)",
          "Cobertura dental básica: consultas, limpiezas, curas y extracciones",
          "Urgencias hospitalarias y domiciliarias",
        ]}
        imageSrc="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80&auto=format"
        reverse
        badge="Cuadro médico completo"
        bgColor="bg-[#003B73]"
      />

      <BluaSection items={[
        "Videoconsulta con todas las especialidades, sin límite de consultas",
        "Urgencias por videoconsulta 24h sin cita previa",
        "Programas de salud digitales: nutrición, embarazo, salud infantil, entrenador personal",
      ]} />

      <LegalNote>
        Edad máxima de contratación: 59 años. Sin edad máxima de permanencia. Periodo de carencia para intervenciones quirúrgicas Grupo 0 al II (OMC): 3 meses. Eliminables si llevas +1 año en otra compañía española.
      </LegalNote>

      <FaqSection title="Preguntas sobre Sanitas Avanza." description="Resolvemos tus dudas sobre cirugías sin hospitalización y coberturas." faqs={pageFaqs} />
      <ContactSection label="¿HABLAMOS?" title="El equilibrio perfecto entre precio y cobertura." description="Te explicamos si Sanitas Avanza encaja contigo o si hay una opción aún mejor." />
      <Footer />
    </main>
  )
}
