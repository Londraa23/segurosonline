"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    id: "salud",
    title: "Seguros de salud",
    description: "La mejor asistencia sanitaria del país, con opciones adaptadas a tu estilo de vida. Tu bienestar y el de tu familia en manos expertas.",
    href: "/seguros-medicos-para-particulares/",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1000&q=80&auto=format",
    colSpan: "lg:col-span-2",
  },
  {
    id: "dentales",
    title: "Seguros dentales",
    description: "Prevención avanzada y acceso a más de 5.200 clínicas especializadas para cuidar tu sonrisa.",
    href: "/seguros-dentales/",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format",
    colSpan: "lg:col-span-1",
  },
  {
    id: "decesos",
    title: "Seguros de decesos",
    description: "Apoyo incondicional y gestión absoluta en los momentos familiares más delicados. Nada de papeleo.",
    href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/",
    image: "https://images.unsplash.com/photo-1606103920295-9a091573f160?w=800&q=80&auto=format", // Warm sunset / family feeling
    colSpan: "lg:col-span-1",
  },
  {
    id: "servicios",
    title: "Servicios de Salud",
    description: "Maternidad, psicología, bienestar nutricional y estética médica. Programas de última generación para complementar tu rutina.",
    href: "/servicios-de-salud/",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80&auto=format",
    colSpan: "lg:col-span-2",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden" aria-labelledby="servicios-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-10 lg:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="servicios-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
                Cuatro áreas para <br className="hidden sm:block" /> cubrir <span className="text-[#0091DA]">todas tus necesidades.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed lg:max-w-sm lg:text-right">
              Cobertura de élite adaptada a cada etapa de tu vida. La medicina del futuro, hoy.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05} className={service.colSpan}>
              <Link 
                href={service.href} 
                className="group relative block overflow-hidden rounded-3xl min-h-[360px] lg:min-h-[480px] h-full"
              >
                {/* Imagen de fondo base */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay oscuro para legibilidad (ligero arriba, intenso abajo) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Contenido flotante */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/80 line-clamp-2 text-sm sm:text-base max-w-sm leading-relaxed mb-0">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Botón flotante - Aparece elegante por la derecha/arriba sutilmente */}
                    <div className="w-12 h-12 rounded-full bg-white text-foreground flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
