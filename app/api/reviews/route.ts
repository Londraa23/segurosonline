import { NextResponse } from 'next/server'

// Place ID for Sanitas office near Metro Ventas
const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJU0CwkbQoQg0Rfb9dXVSRp4g'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || ''

// Fallback reviews when API key is not configured
const fallbackReviews = [
  {
<<<<<<< HEAD
    author_name: "Carlos Ruiz",
    relative_time_description: "hace 2 días",
    rating: 5,
    text: "Increíble la rapidez con la que gestionaron mi póliza. Buscaba un seguro sin copagos para mi familia y me ofrecieron la mejor opción calidad-precio. Muy contentos con el servicio.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 172800,
  },
  {
    author_name: "Elena Martínez",
    relative_time_description: "hace 1 semana",
    rating: 5,
    text: "Excelente atención al cliente. Me explicaron todas las coberturas con mucha paciencia y claridad. Da gusto encontrar profesionales que se preocupan de verdad por tus necesidades.",
=======
    author_name: "Emilia Tanasescu",
    relative_time_description: "hace 7 días",
    rating: 5,
    text: "Quiero agradecer a Susana Barroso por su excelente atención y profesionalidad. Me ayudó a cambiar mi seguro de salud por uno mucho mejor, adaptado a mis necesidades. Totalmente recomendable.",
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
    profile_photo_url: null,
    time: Date.now() / 1000 - 604800,
  },
  {
<<<<<<< HEAD
    author_name: "Javier Gómez",
    relative_time_description: "hace 2 semanas",
    rating: 5,
    text: "Contraté el seguro para autónomos y la gestión fue impecable. Todo online y muy rápido. Lo recomiendo totalmente por su profesionalidad y eficacia.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 1209600,
  },
  {
    author_name: "Sofía Rodríguez",
    relative_time_description: "hace un mes",
    rating: 5,
    text: "Buscaba un seguro para mis padres y nos ayudaron a encontrar uno adaptado a su edad con las mejores coberturas médicas. Un trato muy humano y cercano.",
=======
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
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
    profile_photo_url: null,
    time: Date.now() / 1000 - 2592000,
  },
  {
<<<<<<< HEAD
    author_name: "Miguel Ángel Torres",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Gran experiencia. Me resolvieron todas las dudas sobre la carencia y pude empezar a usar los servicios especialistas enseguida. Servicio de 10.",
=======
    author_name: "Julieta Reynoso",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Excelente atención de Susana Barroso. Muy profesional, resolvió todas mis dudas sobre el seguro y me ayudó a elegir la mejor opción para mi familia.",
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
    profile_photo_url: null,
    time: Date.now() / 1000 - 5184000,
  },
  {
<<<<<<< HEAD
    author_name: "Lucía Fernández",
    relative_time_description: "hace 3 meses",
    rating: 5,
    text: "La mejor decisión que he tomado para mi salud. El cuadro médico es amplísimo y la atención en esta oficina es siempre rápida y eficiente. Muy recomendables.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 7776000,
  },
=======
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
>>>>>>> be20582e09389210bd048c3b8d7f471a367075e8
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
