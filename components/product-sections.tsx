"use client"

import { ReactNode } from "react"
import Image from "next/image"
import {
  CheckCircle2, Info, Shield, Clock, Smartphone, Star,
  Check, X, Home, TrendingUp, Percent, BadgeCheck, ArrowRight
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import Link from "next/link"

// ──────────────────────────────────────────────────────────
// Hero Product Block — Santander style
// Left: label, h2, description, checklist, CTA
// Right: big rounded image
// Below: 3-col key facts
// ──────────────────────────────────────────────────────────
interface KeyFact { label: string; stat: string; sublabel?: string }

export function ProductHeroBlock({
  label, title, description, items, imageSrc, imageAlt, ctaLabel = "Solicitar información", ctaHref = "#contacto", facts = []
}: {
  label?: string
  title: string
  description: string
  items: string[]
  imageSrc: string
  imageAlt?: string
  ctaLabel?: string
  ctaHref?: string
  facts?: KeyFact[]
}) {
  return (
    <section className="bg-white pt-24 pb-16 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left */}
          <Reveal>
            <div className="space-y-6">
              {label && <p className="text-sm font-semibold text-muted-foreground">{label}</p>}
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">{title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">{description}</p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-[#0091DA] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0091DA] text-white font-semibold text-sm hover:bg-[#007BBD] transition-colors shadow-lg shadow-[#0091DA]/20"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom: key facts — Santander style 3-col */}
        {facts.length > 0 && (
          <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(facts.length, 3)} divide-y sm:divide-y-0 sm:divide-x divide-border/50`}>
            {facts.map((f, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="py-6 sm:px-8 first:pl-0 last:pr-0 space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{f.label}</p>
                  <p className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">{f.stat}</p>
                  {f.sublabel && <p className="text-xs text-muted-foreground">{f.sublabel}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Stat Bar — simpler, homepage-style, light bg
// ──────────────────────────────────────────────────────────
interface StatItem { value: string; label: string }
export function ProductStatBar({ stats }: { stats: StatItem[] }) {
  return (
    <section className="py-12 bg-muted/30 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="py-4 md:py-0 md:px-8 first:pl-0 last:pr-0 space-y-1 text-center md:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Feature Block — Santander detail section
// ──────────────────────────────────────────────────────────
export function FeatureBlock({
  title, description, items, imageSrc, imageAlt = "", reverse = false, badge, dark = false
}: {
  title: string
  description?: string
  items: string[]
  imageSrc: string
  imageAlt?: string
  reverse?: boolean
  badge?: string
  dark?: boolean
}) {
  const bg = dark ? "bg-[#002A54]" : "bg-white"
  const titleColor = dark ? "text-white" : "text-foreground"
  const descColor = dark ? "text-white/70" : "text-muted-foreground"
  const itemColor = dark ? "text-white/80" : "text-muted-foreground"
  const border = dark ? "" : "border-t border-border/40"

  return (
    <section className={`py-20 ${bg} ${border}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image src={imageSrc} alt={imageAlt || title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {badge && (
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0091DA]">{badge}</p>
              )}
              <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${titleColor}`}>{title}</h2>
              {description && <p className={`text-base leading-relaxed ${descColor}`}>{description}</p>}
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${dark ? "text-[#0091DA]" : "text-[#0091DA]"}`} />
                    <span className={`text-sm leading-relaxed ${itemColor}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Coverage Cards Grid — cleaner, lighter, more Santander
// ──────────────────────────────────────────────────────────
const IconMap = {
  shield: Shield, clock: Clock, smartphone: Smartphone,
  star: Star, check: CheckCircle2, home: Home, trending: TrendingUp, percent: Percent
}
type IconKey = keyof typeof IconMap

interface CoverageCard { icon: IconKey; label: string; stat: string; description?: string }

export function CoverageCardGrid({ title, subtitle, cards }: { title?: string; subtitle?: string; cards: CoverageCard[] }) {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        {(title || subtitle) && (
          <Reveal className="mb-14 max-w-3xl">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">{title}</h2>}
            {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
          </Reveal>
        )}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-${Math.min(cards.length, 3)} gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/50`}>
          {cards.map((card, i) => {
            const Icon = IconMap[card.icon]
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group py-6 sm:px-8 first:pl-0 last:pr-0 space-y-2">
                  <Icon className="w-5 h-5 text-[#0091DA] mb-3" />
                  <p className="text-xs font-medium text-muted-foreground">{card.label}</p>
                  <p className="text-2xl font-bold text-foreground leading-tight">{card.stat}</p>
                  {card.description && <p className="text-xs text-muted-foreground">{card.description}</p>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// White card grid — for detailed feature cards
// ──────────────────────────────────────────────────────────
interface WhiteCard { icon: IconKey; title: string; description: string }
export function WhiteCardGrid({ title, subtitle, cards }: { title: string; subtitle?: string; cards: WhiteCard[] }) {
  return (
    <section className="py-20 bg-white border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = IconMap[card.icon]
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group p-7 rounded-xl border border-border/50 hover:border-[#0091DA]/30 hover:shadow-md hover:shadow-[#0091DA]/[0.04] hover:-translate-y-0.5 transition-all duration-300 h-full bg-white">
                  <Icon className="w-6 h-6 text-[#0091DA] mb-4" />
                  <h3 className="text-base font-bold mb-2 text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Blua Section — Santander-compatible: one dark card + image
// ──────────────────────────────────────────────────────────
export function BluaSection({ items }: { items: string[] }) {
  return (
    <section className="py-20 bg-muted/10 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="p-8 rounded-2xl bg-[#002A54] text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 w-48 h-48 bg-[#0091DA]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10 space-y-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0091DA] bg-[#0091DA]/10 px-3 py-1 rounded-full">
                  <BadgeCheck className="w-3.5 h-3.5" /> Incluido GRATIS
                </span>
                <h2 className="text-3xl font-bold text-white">Blua digital.<br />Tu médico en el móvil.</h2>
                <p className="text-white/70 text-sm leading-relaxed">Videoconsulta, urgencias 24h y programas de salud personalizados — sin desplazamientos ni esperas.</p>
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#0091DA] shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format"
                alt="App Blua Sanitas"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Process Steps — numbered, clean
// ──────────────────────────────────────────────────────────
interface Step { title: string; description: string }
export function ProcessSteps({ title, subtitle, steps }: { title: string; subtitle?: string; steps: Step[] }) {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <div className="text-5xl font-black text-[#0091DA]/15 mb-3 leading-none select-none">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-base font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Comparison Table — clean, light
// ──────────────────────────────────────────────────────────
interface ComparisonRow { feature: string; withCopago: boolean | string; withoutCopago: boolean | string }
export function ComparisonTable({ title, subtitle, rows, colA, colB }: { title: string; subtitle?: string; rows: ComparisonRow[]; colA: string; colB: string }) {
  const Cell = ({ val }: { val: boolean | string }) => {
    if (val === true) return <div className="w-6 h-6 rounded-full bg-[#0091DA]/10 flex items-center justify-center mx-auto"><Check className="w-4 h-4 text-[#0091DA]" /></div>
    if (val === false) return <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mx-auto"><X className="w-4 h-4 text-muted-foreground/40" /></div>
    return <span className="text-foreground text-sm">{val}</span>
  }
  return (
    <section className="py-20 bg-white border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
            <div className="grid grid-cols-3 bg-muted/30 border-b border-border/40">
              <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Cobertura</div>
              <div className="p-4 text-center font-semibold text-foreground border-l border-border/30 text-sm">{colA}</div>
              <div className="p-4 text-center font-semibold text-[#0091DA] border-l border-border/30 text-sm">{colB}</div>
            </div>
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-border/20 ${i % 2 === 0 ? "" : "bg-muted/10"}`}>
                <div className="p-4 text-foreground text-sm">{row.feature}</div>
                <div className="p-4 text-center border-l border-border/20"><Cell val={row.withCopago} /></div>
                <div className="p-4 text-center border-l border-border/20"><Cell val={row.withoutCopago} /></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Price Highlight — big number, Santander-ish
// ──────────────────────────────────────────────────────────
export function PriceHighlight({ label, price, unit, features, imageSrc, note }: {
  label: string; price: string; unit: string; features: string[]; imageSrc: string; note?: string
}) {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0091DA]">{label}</p>
              <div className="flex items-end gap-2">
                <span className="text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">{price}</span>
                <span className="text-xl text-muted-foreground font-medium mb-3">{unit}</span>
              </div>
              <ul className="space-y-2">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-[#0091DA] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {note && <p className="text-muted-foreground text-xs">{note}</p>}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image src={imageSrc} alt={label} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Statement Band — blue, bold statement
// ──────────────────────────────────────────────────────────
export function StatementBand({ statement, attribution }: { statement: string; attribution?: string }) {
  return (
    <section className="py-16 bg-[#002A54]">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-2xl sm:text-3xl font-bold text-white leading-tight">{statement}</p>
          {attribution && <p className="text-white/40 text-xs mt-5 uppercase tracking-widest">{attribution}</p>}
        </Reveal>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Three Column Features
// ──────────────────────────────────────────────────────────
interface TextColumn { title: string; body: string }
export function ThreeColumnFeatures({ title, columns }: { title: string; columns: TextColumn[] }) {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {columns.map((col, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0 space-y-2">
                <div className="w-8 h-0.5 bg-[#0091DA] mb-4" />
                <h3 className="text-base font-bold text-foreground">{col.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{col.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Legal Note
// ──────────────────────────────────────────────────────────
export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <section className="py-8 bg-white border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex gap-3 p-5 rounded-xl bg-muted/30 text-xs text-muted-foreground">
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  )
}

// ──────────────────────────────────────────────────────────
// Legacy compat
// ──────────────────────────────────────────────────────────
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-[#0091DA] shrink-0 mt-0.5" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ProductFeatureSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-20 bg-white border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div className="md:sticky md:top-32 self-start">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
            <div className="h-0.5 w-12 bg-[#0091DA] mt-4" />
          </div>
          <div className="text-muted-foreground text-base leading-relaxed [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProductTextSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-20 bg-muted/30 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">{title}</h2>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">{children}</div>
      </div>
    </section>
  )
}
