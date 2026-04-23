import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Users, TrendingDown, Landmark, Workflow } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Seguros Médicos para Empresas Sanitas — Pymes y Grandes Cuentas",
  description: "Seguros de salud Sanitas para empresas y pymes. Cuida a tu equipo, mejora la productividad y aprovecha deducciones fiscales del 100%.",
  path: "/seguros-medicos-para-empresas"
})

const productosEmpresas: ProductCardData[] = [
  {
    title: "Sanitas Pymes Digital",
    label: "Pymes · El más innovador",
    badge: "MÁS COMPLETO PARA PYMES",
    tagline: "Nuestro seguro de salud para pymes más innovador.",
    description: "El seguro más completo para pequeñas y medianas empresas. Cobertura sanitaria total con hospitalización, Dental 21 incluido, accidentes de tráfico y servicios digitales exclusivos.",
    features: [
      "Medicina primaria y todas las especialidades",
      "Hospitalización e intervenciones quirúrgicas",
      "Dental 21 incluido (+30 servicios, 21% dto.)",
      "Accidentes de tráfico y laborales incluidos",
      "Médico digital 24h desde la oficina",
      "Fisioterapia en centro de trabajo",
      "Urgencias en el extranjero hasta 12.000€/año",
      "4% dto. pago anual"
    ],
    href: "/seguros-medicos-para-empresas/sanitas-pymes-digital/",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format",
    highlighted: true
  },
  {
    title: "Sanitas Empresas",
    label: "Empresas medianas y grandes",
    tagline: "Un beneficio social que desgrava y mejora la productividad.",
    description: "Para empresas de mayor tamaño. Asistencia sanitaria completa con acceso a medicina primaria, hospitalización, dental incluido y los programas digitales de Blua.",
    features: [
      "Medicina primaria, especialidades y hospitalización",
      "Dental 21: más de 46 servicios incluidos",
      "Urgencias 24h por videoconsulta",
      "Programas asesoramiento (nutrición, fisio...)",
      "Segunda opinión médica internacional",
      "Deducible para empresa / exento IRPF"
    ],
    href: "/seguros-medicos-para-empresas/sanitas-empresas/",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format"
  },
  {
    title: "Sanitas Inicia",
    label: "Pymes · La opción más económica",
    tagline: "La opción más económica que permite a tus empleados acceder a un seguro básico.",
    description: "Asistencia médica sin hospitalización con acceso rápido a especialistas y pruebas diagnósticas. Ideal para empresas que quieren empezar a cuidar a su equipo con presupuesto limitado.",
    features: [
      "Acceso a especialistas sin listas de espera",
      "Pruebas diagnósticas básicas incluidas",
      "Descuentos en hospitalización y cirugías",
      "Cobertura de óptica y 2ª opinión médica",
      "Urgencias en el extranjero hasta 12.000€/año"
    ],
    href: "/seguros-medicos-para-empresas/sanitas-inicia/",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format"
  },
  {
    title: "Sanitas Global Care",
    label: "Empresas internacionales · Expatriados",
    tagline: "Tu empresa no tiene fronteras. El cuidado de tus empleados tampoco.",
    description: "Diseñado para empleados que trabajan o residen en el extranjero. Cobertura médica completa en cualquier parte del mundo con reembolso del 100%.",
    features: [
      "Cobertura médica mundial completa",
      "Reembolso 100% (80% en EE.UU. fuera red)",
      "Hospitalización e intervenciones mundiales",
      "Disponible desde 3 meses de estancia",
      "Sin número mínimo de asegurados"
    ],
    href: "/seguros-medicos-para-empresas/sanitas-global-care/",
    image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&q=80&auto=format"
  }
]

const pageFaqs = [
  { question: "¿Cuántos empleados necesito para contratar un seguro de empresa?", answer: "Sanitas Pymes Digital e Inicia están disponibles a partir de 5 empleados. Sanitas Empresas es para plantillas más grandes (a partir de 20 empleados aproximadamente). Global Care no tiene número mínimo de asegurados. Consúltanos para confirmar las condiciones exactas para el tamaño de tu empresa." },
  { question: "¿Puede la empresa deducirse el coste del seguro?", answer: "Sí. El coste del seguro médico de los empleados es deducible como gasto de empresa. Además, para el empleado, los primeros 500€ anuales por persona están exentos de IRPF. Te recomendamos confirmar las condiciones con tu asesor fiscal." },
  { question: "¿La prima es la misma para todos los empleados independientemente de su edad?", answer: "En los seguros de empresa de Sanitas, la prima es colectiva y no depende de la edad individual de cada empleado. Esto es una ventaja respecto a los seguros individuales." },
  { question: "¿Los empleados pueden añadir a su familia?", answer: "Sí. Los empleados pueden extender la cobertura a su pareja e hijos. Además, las primas de estos familiares también pueden tener ventajas fiscales para el empleado." },
  { question: "¿Qué pasa si un empleado se da de baja en la empresa?", answer: "El empleado puede solicitar mantener la póliza de forma individual al dejar la empresa, en las condiciones que se establezcan en ese momento. Te asesoramos en cada caso." },
  { question: "¿Incluyen Blua todos los seguros de empresa?", answer: "Sí. Blua digital — videoconsulta, urgencias 24h, programas de salud — está incluido en todos los seguros Sanitas para empresas sin coste adicional." }
]

