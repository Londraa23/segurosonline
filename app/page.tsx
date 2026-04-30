import dynamic from 'next/dynamic'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { InsuranceProducts } from "@/components/insurance-products"
import { BluaSection } from "@/components/blua-section"
import { ServicesSection } from "@/components/services-section"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"
import { DEFAULT_FAQS } from "@/lib/constants"

export const metadata = generateMetadata({
  title: 'Seguros de Salud Sanitas | Desde 39€/mes',
  description: 'Agencia exclusiva de seguros Sanitas. Seguros de salud para particulares, autónomos, empresas y mayores de 60 años. Blua GRATIS para siempre. Sin carencias ni permanencia.',
  path: '/',
  subTitle: false
})

// Low priority components loaded dynamically
const CuadroMedico = dynamic(() => import("@/components/cuadro-medico").then(mod => mod.CuadroMedico))
const FeaturedProducts = dynamic(() => import("@/components/featured-products").then(mod => mod.FeaturedProducts))
const PersonalizedAttention = dynamic(() => import("@/components/personalized-attention").then(mod => mod.PersonalizedAttention))
const FaqSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FaqSection))
const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials))
const BlogPreview = dynamic(() => import("@/components/blog-preview").then(mod => mod.BlogPreview))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => mod.ContactSection))
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))
const StickyCta = dynamic(() => import("@/components/sticky-cta").then(mod => mod.StickyCta))

export default function HomePage() {
  return (
    <>
      <SchemaMarkup faqs={DEFAULT_FAQS} />
      <Header />
      <main>
        {/* 1. Hero & Trust */}
        <Hero />
        <TrustBar />

        {/* 2. Introducción a Áreas de Especialidad */}
        <ServicesSection />

        {/* 3. Productos / Target (Particulares, Autónomos, Empresas) */}
        <InsuranceProducts />

        {/* 4. Planes Específicos Más Vendidos */}
        <FeaturedProducts />

        {/* 5. Valor añadido (Blua) */}
        <BluaSection />

        {/* 6. Por qué nosotros (Servicio al Cliente Experto) */}
        <PersonalizedAttention />

        {/* 7. Datos de Soporte / Red Médica */}
        <CuadroMedico />

        {/* 8. Validación Social */}
        <Testimonials />

        {/* 9. Resolución de Dudas Finales */}
        <FaqSection />

        {/* 10. Contenido Seo/Blog */}
        <BlogPreview />

        {/* 11. Conversión / Cierre */}
        <ContactSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
