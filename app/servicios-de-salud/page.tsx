import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Servicios de Salud Sanitas: Especialidades",
  description: "Servicios de salud Sanitas en España: cirugía ocular, maternidad, reproducción asistida, tratamientos para la obesidad y más. Primera consulta gratuita. ☎ 624 21 73 23",
  path: "/servicios-de-salud/"
})

const faqData = [
  { 
    question: "¿Necesito tener seguro Sanitas para acceder?", 
    answer: "No. Todos los servicios están disponibles para clientes y no clientes. Los clientes tienen descuentos adicionales." 
  },
  { 
    question: "¿La primera consulta es realmente gratuita?", 
    answer: "Sí, completamente gratuita y sin ningún compromiso. Si tras la consulta decides no continuar, no hay ningún coste." 
  },
  { 
    question: "¿Puedo financiar el tratamiento?", 
    answer: "Sí. Ofrecemos condiciones especiales de financiación en todos los servicios. Para clientes de Sanitas existe la opción de financiación al 0% de interés en determinados tratamientos." 
  },
  { 
    question: "¿Cómo solicito una primera consulta?", 
    answer: "A través de SegurosOnline. Llámanos o déjanos tu número y te gestionamos la primera consulta gratuita sin ningún trámite." 
  }
]

export default function ServiciosSaludPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud" }
        ]}
        h1={<>Especialidades de Salud Sanitas.<br />Soluciones Avanzadas en Cirugía y Nutrición.</>}
        body="Además de los seguros médicos, Sanitas ofrece una gama completa de servicios de salud especializados disponibles para clientes y no clientes. Cirugía ocular, maternidad, reproducción asistida, tratamientos para el sobrepeso y más. Siempre con primera consulta gratuita y precios especiales para asegurados."
        badges={["Primera consulta gratuita", "Seas o no cliente", "Precios especiales", "Financiación disponible"]}
        trustItems={["Técnicas más avanzadas", "Equipos especializados", "Precio cerrado", "Disponible sin seguro"]}
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format"
      />

      <WhiteCardGrid
        title="Nuestros servicios especializados."
        subtitle="Cada servicio cuenta con un equipo de especialistas dedicados, tecnología de última generación y acompañamiento completo durante todo el proceso."
        cards={[
          {
            icon: "star", // Actually let's use an eye icon if possible, but fallback to star/shield
            title: "Servicios de Salud Visual",
            description: "Cirugía láser ocular para miopía, astigmatismo e hipermetropía, operación de cataratas con láser de femtosegundo y tratamientos para la presbicia (vista cansada). En solo 20 minutos, sin anestesia general y con recuperación inmediata.",
            href: "/servicios-de-salud/vista/"
          },
          {
            icon: "heart",
            title: "Servicios de Maternidad",
            description: "Reproducción asistida (FIV, inseminación, ICSI, ovodonación), conservación de células madre del cordón umbilical durante 30 años y test genético prenatal no invasivo desde la semana 10. Primera consulta gratuita en reproducción asistida.",
            href: "/servicios-de-salud/maternidad/"
          },
          {
            icon: "trending",
            title: "Servicios de Nutrición",
            description: "Balón intragástrico, método POSE, método Apollo y cirugía bariátrica. Soluciones para cada grado de sobrepeso u obesidad, con equipo multidisciplinar de médicos, psicólogos y nutricionistas. Primera consulta gratuita y financiación al 0%.",
            href: "/servicios-de-salud/nutricion/"
          }
        ]}
      />

      <ProductFeatureSection title="¿Eres o no cliente de Sanitas? No importa.">
        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Todos nuestros servicios de salud están disponibles tanto para clientes de Sanitas como para personas sin póliza. Los clientes disfrutan de descuentos especiales sobre el precio privado y condiciones preferentes de financiación. Si no tienes seguro y te interesan los servicios, también podemos asesorarte sobre qué póliza se adapta mejor a ti.
          </p>
        </Reveal>
      </ProductFeatureSection>

      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002A54] mb-6">Lo que todos los servicios tienen en común.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Primera consulta gratuita</h3>
                <p className="text-gray-600 leading-relaxed">En todos los servicios, la consulta de valoración previa es gratuita y sin ningún compromiso. Nos conocemos, estudiamos tu caso y te explicamos si eres candidato.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Precio cerrado</h3>
                <p className="text-gray-600 leading-relaxed">Todos los servicios tienen precio cerrado: sabes exactamente cuánto cuesta antes de empezar, sin sorpresas durante el tratamiento.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Equipo especializado</h3>
                <p className="text-gray-600 leading-relaxed">Los mejores profesionales en cada área, en centros con tecnología de última generación y con la experiencia de respaldo de Sanitas.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Financiación disponible</h3>
                <p className="text-gray-600 leading-relaxed">Condiciones especiales de financiación para todos los servicios, con opciones al 0% de interés para clientes de Sanitas. Tu salud, sin que el presupuesto sea un freno.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection 
        title="Preguntas sobre los Servicios de Salud"
        description="Respuestas a las dudas más habituales sobre nuestras especialidades médicas."
        faqs={faqData}
      />

      <ContactSection 
        label="¿HABLAMOS?"
        title="¿Hablamos?"
        description="Cuéntanos qué servicio te interesa y gestionamos tu primera consulta gratuita sin compromiso."
      />
      <Footer />
    </main>
  )
}
