import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { CheckCircle2 } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Servicios de Nutrición y Pérdida de Peso Sanitas Madrid | Sanitas Ventas",
  description: "Tratamientos para la obesidad y el sobrepeso con Sanitas: balón intragástrico, método POSE, método Apollo y cirugía bariátrica. Primera consulta gratuita. Madrid. ☎ 91 726 46 33",
  path: "/servicios-de-salud/nutricion/"
})

const tratamientos: ProductCardData[] = [
  {
    title: "Balón Intragástrico",
    label: "SIN CIRUGÍA · SOBREPESO",
    tagline: "Pierde peso sin cirugía, con apoyo médico completo.",
    description: "Globo de silicona que se introduce en el estómago vía endoscópica para crear sensación de saciedad. Programa multidisciplinar de 6 meses con médico, nutricionista y psicólogo. Sin hospitalización, sin cicatrices.",
    features: ["Sin hospitalización", "Sin cicatrices", "Programa de 6 meses", "Equipo multidisciplinar"],
    href: "/servicios-de-salud/nutricion/balon-intragastrico/",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80&auto=format",
    highlighted: true
  },
  {
    title: "Método POSE",
    label: "SIN INCISIONES · OBESIDAD GRADO I–II",
    tagline: "Reducción de estómago sin incisiones ni cicatrices.",
    description: "Reducción del volumen del estómago por vía endoscópica, sin incisiones externas. La opción menos invasiva para tratar el sobrepeso y la obesidad. Técnica ambulatoria. Primera consulta gratuita.",
    features: ["Reducción sin incisiones", "Sin cicatrices", "Técnica ambulatoria", "Menos invasivo"],
    href: "/servicios-de-salud/nutricion/metodo-pose/",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&auto=format"
  },
  {
    title: "Método Apollo",
    label: "OBESIDAD SEVERA · IMC 30–40",
    tagline: "Reducción de estómago endoscópica con seguimiento 24 meses.",
    description: "Reducción del 60–70% de la capacidad del estómago mediante suturas endoscópicas. Tratamiento ambulatorio, sin cirugía ni cicatrices, con seguimiento multidisciplinar completo durante 2 años.",
    features: ["Reducción 60-70% del estómago", "Seguimiento 24 meses", "Sin cirugía abierta", "Ambulatorio"],
    href: "/servicios-de-salud/nutricion/metodo-apollo/",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80&auto=format"
  },
  {
    title: "Cirugía Bariátrica",
    label: "OBESIDAD MÓRBIDA · LAPAROSCOPIA",
    tagline: "Pérdida de peso permanente para casos de obesidad grave.",
    description: "Conjunto de procedimientos quirúrgicos para lograr pérdidas de peso mantenidas: banda gástrica, by-pass gástrico y otras técnicas laparoscópicas. Asistencia médica, psicológica y nutricional. Primera consulta gratuita.",
    features: ["Pérdida de peso permanente", "Técnicas laparoscópicas seguras", "Banda y By-pass gástrico", "Asistencia integral incl."],
    href: "/servicios-de-salud/nutricion/cirugia-bariatrica/",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format"
  }
]

