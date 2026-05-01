import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SanitasPageHero } from "@/components/sanitas-page-hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BlogPreview } from "@/components/blog-preview"
import { Reveal } from "@/components/reveal"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Alergias Primaverales: Prevención y Tratamiento con tu Seguro Sanitas | Sanitas Ventas",
  description: "Cómo prevenir y tratar las alergias primaverales con tu seguro de salud Sanitas. Alergólogos, pruebas diagnósticas, inmunoterapia y Blua digital incluidos. Madrid. ☎ 91 726 46 33",
  alternates: {
    canonical: "https://www.segurosonline.net/blog/alergias-primaverales/"
  }
}

export default function AlergiasPrimaveralesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <SanitasPageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Alergias Primaverales" }
        ]}
        label="Salud y bienestar"
        h1="Alergias primaverales: cómo prevenir y tratar los síntomas con tu seguro Sanitas."
        body="Estornudos, picor de ojos y congestión. Descubre cómo controlar la alergia al polen con especialistas sin esperas y tratamientos avanzados."
        badges={[{ text: "Lectura: 8 min", variant: "blue" }]}
        trustItems={["Alergólogos sin esperas", "Pruebas diagnósticas", "Inmunoterapia", "Blua digital"]}
        imageSrc="https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?w=1600&q=80&auto=format"
      />

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0091DA]" />
              <time dateTime="2026-04-03">3 de abril de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091DA]" />
              <span>8 min de lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#0091DA]" />
              <span>Salud y bienestar</span>
            </div>
          </div>
        </Reveal>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-foreground font-medium mb-12">
              La primavera es, para millones de personas, la estación más esperada del año. Pero también la más temida por quienes sufren alergia al polen. Estornudos continuos, picor intenso de ojos, congestión nasal permanente, dificultad para respirar... Los síntomas de la alergia primaveral pueden llegar a ser incapacitantes si no se abordan correctamente.
            </p>
            <p>
              En España más del 30% de la población sufre algún tipo de alergia, y el polen es el alérgeno más frecuente con diferencia. La buena noticia es que, con el diagnóstico adecuado y el tratamiento correcto, es posible controlar los síntomas de forma significativa e incluso reducirlos de forma permanente a largo plazo. Y tu seguro de salud Sanitas tiene todo lo que necesitas para conseguirlo: desde el alergólogo sin esperas hasta la inmunoterapia, pasando por Blua para resolver dudas sin moverte.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué es exactamente la alergia primaveral?</h2>
            <p>
              La alergia primaveral es una respuesta exagerada del sistema inmunitario ante el contacto con el polen de árboles, hierbas y plantas que florecen entre los meses de marzo y julio. Cuando el sistema inmune de una persona alérgica detecta estas partículas, las identifica como una amenaza y desencadena una reacción inflamatoria que produce los síntomas típicos.
            </p>
            <p>
              En España los pólenes más problemáticos son la gramínea (responsable de la mayoría de alergias en el centro del país), el olivo (predominante en Andalucía y Castilla-La Mancha), el plátano de sombra (muy frecuente en zonas urbanas), el ciprés (que adelanta la temporada ya en febrero) y el abedul (más habitual en el norte). Las concentraciones más altas suelen darse en días secos, soleados y con viento, especialmente a primera hora de la mañana y al atardecer.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-3xl mt-16 mb-6">Síntomas más frecuentes — cómo reconocer la alergia al polen</h2>
            <p>
              Los síntomas de la alergia primaveral pueden variar considerablemente de una persona a otra en intensidad y tipo de manifestación:
            </p>
            <ul className="space-y-3 mt-6">
              <li><strong>Rinitis alérgica:</strong> congestión nasal, moqueo continuo, picor de nariz y estornudos en salvas.</li>
              <li><strong>Conjuntivitis alérgica:</strong> picor intenso, lagrimeo, enrojecimiento y sensación de arenilla en los ojos.</li>
              <li><strong>Asma alérgica:</strong> dificultad para respirar, opresión en el pecho, tos seca persistente y sibilancias.</li>
              <li><strong>Dermatitis:</strong> urticaria, picor o erupciones en la piel tras el contacto con alérgenos ambientales.</li>
              <li><strong>Fatiga y dificultad para concentrarse:</strong> frecuentemente infravalorados, pero muy comunes en personas con alergia no tratada.</li>
            </ul>
            <p className="mt-8">
              Es importante distinguir entre la alergia al polen y un resfriado común: la alergia no cursa con fiebre, los síntomas persisten durante semanas o meses mientras dura la polinización y mejoran notablemente en días lluviosos o nublados.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <h2 className="text-3xl mt-16 mb-6">Cómo se diagnostica — el papel del alergólogo</h2>
            <p>El diagnóstico correcto es el primer paso indispensable. Sin saber exactamente a qué eres alérgico, el tratamiento puede ser incompleto o directamente ineficaz.</p>
            
            <h3 className="text-2xl mt-10 mb-4">La consulta con el alergólogo</h3>
            <p>El alergólogo es el especialista de referencia para el diagnóstico y tratamiento de las alergias. Con tu seguro Sanitas tienes acceso al alergólogo sin listas de espera, con cita en días.</p>
            
            <h3 className="text-2xl mt-10 mb-4">Pruebas cutáneas (prick test)</h3>
            <p>Consisten en depositar pequeñas cantidades de los alérgenos más comunes sobre la piel del antebrazo y realizar una pequeña punción. Si aparece una roncha, el resultado es positivo. Son rápidas y seguras.</p>
            
            <h3 className="text-2xl mt-10 mb-4">Análisis de IgE específica</h3>
            <p>Se complementan con análisis de sangre para determinar los niveles de IgE específica, permitiendo un diagnóstico más preciso cuando las pruebas cutáneas no son concluyentes.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="text-3xl mt-16 mb-6">Tratamientos disponibles</h2>
            
            <h3 className="text-2xl mt-10 mb-4">Antihistamínicos y medicación sintomática</h3>
            <p>Reducen el picor, los estornudos y el lagrimeo de forma rápida y eficaz. La medicación sintomática controla los síntomas pero no actúa sobre la causa de la alergia.</p>
            
            <h3 className="text-2xl mt-10 mb-4">Inmunoterapia — la vacuna de la alergia</h3>
            <p>Es el único tratamiento que actúa sobre la causa de la alergia. Consiste en administrar dosis crecientes del alérgeno para acostumbrar al sistema inmune.</p>
            <ul className="space-y-3">
              <li><strong>Subcutánea (inyecciones):</strong> se administra en consulta durante 3 a 5 años.</li>
              <li><strong>Sublingual (gotas o comprimidos):</strong> se administra en casa bajo supervisión médica.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.35}>
            <h2 className="text-3xl mt-16 mb-6">¿Qué cubre tu seguro Sanitas para la alergia?</h2>
            <ul className="space-y-3">
              <li>Consulta con alergólogo sin lista de espera</li>
              <li>Pruebas cutáneas (prick test) y análisis de IgE específica</li>
              <li>Prescripción del tratamiento farmacológico e inmunoterapia</li>
              <li>Seguimiento periódico con el especialista</li>
              <li>Blua digital: videoconsulta y urgencias 24h desde el móvil</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 pt-12 border-t border-border/60">
          <Reveal>
            <div className="bg-[#0091DA]/5 rounded-3xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Sufres alergia primaveral y quieres saber qué cubre tu seguro?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                En Sanitas Ventas te asesoramos sin compromiso sobre el seguro que mejor se adapta a ti. Llámanos o déjanos tus datos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+34917264633" className="w-full sm:w-auto px-8 py-4 bg-[#0091DA] text-white rounded-full font-bold hover:bg-[#007BBD] transition-colors">
                  Llamar 91 726 46 33
                </a>
                <a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#0091DA] text-[#0091DA] rounded-full font-bold hover:bg-[#0091DA]/5 transition-colors">
                  Solicitar información
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                <span>Madrid</span>
                <span>·</span>
                <span>Metro Ventas</span>
                <span>·</span>
                <span>91 726 46 33</span>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <BlogPreview />

      <ContactSection 
        label="CONTACTO"
        title="¿Hablamos de tu salud?"
        description="Estamos en Madrid, en Metro Ventas. Ven a vernos o llámanos para resolver cualquier duda."
      />

      <Footer />
    </main>
  )
}
