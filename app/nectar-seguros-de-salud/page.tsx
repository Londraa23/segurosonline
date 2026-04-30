import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, BluaSection } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Néctar Contigo — Seguro Médico Completo a Precio Reducido | Sanitas Ventas",
  description: "Néctar Contigo: asistencia sanitaria completa con hospitalización a través de una red médica de más de 15.000 profesionales. Con y sin copago.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/nectar-seguros-de-salud/" }
}

const pageFaqs = [
  { question: "¿Qué diferencia hay entre Néctar Contigo y Sanitas Más Salud?", answer: "La principal diferencia es la red médica: Néctar funciona con una red específica de +15.000 profesionales. A cambio, el precio es más accesible manteniendo cobertura completa con hospitalización." },
  { question: "¿Tiene urgencias en el extranjero?", answer: "Sí. Incluye cobertura de urgencias médicas en el extranjero hasta 12.000€ anuales." },
  { question: "¿Puedo elegir entre copago y sin copago?", answer: "Sí. Ofrecemos ambas modalidades con exactamente las mismas coberturas." },
  { question: "¿Cómo puedo saber si los médicos de mi zona están en la red Néctar?", answer: "Contacta con nosotros y te consultamos la disponibilidad en tu zona antes de contratar, sin compromiso." }
]

export default function NectarContigoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Néctar Contigo" }
        ]}
        label="Néctar Contigo"
        h1={<>Néctar Contigo.<br className="hidden lg:block" /> Asistencia sanitaria completa a un precio a medida.</>}
        body="Cobertura sanitaria completa con hospitalización, acceso a especialidades médicas y todas las coberturas esenciales, a través de una red médica exclusiva de más de 15.000 profesionales."
        badges={["Red médica específica", "Con y sin copago", "Hospitalización incluida"]}
        trustItems={["Asistencia completa", "Hospitalización", "+15.000 médicos", "Urgencias 12.000€/año"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "15.000+", label: "Médicos en red Néctar" },
        { value: "12.000€", label: "Urgencias en el extranjero" },
        { value: "2", label: "Modalidades (con/sin copago)" },
        { value: "24h", label: "Atención telefónica" },
      ]} />

      <FeatureBlock
        title="Cobertura completa — a un precio más accesible."
        description="Néctar Contigo te da acceso a todas las coberturas esenciales de un seguro médico completo, a través de una red médica optimizada."
        items={[
          "Medicina general, pediatría, enfermería y urgencias generales",
          "Todas las especialidades incluidas",
          "Pruebas diagnósticas: análisis, radiografías, resonancias, TAC, ecografías",
          "Métodos terapéuticos: rehabilitación, oncológicos, radioterapia, litotricia",
          "Intervenciones quirúrgicas ambulatorias y con ingreso",
          "Hospitalización completa",
        ]}
        imageSrc="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&q=80&auto=format"
        badge="Cobertura completa"
      />

      <CoverageCardGrid
        title="¿Qué incluye Néctar Contigo?"
        cards={[
          { icon: "shield", title: "Hospitalización completa", description: "Ingreso, estancia, quirófano y postoperatorio incluidos, a través de la red médica Néctar Contigo." },
          { icon: "star", title: "Red médica optimizada", description: "Más de 15.000 profesionales médicos en toda España, con cobertura completa a precio ajustado." },
          { icon: "check", title: "Urgencias en el extranjero", description: "Hasta 12.000€ anuales de cobertura para urgencias médicas en estancias en el extranjero de hasta 90 días." },
          { icon: "clock", title: "Con o sin copago", description: "Elige la modalidad más adecuada para ti. Las coberturas son exactamente las mismas en ambas." },
          { icon: "smartphone", title: "Sanitas 24 horas", description: "Atención telefónica ininterrumpida para urgencias médicas y gestiones con tu seguro." },
          { icon: "shield", title: "Sin carencias en consultas básicas", description: "Visitas médicas y pruebas sencillas como análisis, ecografías y radiografías disponibles desde el primer día." },
        ]}
      />

      <FeatureBlock
        title="Una red médica pensada para optimizar el precio."
        description="La cobertura de Néctar Contigo se presta exclusivamente a través de la red Néctar: más de 15.000 profesionales médicos en toda España. La nota clave para entender el producto."
        items={[
          "Más de 15.000 médicos en la red específica Néctar Contigo",
          "No da acceso al cuadro médico general de Sanitas (+58.000 médicos)",
          "A cambio, la prima mensual es significativamente inferior",
          "Cobertura hospitalaria completa con los centros de la red",
          "Antes de contratar verificamos contigo que haya médicos en tu zona",
        ]}
        imageSrc="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format"
        reverse
        badge="Red médica Néctar"
      />

      <FaqSection
        title="Preguntas sobre Néctar Contigo."
        description="Todo lo que necesitas saber de nuestra opción más ajustada en precio."
        faqs={pageFaqs}
      />

      <ContactSection
        label="¿HABLAMOS?"
        title="Cobertura completa sin comprometer el precio."
        description="Te confirmamos si los centros de tu zona están en la red Néctar y qué opción te conviene más."
      />
      <Footer />
    </main>
  )
}
