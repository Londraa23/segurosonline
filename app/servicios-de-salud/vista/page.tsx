import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductTextSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Servicios de Salud Visual Sanitas — Cirugía Ocular en Madrid",
  description: "Cirugía láser ocular, operación de cataratas y tratamiento de presbicia con Sanitas en Madrid. Primera consulta gratuita, precios especiales y financiación.",
  path: "/servicios-de-salud/vista"
})

const vistaProducts: ProductCardData[] = [
  {
    title: "Cirugía Láser Ocular",
    label: "// MIOPÍA · ASTIGMATISMO · HIPERMETROPÍA",
    tagline: "Di adiós a las gafas para siempre.",
    description: "Modifica la curvatura de la córnea mediante láser para que los rayos de luz se enfoquen adecuadamente sobre la retina. Gran precisión, técnica mínimamente invasiva, sin anestesia general. En solo 20 minutos, ambos ojos operados.",
    features: [
      "Técnica mínimamente invasiva",
      "Ambos ojos en 20 minutos",
      "Sin anestesia general",
      "Recuperación inmediata"
    ],
    href: "/servicios-de-salud/vista/cirugia-laser-ocular/",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80&auto=format"
  },
  {
    title: "Láser de Cataratas",
    label: "// CATARATAS · LÁSER FEMTOSEGUNDO",
    tagline: "La última tecnología para recuperar tu visión.",
    description: "Extracción del cristalino opacificado y sustitución por una lente intraocular mediante láser de femtosegundo. Mayor precisión y seguridad que la cirugía tradicional. Sin hospitalización.",
    features: [
      "Láser de femtosegundo",
      "Sustitución por lente intraocular",
      "Sin hospitalización",
      "Mayor precisión que tradicional"
    ],
    href: "/servicios-de-salud/vista/laser-de-cataratas/",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&auto=format"
  },
  {
    title: "Presbicia (Vista Cansada)",
    label: "// PRESBICIA · VISTA CANSADA",
    tagline: "Soluciones para volver a ver de cerca.",
    description: "Técnicas extraoculares con láser excimer o intraoculares con lente intraocular multifocal. Recuperación inmediata. Al día siguiente de la intervención puedes hacer vida normal.",
    features: [
      "Láser excimer o lente multifocal",
      "Recuperación inmediata",
      "Vida normal al día siguiente",
      "Elimina necesidad de gafas de cerca"
    ],
    href: "/servicios-de-salud/vista/presbicia-vista-cansada/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format"
  }
]

export default function VistaIndexPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        type="MedicalWebPage"
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Vista", item: "https://segurosonline.net/servicios-de-salud/vista" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Vista" }
        ]}
        label="Primera consulta gratuita · Seas o no cliente de Sanitas · Precios especiales para asegurados"
        h1={<>Servicios de Salud Visual.<br />Di adiós a las gafas.</>}
        body="Hoy en día la operación de ojos es un procedimiento sencillo que se realiza a través de técnicas de láser ocular avanzadas. En Sanitas encontrarás la mejor solución para la presbicia (vista cansada), miopía, astigmatismo, hipermetropía y cataratas, con las técnicas más avanzadas y seguras del mercado."
        badges={["Consulta gratuita", "Financiación disponible", "Para clientes y no clientes"]}
        trustItems={["Primera consulta gratis", "Técnicas más avanzadas", "Sin anestesia general", "Recuperación inmediata"]}
        imageSrc="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1600&q=80&auto=format"
      />

      <CategoryProductGrid 
        title="Nuestros servicios para tu visión."
        description="Seleccionamos las técnicas más precisas y seguras para que recuperes tu calidad de vida lo antes posible."
        products={vistaProducts}
      />

      <ProductTextSection title="¿Eres o no cliente de Sanitas? No importa.">
        <p>
          Todos nuestros servicios de salud visual están disponibles tanto para clientes de Sanitas como para personas sin póliza.
        </p>
        <p>
          Los clientes de Sanitas disfrutan de descuentos especiales sobre el precio privado. También disponemos de condiciones especiales de financiación para todos.
        </p>
      </ProductTextSection>

      <ContactSection 
        label="¿Hablamos?"
        title="¿Te llamamos?"
        description="Primera consulta de valoración gratuita y sin compromiso. Cuéntanos tu caso."
      />

      <Footer />
    </main>
  )
}
