import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhiteCardGrid } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Seguros Dentales Sanitas | Salud Bucodental desde 9€/mes",
  description: "Descubre los mejores seguros dentales de Sanitas. Más de 50 servicios incluidos, limpiezas gratuitas y acceso a la red de Clínicas Milenium.",
}

export default function SegurosDentalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Dentales" }
        ]}
        label="Salud Bucodental"
        h1="Seguros Dentales Sanitas. Tu sonrisa en las mejores manos."
        body="Accede a la red dental más amplia de España con más de 200 Clínicas Milenium y 4.000 dentistas colaboradores."
        badges={["Desde 9€/mes", "Dental Milenium incluido", "Limpiezas gratis"]}
        trustItems={["Sin periodos de carencia", "Hasta 40% descuento en tratamientos", "Urgencias 24h"]}
        imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80&auto=format"
      />

      <WhiteCardGrid
        title="Nuestros Planes Dentales"
        subtitle="Elige el seguro que mejor se adapte a tus necesidades y a las de tu familia."
        cards={[
          {
            icon: "star",
            title: "Sanitas Dental Milenium",
            description: "El seguro dental más equilibrado. Incluye más de 50 servicios sin coste adicional y descuentos en el resto de tratamientos."
          },
          {
            icon: "shield",
            title: "Sanitas Dental Premium",
            description: "La cobertura más completa para tu boca. Con mayores descuentos y acceso prioritario a especialistas."
          }
        ]}
      />

      <ContactSection />
      <Footer />
    </main>
  )
}
