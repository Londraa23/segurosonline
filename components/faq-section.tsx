"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { DEFAULT_FAQS } from "@/lib/constants"

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  description?: string;
  label?: string;
  faqs?: FaqItem[];
}

export function FaqSection({
  title = "Todo lo que necesitas saber",
  description = "Resolvemos las dudas más comunes sobre seguros de salud Sanitas. Si tienes más preguntas, no dudes en contactarnos.",
  label = "Preguntas frecuentes",
  faqs = DEFAULT_FAQS
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32 bg-muted/30" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center mb-14">
          {label && <p className="text-sm font-semibold text-[#0091DA] uppercase tracking-wider mb-3">{label}</p>}
          <h2 id="faq-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-6">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.04}>
              <div className="bg-white rounded-xl border border-border/60 overflow-hidden transition-all duration-300 hover:border-[#0091DA]/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold pr-4 text-sm sm:text-base">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
