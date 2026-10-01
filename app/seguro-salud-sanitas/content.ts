// Copy de la landing de Google Ads "Seguro de salud Sanitas" (documento LANDINGPABLO.pdf)

export const H1_VARIANTS = {
  default: "Tu seguro de salud Sanitas desde 33,60 €/mes*",
  marca: "Seguros de Salud Sanitas: calcula tu precio",
  precio: "Calcula el precio de tu seguro Sanitas",
  familias: "Seguro de salud Sanitas para ti y tu familia",
  mayores: "Sanitas Único: seguro de salud para mayores de 60 años",
} as const

export type H1Variant = keyof typeof H1_VARIANTS

export function resolveVariant(value?: string | string[]): H1Variant {
  const v = Array.isArray(value) ? value[0] : value
  return v && v in H1_VARIANTS ? (v as H1Variant) : "default"
}

export const PRICE_DISCLAIMER =
  "*Precio “desde” orientativo para nuevos asegurados. La prima final puede variar según edad, lugar de residencia, número de asegurados y modalidad. Consulta condiciones, copagos, coberturas y promociones vigentes antes de contratar."

export const LANDING_FAQS = [
  {
    question: "¿Cuánto cuesta un seguro de salud Sanitas?",
    answer:
      "El precio depende de la edad, el código postal, el número de asegurados y la modalidad elegida. Hay opciones desde 33,60 €/mes*. Déjanos tus datos y te damos un precio personalizado.",
  },
  {
    question: "¿Qué diferencia hay entre Avanza, Más Salud y Único?",
    answer:
      "Avanza ofrece una cobertura ambulatoria amplia sin hospitalización; Más Salud añade una asistencia más completa con hospitalización y cirugía según modalidad; Único está pensado específicamente para mayores de 60 años.",
  },
  {
    question: "¿Hay seguros Sanitas sin copago?",
    answer:
      "Sí. Sanitas dispone de modalidades con y sin copago. Te explicaremos la diferencia de precio y uso para que elijas la opción que más te convenga.",
  },
  {
    question: "¿Sanitas incluye hospitalización?",
    answer:
      "Depende del producto. Las modalidades Más Salud incluyen opciones con hospitalización. Avanza está orientado a asistencia sin hospitalización; para Único te detallamos las coberturas concretas al calcular tu presupuesto.",
  },
  {
    question: "¿Qué son las carencias?",
    answer:
      "Son periodos que pueden aplicarse antes de utilizar determinadas coberturas. Cambian según el producto y el servicio. Antes de contratar te indicaremos las condiciones exactas de la modalidad elegida.",
  },
  {
    question: "¿Puedo contratar Sanitas si tengo más de 60 años?",
    answer:
      "Sí. Sanitas Único está pensado específicamente para mayores de 60 años y ofrece asistencia sanitaria adaptada a esta etapa.",
  },
  {
    question: "¿Cómo pido mi presupuesto?",
    answer:
      "Rellena el formulario con fecha de nacimiento, código postal y teléfono. Un asesor te contactará para darte precio y resolver cualquier duda, sin compromiso.",
  },
]
