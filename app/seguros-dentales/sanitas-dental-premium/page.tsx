import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { 
  CoverageCardGrid, 
  ProductFeatureSection, 
  ComparisonTable,
  FeatureList,
} from "@/components/product-sections"
import { Reveal } from "@/components/reveal"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Download, ExternalLink, ChevronRight, Calculator, ShieldCheck, Sparkles, Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Dental Premium — Seguro Dental Completo con Empastes Incluidos | Sanitas Ventas",
  description: "Sanitas Dental Premium: 73 servicios incluidos, 2 empastes/año incluidos, hasta 40% dto. Sin carencias ni preexistencias. Pack Dúo y Familia.. ☎ 91 726 46 33",
  alternates: {
    canonical: "/seguros-dentales/sanitas-dental-premium/"
  }
}

const pricingRows = [
  {
    feature: "Por persona",
    withCopago: "desde 19,90€/mes",
    withoutCopago: "desde 22,90€/mes"
  },
  {
    feature: "Pack Dúo (2 asegurados)",
    withCopago: "desde 36,90€/mes",
    withoutCopago: "desde 42,90€/mes"
  },
  {
    feature: "Pack Familia (3 a 6 asegurados)",
    withCopago: "desde 50,90€/mes",
    withoutCopago: "desde 59,90€/mes"
  }
]

export default function SanitasDentalPremiumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguro Dental", href: "#" },
          { label: "Sanitas Dental Premium" }
        ]}
        label="El seguro dental más completo con empastes incluidos"
        h1={<>Sanitas Dental Premium.<br />El seguro más completo,<br className="hidden lg:block"/> con empastes incluidos.</>}
        body="En Sanitas queremos verte sonreír. Por eso cuidamos de tu salud bucodental en todas las etapas de tu vida, seas o no de Sanitas. Contamos con más de 200 clínicas Milenium en toda España."
        badges={[
          { text: "Ahora Pack Dúo — Tarifa plana para 2 asegurados", variant: "red" },
          { text: "Ahora Pack Familia — Tarifa plana de 3 a 6 asegurados", variant: "red" }
        ]}
        trustItems={[
          "73 servicios incluidos",
          "2 empastes/año incluidos",
          "Sin carencias",
          "+200 clínicas en España"
        ]}
        imageSrc="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1600&q=80&auto=format"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              ¿Qué incluye Sanitas Dental Premium?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Nuestra protección dental de élite. Todas las coberturas de Milenium potenciadas con servicios exclusivos y mayor prevención.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Básico y Preventivo</h3>
                <FeatureList items={[
                  "2 empastes o reconstrucciones al año",
                  "Revisiones e higienes ilimitadas",
                  "Consultas de urgencia 24h",
                  "Todas las limpiezas necesarias"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Niños y Cirugía</h3>
                <FeatureList items={[
                  "Odontopediatría completa",
                  "Sellador de fisuras",
                  "Extracciones quirúrgicas",
                  "Muelas del juicio incluidas"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Tecnología y Diagnóstico</h3>
                <FeatureList items={[
                  "Radiografías panorámicas",
                  "Cefalometrías",
                  "TAC Dental completo",
                  "Estudio digital de sonrisa"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Especialidades</h3>
                <FeatureList items={[
                  "Estudio para ortodoncia",
                  "Mantenimiento de implantes",
                  "Radiología para implantes",
                  "Tratamientos periodontales"
                ]} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-6">
                El seguro dental más completo.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sanitas Dental Premium es el más completo de Sanitas: cobertura en más de 73 servicios odontológicos en póliza y acceso a otros tratamientos dentales con un 40% de descuento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tienes cubierta una gran variedad de tratamientos esenciales como empastes, higienes dentales o extracciones sin coste adicional en clínica.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Reveal delay={0.1}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 transition-all hover:shadow-md h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#002A54]">73 servicios incluidos</div>
                    <div className="text-sm text-gray-500">Sin pagos en clínica para lo esencial.</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-[#002A54] p-6 rounded-2xl shadow-lg flex flex-col gap-3 transition-all hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white">2 Empastes/año</div>
                    <div className="text-sm text-white/70">O reconstrucciones incluidas.</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable 
        title="Precios Sanitas Dental Premium — 2026"
        subtitle="Máxima protección dental con tarifas planas para familias y opciones con o sin copago."
        rows={pricingRows}
        colA="Con Copago"
        colB="Sin Copago"
      />

      <ProductFeatureSection title="Empastes incluidos — condiciones">
        <Reveal>
          <p className="mb-8">El asegurado tiene incluidos en su póliza la realización de <strong>2 de los siguientes tratamientos cada año</strong> de vigencia:</p>
          <FeatureList items={[
            "Empastes de una o varias caras",
            "Reconstrucciones dentales",
            "Empastes en diente temporal"
          ]} />
          
          <p className="mt-8 mb-4">Si se necesita superar este límite, los precios franquiciados son altamente competitivos:</p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg"><span>Empaste adicional</span> <span className="font-bold">58,90€</span></div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg"><span>Reconstrucción adicional</span> <span className="font-bold">68,90€</span></div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg"><span>Recubrimiento pulpar directo</span> <span className="font-bold">18,50€</span></div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg"><span>Recubrimiento pulpar indirecto</span> <span className="font-bold">11,50€</span></div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg"><span>Empaste diente temporal</span> <span className="font-bold">54,90€</span></div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <ProductFeatureSection title="Información de contratación">
        <Reveal>
          <div className="space-y-8">
            <div>
              <h3>Sin carencias ni preexistencias</h3>
              <p>Podrás disfrutar de tu seguro dental Premium desde el primer día. No existen periodos de espera para empezar a cuidar tu sonrisa.</p>
            </div>
            <div>
              <h3>Modalidades de pago</h3>
              <p><strong>Sin copago:</strong> Cuota fija mensual sin costes por uso en servicios incluidos.</p>
              <p><strong>Con copago:</strong> Cuota mensual reducida + 3€ por visita en servicios incluidos consumidos.</p>
            </div>
            <div>
              <h3>Permanencia y Descuentos</h3>
              <p>Permanencia mínima de 12 meses. Acceso a descuentos adicionales del 10% y 5% a partir de la segunda anualidad en tratamientos especializados realizados en clínicas Milenium.</p>
            </div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-3">¿Milenium o Premium?</h2>
            <p className="text-muted-foreground">Te ayudamos a elegir la mejor opción para tu salud dental.</p>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Ficha de producto", file: "Ficha_Dental_Premium.pdf" },
              { title: "Precios Tratamientos 2026", file: "Tarifa_Dental_2026.pdf" },
              { title: "Nota Informativa", file: "Nota_Informativa_Premium.pdf" },
              { title: "Contrátalo online", href: "#", external: true }
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a 
                  href={doc.href || "#"} 
                  className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-border/50 hover:border-[#0091DA]/30 hover:shadow-md transition-all h-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA]">
                      {doc.external ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002A54] text-sm group-hover:text-[#0091DA] transition-colors">{doc.title}</h4>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0091DA] group-hover:translate-x-1" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection 
        label="¿Hablamos?"
        title="¿Milenium o Premium?"
        description="Si no sabes cuál encaja mejor contigo, te lo decimos en dos minutos. Sin compromiso."
      />

      <Footer />
    </main>
  )
}
