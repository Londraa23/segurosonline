"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react"

const navigation = [
  {
    name: "Seguros Médicos",
    href: "#seguros",
    submenu: [
      { name: "Para particulares", href: "/seguros-medicos-para-particulares/" },
      { name: "Para autónomos", href: "/seguros-para-autonomos/" },
      { name: "Para empresas", href: "/seguros-medicos-para-empresas/" },
      { name: "Para mayores de 60", href: "/seguros-medicos-para-particulares/sanitas-unico/" },
      { name: "Para extranjeros", href: "/seguros-medicos-para-extranjeros/" },
      { name: "Complementos de Salud", href: "/complementos-de-salud/" },
      { name: "Seguros de Decesos", href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-familiar-iplus/" },
    ],
  },
  {
    name: "Dental",
    href: "#",
    submenu: [
      { name: "Sanitas Dental Milenium", href: "/seguros-dentales/sanitas-dental-milenium/" },
      { name: "Sanitas Dental Premium", href: "/seguros-dentales/sanitas-dental-premium/" },
    ],
  },
  { name: "Mascotas", href: "/sanitas-mascotas/" },
  {
    name: "Sanitas Mayores",
    href: "/sanitas-mayores/",
    submenu: [
      { name: "Residencias y Cuidados", href: "/sanitas-mayores/" },
      { name: "Nuestras Residencias", href: "/sanitas-mayores/sanitas-residencias/" },
    ],
  },
  {
    name: "Servicios",
    href: "#",
    submenu: [
      { name: "Vista", href: "/servicios-de-salud/vista/" },
      { name: "Maternidad", href: "/servicios-de-salud/maternidad/" },
      { name: "Nutrición", href: "/servicios-de-salud/nutricion/" },
    ],
  },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  const openSubmenu = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveSubmenu(name)
  }

  const closeSubmenu = () => {
    timeoutRef.current = setTimeout(() => setActiveSubmenu(null), 120)
  }

  return (
    <>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white border-b border-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-8">
          <nav className="flex items-center justify-between h-16" aria-label="Navegación principal">

            {/* Logo — compact */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="SegurosOnline.net - Inicio">
              <Image
                src="/sanitas_logo.webp"
                alt="Sanitas"
                width={96}
                height={48}
                className="h-8 w-auto"
                priority
              />
              <span className="hidden sm:inline text-[15px] font-semibold tracking-tight text-neutral-900">
                Seguros<span className="text-[#0091DA]">Online</span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && openSubmenu(item.name)}
                  onMouseLeave={closeSubmenu}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium transition-colors ${activeSubmenu === item.name
                        ? "text-neutral-900"
                        : "text-neutral-500 hover:text-neutral-900"
                      }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div
                      className="absolute top-full left-0 pt-1.5"
                      onMouseEnter={() => openSubmenu(item.name)}
                      onMouseLeave={closeSubmenu}
                    >
                      <div className="bg-white rounded-lg shadow-lg shadow-black/[0.08] ring-1 ring-black/[0.04] py-1.5 min-w-[220px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-center justify-between px-3.5 py-2 text-[13px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                          >
                            {subitem.name}
                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+34624217323"
                className="hidden xl:inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                624 21 73 23
              </a>

              <a
                href="#contacto"
                className="hidden xl:inline-flex h-9 items-center px-5 text-[13px] font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-full transition-colors"
              >
                Te llamamos gratis
              </a>

              {/* Mobile */}
              <a
                href="tel:+34673674849"
                className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                aria-label="Llamar"
              >
                <Phone className="w-[18px] h-[18px]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-neutral-600 hover:bg-neutral-50 transition-colors"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-40 overflow-y-auto">
            <nav className="px-6 py-4">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-neutral-100 last:border-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setMobileAccordion(mobileAccordion === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium text-neutral-900"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${mobileAccordion === item.name ? "rotate-180" : ""}`} />
                      </button>
                      {mobileAccordion === item.name && (
                        <div className="pb-3 space-y-0.5">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block pl-3 py-2 text-[14px] text-neutral-500 hover:text-neutral-900 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3.5 text-[15px] font-medium text-neutral-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile bottom actions */}
              <div className="mt-6 space-y-3">
                <div className="flex gap-3 text-[14px] text-neutral-500">
                  <a href="tel:+34624217323" className="hover:text-neutral-900 transition-colors">624 21 73 23</a>
                </div>
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full h-11 text-[14px] font-medium text-white bg-neutral-900 rounded-full transition-colors hover:bg-neutral-800"
                >
                  Te llamamos gratis
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