export default function SegurosEmpresasPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Seguros Médicos", item: "https://segurosonline.net/#seguros" },
          { name: "Para Empresas", item: "https://segurosonline.net/seguros-medicos-para-empresas" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Empresas" }
        ]}
        label="Deducible para empresa · Exento IRPF empleado · Blua GRATIS"
        h1={<>Seguros médicos para empresas.<br className="hidden lg:block"/> Cuida a tu equipo. Cuida tu negocio.</>}
        body="Ofrecer un seguro de salud a tus empleados no es solo un beneficio social — es una decisión inteligente. Reduce el absentismo, mejora la productividad y es uno de los beneficios más valorados por encima de otras compensaciones. Y además, la empresa puede deducirse el gasto y el empleado tiene ventajas fiscales en su IRPF."
        badges={["Desde 5 empleados", "Exento IRPF hasta 500€", "Blua gratis"]}
        trustItems={["Desde 5 empleados", "Ventajas fiscales", "Reduce el absentismo", "Atención personalizada"]}
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] max-w-2xl">
              ¿Por qué un seguro de salud para tu empresa?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <Reveal delay={0.1}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Atrae y retiene talento</h3>
                <p className="text-gray-600 text-sm leading-relaxed">El seguro de salud es uno de los beneficios más demandados por los empleados, por encima de otras compensaciones. Un equipo que se siente cuidado es un equipo comprometido.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <TrendingDown className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Reduce el absentismo</h3>
                <p className="text-gray-600 text-sm leading-relaxed">El acceso rápido a especialistas minimiza los tiempos de baja. Un empleado que ve al especialista en días, no en meses, recupera antes su plena capacidad productiva.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <Landmark className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Ventajas fiscales para la empresa</h3>
                <p className="text-gray-600 text-sm leading-relaxed">La empresa puede deducirse el coste del seguro como gasto. Para el empleado, los primeros 500€ por persona y año están exentos de IRPF (1.500€ en caso de discapacidad).</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Gestión centralizada</h3>
                <p className="text-gray-600 text-sm leading-relaxed">La empresa centraliza la contratación y la gestión. Los empleados no tienen que negociar individualmente — tú decides el nivel de cobertura para todo el equipo.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CategoryProductGrid 
        title="Nuestros seguros para empresas."
        description="Desde la opción más económica para pymes que empiezan hasta la cobertura completa para equipos internacionales. Encuentra el que mejor se adapta al tamaño y perfil de tu empresa."
        products={productosEmpresas}
      />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-5">
              Ventajas fiscales para empresa y empleado.
            </h2>
            <p className="text-lg text-gray-600">
              Contratar un seguro de salud para tus empleados no es solo una inversión en bienestar — tiene ventajas fiscales reales tanto para la empresa como para cada trabajador.
            </p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-10">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-[#0091DA] font-bold uppercase tracking-wider text-sm mb-2">Para la empresa</div>
                <p className="text-gray-700 leading-relaxed">
                  El coste del seguro de salud de los empleados es deducible como gasto de empresa. Una ventaja que reduce directamente la carga fiscal de tu negocio.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-[#0091DA] font-bold uppercase tracking-wider text-sm mb-2">Para el empleado</div>
                <p className="text-gray-700 leading-relaxed">
                  Los primeros 500€ anuales por persona están exentos de IRPF para el empleado (incluidos cónyuge e hijos). En el caso de personas con discapacidad, el límite es de 1.500€. Esto significa que el empleado recibe un beneficio real sin que compute como salario tributable.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-sm text-gray-600">
              <span className="font-bold text-[#002A54]">Nota legal:</span> Te recomendamos consultar con tu asesor fiscal para aplicar estas ventajas correctamente según la situación de tu empresa. Condiciones sujetas a la normativa fiscal vigente.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              ¿Qué seguro le conviene a tu empresa?
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {[
              {
                perfil: "Pequeña empresa o pyme que empieza",
                recomendado: "Sanitas Inicia",
                porQue: "La opción más económica. Acceso a especialistas, pruebas básicas y óptica. Sin hospitalización pero con descuentos si se necesita."
              },
              {
                perfil: "Pyme que quiere lo mejor para su equipo",
                recomendado: "Sanitas Pymes Digital",
                porQue: "Cobertura completa con hospitalización, dental incluido, servicios digitales en el trabajo y accidentes laborales. El más completo para pymes."
              },
              {
                perfil: "Empresa mediana o grande",
                recomendado: "Sanitas Empresas",
                porQue: "Asistencia sanitaria completa, dental incluido, programas de asesoramiento médico sin límite y todas las ventajas fiscales."
              },
              {
                perfil: "Empresa con empleados en el extranjero",
                recomendado: "Sanitas Global Care",
                porQue: "Cobertura médica mundial, reembolso del 100% y sin número mínimo de asegurados. Diseñado perfectamente para expatriados."
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-xl shadow-gray-100 h-full flex flex-col">
                  <div className="bg-gray-50 rounded-lg p-3 inline-block w-max mb-5 text-gray-500 font-bold text-sm">
                    Perfil {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#002A54] mb-4 line-clamp-3 h-14">{item.perfil}</h3>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-5 flex-grow">
                    <span className="block text-xs text-[#0091DA] font-bold uppercase tracking-wider mb-1">Recomendado</span>
                    <div className="font-bold text-base text-[#002A54]">{item.recomendado}</div>
                  </div>
                  <p className="text-sm text-gray-600">{item.porQue}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection 
        title="Preguntas frecuentes sobre seguros para empresas"
        description="Encuentra las respuestas rápidas que necesitas antes de decidir la protección para tu equipo."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="¿Hablamos sobre el seguro para tu equipo?"
        title="Te llamamos sin compromiso."
        description="Cuéntanos el tamaño de tu empresa y lo que necesitas. Te preparamos una propuesta personalizada sin ningún compromiso."
      />

      <Footer />
    </main>
  )
}
