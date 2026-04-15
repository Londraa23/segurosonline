"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Send, Check, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { submitToMake } from "@/lib/form-submission"

interface SanitasPageHeroProps {
  breadcrumb: { label: string; href?: string }[];
  label?: string;
  h1: React.ReactNode;
  body: string;
  badges?: (string | { text: string; variant?: "blue" | "red" })[];
  trustItems?: string[];
  imageSrc: string;
}

export function SanitasPageHero({ breadcrumb, label, h1, body, badges = [], trustItems = [], imageSrc }: SanitasPageHeroProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", acceptPolicy: false })
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
        formId: "page-hero-form"
      })

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: "", phone: "", acceptPolicy: false })
        }, 4000)
      } else {
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden" id="inicio">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={imageSrc} 
          alt="Sanitas Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full py-16 lg:py-20 mt-16">
        {/* Breadcrumb */}
        <Reveal delay={0.05}>
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground font-medium mb-8">
            {breadcrumb.map((item, i) => (
              <div key={item.label} className="flex items-center gap-1.5">
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#0091DA] transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            ))}
          </nav>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              {label && (
                <p className="text-sm font-bold text-[#0091DA] uppercase tracking-wider mb-3">{label}</p>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08]">
                {h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mt-5">
                {body}
              </p>
            </Reveal>

            {/* Badges */}
            {badges.length > 0 && (
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, i) => {
                    const isObject = typeof badge !== "string"
                    const text = isObject ? badge.text : badge
                    const variant = isObject ? badge.variant : "blue"
                    const variantStyles = {
                      blue: "bg-[#0091DA]/10 text-[#0091DA]",
                      red: "bg-red-600 text-white shadow-md shadow-red-600/20"
                    }
                    return (
                      <span key={i} className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold ${variantStyles[variant as keyof typeof variantStyles] || variantStyles.blue}`}>
                        {text}
                      </span>
                    )
                  })}
                </div>
              </Reveal>
            )}

            {/* Trust Items */}
            {trustItems.length > 0 && (
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {trustItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-7 h-7 rounded-full bg-[#0091DA]/10 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#0091DA]" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Content - Form */}
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
                        <h2 className="text-xl font-bold mb-1">Te asesoramos gratis.</h2>
                        <p className="text-sm text-muted-foreground">Déjanos tu número y te contactamos ahora mismo.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
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
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
