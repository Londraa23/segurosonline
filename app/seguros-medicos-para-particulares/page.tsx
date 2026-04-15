import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { CategoryProductGrid, ProductCardData } from "@/components/category-product-grid"
import { CopagoComparison } from "@/components/copago-comparison"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { generateMetadata } from "@/lib/metadata"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = generateMetadata({
  title: "Seguros Médicos para Particulares Sanitas en Madrid",
  description: "Encuentra el seguro médico Sanitas para particulares que mejor se adapta a ti. Con o sin copago, con reembolso, con Blua incluido gratis.",
  path: "/seguros-medicos-para-particulares"
})

const productosCuadroMedico: ProductCardData[] = [
  {
    title: "Sanitas Accede",
    label: "Cuadro médico · Entrada",
    tagline: "Accede a tu primer seguro de salud",
    description: "El seguro de entrada más completo del mercado. Médico de cabecera, urgencias, pruebas básicas y toda la potencia de Blua digital desde el primer día.",
    features: ["Médico de cabecera y urgencias 24h", "Pruebas diagnósticas básicas incluidas", "Blua digital completo incluido", "El precio más accesible de Sanitas"],
    href: "/seguros-medicos-para-particulares/sanitas-accede/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Avanza",
    label: "Cuadro médico · Sin hospitalización",
    tagline: "El único seguro sin hospitalización con cobertura quirúrgica",
    description: "Acceso completo al cuadro médico Sanitas con la particularidad de incluir cobertura de intervención quirúrgica sin hospitalización. Flexible y más económico.",
    features: ["Cuadro médico completo", "Intervención quirúrgica incluida", "Sin cobertura de hospitalización", "Blua digital incluido gratis"],
    href: "/seguros-medicos-para-particulares/sanitas-avanza/",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Más Salud",
    label: "Cuadro médico · Cobertura completa",
    badge: "MÁS POPULAR",
    tagline: "Seguro de salud completo, con y sin copago",
    description: "El seguro más elegido de Sanitas. Cobertura sanitaria completa con hospitalización, con opción de copago o sin él. Para quienes quieren lo mejor sin sorpresas.",
    features: ["Hospitalización completa incluida", "Con o sin copago, tú decides", "Todo el cuadro médico Sanitas", "Blua digital gratis para siempre"],
    href: "/seguros-medicos-para-particulares/sanitas-mas-salud/",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80&auto=format",
    highlighted: true
  },
  {
    title: "Sanitas TOP QUANTUM",
    label: "Cuadro médico · Sin copago · Premium",
    tagline: "Seguro de salud sin copagos",
    description: "La versión más premium del cuadro médico Sanitas. Sin copagos en ningún servicio, cobertura total y acceso prioritario. Para quienes no quieren pagar nada extra nunca.",
    features: ["Sin copagos en ningún servicio", "Cobertura sanitaria total", "Atención prioritaria garantizada", "Blua digital incluido"],
    href: "/sanitas-top-quantum/",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Más Salud Familias",
    label: "Cuadro médico · Para toda la familia",
    tagline: "Un seguro pensado para toda la familia",
    description: "Toda la familia protegida bajo una misma póliza. Las mismas coberturas de Sanitas Más Salud adaptadas para que cuidar a los tuyos sea más fácil y más económico.",
    features: ["Toda la familia en una sola póliza", "Mismas coberturas que Sanitas Más Salud", "10% dto. desde 4 asegurados", "Pediatría y urgencias incluidas"],
    href: "/seguros-medicos-para-particulares/sanitas-mas-salud-familias/",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Profesionales",
    label: "Cuadro médico · Autónomos",
    tagline: "El seguro médico para autónomos más completo",
    description: "Diseñado específicamente para autónomos y profesionales independientes. Deducible fiscalmente, con todas las coberturas que necesitas y ventajas exclusivas.",
    features: ["Deducible como gasto profesional", "Cobertura completa sin lagunas", "Atención sin esperas", "Blua digital incluido"],
    href: "/seguros-medicos-para-particulares/sanitas-profesionales/",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Único",
    label: "Cuadro médico · Mayores de 60",
    tagline: "Seguro médico a partir de 60 años, sin límite de edad",
    description: "El seguro pensado para quienes han superado los 60. Sin límite de edad máxima, con cobertura adaptada a las necesidades de salud de cada etapa de la vida.",
    features: ["Sin límite de edad máxima", "Cobertura adaptada a mayores", "Acceso a especialistas sin barreras", "Blua digital incluido"],
    href: "/seguros-medicos-para-particulares/sanitas-unico/",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Inclusivo",
    label: "Cuadro médico · Discapacidad",
    tagline: "Dando pasos para la inclusión",
    description: "El seguro médico diseñado para personas con discapacidad. Cobertura adaptada, accesibilidad garantizada y atención personalizada en cada momento.",
    features: ["Cobertura adaptada a cada necesidad", "Accesibilidad total garantizada", "Especialistas en diversidad funcional", "Atención personalizada siempre"],
    href: "/seguros-medicos-para-particulares/sanitas-inclusivo-discapacidad/",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&auto=format",
  },
  {
    title: "Néctar Contigo",
    label: "Cuadro médico · A medida",
    tagline: "Asistencia sanitaria completa a un precio a medida",
    description: "Flexibilidad total para construir el seguro exactamente a tu medida. Elige las coberturas que necesitas y paga solo por lo que usas.",
    features: ["Coberturas totalmente personalizables", "Precio ajustado a lo que eliges", "Cuadro médico Sanitas completo", "Blua digital incluido"],
    href: "/seguros-medicos-para-particulares/nectar-contigo/",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Más Salud Extranjeros",
    label: "Cuadro médico · Extranjeros en España",
    tagline: "Seguro médico en España para extranjeros",
    description: "Pensado para extranjeros residentes en España. Cobertura sanitaria completa, válida para visado y residencia, con toda la red médica Sanitas disponible desde el primer día.",
    features: ["Válido para solicitud de visado y residencia", "Cobertura sanitaria completa en España", "Acceso inmediato al cuadro médico", "Atención en varios idiomas"],
    href: "/seguros-medicos-para-particulares/sanitas-mas-salud-extranjeros/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format",
  }
]

