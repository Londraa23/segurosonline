import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Seguros Dentales Sanitas en España — Dental Milenium y Dental Premium | Sanitas Ventas",
  description: "Seguros dentales Sanitas en España: Dental Milenium y Dental Premium con empastes incluidos. Sin carencias ni preexistencias. ☎ 624 21 73 23",
  path: "/seguros-dentales/"
})

const faqData = [
  { 
    question: "¿Puedo contratar el seguro dental sin tener seguro médico Sanitas?", 
    answer: "Sí. Los seguros dentales son independientes y pueden contratarse sin ningún seguro médico. También pueden añadirse como complemento a cualquier póliza de salud." 
  },
  { 
    question: "¿Cuándo puedo empezar a usar el seguro?", 
    answer: "Desde el primer día. Ninguno de los dos seguros tiene periodos de carencia ni exclusiones por preexistencias." 
  },
  { 
    question: "¿El Pack Familia tiene límite de miembros?", 
    answer: "La tarifa plana aplica para pólizas de 3 a 6 asegurados. Para más miembros (hasta un máximo de 12) se pueden añadir con precio por persona adicional. Al menos 3 asegurados deben ser mayores de 6 años para contratar el Pack Familia." 
  },
  { 
    question: "¿Qué pasa si necesito más de 2 empastes al año con el Premium?", 
    answer: "El 3er empaste en adelante tiene un precio cerrado ventajoso — significativamente por debajo del precio de mercado habitual." 
  },
  { 
    question: "¿Puedo añadir el seguro dental a mi póliza de salud Sanitas?", 
    answer: "Sí. Puedes contratar el dental como un seguro independiente o como complemento a tu póliza de salud. Consúltanos las condiciones según tu seguro actual." 
  }
]

export default function SegurosDentalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguro Dental" }
        ]}
        h1={<>Seguros Dentales Sanitas.<br />Cuida tu sonrisa sin sorpresas.</>}
        body="En Sanitas queremos verte sonreír. Por eso cuidamos de tu salud bucodental en todas las etapas de tu vida, seas o no cliente de Sanitas. Dos modalidades de seguro dental con más de 200 clínicas Milenium en toda España, sin carencias y sin preexistencias. Desde el primer día."
        badges={["Sin carencias", "Sin preexistencias", "+200 clínicas Milenium"]}
        trustItems={["Sin carencias", "Desde el primer día", "+200 clínicas", "Pack Dúo y Familia disponibles"]}
        imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80&auto=format"
      />

      <WhiteCardGrid
        title="Elige tu seguro dental."
        subtitle="Dos opciones para cubrir tus necesidades bucodentales: el más completo en prevención o el que añade empastes incluidos. Con precio cerrado y sin sorpresas."
        cards={[
          {
            icon: "star",
            title: "Sanitas Dental Milenium",
            description: "55 servicios incluidos en póliza. Higiene dental, revisiones, extracciones incluidas (muelas del juicio), radiografías completas, ortodoncia, implantología y cobertura dental básica. Hasta un 40% de descuento en tratamientos no incluidos.",
            href: "/seguros-dentales/sanitas-dental-milenium/"
          },
          {
            icon: "shield",
            title: "Sanitas Dental Premium",
            description: "73 servicios incluidos. Todo lo de Milenium más 2 empastes o reconstrucciones incluidos al año. Para quienes quieren la cobertura dental más completa disponible en el mercado. Hasta un 40% de descuento en tratamientos no incluidos.",
            href: "/seguros-dentales/sanitas-dental-premium/"
          }
        ]}
      />

      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002A54] mb-6">¿Milenium o Premium? Aquí la diferencia.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Sanitas Dental Milenium</h3>
                <FeatureList items={[
                  "55 servicios incluidos",
                  "Higiene, revisiones, extracciones, radiología, ortodoncia",
                  "Empastes: precio ventajoso (no incluidos de serie)"
                ]} />
                <p className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <strong className="text-[#002A54]">Ideal para:</strong> quienes quieren cobertura completa al precio más accesible y no prevén necesitar empastes frecuentes.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border-[#0091DA] border-2 shadow-sm h-full relative">
                <div className="absolute top-0 right-0 bg-[#0091DA] text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold uppercase">Empastes Incluidos</div>
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Sanitas Dental Premium</h3>
                <FeatureList items={[
                  "73 servicios incluidos",
                  "Todo lo de Milenium más 2 empastes/reconstrucciones/año",
                  "Empastes: 2 incluidos de serie por año"
                ]} />
                <p className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <strong className="text-[#002A54]">Ideal para:</strong> quienes prevén necesitar empastes o ya saben que los necesitarán, y quieren la cobertura más completa.
                </p>
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.3}>
            <div className="bg-[#002A54] text-white p-8 rounded-3xl">
              <h4 className="font-bold mb-2 text-lg text-yellow-400">Regla Práctica:</h4>
              <p className="text-white/90 leading-relaxed">Si prevés necesitar 2 o más empastes al año, el coste extra del Premium respecto al Milenium se recupera con los propios empastes incluidos. Consúltanos y hacemos los números para tu caso concreto.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductFeatureSection title="Ventajas comunes de ambos seguros.">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
            <div>
              <h4 className="text-lg font-bold text-[#002A54] mb-2">Sin carencias ni preexistencias</h4>
              <p className="text-gray-600">Puedes utilizar el seguro desde el primer día de contratación, vengas de otra compañía o sea tu primer seguro dental. Sin periodos de espera, sin exclusiones por historial previo.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#002A54] mb-2">Pack Dúo y Pack Familia</h4>
              <p className="text-gray-600">Tarifa plana para asegurar a 2 personas (Pack Dúo) o de 3 a 6 asegurados (Pack Familia). Cuantos más, más se amortiza el coste por persona. Ideal para parejas y familias.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#002A54] mb-2">Más de 200 clínicas Milenium</h4>
              <p className="text-gray-600">Red exclusiva de clínicas dentales propias de Sanitas en toda España. Tecnología avanzada, profesionales certificados y atención de alta calidad en todos los centros.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#002A54] mb-2">Hasta 40% de descuento</h4>
              <p className="text-gray-600">Los tratamientos no incluidos en cobertura tienen un descuento de hasta el 40% sobre el precio de mercado, aplicable en todos los centros Milenium.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#002A54] mb-2">Descuentos en el segundo año</h4>
              <p className="text-gray-600">Desde el segundo año de póliza, descuentos adicionales: 10% en ortodoncia, implantes y blanqueamiento; 5% en endodoncia, periodoncia y odontología conservadora.</p>
            </div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas frecuentes sobre seguros dentales"
        description="Resuelve tus dudas sobre las coberturas, precios y condiciones de Sanitas Dental."
        faqs={faqData}
      />

      <ContactSection 
        label="¿HABLAMOS?"
        title="¿Hablamos?"
        description="Te decimos en dos minutos cuál de los dos encaja mejor con tus necesidades y las de tu familia."
      />
      <Footer />
    </main>
  )
}
