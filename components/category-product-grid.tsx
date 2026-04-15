"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export interface ProductCardData {
  title: string;
  tagline: string;
  description: string;
  price?: string;
  badge?: string | null;
  label?: string; // used for small label inside or above
  image: string;
  features: string[];
  href: string;
  highlighted?: boolean;
}

interface CategoryProductGridProps {
  title: string;
  description?: string;
  products: ProductCardData[];
}

export function CategoryProductGrid({ title, description, products }: CategoryProductGridProps) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal className="mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.05] mb-5">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch relative">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.1} className="h-full">
              <div className={`group relative flex flex-col rounded-[2rem] overflow-hidden transition-all duration-500 h-full ${
                product.highlighted
                  ? "shadow-2xl shadow-[#0091DA]/20 border-2 border-[#0091DA] lg:-translate-y-2 bg-[#002A54]"
                  : "hover:shadow-2xl hover:-translate-y-1 border border-border shadow-lg shadow-black/5 bg-white"
              }`}>
                
                {/* ZONA 1 - FOTO (60% superior aprox) */}
                <div className="relative w-full h-[240px] sm:h-[280px] shrink-0 overflow-hidden bg-muted">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
                      priority={i < 3}
                    />

                  {/* Degradado sutil solo en el borde inferior para transición suave */}
                  <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent ${
                    product.highlighted ? "from-[#002A54]" : "from-white"
                  }`} />
                  
                  {/* Badge Categoría */}
                  {(product.badge || product.label) && (
                    <div className="absolute top-5 left-5 z-20">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${
                        product.highlighted 
                          ? "bg-[#0091DA]/90 text-white border border-[#0091DA]/50" 
                          : "bg-white/90 text-foreground border border-white/50"
                      }`}>
                        {product.highlighted && product.badge && <Sparkles className="w-3.5 h-3.5 mr-1.5 text-white" />}
                        {product.badge || product.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* ZONA 2 - CONTENIDO (40% inferior) */}
                <div className="relative z-20 flex flex-col flex-grow p-6 lg:p-8 pt-4">
                  <div className="mb-5">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold mb-1.5 tracking-tight ${product.highlighted ? "text-white" : "text-foreground"}`}>
                      {product.title}
                    </h3>
                    <p className={`text-sm truncate font-medium ${product.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                      {product.tagline}
                    </p>
                  </div>
                  
                  {product.price && (
                    <div className={`flex items-baseline gap-1.5 mb-6 pb-6 border-b ${product.highlighted ? "border-white/10" : "border-border/60"}`}>
                      <span className={`text-sm font-semibold uppercase tracking-wider ${product.highlighted ? "text-white/80" : "text-muted-foreground"}`}>Desde</span>
                      <span className={`text-4xl font-black tracking-tighter ${product.highlighted ? "text-white" : "text-[#0091DA]"}`}>{product.price}€</span>
                      <span className={`text-sm font-medium ${product.highlighted ? "text-white/70" : "text-muted-foreground"}`}>/mes</span>
                    </div>
                  )}

                  {!product.price && (
                     <div className={`mb-6 border-t ${product.highlighted ? "border-white/10" : "border-border/60"}`} />
                  )}
                  
                  <ul className="space-y-3.5 mb-8 mt-auto">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          product.highlighted ? "bg-white/10" : "bg-[#0091DA]/10"
                        }`}>
                          <Check className={`w-3 h-3 stroke-[3] ${product.highlighted ? "text-white" : "text-[#0091DA]"}`} />
                        </div>
                        <span className={`text-[15px] font-medium leading-tight truncate ${product.highlighted ? "text-white/90" : "text-foreground/80"}`} title={feature}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className={`w-full rounded-xl h-14 text-base font-bold tracking-wide group/btn border-0 shadow-lg mt-auto ${
                    product.highlighted 
                      ? "bg-white text-[#002A54] hover:bg-gray-100" 
                      : "bg-[#0091DA] text-white hover:bg-[#007BBD]"
                  }`}>
                    <Link href={product.href}>
                      Ver póliza completa
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
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
