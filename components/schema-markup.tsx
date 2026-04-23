interface SchemaProps {
  faqs?: Array<{ question: string; answer: string }>
  breadcrumbs?: Array<{ name: string; item: string }>
  type?: 'WebPage' | 'MedicalWebPage'
}

export function SchemaMarkup({ faqs, breadcrumbs, type = 'WebPage' }: SchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": "https://segurosonline.net/#organization",
    name: "Seguros Online | Agencia Exclusiva Sanitas",
    alternateName: "SegurosOnline.net",
    url: "https://segurosonline.net",
    logo: {
      "@type": "ImageObject",
      "url": "https://segurosonline.net/sanitas_logo.webp"
    },
    image: "https://segurosonline.net/og-image.jpg",
    description: "Agencia exclusiva de seguros Sanitas. Seguros de salud para particulares, autónomos, empresas y mayores de 60 años en España.",
    telephone: ["+34673674849", "+34615875184"],
    email: "info@segurosonline.net",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      "addressLocality": "España",
      "addressRegion": "España",
      "addressCountry": "ES"
    }
  }

  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: (breadcrumbs || [
      { name: "Inicio", item: "https://segurosonline.net" }
    ]).map((bc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: bc.name,
      item: bc.item
    }))
  }

  const mainPageSchema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": "https://segurosonline.net/#webpage",
    "isPartOf": { "@id": "https://segurosonline.net/#website" },
    "publisher": { "@id": "https://segurosonline.net/#organization" }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainPageSchema) }}
      />
    </>
  )
}

