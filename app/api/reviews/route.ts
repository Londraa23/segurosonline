import { NextResponse } from 'next/server'

// Place ID for Sanitas office near Metro Ventas
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJU0CwkbQoQg0Rfb9dXVSRp4g'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || ''

// Fallback reviews when API key is not configured
const fallbackReviews = [
  {
    author_name: "Emilia Tanasescu",
    relative_time_description: "hace 7 días",
    rating: 5,
    text: "Quiero agradecer a Susana Barroso por su excelente atención y profesionalidad. Me ayudó a cambiar mi seguro de salud por uno mucho mejor, adaptado a mis necesidades. Totalmente recomendable.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 604800,
  },
  {
    author_name: "Maria Montilla",
    relative_time_description: "hace 15 días",
    rating: 5,
    text: "Excelente trato y amable atención, satisfaciendo mis necesidades. Cristina Barroso es la mejor. Recomiendo esta oficina 100%.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 1296000,
  },
  {
    author_name: "Chiara Zangrando",
    relative_time_description: "hace 27 días",
    rating: 5,
    text: "Susana, muy profesional me ayudó mucho en todo el proceso de alta del seguro. Me encantó el servicio y la rapidez con la que todo fue tramitado.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 2332800,
  },
  {
    author_name: "Catalina Campins",
    relative_time_description: "hace un mes",
    rating: 5,
    text: "He contratado la póliza para mayores 60 por email, mi gestora Cristina ha sido clara en mis peticiones y dudas. Le agradezco su confianza y amabilidad.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 2592000,
  },
  {
    author_name: "Julieta Reynoso",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Excelente atención de Susana Barroso. Muy profesional, resolvió todas mis dudas sobre el seguro y me ayudó a elegir la mejor opción para mi familia.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 5184000,
  },
  {
    author_name: "Atom Rutherford",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Tuve una muy buena experiencia con Susana, es una gran profesional y me ayudó con la contratación del seguro médico para mi residencia. Todo fue rápido y claro.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 5184000,
  },
  {
    author_name: "Andrea Quintana",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Muy buena experiencia. Gestión rápida y eficiente. El equipo de la oficina es muy profesional y amable. Recomiendo sin dudarlo.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 5184000,
  },
  {
    author_name: "Felipe Riesco",
    relative_time_description: "hace 3 meses",
    rating: 5,
    text: "Muy clara y rápida atención. Muy amable y gran asesora Susana Barroso. Una experiencia muy positiva en la contratación de mi seguro.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 7776000,
  },
  {
    author_name: "Laura García",
    relative_time_description: "hace 3 meses",
    rating: 5,
    text: "Increíble atención al cliente. Me explicaron todo con detalle y encontraron el seguro perfecto para mis necesidades. El proceso fue muy sencillo.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 7776000,
  },
  {
    author_name: "S Glick",
    relative_time_description: "hace 4 meses",
    rating: 5,
    text: "Being a foreigner, I was worried about the process but the team made everything incredibly easy. Excellent service and very professional.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 10368000,
  },
]

// In-memory cache
let cachedReviews: { data: unknown; timestamp: number } | null = null
const CACHE_DURATION = 3600 * 1000 // 1 hour

export async function GET() {
  // Check cache
  if (cachedReviews && Date.now() - cachedReviews.timestamp < CACHE_DURATION) {
    return NextResponse.json(cachedReviews.data)
  }

  // If no API key, return fallback data
  if (!API_KEY) {
    const fallbackData = {
      rating: 4.7,
      user_ratings_total: 143,
      reviews: fallbackReviews,
      source: 'fallback',
    }
    cachedReviews = { data: fallbackData, timestamp: Date.now() }
    return NextResponse.json(fallbackData)
  }

  try {
    // Fetch from Google Places API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&language=es&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== 'OK' || !data.result) {
      throw new Error(`Google API error: ${data.status}`)
    }

    const result = {
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
      source: 'google_api',
    }

    cachedReviews = { data: result, timestamp: Date.now() }
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    // Return fallback on error
    const fallbackData = {
      rating: 4.7,
      user_ratings_total: 143,
      reviews: fallbackReviews,
      source: 'fallback',
    }
    return NextResponse.json(fallbackData)
  }
}
