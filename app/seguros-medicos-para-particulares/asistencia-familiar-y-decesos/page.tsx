import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Seguro de Decesos Sanitas: Tranquilidad",
  description: "Seguros de decesos Sanitas en España: Asistencia Familiar iPlus hasta 75 años y Asistencia Senior Prima Única para mayores de 75. Avalados por Santalucía. ☎ 624 21 73 23",
  path: "/seguros-de-decesos/"
})

const faqData = [
  { 
    question: "¿Puedo contratar el seguro de decesos sin seguro médico Sanitas?", 
    answer: "Sí. Los seguros de decesos son completamente independientes y pueden contratarse sin ninguna póliza de salud Sanitas." 
  },
  { 
    question: "¿Cuánto tarda en activarse la cobertura de decesos?", 
    answer: "Asistencia Familiar iPlus tiene una carencia de 2 meses para la garantía de decesos. Asistencia Senior Prima Única no tiene carencias — la cobertura es efectiva desde el primer día de contratación." 
  },
  { 
    question: "¿Puedo incluir a toda la familia en una póliza?", 
    answer: "Sí. Asistencia Familiar iPlus puede contratarse como póliza individual o familiar (hasta 75 años de edad máxima de contratación en ambos casos)." 
  },
  { 
    question: "¿Qué pasa si el fallecimiento ocurre en el extranjero?", 
    answer: "Ambos seguros incluyen traslado internacional. Si el fallecimiento se produce fuera de España, la gestión del traslado del fallecido y la asistencia a los acompañantes están cubiertas independientemente del país donde ocurra." 
  },
  { 
    question: "¿Es posible cambiar de seguro de decesos si ya tengo uno con otra compañía?", 
    answer: "Sí. Consúltanos tu situación actual y te orientamos sobre cómo realizar el cambio minimizando los periodos sin cobertura." 
  },
  { 
    question: "¿El precio de la Prima Única puede aumentar en el futuro?", 
    answer: "En Asistencia Senior Prima Única, si los costes del servicio funerario suben más de un 10% respecto a los estimados al contratar, al vencimiento anual se notifica con dos meses de antelación el importe de una prima única adicional para mantener el seguro actualizado." 
  }
]

