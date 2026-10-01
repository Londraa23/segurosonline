# Landing Google Ads – Seguro de salud Sanitas

Documento de cambios de la nueva landing para campañas de Google Ads, construida a partir del briefing
**"Textos para landing de Google Ads – Seguros de salud Sanitas"** (LANDINGPABLO.pdf).

- **URL:** `https://segurosonline.net/seguro-salud-sanitas`
- **Objetivo:** convertir búsquedas de alta intención ("Sanitas", "seguro Sanitas", "precio Sanitas", "seguro médico privado") en solicitudes de precio o llamadas.

---

## 1. Archivos nuevos

| Archivo | Qué contiene |
|---|---|
| `app/seguro-salud-sanitas/page.tsx` | Ruta de la landing. Metadatos (SEO title y meta description del briefing), `noindex`, datos estructurados `FAQPage` (JSON-LD) y lectura del parámetro `?v=` para la variante de H1. |
| `app/seguro-salud-sanitas/landing-client.tsx` | La landing completa: header compacto, hero, franja de confianza, productos, por qué Sanitas, coberturas, Blua, cómo funciona, FAQ, CTA final, footer legal y CTA fijo en móvil. |
| `app/seguro-salud-sanitas/quote-form.tsx` | Formulario "Calcula tu seguro Sanitas" reutilizable (se usa en el hero y en el CTA final). |
| `app/seguro-salud-sanitas/content.ts` | Textos reutilizados: variantes de H1, preguntas frecuentes y pie de precios. |

## 2. Archivos modificados

| Archivo | Cambio |
|---|---|
| `lib/form-submission.ts` | La interfaz `SubmissionData` ahora acepta `name` opcional y campos extra (`insured`, `birthDate`, `cp`, `plan`…). El formulario de la landing no pide nombre, tal como indica el briefing. **Los formularios existentes no cambian.** |

No se ha tocado ninguna otra página del sitio.

---

## 3. Estructura de la landing (orden del briefing)

1. **Header compacto:** logo Sanitas + "SegurosOnline.net · Agencia exclusiva Sanitas", teléfono `624 21 73 23` y botón "Calcular mi precio". **Sin menú de navegación**, para que funcione como landing y no como home.
2. **Hero + formulario:**
   - Eyebrow "SEGURO DE SALUD SANITAS", H1 "Tu seguro de salud Sanitas desde 33,60 €/mes*", subtítulo y los 3 beneficios.
   - CTA principal "Calcular mi precio" y CTA secundario "Prefiero que me llaméis".
   - El formulario se ve **sin hacer scroll en escritorio** (columna derecha). En **móvil va justo debajo del H1**, antes de los beneficios.
3. **Franja de confianza:** Blua incluido · Amplio cuadro médico en toda España · 5 hospitales propios de Sanitas · Asesoramiento sin compromiso.
4. **Productos:** tarjetas de Sanitas Avanza (desde 33,60 €), Más Salud (desde 41,67 €) y Único (desde 48,10 €), con sus coberturas y el botón "Calcular precio de …".
5. **Por qué elegir Sanitas:** 4 bloques de beneficio, cuadrícula de 8 coberturas con iconos y el texto de cierre con CTA.
6. **Bloque Blua:** Videoconsulta, Evalúa tus síntomas, Fisio Digital y Programas de salud.
7. **Cómo funciona:** Calcula → Comparamos → Eliges, con el CTA de mitad de página "¿Quieres saber cuánto te costaría?".
8. **Preguntas frecuentes:** las 7 preguntas del briefing. Se reutiliza el componente existente `FaqSection`.
9. **CTA final + formulario:** "Calcula ahora tu seguro Sanitas", el bloque alternativo "¿Prefieres hablar con una persona?" y un segundo formulario.
10. **Footer legal:** pie de precios, © SegurosOnline.net, Agencia Exclusiva de Sanitas S.A. de Seguros, código DFGS y enlace a la Política de Privacidad.

Todos los textos son los del briefing, sin cambios.

---

## 4. Formulario "Calcula tu seguro Sanitas"

**Campos:** ¿A quién quieres asegurar? (desplegable) · Fecha de nacimiento · Código postal · Teléfono · casilla de privacidad (texto del briefing con enlace a `/politica-privacidad`).

**Validaciones:**
- Código postal español válido (5 cifras, provincias 01–52).
- Teléfono de 9 cifras que empiece por 6, 7, 8 o 9.
- Fecha de nacimiento entre 1920 y hoy.
- Aceptación de privacidad obligatoria.
- Los errores se muestran debajo de cada campo.

**Modo "Prefiero que me llaméis":** si el usuario pulsa este enlace o botón, el formulario se reduce a teléfono + privacidad. Así una llamada se pide en un solo paso.