const productosReembolso: ProductCardData[] = [
  {
    title: "Sanitas Premium 500.000",
    label: "Reembolso · Cobertura máxima",
    tagline: "Seguro de reembolso con la mayor cobertura",
    description: "El techo más alto del mercado. Hasta 500.000€ por persona y año, con reembolso de farmacia, dental, subsidio por hospitalización y cobertura en EE.UU.",
    features: ["Reembolso hasta 500.000€/año", "Cubre farmacia y gastos dentales", "Subsidio por hospitalización", "Cobertura internacional EE.UU. incluida"],
    href: "/seguros-medicos-para-particulares/sanitas-premium-500-000/",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas TOP QUANTUM",
    label: "Reembolso · Sin copagos",
    tagline: "Seguro completo con reembolso y sin copagos",
    description: "Lo mejor de los dos mundos: cuadro médico Sanitas completo, sin copagos, y reembolso de gastos médicos fuera del cuadro. Sin límites innecesarios.",
    features: ["Sin copagos en el cuadro médico", "Reembolso de gastos fuera del cuadro", "Cobertura sanitaria total", "Blua digital incluido"],
    href: "/sanitas-top-quantum/",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas Más 90.000",
    label: "Reembolso · Libertad de elección",
    tagline: "El médico que tú decidas, al precio de siempre",
    description: "Cuadro médico Sanitas completo más libertad total de elección: si prefieres un médico fuera del cuadro, Sanitas te reembolsa el 70% de los gastos hasta 90.000€/año.",
    features: ["Cuadro médico + reembolso combinados", "Reembolso 70% hasta 90.000€/año", "Elección libre de médico en España e internacional", "Blua digital incluido"],
    href: "/seguros-medicos-para-particulares/sanitas-mas-90000/",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80&auto=format",
  },
  {
    title: "Sanitas International Residents",
    label: "Reembolso · Extranjeros",
    tagline: "Seguro de salud para extranjeros en España",
    description: "Diseñado para residentes extranjeros en España que necesitan cobertura sanitaria completa homologada. Reembolso de gastos médicos y acceso al cuadro Sanitas.",
    features: ["Válido para residencia y renovación de visado", "Reembolso de gastos médicos incluido", "Cuadro médico Sanitas disponible", "Atención multilingüe"],
    href: "/seguros-medicos-para-extranjeros/sanitas-international-residents/",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format",
  }
]

const productosEstudiantes: ProductCardData[] = [
  {
    title: "Sanitas Estudiantes",
    label: "Estudiantes · Internacional",
    tagline: "Asistencia sanitaria para jóvenes en el extranjero",
    description: "Protección sanitaria completa para estudiantes que realizan estancias fuera de España, ya sea por Erasmus, máster o cualquier programa internacional.",
    features: ["Cobertura sanitaria en el país de destino", "Urgencias y hospitalización incluidas", "Repatriación sanitaria si es necesaria", "Asistencia 24h en varios idiomas"],
    href: "/seguros-para-estudiantes/sanitas-estudiantes/",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80&auto=format",
  }
]

