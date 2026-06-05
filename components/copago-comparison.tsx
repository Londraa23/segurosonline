"use client"

import { Check, X } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface CopagoComparisonProps {
  title: string;
  leftTitle: string;
  leftDescription: string;
  leftPoints: string[];
  rightTitle: string;
  rightDescription: string;
  rightPoints: string[];
}

export function CopagoComparison({
  title,
  leftTitle,
  leftDescription,
  leftPoints,
  rightTitle,
  rightDescription,
  rightPoints
}: CopagoComparisonProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.05]">
            {title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Left Column */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-border/80 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{leftTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {leftDescription}
              </p>
              
              <ul className="space-y-4">
                {leftPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right Column (Highlighted) */}
          <Reveal delay={0.2}>
            <div className="bg-[#002A54] text-white rounded-[2rem] p-8 lg:p-10 shadow-2xl h-full flex flex-col relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#0091DA]/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{rightTitle}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-[#0091DA] px-2.5 py-1 rounded-full">Recomendado</span>
                </div>
                <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                  {rightDescription}
                </p>
                
                <ul className="space-y-4">
                  {rightPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0091DA]/20 flex items-center justify-center shrink-0 mt-0.5 border border-[#0091DA]/30">
                        <Check className="w-3 h-3 text-[#0091DA]" />
                      </div>
                      <span className="text-sm font-medium text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
