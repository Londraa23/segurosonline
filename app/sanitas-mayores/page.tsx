import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, ShieldPlus } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"
import Link from "next/link"

export const metadata = generateMetadata({
  title: "Sanitas Mayores — Residencias, Centros de Día y Cuidados para Mayores | Sanitas Ventas",
  description: "Sanitas Mayores: residencias, centros de día, cuidados a domicilio y rehabilitación para personas mayores en España. Tengas o no seguro Sanitas. Madrid. ☎ 91 726 46 33",
  path: "/sanitas-mayores/"
})

const serviciosMayores: ProductCardData[] = [
  {
    title: "Residencias Sanitas Mayores",
    label: "ESTANCIAS PERMANENTES Y TEMPORALES",
    tagline: "Un hogar con atención profesional las 24 horas.",
    description: "Estancias indefinidas o temporales con atención médica, enfermería, fisioterapia, nutrición y actividades adaptadas. Especialistas en Alzheimer y deterioro cognitivo. Centros libres de sujeciones.",
    features: ["Especialistas en Alzheimer", "Libres de sujeciones", "App para familias", "Atención 24h"],
    href: "/sanitas-mayores/sanitas-residencias/",
    image: "https://images.unsplash.com/photo-1576766125468-b8004f21ebd9?w=800&q=80&auto=format",
    highlighted: true
  },
  {
    title: "Centros de Día Sanitas Mayores",
    label: "HORARIOS FLEXIBLES · ACTIVIDADES",
    tagline: "Actividades, terapias y compañía durante el día.",
    description: "Programa de actividades adaptadas a la condición física y cognitiva, horarios flexibles, transporte adaptado, control nutricional y de medicación, y programa de terapias de rehabilitación.",
    features: ["Horarios flexibles", "Transporte adaptado", "Terapias diarias", "Control nutricional"],
    href: "/sanitas-mayores/centros-de-dia/",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format"
  },
  {
    title: "Cuidados a Domicilio",
    label: "EN TU PROPIO HOGAR",
    tagline: "Atención profesional sin salir de casa.",
    description: "Servicios de selección de cuidador a domicilio, rehabilitación en el hogar y servicios asistenciales personalizados. Para mayores que prefieren continuar en su entorno familiar con apoyo profesional.",
    features: ["Selección de cuidador", "Rehabilitación en el hogar", "Atención personalizada", "Cuidado en entorno familiar"],
    href: "/sanitas-mayores/cuidados-a-domicilio/",
    image: "https://images.unsplash.com/photo-1581579186913-46eaacd70dd5?w=800&q=80&auto=format"
  },
  {
    title: "Rehabilitación para Mayores",
    label: "RECUPERACIÓN · MANTENIMIENTO",
    tagline: "Los mejores expertos para tu recuperación.",
    description: "Rehabilitación física y cognitiva con las terapias más vanguardistas y equipos multidisciplinares expertos en la atención a personas mayores.",
    features: ["Terapias vanguardistas", "Rehabilitación física y mental", "Trato especializado senior", "Equipos multidisciplinares"],
    href: "/sanitas-mayores/rehabilitacion/",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format"
  }
]

const pageFaqs = [
  { question: "¿Puedo acceder a los servicios de Sanitas Mayores sin seguro?", answer: "Sí. Todos los servicios de Sanitas Mayores (residencias, centros de día, cuidados a domicilio) están disponibles independientemente de si tienes o no un seguro Sanitas." },
  { question: "¿Hacen estancias temporales en las residencias?", answer: "Sí. Sanitas Mayores ofrece estancias tanto permanentes como temporales: recuperaciones postoperatorias, rehabilitación, o periodos en los que el cuidador necesita un descanso." },
  { question: "¿Están especializados en Alzheimer?", answer: "Sí. Sanitas Mayores es especialista en el cuidado de personas con demencia y Alzheimer, con centros con áreas específicas para distintos niveles de deterioro cognitivo y el Centro de atención integral al deterioro (CAIDE)." },
  { question: "¿Cómo pueden las familias seguir la evolución del familiar?", answer: "A través de la App Sanitas Mayores, disponible en Google Play y App Store. Permite acceder al estado del familiar, pauta de medicación, menú y comunicarse directamente con el equipo técnico del centro." }
]

