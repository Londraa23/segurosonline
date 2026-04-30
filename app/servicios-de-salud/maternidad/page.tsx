import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductTextSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Servicios de Maternidad Sanitas — Fertilidad y Test Prenatal",
  description: "Reproducción asistida, conservación del cordón umbilical y test genético prenatal con Sanitas. Te acompañamos en cada etapa de tu maternidad.",
  path: "/servicios-de-salud/maternidad"
})

const maternidadProducts: ProductCardData[] = [
  {
    title: "Reproducción Asistida",
    label: "// FERTILIDAD · FIV · INSEMINACIÓN",
    tagline: "Os ayudamos a hacer realidad el sueño de ser padres.",
    description: "Las últimas y más exitosas técnicas de reproducción asistida. Primera consulta gratuita valorada en más de 120€. Descuento del 8% sobre precio privado para clientes Sanitas. Condiciones especiales de financiación. Precios cerrados.",
    features: [
      "Primera consulta gratuita (valor +120€)",
      "8% dto. para asegurados Sanitas",
      "Centros de vanguardia",
      "Financiación a medida"
    ],
    href: "/servicios-de-salud/maternidad/reproduccion-asistida/",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80&auto=format"
  },
  {
    title: "Sanitas Cordón Umbilical",
    label: "// CÉLULAS MADRE · CONSERVACIÓN 30 AÑOS",
    tagline: "Una pequeña gran reserva de salud para tu familia.",
    description: "Conservación de células madre del cordón umbilical en banco privado durante 30 años. El parto es el único momento para obtenerlas. Proceso indoloro y sin riesgo. Laboratorio para mayor calidad de las células.",
    features: [
      "Conservación por 30 años",
      "Laboratorio (mayor viabilidad)",
      "Proceso indoloro y sin riesgo",
      "Válido para hermanos compatibles"
    ],
    href: "/servicios-de-salud/maternidad/sanitas-cordon-umbilical/",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80&auto=format"
  },
  {
    title: "Test Genético Prenatal",
    label: "// TEST PRENATAL · DESDE SEMANA 10",
    tagline: "Detección precoz de anomalías sin riesgo para el bebé.",
    description: "Análisis fiable a partir de la semana 10 de embarazo mediante muestra de sangre materna. Detecta trisomías 21, 18 y 13 sin riesgo ni para la madre ni para el feto. La mejor alternativa a amniocentesis o biopsia corial.",
    features: [
      "Desde la semana 10 de embarazo",
      "Sin riesgo para madre ni bebé",
      "Detecta Síndrome de Down (T21)",
      "Solo requiere muestra de sangre"
    ],
    href: "/servicios-de-salud/maternidad/test-genetico-prenatal-no-invasivo/",
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=800&q=80&auto=format"
  }
]

export default function MaternidadIndexPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        type="MedicalWebPage"
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Maternidad", item: "https://segurosonline.net/servicios-de-salud/maternidad" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Maternidad" }
        ]}
        label="Primera consulta gratuita · Seas o no cliente · Descuentos especiales · Financiación disponible"
        h1={<>Servicios de Maternidad Sanitas.<br />Te acompañamos en cada etapa.</>}
        body="Desde el proceso de ser mamá hasta la protección del recién nacido. En Sanitas disponemos de servicios especializados para acompañarte en cada etapa: reproducción asistida cuando lo necesitas, conservación del cordón umbilical de tu bebé y detección precoz de anomalías mediante test genético prenatal. Disponibles para clientes y no clientes de Sanitas."
        badges={["Técnicas avanzadas", "Centros especializados", "Atención personalizada", "Consulta gratuita"]}
        trustItems={["Técnicas más avanzadas", "Centros especializados", "Confidencialidad total", "Atención personalizada"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <CategoryProductGrid 
        title="Nuestros servicios de maternidad."
        description="Soluciones médicas avanzadas para cuidar de ti y de tu futuro bebé con la máxima seguridad y confianza."
        products={maternidadProducts}
      />

      <ProductTextSection title="¿Eres o no cliente de Sanitas? No importa.">
        <p>
          Todos nuestros servicios de maternidad están disponibles tanto para clientes de Sanitas como para personas sin póliza.
        </p>
        <p>
          Si ya tienes póliza, disfrutarás de descuentos especiales sobre el precio privado (como el 8% en reproducción asistida) y condiciones de financiación preferentes.
        </p>
      </ProductTextSection>

      <ContactSection 
        label="MATERNIDAD"
        title="¿Hablamos?"
        description="Cuéntanos en qué momento estás y te orientamos hacia el servicio que mejor se adapta a tu situación."
      />

      <Footer />
    </main>
  )
}
