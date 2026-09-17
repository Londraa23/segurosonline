import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de PIQUE ADS SOCIEDAD LIMITADA.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-[#F8F9FA] py-16 lg:py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 font-heading">
            Política de Privacidad
          </h1>
          <p className="text-lg text-muted-foreground">
            Última actualización: junio de 2026.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-headings:tracking-tight prose-headings:font-bold">
          
          <h2>1. ¿Quién es el responsable del tratamiento de sus datos personales?</h2>
          <p>El responsable del tratamiento de los datos personales recabados a través del presente sitio web es:</p>
          <ul>
            <li><strong>PIQUE ADS SOCIEDAD LIMITADA</strong></li>
            <li><strong>NIF:</strong> B88654702</li>
            <li><strong>Domicilio:</strong> Calle Salvador Dalí 10, Reus</li>
            <li><strong>Sitio web:</strong> Segurosonline.net</li>
            <li><strong>Correo electrónico de contacto:</strong> <a href="mailto:storrespi.agenteexclusivo@sanitas.es">storrespi.agenteexclusivo@sanitas.es</a></li>
            <li><strong>Teléfono:</strong> 624 217 323</li>
          </ul>
          <p>En adelante, el "Responsable del Tratamiento".</p>

          <h2>2. ¿Cómo recabamos sus datos personales y qué datos personales tratamos?</h2>
          <p>Los datos personales que tratamos son aquellos que el usuario facilita voluntariamente a través de los formularios del sitio web, llamadas telefónicas, correo electrónico, WhatsApp u otros medios de contacto habilitados.</p>
          <p>Entre los datos que pueden ser tratados se incluyen, entre otros:</p>
          <ul>
            <li>Nombre y apellidos.</li>
            <li>Teléfono.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Datos identificativos.</li>
            <li>Datos de contacto.</li>
            <li>Información facilitada por el usuario en formularios, llamadas, mensajes o comunicaciones.</li>
            <li>Cualquier otro dato necesario para atender la solicitud realizada por el usuario.</li>
          </ul>
          <p>El usuario garantiza que los datos facilitados son veraces, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio que pudiera ocasionarse como consecuencia del incumplimiento de dicha obligación.</p>

          <h2>3. ¿Con qué finalidad tratamos sus datos personales?</h2>
          <p>PIQUE ADS SOCIEDAD LIMITADA tratará los datos personales de los usuarios con las siguientes finalidades:</p>
          <ul>
            <li>Atender solicitudes de información realizadas a través del sitio web.</li>
            <li>Contactar con el usuario por teléfono, correo electrónico, WhatsApp u otros medios de comunicación.</li>
            <li>Asesorar sobre productos o servicios relacionados con la venta de seguros.</li>
            <li>Gestionar solicitudes, presupuestos, consultas o comunicaciones comerciales.</li>
            <li>Realizar actividades relacionadas con la comercialización, intermediación o venta de seguros.</li>
            <li>Enviar información comercial relacionada con productos o servicios de seguros, cuando exista base legal para ello.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
            <li>Gestionar la relación precontractual o contractual que, en su caso, pudiera establecerse con el usuario.</li>
          </ul>

          <h2>4. ¿Cuál es la base legal para el tratamiento de sus datos?</h2>
          <p>La base legal para el tratamiento de los datos personales será, según corresponda:</p>
          <ul>
            <li>El consentimiento del usuario, otorgado al completar y enviar formularios o contactar voluntariamente con PIQUE ADS SOCIEDAD LIMITADA.</li>
            <li>La aplicación de medidas precontractuales solicitadas por el usuario.</li>
            <li>La ejecución de una relación contractual, en caso de que el usuario contrate algún producto o servicio.</li>
            <li>El cumplimiento de obligaciones legales aplicables.</li>
            <li>El interés legítimo del Responsable del Tratamiento para atender consultas, gestionar comunicaciones y mejorar sus servicios, siempre que no prevalezcan los derechos y libertades del usuario.</li>
          </ul>

          <h2>5. ¿Durante cuánto tiempo conservamos sus datos personales?</h2>
          <p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, posteriormente, durante los plazos legalmente exigibles para atender posibles responsabilidades derivadas del tratamiento.</p>
          <p>Cuando los datos dejen de ser necesarios, serán bloqueados durante los plazos de prescripción legal aplicables y, una vez finalizados dichos plazos, serán eliminados de forma segura.</p>

          <h2>6. ¿A quién se comunicarán sus datos personales?</h2>
          <p>Los datos personales podrán ser comunicados a terceros cuando sea necesario para la prestación del servicio solicitado por el usuario, para la gestión de productos o servicios relacionados con seguros, o cuando exista una obligación legal.</p>
          <p>Asimismo, podrán tener acceso a los datos personales determinados proveedores de servicios que actúen como encargados del tratamiento, tales como servicios de hosting, herramientas tecnológicas, proveedores de correo electrónico, CRM, servicios de mensajería, asesorías, plataformas de comunicación o similares.</p>
          <p>PIQUE ADS SOCIEDAD LIMITADA se compromete a que dichos proveedores traten los datos conforme a la normativa aplicable en materia de protección de datos y con las debidas garantías de seguridad y confidencialidad.</p>
          <p>También podrán comunicarse datos a Administraciones Públicas, Fuerzas y Cuerpos de Seguridad, Juzgados y Tribunales u otros organismos competentes cuando exista obligación legal.</p>

          <h2>7. ¿Se realizan transferencias internacionales de datos?</h2>
          <p>En caso de utilizar proveedores tecnológicos ubicados fuera del Espacio Económico Europeo, PIQUE ADS SOCIEDAD LIMITADA adoptará las garantías adecuadas conforme a la normativa vigente en materia de protección de datos.</p>

          <h2>8. ¿Cuáles son sus derechos?</h2>
          <p>El usuario puede ejercer en cualquier momento los siguientes derechos:</p>
          <ul>
            <li>Derecho de acceso.</li>
            <li>Derecho de rectificación.</li>
            <li>Derecho de supresión.</li>
            <li>Derecho de oposición.</li>
            <li>Derecho de limitación del tratamiento.</li>
            <li>Derecho a la portabilidad de los datos.</li>
            <li>Derecho a retirar el consentimiento prestado en cualquier momento.</li>
          </ul>
          <p>Para ejercer estos derechos, el usuario puede enviar una solicitud por correo electrónico a: <strong><a href="mailto:storrespi.agenteexclusivo@sanitas.es">storrespi.agenteexclusivo@sanitas.es</a></strong></p>
          <p>La solicitud deberá indicar claramente el derecho que desea ejercitar y acompañarse, si fuera necesario, de una copia del DNI, NIE, pasaporte o documento equivalente que permita acreditar la identidad del solicitante.</p>

          <h2>9. Derecho a presentar una reclamación</h2>
          <p>Si el usuario considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, podrá presentar una reclamación ante la Agencia Española de Protección de Datos a través de su sitio web oficial: <a href="http://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.</p>

          <h2>10. Seguridad de los datos personales</h2>
          <p>PIQUE ADS SOCIEDAD LIMITADA aplicará las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su pérdida, alteración, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos tratados y los riesgos a los que estén expuestos.</p>

          <h2>11. Cambios en la Política de Privacidad</h2>
          <p>PIQUE ADS SOCIEDAD LIMITADA se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas, cambios en sus servicios o criterios de la autoridad de control.</p>
          <p>En caso de realizarse cambios relevantes, se publicará la versión actualizada en el presente sitio web.</p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
