import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Centros de Día para Mayores Sanitas — Actividades y Terapias en España | SegurosOnline",
  description: "Centros de Día Sanitas Mayores: programa de actividades adaptadas, terapias de rehabilitación, control nutricional, transporte adaptado y horarios flexibles. ☎ 624 21 73 23",
  path: "/sanitas-mayores/centros-de-dia/"
})

const faqData = [
  { 
    question: "¿Puedo acceder a un Centro de Día Sanitas sin seguro?", 
    answer: "Sí. Los Centros de Día están disponibles para cualquier persona independientemente de si tiene o no seguro Sanitas." 
  },
  { 
    question: "¿El Centro de Día está financiado por la Administración?", 
    answer: "En muchos casos el acceso al Centro de Día puede gestionarse a través del sistema de dependencia (SAAD) con financiación pública parcial. Consúltanos y te orientamos sobre las opciones disponibles en tu comunidad autónoma." 
  },
  { 
    question: "¿Atienden a personas con Alzheimer?", 
    answer: "Sí. Sanitas tiene una larga experiencia en el cuidado de personas con demencia y Alzheimer. Los centros disponen de programas específicos de estimulación cognitiva y personal especializado en deterioro cognitivo." 
  },
  { 
    question: "¿Cómo puedo saber si hay un Centro de Día Sanitas cerca?", 
    answer: "Consúltanos e identificamos el centro más próximo a tu domicilio y te informamos sobre disponibilidad y condiciones." 
  },
  { 
    question: "¿El servicio de transporte está incluido en el precio?", 
    answer: "El transporte puede estar incluido o tener un coste adicional según el centro y la distancia. Consúltanos para el centro concreto que te interesa." 
  }
]

