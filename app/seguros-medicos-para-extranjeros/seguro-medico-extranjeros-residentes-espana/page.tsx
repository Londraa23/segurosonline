import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FeatureBlock, BluaSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Más Salud Extranjeros — Seguro Médico para Extranjeros | Sanitas Ventas",
  description: "Sanitas Más Salud para extranjeros: cobertura completa sin copago válida para visado y residencia. Hospitalización, dental 32 servicios y Blua gratis.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-extranjeros/seguro-medico-extranjeros-residentes-espana/" }
}

const pageFaqs = [
  { question: "¿Este seguro es válido para todos los tipos de visado?", answer: "Está diseñado para cumplir los requisitos de cobertura completa exigidos para residencia comunitaria, visados de estudios y ciudadanía UE. Consúltanos con tu tipo de visado concreto para confirmarlo antes de contratar." },
  { question: "¿Puedo contratar sin tener NIE todavía?", answer: "Sí. Sanitas Más Salud Extranjeros permite la contratación con pasaporte. Es uno de sus puntos clave para personas que acaban de llegar a España y aún no tienen NIE." },
  { question: "¿Tiene copago cuando voy al médico?", answer: "No. No hay copagos ni franquicias de ningún tipo. El único pago es la prima mensual o anual." },
  { question: "¿Incluye cobertura dental?", answer: "Sí. Incluye cobertura dental con 32 servicios incluidos, lo que es más amplio que la cobertura dental de la mayoría de seguros estándar de Sanitas." },
  { question: "¿Puedo incluir a mis familiares?", answer: "Sí. El seguro está pensado para extranjeros residentes, sus familiares y estudiantes en España. Puedes incluir a tu pareja e hijos en la misma póliza." },
  { question: "¿Qué pasa si necesito atención médica fuera de España?", answer: "Dispones de cobertura de urgencias en viajes al extranjero para estancias de hasta 90 días, con un límite de 12.000€. Para asistencia urgente en el extranjero llama al +34 91 345 65 84." },
  { question: "¿Hay periodos de carencia?", answer: "Sí, como en todos los seguros médicos. La mayoría de coberturas están disponibles desde el primer día o con carencias cortas. Puedes eliminarlo si llevas al menos 1 año en otra compañía de cobertura completa al contratar (excepto parto)." }
]

export default function MasSaludExtranjerosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Extranjeros", href: "/seguros-medicos-para-extranjeros" },
          { label: "Sanitas Más Salud Extranjeros" }
        ]}
        label="Válido para visado y residencia · Sin copago · Sin límite gastos"
        h1={<>Sanitas Más Salud Extranjeros.<br className="hidden lg:block" /> El seguro médico ideal para vivir en España.</>}
        body="Diseñado para extranjeros que residen en España, sus familiares y estudiantes. Cobertura sanitaria completa sin copagos, válida para solicitar y renovar visado y permiso de residencia. Hospitalización en habitación individual, sin límite de gastos médicos al año y Blua digital incluido gratis."
        badges={["Sin límite gastos", "Apto tramites extranjería"]}
        trustItems={["Válido para residencia", "Sin copago", "Hospitalización incluida", "Contratación con pasaporte"]}
        imageSrc="https://images.unsplash.com/photo-1555529902-5261145633bf?w=1600&q=80&auto=format"
      />

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-5">
              ¿Qué puedes obtener con este seguro?
            </h2>
            <p className="text-lg text-gray-600">
              Absoluta concordancia legal para trámites de derecho migratorio sin sacrificar calidad asistencial Premium.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cobertura completa: urgencias, ambulatoria y hospitalaria",
              "Válido por ley para solicitud de visado y residencia comunitaria",
              "Seguro pleno SIN LÍMITE de gastos médicos cubiertos al año",
              "Repatriación íntegra incluida en caso de fallecimiento fortuito",
              "Fácil contratación validada directamente con Pasaporte",
              "Aportación de COPAGO CERO (0€) en toda consulta ordinaria",
              "Habitación privada garantizada y cama propia acompañante",
              "Desplazamientos y urgencias extranjeras amparadas hasta 12.000€",
              "Dominio digital interactivo nativo con la app Mi Sanitas incluida"
            ].map((punto, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 h-full hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 rounded-xl bg-[#0091DA]/10 flex items-center justify-center shrink-0">
                     <Check className="w-5 h-5 text-[#0091DA] stroke-[3]" />
                   </div>
                   <p className="text-gray-800 font-medium leading-snug">{punto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureBlock
        title="La asistencia más completa que un extranjero necesita."
        description="Pone a tu disposición un marco estructural de más de 45.000 profesionales, 4.200 centros y 4 macrohospitales en red propia para que vivir en España sea pacífico y resolutivo."
        items={[
          "Medicina Primaria y Especialidades Íntegras",
          "Alta tecnología diagnóstica: T.A.C, endoscopias corporales o resonancias",
          "Hospitalización con intervenciones quirúrgicas complejas",
          "Urgencias en el extranjero activas para tus escapes o retornos (90 días)",
          "Asistencia Dental Superior (32 servicios cubiertos preventivos y activos)",
          "Segunda Opinión Inter-continental"
        ]}
        imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format"
        badge="Red Sanitas Integrada"
        reverse
        bgColor="bg-gray-50"
      />

      {/* Contract conditions grid */}
      <section className="py-16 bg-[#002A54] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Condiciones de contratación legales</h2>
            <p className="text-white/80 max-w-2xl text-lg">Para cumplir exhaustivamente los apartados de extranjería, validamos el papeleo con exigencia pero total agilidad en el uso:</p>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs mb-1">Edades Restringidas</p>
                <div className="text-lg font-medium leading-tight">Sin límite de acceso ni de permanencia (∞).</div>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs mb-1">Identificación Admitida</p>
                <div className="text-lg font-medium leading-tight">Pasaporte, NIE definitivo, NIF provisional o CIF empresarial validado.</div>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs mb-1">Pagos Mensuales Extraordinarios</p>
                <div className="text-lg font-medium leading-tight">Sin coste oculto (copago: ninguno), y -4% anual abonado.</div>
             </div>
             <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <p className="text-yellow-400 font-bold uppercase tracking-wider text-xs mb-1">Urgencias Exteriores</p>
                <div className="text-lg font-medium leading-tight">Atención remota permanente 24h/365d de regreso temporal (90 días amparado).</div>
             </div>
          </div>
        </div>
      </section>

      <BluaSection items={[
        "Consultas online de seguimiento postquirurgico y diagnóstico sin ir de urgencia",
        "Atención telefónica Welcome especial ininterrumpida bilingüe para gestiones",
        "Programas de entrenamiento remoto al emigrar"
      ]} />

      <FaqSection title="Preguntas sobre Más Salud Extranjeros" description="Elimina dudas frecuentes antes de tus papeleos transnacionales." faqs={pageFaqs} />
      
      <ContactSection 
        label="Bienvenido a España. Tu salud, en buenas manos." 
        title="¿Te llamamos velozmente?" 
        description="Te ayudamos a contratar de inmediato la póliza y generar tu documentación sellada obligatoria para los trámites de residencia o visado estudiantil y civil. Sin sorpresas." 
      />
      <Footer />
    </main>
  )
}