const pageFaqs = [
  { question: "¿Qué diferencia hay entre cuadro médico y reembolso?", answer: "Con el seguro de cuadro médico accedes a los médicos y centros que forman parte de la red Sanitas. Con el seguro de reembolso puedes ir a cualquier médico de tu elección, aunque no pertenezca a Sanitas, y la compañía te devuelve un porcentaje de los gastos. Algunos seguros combinan ambas modalidades, como el Sanitas Más 90.000 o el TOP QUANTUM." },
  { question: "¿Puedo cambiarme a Sanitas desde otra aseguradora sin perder coberturas?", answer: "Sí. Si llevas al menos 1 año con un seguro de salud de cobertura completa en otra compañía española, puedes eliminar los periodos de carencia de tu nueva póliza Sanitas (excepto parto). Solo necesitas aportar tus condiciones particulares y el último recibo de la póliza anterior." },
  { question: "¿Cuánto tarda en activarse el seguro?", answer: "La mayoría de coberturas se activan desde la fecha de efecto que elijas, habitualmente el mismo mes de contratación. Coberturas como parto o psiquiatría tienen periodos de carencia propios, salvo que los elimines por traslado." },
  { question: "¿Puedo contratar si tengo enfermedades previas?", answer: "Sí puedes contratar. Sanitas realiza un cuestionario de salud previo. Algunas preexistencias pueden quedar excluidas, pero el resto de coberturas funcionan con normalidad desde el primer día." },
  { question: "¿Hay descuentos por incluir a varios miembros de la familia?", answer: "Sí. Las pólizas con 4 o más asegurados en Sanitas Más Salud, Más 90.000 y TOP QUANTUM tienen un descuento del 10% vitalicio sobre la prima neta. El pago anual añade un 4% más de descuento." },
  { question: "¿Qué es Blua y está realmente gratis?", answer: "Blua es la plataforma digital de salud de Sanitas. Incluye videoconsulta con especialistas, psicología digital, fisioterapia online, evaluador de síntomas y programas de embarazo, nutrición y entrenamiento. Está incluida en todos los seguros Sanitas para particulares sin ningún coste adicional, para siempre." },
]

export default function ParticularesPage() {
  return (
    <main className="min-h-screen">
      <SchemaMarkup 
        faqs={pageFaqs}
        breadcrumbs={[
          { name: "Inicio", item: "https://segurosonline.net" },
          { name: "Seguros Médicos", item: "https://segurosonline.net/#seguros" },
          { name: "Para Particulares", item: "https://segurosonline.net/seguros-medicos-para-particulares" }
        ]}
      />
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros Médicos", href: "/seguros-medicos" },
          { label: "Para Particulares" }
        ]}
        label="Seguros Médicos · Para Particulares"
        h1={<>Seguro médico privado <br className="hidden lg:block"/> para particulares.</>}
        body="Elige el seguro de salud Sanitas que mejor se adapta a ti y a tu familia. Con o sin copago, con reembolso o cuadro médico, con Blua digital incluido gratis para siempre. Te asesoramos sin ningún compromiso."
        badges={["Blua GRATIS para siempre", "4% dto. pago anual", "Sin periodos de carencia si vienes de otra compañía"]}
        trustItems={["57.000+ médicos", "4.500 centros", "5 hospitales", "Sin permanencia"]}
        imageSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80&auto=format"
      />

      {/* Cuadro Médico Section */}
      <CategoryProductGrid 
        title="Seguros de cuadro médico"
        description="Accede al cuadro médico más amplio de España. Elige médico, especialidad y centro entre miles de opciones disponibles en todo el territorio nacional."
        products={productosCuadroMedico}
      />

      <CopagoComparison 
        title="¿Con o sin copago? Te lo explicamos."
        leftTitle="Seguro con copago"
        leftDescription="La prima mensual es más económica. Pagas una pequeña cantidad cada vez que usas el seguro — normalmente entre 1€ y 3€ por consulta o prueba. Ideal si quieres acceso a la sanidad privada con el coste mensual más ajustado posible."
        leftPoints={[
          "Prima mensual más reducida",
          "Mismo cuadro médico completo",
          "Blua incluido sin coste extra"
        ]}
        rightTitle="Seguro sin copago"
        rightDescription="La prima mensual es algo más alta, pero cada vez que usas el seguro no pagas nada adicional. Sin sorpresas, sin calcular. Especialmente recomendado para familias o quienes prevén un uso frecuente de los servicios médicos."
        rightPoints={[
          "Cero costes al usar el seguro",
          "Ideal para familias",
          "Gasto mensual fijo y predecible",
          "Blua incluido gratis"
        ]}
      />

      {/* Reembolso Section */}
      <CategoryProductGrid 
        title="Seguros de reembolso"
        description="Elige cualquier médico de España o del mundo. Sanitas te reembolsa los gastos según tu cobertura contratada."
        products={productosReembolso}
      />

      {/* Estudiantes Section */}
      <CategoryProductGrid 
        title="Seguros para estudiantes"
        description="Para jóvenes que estudian fuera de España. Cobertura completa durante toda su estancia en el extranjero."
        products={productosEstudiantes}
      />

      <FaqSection 
        title="Lo que más nos preguntan sobre seguros para particulares."
        description="Respuestas rápidas a las dudas más comunes antes de contratar."
        faqs={pageFaqs}
      />

      <ContactSection 
        label="¿HABLAMOS?"
        title="Te asesoramos gratis, sin compromiso."
        description="Nuestros asesores te ayudan a encontrar el seguro perfecto para ti y tu familia. Sin presiones, sin letra pequeña."
      />

      <Footer />
    </main>
  )
}
