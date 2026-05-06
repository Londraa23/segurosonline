import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ProductFeatureSection, FeatureList, WhiteCardGrid } from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Cuidados a Domicilio para Mayores Sanitas — Atención Profesional en Casa | Sanitas Ventas",
  description: "Cuidados a domicilio Sanitas Mayores: selección de cuidador, rehabilitación en el hogar y servicios asistenciales personalizados. Sin salir de casa. ☎ 624 21 73 23",
  path: "/sanitas-mayores/cuidados-a-domicilio/"
})

const faqData = [
  { 
    question: "¿Puedo acceder a los cuidados a domicilio sin seguro Sanitas?", 
    answer: "Sí. El servicio está disponible para cualquier persona independientemente de si tiene o no póliza Sanitas." 
  },
  { 
    question: "¿El cuidador puede estar en el domicilio de noche?", 
    answer: "Sí. Sanitas ofrece tanto servicios diurnos como cuidadores internos (que pernoctan en el domicilio). Consúltanos las opciones según las necesidades concretas de tu familiar." 
  },
  { 
    question: "¿Qué pasa si el cuidador no encaja con mi familiar?", 
    answer: "El proceso de selección está diseñado para minimizar esta situación. Si pese a todo no funciona, se busca un perfil alternativo que se adapte mejor." 
  },
  { 
    question: "¿Está financiado por la Ley de Dependencia?", 
    answer: "El servicio de ayuda a domicilio puede estar financiado parcialmente a través del sistema de dependencia según el grado reconocido. Consúltanos y te orientamos sobre las opciones de financiación pública disponibles." 
  },
  { 
    question: "¿Se puede combinar con el Centro de Día?", 
    answer: "Sí. Es una combinación muy habitual: Centro de Día de lunes a viernes durante el horario de trabajo de la familia y cuidador a domicilio para las noches, fines de semana o momentos puntuales de necesidad." 
  }
]

export default function CuidadosADomicilioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Sanitas Mayores", href: "/sanitas-mayores" },
          { label: "Cuidados a Domicilio" }
        ]}
        h1={<>Cuidados a Domicilio Sanitas Mayores.<br />Atención profesional sin salir de casa.</>}
        body="Para mayores que quieren permanecer en su entorno familiar con la tranquilidad de contar con apoyo profesional. En casa, con los suyos."
        badges={["Cuidador seleccionado", "Rehabilitación en el hogar", "Servicios asistenciales", "Atención personalizada"]}
        trustItems={["Cuidadores seleccionados", "Rehabilitación domiciliaria", "Servicio personalizado", "Tengas o no seguro"]}
        imageSrc="https://images.unsplash.com/photo-1581578731548-c64695ce6958?w=1600&q=80&auto=format"
      />

      <ProductFeatureSection title="¿Por qué el cuidado en el domicilio?">
        <Reveal>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Para la mayoría de personas mayores, el hogar propio es el lugar donde quieren estar. Es el entorno que conocen, donde están sus recuerdos, donde se sienten seguros y donde mantienen su identidad. Permanecer en casa el mayor tiempo posible es el deseo de casi todos los mayores y de muchas de sus familias.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            El problema surge cuando la persona mayor necesita más apoyo del que la familia puede proporcionar por sí sola: ayuda para las actividades de la vida diaria, rehabilitación física, control de medicación, compañía y supervisión.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Los Cuidados a Domicilio de Sanitas Mayores hacen posible ese equilibrio: la persona mayor permanece en su hogar y su entorno habitual, con la atención profesional que necesita, sin los costes y el impacto emocional que puede suponer el traslado a una residencia.
          </p>
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="Servicios disponibles">
        <Reveal>
          <h3 className="text-2xl font-bold text-[#002A54] mt-8 mb-4">Selección de cuidador a domicilio</h3>
          <p className="mb-4">Sanitas Mayores cuenta con un servicio de selección y gestión de cuidadores a domicilio que cubre todo el proceso:</p>
          <FeatureList items={[
            "Selección del cuidador: proceso riguroso con evaluación de formación y referencias",
            "Perfilado personalizado: buscamos el cuidador que mejor encaja con el perfil del mayor",
            "Formación continua en atención a personas mayores y primeros auxilios",
            "Sustituciones garantizadas en caso de vacaciones o enfermedad"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Servicios de cuidado diario</h3>
          <FeatureList items={[
            "Higiene personal y aseo diario",
            "Preparación de comidas y alimentación",
            "Administración de medicación según pauta médica",
            "Acompañamiento y supervisión durante el día",
            "Acompañamiento a consultas médicas y gestiones",
            "Apoyo en la movilidad dentro del hogar",
            "Limpieza y mantenimiento básico del hogar",
            "Compras y gestiones cotidianas"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Rehabilitación a domicilio</h3>
          <p className="mb-4">Sesiones de rehabilitación en el propio domicilio para mayor comodidad:</p>
          <FeatureList items={[
            "Fisioterapia a domicilio: tratamiento del dolor, movilidad y postoperatorios",
            "Terapia ocupacional en el hogar: evaluación y adaptaciones del entorno",
            "Ejercicios supervisados de mantenimiento para preservar la fuerza muscular"
          ]} />

          <h3 className="text-2xl font-bold text-[#002A54] mt-12 mb-4">Otros servicios asistenciales</h3>
          <FeatureList items={[
            "Teleasistencia: dispositivo de llamada de emergencia 24 horas",
            "Podología a domicilio",
            "Peluquería a domicilio",
            "Servicio de comidas a domicilio"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="¿Cuándo son más necesarios los cuidados a domicilio?">
        <Reveal>
          <FeatureList items={[
            "Personas mayores con dependencia leve o moderada que quieren permanecer en su domicilio",
            "Situaciones post-hospitalarias que necesitan supervisión y rehabilitación",
            "Apoyo a cuidadores familiares que trabajan o necesitan un descanso",
            "Personas mayores que viven solas y necesitan compañía durante parte del día",
            "Situaciones de respiro: apoyo puntual cuando el cuidador habitual no está disponible"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <WhiteCardGrid 
        title="La alternativa a la residencia"
        cards={[
          {
            icon: "shield",
            title: "Alternativa Real",
            description: "Cuando el entorno doméstico permite la atención con apoyo profesional cualificado."
          },
          {
            icon: "star",
            title: "Complemento Perfecto",
            description: "Combinación ideal con el Centro de Día para cubrir noches y fines de semana."
          },
          {
            icon: "clock",
            title: "Solución Transitoria",
            description: "Ideal durante recuperaciones post-operatorias o esperas de plaza en residencia."
          }
        ]}
      />

      <FaqSection 
        title="Preguntas sobre Cuidados a Domicilio"
        description="Resolvemos tus dudas sobre el servicio de atención en el hogar de Sanitas."
        faqs={faqData}
      />

      <ContactSection 
        label="CUIDADO PROFESIONAL EN CASA"
        title="La atención profesional que merece tu familiar, en su hogar."
        description="Cuéntanos la situación y te diseñamos el servicio más adecuado. Sin compromiso."
      />
      <Footer />
    </main>
  )
}
