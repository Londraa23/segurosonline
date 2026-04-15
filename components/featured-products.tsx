"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const featuredProducts = [
  {
    name: "Sanitas Avanza",
    description: "Equilibrio perfecto entre cobertura y precio. Copagos reducidos.",
    price: "49",
    badge: null,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80&auto=format",
    features: ["Copagos desde 2€", "Urgencias 24h", "Todas las especialidades", "App Blua incluida", "Fisioterapia y rehabilitación"],
    href: "/seguros-medicos-para-particulares/",
    highlighted: false,
  },
  {
    name: "Sanitas Más Salud",
    description: "Nuestro seguro más completo. Cobertura integral sin copagos.",
    price: "89",
    badge: "Más contratado",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80&auto=format",
    features: ["Sin copagos", "Medicina primaria y especialidades", "Hospitalización completa", "Blua incluido gratis", "Urgencias 24h", "Reembolso disponible"],
    href: "/seguros-medicos-para-particulares/sanitas-mas-salud/",
    highlighted: true,
  },
  {
    name: "Sanitas Pymes",
    description: "La solución ideal para empresas. Gestión digital y beneficios fiscales.",
    price: "39",
    badge: "Para empresas",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format",
    features: ["Gestión 100% digital", "Cobertura empleados", "Beneficios fiscales", "Sin carencias", "Blua incluido"],
    href: "/seguros-medicos-para-empresas/sanitas-pymes-digital/",
    highlighted: false,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-12 lg:py-24 bg-white relative overflow-hidden" aria-labelledby="productos-heading">
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal className="mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-[#0091DA] uppercase tracking-wider mb-4">Planes Destacados</p>
              <h2 id="productos-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
                Elige el seguro <br className="hidden sm:block" /> <span className="text-[#0091DA]">perfecto para ti.</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed lg:max-w-sm lg:text-right font-medium">
              Transparencia total. Descubre por qué somos la aseguradora de salud líder.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-max mx-auto lg:mx-0 mb-12 flex items-center gap-3 px-5 py-2.5 bg-muted/30 border border-border/80 rounded-full shadow-sm text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">Incluye un <strong className="text-foreground">4% de descuento adicional</strong> si eliges pago anual</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start relative">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.15} className="h-full">
              <div className={`group relative flex flex-col justify-end p-6 sm:p-7 min-h-[460px] lg:min-h-[500px] rounded-[2rem] overflow-hidden transition-all duration-500 h-full ${
                product.highlighted
                  ? "shadow-2xl shadow-[#0091DA]/20 lg:-translate-y-4 lg:mb-4 border-2 border-white"
                  : "hover:shadow-2xl hover:-translate-y-1 border border-transparent shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
              }`}>
                
                {/* Background Image Area */}
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
                />

                {/* Cinematic Edge-to-Edge Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t opacity-95 transition-opacity duration-500 ${
                  product.highlighted 
                    ? "from-[#002A54] via-[#002A54]/80 to-[#002A54]/10 group-hover:opacity-100" 
                    : "from-black via-black/80 to-transparent group-hover:opacity-100"
                }`} />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-5 left-5 z-20">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xl backdrop-blur-md border ${
                      product.highlighted ? "bg-[#0091DA] text-white border-white/20" : "bg-white/95 text-black border-transparent"
                    }`}>
                      {product.highlighted && <Sparkles className="w-3 h-3 mr-1" />}
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Content Area */}
                <div className="relative z-20 flex flex-col mt-auto w-full">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-1.5 tracking-tight text-white">{product.name}</h3>
                    <p className="text-white/80 text-sm leading-snug line-clamp-2 font-medium">{product.description}</p>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-5 pb-5 border-b border-white/10">
                    <span className="text-xs text-white/70 font-medium uppercase tracking-wider">Desde</span>
                    <span className="text-5xl font-black tracking-tighter text-white">{product.price}€</span>
                    <span className="text-xs text-white/70 font-medium">/mes</span>
                  </div>
                  
                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          product.highlighted ? "bg-[#0091DA]/40 shadow-sm" : "bg-white/10"
                        }`}>
                          <Check className={`w-2.5 h-2.5 ${product.highlighted ? "text-white" : "text-white/80"}`} />
                        </div>
                        <span className="text-sm font-medium text-white/90 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full rounded-xl h-12 text-sm font-bold tracking-wide group/btn border-0 shadow-lg ${
                    product.highlighted 
                      ? "bg-white text-[#002A54] hover:bg-gray-100" 
                      : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/5"
                  }`}>
                    <Link href={product.href}>
                      Solicitar información
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>
                  </Button>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
