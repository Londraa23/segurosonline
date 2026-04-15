import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import {
  ProductStatBar, WhiteCardGrid, BluaSection, FeatureBlock, LegalNote
} from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Accede — Seguro Médico Privado en Madrid | Sanitas Ventas",
  description: "Sanitas Accede: accede a 51.000 médicos, 4.200 centros y Blua gratis. Consultas ilimitadas, pruebas diagnósticas y urgencias 24h. Desde Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-accede/" }
}

const pageFaqs = [
  { question: "¿Sanitas Accede incluye hospitalización?", answer: "No. Sanitas Accede está diseñado como seguro de acceso y no incluye hospitalización ni intervenciones quirúrgicas. Para cobertura hospitalaria, te recomendamos Sanitas Avanza o Sanitas Más Salud." },
  { question: "¿Cuál es la edad máxima para contratar?", answer: "La edad máxima de contratación es de 59 años. No existe, sin embargo, edad máxima de permanencia: puedes mantener tu póliza activa más allá de esa edad." },
  { question: "¿Tiene periodos de carencia?", answer: "No. Sanitas Accede no tiene periodos de carencia, por lo que puedes usar el seguro desde el primer día de alta." },
  { question: "¿Blua está incluido gratis?", answer: "Sí. Blua está incluido sin coste adicional: videoconsulta con más de 3.100 médicos, urgencias 24h por videoconsulta sin cita previa y programas de salud digitales." }
]

export default function SanitasAccedePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Accede" }
        ]}
        label="Sanitas Accede · Sin carencias"
        h1={<>Accede a la sanidad<br className="hidden lg:block" /> privada desde el primer día.</>}
        body="Con Sanitas Accede tienes acceso a más de 51.000 médicos y 4.200 centros en toda España, incluyendo 4 hospitales propios. Sin periodos de carencia: usas el seguro el mismo día que contratas."
        badges={["Sin carencias", "51.000 médicos", "Blua gratis"]}
        trustItems={["Consultas ilimitadas", "Pruebas diagnósticas", "Dental básico", "Urgencias sin copago"]}
        imageSrc="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "51.000+", label: "Médicos en España" },
        { value: "4.200", label: "Centros médicos" },
        { value: "0", label: "Periodos de carencia" },
        { value: "24h", label: "Urgencias por videoconsulta" },
      ]} />

      <WhiteCardGrid
        title="¿Por qué elegir Sanitas Accede?"
        subtitle="El acceso más asequible a la red médica privada más grande de España, con todas las coberturas esenciales incluidas desde el primer día."
        cards={[
          { icon: "shield", title: "Sin periodos de carencia", description: "Usas el seguro el mismo día que contratas. Sin esperas, sin exclusiones temporales." },
          { icon: "clock", title: "Cita en menos de 24h", description: "En la mayoría de especialidades del cuadro médico Sanitas, cita disponible antes de 24 horas." },
          { icon: "check", title: "Todas las especialidades", description: "Cardiología, dermatología, ginecología, pediatría, oftalmología, traumatología y muchas más." },
          { icon: "smartphone", title: "Blua digital incluido gratis", description: "Videoconsulta ilimitada con especialistas y urgencias 24h sin cita previa desde tu móvil." },
          { icon: "star", title: "El precio de entrada Sanitas", description: "El acceso más asequible a toda la red médica Sanitas, sin renunciar a la calidad." },
          { icon: "shield", title: "Ampliable sin perder antigüedad", description: "Si en el futuro necesitas hospitalización, amplías sin empezar una nueva póliza desde cero." },
        ]}
      />

      <BluaSection items={[
        "Videoconsulta con más de 3.100 médicos de todas las especialidades, sin límite",
        "Urgencias por videoconsulta 24h, sin cita previa, también para atención pediátrica",
        "Gestiones online: citas, autorizaciones, resultados desde la app Mi Sanitas",
      ]} />

      <FeatureBlock
        title="La red médica más grande de España."
        description="Accede a más de 4.200 centros médicos en toda España — hospitales propios, centros Milenium exclusivos y centros concertados."
        items={[
          "4 hospitales propios de Sanitas",
          "20 centros médicos Milenium exclusivos en las principales ciudades",
          "Más de 4.200 centros concertados en toda España",
          "Cita online o presencial, tú eliges",
          "Historia clínica digital y resultados en la app Mi Sanitas",
        ]}
        imageSrc="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80&auto=format"
        badge="Red Médica Sanitas"
        reverse
      />

      <LegalNote>
        Edad máxima de contratación: 59 años. Sin edad máxima de permanencia. Este producto no cuenta con periodos de carencia. El cómputo de los servicios se realiza por asegurado y año.
      </LegalNote>

      <FaqSection title="Preguntas sobre Sanitas Accede." description="Resolvemos tus dudas sobre coberturas y funcionamiento." faqs={pageFaqs} />
      <ContactSection label="¿EMPEZAMOS?" title="Sin compromiso y sin letra pequeña." description="Cuéntanos tu situación y te confirmamos si Sanitas Accede es el tuyo." />
      <Footer />
    </main>
  )
}
