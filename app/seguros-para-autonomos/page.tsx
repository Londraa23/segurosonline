import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, PriceHighlight, BluaSection } from "@/components/product-sections"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Sanitas Profesionales — Seguro Médico para Autónomos",
  description: "Seguro médico completo para autónomos desde 37,60€/mes. Deducible IRPF, cobertura de accidentes laborales y Blua gratis para siempre.",
  path: "/seguros-para-autonomos"
})

const pageFaqs = [
  { question: "¿Cuánto me puedo deducir exactamente?", answer: "Las primas de tu seguro, la de tu pareja e hijos menores de 25 años convivientes hasta 500€ por persona (1.500€ para personas con discapacidad). Consúltalo con tu gestor." },
  { question: "¿Incluye accidentes laborales?", answer: "Sí. Sanitas Profesionales incluye cobertura ante accidentes de tráfico y laborales — habitualmente excluidos en seguros para autónomos estándar." },
  { question: "¿Qué pasa si me hospitalizan y no puedo trabajar?", answer: "El seguro incluye coberturas de apoyo: reembolso de la prima durante la baja, apoyo doméstico, cuidado de hijos, envío de medicamentos y otras prestaciones mientras estás de baja." },
  { question: "¿Puedo incluir a mi familia?", answer: "Sí. Puedes añadir a tu pareja e hijos, y sus primas también son deducibles fiscalmente como autónomo." }
]

export default function SanitasProfesionalesPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Seguros para Autónomos", item: "https://segurosonline.net/seguros-para-autonomos" }
        ]}
      />
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros para Autónomos", href: "/seguros-para-autonomos" },
          { label: "Sanitas Profesionales" }
        ]}
        label="Sanitas Profesionales"
        h1={<>Sanitas Profesionales.<br className="hidden lg:block" /> El seguro médico del autónomo inteligente.</>}
        body="Cobertura completa, ventajas fiscales reales y protección específica ante la incapacidad temporal. Diseñado por y para autónomos y profesionales independientes."
        badges={["Desde 37,60€/mes", "Deducible IRPF", "Accidentes laborales", "Blua GRATIS"]}
        trustItems={["Deducible fiscalmente", "Accidentes laborales", "Hospitalización completa", "Blua digital"]}
        imageSrc="/inicia.jpg"
      />

      <ProductStatBar stats={[
        { value: "500€", label: "Deducción máx./persona/año" },
        { value: "37,60€", label: "Prima desde (al mes)" },
        { value: "0€", label: "Gastos adicionales por uso" },
        { value: "24h", label: "Urgencias digitales Blua" },
      ]} />

      {/* The fiscal advantage — price highlight */}
      <PriceHighlight
        label="La ventaja fiscal más ignorada del autónomo"
        price="500€"
        unit="/ persona / año"
        features={[
          "Deducible como gasto profesional en el IRPF",
          "Aplica a tu prima, la de tu cónyuge y la de cada hijo menor de 25",
          "1.500€ de límite por persona con discapacidad reconocida",
          "Incluye también la prima de tu familia si la añades a la póliza",
        ]}
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format"
        note="Consulta con tu asesor fiscal cómo aplicarlo a tu situación concreta."
      />

      {/* Medical coverage */}
      <FeatureBlock
        title="Cobertura médica completa. Todo incluido."
        description="Todas las coberturas de Sanitas Más Salud, con accidentes laborales incluidos y servicios de apoyo específicos para cuando no puedes trabajar."
        items={[
          "Medicina primaria y todas las especialidades incluidas",
          "Pruebas diagnósticas simples y de alta tecnología",
          "Intervenciones quirúrgicas y hospitalización completa",
          "Accidentes de tráfico y laborales incluidos de serie",
          "Sanitas Dental 21 incluido",
          "Segunda opinión médica internacional",
        ]}
        imageSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80&auto=format&v=medico"
        badge="Todo incluido"
        bgColor="bg-[#002A54]"
      />

      {/* Unique: services when hospitalized / incapacity */}
      <CoverageCardGrid
        title="Lo que ningún otro seguro de autónomos incluye."
        cards={[
          { icon: "shield", title: "Reembolso de prima durante la baja", description: "Si te hospitalizan, Sanitas te devuelve el importe de la prima mensual durante todo el tiempo que dura la baja." },
          { icon: "star", title: "Auxiliar a domicilio", description: "Un auxiliar va a tu casa para hacerse cargo de las tareas del hogar mientras estás de baja o hospitalizado." },
          { icon: "check", title: "Cuidado de los hijos", description: "Sanitas organiza apoyo escolar a domicilio para tus hijos mientras tú estás hospitalizado y no puedes atenderlos." },
          { icon: "clock", title: "Medicamentos a domicilio", description: "Te envían los medicamentos a casa sin que tengas que ir a la farmacia mientras te recuperas." },
          { icon: "smartphone", title: "Fisioterapia a domicilio", description: "Un fisioterapeuta acude a tu domicilio para el seguimiento de la recuperación sin que debas desplazarte." },
          { icon: "shield", title: "Accidentes laborales cubiertos", description: "Cobertura completa frente a accidentes de tráfico y laborales — habitualmente excluida en seguros médicos para autónomos." },
        ]}
        bgColor="bg-[#001C3D]"
      />

      <BluaSection items={[
        "Videoconsulta con especialistas sin límite — sin salir de tu oficina",
        "Urgencias 24h por videoconsulta sin cita previa",
        "Programas de salud: nutrición, entrenador personal, embarazo y más",
      ]} />

      <FaqSection title="Preguntas sobre Sanitas Profesionales." description="Lo que más nos preguntan otros autónomos." faqs={pageFaqs} />
      <ContactSection label="¿HABLAMOS?" title="Tu salud es parte de tu negocio." description="Te explicamos las coberturas y las ventajas fiscales concretas para tu situación. Sin prisa." />
      <Footer />
    </main>
  )
}
