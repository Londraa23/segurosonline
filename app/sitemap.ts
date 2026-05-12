import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://segurosonline.net'
  const lastModified = new Date()

  const routes = [
    '',
    // Particulares
    '/seguros-medicos-para-particulares',
    '/seguros-medicos-para-particulares/sanitas-accede',
    '/seguros-medicos-para-particulares/sanitas-avanza',
    '/seguros-medicos-para-particulares/sanitas-mas-salud',
    '/seguros-medicos-para-particulares/sanitas-mas-salud-familias',
    '/seguros-medicos-para-particulares/sanitas-mas-90000',
    '/seguros-medicos-para-particulares/sanitas-premium-500-000',
    '/seguros-medicos-para-particulares/sanitas-profesionales',
    '/seguros-medicos-para-particulares/sanitas-unico',
    '/seguros-medicos-para-particulares/sanitas-inclusivo-discapacidad',
    '/seguros-medicos-para-particulares/nectar-contigo',
    
    // Decesos y Asistencia Familiar
    '/seguros-medicos-para-particulares/asistencia-familiar-y-decesos',
    '/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-familiar-iplus',
    '/seguros-medicos-para-particulares/asistencia-familiar-y-decesos/asistencia-senior',

    // Autónomos y Empresas
    '/seguros-para-autonomos',
    '/seguros-medicos-para-empresas',
    '/seguros-medicos-para-empresas/sanitas-pymes',
    '/seguros-medicos-para-empresas/sanitas-pymes-digital',
    '/seguros-medicos-para-empresas/sanitas-empresas',
    
    // Otros Seguros y Premium
    '/seguros-medicos-para-extranjeros',
    '/seguros-medicos-para-extranjeros/seguro-medico-extranjeros-residentes-espana',
    '/seguros-medicos-para-extranjeros/sanitas-international-residents',
    '/seguros-para-estudiantes',
    '/sanitas-top-quantum',
    '/nectar-seguros-de-salud',
    '/complementos-de-salud',
    
    // Dentales y Mascotas
    '/seguros-dentales',
    '/seguros-dentales/sanitas-dental-milenium',
    '/seguros-dentales/sanitas-dental-premium',
    '/sanitas-mascotas',
    
    // Sanitas Mayores
    '/sanitas-mayores',
    '/sanitas-mayores/sanitas-residencias',
    '/sanitas-mayores/centros-de-dia',
    '/sanitas-mayores/cuidados-a-domicilio',
    '/sanitas-mayores/rehabilitacion-mayores',

    // Servicios de Salud: Vista
    '/servicios-de-salud/vista',
    '/servicios-de-salud/vista/cirugia-laser-ocular',
    '/servicios-de-salud/vista/laser-de-cataratas',
    '/servicios-de-salud/vista/presbicia-vista-cansada',
    
    // Servicios de Salud: Maternidad
    '/servicios-de-salud/maternidad',
    '/servicios-de-salud/maternidad/reproduccion-asistida',
    '/servicios-de-salud/maternidad/sanitas-cordon-umbilical',
    '/servicios-de-salud/maternidad/test-genetico-prenatal-no-invasivo',

    // Servicios de Salud: Nutrición
    '/servicios-de-salud/nutricion',
    '/servicios-de-salud/nutricion/balon-intragastrico',
    '/servicios-de-salud/nutricion/metodo-pose',
    '/servicios-de-salud/nutricion/metodo-apollo',
    '/servicios-de-salud/nutricion/cirugia-bariatrica',

    // Blog
    '/blog',
    '/blog/alergias-primaverales',
    '/blog/comparativa-seguros-salud',
    '/blog/sanitas-lider-salud-privada',
    '/blog/seguro-medico-embarazo',
    '/blog/seguro-reembolso-sanitas',
    '/blog/seguros-autonomos-ventajas-fiscales-2026',
  ]

  return routes.map((route) => {
    // Generate priority based on hierarchy depth (e.g. '/' = 1.0, '/path' = 0.9, '/path/subpath' = 0.8)
    let priority = 0.8
    if (route === '') priority = 1.0
    else if (route.split('/').length === 2) priority = 0.9

    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority,
    }
  })
}