export default function SanitasMayoresIndexPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Sanitas Mayores", item: "https://segurosonline.net/sanitas-mayores" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sanitas Mayores" }
        ]}
        label="47 residencias en España · 25 centros de día · Cuidados a domicilio · Tengas o no seguro"
        h1={<>Sanitas Mayores.<br className="hidden lg:block"/> Cuidado experto para quienes más lo merecen.</>}
        body="En Sanitas Mayores atendemos y cuidamos a personas mayores para mejorar su calidad de vida y proporcionarles toda la ayuda que necesitan. Residencias, centros de día, cuidados a domicilio y centros de rehabilitación avanzada en toda España. Con o sin seguro Sanitas."
        badges={["Con o sin seguro", "Especialistas senior", "Alcance nacional"]}
        trustItems={["47 residencias", "25 centros de día", "Atención 24h", "Equipo multidisciplinar"]}
        imageSrc="https://images.unsplash.com/photo-1517409217036-74fc2249df9c?w=1600&q=80&auto=format"
      />

      <CategoryProductGrid 
        title="Nuestros servicios para personas mayores."
        description="Adaptados a las circunstancias y necesidades particulares de cada persona para asegurar el mayor bienestar y la máxima tranquilidad de los suyos."
        products={serviciosMayores}
      />

      {/* Por qué elegir Sanitas Mayores */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-[#002A54] rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
            <div className="max-w-3xl mb-12">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  ¿Por qué elegir Sanitas Mayores?
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Más de 47 residencias y 25 centros de día en toda España",
                "Especialistas en Alzheimer y deterioro cognitivo: más de 2.000 personas atendidas",
                "Centros Libres de Sujeciones acreditados por CEOMA y Norma Libera-Ger",
                "Sistema de Gestión de Atención Integral certificado ISO 9001",
                "App Sanitas Mayores: permite conectar a las familias en tiempo real",
                "Equipo permanente: médicos, psicólogos, enfermeros y fisioterapeutas en cada centro",
                "Estancias temporales y permanentes disponibles sin largas listas de espera"
              ].map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#0091DA] shrink-0 mt-0.5" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-selling Seguro Médico Mayores */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="bg-gradient-to-br from-white to-[#0091DA]/5 rounded-3xl p-8 lg:p-12 border-2 border-[#0091DA]/20 shadow-xl flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldPlus className="w-8 h-8 text-[#0091DA]" />
                  <span className="text-sm font-bold tracking-wider text-[#0091DA] uppercase">SEGUROS MÉDICOS</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#002A54] mb-4">
                  Para el seguro médico de tus mayores.
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  Si además buscas un seguro médico específico para mayores de 60 años, en Sanitas Ventas también te asesoramos sobre <strong>Sanitas Único</strong>, el seguro médico diseñado para mayores sin cuestionario de salud, sin límite de edad y con descuentos en residencias y centros de día Sanitas.
                </p>
                <Link
                  href="/seguros-medicos-para-particulares/sanitas-unico/"
                  className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-[#007AB8] hover:shadow-xl w-full sm:w-auto"
                >
                  Ver Seguro Sanitas Único
                </Link>
              </div>
              <div className="hidden lg:block w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl shrink-0">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format" alt="Mayor sonriendo" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection 
        title="Preguntas frecuentes sobre Sanitas Mayores." 
        description="Aclaramos tus dudas para que sientas la máxima confianza a la hora de dejarlos en las mejores manos." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Te ayudamos a cuidarlos." 
        description="Te orientamos sobre el servicio más adecuado para la situación de tu familiar. Sin compromiso." 
      />
      
      <Footer />
    </main>
  )
}
