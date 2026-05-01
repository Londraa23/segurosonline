import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhiteCardGrid } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Servicios de Salud Sanitas | Especialidades Médicas y Bienestar",
  description: "Explora los servicios de salud de Sanitas: maternidad, nutrición, salud ocular y bienestar integral con tecnología de vanguardia.",
}

export default function ServiciosSaludPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud" }
        ]}
        label="Especialidades y Bienestar"
        h1="Servicios de Salud Sanitas. Mucho más que un seguro."
        body="Programas específicos de salud y bienestar diseñados para cuidarte en cada etapa, desde la maternidad hasta la salud preventiva."
        badges={["Maternidad", "Nutrición", "Salud Ocular", "Psicología"]}
        trustItems={["Expertos de primer nivel", "Tecnología avanzada", "Atención personalizada"]}
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format"
      />

      <WhiteCardGrid
        title="Nuestras Áreas de Especialidad"
        subtitle="Servicios diseñados para complementar tu salud y mejorar tu calidad de vida."
        cards={[
          {
            icon: "star",
            title: "Maternidad",
            description: "Seguimiento completo del embarazo, preparación al parto y cuidados para el recién nacido."
          },
          {
            icon: "trending",
            title: "Nutrición y Obesidad",
            description: "Planes personalizados, asesoramiento nutricional y soluciones avanzadas para el control de peso."
          },
          {
            icon: "shield",
            title: "Salud Ocular",
            description: "Cirugía láser, tratamiento de cataratas y revisiones oftalmológicas con la última tecnología."
          }
        ]}
      />

      <ContactSection />
      <Footer />
    </main>
  )
}
