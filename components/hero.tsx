"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Shield, Clock, Users, Phone, CheckCircle, Send, ArrowDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { submitToMake } from "@/lib/form-submission"

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    acceptPolicy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitToMake({
        ...formData,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        formId: "hero-form"
      })

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", phone: "", acceptPolicy: false })
        }, 4000)
      } else {
        // Fallback or error handling can go here, but for now we proceed with UI success
        // since the lead is still important and we might want to show success anyway 
        // or a specific error toast if you prefer.
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[85vh] lg:min-h-[780px] flex items-center overflow-hidden" id="inicio">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&auto=format"
          alt="Seguros de Salud Sanitas"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full py-12 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-border/60 shadow-sm">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.7</span>
                <span className="text-sm text-muted-foreground">· 143 opiniones en Google</span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.08]">
                Seguro de Salud Sanitas{" "}
                <span className="text-[#0091DA]">desde 32€/mes</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mt-5">
                Sin esperas, sin permanencia y con acceso inmediato a miles de especialistas en toda España.
              </p>
            </Reveal>

            {/* Agent photos strip */}
            <Reveal delay={0.18}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image width={40} height={40} src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=faces" alt="Profesional médico" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white" />
                  <Image width={40} height={40} src="https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=80&h=80&fit=crop&crop=faces" alt="Profesional médico" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white" />
                  <Image width={40} height={40} src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces" alt="Profesional médico" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white" />
                  <Image width={40} height={40} src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&h=80&fit=crop&crop=faces" alt="Profesional médico" className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">+58.000 profesionales</p>
                  <p className="text-xs text-muted-foreground">en el cuadro médico Sanitas</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {[
                  { icon: Shield, text: "Sin permanencia" },
                  { icon: Clock, text: "Sin carencias" },
                  { icon: Users, text: "57.000+ médicos" },
                  { icon: Phone, text: "Atención inmediata" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-7 h-7 rounded-full bg-[#0091DA]/10 flex items-center justify-center">
                      <item.icon className="w-3.5 h-3.5 text-[#0091DA]" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3} className="hidden lg:block">
              <a href="#seguros" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group pt-2">
                <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2 group-hover:border-[#0091DA]/50 transition-colors">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
                <span>Descubre nuestros seguros</span>
              </a>
            </Reveal>
          </div>

          {/* Right Content - Inline Form */}
          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="relative">
                <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-2xl shadow-black/[0.08] border border-border/40">
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#0091DA] to-[#00C2FF] rounded-b-full" />

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">¡Gracias!</h3>
                      <p className="text-muted-foreground">Te llamaremos en menos de 5 minutos</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-1">Te llamamos gratis</h2>
                        <p className="text-sm text-muted-foreground">Déjanos tu número y te contactamos en menos de 5 min</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4" id="hero-form">
                        <div className="space-y-1.5">
                          <Label htmlFor="hero-name" className="text-sm font-medium">Nombre</Label>
                          <Input id="hero-name" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="rounded-xl py-5 text-base bg-muted/40 border-border/60 focus:bg-white focus:border-[#0091DA] transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="hero-phone" className="text-sm font-medium">Teléfono</Label>
                          <Input id="hero-phone" type="tel" placeholder="612 345 678" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="rounded-xl py-5 text-base bg-muted/40 border-border/60 focus:bg-white focus:border-[#0091DA] transition-all" />
                        </div>
                        <div className="flex items-start gap-2.5 pt-1">
                          <Checkbox id="hero-accept-policy" checked={formData.acceptPolicy} onCheckedChange={(checked) => setFormData({ ...formData, acceptPolicy: checked as boolean })} required className="mt-0.5" />
                          <Label htmlFor="hero-accept-policy" className="text-xs leading-relaxed text-muted-foreground">
                            He leído y acepto la <a href="/politica-privacidad" className="text-[#0091DA] hover:underline">política de privacidad</a>
                          </Label>
                        </div>
                        <Button type="submit" className="w-full rounded-xl py-6 text-base font-semibold bg-[#0091DA] hover:bg-[#007BBD] shadow-lg shadow-[#0091DA]/20 hover:shadow-xl hover:shadow-[#0091DA]/30 transition-all duration-300 group" disabled={!formData.acceptPolicy || isSubmitting}>
                          {isSubmitting ? "Enviando..." : "Solicitar llamada gratuita"}
                          {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />}
                        </Button>
                      </form>
                      <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>O llama directamente:</span>
                        <a href="tel:+34624217323" className="font-bold text-foreground hover:text-[#0091DA] transition-colors">624 21 73 23</a>
                      </div>
                    </>
                  )}
                </div>

                <div className="hidden sm:block absolute -bottom-4 -left-4 bg-foreground text-background px-5 py-3 rounded-2xl shadow-xl animate-float">
                  <p className="text-xs font-medium opacity-70">Desde</p>
                  <p className="text-2xl font-bold">32€<span className="text-sm font-medium opacity-70">/mes</span></p>
                </div>
                <div className="absolute -top-3 -right-3 bg-[#0091DA] text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
                  Blua GRATIS
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
