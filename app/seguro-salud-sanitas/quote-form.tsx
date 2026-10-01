"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Loader2, Lock, Phone } from "lucide-react"
import { submitToMake } from "@/lib/form-submission"

export type QuoteMode = "precio" | "llamada"

export const INSURED_OPTIONS = [
  "Solo a mí",
  "A mi pareja y a mí",
  "A mi familia (con hijos)",
  "A mis hijos",
  "A otra persona",
]

export const PLAN_OPTIONS = ["Sanitas Avanza", "Sanitas Más Salud", "Sanitas Único"]

interface QuoteFormProps {
  formId: string
  mode?: QuoteMode
  plan?: string
  onModeChange?: (mode: QuoteMode) => void
  onPlanChange?: (plan: string) => void
  title?: string
}

const PHONE_REGEX = /^[6789]\d{8}$/
const CP_REGEX = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/

function getTodayISO() {
  return new Date().toISOString().slice(0, 10)
}

function trackLead(formId: string) {
  if (typeof window === "undefined") return
  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: "generate_lead", form_id: formId })
  if (typeof w.gtag === "function") w.gtag("event", "generate_lead", { form_id: formId })
}

const fieldClass =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 outline-none transition-colors focus:border-[#0091DA] focus:bg-white focus:ring-2 focus:ring-[#0091DA]/20 aria-[invalid=true]:border-red-400"

export function QuoteForm({
  formId,
  mode = "precio",
  plan = "",
  onModeChange,
  onPlanChange,
  title = "Calcula tu seguro Sanitas",
}: QuoteFormProps) {
  const [insured, setInsured] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [cp, setCp] = useState("")
  const [phone, setPhone] = useState("")
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isCallback = mode === "llamada"
  const cleanPhone = phone.replace(/\s/g, "")

  const errors = {
    insured: !isCallback && !insured,
    birthDate: !isCallback && (!birthDate || birthDate > getTodayISO() || birthDate < "1920-01-01"),
    cp: !isCallback && !CP_REGEX.test(cp),
    phone: !PHONE_REGEX.test(cleanPhone),
    acceptPolicy: !acceptPolicy,
  }
  const hasErrors = Object.values(errors).some(Boolean)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (hasErrors) {
      setShowErrors(true)
      return
    }
    setIsSubmitting(true)

    // Same UX as the rest of the site: show success even if the webhook fails so the lead UX is not lost
    await submitToMake({
      phone: cleanPhone,
      acceptPolicy,
      pageUrl: window.location.href,
      formId: isCallback ? `${formId}-llamada` : formId,
      requestType: isCallback ? "Llamada" : "Precio",
      ...(isCallback
        ? {}
        : { insured, birthDate, cp, plan: plan || "Sin preferencia" }),
    })
    trackLead(formId)

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-neutral-900">¡Solicitud recibida!</h3>
        <p className="mx-auto max-w-sm text-neutral-600">
          Un asesor te llamará en breve para darte tu precio personalizado y resolver tus dudas, sin compromiso.
        </p>
      </div>
    )
  }

  const errorText = (show: boolean, text: string) =>
    showErrors && show ? <p className="mt-1 text-xs text-red-600">{text}</p> : null

  return (
    <form onSubmit={handleSubmit} noValidate id={formId} className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-[#002A54] sm:text-2xl">
          {isCallback ? "Te llamamos sin compromiso" : title}
        </h3>
        {plan && !isCallback && (
          <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-neutral-600">
            Modalidad: <span className="font-semibold text-[#0091DA]">{plan}</span>
            {onPlanChange && (
              <button type="button" onClick={() => onPlanChange("")} className="text-xs text-neutral-400 underline hover:text-neutral-700">
                quitar
              </button>
            )}
          </p>
        )}
      </div>

      {!isCallback && (
        <>
          <div>
            <label htmlFor={`${formId}-insured`} className="mb-1.5 block text-sm font-medium text-neutral-800">
              ¿A quién quieres asegurar?
            </label>
            <select
              id={`${formId}-insured`}
              value={insured}
              onChange={(e) => setInsured(e.target.value)}
              aria-invalid={showErrors && errors.insured}
              className={fieldClass}
            >
              <option value="" disabled>Selecciona una opción</option>
              {INSURED_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errorText(errors.insured, "Indica a quién quieres asegurar.")}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${formId}-birth`} className="mb-1.5 block text-sm font-medium text-neutral-800">
                Fecha de nacimiento
              </label>
              <input
                id={`${formId}-birth`}
                type="date"
                min="1920-01-01"
                max={getTodayISO()}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                aria-invalid={showErrors && errors.birthDate}
                className={fieldClass}
              />
              {errorText(errors.birthDate, "Introduce una fecha válida.")}
            </div>
            <div>
              <label htmlFor={`${formId}-cp`} className="mb-1.5 block text-sm font-medium text-neutral-800">
                Código postal
              </label>
              <input
                id={`${formId}-cp`}
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="28001"
                maxLength={5}
                value={cp}
                onChange={(e) => setCp(e.target.value.replace(/\D/g, ""))}
                aria-invalid={showErrors && errors.cp}
                className={fieldClass}
              />
              {errorText(errors.cp, "Introduce un código postal válido (5 cifras).")}
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-sm font-medium text-neutral-800">
          Teléfono
        </label>
        <input
          id={`${formId}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="612 345 678"
          maxLength={11}
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^\d\s]/g, ""))}
          aria-invalid={showErrors && errors.phone}
          className={fieldClass}
        />
        {errorText(errors.phone, "Introduce un teléfono válido de 9 cifras.")}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={acceptPolicy}
            onChange={(e) => setAcceptPolicy(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-neutral-300 accent-[#0091DA]"
          />
          <span className="text-xs leading-relaxed text-neutral-600">
            He leído y acepto la{" "}
            <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#0091DA] underline-offset-2 hover:underline">
              Política de Privacidad
            </a>{" "}
            y consiento el tratamiento de mis datos para atender mi solicitud de información.
          </span>
        </label>
        {errorText(errors.acceptPolicy, "Debes aceptar la Política de Privacidad para continuar.")}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFE169] px-6 py-4 text-lg font-bold text-[#002A54] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#FFD633] hover:shadow-lg disabled:translate-y-0 disabled:opacity-60"
      >
        {isSubmitting ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Enviando...</>
        ) : isCallback ? (
          <><Phone className="h-5 w-5" /> Quiero que me llaméis</>
        ) : (
          <>Calcular mi precio <ArrowRight className="h-5 w-5" /></>
        )}
      </button>

      <p className="flex items-start justify-center gap-1.5 text-center text-xs text-neutral-500">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Sin compromiso. Te contactaremos para darte un precio personalizado y resolver tus dudas.
      </p>

      {onModeChange && (
        <p className="text-center text-sm">
          <button
            type="button"
            onClick={() => onModeChange(isCallback ? "precio" : "llamada")}
            className="font-medium text-[#0091DA] underline-offset-2 hover:underline"
          >
            {isCallback ? "Prefiero calcular mi precio" : "Prefiero que me llaméis"}
          </button>
        </p>
      )}
    </form>
  )
}
