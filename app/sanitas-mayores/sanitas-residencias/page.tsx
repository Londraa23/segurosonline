import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, BluaSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"
import { ShieldCheck, Activity, Utensils, HeartHandshake, Smile, CalendarDays, Bed, CalendarIcon, Smartphone } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Residencias de Mayores Sanitas — Estancias Permanentes y Temporales | Sanitas Ventas",
  description: "Residencias Sanitas Mayores en España: atención médica 24h, especialistas en Alzheimer, centros libres de sujeciones y app para familias. 47 residencias. ☎ 91 726 46 33",
  path: "/sanitas-mayores/sanitas-residencias/"
})

const pageFaqs = [
  { question: "¿Puedo ingresar sin seguro Sanitas?", answer: "Sí. Las residencias Sanitas están disponibles para cualquier persona, independientemente de si tiene o no un seguro con Sanitas." },
  { question: "¿Están especializados en Alzheimer?", answer: "Sí. Sanitas Mayores es especialista en el cuidado de personas con Alzheimer y demencia, con áreas específicas en cada centro y el Centro CAIDE para la atención integral al deterioro cognitivo." },
  { question: "¿Cómo puedo visitar un centro?", answer: "Puedes contactarnos y te orientamos sobre las residencias más cercanas a tu localidad y cómo organizar una visita sin compromiso." },
  { question: "¿Se adapta la alimentación a necesidades específicas?", answer: "Sí. Sanitas adapta las comidas a necesidades médicas, culturales y personales. Más de 600 recetas adaptadas, con texturización para quienes tienen dificultades de deglución." },
  { question: "¿Tienen estancias cortas por operación o convalecencia?", answer: "Sí. Las estancias temporales están disponibles para recuperaciones postoperatorias, rehabilitación o descanso del cuidador familiar." }
]

