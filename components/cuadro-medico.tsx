"use client"

import { useEffect, useRef, useState } from "react"
import { Hospital, Stethoscope, Building, MapPin, Dumbbell, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stats = [
  { icon: Stethoscope, value: 57000, suffix: "+", label: "profesionales médicos", displayValue: "57.000+" },
  { icon: Building, value: 4500, suffix: "+", label: "centros médicos", displayValue: "4.500+" },
  { icon: Hospital, value: 5, suffix: "", label: "hospitales propios", displayValue: "5" },
  { icon: MapPin, value: 25, suffix: "", label: "centros médicos propios", displayValue: "25" },
  { icon: Dumbbell, value: 10, suffix: "", label: "centros rehabilitación avanzada", displayValue: "10" },
  { icon: Sparkles, value: 7, suffix: "", label: "centros de bienestar", displayValue: "7" },
]

function AnimatedCounter({ value, suffix, displayValue }: { value: number; suffix: string; displayValue: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 1500
    const steps = 40
    const stepValue = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatNumber = (n: number) => n >= 1000 ? n.toLocaleString('es-ES') : n.toString()

  return (
    <span ref={ref} className="tabular-nums">
      {isVisible ? `${formatNumber(count)}${suffix}` : displayValue}
    </span>
  )
}

export function CuadroMedico() {
  return (
    <section className="py-24 lg:py-32 bg-muted/10 text-foreground relative border-t border-border/40" aria-labelledby="cuadro-heading">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">Cuadro Médico Sanitas</p>
          <h2 id="cuadro-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">El cuadro médico más completo de España</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Si contratas tu seguro de salud con nosotros, tendrás acceso a la mayor red de profesionales sanitarios del sector privado en España.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:border-[#0091DA]/30 hover:shadow-md hover:shadow-[#0091DA]/[0.02] transition-all duration-300 text-center h-full hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#0091DA]/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0091DA]/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#0091DA]" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} displayValue={stat.displayValue} />
                </p>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
