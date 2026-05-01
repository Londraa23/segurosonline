import { NextResponse } from 'next/server'

// Fallback reviews with generic invented data
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
>>>>>>> 549132e (Añadir login + bugs)
    profile_photo_url: null,
    time: Date.now() / 1000 - 604800,
  },
  {
<<<<<<< HEAD
    author_name: "Javier Gómez",
    relative_time_description: "hace 2 semanas",
    rating: 5,
    text: "Contraté el seguro para autónomos y la gestión fue impecable. Todo online y muy rápido. Lo recomiendo totalmente por su profesionalidad y eficacia.",
=======
    author_name: "S. Rodríguez",
    relative_time_description: "hace 2 semanas",
    rating: 5,
    text: "Muy profesionales. Me ayudaron a tramitar el cambio de compañía sin perder carencias. Todo el proceso con Sanitas fue sobre ruedas y sin complicaciones.",
>>>>>>> 549132e (Añadir login + bugs)
    profile_photo_url: null,
    time: Date.now() / 1000 - 1209600,
  },
  {
<<<<<<< HEAD
    author_name: "Sofía Rodríguez",
    relative_time_description: "hace un mes",
    rating: 5,
    text: "Buscaba un seguro para mis padres y nos ayudaron a encontrar uno adaptado a su edad con las mejores coberturas médicas. Un trato muy humano y cercano.",
=======
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
>>>>>>> 549132e (Añadir login + bugs)
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
    author_name: "P. Méndez",
    relative_time_description: "hace 2 meses",
    rating: 5,
    text: "Me sorprendió la facilidad para contratar todo online pero con el respaldo de asesores expertos. Muy contenta con la cobertura médica recibida.",
>>>>>>> 549132e (Añadir login + bugs)
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
  },
=======
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
>>>>>>> 549132e (Añadir login + bugs)
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
