"use client"

import { useState } from "react"
import { Phone, MapPin, MessageCircle, Send, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"
import { submitToMake } from "@/lib/form-submission"

interface ContactSectionProps {
  label?: string;
  title?: string;
  description?: string;
}

export function ContactSection({
  label = "Contacto",
  title = "¿Hablamos?",
  description = "Contacta con nosotros para resolver tus dudas. Nuestro equipo de expertos está disponible para asesorarte en la búsqueda del seguro ideal."
}: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", acceptPolicy: false })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitToMake({
        ...formData,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        formId: "contact-form"
      })

      if (result.success) {
        setSubmitted(true)
      } else {
        setSubmitted(true) // Proceed with success UI even if webhook fails, to not lose the lead UX
      }
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-12 lg:py-24 bg-white text-foreground border-t border-border/40" aria-labelledby="contacto-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <Reveal>
            {label && <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">{label}</p>}
            <h2 id="contacto-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                {description}
              </p>
            )}

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/60 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#0091DA]/[0.08] flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-[#0091DA]" /></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Llámanos ahora</h3>
                  <div className="space-y-0.5 text-muted-foreground text-sm">
                    <a href="tel:+34624217323" className="block hover:text-[#0091DA] font-medium transition-colors">624 21 73 23</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/60 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#0091DA]/[0.08] flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-[#0091DA]" /></div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horario de atención</h3>
                  <p className="text-muted-foreground text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                </div>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-xl px-5 h-12 text-sm border-border/60 hover:bg-muted/30">
              <a href="https://wa.me/34624217323" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4 mr-2" />Contactar por WhatsApp</a>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white text-foreground rounded-2xl p-7 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-500" /></div>
                  <h3 className="text-xl font-bold mb-2">¡Gracias por contactarnos!</h3>
                  <p className="text-muted-foreground">Te llamaremos lo antes posible para resolver todas tus dudas.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-1">Te llamamos gratis</h3>
                  <p className="text-muted-foreground text-sm mb-6">Déjanos tus datos y te contactamos en menos de 5 minutos</p>
                  <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name" className="text-sm font-medium">Nombre</Label>
                      <Input id="contact-name" placeholder="Tu nombre completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="rounded-xl py-5 text-base bg-muted/40 border-border/60 focus:bg-white focus:border-[#0091DA] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-phone" className="text-sm font-medium">Teléfono</Label>
                      <Input id="contact-phone" type="tel" placeholder="612 345 678" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="rounded-xl py-5 text-base bg-muted/40 border-border/60 focus:bg-white focus:border-[#0091DA] transition-all" />
                    </div>
                    <div className="flex items-start gap-2.5 pt-1">
                      <Checkbox id="contact-accept-policy" checked={formData.acceptPolicy} onCheckedChange={(checked) => setFormData({ ...formData, acceptPolicy: checked as boolean })} required className="mt-0.5" />
                      <Label htmlFor="contact-accept-policy" className="text-xs leading-relaxed text-muted-foreground">
                        He leído y acepto la <a href="/politica-privacidad" className="text-[#0091DA] hover:underline">política de privacidad</a>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full rounded-xl py-6 text-base font-semibold bg-[#0091DA] hover:bg-[#007BBD] mt-2 group" disabled={!formData.acceptPolicy || isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Solicitar llamada gratuita"}
                      {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />}
                    </Button>
                  </form>
                </>
              )}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  )
}
