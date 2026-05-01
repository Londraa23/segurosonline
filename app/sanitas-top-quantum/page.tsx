import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, StatementBand, ThreeColumnFeatures, LegalNote } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas TOP QUANTUM — Seguro Médico Premium con Reembolso | Sanitas Ventas",
  description: "Sanitas TOP QUANTUM: asistencia sanitaria premium, todo incluido, con reembolso del 80% hasta 10.000€/año y urgencias en el extranjero hasta 15.000€.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/sanitas-top-quantum/" }
}

const pageFaqs = [
  { question: "¿En qué se diferencia de Sanitas Más Salud?", answer: "TOP QUANTUM es nuestra modalidad premium que incluye de serie el reembolso del 80% hasta 10.000€ en las especialidades más demandadas y cobertura total sin gastos adicionales por uso. Más Salud ofrece cobertura completa pero el reembolso externo es opcional." },
  { question: "¿El reembolso aplica a cualquier médico?", answer: "El reembolso cubre medicina general, pediatría, ginecología y obstetricia con cualquier médico fuera del cuadro, hasta 10.000€/año." },
  { question: "¿Incluye cobertura de accidentes de tráfico?", answer: "Sí, accidentes de tráfico y laborales están incluidos de serie — habitualmente excluidos en otros seguros médicos." },
  { question: "¿Cómo funciona el subsidio por hospitalización?", answer: "Es un complemento opcional de 4,50€/mes que da una indemnización de 30€ diarios durante la hospitalización, hasta un máximo de 90 días." }
]

export default function SanitasTopQuantumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Sanitas TOP QUANTUM" }
        ]}
        label="Sanitas TOP QUANTUM"
        h1={<>Sanitas TOP QUANTUM.<br className="hidden lg:block" /> Todo incluido. Con reembolso. Sin límites.</>}
        body="El seguro de salud más premium de Sanitas. Sin gastos adicionales por uso. Con reembolso del 80% hasta 10.000€/año en las especialidades más demandadas. Desde 0 hasta 75 años, sin límite de permanencia."
        badges={["Todo incluido", "Reembolso 80% hasta 10.000€", "Hasta 75 años de contratación"]}
        trustItems={["Todo incluido", "Reembolso familiar incluido", "58.000+ médicos", "Sin límite permanencia"]}
        imageSrc="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=1600&q=80&auto=format"
      />

      {/* Big numbers — the premium feeling */}
      <ProductStatBar stats={[
        { value: "0€", label: "Gastos adicionales por uso" },
        { value: "10.000€", label: "Reembolso/asegurado/año" },
        { value: "80%", label: "Tasa de reembolso" },
        { value: "15.000€", label: "Urgencias en el extranjero" },
      ]} />

      {/* Big statement — premium brand feel */}
      <StatementBand
        statement="Una póliza. Cuadro médico completo, todo incluido y con reembolso cuando el médico que necesitas no está en la red. Nada más."
        attribution="Sanitas TOP QUANTUM · La elección premium"
      />

      {/* What's included */}
      <FeatureBlock
        title="Todo incluido. Sin pagar nada más al usarlo."
        description="TOP QUANTUM combina el cuadro médico completo de Sanitas con reembolso de gastos fuera de la red. Un único pago mensual: tu prima."
        items={[
          "Todas las especialidades médicas incluidas",
          "Psicología: 20 sesiones incluidas",
          "Pruebas diagnósticas de todo tipo: análisis, resonancias, TAC, ecografías",
          "Intervenciones quirúrgicas y hospitalización completa",
          "Dental Milenium: 50+ servicios incluidos",
          "Accidentes de tráfico y laborales incluidos de serie",
        ]}
        imageSrc="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900&q=80&auto=format"
        badge="Premium"
        bgColor="bg-[#002A54]"
      />

      {/* Three column extras */}
      <ThreeColumnFeatures
        title="Lo que solo TOP QUANTUM te da."
        columns={[
          { title: "Reembolso 80% / 10.000€", body: "Medicina general, pediatría, ginecología y obstetricia fuera del cuadro médico Sanitas, reembolsadas al 80%. Hasta 10.000€ por asegurado y año." },
          { title: "Dental Milenium", body: "Acceso a más de 200 centros Milenium Dental con más de 50 servicios en cobertura completa y hasta un 40% de descuento en el resto de tratamientos." },
          { title: "Urgencias 15.000€/año", body: "Urgencias médicas en el extranjero cubiertas en estancias de hasta 90 días, con un límite de 15.000€ por asegurado y año — 3.000€ más que Más Salud." },
        ]}
        bgColor="bg-[#001C3D]"
      />

      {/* 6 premium cards */}
      <CoverageCardGrid
        title="Por qué es el seguro más completo."
        cards={[
          { icon: "star", title: "Todo incluido en cada servicio", description: "Cada visita al médico, cada prueba, cada especialidad — sin pagar nada adicional." },
          { icon: "shield", title: "Reembolso familiar 80%", description: "Cuando el médico que necesitas no está en la red, Sanitas te devuelve el 80% de los gastos." },
          { icon: "check", title: "Acccidentes tráfico y laborales", description: "Cobertura incluida de serie para accidentes de tráfico y laborales — habitualmente excluidos en otros seguros." },
          { icon: "clock", title: "Segunda opinión internacional", description: "Acceso a especialistas de reconocido prestigio internacional para los casos que requieren máxima seguridad." },
          { icon: "smartphone", title: "Blua digital incluido", description: "Videoconsulta, urgencias 24h y programas de salud personalizados sin coste adicional." },
          { icon: "shield", title: "Complementos opcionales", description: "Reembolso ampliado (75.000€, 200.000€ o 300.000€), subsidio hospitalización, farmacia y evacuación." },
        ]}
        bgColor="bg-[#003B73]"
      />

      <LegalNote>
        Edad de contratación: 0 a 75 años. Sin edad máxima de permanencia. Periodos de carencia: intervenciones y hospitalización 8 meses, pruebas alta tecnología 6 meses, psicología 3 meses. Eliminables con +1 año en otra compañía (excepto parto).
      </LegalNote>

      <FaqSection title="Preguntas sobre Sanitas TOP QUANTUM." description="Todo sobre el seguro premium de Sanitas." faqs={pageFaqs} />
      <ContactSection label="¿HABLAMOS?" title="Todo incluido y con reembolso. Sin concesiones." description="Te explicamos en detalle qué cubre en tu caso y qué complementos opcionales te interesan." />
      <Footer />
    </main>
  )
}
