"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"

const blogPosts = [
  { title: "Alergias primaverales: cómo prevenir y tratar los síntomas con tu seguro de salud Sanitas", date: "03/04/2026", href: "/blog/alergias-primaverales" },
  { title: "Seguro médico para embarazo: guía completa para futuras madres", date: "27/03/2026", href: "/blog/seguro-medico-embarazo" },
  { title: "Seguros médicos para autónomos: ventajas fiscales y nuevas deducciones en 2026", date: "16/01/2026", href: "/blog/seguros-autonomos-ventajas-fiscales-2026" },
  { title: "Seguro de salud con reembolso Sanitas: qué es y cómo funciona", date: "27/02/2026", href: "/blog/seguro-reembolso-sanitas" },
  { title: "Por qué Sanitas es líder en salud privada en España", date: "13/02/2026", href: "/blog/sanitas-lider-salud-privada" },
  { title: "Comparativa de seguros de salud: ¿Qué ofrece Sanitas frente a otras aseguradoras?", date: "28/03/2025", href: "/blog/comparativa-seguros-salud" },
]

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 relative" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">Blog de salud</p>
            <h2 id="blog-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">Últimos artículos sobre seguros y salud</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] hover:underline shrink-0 group">
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.05}>
              <Link href={post.href} className="group bg-white rounded-2xl p-6 border border-border/60 hover:border-[#0091DA]/20 hover:shadow-lg transition-all duration-300 block h-full">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>{post.date}</time>
                </div>
                <h3 className="font-bold text-sm leading-snug group-hover:text-[#0091DA] transition-colors line-clamp-3">{post.title}</h3>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-[#0091DA] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
