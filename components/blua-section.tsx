"use client"

import { Laptop2, ShieldAlert, BadgeCheck, Stethoscope, Video, Scale, Baby, ArrowRight, Activity } from "lucide-react"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import Image from "next/image"

const bluaFeatures = [
  { icon: Video, title: "Videoconsulta", description: "Consulta con médicos de todas las especialidades desde casa, sin desplazamientos ni esperas.", colSpan: "lg:col-span-2", featured: true },
  { icon: Activity, title: "Chequea tu salud", description: "Servicio de cuidado preventivo con evaluaciones personalizadas de constantes.", colSpan: "lg:col-span-1", dark: true },
  { icon: ShieldAlert, title: "Cuida tu mente", description: "Servicio digital de psicología para cuidar tu salud mental y emocional.", colSpan: "lg:col-span-1" },
  { icon: Stethoscope, title: "Fisio Digital", description: "Ejercicios preventivos, tratamiento y rehabilitación física 100% online.", colSpan: "lg:col-span-1" },
  { icon: Laptop2, title: "Evalúa tus síntomas", description: "Diagnóstico médico, especialidad y acciones sugeridas impulsado por IA.", colSpan: "lg:col-span-1" },
]

const programs = [
  { icon: Baby, label: "Embarazo" },
  { icon: Scale, label: "Nutrición" },
  { icon: Activity, label: "Entrenador" },
  { icon: ShieldAlert, label: "Infantil" },
]

export function BluaSection() {
  return (
    <section className="py-12 lg:py-24 bg-muted/10 relative overflow-hidden border-t border-border/40" aria-labelledby="blua-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091DA]/10 text-[#0091DA] text-xs font-bold mb-4 uppercase tracking-wider">
            Incluido GRATIS
          </div>
          <h2 id="blua-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">
            ¿Qué incluye la app <span className="text-[#0091DA]">Blua</span> en tu seguro?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Blua es el ecosistema de salud digital pionero de Sanitas. Incluido de serie en nuestras pólizas,
            pone en tu móvil el hospital digital más avanzado del mundo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {bluaFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05} className={feature.colSpan}>
              {feature.featured ? (
                <div className="relative overflow-hidden rounded-3xl bg-white border border-border/50 shadow-sm flex flex-col sm:flex-row h-full group hover:shadow-md transition-shadow">
                  <div className="p-6 sm:p-7 sm:w-[55%] flex flex-col justify-center z-10 relative bg-white">
                    <div className="w-12 h-12 rounded-xl bg-[#0091DA]/10 flex items-center justify-center mb-5 group-hover:bg-[#0091DA] group-hover:text-white transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-[#0091DA] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                    <Link href="/servicios-de-salud" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] hover:text-[#005B8E] transition-colors">
                      Descubre más ventajas <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="sm:w-[45%] bg-muted/20 relative min-h-[200px] sm:min-h-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden sm:block" />
                    <Image 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                      alt="Videoconsulta médica"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover sm:object-left group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ) : feature.dark ? (
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-[#002A54] text-white flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#0091DA]/20 rounded-full blur-2xl group-hover:bg-[#0091DA]/40 transition-colors duration-500" />
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 backdrop-blur-sm">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2.5">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              ) : (
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-border/50 hover:border-[#0091DA]/30 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[#0091DA]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#0091DA]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2.5">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] border border-border/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm overflow-hidden relative">
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#0091DA]/5 rounded-full blur-3xl mix-blend-multiply" />
            <div className="flex items-center gap-3 w-full lg:w-auto z-10 relative">
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground shrink-0 hidden sm:block">Programas<br/>adicionales:</span>
              <div className="flex flex-wrap gap-2">
                {programs.map((program) => (
                  <div key={program.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm font-medium hover:bg-muted transition-colors">
                    <program.icon className="w-4 h-4 text-[#0091DA]" />
                    {program.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between w-full md:w-auto gap-4 z-10 relative">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0091DA]/5 text-[#0091DA] font-semibold text-sm">
                <BadgeCheck className="w-4 h-4" />
                <span>4% de descuento extra</span>
                <span className="text-muted-foreground font-normal hidden sm:inline">con el pago anual</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
