import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { CheckCircle2, FileCheck, Stethoscope, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "Seguros Médicos para Extranjeros en España | Sanitas Ventas",
  description: "Seguros de salud Sanitas para extranjeros residentes en España. Válidos para visado y residencia, sin copago, con hospitalización. Asesoramiento. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/seguros-medicos-para-extranjeros/"
  }
}

const productosExtranjeros: ProductCardData[] = [
  {
    title: "Sanitas Más Salud Extranjeros",
    label: "Extranjeros · Cuadro médico · Sin copago",
    badge: "VÁLIDO PARA VISADO",
    tagline: "El seguro médico ideal para extranjeros que residen en España, sus familiares y estudiantes.",
    description: "Cobertura sanitaria completa sin copagos, con hospitalización en habitación individual y acceso a toda la red médica Sanitas. Diseñado para cumplir los requisitos de visado y permiso de residencia.",
    features: [
      "Cobertura completa — ambulatoria y hospitalaria",
      "Válido para pedir visado y permiso de residencia",
      "Sin copagos ni franquicias — solo la prima",
      "Hospitalización en habitación individual",
      "Repatriación incluida por fallecimiento",
      "Gastos en el extranjero hasta 12.000€"
    ],
    href: "/seguros-medicos-para-extranjeros/seguro-medico-extranjeros-residentes-espana/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format",
    highlighted: true
  },
  {
    title: "Sanitas International Residents",
    label: "Extranjeros · Cuadro médico + Reembolso · Sin copago",
    tagline: "Seguro de salud de asistencia completa con libre elección de especialistas y reembolso.",
    description: "Para extranjeros residentes en España que quieren cobertura total más la libertad de elegir cualquier médico del mundo. Reembolso del 80% hasta 150k€ o 90% hasta 300k€ fuera del cuadro.",
    features: [
      "Libre elección de especialistas en todo el mundo",
      "Reembolso 80% hasta 150.000€ / 90% hasta 300.000€",
      "Sin copagos ni franquicias al usar los servicios",
      "Dental 21 incluido (30 servicios + 21% dto.)",
      "Repatriación al país de origen incluida",
      "Edad máx. contratación: 64 años"
    ],
    href: "/seguros-medicos-para-extranjeros/sanitas-international-residents/",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format"
  }
]

const pageFaqs = [
  { question: "¿Estos seguros son válidos para solicitar la residencia en España?", answer: "Sí. Ambos productos cumplen los requisitos de cobertura sanitaria completa exigidos por las autoridades españolas para residencia comunitaria, visados de estudios y otros trámites de extranjería. Consúltanos con tu tipo de visado concreto para confirmarlo." },
  { question: "¿Puedo contratar con pasaporte sin tener NIE?", answer: "Sí. Sanitas Más Salud Extranjeros permite la contratación con pasaporte. Para Sanitas International Residents es necesario residir en España al menos 6 meses al año durante la vigencia del contrato y aportar dirección de residencia en España y documento válido (NIF, CIF, Pasaporte o NIE)." },
  { question: "¿Cuál es la diferencia entre los dos seguros?", answer: "Sanitas Más Salud Extranjeros da acceso al cuadro médico Sanitas sin copago. Sanitas International Residents añade reembolso de gastos en cualquier médico del mundo fuera del cuadro, con porcentajes del 80% o el 90% según el límite contratado. International Residents tiene edad máxima de contratación de 64 años." },
  { question: "¿Puedo incluir a mis familiares en la misma póliza?", answer: "Sí, en ambos seguros puedes incluir a tu pareja e hijos. Sanitas Más Salud Extranjeros está pensado expresamente para extranjeros residentes, familiares y estudiantes en España." },
  { question: "¿Tienen periodos de carencia?", answer: "Sí, como todos los seguros médicos. La mayoría de coberturas están disponibles desde el primer día o con carencias cortas. Los periodos más largos aplican a hospitalización compleja, parto y algunos métodos terapéuticos complejos. Puedes eliminarlos si llevas +1 año en otra compañía de cobertura completa (excepto parto)." }
]

export default function SegurosExtranjerosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Extranjeros" }
        ]}
        label="Válido para visado y residencia · Sin copago · Hospitalización incluida · Blua GRATIS"
        h1={<>Seguros médicos para extranjeros<br className="hidden lg:block"/> residentes en España.</>}
        body="Vivir en España requiere un seguro médico de cobertura completa para muchos trámites administrativos: solicitud de residencia comunitaria, visados de estudios, ciudadanía de la UE y más. En Sanitas Ventas te ofrecemos dos opciones específicamente diseñadas para extranjeros residentes, ambas válidas para estos trámites y con acceso inmediato a toda la red médica Sanitas desde el primer día."
        badges={["Válido para visado", "Sin copagos", "Trámites residencia"]}
        trustItems={["Válido para residencia", "Sin copago", "+45.000 médicos", "Contratación con pasaporte"]}
        imageSrc="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1600&q=80&auto=format"
      />

      <CategoryProductGrid 
        title="¿Qué seguro necesitas?"
        description="Dos productos diferentes para dos perfiles distintos. Te ayudamos a elegir el que mejor se adapta a tu situación particular."
        products={productosExtranjeros}
      />

      <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] max-w-2xl">
              Lo que tienen en común los dos seguros.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <Reveal delay={0.1}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Sin copagos</h3>
                <p className="text-gray-600 text-sm leading-relaxed">En ambos productos el único pago es la prima mensual o anual. Ningún coste adicional cada vez que usas el seguro de salud.</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <FileCheck className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Válidos para trámites</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Ambos cumplen los requisitos de cobertura completa exigidos para visados, residencia comunitaria y otros trámites de extranjería.</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <Video className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Blua digital incluido</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Videoconsulta con especialistas, urgencias 24h sin cita previa y programas de salud digitales, gratis para siempre.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col">
                <div className="w-14 h-14 bg-[#0091DA]/10 rounded-2xl flex items-center justify-center mb-5 text-[#0091DA]">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#002A54] mb-3">Atención personalizada</h3>
                <p className="text-gray-600 text-sm leading-relaxed">En Sanitas Ventas te acompañamos en la contratación y en la gestión de toda la documentación necesaria para tus trámites.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection 
        title="Preguntas sobre seguros para extranjeros"
        description="Todo lo necesario sobre compatibilidad con trámites de extranjería y acceso."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="¿Hablamos?"
        title="Te ayudamos a elegir el seguro correcto."
        description="Preparamos toda la documentación para tus trámites. En el idioma que prefieras, al instante y sin letra pequeña."
      />

      <Footer />
    </main>
  )
}
