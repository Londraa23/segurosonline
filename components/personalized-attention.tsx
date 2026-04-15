"use client"

import { Users, HeartHandshake, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import Link from "next/link"
import Image from "next/image"

export function PersonalizedAttention() {
  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden border-t border-border/40" aria-labelledby="atencion-heading">
      <div className="mx-auto max-w-7xl px-6">
        
        <Reveal className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-4">Sobre Nosotros</p>
              <h2 id="atencion-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                No eres una póliza. <br className="hidden sm:block" /> Eres <span className="text-[#0091DA]">nuestra prioridad.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed lg:max-w-sm lg:text-right">
              Cada cliente es único. Te acompañamos durante toda la vigencia de tu póliza con dedicación exclusiva y profesionalidad.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Main large photographic card */}
          <Reveal className="lg:col-span-2 group relative block overflow-hidden rounded-3xl min-h-[460px] lg:min-h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80&auto=format" 
              alt="Asesor de seguros Sanitas" 
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105 object-[center_30%]"
            />
            {/* Cinematic Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002A54]/90 via-[#002A54]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col justify-end">
              <div className="max-w-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium tracking-wide">Trato personalizado</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  Asesoramiento experto, cara a cara.
                </h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                  Nuestros asesores certificados te ayudan a escoger el producto más adecuado a tus necesidades y las de tu familia, analizando cada detalle sin compromisos.
                </p>
                <Button className="rounded-full px-6 py-5 text-sm font-semibold group/btn bg-white text-[#002A54] hover:bg-gray-100 border-0" asChild>
                  <a href="#contacto">
                    Hablar con un asesor
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6">
            
            <Reveal delay={0.1} className="flex-1 rounded-3xl bg-[#002A54] text-white p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-[#0091DA]/20 rounded-full blur-3xl transition-colors duration-500 group-hover:bg-[#0091DA]/40" />
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-3 tracking-tighter">30+ <span className="text-2xl font-semibold opacity-70">años</span></h3>
                <h4 className="text-xl font-bold mb-2">Experiencia probada</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Profesionales dedicados en cuerpo y alma a tu bienestar con más de tres décadas blindando la salud de nuestros clientes en el sector asegurador.
                </p>
              </div>
            </Reveal>

            
            <Reveal delay={0.2} className="flex-1 rounded-3xl bg-white border border-border/60 hover:border-[#0091DA]/30 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 group">
              <div className="flex flex-col h-full justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#0091DA]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-[#0091DA]" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Siempre disponibles</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Resolvemos tus dudas al instante. Llámanos, escríbenos por WhatsApp, envíanos un email o acude a nuestra oficina. Tú eliges.
                </p>
                <Link href="#contacto" className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#0091DA] hover:text-[#007BBD]">
                  Ver horarios y contacto <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  )
}