export default function CentrosDeDiaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sanitas Mayores", href: "/sanitas-mayores" },
          { label: "Centros de Día" }
        ]}
        h1={<>Cuidado Diurno Especializado.<br />Centros de Día Sanitas para un Envejecimiento Activo.</>}
        body="El equilibrio perfecto entre la independencia en el hogar y la atención profesional durante el día. Para mayores que quieren seguir en su entorno familiar pero necesitan apoyo y estimulación diaria."
        badges={["Horarios flexibles", "Transporte adaptado", "Actividades adaptadas", "Tengas o no seguro Sanitas"]}
        trustItems={["Programa de actividades", "Terapias de rehabilitación", "Control nutricional", "Equipo especializado"]}
        imageSrc="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Qué es un Centro de Día para mayores?">
        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Un Centro de Día es un recurso sociosanitario que ofrece atención integral a personas mayores durante el día, permitiéndoles regresar a su domicilio por las noches. Es la alternativa ideal para mayores que mantienen cierta autonomía o que tienen una red familiar de apoyo en casa, pero que se benefician del estímulo, la atención profesional y la compañía durante las horas del día.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Los Centros de Día de Sanitas Mayores están diseñados para atender a personas con distintos grados de dependencia, incluyendo personas con deterioro cognitivo leve o moderado, y ofrecen un programa completo de actividades terapéuticas, sociales y de bienestar.
          </p>
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Qué ofrecen los Centros de Día de Sanitas?">
        <Reveal>
          <h3 className="text-2xl font-bold text-[#002A54] mt-8 mb-4">Programa de actividades adaptadas</h3>
          <p className="mb-4">Cada usuario tiene un programa personalizado de actividades adaptado a su condición física y cognitiva. Las actividades combinan estimulación cognitiva, actividad física adaptada, talleres creativos y actividades sociales y lúdicas para mantener y mejorar las capacidades del mayor.</p>
          <FeatureList items={[
            "Estimulación cognitiva: memoria, atención, lenguaje",
            "Actividad física adaptada: gimnasia suave, psicomotricidad",
            "Talleres creativos: manualidades, pintura, música",
            "Actividades sociales: juegos, conversación, eventos",
            "Celebraciones y efemérides especiales"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Terapias de rehabilitación</h3>
          <p className="mb-4">Programa de terapias orientadas tanto a la recuperación de funciones perdidas como al mantenimiento de las capacidades:</p>
          <FeatureList items={[
            "Fisioterapia: tratamiento del dolor, movilidad articular, prevención de caídas, rehabilitación postoperatoria",
            "Terapia ocupacional: entrenamiento en actividades de la vida diaria para mantener la autonomía el máximo tiempo posible",
            "Logopedia: rehabilitación del lenguaje y la comunicación cuando es necesario",
            "Psicología: apoyo emocional y tratamiento del deterioro cognitivo"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Control nutricional</h3>
          <p className="mb-4">Menú diario equilibrado elaborado por nutricionistas, adaptado a las necesidades de cada usuario: patologías crónicas, restricciones alimentarias, texturas específicas para personas con dificultades de deglución.</p>
          <p className="mb-6">Control y seguimiento del estado nutricional de cada usuario con ajustes periódicos si es necesario.</p>

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Atención sanitaria durante el día</h3>
          <FeatureList items={[
            "Control de medicación y pauta terapéutica",
            "Seguimiento del estado de salud general",
            "Atención de pequeñas incidencias sanitarias durante la estancia",
            "Coordinación con el médico de cabecera del usuario"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Apoyo a las familias</h3>
          <p className="mb-4">El Centro de Día no es solo un servicio para el mayor — también es un respiro para las familias cuidadoras:</p>
          <FeatureList items={[
            "Asesoramiento y orientación a familiares sobre cómo gestionar el cuidado en el domicilio",
            "Grupos de apoyo para cuidadores familiares",
            "Coordinación continua con la familia sobre la evolución y el estado del usuario",
            "Información periódica sobre el programa de actividades y los cambios en la atención"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <section className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#002A54] mb-6">Horarios y transporte</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Horarios flexibles</h3>
                <p className="text-gray-600 leading-relaxed mb-4">Los Centros de Día de Sanitas ofrecen horarios adaptados a las necesidades de cada familia. La flexibilidad horaria permite compaginar el uso del centro con la vida laboral de los cuidadores familiares.</p>
                <p className="text-gray-600 leading-relaxed font-medium">Los centros operan generalmente de lunes a viernes en horario de mañana y tarde.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-xl font-bold text-[#002A54] mb-4">Transporte adaptado</h3>
                <p className="text-gray-600 leading-relaxed">Muchos centros disponen de servicio de transporte adaptado para la recogida y devolución del usuario en su domicilio. Un servicio que elimina una de las principales barreras de acceso al centro, especialmente para personas con movilidad reducida.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProductFeatureSection title="¿Para quién es adecuado el Centro de Día?">
        <Reveal>
          <FeatureList items={[
            "Personas mayores con cierto grado de dependencia que pueden mantenerse en su domicilio pero se benefician de atención y estimulación profesional durante el día",
            "Mayores con deterioro cognitivo leve o moderado (incluyendo fases iniciales y medias de Alzheimer)",
            "Personas en proceso de recuperación post-hospitalaria que no precisan ingreso en residencia pero necesitan rehabilitación y supervisión",
            "Mayores solos durante el día cuyos familiares trabajan y no pueden garantizar acompañamiento y atención",
            "Situaciones de respiro familiar: cuando el cuidador principal necesita un periodo de descanso o tiene obligaciones que le impiden atender al mayor durante el día"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <WhiteCardGrid 
        title="Diferencia entre Centro de Día y Residencia"
        cards={[
          {
            icon: "clock",
            title: "Centro de Día",
            description: "El mayor duerme en su propio domicilio. Atención diurna (8-18h). Mantiene vínculos con su entorno habitual. Precio más accesible."
          },
          {
            icon: "shield",
            title: "Residencia",
            description: "El mayor vive en el centro 24h. Atención continua día y noche. Indicada para mayor grado de dependencia o falta de soporte nocturno."
          },
          {
            icon: "star",
            title: "Modalidad Combinada",
            description: "Muchas familias combinan ambos: Centro de Día entre semana y residencia fines de semana o periodos temporales de vacaciones."
          }
        ]}
      />

      <FaqSection 
        title="Preguntas sobre los Centros de Día"
        description="Resolvemos tus dudas sobre el servicio de atención diurna de Sanitas."
        faqs={faqData}
      />

      <ContactSection 
        label="ESTAMOS AQUÍ PARA AYUDARTE"
        title="Estamos aquí para ayudarte."
        description="Cuéntanos la situación de tu familiar y buscamos el Centro de Día más adecuado y más cercano a su domicilio."
      />
      <Footer />
    </main>
  )
}
