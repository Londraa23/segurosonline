"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const products = [
  {
    title: "Seguros para Particulares",
    description: "Coberturas completas con o sin copago. Incluye telemedicina Blua.",
    href: "/seguros-medicos-para-particulares/",
    price: "Desde 31€/mes",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&q=75",
  },
  {
    title: "Seguros Autónomos",
    description: "Desgrava hasta 500€ en IRPF. Protección adaptada a tus necesidades.",
    href: "/seguros-para-autonomos/",
    price: "Desde 35€/mes",
    image: "/inicia.jpg",
  },
  {
    title: "Para Empresas",
    description: "Mejora el bienestar de tu equipo con beneficios fiscales que retienen talento.",
    href: "/seguros-medicos-para-empresas/",
    price: "Desde 30€/mes",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&q=75",
  },
  {
    title: "Para Extranjeros",
    description: "Pólizas sin copagos que cumplen 100% requisitos para residencia y NIE.",
    href: "/seguros-medicos-para-extranjeros/",
    price: "Desde 50€/mes",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&q=75",
  },
  {
    title: "Mayores de 60",
    description: "Atención especializada, sin necesidad de rellenar cuestionario previo.",
    href: "/sanitas-mayores/",
    price: "Desde 41€/mes",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&q=75",
  },
  {
    title: "Servicio Dental",
    description: "Más de 5.200 clínicas. Incluye limpiezas y radiografías sin coste.",
    href: "/seguros-dentales/",
    price: "Desde 9€/mes",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&q=75",
  },
  {
    title: "Asegura a tu Mascota",
    description: "La mejor cobertura para proteger a los perros y gatos de la familia.",
    href: "/sanitas-mascotas/",
    price: "Desde 15€/mes",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&q=75",
  },
  {
    title: "Asistencia y Decesos",
    description: "Tranquilidad total para tu familia con asistencia integral garantizada.",
    href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/",
    price: "Desde 6€/mes",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&q=75",
  },
]

export function InsuranceProducts() {
  return (
    <section id="seguros" className="py-12 lg:py-24 bg-white relative overflow-hidden" aria-labelledby="seguros-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-10 lg:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="seguros-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
                Encuentra el seguro <br className="hidden sm:block" /> ideal <span className="text-[#0091DA]">para ti.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed lg:max-w-sm lg:text-right">
              Soluciones personalizadas con el cuadro médico más amplio. Todas las pólizas incluyen Blua.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.05}>
              <Link 
                href={product.href} 
                className="group relative block overflow-hidden rounded-3xl min-h-[250px] lg:min-h-[300px] h-full"
              >
                {/* Imagen de fondo base */}
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 2}
                  />
                </div>
                
                {/* Overlay oscuro para legibilidad (fuerte degradado abajo para asegurar lectura rápida) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Precio Flotante (Arriba) */}
                <div className="absolute top-5 left-5 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-xs shadow-sm border border-white/10">
                      {product.price}
                    </span>
                </div>

                {/* Contenido flotante principal */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-3">
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-white/80 line-clamp-2 text-xs sm:text-sm leading-relaxed mb-0">
                        {product.description}
                      </p>
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
