import { Metadata } from 'next'

const BASE_URL = 'https://segurosonline.net'

interface MetadataProps {
  title: string
  description: string
  path: string
  subTitle?: boolean
  image?: string
}

export function generateMetadata({
  title,
  description,
  path,
  subTitle = true,
  image = '/og-image.jpg'
}: MetadataProps): Metadata {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const fullTitle = subTitle ? `${title} | SegurosOnline.net` : title

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es-ES': url,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [{ url: image }],
      type: 'website',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
