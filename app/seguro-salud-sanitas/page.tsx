import type { Metadata } from "next"
import LandingSanitasClient from "./landing-client"
import { LANDING_FAQS, resolveVariant } from "./content"

const TITLE = "Seguro de Salud Sanitas | Calcula tu Precio | SegurosOnline.net"
const DESCRIPTION =
  "Compara seguros de salud Sanitas y calcula tu precio. Opciones desde 33,60 €/mes*, con Blua y distintas modalidades de cobertura. Asesoramiento sin compromiso."
const URL = "https://segurosonline.net/seguro-salud-sanitas"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "es_ES",
    images: [{ url: "/og-image.jpg" }],
  },
  // Landing exclusiva de Google Ads: no se indexa para no competir con las páginas SEO del sitio
  robots: { index: false, follow: true },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LANDING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default async function SeguroSaludSanitasPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { v } = await searchParams

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LandingSanitasClient variant={resolveVariant(v)} />
    </>
  )
}
