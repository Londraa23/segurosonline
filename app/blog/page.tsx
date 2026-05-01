import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Blog de Salud y Seguros Médicos | Sanitas Ventas",
  description: "Artículos informativos sobre salud, consejos médicos y guías sobre seguros de salud Sanitas. Mantente informado con nuestros expertos.",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/"
  }
}

export default function BlogLandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog" }
        ]}
        label="Blog de salud"
        h1="Consejos, guías y actualidad sobre tu salud."
        body="Explora nuestros artículos escritos por expertos para ayudarte a elegir el mejor seguro y cuidar de lo que más importa."
        badges={["Actualidad 2026", "Guías de salud", "Consejos expertos"]}
        trustItems={["Información contrastada", "Actualizado 2026", "Asesoramiento profesional"]}
        imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80&auto=format"
      />

      <BlogPreview />

      <ContactSection 
        label="DUDAS"
        title="¿Necesitas asesoramiento personalizado?"
        description="Si después de leer nuestros artículos tienes dudas sobre qué seguro te conviene más, llámanos."
      />

      <Footer />
    </main>
  )
}
