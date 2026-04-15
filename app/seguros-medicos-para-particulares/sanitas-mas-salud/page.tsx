import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, ComparisonTable, BluaSection, ThreeColumnFeatures, LegalNote } from "@/components/product-sections"

export const metadata: Metadata = {
  title: "Sanitas Más Salud — Seguro Médico Completo con y sin Copago | Sanitas Ventas Madrid",
  description: "Sanitas Más Salud: cobertura sanitaria completa, hospitalización, Dental 21 incluido y Blua gratis. Con o sin copago. 10% dto. desde 4 asegurados. Madrid. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/sanitas-mas-salud/" }
}

const pageFaqs = [
  { question: "¿Cuál es la diferencia entre Más Salud y Más Salud Óptima?", answer: "Las coberturas son exactamente las mismas. La diferencia está en la prima mensual y la estructura de copagos: Óptima tiene la prima más económica pero copagos ligeramente superiores al usar el seguro." },
  { question: "¿Incluye maternidad y parto?", answer: "Sí. Sanitas Más Salud incluye seguimiento de embarazo, parto y postparto. Carencia de 8 meses para parto, eliminable si llevas +1 año en otra compañía." },
  { question: "¿El Dental 21 cubre todos los tratamientos?", answer: "Sanitas Dental 21 incluye 25 servicios en cobertura completa más hasta un 21% de descuento en el resto de tratamientos dentales." },
  { question: "¿Puedo añadir más asegurados después?", answer: "Sí, en cualquier momento. Al llegar a 4 o más asegurados el descuento del 10% vitalicio se aplica automáticamente." }
]

export default function SanitasMasSaludPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares", href: "/seguros-medicos-para-particulares" },
          { label: "Sanitas Más Salud" }
        ]}
        label="Sanitas Más Salud"
        h1={<>Sanitas Más Salud.<br className="hidden lg:block" /> Cobertura completa. Con o sin copago.</>}
        body="El seguro más elegido de Sanitas. Asistencia sanitaria completa con hospitalización, todas las especialidades, Sanitas Dental 21 y Blua digital gratis. Tú decides si prefieres pagar copago o no — las coberturas son exactamente las mismas."
        badges={["Blua GRATIS", "Dental 21 incluido", "10% dto. desde 4 asegurados"]}
        trustItems={["Hospitalización completa", "Dental 21 incluido", "Con o sin copago", "Blua digital"]}
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "58.000+", label: "Médicos en España" },
        { value: "25", label: "Servicios dentales incluidos" },
        { value: "10%", label: "Dto. desde 4 asegurados" },
        { value: "2", label: "Modalidades (con/sin copago)" },
      ]} />

      {/* What's inside — image left */}
      <FeatureBlock
        title="Cobertura completa de la consulta al quirófano."
        description="Sanitas Más Salud lo incluye todo: del médico de cabecera a la hospitalización, del especialista a las pruebas más avanzadas."
        items={[
          "Medicina primaria: medicina general, pediatría, enfermería, urgencias",
          "Todas las especialidades sin restricciones: cardiología, ginecología, oncología, psiquiatría y más",
          "Pruebas diagnósticas: análisis, ecografías, resonancias, TAC, endoscopias",
          "Intervenciones quirúrgicas con o sin ingreso hospitalario",
          "Hospitalización completa con habitación privada",
          "Seguimiento de embarazo, parto y postparto",
        ]}
        imageSrc="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=900&q=80&auto=format"
        badge="Coberturas Principales"
      />

      {/* The key differentiator: comparison table copago vs no copago */}
      <ComparisonTable
        title="Con copago o sin copago — tú eliges."
        subtitle="Las coberturas son exactamente las mismas en ambas modalidades. La diferencia está en la prima y si pagas algo al usar el seguro."
        colA="Con copago (Óptima)"
        colB="Sin copago (Más Salud)"
        rows={[
          { feature: "Prima mensual", withCopago: "Más económica", withoutCopago: "Prima estándar" },
          { feature: "Pago al visitar al médico", withCopago: "Sí, pequeño copago", withoutCopago: "No" },
          { feature: "Hospitalización", withCopago: true, withoutCopago: true },
          { feature: "Todas las especialidades", withCopago: true, withoutCopago: true },
          { feature: "Dental 21 incluido", withCopago: true, withoutCopago: true },
          { feature: "Blua digital gratis", withCopago: true, withoutCopago: true },
          { feature: "Segunda opinión médica", withCopago: true, withoutCopago: true },
          { feature: "Urgencias en el extranjero", withCopago: "hasta 12.000€/año", withoutCopago: "hasta 12.000€/año" },
        ]}
      />

      {/* Three columns for extras */}
      <ThreeColumnFeatures
        title="Más ventajas incluidas."
        columns={[
          { title: "Sanitas Dental 21", body: "Acceso a más de 200 centros Milenium Dental. 25 servicios cubiertos al 100% y hasta un 21% de descuento en el resto." },
          { title: "Segunda opinión médica", body: "Acceso a especialistas internacionales de reconocido prestigio para los casos más complejos. Gestionado por Sanitas." },
          { title: "10% dto. vitalicio", body: "Desde 4 asegurados, el 10% de descuento se aplica a toda la póliza y se mantiene mientras permanezca activa. Más 4% por pago anual." },
        ]}
        bgColor="bg-[#002A54]"
      />

      <BluaSection items={[
        "Videoconsulta con todas las especialidades, sin límite de consultas",
        "Urgencias por videoconsulta 24h sin cita previa",
        "Programas de salud: nutrición, entrenador personal, embarazo, salud infantil",
      ]} />

      {/* Dental/family image block */}
      <FeatureBlock
        title="El seguro más elegido en España. Por algo será."
        description="Sanitas Más Salud es, año tras año, el seguro médico más contratado de Sanitas por particulares."
        items={[
          "La cobertura más completa al precio más accesible de Sanitas",
          "Más de 10 millones de asegurados confían en Sanitas",
          "Sin permanencia mínima — cancelas cuando quieras",
          "Sin periodos de carencia si llevas +1 año en otra compañía completa",
        ]}
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80&auto=format"
        reverse
        badge="El más popular"
        bgColor="bg-[#001C3D]"
      />

      <FaqSection title="Preguntas sobre Sanitas Más Salud." description="Todo lo que necesitas saber sobre el seguro más elegido." faqs={pageFaqs} />
      <ContactSection label="¿HABLAMOS?" title="El más elegido. Por algo será." description="Te ayudamos a elegir entre Más Salud y Más Salud Óptima según tu perfil. Sin compromiso." />
      <Footer />
    </main>
  )
}
