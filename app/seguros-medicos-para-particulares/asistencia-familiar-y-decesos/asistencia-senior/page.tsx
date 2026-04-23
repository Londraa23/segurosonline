import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ProductStatBar, FeatureBlock, WhiteCardGrid, ThreeColumnFeatures, LegalNote, ProductFeatureSection } from "@/components/product-sections"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Asistencia Senior Prima Única — Seguro de Decesos para Mayores de 75 | Sanitas Ventas",
  description: "Asistencia Senior a prima única para mayores de 75 años. Un solo pago, cobertura completa por fallecimiento, gestión integral funeraria y garantía mundial.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-senior/" }
}

const pageFaqs = [
  { question: "¿Puede haber pagos adicionales en la Prima Única?", answer: "Sí. Si existen variaciones en el precio o coste de los diferentes elementos del servicio funerario garantizados en la póliza que superen en un 10% los costes inicialmente estimados, al vencimiento anual (con dos meses de antelación) se notificará al tomador el importe de la prima única adicional, que garantiza tener el seguro permanentemente actualizado." },
  { question: "¿Tiene edad máxima de permanencia?", answer: "No. Este seguro no tiene edad máxima de permanencia. La edad mínima de contratación es de 75 años, pero una vez contratado se mantiene de por vida sin restricciones de edad." },
  { question: "¿Qué es el Seguro Asistencia Senior a Prima Única?", answer: "Es un seguro de Decesos y Asistencia dirigido a personas mayores que, por diversas causas, no están cubiertas todavía por este tipo de producto. Es de contratación individual y el pago se realiza en un único recibo." },
  { question: "¿Qué garantías opcionales puedo contratar?", answer: "Este es un seguro completo — no necesitas contratar ninguna garantía adicional. Tu seguro te ofrece todo lo que puedas necesitar." },
  { question: "¿Cómo se calcula la prima?", answer: "Se calcula en función de tu edad en el momento de la contratación y del valor del servicio funerario en tu localidad de residencia." },
]

