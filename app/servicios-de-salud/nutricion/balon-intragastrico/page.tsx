import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ThreeColumnFeatures, BluaSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Balón Intragástrico Sanitas Madrid — Tratamiento Sobrepeso sin Cirugía | Sanitas Ventas",
  description: "Balón intragástrico Sanitas: pierde peso sin cirugía con apoyo médico, nutricional y psicológico. Primera consulta gratuita, financiación al 0%, precio cerrado. Madrid. ☎ 91 726 46 33",
  path: "/servicios-de-salud/nutricion/balon-intragastrico/"
})

const pageFaqs = [
  { question: "¿Cuánto tiempo permanece el balón en el estómago?", answer: "El balón permanece colocado durante un máximo de 6 meses. Pasado ese tiempo se retira mediante endoscopia." },
  { question: "¿La colocación es dolorosa?", answer: "No. El procedimiento de colocación y retirada del balón es indoloro y sin ninguna molestia para el paciente." },
  { question: "¿Necesito ingresar en el hospital?", answer: "No. La colocación no requiere hospitalización. Es una técnica ambulatoria que se realiza en consulta o en el centro." },
  { question: "¿Necesito seguir una dieta especial mientras tengo el balón?", answer: "Sí. Durante el tratamiento, el equipo de especialistas te dará apoyo y asesoramiento completo para que te alimentes correctamente y adquieras hábitos saludables duraderos." },
  { question: "¿Necesito tener seguro Sanitas?", answer: "No. El servicio está disponible para clientes y no clientes. Los clientes de Sanitas tienen descuentos adicionales." },
]

export default function BalonIntragastricoPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Nutrición", item: "https://segurosonline.net/servicios-de-salud/nutricion" },
          { name: "Balón Intragástrico", item: "https://segurosonline.net/servicios-de-salud/nutricion/balon-intragastrico" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Nutrición", href: "/servicios-de-salud/nutricion" },
          { label: "Balón Intragástrico" }
        ]}
        label="Primera consulta gratuita · Sin cirugía · Financiación 0% · Precio cerrado"
        h1={<>Balón Intragástrico Sanitas.<br className="hidden lg:block"/> Pierde peso sin cirugía, con apoyo médico completo.</>}
        body="Si ya has probado con todo tipo de dietas y no has obtenido resultados, posiblemente necesitas la ayuda de otros sistemas. El balón intragástrico es un completo programa multidisciplinar en el que participan médicos, psicólogos y nutricionistas. Técnica mínimamente invasiva, sin cirugía, por vía endoscópica. Primera consulta gratuita. Disponible con o sin seguro Sanitas."
        badges={["Técnica ambulatoria", "Equipo multidisciplinar", "Resultados comprobados"]}
        trustItems={["Sin hospitalización", "Sin cicatrices", "Programa 6 meses", "Equipo multidisciplinar"]}
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "0", label: "Cicatrices externas" },
        { value: "6", label: "Meses de programa" },
        { value: "0%", label: "Interés de financiación" },
        { value: "100%", label: "Seguimiento médico" },
      ]} />

      <FeatureBlock 
        title="¿Cómo funciona el balón intragástrico?"
        description="El balón intragástrico se introduce vacío por la boca mediante endoscopia y se aloja en el estómago. Una vez colocado, se rellena con una solución salina estéril. El objetivo es crear una sensación de menor hambre y saciedad precoz, ya que el balón ocupa una gran parte del estómago."
        items={[
          "Sensación de saciedad temprana durante las comidas",
          "Mayor facilidad para introducir hábitos dietéticos saludables a largo plazo",
          "Procedimiento rápido y seguro mediante vía endoscópica",
          "Se retira a los 6 meses para continuar afianzando los resultados en la fase de consolidación"
        ]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&auto=format"
        badge="El Funcionamiento"
      />

      <FeatureBlock 
        title="¿Para quién está indicado el balón intragástrico?"
        description="El tratamiento con balón intragástrico puede responder a diferentes tipos de problemáticas de sobrepeso y obesidad."
        items={[
          "Personas que desean perder más de 12 kilos con dieta supervisada sin sufrir problema grave de obesidad.",
          "Personas que quieren mejorar su salud evitando complicaciones cardiacas y metabólicas propias del sobrepeso.",
          "Personas que han fracasado en el cumplimiento de dietas por sí solas.",
          "Quienes han recuperado rápidamente el peso perdido tras finalizar las dietas previas."
        ]}
        imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format"
        badge="Indicaciones"
        reverse
      />

      <ThreeColumnFeatures 
        title="El programa paso a paso."
        columns={[
          { title: "1. Valoración y colocación", body: "Primera cita gratuita para verificar si eres apto. La colocación se realiza sin hospitalización, mediante endoscopia por la boca y rellenando el balón en el estómago en un proceso sencillo, sin molestias." },
          { title: "2. Programa de 6 meses", body: "Seguimiento continuo por un equipo de médico, nutricionista y psicólogo que te apoya en la reeducación alimentaria y la adquisición de hábitos duraderos de forma eficaz." },
          { title: "3. Retirada y Consolidación", body: "A los 6 meses el balón se retira de la misma forma cómoda vía endoscopia. El programa continúa para mantener y afianzar todos los resultados y buenos hábitos conseguidos." }
        ]}
        bgColor="bg-[#002A54]"
      />

      <BluaSection 
        title="Ventajas exclusivas con Sanitas."
        description="Nos enorgullecemos de ofrecer un seguimiento inigualable."
        items={[
          "Primera consulta de valoración gratuita y sin compromiso.",
          "Financiación al 0% de interés a 1 año.",
          "Programa multidisciplinar completo (médico, nutricionista, psicólogo).",
          "Técnica sin cirugía, mínimamente invasiva, indolora.",
          "Disponible para clientes y NO clientes de Sanitas (descuentos especiales y adicionales para clientes)."
        ]} 
      />

      <FaqSection 
        title="Preguntas frecuentes sobre el balón intragástrico." 
        description="Resuelve tus principales inquietudes sobre la intervención, la duración y la efectividad." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Primera consulta gratuita y sin compromiso." 
        description="Cuéntanos tu situación y evaluamos contigo si el balón intragástrico es la opción más adecuada para ti." 
      />
      
      <Footer />
    </main>
  )
}
