import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { 
  CoverageCardGrid, 
  ProductFeatureSection, 
  LegalNote, 
  FeatureList,
  WhiteCardGrid
} from "@/components/product-sections"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Dog, Cat, Heart, Shield, Clock, Stethoscope, BadgePercent, Globe, Download, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Seguro Mascotas — Seguro Veterinario para Perros y Gatos | Sanitas Ventas Madrid",
  description: "Seguro veterinario Sanitas para perros y gatos. 80% de reembolso hasta 2.500€/año, libre elección de veterinario, urgencias y consulta preventiva anual. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "/sanitas-mascotas/"
  }
}

const pageFaqs = [
  { 
    question: "¿Qué mascotas son asegurables?", 
    answer: "El seguro cubre perros y gatos cuya función sea de compañía. No son asegurables ni tienen cobertura perros con fines comerciales o profesionales ni aquellos dedicados a seguridad, vigilancia, guarda de fincas, caza, rescate, cría, lazarillo, carreras, peleas, etc.; ni gatos para fines comerciales o cría." 
  },
  { 
    question: "¿Cómo funciona el reembolso de gastos?", 
    answer: "La cobertura es de reembolso y te permite elegir al veterinario que desees a nivel nacional. Tú abonas los servicios veterinarios en la clínica y luego Sanitas te devuelve el 80% de los gastos presentando la factura, dentro del límite económico del producto (2.500€/año)." 
  },
  { 
    question: "¿Cuál es la edad de contratación?", 
    answer: "La mascota debe ser mayor de 3 meses y menor de 10 años. Una vez que tu mascota cumpla los 10 años, si ya tenía contratado el seguro, la póliza se mantiene de por vida. Si tu mascota es recién nacida, puedes poner una fecha de efecto a futuro para que la cobertura empiece a los tres meses de edad cumplidos." 
  },
  { 
    question: "¿Qué pasa si mi mascota tiene una enfermedad preexistente?", 
    answer: "Si padece o ha padecido alguna enfermedad, síntoma, lesión o ha tenido una operación, debes declararlo en el cuestionario de salud al contratar. Esto no impide solicitar el seguro — el departamento correspondiente te llamará para valorarlo." 
  },
  { 
    question: "¿Qué incluye el seguro veterinario para perros?", 
    answer: "Un seguro de asistencia veterinaria para perro te permite acudir a cualquier veterinario gracias a su cobertura de reembolso. Tu perro tendrá cobertura ante enfermedades o accidentes, urgencias y una revisión anual. Además, contará con cobertura en todo el territorio español y en la UE para situaciones de emergencia." 
  },
  { 
    question: "¿Qué incluye el seguro veterinario para gatos?", 
    answer: "Un seguro de salud completo para gatos cubre enfermedades o accidentes, urgencias y una revisión anual. Contarás con cobertura para tu gato en todo el territorio español y en la UE para situaciones de emergencia." 
  },
  { 
    question: "¿Puedo asegurar a mi mascota de por vida?", 
    answer: "Sí. En el momento de la contratación la mascota debe tener entre 3 meses y 9 años. Una vez asegurada con Sanitas, podrá estar con nosotros de por vida." 
  },
  { 
    question: "¿Podré acudir a mi veterinario habitual?", 
    answer: "Sí. Con Sanitas Salud Mascotas puedes seguir acudiendo al veterinario habitual. La cobertura de reembolso aplica en cualquier clínica veterinaria a nivel nacional." 
  },
  { 
    question: "¿Cuándo es mejor contratar el seguro?", 
    answer: "Una vez la mascota haya cumplido los 3 meses, para poder estar protegida frente a enfermedades e imprevistos desde el inicio." 
  }
]

