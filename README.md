# PizzArica

Landing page de una sola página para el food truck PizzArica, creada con React, Vite y CSS plano.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Vite mostrará la URL local. Para generar la versión de producción:

```bash
npm run build
npm run preview
```

La opción `base: './'` permite publicar el contenido de `dist/` en GitHub Pages o Netlify.

## Editar el contenido

Todo el contenido editable está en [`src/data/site.js`](src/data/site.js): WhatsApp, mensaje inicial, Instagram, dirección, referencia, horarios, menú, pasos y galería. Los valores provisionales están señalados con `TODO: dato real`.

- En los horarios, `dia` va de `0` (domingo) a `6` (sábado). Usa `null` para un día cerrado.
- El número de WhatsApp debe incluir código de país, sin `+`, espacios ni guiones.
- Para activar el mapa, pega una URL de inserción de Google Maps en `mapaEmbedUrl`.
- Para la galería, reemplaza cada `null` por `{ src: '/ruta/foto.webp', alt: 'Descripción de la foto' }`.

## Regenerar el logo

El archivo original `img/DIGITAL_STICKER.png` es la fuente y no debe eliminarse ni renombrarse. El script usa Sharp para recortarlo, añadir margen transparente y crear los WebP y el favicon:

```bash
npm run logo
```

Los resultados se guardan en `src/assets/` y `public/favicon.png`. Esas salidas
binarias están ignoradas por Git para que la entrega siga siendo compatible con
canales que solo admiten cambios de texto. Mientras no se generen, la aplicación
usa directamente el PNG original y el favicon vectorial incluido en `public/`.
