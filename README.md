# Programas 29-N · ¿Qué haría cada partido?

Comparativa neutral de lo que dicen por escrito Frente Amplio, Podemos, PP, PSOE y Vox para las elecciones generales del 29 de noviembre de 2026: 22 preguntas en 8 temas (vivienda, sanidad, educación, empleo y salarios, pensiones, impuestos, inmigración, clima y energía), con la página del programa de la que sale cada respuesta.

## Cómo funciona

Es una única página estática, `index.html`, sin dependencias ni compilación. Los datos están en la constante `DATA` del script (respuestas por pregunta y propuestas destacadas por tema) y la lista `P` describe cada partido y su fuente.

Para verla en local basta con abrir `index.html` en el navegador.

## Criterios

- Solo documentos de los propios partidos.
- «Sí» o «No» únicamente cuando el texto lo dice expresamente; «Parcial» cuando trata el tema sin llegar a lo que pregunta la fila.
- Mismas preguntas y mismo número de propuestas para todos, siempre en orden alfabético.
- Paleta monocroma para no evocar colores de partido. No se valora qué propuesta es mejor.

## Publicar en GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. La web queda en `https://<usuario>.github.io/elecciones-29N-2026/`.