export default function SegurosDecesosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros de Decesos" }
        ]}
        h1={<>Seguros de Decesos Sanitas.<br />Gestión Integral y Tranquilidad para tu Familia.</>}
        body="En los momentos más difíciles, lo último que tu familia debería tener que hacer es gestionar trámites. Un seguro de decesos se ocupa de todo: el servicio fúnebre, el traslado nacional e internacional, la asistencia jurídica y el apoyo emocional, con una simple llamada. Avalados por Santalucía, especialista líder en decesos en España."
        badges={["Avalado por Santalucía", "Sin edad máx. permanencia", "Gestión integral", "Traslado mundial incluido"]}
        trustItems={["Avalado por Santalucía", "Traslado nacional e internacional", "Asistencia jurídica", "Atención psicológica"]}
        imageSrc="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Por qué contratar un seguro de decesos?">
        <Reveal>
          <h3 className="text-2xl font-bold text-[#002A54] mt-8 mb-4">Tranquilidad para la familia</h3>
          <p className="mb-8 text-gray-700 leading-relaxed">
            En el momento del fallecimiento de un ser querido, la familia se enfrenta simultáneamente al dolor de la pérdida y a la necesidad de tomar decisiones y realizar gestiones urgentes. Un seguro de decesos elimina esa carga: con una sola llamada, todo queda gestionado por profesionales especializados.
          </p>

          <h3 className="text-2xl font-bold text-[#002A54] mb-4">Ahorro económico real</h3>
          <p className="mb-8 text-gray-700 leading-relaxed">
            El coste de un servicio fúnebre completo, especialmente si incluye traslados nacionales o internacionales, puede suponer un desembolso importante que muchas familias no pueden afrontar de inmediato. El seguro cubre todos esos costes, y contratarlo durante la vida resulta significativamente más económico que afrontarlo en el momento.
          </p>

          <h3 className="text-2xl font-bold text-[#002A54] mb-4">Comodidad cuando más importa</h3>
          <p className="text-gray-700 leading-relaxed">
            Una situación emocionalmente devastadora no es el momento para buscar proveedores, comparar precios o gestionar documentación. El seguro lo hace por ti: gestión integral del servicio con un solo punto de contacto, disponible 24h.
          </p>
        </Reveal>
      </ProductFeatureSection>

      <WhiteCardGrid
        title="Elige tu seguro de decesos."
        subtitle="Dos productos diseñados para dos momentos vitales diferentes. Consúltanos cuál se adapta mejor a tu situación."
        cards={[
          {
            icon: "users",
            title: "Asistencia Familiar iPlus",
            description: "Cobertura por fallecimiento orientada a las características de cada localidad, traslado nacional e internacional, asistencia jurídica, atención psicológica, servicio de guardería y coberturas opcionales por edad. Sin edad máxima de permanencia.",
            href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-familiar-iplus/"
          },
          {
            icon: "star",
            title: "Asistencia Senior Prima Única",
            description: "Para mayores de 75 años que no están cubiertos por un seguro de decesos. Un único pago cubre el servicio fúnebre, el traslado del fallecido y los acompañantes, la asistencia jurídica completa y el otorgamiento de testamento notarial. Sin carencias.",
            href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-senior/"
          }
        ]}
      />

      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002A54] mb-6">¿Cuál te corresponde?</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Asistencia Familiar iPlus</h3>
                <FeatureList items={[
                  "Para personas de hasta 75 años",
                  "Pago periódico (mensual o anual)",
                  "Coberturas opcionales por tramos de edad",
                  "Incluye garantía de accidentes (17-65 años)",
                  "Incluye asistencia senior (mayores de 65)",
                  "Sin edad máxima de permanencia",
                  "Carencia de 2 meses para la garantía de decesos"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Asistencia Senior Prima Única</h3>
                <FeatureList items={[
                  "Para personas desde 75 años",
                  "Un único pago para toda la vida",
                  "Sin carencias — disponible desde el primer día",
                  "Incluye otorgamiento de testamento notarial",
                  "Garantía mundial",
                  "Sin límite de edad de permanencia"
                ]} />
              </div>
            </Reveal>
          </div>
          
          <Reveal delay={0.3}>
            <div className="bg-[#002A54] text-white p-8 rounded-3xl">
              <h4 className="font-bold mb-2 text-lg text-yellow-400">Conclusión Práctica:</h4>
              <p className="text-white/90 leading-relaxed">
                Si tienes menos de 75 años, el producto adecuado es Asistencia Familiar iPlus. Si tienes 75 años o más y aún no tienes un seguro de decesos, Asistencia Senior Prima Única está diseñado expresamente para tu situación.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductFeatureSection title="El respaldo de Santalucía">
        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ambos seguros se ofrecen en coaseguro entre Sanitas y Santalucía al 50%, siendo Santalucía la entidad delegada de la gestión. Santalucía es la empresa especialista en seguros de decesos líder en España, con décadas de experiencia en la gestión de servicios funerarios y atención a familias en los momentos más difíciles.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Esta combinación ofrece lo mejor de los dos mundos: la confianza y red de distribución de Sanitas con la especialización y experiencia operativa de Santalucía en el sector de decesos.
          </p>
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Qué incluye la gestión del servicio?">
        <Reveal>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Con una simple llamada al teléfono de asistencia, el equipo de Santalucía se encarga de:
          </p>
          <FeatureList items={[
            "Coordinación y organización de todos los elementos del servicio fúnebre según los deseos de la familia",
            "Gestión del tanatorio y servicios de velatorio",
            "Inhumación o incineración según preferencia familiar",
            "Trámites administrativos: certificado de defunción, inscripción en el Registro Civil, gestión del libro de familia",
            "Traslado nacional: si el fallecimiento se produce fuera de la localidad de residencia",
            "Traslado internacional: si el fallecimiento se produce fuera de España, gestión completa del traslado de vuelta y acompañantes",
            "Asistencia jurídica: orientación sobre herencias, declaración de herederos, gestión notarial"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas sobre seguros de decesos"
        description="Aclaramos tus dudas sobre la cobertura y condiciones de Asistencia Familiar y Senior."
        faqs={faqData}
      />

      <ContactSection 
        label="PROTECCIÓN Y TRANQUILIDAD"
        title="Protege a tu familia del peor momento."
        description="Te explicamos cuál de los dos seguros es el más adecuado para tu situación. Sin ningún compromiso."
      />
      <Footer />
    </main>
  )
}
