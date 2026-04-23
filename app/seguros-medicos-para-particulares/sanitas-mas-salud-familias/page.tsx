import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, CoverageCardGrid, BluaSection } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Más Salud Familias — Seguro Médico Familiar Sanitas | Sanitas Ventas",
  description: "Sanitas Más Salud Familias: toda la familia en una póliza. Pediatría, maternidad, hospitalización completa y Blua gratis. 10% dto. desde 4 asegurados.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-mas-salud-familias/" }
}

const pageFaqs = [
  { question: "¿Cuántos miembros puedo incluir?", answer: "No hay límite de miembros. Puedes incluir pareja, hijos y otros familiares directos. Cuantos más asegurados, mayor el ahorro." },
  { question: "¿Puedo añadir al bebé al nacer?", answer: "Sí. Puedes incorporar al recién nacido desde el momento del nacimiento, sin periodo sin cobertura." },
  { question: "¿El descuento del 10% es permanente?", answer: "Sí, es vitalicio mientras la póliza mantenga 4 o más asegurados y esté al corriente de pago." },
  { question: "¿Incluye maternidad y parto?", answer: "Sí. El periodo de carencia para parto es de 8 meses, eliminable si llevas +1 año en otra compañía de cobertura completa." }
]

export default function SanitasMasSaludFamiliasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Más Salud Familias" }
        ]}
        label="Sanitas Más Salud Familias"
        h1={<>Sanitas Más Salud Familias.<br className="hidden lg:block" /> Tu familia, protegida de verdad.</>}
        body="Toda la familia bajo una sola póliza con las mismas coberturas completas de Sanitas Más Salud. Pediatría, maternidad, hospitalización, y Blua para todos. Y cuantos más seáis, más ahorráis."
        badges={["10% dto. desde 4 asegurados", "Blua GRATIS para todos", "Dental 21 incluido"]}
        trustItems={["Pediatría incluida", "Maternidad", "Hospitalización completa", "10% dto. vitalicio"]}
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "10%", label: "Dto. vitalicio desde 4 asegurados" },
        { value: "4%", label: "Dto. adicional pago anual" },
        { value: "58.000+", label: "Médicos en España" },
        { value: "24h", label: "Urgencias digitales Blua" },
      ]} />

      <FeatureBlock
        title="Las mismas coberturas de Más Salud, para todos."
        description="Cada miembro de la familia tiene acceso a la cobertura completa de Sanitas Más Salud, sin restricciones por edad ni condición."
        items={[
          "Medicina primaria: medicina general, pediatría, enfermería, urgencias",
          "Acceso a todas las especialidades sin restricciones",
          "Pruebas diagnósticas simples y de alta tecnología",
          "Intervenciones quirúrgicas con o sin ingreso hospitalario",
          "Hospitalización completa con habitación privada",
          "Seguimiento de embarazo, parto y postparto incluidos",
        ]}
        imageSrc="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&q=80&auto=format"
        badge="Coberturas Familiares"
      />

      <CoverageCardGrid
        title="Protección para cada etapa de la vida familiar."
        cards={[
          { icon: "shield", title: "Pediatría incluida", description: "Médico de cabecera pediátrico, urgencias infantiles y todas las especialidades pediátricas disponibles desde el primer día." },
          { icon: "star", title: "Maternidad completa", description: "Seguimiento de embarazo, parto, cesárea y postparto cubiertos con cobertura hospitalaria completa." },
          { icon: "check", title: "Dental 21 para todos", description: "Cada miembro de la familia tiene su propio acceso a Sanitas Dental 21: 25 servicios incluidos y 21% de descuento en el resto." },
          { icon: "clock", title: "10% dto. vitalicio", description: "Desde el cuarto asegurado, el 10% de descuento se aplica a toda la póliza y se mantiene para siempre." },
          { icon: "smartphone", title: "Blua para cada miembro", description: "Videoconsulta, urgencias 24h y programas de salud digitales para cada uno de los asegurados incluidos en la póliza." },
          { icon: "shield", title: "Sin límite de miembros", description: "Añade todos los familiares que necesites: pareja, hijos, otros. Sin límite en el número de asegurados." },
        ]}
      />

      <BluaSection items={[
        "Videoconsulta con especialistas para cada miembro de la familia",
        "Urgencias 24h sin cita previa, también para atención pediátrica",
        "Programas digitales personalizados: embarazo, salud infantil, nutrición, psicología",
      ]} />

      <FeatureBlock
        title="Cuantos más seáis, más ahorráis."
        description="El descuento crece con la familia y se mantiene para siempre."
        items={[
          "10% de descuento vitalicio sobre la prima neta desde 4 asegurados",
          "El descuento se mantiene mientras la póliza esté vigente con 4+ asegurados",
          "4% adicional por pago anual",
          "Aplicable también en combinación con Más 90.000 y TOP QUANTUM",
          "Añade al bebé al nacer sin periodo de espera para coberturas básicas",
        ]}
        imageSrc="https://images.unsplash.com/photo-1609220136736-443140cfeaa5?w=900&q=80&auto=format"
        reverse
        badge="Descuento Familiar"
      />

      <FaqSection
        title="Preguntas sobre Sanitas Más Salud Familias."
        description="Dudas comunes sobre el seguro médico familiar."
        faqs={pageFaqs}
      />

      <ContactSection
        label="¿HABLAMOS?"
        title="Protege a los tuyos."
        description="Cuéntanos cuántos sois y calculamos el mejor precio para tu familia. Sin compromiso."
      />
      <Footer />
    </main>
  )
}
