import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhiteCardGrid } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Seguros de Decesos y Asistencia Familiar | Sanitas",
  description: "Tranquilidad total para tu familia con los seguros de decesos de Sanitas. Gestión integral y apoyo en los momentos más difíciles.",
}

export default function DecesosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos-para-particulares/" },
          { label: "Asistencia Familiar y Decesos" }
        ]}
        label="Tranquilidad Familiar"
        h1="Seguros de Decesos Sanitas. Protección para lo que más quieres."
        body="Una gestión humana y profesional para que tu familia esté protegida y acompañada cuando más lo necesita, sin preocupaciones administrativas."
        rating={
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">· 156 opiniones verificadas</span>
          </div>
        }
        badges={["Asistencia Global", "Sin Papeleo", "Apoyo Psicológico"]}
        trustItems={["Gestión integral", "Traslado nacional e internacional", "Asistencia jurídica"]}
        imageSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format"
      />

      <WhiteCardGrid
        title="Nuestras Opciones de Protección"
        subtitle="Soluciones adaptadas para garantizar el bienestar de tu familia en cualquier circunstancia."
        cards={[
          {
            icon: "shield",
            title: "Asistencia Familiar iPlus",
            description: "El seguro de decesos más moderno con coberturas de salud incluidas y servicios digitales."
          },
          {
            icon: "star",
            title: "Asistencia Senior",
            description: "Diseñado específicamente para mayores, con gestión simplificada y todas las garantías de Sanitas."
          }
        ]}
      />

      <ContactSection />
      <Footer />
    </main>
  )
}
