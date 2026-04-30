import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react"

const footerLinks = {
  seguros: [
    { label: "Seguros para particulares", href: "/seguros-medicos-para-particulares/" },
    { label: "Seguros para autónomos", href: "/seguros-para-autonomos/" },
    { label: "Seguros para empresas", href: "/seguros-medicos-para-empresas/" },
    { label: "Seguros para mayores de 60", href: "/sanitas-mayores/" },
    { label: "Seguros para extranjeros", href: "/seguros-medicos-para-extranjeros/" },
    { label: "Seguros sin copagos", href: "/seguros-medicos-para-particulares/sanitas-mas-salud/" },
    { label: "Complementos de Salud", href: "/complementos-de-salud/" },
    { label: "Sanitas Inclusivo", href: "/seguros-medicos-para-particulares/sanitas-inclusivo-discapacidad/" },
  ],
  dental: [
    { label: "Seguro Dental", href: "/seguros-dentales/" },
    { label: "Dental Milenium", href: "/seguros-dentales/sanitas-dental-milenium/" },
    { label: "Dental Premium", href: "/seguros-dentales/sanitas-dental-premium/" },
    { label: "Mascotas", href: "/sanitas-mascotas/" },
    { label: "Seguros de Decesos", href: "/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/" },
  ],
  servicios: [
    { label: "Servicios de Salud", href: "/servicios-de-salud/" },
    { label: "Vista", href: "/servicios-de-salud/vista/" },
    { label: "Maternidad", href: "/servicios-de-salud/maternidad/" },
    { label: "Nutrición", href: "/servicios-de-salud/nutricion/" },
    { label: "Estética", href: "/servicios-de-salud/estetica/" },
    { label: "Chequeos de Salud", href: "/servicios-de-salud/chequeos-de-salud/" },
  ],
  legal: [
    { label: "Aviso Legal", href: "/aviso-legal" },
    { label: "Política de Privacidad", href: "/politica-privacidad" },
    { label: "Política de Cookies", href: "/politica-cookies" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/sanitas_logo.webp"
                alt="Sanitas - Parte de Bupa"
                width={100}
                height={50}
                className="h-9 w-auto"
              />
              <div>
                <p className="text-lg font-bold">Seguros<span className="text-[#0091DA]">Online</span></p>
                <p className="text-xs text-muted-foreground">Agencia Exclusiva Sanitas</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-sm">
              Agencia de Seguros Exclusiva de Sanitas S.A. de Seguros.
              Expertos asesores de seguros médicos Sanitas con más de 30 años de experiencia.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-5">

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-3 text-sm">
                  <a href="tel:+34624217323" className="font-medium hover:text-[#0091DA] transition-colors">624 21 73 23</a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/34624217323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:border-[#0091DA]/30 hover:bg-[#0091DA]/5 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@segurosonline.net"
                className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center hover:border-[#0091DA]/30 hover:bg-[#0091DA]/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-sm mb-3">Seguros Médicos</h3>
              <ul className="space-y-2">
                {footerLinks.seguros.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3">Dental y Otros</h3>
              <ul className="space-y-2">
                {footerLinks.dental.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3">Servicios de Salud</h3>
              <ul className="space-y-2">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-3">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.sanitas.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#0091DA] font-medium mt-4 hover:underline"
              >
                sanitas.es
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SegurosOnline.net &mdash; Agencia Exclusiva Sanitas. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Expertos asesores de Seguros M&eacute;dicos Sanitas
          </p>
        </div>
      </div>
    </footer>
  )
}