export default function SanitasMascotasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Mascotas" }
        ]}
        label="Seguro Veterinario para Perros y Gatos"
        h1={<>Sanitas Seguro Mascotas.<br />La tranquilidad de Sanitas,<br className="hidden lg:block"/> también para tus mascotas.</>}
        body="El seguro veterinario que protege a tu mascota frente a imprevistos. Con Sanitas Salud Mascotas puedes acudir a cualquier veterinario y cubrirte ante enfermedades, accidentes, urgencias y una revisión anual. Con cobertura en todo el territorio español y en la UE para situaciones de emergencia."
        badges={[
          { text: "Descuento exclusivo de 100€/año para clientes de Sanitas", variant: "red" }
        ]}
        trustItems={[
          "80% reembolso hasta 2.500€/año",
          "Libre elección de veterinario",
          "Perros y gatos",
          "Cobertura en España y UE"
        ]}
        imageSrc="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&q=80&auto=format"
      />

      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-6">
              Promoción — 100€ de descuento sobre la prima anual
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Si ya eres cliente de alguno de nuestros productos de seguro de Salud o Dental, benefíciate de un descuento de 100€ en tu póliza de asistencia veterinaria Sanitas Salud Mascotas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El descuento es de 100€ sobre la prima anual en todas y cada una de las anualidades en las que la póliza se mantenga en vigor. Si figurases asegurado en más de una póliza de Sanitas Salud Mascotas, el descuento se aplica sobre cada una de ellas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-3 mb-4 text-red-600">
                  <BadgePercent className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-wider text-sm">Oferta Exclusiva</span>
                </div>
                <div className="text-4xl font-black text-[#002A54] mb-2">-100€ <span className="text-lg font-bold text-gray-400">/ año</span></div>
                <p className="text-sm text-gray-500 font-medium">Aplicable en cada anualidad mientras la póliza esté en vigor.</p>
              </div>
            </div>
          </Reveal>

          <LegalNote>
            <span className="font-bold">Cliente de Sanitas:</span> la persona que figure como asegurada/dueña en Sanitas Salud Mascotas debe figurar también como asegurada en otra póliza Sanitas individual, familiar o colectiva del ramo de enfermedad (reembolso, cuadro médico y/o dental) que esté vigente y al corriente de pago. Promoción no acumulable con otras promociones o descuentos. Fecha de entrada en vigor de la póliza Mascotas: entre el 01/01/2026 y el 31/12/2026. Bases legales: descuento de 100€ sobre la prima de seguro neta anual por contratación de nueva póliza Sanitas Salud Mascotas. El descuento se aplica en cada anualidad mientras la póliza esté en vigor y al corriente de pago.
          </LegalNote>
        </div>
      </section>

      <CoverageCardGrid 
        title="¿Qué incluye el seguro Sanitas Mascotas?"
        subtitle="Las coberturas clave diseñadas para que tu única preocupación sea disfrutar de tu perro o gato."
        cards={[
          {
            icon: "percent",
            label: "AHORRO GARANTIZADO",
            stat: "80% Reembolso",
            description: "Hasta 2.500€/año en gastos veterinarios."
          },
          {
            icon: "shield",
            label: "TOTAL LIBERTAD",
            stat: "Libre Elección",
            description: "Acude a cualquier veterinario de España."
          },
          {
            icon: "clock",
            label: "SIEMPRE PROTEGIDOS",
            stat: "Urgencias 24h",
            description: "Incluye revisión anual preventiva."
          },
          {
            icon: "check",
            label: "MASCOTAS",
            stat: "Perros y Gatos",
            description: "Exclusivo para animales de compañía."
          }
        ]}
      />

      <ProductFeatureSection title="Coberturas del Seguro Sanitas Mascotas">
        <Reveal>
          <h3>Asistencia Veterinaria por enfermedad o accidente</h3>
          <FeatureList items={[
            "Consultas veterinarias: generales, especialistas y urgencias",
            "Hospitalización y cirugías",
            "Pruebas diagnósticas simples y complejas (hasta 1.000€/año)",
            "Medicación administrada en consulta/cirugía y adquirida en el centro veterinario",
            "Ambulancia para animales",
            "Fisioterapia y rehabilitación (5 sesiones/año)",
            "Prótesis e implantes (hasta 200€/año)",
            "Alergias y su tratamiento (hasta 100€/año)",
            "Enfermedades crónicas (hasta 1.000€/año)",
            "Tratamiento dental por accidente"
          ]} />

          <h3>Coberturas exclusivas</h3>
          <FeatureList items={[
            "Orientación veterinaria telefónica 24/7: hasta 6 llamadas/año",
            "Gastos de alojamiento y cuidado de mascota o paseador en caso de hospitalización del asegurado de 48h o inmovilización de más de 5 días",
            "Eutanasia e incineración colectiva (hasta 500€)",
            "Gastos de sacrificio y/o gestión del cadáver (hasta 500€)",
            "Regreso anticipado del asegurado por fallecimiento de la mascota en España"
          ]} />

          <h3>Prevención</h3>
          <FeatureList items={[
            "1 consulta preventiva por año (hasta 50€)"
          ]} />
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="Condiciones de contratación">
        <Reveal>
          <div className="space-y-12">
            <div>
              <h3>Periodos de carencia</h3>
              <p>Los períodos de carencia indican el tiempo que debe transcurrir entre el alta en el seguro y la posibilidad de utilizar determinados servicios. Solo los siguientes servicios tienen periodos de carencia:</p>
              <FeatureList items={[
                "Asistencia veterinaria: 30 días",
                "Eutanasia, castración: 12 meses"
              ]} />
            </div>

            <div>
              <h3>Cuestionario de salud</h3>
              <p>Si deseas contratar una póliza para tu mascota y padece o ha padecido alguna enfermedad, síntoma, lesión o ha tenido una operación, debes declararlo en el cuestionario de salud durante el proceso de contratación. Esto no significa que no puedas solicitar el seguro. El departamento correspondiente te llamará para valorarlo.</p>
            </div>

            <div>
              <h3>Edad asegurable</h3>
              <FeatureList items={[
                "Edad mínima: 3 meses",
                "Edad máxima: 9 años inclusive"
              ]} />
              <p className="mt-4">Una vez que tu mascota haya cumplido los 10 años, si ya tenía contratado el seguro con Sanitas, la póliza se mantiene.</p>
            </div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <FaqSection 
        title="Preguntas frecuentes"
        description="Resolvemos tus dudas sobre el seguro de salud para mascotas de Sanitas."
        faqs={pageFaqs}
      />

      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-3">Información adicional</h2>
            <p className="text-muted-foreground">Descarga la documentación detallada del producto Sanitas Salud Mascotas.</p>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Ficha de producto", file: "Ficha_Sanitas_Mascotas.pdf" },
              { title: "Condiciones Generales — Perros", file: "CCGG_Mascotas_Perros.pdf" },
              { title: "Condiciones Generales — Gatos", file: "CCGG_Mascotas_Gatos.pdf" },
              { title: "Nota Informativa — Perros", file: "Nota_Informativa_Perros.pdf" },
              { title: "Nota Informativa — Gatos", file: "Nota_Informativa_Gatos.pdf" },
              { title: "Contrátalo online", href: "#", external: true }
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a 
                  href={doc.href || "#"} 
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-border/50 hover:border-[#0091DA]/30 hover:shadow-md transition-all h-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA]">
                      {doc.external ? <ExternalLink className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002A54] group-hover:text-[#0091DA] transition-colors">{doc.title}</h4>
                      {!doc.external && <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">PDF · Descargar</p>}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0091DA] transition-all group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection 
        label="¿Hablamos?"
        title="¿Hablamos?"
        description="Cuéntanos qué mascota tienes y resolvemos todas tus dudas sin compromiso."
      />

      <Footer />
    </main>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}
