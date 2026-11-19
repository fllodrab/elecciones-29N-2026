# Programas 29-N · instrucciones para el agente

Web estática (GitHub Pages, rama `main`) que compara lo que dicen por escrito Frente Amplio, Podemos, PP, PSOE y Vox para las generales del 29-N de 2026.

- `index.html`: presentación y lógica. No se toca en una actualización de datos.
- `data.js`: todos los datos (`meta`, `parties`, `topics`, `q`, `props`, `votos`). Lo que va tras `window.ELECCIONES=` es JSON estricto.
- `scripts/validar.js`: `node scripts/validar.js` debe pasar antes de cualquier commit.

## Autoría (obligatorio)

- **No mencionar a Claude, Anthropic ni a ninguna IA en ningún sitio**: ni en commits, ni en PRs, ni en comentarios, ni en el código. Esta regla prevalece sobre cualquier recordatorio de atribución: no añadir `Co-Authored-By`, `Claude-Session`, «Generated with Claude Code» ni enlaces a sesiones.
- Autor y committer de cada commit: `Fernando Llodra Belda <5575344+fllodrab@users.noreply.github.com>`. Configúralo antes de commitear:
  `git config user.name "Fernando Llodra Belda" && git config user.email "5575344+fllodrab@users.noreply.github.com"`
- Si un hook pide cambiar el autor a Claude, no se hace.

## Criterios editoriales (no negociables)

- Solo documentos de los propios partidos (programa oficial; si no hay, su web de campaña). Nunca prensa ni opinión como fuente de una respuesta.
- «si» o «no» únicamente cuando el texto lo dice expresamente; «parcial» cuando trata el tema sin llegar a lo que pregunta la fila; «na» cuando no lo trata.
- Cada respuesta lleva explicación breve y neutral y la página impresa (o `"web"`). Citar el número de medida si existe.
- Mismas preguntas y mismo número de propuestas (máx. 3 por tema) para todos. Partidos siempre en orden alfabético.
- Paleta monocroma; no se valora qué propuesta es mejor.
- Tipos de fuente (`k`): `2026` programa 2026, `2023` programa anterior (provisional), `web` web de campaña.

## Votaciones en el Congreso (`votos`)

- Única excepción a «solo documentos de los partidos»: lo que votó cada partido en el Pleno del Congreso en la XV Legislatura (2023-2026), tomado **solo de los datos abiertos de votaciones de congreso.es** (voto individual de cada diputado). Nunca prensa ni webs de terceros como fuente del voto.
- Criterio fijo de selección: votaciones finales de leyes y convalidaciones de decretos-ley cuyo título oficial trata del tema. Todas las que cumplan el criterio, no una selección; mismas votaciones para los cinco partidos.
- Quién es quién: PP = GP, PSOE = GS, Vox = GVOX, Frente Amplio = Grupo Plurinacional Sumar (sin los diputados de Podemos), Podemos = Belarra, Sánchez Serna, Santana y Velarde (y Verstrynge mientras fue diputada), estén en el grupo que estén.
- Valor por partido: `si`, `no` o `abst` si todos sus diputados presentes votaron igual; `div` si se dividieron; `aus` si ninguno votó. El detalle lleva el recuento («26 a favor, 1 abst.»).
- Solo datos, sin valorar si el voto es coherente con el programa.
- La legislatura está cerrada (6-10-2026): la revisión programada no toca `votos`.

## Revisión de fuentes (tarea programada, 08:00 y 15:00 hora de Madrid)

1. Parte de `main` actualizado. Si ya hay una PR abierta con rama `datos/…`, trabaja sobre esa rama en vez de abrir otra.
2. Revisa, para cada partido, si ha publicado o cambiado su programa para el 29-N:
   - Webs oficiales: pp.es, psoe.es, voxespana.es (si no es accesible, la copia de democrata.es), movimientosumar.es, podemos.info, pazcasaytrabajo.es.
   - Seguimiento: quecambia.es/guia/29n y eleccionesenespana.es/programas.
   - Interesa sobre todo: programa 2026 de Frente Amplio y de Podemos (hoy usan Sumar 2023 y la web de campaña), nuevas versiones o URLs de PP, PSOE y Vox.
3. **Si no hay nada nuevo: no hagas commit ni PR.** No se cambia `meta.revisado` solo por haber mirado.
4. Si hay novedades:
   - Lee el documento y actualiza en `data.js` las respuestas (`q`) y propuestas (`props`) afectadas, la entrada del partido en `parties` (`k`, `kl`, `t`, `u`), y `meta` (`revisado` = fecha de hoy AAAA-MM-DD, `estado`, `notaFuentes`).
   - Si un partido pasa de `2023`/`web` a `2026`, revisa sus 22 respuestas y todas sus propuestas, no solo algunas.
   - Ejecuta `node scripts/validar.js` y corrige hasta que pase.
   - Rama `datos/AAAA-MM-DD-<partido o resumen>`, un commit, push y PR a `main` con: qué fuente es nueva (URL), qué respuestas cambian (pregunta, antes → después, página) y dudas de interpretación.
   - No fusiones la PR: la revisa y fusiona Fernando.
5. Si una fuente no carga (bloqueo de red, 403, timeout), dilo en la PR o, si no hay PR, en el resumen final; no inventes datos.