**Selección de modalidad:** al pulsar "Calcular precio de Avanza/Más Salud/Único", la página sube al formulario del hero con esa modalidad ya marcada (se puede quitar).

**Envío:** usa el mismo webhook de Make.com que el resto de la web (`submitToMake`). Campos enviados:

| Campo | Valor |
|---|---|
| `formId` | `landing-sanitas-hero`, `landing-sanitas-final`, o el mismo con sufijo `-llamada` |
| `requestType` | `Precio` o `Llamada` |
| `insured` | A quién se asegura |
| `birthDate` | `AAAA-MM-DD` |
| `cp` | Código postal |
| `phone` | Teléfono |
| `plan` | Modalidad elegida o "Sin preferencia" |
| `pageUrl` | URL completa (incluye los parámetros UTM/gclid de Google Ads) |
| `acceptPolicy` | Aceptación de privacidad |

> ⚠️ **Make.com:** el escenario recibe ahora campos nuevos (`insured`, `birthDate`, `cp`, `plan`, `requestType`) y **no recibe `name`**. Hay que revisar que el escenario los mapee (CRM, email, hoja…) y que no falle si falta el nombre.

**Medición de conversiones:** al enviar se lanza `dataLayer.push({ event: "generate_lead", form_id })` y, si existe, `gtag("event", "generate_lead")`. **Ahora mismo la web no tiene instalado Google Tag Manager ni la etiqueta de Google Ads.** Para medir conversiones hay que añadir la etiqueta y crear una conversión con el evento `generate_lead`.

---

## 5. Variantes de H1 por grupo de anuncios

El H1 cambia según el parámetro `v` de la URL. Se configura en la URL final de cada grupo de anuncios:

| Grupo de anuncios | URL final | H1 |
|---|---|---|
| Por defecto | `/seguro-salud-sanitas` | Tu seguro de salud Sanitas desde 33,60 €/mes* |
| Marca / genérico | `/seguro-salud-sanitas?v=marca` | Seguros de Salud Sanitas: calcula tu precio |
| Precio | `/seguro-salud-sanitas?v=precio` | Calcula el precio de tu seguro Sanitas |
| Familias | `/seguro-salud-sanitas?v=familias` | Seguro de salud Sanitas para ti y tu familia |
| Mayores | `/seguro-salud-sanitas?v=mayores` | Sanitas Único: seguro de salud para mayores de 60 años *(además preselecciona Sanitas Único en el formulario)* |

Un valor desconocido muestra el H1 por defecto.

---

## 6. Indicaciones de conversión aplicadas

- ✅ Formulario visible sin scroll en escritorio y muy arriba en móvil.
- ✅ Un único color de CTA (amarillo `#FFE169`), siempre con el verbo "Calcular".
- ✅ Sin navegación en el header.
- ✅ CTA fijo inferior en móvil ("Llamar" + "Calcular precio"), que aparece al hacer scroll.
- ✅ Sin testimonios, estrellas, descuentos ni urgencia inventados.
- ✅ Pie de precios visible ("*Precio 'desde' orientativo…") bajo los productos y en el footer.
- ✅ Se usa la Política de Privacidad real de la web.

## 7. SEO

- **Title:** `Seguro de Salud Sanitas | Calcula tu Precio | SegurosOnline.net`. Usa `title.absolute`, así no se le añade el sufijo " | Sanitas" de la plantilla global.
- **Meta description:** la del briefing.
- **Indexación:** la página lleva **`noindex, follow`** y **no** está en el `sitemap.xml`, igual que la otra landing de campaña (`/campana-decesos`). Así no compite en Google con las páginas SEO del sitio (`/seguros-medicos-para-particulares`, etc.). Google Ads funciona igual con `noindex`. Si se quiere indexar, basta con cambiar `robots` en `page.tsx` y añadir la ruta a `app/sitemap.ts`.
- **Datos estructurados:** `FAQPage` con las 7 preguntas.

---

## 8. Pendientes / a revisar

1. **Make.com:** adaptar el escenario a los nuevos campos (ver punto 4).
2. **Etiqueta de Google Ads / GTM:** instalar y crear la conversión `generate_lead`.
3. **Política de cookies y aviso legal:** el briefing los pide en el footer, pero la web no tiene esas páginas. Solo existe `/politica-privacidad`. Cuando existan, añadir los enlaces en el footer de `landing-client.tsx`.
4. **Texto de privacidad:** el briefing indica que el texto jurídico definitivo debe coincidir con la política de privacidad real. Conviene que lo valide quien lleve la parte legal.
5. **Precios:** 33,60 € / 41,67 € / 48,10 € según tarifas Sanitas 2026 (válidas para altas hasta el 31/12/2026). Si cambian, se actualizan en `landing-client.tsx` (array `PRODUCTS`), en `content.ts` (H1 por defecto y FAQ) y en la meta description de `page.tsx`.