export default function ResidenciasMayoresPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Sanitas Mayores", item: "https://segurosonline.net/sanitas-mayores" },
          { name: "Sanitas Residencias", item: "https://segurosonline.net/sanitas-mayores/sanitas-residencias" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sanitas Mayores", href: "/sanitas-mayores" },
          { label: "Sanitas Residencias" }
        ]}
        label="47 residencias en España · Atención 24h · Especialistas en Alzheimer · ISO 9001"
        h1={<>Sanitas Residencias.<br className="hidden lg:block"/> Un hogar con atención profesional. Las 24 horas.</>}
        body="En Sanitas Residencias atendemos y cuidamos a personas mayores para mejorar su calidad de vida y proporcionarles toda la ayuda que necesitan. Más de 47 residencias en toda España con atención médica propia, equipo multidisciplinar, actividades adaptadas y tecnología al servicio del bienestar. Disponible para estancias permanentes y temporales, tengas o no seguro."
        badges={["Tengas o no seguro Sanitas", "Estancias temporales y permanentes", "Centros integrales"]}
        trustItems={["47 residencias", "Equipo médico propio", "Centros libres de sujeciones", "App para familias"]}
        imageSrc="https://images.unsplash.com/photo-1576766125468-b8004f21ebd9?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "47", label: "Residencias nacionales" },
        { value: "24/7", label: "Equipo médico y enfermería" },
        { value: "100%", label: "Libres de sujeciones" },
        { value: "ISO 9001", label: "Certificación de calidad" },
      ]} />

      <FeatureBlock 
        title="¿Qué ofrecen las residencias Sanitas?"
        description="En Sanitas Residencias nos esforzamos a diario en conocer bien los hábitos y necesidades de cada residente para poder darles una atención de calidad y hacerles sentir verdaderamente como en casa."
        items={[
          "Trato personalizado: ayudamos a los residentes a decorar su propia habitación.",
          "Enfoque y calidez humana centrados 100% en la persona.",
          "Combinación de vanguardia tecnológica en el cuidado y la rehabilitación.",
          "Garantización de una atención cercana, eficaz y completamente digna."
        ]}
        imageSrc="https://images.unsplash.com/photo-1517409217036-74fc2249df9c?w=800&q=80&auto=format"
        badge="Nuestra Filosofía"
      />

      {/* Servicios Incluidos custom grid */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              Servicios incluidos en las residencias.
            </h2>
            <p className="text-lg text-gray-600">
              Instalaciones punteras y el cuidado de los mejores profesionales.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="text-[#0091DA] w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Atención médica y sanitaria</h3>
                <p className="text-gray-600 flex-grow">Cada centro cuenta con equipo médico y de enfermería propio que realiza seguimiento diario y adapta tratamientos. Atención las 24 horas, control de medicación y enfermedades crónicas los 365 días del año.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="text-[#0091DA] w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Rehabilitación física y cognitiva</h3>
                <p className="text-gray-600 flex-grow">Programas de rehabilitación integral con las terapias más vanguardistas y equipos expertos orientados a la rápida recuperación tras intervenciones y al mantenimiento general de las capacidades.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Utensils className="text-[#0091DA] w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Nutrición adaptada</h3>
                <p className="text-gray-600 flex-grow">Más de 600 recetas con productos frescos y de temporada. Texturización de alimentos para residentes con dificultades de deglución y planes de nutrición clínica completamente individualizados.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Smile className="text-[#0091DA] w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Actividades y bienestar</h3>
                <p className="text-gray-600 flex-grow">Excursiones, eventos con familias, estimulación cognitiva, actividad física adaptada y terapias de bienestar para fomentar un envejecimiento activo y plenamente feliz.</p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <HeartHandshake className="text-[#0091DA] w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Apoyo psicológico y emocional</h3>
                <p className="text-gray-600 flex-grow">Psicólogos colegiados en plantilla para el acompañamiento continuo de residentes y familias, así como comité de ética asistencial externo acreditado para las decisiones médicas más delicadas.</p>
              </div>
            </Reveal>
            
            <Reveal delay={0.6}>
               <div className="bg-[#002A54] rounded-3xl p-8 shadow-xl shadow-[#002A54]/20 h-full flex flex-col text-white">
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="text-[#0091DA] w-7 h-7 brightness-200" />
                </div>
                <h3 className="text-xl font-bold mb-3">App Sanitas Mayores</h3>
                <p className="text-white/80 flex-grow">Para que la distancia no se note: accede al estado de tu familiar en tiempo real, su pauta de medicación, y comunícate directamente con el equipo técnico y asistencial presencial.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureBlock 
        title="Especialistas en Alzheimer y centros libres de sujeciones."
        description="Sanitas Mayores adapta rigurosamente los cuidados a todos los niveles de dependencia. No contemplamos el uso de sujeciones como alternativa terapéutica."
        items={[
          "Más de 2.000 personas con demencia atendidas en España mediante el Centro de atención integral al deterioro (CAIDE).",
          "Áreas específicas y diferenciadas para los distintos estadios cognitivos.",
          "Fomentamos un estilo de vida activo recuperando las funcionalidades perdidas.",
          "Residencias acreditadas como «Centro Libre de Sujeciones» por CEOMA o Norma Libera-Ger."
        ]}
        imageSrc="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80&auto=format"
        badge="Dignidad y Cuidado"
        reverse
      />

       <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              Tipos de estancias flexibles.
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA]">
                        <CalendarIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#002A54]">Estancias permanentes</h3>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">Para residentes que necesitan un abanico de atención y cuidados continuados a largo plazo o de manera indefinida, con toda la atención médica, terapias, actividades y apoyo emocional incluidos.</p>
              </div>
            </Reveal>
             <Reveal delay={0.2}>
              <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#002A54]/10 flex items-center justify-center text-[#002A54]">
                        <CalendarDays className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#002A54]">Estancias temporales</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">Conoce de antemano nuestros cuidados profesionales durante el tiempo que necesites, sin ingreso fijo y con toda la flexibilidad. Ideal para:</p>
                <ul className="text-gray-600 list-disc pl-5 space-y-2 flex-grow">
                    <li>Recuperaciones postoperatorias urgentes</li>
                    <li>Rehabilitación física guiada</li>
                    <li>Periodos de descanso vital para el familiar cuidador (Respiro familiar)</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <BluaSection 
        title="Tipos de habitaciones."
        description="Nuestras habitaciones, tanto individuales como dobles compartidas, se adaptan a las necesidades del mayor."
        items={[
           "Habitación individual: Cama articulada, armario dotado, mesita y baño privado.",
           "Habitación individual: Sistema de aviso telemático al sanitario y posibilidad de decorarse libremente.",
           "Habitación doble: Dos camas articuladas, armarios individuales, mesitas y amplio baño privado compartido.",
           "Ambas incluyen limpieza, mantenimiento constante y lencería."
        ]} 
      />

      <FaqSection 
        title="Preguntas frecuentes sobre las residencias Sanitas." 
        description="Estas son algunas de las cuestiones más debatidas antes de tomar la decisión familiar de ingresar a un ser querido." 
        faqs={pageFaqs} 
      />
      
      <ContactSection 
        label="¿HABLAMOS?" 
        title="Estamos aquí para ayudarte." 
        description="Cuéntanos la situación de tu familiar y te orientamos sobre el centro y tipo de estancia más adecuados." 
      />
      
      <Footer />
    </main>
  )
}
