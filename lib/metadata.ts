import { Metadata } from 'next'

const BASE_URL = 'https://segurosonline.net'

interface MetadataProps {
  title: string
  description: string
  path: string
  image?: string
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/og-image.jpg'
}: MetadataProps): Metadata {
  const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'es-ES': url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type: 'website',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title,
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
