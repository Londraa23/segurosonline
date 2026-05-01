"use client"

export function TrustBar() {
  const stats = [
    { value: "+57.000", label: "profesionales médicos" },
    { value: "+4.500", label: "centros médicos" },
    { value: "5", label: "hospitales propios" },
    { value: "+2M", label: "asegurados confían en Sanitas" },
    { value: "4.9★", label: "valoración media" },
    { value: "30+", label: "años de experiencia" },
  ]

  return (
    <section className="py-6 bg-white border-y border-border/40 overflow-hidden" aria-label="Cifras de confianza">
      <div className="relative">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {[...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <span className="text-2xl font-bold text-[#0091DA]">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
