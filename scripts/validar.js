// Comprueba que data.js es coherente antes de publicar: node scripts/validar.js
const fs=require("fs"),path=require("path");
const src=fs.readFileSync(path.join(__dirname,"..","data.js"),"utf8");
const i=src.search(/^window\.ELECCIONES=/m);
if(i<0)fail("data.js debe contener «window.ELECCIONES=»");
let D;try{D=JSON.parse(src.slice(i+18).trim().replace(/;\s*$/,""))}catch(e){fail("El bloque de datos no es JSON válido: "+e.message)}
const errs=[],err=m=>errs.push(m);
const V=["si","no","parcial","na"],K=["2026","2023","web"];
const {meta,parties,topics,q,props}=D;
if(!meta||!/^\d{4}-\d{2}-\d{2}$/.test(meta.revisado||""))err("meta.revisado debe ser AAAA-MM-DD");
if(!meta?.estado)err("Falta meta.estado");
if(!meta?.notaFuentes)err("Falta meta.notaFuentes");
const ids=(parties||[]).map(p=>p.id);
(parties||[]).forEach(p=>{["id","n","ab","k","kl","t","u"].forEach(k=>{if(!p[k])err(`Partido ${p.id}: falta ${k}`)});
  if(!K.includes(p.k))err(`Partido ${p.id}: k debe ser ${K.join("/")}`);
  if(p.u&&!/^https:\/\//.test(p.u))err(`Partido ${p.id}: la URL debe ser https`);});
const names=(parties||[]).map(p=>p.n);
if(names.join("|")!==[...names].sort((a,b)=>a.localeCompare(b,"es")).join("|"))err("Los partidos deben ir en orden alfabético por nombre");
const used=new Set();
(topics||[]).forEach(t=>{if(!t.id||!t.n||!Array.isArray(t.qs))err(`Tema mal formado: ${JSON.stringify(t)}`);
  (t.qs||[]).forEach(id=>{if(!q[id])err(`Tema ${t.id}: la pregunta ${id} no existe`);used.add(id)});
  const pr=props?.[t.id]||{};
  Object.entries(pr).forEach(([pid,L])=>{if(!ids.includes(pid))err(`Propuestas ${t.id}: partido desconocido ${pid}`);
    if(!Array.isArray(L)||L.length>3)err(`Propuestas ${t.id}/${pid}: máximo 3`);
    (L||[]).forEach((x,j)=>{if(!Array.isArray(x)||x.length!==5||typeof x[0]!=="string"||typeof x[1]!=="string"||[2,3,4].some(k=>typeof x[k]!=="boolean"))err(`Propuesta ${t.id}/${pid}#${j}: formato [texto, página, concreta, coste, plazo]`)})});});
Object.entries(q||{}).forEach(([id,x])=>{if(!used.has(id))err(`Pregunta ${id} no está en ningún tema`);
  if(!x.t)err(`Pregunta ${id}: falta t`);
  ids.forEach(pid=>{const a=x.a?.[pid];
    if(!Array.isArray(a)||a.length!==3)return err(`Pregunta ${id}/${pid}: falta respuesta [valor, explicación, página]`);
    if(!V.includes(a[0]))err(`Pregunta ${id}/${pid}: valor «${a[0]}» no válido (${V.join("/")})`);
    if(!a[1])err(`Pregunta ${id}/${pid}: falta explicación`);
    if(a[0]!=="na"&&!a[2])err(`Pregunta ${id}/${pid}: falta página`);});
  Object.keys(x.a||{}).forEach(pid=>{if(!ids.includes(pid))err(`Pregunta ${id}: partido desconocido ${pid}`)});});
// votos (opcional): votaciones del Pleno del Congreso por tema, con el voto de los cinco partidos
const VV=["si","no","abst","div","aus"];
if(D.votos){const {nota,temas}=D.votos;
  if(!nota)err("votos: falta nota");
  if(!temas||typeof temas!=="object")err("votos: falta temas");
  Object.entries(temas||{}).forEach(([tid,L])=>{if(!(topics||[]).some(t=>t.id===tid))err(`votos: tema desconocido ${tid}`);
    if(!Array.isArray(L))return err(`votos ${tid}: debe ser una lista`);
    L.forEach((x,j)=>{const w=`votos ${tid}#${j}`;
      ["t","o","f","r","u"].forEach(k=>{if(!x[k])err(`${w}: falta ${k}`)});
      if(x.f&&!/^\d{4}-\d{2}-\d{2}$/.test(x.f))err(`${w}: f debe ser AAAA-MM-DD`);
      if(x.u&&!/^https:\/\/www\.congreso\.es\//.test(x.u))err(`${w}: u debe enlazar a congreso.es`);
      if(!Array.isArray(x.tot)||x.tot.length!==3||x.tot.some(n=>!Number.isInteger(n)))err(`${w}: tot debe ser [sí, no, abst.]`);
      ids.forEach(pid=>{const a=x.v?.[pid];
        if(!Array.isArray(a)||a.length!==2||!VV.includes(a[0])||typeof a[1]!=="string")err(`${w}: voto de ${pid} debe ser [${VV.join("/")}, detalle]`)});
      Object.keys(x.v||{}).forEach(pid=>{if(!ids.includes(pid))err(`${w}: partido desconocido ${pid}`)});});});}
// corrupcion (opcional): condenas firmes, cada una con enlace a una fuente oficial
if(D.corrupcion){const {revisado,nota,casos}=D.corrupcion;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(revisado||""))err("corrupcion.revisado debe ser AAAA-MM-DD");
  if(!nota)err("corrupcion: falta nota");
  if(!Array.isArray(casos))err("corrupcion: falta la lista casos");
  (casos||[]).forEach((x,j)=>{const w=`corrupcion#${j}`;
    ["p","n","f","tr","q","d","u"].forEach(k=>{if(!x[k])err(`${w}: falta ${k}`)});
    if(x.p&&!ids.includes(x.p))err(`${w}: partido desconocido ${x.p}`);
    if(x.f&&!/^\d{4}-\d{2}-\d{2}$/.test(x.f))err(`${w}: f debe ser AAAA-MM-DD`);
    if(x.u&&!/^https:\/\/(www\.poderjudicial\.es|hj\.tribunalconstitucional\.es|www\.tribunalconstitucional\.es|www\.boe\.es)\//.test(x.u))err(`${w}: u debe ser una fuente oficial (CGPJ, TC o BOE)`);});}
const hex=["vivienda","sanidad","educacion","empleo","pensiones","impuestos","inmigracion","clima"];
hex.forEach(t=>{if(!(topics||[]).some(x=>x.id===t))err(`Falta el tema ${t} (lo usa el hexágono de la brújula)`)});
if(errs.length){console.error("✗ data.js tiene errores:\n- "+errs.join("\n- "));process.exit(1)}
console.log(`✓ data.js correcto: ${ids.length} partidos, ${topics.length} temas, ${Object.keys(q).length} preguntas, revisado ${meta.revisado}`);
function fail(m){console.error("✗ "+m);process.exit(1)}
