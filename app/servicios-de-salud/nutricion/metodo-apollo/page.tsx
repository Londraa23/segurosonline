import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ThreeColumnFeatures, BluaSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Método Apollo Sanitas Madrid — Reducción de Estómago Endoscópica | Sanitas Ventas",
  description: "Método Apollo Sanitas: reducción del 60–70% del estómago por endoscopia para obesidad severa. Seguimiento 24 meses. Primera consulta gratuita. Financiación 0%. Madrid. ☎ 91 726 46 33",
  path: "/servicios-de-salud/nutricion/metodo-apollo/"
})

const pageFaqs = [
  { question: "¿En qué se diferencia el método Apollo del método POSE?", answer: "Ambos son técnicas endoscópicas sin incisiones, pero el método Apollo está indicado para casos de obesidad más severa (IMC 30–40) y consigue una reducción del estómago del 60–70%, mayor que la del método POSE. El Apollo incluye seguimiento de 24 meses y es reversible; el POSE está indicado para obesidad de menor grado." },
  { question: "¿Es reversible?", answer: "Sí. El método Apollo es un procedimiento reversible en caso de que se estime necesario." },
  { question: "¿Cuánto tarda la recuperación?", answer: "En la mayoría de casos el paciente puede incorporarse a su rutina diaria en 24 horas." },
  { question: "¿La financiación al 0% es solo para clientes Sanitas?", answer: "La financiación al 0% está disponible para clientes de Sanitas. Para no clientes también existen condiciones especiales de financiación. Consúltanos." }
]

export default function MetodoApolloPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Servicios de Salud", item: "https://segurosonline.net/servicios-de-salud" },
          { name: "Nutrición", item: "https://segurosonline.net/servicios-de-salud/nutricion" },
          { name: "Método Apollo", item: "https://segurosonline.net/servicios-de-salud/nutricion/metodo-apollo" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Nutrición", href: "/servicios-de-salud/nutricion" },
          { label: "Método Apollo" }
        ]}
        label="Primera consulta gratuita · Reducción 60–70% estómago · Seguimiento 24 meses · Financiación 0%"
        h1={<>Método Apollo Sanitas.<br className="hidden lg:block"/> Reducción de estómago endoscópica para una pérdida de peso definitiva.</>}
        body="El método Apollo es un tratamiento multidisciplinar que consiste en la reducción del estómago por vía endoscópica en forma de manga, reduciendo su capacidad entre un 60 y un 70%. Tratamiento ambulatorio, sin cirugía ni cicatrices externas, con seguimiento integral durante 24 meses. Indicado para obesidad severa. Primera consulta gratuita. Financiación al 0% para clientes Sanitas."
        badges={["Sin cirugía abierta", "Reversible", "Altamente efectivo"]}
        trustItems={["Sin cirugía", "Sin cicatrices", "Ambulatorio", "IMC 30–40"]}
        imageSrc="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "0", label: "Cicatrices externas" },
        { value: "70%", label: "Reducción estómago" },
        { value: "24", label: "Meses de seguimiento" },
        { value: "24h", label: "Para retomar actividad" },
      ]} />

      <FeatureBlock 
        title="¿En qué consiste el método Apollo?"
        description="El procedimiento se realiza por vía endoscópica, bajo anestesia general, de forma ambulatoria y con corta estancia hospitalaria."
        items={[
          "Suturas en la cavidad interna del estómago para limitar su capacidad.",
          "Reducción de entre el 60 y el 70% del volumen gástrico, conformando una forma de manga.",
          "Genera sensación de saciedad con la ingesta de poca cantidad de alimentos.",
          "Periodo de recuperación menor que en una cirugía bariátrica laparoscópica (incorporación laboral en 24h)."
        ]}
        imageSrc="https://images.unsplash.com/photo-1628348070830-246f140c8b1d?w=800&q=80&auto=format"
        badge="El Funcionamiento"
      />

      <FeatureBlock 
        title="¿Para quién está indicado el método Apollo?"
        description="Es una alternativa menos invasiva a la cirugía bariátrica restrictiva, indicada para casos de obesidad severa donde el balón intragástrico o el método POSE no son suficientes."
        items={[
          "Personas con obesidad desde grado I hasta obesidad mórbida.",
          "Pacientes con Índice de Masa Corporal (IMC) entre 30 y 40.",
          "Personas que necesiten perder entre 15 y 35 kg aproximadamente.",
          "Quienes hayan fracasado en otros tratamientos no quirúrgicos de adelgazamiento de manera reiterada."
        ]}
        imageSrc="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=800&q=80&auto=format"
        badge="Indicaciones"
        reverse
      />

      <ThreeColumnFeatures 
        title="Seguimiento multidisciplinar de 24 meses."
        columns={[
          { title: "Seguimiento nutricional y digestivo", body: "Reeducación alimentaria integral y progresiva para conseguir una pérdida de peso constante y, lo más importante, mantener el peso deseado a largo plazo con nuevos hábitos." },
          { title: "Seguimiento psicológico", body: "Acompañamiento por profesionales expertos en los cambios físicos y psicológicos que acompañan a este proceso transformador, asegurando el bienestar mental." },
          { title: "Seguimiento deportivo", body: "Plan de actividad física totalmente adaptado a tu condición corporal inicial y a tu positiva evolución a lo largo del periodo de los dos años, para maximizar los resultados." }
        ]}
        bgColor="bg-[#002A54]"
      />

      <BluaSection 
        title="Ventajas exclusivas con Sanitas."
        description="Tu tranquilidad es nuestra prioridad. Te ofrecemos las mejores condiciones para tu tratamiento."
        items={[
          "Método sustitutivo a la cirugía bariátrica restrictiva para casos de obesidad severa.",
          "Estudio previo completo para garantizar de forma médica la idoneidad del paciente.",
          "Técnica ambulatoria de corta estancia (sin cicatrices, sin cirugía laparoscópica).",
          "Procedimiento totalmente reversible y repetible si se aconsejase médicamente.",
          "Primera consulta gratuita y financiación al 0% sin intereses para clientes Sanitas.",
          "Precio cerrado cerrado con consultas, curas y reintervenciones incluidas hasta el alta."
        ]} 
      />

      <FaqSection 
        title="Preguntas frecuentes sobre el método Apollo." 
        description="Encuentra fácilmente las respuestas a las comparativas y dudas más comunes de nuestros pacientes." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Recupera tu peso y tu calidad de vida." 
        description="Primera consulta gratuita. Te explicamos si el método Apollo es el tratamiento más adecuado para ti." 
      />
      
      <Footer />
    </main>
  )
}
