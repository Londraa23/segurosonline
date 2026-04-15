"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        setIsVisible(window.scrollY > 600)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 xl:hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-white border-t border-border shadow-2xl shadow-black/10 px-4 py-3 safe-area-pb">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <a
            href="tel:+34673674849"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-muted transition-colors shrink-0"
          >
            <Phone className="w-4 h-4 text-[#0091DA]" />
            Llamar
          </a>
          <Button
            className="flex-1 rounded-full py-5 text-sm font-semibold bg-[#0091DA] hover:bg-[#007BBD]"
            asChild
          >
            <a href="#contacto">Te llamamos gratis</a>
          </Button>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-full hover:bg-muted transition-colors shrink-0"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
