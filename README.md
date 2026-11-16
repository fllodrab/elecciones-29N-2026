# Programas 29-N · ¿Qué haría cada partido?

Comparativa neutral de lo que dicen por escrito Frente Amplio, Podemos, PP, PSOE y Vox para las elecciones generales del 29 de noviembre de 2026: 22 preguntas en 8 temas (vivienda, sanidad, educación, empleo y salarios, pensiones, impuestos, inmigración, clima y energía), con la página del programa de la que sale cada respuesta.

## Cómo funciona

Es una página estática sin dependencias ni compilación:

- `index.html`: presentación y lógica.
- `data.js`: todos los datos (fecha y estado de la revisión, partidos y fuentes, respuestas por pregunta y propuestas por tema).
- `scripts/validar.js`: comprueba que `data.js` es coherente (`node scripts/validar.js`).

Para verla en local basta con abrir `index.html` en el navegador.

## Tu brújula: hexágono de afinidad

Al pulsar «Tu brújula» el resultado se muestra como una ficha tipo videojuego de fútbol: afinidad global (0–100) y un hexágono con seis ejes que agrupan los 8 temas (VIV vivienda, SPU sanidad y educación, TRA empleo y pensiones, IMP impuestos, INM inmigración, CLI clima y energía). Las pestañas cambian de partido. Se puede volver a las barras poniendo `FEATURES.hexBrujula=false` en el script.

## Actualización diaria

Una tarea programada revisa las fuentes a las 08:00 y a las 15:00 (hora de Madrid). Si algún partido publica o cambia su programa, actualiza `data.js` en una rama `datos/…` y abre una pull request; al fusionarla, GitHub Pages publica la web en un par de minutos. Si no hay novedades, no cambia nada. El procedimiento y los criterios están en `CLAUDE.md`.

## Criterios

- Solo documentos de los propios partidos.
- «Sí» o «No» únicamente cuando el texto lo dice expresamente; «Parcial» cuando trata el tema sin llegar a lo que pregunta la fila.
- Mismas preguntas y mismo número de propuestas para todos, siempre en orden alfabético.
- Paleta monocroma para no evocar colores de partido. No se valora qué propuesta es mejor.

## Publicar en GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. La web queda en `https://<usuario>.github.io/elecciones-29N-2026/`.
