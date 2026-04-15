import type { Metadata, Viewport } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SchemaMarkup } from '@/components/schema-markup'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://segurosonline.net'),
  title: {
    default: 'Seguros de Salud Sanitas Madrid | Desde 39€/mes – SegurosOnline.net',
    template: '%s | SegurosOnline.net – Agencia Exclusiva Sanitas'
  },
  description: 'Agencia exclusiva de seguros Sanitas en Madrid. Seguros de salud para particulares desde 39€/mes, autónomos, empresas y mayores de 60 años. Blua GRATIS para siempre. Sin carencias ni permanencia. Más de 57.000 médicos. ☎ Te llamamos gratis.',
  keywords: [
    'seguro médico Sanitas',
    'seguro de salud Madrid',
    'Sanitas particulares',
    'seguro médico autónomos Sanitas',
    'seguro de salud para empresas',
    'Sanitas empresas Madrid',
    'seguro dental Sanitas',
    'seguro mayores 60 años Sanitas',
    'seguro médico extranjeros España',
    'Sanitas sin copagos',
    'Sanitas sin carencias',
    'seguro salud económico Madrid',
    'Blua Sanitas gratis',
    'cuadro médico Sanitas Madrid',
    'seguro de decesos Sanitas',
    'Sanitas Más Salud',
    'Sanitas Avanza',
    'seguro médico familiar Madrid',
    'mejor seguro de salud privado Madrid',
    'contratar seguro Sanitas online',
    'seguro salud sin permanencia',
    'Sanitas inclusivo discapacidad',
    'Sanitas mascotas',
    'seguro médico con reembolso',
    'agencia exclusiva Sanitas Madrid',
  ],
  authors: [{ name: 'SegurosOnline.net', url: 'https://segurosonline.net' }],
  creator: 'SegurosOnline.net',
  publisher: 'SegurosOnline.net – Agencia Exclusiva de Sanitas S.A. de Seguros',
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
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://segurosonline.net',
    siteName: 'SegurosOnline.net',
    title: 'Seguros de Salud Sanitas Madrid | Desde 39€/mes – SegurosOnline.net',
    description: 'Agencia exclusiva de seguros Sanitas en Madrid. Seguros de salud para particulares, autónomos, empresas y mayores. Blua GRATIS para siempre. Sin carencias. ☎ Te llamamos gratis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SegurosOnline.net – Seguros de Salud Sanitas en Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguros de Salud Sanitas Madrid | Desde 39€/mes',
    description: 'Agencia exclusiva de seguros Sanitas en Madrid. Blua GRATIS para siempre. Sin carencias ni permanencia.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://segurosonline.net',
    languages: {
      'es-ES': 'https://segurosonline.net',
    },
  },
  category: 'insurance',
  verification: {
    google: '',
  },
  other: {
    'geo.region': 'ES-MD',
    'geo.placename': 'Madrid',
    'geo.position': '40.4308;-3.6628',
    'ICBM': '40.4308, -3.6628',
  },
}

export const viewport: Viewport = {
  themeColor: '#0091DA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" dir="ltr" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="icon" href="/sanitas_logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <SchemaMarkup />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
