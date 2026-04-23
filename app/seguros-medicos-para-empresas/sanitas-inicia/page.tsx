import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FeatureBlock, ThreeColumnFeatures } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Sanitas Inicia — Seguro Médico Básico para Empresas y Pymes | Sanitas Ventas",
  description: "Sanitas Inicia: la opción más económica para que tus empleados accedan a la sanidad privada. Sin hospitalización, con especialistas y cobertura de óptica.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-empresas/sanitas-inicia/" }
}

const pageFaqs = [
  { question: "¿Sanitas Inicia incluye hospitalización?", answer: "No de serie. Sin embargo, si un empleado necesita una intervención quirúrgica u hospitalización, tiene acceso a precios reducidos con un sistema de copago por niveles de complejidad, lo que hace el coste muy inferior a lo que pagaría sin seguro." },
  { question: "¿A partir de cuántos empleados puedo contratarlo?", answer: "Desde 5 empleados. Consúltanos para condiciones exactas según el tamaño de tu plantilla." },
  { question: "¿Incluye cobertura dental?", answer: "No en la cobertura base. Si necesitas dental para tus empleados, te recomendamos Sanitas Pymes Digital, que incluye Dental 21 de serie, o contratar el dental como complemento." },
  { question: "¿Tiene ventajas fiscales?", answer: "Sí. La empresa puede deducir el coste y el empleado tiene exención de IRPF en los primeros 500€ anuales por persona cubierta." }
]

export default function SanitasIniciaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Empresas", href: "/seguros-medicos-para-empresas" },
          { label: "Sanitas Inicia" }
        ]}
        label="Precio accesible · Especialistas sin esperas · Óptica incluida"
        h1={<>Sanitas Inicia.<br className="hidden lg:block" /> La opción más económica para cuidar a tu equipo.</>}
        body="La entrada al seguro de empresa de Sanitas. La opción más accesible en precio que permite a tus empleados acceder a especialistas, pruebas diagnósticas y cobertura de óptica, con descuentos garantizados en intervenciones quirúrgicas y hospitalización si las necesitan. Con segunda opinión médica internacional."
        badges={["Urgencias extranjero", "Óptica", "Especialistas"]}
        trustItems={["Acceso a especialistas", "Pruebas diagnósticas", "Óptica incluida", "Segunda opinión médica"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <FeatureBlock
        title="¿Qué incluye Sanitas Inicia?"
        description="Todo lo esencial para mantener a tu equipo sano sin inflar el presupuesto de la empresa."
        items={[
          "Acceso libre a especialistas sin listas de espera y atención personalizada en consultas",
          "Pruebas diagnósticas básicas y servicios esenciales de salud",
          "Cobertura de Farmacia: medicamentos a mitad de precio con receta médica",
          "Cobertura de Óptica: lentes de contacto y cristales graduados",
          "Segunda opinión médica internacional gestionada por Sanitas",
          "Urgencias en viajes al extranjero: hasta 12.000€/año",
          "Sanitas 24 horas y Sanitas Welcome (evaluación y gestiones telefónicas)",
          "Gestiones 100% online vía app Mi Sanitas"
        ]}
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format"
        badge="Acceso Premium"
      />

      {/* Pricing block specifically describing surgery pricing for Inicia */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-3">Descuentos en Hospitalización y Cirugía</h2>
            <p className="text-muted-foreground mb-8">Sanitas Inicia no incluye hospitalización de serie, pero ante una intervención compleja, el empleado es protegido y asume sólo una fracción fijada del coste total.</p>
          </Reveal>
          
          <div className="bg-white rounded-3xl p-8 border border-border shadow-sm max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 p-5 rounded-2xl bg-blue-50/50">
                <span className="bg-[#0091DA] text-white font-bold py-1 px-3 rounded text-sm">Nivel 1</span>
                <div>
                  <h4 className="font-bold text-[#002A54]">Cirugías menores y ambulatorias</h4>
                  <p className="text-sm text-gray-600 mt-1">Grupos 0, 1, 2, 3 y cirugías de oftalmología (4/5), artroscopias y varices.</p>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 p-5 rounded-2xl bg-gray-50">
                <span className="bg-gray-400 text-white font-bold py-1 px-3 rounded text-sm">Nivel 2</span>
                <div>
                  <h4 className="font-bold text-[#002A54]">Hospitalización General</h4>
                  <p className="text-sm text-gray-600 mt-1">Grupo 4 y uso de habitación (salvo exclusiones del nivel 1).</p>
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 p-5 rounded-2xl bg-gray-50">
                <span className="bg-[#002A54] text-white font-bold py-1 px-3 rounded text-sm">Nivel 3</span>
                <div>
                  <h4 className="font-bold text-[#002A54]">Cirugías complejas y Partos</h4>
                  <p className="text-sm text-gray-600 mt-1">Grupos 5 y 6, asistencia integral para parto y cesárea.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100 text-center">Edad máx de contratación: 75 años. 4% dto. por pago anual.</p>
          </div>
        </div>
      </section>

      <ThreeColumnFeatures
        title="El primer paso para cuidar a tu equipo."
        columns={[
          { title: "Sin listas de espera", body: "Tus empleados van directo al especialista u óptica desde el día 1, minimizando drásticamente la pérdida de salud o productividad del personal." },
          { title: "El precio más bajo", body: "Conseguimos el mejor equilibrio al descargar el coste hospitalario general, dando acceso preventivo robusto por el menor coste posible." },
          { title: "Flexibilidad de Futuro", body: "Si amplias beneficios después o logras rentabilidad, puedes migrar la empresa a Pymes Digital sin penalizaciones ni carencias extras." }
        ]}
      />

      <FaqSection title="Preguntas sobre Sanitas Inicia" description="Todo claro para el primer paso." faqs={pageFaqs} />
      
      <ContactSection 
        label="El primer seguro de tu empresa." 
        title="¿Te llamamos?" 
        description="Sin grandes inversiones y con resultados reales. Te ayudamos a ponerlo en marcha hoy mismo." 
      />
      <Footer />
    </main>
  )
}
