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
  title: "Seguro de Decesos Asistencia Familiar iPlus Sanitas | Sanitas Ventas",
  description: "Asistencia Familiar iPlus: el seguro de decesos más completo de Sanitas con asistencia en viaje, protección jurídica y cobertura por accidentes. Hasta 75 años.. ☎ 91 726 46 33",
  alternates: { canonical: "https://www.segurosonline.net/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-familiar-iplus/" }
}

const pageFaqs = [
  { question: "¿Qué es un seguro de decesos?", answer: "Un seguro de decesos es una póliza que cubre los gastos y gestiones relacionados con el fallecimiento de una persona: servicio fúnebre, traslado nacional e internacional, asistencia jurídica y apoyo emocional para los familiares. Todo gestionado de forma eficiente para que la familia no tenga cargas adicionales en los momentos más difíciles." },
  { question: "¿Cuál es la edad máxima de permanencia?", answer: "Este seguro no tiene edad máxima de permanencia. Tiene una edad máxima de contratación de 75 años, pero una vez contratado puedes mantenerlo de por vida." },
  { question: "¿Quién gestiona el seguro?", answer: "El seguro se oferta en coaseguro por Sanitas y Santalucía al 50%. Santalucía es la entidad delegada de la gestión." },
  { question: "¿Puedo contratar solo las coberturas opcionales que necesito?", answer: "Sí. Las garantías de accidentes, asistencia senior, asistencia en viaje y repatriación de residentes extranjeros son opcionales y puedes elegir cuáles incorporar a tu póliza." },
]

export default function AsistenciaFamiliarIPlusPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguros de Decesos", href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos" },
          { label: "Asistencia Familiar iPlus" }
        ]}
        label="SEGURO DE DECESOS · AVALADO POR SANTALUCÍA"
        h1={<>Seguro de Decesos<br className="hidden lg:block" /> Asistencia Familiar iPlus.<br className="hidden lg:block" /> El más completo para tu familia.</>}
        body="El seguro más completo y que mejor se adapta a tu familia y a tu presupuesto. Avalado por Santalucía."
        badges={["Avalado por Santalucía", "Hasta 75 años", "Sin edad máx. permanencia"]}
        trustItems={["Avalado por Santalucía", "Hasta 75 años", "Sin edad máx. permanencia", "Asistencia en viaje"]}
        imageSrc="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80&auto=format"
      />

      <ProductStatBar stats={[
        { value: "75", label: "Edad máxima contratación" },
        { value: "∞", label: "Sin edad máx. permanencia" },
        { value: "24h", label: "Atención telefónica" },
        { value: "50%", label: "Coaseguro Sanitas·Santalucía" },
      ]} />

      {/* Qué es */}
      <FeatureBlock
        title="¿Qué es el Seguro Asistencia Familiar iPlus?"
        description="El Seguro Asistencia Familiar iPlus es el seguro de decesos más completo y el que mejor se adapta a tu familia, avalado por la experiencia de la empresa especialista Santalucía. Queremos que tú y tu familia dispongáis de todo el apoyo ante cualquier inconveniente."
        items={[
          "Cobertura de fallecimiento orientada a cada asegurado según las características y costumbres de la localidad",
          "Atención psicológica: todo el apoyo para ti y tu familia ante cualquier inconveniente",
          "Traslado nacional e internacional: gestiones y gastos para trasladarte en caso de fallecimiento desde cualquier lugar del mundo",
          "Diseñado para evolucionar según tu edad y ritmo de vida",
        ]}
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80&auto=format"
        badge="Asistencia Familiar iPlus"
      />

      {/* Por qué contratar */}
      <ThreeColumnFeatures
        title="¿Por qué contratar un seguro de decesos?"
        columns={[
          { title: "Tranquilidad", body: "Nos encargamos de todo para que, en los momentos más difíciles, tu familia cuente con el apoyo necesario." },
          { title: "Ahorro", body: "El fallecimiento de un ser querido puede suponer un desembolso importante que muchas familias no pueden afrontar de inmediato, especialmente si incluye traslados nacionales o internacionales. Un seguro de decesos cubre estos costes, resultando más económico a largo plazo." },
          { title: "Comodidad", body: "En una situación emocionalmente difícil, contar con un servicio que, con una simple llamada, gestione todas las necesidades y prestaciones es un verdadero alivio." },
        ]}
      />

      {/* Coberturas incluidas */}
      <WhiteCardGrid
        title="Coberturas incluidas"
        subtitle="Protección completa para ti y tu familia ante cualquier eventualidad."
        cards={[
          { icon: "shield", title: "Cobertura por fallecimiento", description: "Servicio fúnebre personalizado según las características y costumbres de la localidad del asegurado." },
          { icon: "check", title: "Asistencia jurídica", description: "Apoyo legal en caso de fallecimiento o invalidez, con asesoramiento y gestión documental." },
          { icon: "star", title: "Servicio de guardería", description: "Cuidado para menores de 7 años cuando más lo necesita tu familia." },
          { icon: "smartphone", title: "Atención psicológica", description: "Todo el apoyo emocional para ti y tu familia ante cualquier situación difícil." },
          { icon: "clock", title: "Traslado nacional", description: "Gestión y cobertura de los gastos necesarios para el traslado en caso de fallecimiento dentro de España." },
          { icon: "shield", title: "Traslado internacional", description: "Traslado desde cualquier lugar del mundo, así como asistencia para los acompañantes." },
        ]}
      />

      {/* Coberturas opcionales según edad */}
      <ProductFeatureSection title="Coberturas opcionales según la edad.">
        <h3>De 0 a 17 años</h3>
        <p>Garantía de peque asistencia: garantiza el bienestar de tus hijos ante cualquier situación imprevista.</p>

        <h3>De 17 a 65 años — Garantía de accidentes</h3>
        <p>Protección económica ante imprevistos:</p>
        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Indemnización económica de 12.000€ en caso de fallecimiento por accidente</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Indemnización económica de 24.000€ en caso de fallecimiento por accidente de circulación</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Indemnización económica en caso de invalidez por accidente</li>
        </ul>

        <h3>Mayores de 65 años — Asistencia senior</h3>
        <p>Tranquilidad y seguridad con la atención más completa:</p>
        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Evaluación geriátrica integral</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Teleasistencia</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Inspección de vivienda, conexión con reparadores y servicios de limpieza</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> Otras coberturas</li>
        </ul>
      </ProductFeatureSection>

      {/* Coberturas opcionales viaje */}
      <FeatureBlock
        title="Coberturas opcionales para viajes."
        description="Con la garantía de Asistencia en Viaje, tu familia y tú os sentiréis como en casa."
        items={[
          "Gastos de hospitalización y/o tratamiento de urgencias por accidente o enfermedad en el extranjero",
          "Gastos de acompañantes",
          "Trámites administrativos",
          "Gastos derivados de incidencias con el equipaje y medios de transporte",
          "Otras coberturas",
        ]}
        imageSrc="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format"
        badge="Asistencia en Viaje"
        reverse
      />

      {/* Residentes extranjeros */}
      <section className="py-16 bg-[#002A54]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">Cobertura opcional para residentes extranjeros en España.</h2>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl mx-auto">
              Si eres extranjero y resides en España durante al menos tres meses, con esta garantía opcional tienes la posibilidad de ser repatriado en caso de fallecimiento al país que elijas y en compañía de un familiar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Condiciones */}
      <ProductFeatureSection title="Condiciones de contratación.">
        <h3>Coaseguro y gestión</h3>
        <p>Este seguro se oferta en coaseguro por Sanitas y Santalucía al 50%, siendo Santalucía la entidad delegada de la gestión. Según condiciones generales y particulares y con los límites que figuran en la misma.</p>

        <h3>Edad máxima de contratación</h3>
        <p>75 años, tanto con póliza individual como familiar.</p>

        <h3>Edad máxima de permanencia</h3>
        <p>Sin edad máxima de permanencia.</p>

        <h3>Carencias</h3>
        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> 2 meses para la garantía de decesos</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> 10 meses para la garantía de premio de natalidad (garantía opcional)</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> 3 meses para protección jurídica integral, excepto el servicio telefónico y reclamación de multas (sin carencia) y derecho de familia (9 meses de carencia) — garantía opcional</li>
          <li className="flex items-start gap-2 text-sm"><span className="text-[#0091DA] font-bold mt-0.5">·</span> 3 meses para Residentes en España (garantía opcional)</li>
        </ul>

        <h3>Descuentos y recargos</h3>
        <p>No hay ningún tipo de descuento ni recargo por forma de pago ni por número de asegurados.</p>
      </ProductFeatureSection>

      <FaqSection
        title="Preguntas frecuentes."
        description="Resolvemos tus dudas sobre el seguro de decesos."
        faqs={pageFaqs}
      />

      {/* Seguro relacionado */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link href="/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-senior/" className="group block p-8 rounded-2xl border border-border/50 bg-white hover:shadow-lg hover:border-[#0091DA]/30 hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs font-bold text-[#0091DA] uppercase tracking-wider mb-2">Seguro relacionado</p>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#0091DA] transition-colors">Asistencia Senior Prima Única</h3>
              <p className="text-sm text-muted-foreground mb-4">Para mayores de 75 años. Un único pago. Cobertura completa. Avalado por Santalucía.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] group-hover:gap-3 transition-all">
                Ver seguro <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection
        label="¿HABLAMOS?"
        title="Te explicamos todas las coberturas y opciones sin ningún compromiso."
        description="Estás en buenas manos. · Metro Ventas · 91 726 46 33 · 673 674 849 · 615 875 184"
      />
      <Footer />
    </main>
  )
}
