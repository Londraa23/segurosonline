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
import { Download, ExternalLink, ChevronRight, Calculator, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sanitas Dental Milenium — Seguro Dental desde 12,20€/mes | Sanitas Ventas",
  description: "Sanitas Dental Milenium: 55 servicios incluidos, hasta 40% de descuento en tratamientos, sin carencias ni preexistencias. Pack Dúo y Familia disponibles.. ☎ 91 726 46 33",
  alternates: {
    canonical: "/seguros-dentales/sanitas-dental-milenium/"
  }
}

const pricingRows = [
  {
    feature: "Por persona",
    withCopago: "desde 12,20€/mes",
    withoutCopago: "desde 14,25€/mes"
  },
  {
    feature: "Pack Dúo (2 asegurados)",
    withCopago: "desde 22,90€/mes",
    withoutCopago: "desde 27,50€/mes"
  },
  {
    feature: "Pack Familia (3 a 6 asegurados)",
    withCopago: "desde 32,90€/mes",
    withoutCopago: "desde 40,50€/mes"
  }
]

export default function SanitasDentalMileniumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <SanitasPageHero 
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Seguro Dental", href: "#" },
          { label: "Sanitas Dental Milenium" }
        ]}
        label="El seguro dental con la mejor forma de prevención y coberturas"
        h1={<>Sanitas Dental Milenium.<br />La mejor prevención<br className="hidden lg:block"/> y coberturas.</>}
        body="En Sanitas queremos verte sonreír. Por eso cuidamos de tu salud bucodental en todas las etapas de tu vida, seas o no de Sanitas. Contamos con más de 200 clínicas Milenium en toda España."
        badges={[
          { text: "Ahora Pack Dúo — Tarifa plana para 2 asegurados", variant: "red" },
          { text: "Ahora Pack Familia — Tarifa plana de 3 a 6 asegurados", variant: "red" }
        ]}
        trustItems={[
          "55 servicios incluidos",
          "Sin carencias",
          "Sin preexistencias",
          "+200 clínicas en España"
        ]}
        imageSrc="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&q=80&auto=format"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#002A54] mb-4">
              ¿Qué incluye Sanitas Dental Milenium?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Un seguro dental completo diseñado para ofrecerte la máxima tranquilidad y acceso a la mejor tecnología dental.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Odontología y Consultas</h3>
                <FeatureList items={[
                  "Odontología preventiva: revisión, higiene bucodental, fluorizaciones y sensibilidad",
                  "Consultas generales y de urgencia",
                  "Odontopediatría: consulta, educación y limpieza para niños",
                  "Sellador de fisuras para los más pequeños"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Cirugía y Radiología</h3>
                <FeatureList items={[
                  "Todas las extracciones (incluidas muelas del juicio)",
                  "Revisiones postoperatorias",
                  "Ortopantomografías y cefalometrías",
                  "TAC Dental incluido"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#002A54]">Ortodoncia e Implantes</h3>
                <FeatureList items={[
                  "Estudio radiológico para ortodoncia",
                  "Protector bucal y 1ª reposición de brackets",
                  "Análisis y estudio de implantología",
                  "Mantenimiento del tratamiento de implante"
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
                El seguro dental para ti y tu familia.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podrás acceder a un total de 55 servicios incluidos en tu póliza y a otros tratamientos dentales a precios ventajosos con hasta un 40% menos de precio que en el mercado.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Con el Pack Familias, los niños tendrán acceso a servicios específicos como odontopediatría, educación e higiene bucodental y sellador de fisuras.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 gap-4">
              <Reveal delay={0.1}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#002A54]">55 servicios incluidos</div>
                    <div className="text-sm text-gray-500">Sin costes adicionales en clínica.</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA] shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#002A54]">+200 Clínicas Milenium</div>
                    <div className="text-sm text-gray-500">Uso exclusivo en centros propios.</div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#0091DA]/10 flex items-center justify-center text-[#0091DA] shrink-0">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-[#002A54]">Ahorra hasta un 40%</div>
                    <div className="text-sm text-gray-500">En tratamientos no incluidos.</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable 
        title="Precios Sanitas Dental Milenium — 2026"
        subtitle="Elige la modalidad que mejor se adapte a ti o a tu familia. Tarifas planas disponibles para packs."
        rows={pricingRows}
        colA="Con Copago"
        colB="Sin Copago"
      />

      <ProductFeatureSection title="Información de contratación">
        <Reveal>
          <div className="space-y-8">
            <div>
              <h3>Sin carencias ni preexistencias</h3>
              <p>Tanto si vienes de otra aseguradora dental como si este es tu primer seguro, podrás disfrutar de tu seguro dental Sanitas desde el primer día de contratación.</p>
            </div>
            <div>
              <h3>Con Copago y Sin Copago</h3>
              <p><strong>Sin copago:</strong> pagarás una póliza fija mensual y no abonarás nada por las visitas de los servicios incluidos.</p>
              <p><strong>Con copago:</strong> tu cuota dependerá del uso de tu seguro y abonarás solo 3€ por los servicios incluidos consumidos por día de visita, independientemente del número de servicios prestados en esa visita.</p>
            </div>
            <div>
              <h3>Permanencia y Precio final</h3>
              <p>El periodo de permanencia será de al menos 12 meses. Durante el primer mes de contratación se aplicará un recargo del 0,15% del Consorcio de Compensación de Seguros.</p>
            </div>
            <div>
              <h3>Descuentos para el segundo año</h3>
              <p>Benefíciate de descuentos adicionales en tu segunda anualidad al realizar tus tratamientos en la red Milenium:</p>
              <FeatureList items={[
                "10% de descuento adicional en: ortodoncia, implantes y blanqueamientos",
                "5% de descuento adicional en: endodoncia, periodoncia y conservadora"
              ]} />
            </div>
          </div>
        </Reveal>
      </ProductFeatureSection>

      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-[#002A54] mb-3">Documentación y Enlaces</h2>
            <p className="text-muted-foreground">Descarga la información detallada de Sanitas Dental Milenium.</p>
          </Reveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Ficha de producto", file: "Ficha_Dental_Milenium.pdf" },
              { title: "Ver Precios Tratamientos 2026", file: "Tarifa_Dental_2026.pdf" },
              { title: "Nota Informativa Con Copago", file: "Nota_Informativa_Copago.pdf" },
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
        description="Cuéntanos qué necesitas y te ayudamos a elegir entre Milenium y Premium según tu situación."
      />

      <Footer />
    </main>
  )
}