export default function NutricionIndexPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios de Salud", href: "/servicios-de-salud" },
          { label: "Nutrición" }
        ]}
        label="Primera consulta gratuita · Sin necesidad de póliza · Precios especiales clientes · Financiación disponible"
        h1={<>Servicios de Nutrición Sanitas.<br className="hidden lg:block"/> Descubre lo que mejor te sienta. Reduce peso.</>}
        body="Si las dietas no han dado resultado, existen tratamientos médicos eficaces para el sobrepeso y la obesidad. En Sanitas disponemos de varias soluciones adaptadas a cada grado de obesidad: desde técnicas sin cirugía hasta procedimientos quirúrgicos avanzados. Siempre con un equipo multidisciplinar de médicos, psicólogos y nutricionistas a tu lado. Primera consulta gratuita. Disponible sin seguro Sanitas."
        badges={["Primera consulta gratuita", "Tratamientos sin cirugía", "Financiación disponible"]}
        trustItems={["Técnicas sin cirugía", "Equipo multidisciplinar", "Seguimiento completo", "Precio cerrado"]}
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80&auto=format"
      />

      <CategoryProductGrid 
        title="Nuestros tratamientos para el peso."
        description="Elegir la técnica adecuada es fundamental para conseguir el éxito a largo plazo. Todos nuestros programas incluyen asesoramiento completo con especialistas."
        products={tratamientos}
      />

      {/* Comparative Profiles Section */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              ¿Cuál es el tratamiento adecuado para mí?
            </h2>
            <p className="text-lg text-gray-600">
              Cada tipo de paciente y grado de obesidad requiere una solución distinta. Aquí te mostramos una guía general.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#0091DA] font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Sobrepeso moderado</h3>
                <p className="text-gray-600 mb-6 flex-grow">Quiere perder más de 12 kg, ha intentado dietas sin éxito a largo plazo.</p>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mt-auto">
                  <span className="block text-sm text-[#0091DA] font-bold uppercase tracking-wider mb-1">Recomendado</span>
                  <div className="font-bold text-lg text-[#002A54] mb-2">Balón Intragástrico</div>
                  <p className="text-sm text-gray-600">Por qué: Técnica sin cirugía, mínimamente invasiva, con apoyo nutricional y psicológico durante 6 meses.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 h-full flex flex-col">
                <div className="bg-[#0091DA]/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#0091DA] font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Obesidad grado I o II</h3>
                <p className="text-gray-600 mb-6 flex-grow">IMC entre 28 y 35, busca una alternativa permanente a las dietas.</p>
                <div className="bg-[#0091DA]/5 rounded-2xl p-5 border border-[#0091DA]/20 mt-auto">
                  <span className="block text-sm text-[#0091DA] font-bold uppercase tracking-wider mb-1">Recomendado</span>
                  <div className="font-bold text-lg text-[#002A54] mb-2">Método POSE</div>
                  <p className="text-sm text-gray-600">Por qué: La opción menos invasiva para reducir el estómago sin incisiones externas, de forma ambulatoria.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white rounded-3xl p-8 border-2 border-[#0091DA] shadow-xl shadow-[#0091DA]/10 h-full flex flex-col relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0091DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Destacado</span>
                <div className="bg-[#0091DA]/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-[#0091DA] font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#002A54] mb-3">Obesidad severa</h3>
                <p className="text-gray-600 mb-6 flex-grow">IMC entre 30 y 40, necesita una pérdida de peso importante sin abrir el abdomen.</p>
                <div className="bg-[#0091DA]/10 rounded-2xl p-5 border border-[#0091DA]/30 mt-auto">
                  <span className="block text-sm text-[#0091DA] font-bold uppercase tracking-wider mb-1">Recomendado</span>
                  <div className="font-bold text-lg text-[#002A54] mb-2">Método Apollo</div>
                  <p className="text-sm text-gray-600">Por qué: Reducción endoscópica del 60–70% del estómago con seguimiento multidisciplinar de 2 años.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-[#002A54] rounded-3xl p-8 shadow-xl shadow-[#002A54]/20 h-full flex flex-col">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Obesidad mórbida</h3>
                <p className="text-white/80 mb-6 flex-grow">Cuando otras técnicas han fallado y existe riesgo grave para la salud.</p>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mt-auto">
                  <span className="block text-sm text-yellow-400 font-bold uppercase tracking-wider mb-1">Recomendado</span>
                  <div className="font-bold text-lg text-white mb-2">Cirugía Bariátrica</div>
                  <p className="text-sm text-white/80">Por qué: Pérdida de peso permanente y duradera con técnicas laparoscópicas avanzadas y de alta seguridad.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Common features list */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-[#002A54] rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden relative">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            
            <div className="max-w-3xl mb-12">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Lo que todos nuestros tratamientos tienen en común.
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Primera consulta de valoración gratuita y sin compromiso",
                "Estudio previo completo para verificar que el paciente es apto antes de iniciar cualquier tratamiento",
                "Equipo multidisciplinar: médicos, psicólogos y nutricionistas a lo largo de todo el proceso",
                "Descuentos especiales sobre precio privado para clientes Sanitas",
                "Condiciones especiales de financiación",
                "Precio cerrado — sin sorpresas durante el tratamiento",
                "Disponible para clientes y no clientes de Sanitas"
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

      <ContactSection 
        label="¿HABLAMOS?"
        title="¿Hablamos?"
        description="Cuéntanos tu situación y te orientamos hacia el tratamiento más adecuado para tu caso. Sin compromiso."
      />
      
      <Footer />
    </main>
  )
}