export default function AsistenciaSeniorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros de Decesos", href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos" },
          { label: "Asistencia Senior Prima Única" }
        ]}
        label="SEGURO DE DECESOS · PRIMA ÚNICA · AVALADO POR SANTALUCÍA"
        h1={<>Asistencia Senior<br className="hidden lg:block" /> Prima Única.<br className="hidden lg:block" /> Diseñado para tu seguridad.</>}
        body="Para mayores de 75 años. Un único pago. Cobertura completa. Avalado por Santalucía."
        badges={["Desde 75 años", "Un único pago", "Sin carencias"]}
        trustItems={["Desde 75 años", "Un único pago", "Sin carencias", "Avalado por Santalucía"]}
        imageSrc="https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "75+", label: "Edad mínima contratación" },
        { value: "1", label: "Único pago" },
        { value: "0", label: "Carencias" },
        { value: "24h", label: "Atención 365 días" },
      ]} />

      {/* Qué es */}
      <FeatureBlock
        title="¿Qué es el Seguro Asistencia Senior a Prima Única?"
        description="Si eres mayor de 75 años, te ofrecemos el Seguro Asistencia Senior a prima única. Dirigido a cubrir las necesidades de las personas mayores que no están todavía protegidas por un seguro de Decesos y Asistencia. Avalado por la experiencia de la empresa especialista Santalucía."
        items={[
          "Realizando una aportación única, tendrás la tranquilidad de saber que cuentas con una completa cobertura en caso de fallecimiento",
          "Gestión integral del servicio funerario, incluyendo el traslado del fallecido y de los acompañantes",
          "Asistencia domiciliaria a la familia",
          "Equipo de profesionales especialistas a tu disposición 24 horas los 365 días del año",
          "Con una simple llamada podrás realizar todas las gestiones necesarias",
        ]}
        imageSrc="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=80&auto=format"
        badge="Asistencia Senior"
      />

      {/* Por qué */}
      <ThreeColumnFeatures
        title="¿Por qué un seguro de decesos?"
        columns={[
          { title: "Tranquilidad", body: "Nos ocupamos de todo para que, en los momentos más difíciles, tu familia cuente con todo el apoyo necesario." },
          { title: "Economía", body: "El fallecimiento supone un desembolso importante para cualquier familia, especialmente si incluye traslados nacionales o internacionales. El coste del servicio a través del seguro resulta más económico que afrontarlo directamente, y sin necesitar disponer de esa cantidad de forma inmediata." },
          { title: "Comodidad", body: "En una situación anímica difícil, que alguien con una simple llamada resuelva todas las gestiones y prestaciones necesarias es un verdadero alivio para toda la familia." },
        ]}
      />

      {/* Coberturas incluidas */}
      <WhiteCardGrid
        title="Coberturas incluidas"
        subtitle="Todo lo que necesitas cubierto con un único pago."
        cards={[
          { icon: "shield", title: "Servicio fúnebre", description: "Inhumación e incineración con gestión completa del servicio." },
          { icon: "clock", title: "Traslado nacional e internacional", description: "Cobertura completa del traslado del fallecido desde cualquier punto del mundo." },
          { icon: "star", title: "Acompañante en traslado", description: "Cobertura para un acompañante en caso de traslado por fallecimiento." },
          { icon: "check", title: "Obtención de documentación", description: "Gestión de toda la documentación necesaria tras el fallecimiento." },
          { icon: "shield", title: "Gestión de herencia", description: "Gestión de la declaración de herederos, escrituras de aceptación o renuncia a la herencia e inscripción en el registro de la propiedad." },
          { icon: "check", title: "Testamento notarial", description: "Otorgamiento de testamento notarial en España. Se otorga una sola vez, con reembolso de gastos del notario." },
        ]}
      />

      {/* Ventajas */}
      <FeatureBlock
        title="Ventajas del seguro."
        description="Un seguro diseñado para darte la máxima tranquilidad con la mínima preocupación."
        items={[
          "Realizando un pago único, tienes la tranquilidad de contar con cobertura completa en caso de fallecimiento",
          "Gestión integral del servicio funerario: traslado del fallecido, traslado de acompañantes y obtención de toda la documentación necesaria tras el fallecimiento",
          "Garantía válida en cualquier lugar del mundo en el que se produzca el fallecimiento",
        ]}
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format"
        badge="Ventajas"
        reverse
      />

      {/* Condiciones */}
      <ProductFeatureSection title="Condiciones de contratación.">
        <h3>Edad de contratación</h3>
        <p>Mínima 75 años.</p>

        <h3>Edad máxima de permanencia</h3>
        <p>Sin edad máxima de permanencia.</p>

        <h3>Carencias</h3>
        <p>Sin carencias.</p>

        <h3>Descuentos y recargos</h3>
        <p>No hay ningún tipo de descuento ni recargo por forma de pago ni por número de asegurados.</p>

        <h3>Coaseguro</h3>
        <p>Este seguro se oferta en coaseguro por Sanitas y Santalucía al 50%, siendo Santalucía la entidad delegada de la gestión del seguro. Según condiciones generales y particulares y con los límites que figuran en la misma.</p>
      </ProductFeatureSection>

      <FaqSection
        title="Preguntas frecuentes."
        description="Todo lo que necesitas saber sobre el seguro Asistencia Senior."
        faqs={pageFaqs}
      />

      {/* Seguro relacionado */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link href="/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-familiar-iplus/" className="group block p-8 rounded-2xl border border-border/50 bg-white hover:shadow-lg hover:border-[#0091DA]/30 hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs font-bold text-[#0091DA] uppercase tracking-wider mb-2">Seguro relacionado</p>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#0091DA] transition-colors">Asistencia Familiar iPlus</h3>
              <p className="text-sm text-muted-foreground mb-4">El seguro más completo y que mejor se adapta a tu familia y a tu presupuesto. Avalado por Santalucía.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] group-hover:gap-3 transition-all">
                Ver seguro <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection
        label="¿HABLAMOS?"
        title="Te explicamos todas las coberturas sin ningún compromiso."
        description="Llámanos o déjanos tu número. · Metro Ventas · 91 726 46 33 · 673 674 849 · 615 875 184"
      />
      <Footer />
    </main>
  )
}
