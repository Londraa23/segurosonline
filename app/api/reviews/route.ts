import { NextResponse } from 'next/server'

// Fallback reviews with generic invented data
const fallbackReviews = [
  {
    author_name: "L. Fernández",
    relative_time_description: "hace 1 día",
    rating: 5,
    text: "Increíble la rapidez con la que gestionaron mi alta. Todo el equipo fue súper amable y me explicaron cada detalle de la póliza Blua. Un 10 en atención.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 86400,
  },
  {
    author_name: "Marcos T.",
    relative_time_description: "hace 1 semana",
    rating: 5,
    text: "Llevaba tiempo buscando un seguro para mi empresa y aquí encontré el mejor asesoramiento profesional. Transparencia total en las condiciones de Sanitas.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 604800,
  },
  {
    author_name: "S. Rodríguez",
    relative_time_description: "hace 2 semanas",
    rating: 5,
    text: "Muy profesionales. Me ayudaron a tramitar el cambio de compañía sin perder carencias. Todo el proceso con Sanitas fue sobre ruedas y sin complicaciones.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 1209600,
  },
  {
    author_name: "Daniela C.",
    relative_time_description: "hace 3 semanas",
    rating: 5,
    text: "Excelente trato humano en esta agencia. Se nota que conocen bien los productos de Sanitas y te recomiendan lo que de verdad necesitas para tu salud.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 1814400,
  },
  {
    author_name: "Andrés B.",
    relative_time_description: "hace un mes",
    rating: 5,
    text: "La mejor decisión que he tomado para la salud de mi familia. Gestión impecable por parte de los asesores y un servicio de Sanitas siempre dispuesto a ayudar.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 2592000,
  },
  {
    author_name: "P. Méndez",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Me sorprendió la facilidad para contratar todo online pero con el respaldo de asesores expertos. Muy contenta con la cobertura médica recibida.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 5184000,
  },
  {
    author_name: "Jorge H.",
    relative_time_description: "hace 3 meses",
    rating: 5,
    text: "Atención personalizada de verdad. Me resolvieron todas las dudas sobre las carencias en tiempo récord. Da gusto tratar con expertos en seguros de salud.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 7776000,
  },
  {
    author_name: "Victoria S.",
    relative_time_description: "hace 4 meses",
    rating: 5,
    text: "Buscaba el seguro dental más completo de Sanitas y me explicaron todas las opciones de forma muy clara. Súper profesional y muy satisfecha.",
    profile_photo_url: null,
    time: Date.now() / 1000 - 10368000,
  }
]

export async function GET() {
  const data = {
    rating: 4.9,
    user_ratings_total: 162,
    reviews: fallbackReviews,
    source: 'internal',
  }
  return NextResponse.json(data)
}
