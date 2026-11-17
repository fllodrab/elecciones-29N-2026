// Datos de la web. Lo actualiza la revisión diaria de fuentes: ver CLAUDE.md.
// El bloque tras «window.ELECCIONES=» es JSON estricto (lo comprueba scripts/validar.js).
window.ELECCIONES={
 "meta": {
  "revisado": "2026-11-17",
  "estado": "Estado: incorporado el programa 2026 del Frente Amplio («Un programa como una casa», publicado el 16 de noviembre). Tienen programa 2026 Frente Amplio, PP, PSOE y Vox; Podemos sigue sin él.",
  "notaFuentes": "Frente Amplio, PP, PSOE y Vox ya han publicado programa para el 29-N (el de Vox se enlaza ahora desde su web de campaña, votasentidocomun.es). Podemos no tiene programa propio desde 2023, cuando concurrió dentro de Sumar: se usa su web de campaña, con cinco medidas."
 },
 "parties": [
  {
   "id": "sum",
   "n": "Frente Amplio",
   "ab": "FA",
   "k": "2026",
   "kl": "Programa 2026",
   "t": "«Un programa como una casa» · 151 p. Movimiento Sumar, IU, Más Madrid y Comuns",
   "u": "https://frenteamplio.info/pdf/ProgramaFrenteAmplio.pdf"
  },
  {
   "id": "pod",
   "n": "Podemos",
   "ab": "POD",
   "k": "web",
   "kl": "Web de campaña",
   "t": "«Paz, casa y trabajo», web de Irene Montero (5 medidas)",
   "u": "https://pazcasaytrabajo.es/"
  },
  {
   "id": "pp",
   "n": "PP",
   "ab": "PP",
   "k": "2026",
   "kl": "Programa 2026",
   "t": "«Reconstrucción Nacional» · 82 p.",
   "u": "https://www.pp.es/wp-content/uploads/2026/11/LA-RECONSTRUCCION-NACIONAL.pdf"
  },
  {
   "id": "psoe",
   "n": "PSOE",
   "ab": "PSOE",
   "k": "2026",
   "kl": "Programa 2026",
   "t": "«La fuerza de seguir avanzando» · 114 p., 500 compromisos",
   "u": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf"
  },
  {
   "id": "vox",
   "n": "Vox",
   "ab": "VOX",
   "k": "2026",
   "kl": "Programa 2026",
   "t": "«Es sentido común» · 55 p., 115 medidas",
   "u": "https://votasentidocomun.es/general/files/programa-elecct-vox.pdf"
  }
 ],
 "topics": [
  {
   "id": "vivienda",
   "n": "Vivienda",
   "qs": [
    "v1",
    "v2",
    "v3"
   ]
  },
  {
   "id": "sanidad",
   "n": "Sanidad",
   "qs": [
    "s1",
    "s2",
    "s3"
   ]
  },
  {
   "id": "educacion",
   "n": "Educación",
   "qs": [
    "e1",
    "e2",
    "e3"
   ]
  },
  {
   "id": "empleo",
   "n": "Empleo y salarios",
   "qs": [
    "t1",
    "t2",
    "t3"
   ]
  },
  {
   "id": "pensiones",
   "n": "Pensiones",
   "qs": [
    "p1",
    "p2"
   ]
  },
  {
   "id": "impuestos",
   "n": "Impuestos",
   "qs": [
    "i1",
    "i2",
    "i3"
   ]
  },
  {
   "id": "inmigracion",
   "n": "Inmigración",
   "qs": [
    "m1",
    "m2",
    "m3"
   ]
  },
  {
   "id": "clima",
   "n": "Clima y energía",
   "qs": [
    "c1",
    "c2"
   ]
  }
 ],
 "q": {
  "v1": {
   "t": "¿Limita por ley el precio del alquiler?",
   "a": {
    "pod": [
     "na",
     "La web dice que la vivienda no puede ser un negocio y que los precios deben ser justos y no llevarse la mayor parte del salario, pero no menciona el alquiler ni un límite legal de precios.",
     "web"
    ],
    "pp": [
     "no",
     "Deroga la Ley de Vivienda, con las zonas tensionadas y el índice de precios del alquiler (medida 145).",
     "53"
    ],
    "psoe": [
     "si",
     "Congelar temporalmente las rentas que superen los índices de referencia para evitar subidas abusivas en las zonas tensionadas, y garantizar en ellas el cumplimiento de la normativa de precios del alquiler con más inspecciones (medidas 62 y 77).",
     "31; 33"
    ],
    "sum": [
     "si",
     "Limitará por ley el alquiler en todas las zonas tensionadas: el techo será la cifra menor entre el 25% de la renta neta media por hogar de la sección censal y el índice SERPAVI, con una rebaja adicional del 30% en municipios de más de 200.000 habitantes o con masificación turística severa.",
     "16"
    ],
    "vox": [
     "no",
     "No limita el precio: propone derogar la Ley de Vivienda, que es la que permite topar alquileres en zonas tensionadas, y apuesta por incentivos fiscales al alquiler de larga duración (medida 30).",
     "19-20"
    ]
   }
  },
  "v2": {
   "t": "¿Acelera el desalojo de viviendas ocupadas?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Ley para que el propietario recupere su vivienda ocupada en 48 horas por orden judicial (medida 157).",
     "55"
    ],
    "psoe": [
     "si",
     "Quiere que el desalojo de viviendas ocupadas se haga en 48 horas y seguir combatiendo la ocupación ilegal con juicios rápidos y más recursos para los juzgados de guardia (medida 438).",
     "101; 102"
    ],
    "sum": [
     "na",
     "No trata la okupación ni el desalojo de viviendas ocupadas; sí prohíbe los desahucios de personas vulnerables sin alternativa habitacional.",
     ""
    ],
    "vox": [
     "si",
     "Desalojo de la vivienda okupada en menos de 24 horas, endurecimiento del Código Penal y tipificación de la inquiocupación como estafa (medida 31).",
     "20"
    ]
   }
  },
  "v3": {
   "t": "¿Fija una cifra de vivienda pública o social?",
   "a": {
    "pod": [
     "na",
     "No da ninguna cifra de vivienda pública o social.",
     "web"
    ],
    "pp": [
     "parcial",
     "Un millón de viviendas en cuatro años, pero de oferta total, sin cifra de vivienda pública (medida 144).",
     "53"
    ],
    "psoe": [
     "si",
     "Movilizar cada año un 1% del PIB para el acceso a la vivienda, un parque público estatal de 100.000 viviendas y que la vivienda pública o protegida permanente sea al menos la cuarta parte de las nuevas (medidas 38, 41 y 42).",
     "28-29"
    ],
    "sum": [
     "si",
     "1,5 millones de viviendas públicas en 12 años (125.000 al año), hasta el 20% del parque total en 2035, con un 1% del PIB anual (unos 17.000 M€).",
     "13 (también 9)"
    ],
    "vox": [
     "parcial",
     "Ampliar la inversión pública en vivienda por habitante y aumentar con urgencia la construcción de vivienda protegida, sin cifra (medida 29).",
     "19"
    ]
   }
  },
  "s1": {
   "t": "¿Cuantifica más personal o gasto sanitario?",
   "a": {
    "pod": [
     "parcial",
     "Pide sanidad pública con recursos suficientes y más profesionales mejor pagados, financiado con el dinero que se gasta en armas, pero sin cifras.",
     "web"
    ],
    "pp": [
     "si",
     "Al menos 4.500 médicos más en Atención Primaria (medida 220).",
     "69"
    ],
    "psoe": [
     "si",
     "Consolidar una financiación pública de la sanidad en torno al 7% del PIB para acabar con las listas de espera (medida 136).",
     "50"
    ],
    "sum": [
     "si",
     "Compromiso desde los Presupuestos Generales del Estado del 8% del PIB para la sanidad pública y el 25% del presupuesto sanitario para atención primaria; en salud mental, un mínimo de 10 profesionales por cada 100.000 habitantes.",
     "30, 32"
    ],
    "vox": [
     "parcial",
     "Mejora progresiva de retribuciones y refuerzo de plantillas médicas, de enfermería y administrativas, sin cifras de gasto ni de personal (medida 63).",
     "32-33"
    ]
   }
  },
  "s2": {
   "t": "¿Limita la gestión privada o los conciertos en la sanidad pública?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "na",
     "No trata la gestión privada ni los conciertos en sanidad.",
     ""
    ],
    "psoe": [
     "si",
     "Limitar la privatización de la sanidad fijando la gestión directa como modalidad preferente, con una Ley de Buen Gobierno y Buena Gestión del SNS (medida 138).",
     "50-51"
    ],
    "sum": [
     "si",
     "Ley de Gestión Pública del SNS con la gestión directa como vía general, derogación de la Ley 15/1997 (nuevas formas de gestión) e internalización paulatina de los servicios privatizados; la gestión indirecta, solo excepcional. También integra MUFACE, MUGEJU e ISFAS en el SNS.",
     "30-31"
    ],
    "vox": [
     "no",
     "Al contrario: fomenta la colaboración público-privada cuando ayude a reducir las listas de espera (medida 62).",
     "32"
    ]
   }
  },
  "s3": {
   "t": "¿Añade salud dental, visual o mental a la sanidad pública?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "parcial",
     "Solo salud mental: acceso a atención psicológica y psiquiátrica desde Atención Primaria en un plan 2027-2037; no menciona dental ni visual (medida 223).",
     "70"
    ],
    "psoe": [
     "si",
     "Plan Sonríe para incorporar a la pública empastes, endodoncias y otros tratamientos dentales básicos (con ayuda de hasta 200 € al año mientras tanto), atención psicológica gratuita con primera consulta en 30 días y ampliación del Plan VEO (medidas 137, 143 y 144).",
     "50-51"
    ],
    "sum": [
     "si",
     "Cobertura bucodental hasta al menos el 50% de la población al final de la legislatura, gafas y lentillas gratuitas para todas las edades («Plan Veo»), audífonos en la cartera común y un fondo específico para la red de salud mental comunitaria.",
     "31-32"
    ],
    "vox": [
     "parcial",
     "Solo salud mental: reforzar la Estrategia Nacional de Salud Mental y la cartera de servicios; no menciona salud dental ni visual (medida 65).",
     "33"
    ]
   }
  },
  "e1": {
   "t": "¿Deroga o sustituye la LOMLOE?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Nuevo marco educativo que sustituye la LOMLOE (medida 209).",
     "67"
    ],
    "psoe": [
     "na",
     "No menciona la LOMLOE: ni la deroga ni la sustituye.",
     "52-54"
    ],
    "sum": [
     "na",
     "No menciona la LOMLOE ni propone derogarla o sustituirla; plantea una Ley de Financiación Educativa y ratios máximas por ley.",
     ""
    ],
    "vox": [
     "si",
     "Derogación de la LOMLOE (medida 69).",
     "35"
    ]
   }
  },
  "e2": {
   "t": "¿Amplía la elección de centro y los conciertos educativos?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Elección de colegio en todo el municipio y conciertos de al menos seis años que cubran el coste real (medida 212).",
     "67"
    ],
    "psoe": [
     "na",
     "No trata la elección de centro ni los conciertos educativos.",
     "52-54"
    ],
    "sum": [
     "no",
     "El objetivo es que el 100% de los fondos públicos vaya a la educación pública; mientras coexista la concertada, prohíbe las cuotas obligatorias, y elimina los conciertos con centros que segregan por sexo o por motivos religiosos.",
     "35, 177"
    ],
    "vox": [
     "si",
     "Libre elección de centro en todos los niveles sin que la situación económica lo impida, y distrito único (medidas 67 y 74); no menciona los conciertos.",
     "35-36"
    ]
   }
  },
  "e3": {
   "t": "¿Escuela infantil de 0 a 3 años gratuita?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Escuela infantil de 0 a 3 años gratuita al final de la legislatura, pagada a medias por Estado y comunidades (medida 163).",
     "57"
    ],
    "psoe": [
     "si",
     "Universalizar la educación de 0 a 3 años con más escuelas infantiles públicas, dentro de una educación pública y gratuita de los 0 a los 18 años (medida 157).",
     "47; 52-53"
    ],
    "sum": [
     "si",
     "Universalizará la educación de 0 a 3 años con plazas públicas gratuitas garantizadas para toda familia solicitante y comedor gratuito en la red pública.",
     "29 (también 9)"
    ],
    "vox": [
     "si",
     "El plan de natalidad incluye la gratuidad real de la educación infantil de 0 a 3 años (medida 94).",
     "44"
    ]
   }
  },
  "t1": {
   "t": "¿Reduce por ley la jornada laboral?",
   "a": {
    "pod": [
     "si",
     "Jornada laboral de 30 horas semanales.",
     "web"
    ],
    "pp": [
     "na",
     "No trata la jornada; propone horarios flexibles, bancos de horas y teletrabajo (medida 162).",
     "57"
    ],
    "psoe": [
     "si",
     "Completar la reducción de la jornada a 37,5 horas sin pérdida salarial, con un calendario pactado en el diálogo social, e incentivar las 35 horas en los convenios (medida 108).",
     "42"
    ],
    "sum": [
     "si",
     "Jornada de 37,5 horas de forma inmediata en 2026 y 35 en el sector público, y reducción progresiva hasta las 32 horas semanales sin reducción salarial.",
     "61"
    ],
    "vox": [
     "na",
     "No trata la jornada laboral.",
     "—"
    ]
   }
  },
  "t2": {
   "t": "¿Fija una cifra u objetivo de salario mínimo?",
   "a": {
    "pod": [
     "si",
     "1.800 euros de salario mínimo por ley.",
     "web"
    ],
    "pp": [
     "na",
     "No fija cifra ni objetivo de salario mínimo; solo liga a él el mínimo exento del IRPF (medida 177).",
     "60"
    ],
    "psoe": [
     "si",
     "Blindar por ley el SMI por encima del 60% del salario medio y actualizarlo periódicamente (medida 87).",
     "38"
    ],
    "sum": [
     "si",
     "Garantizará por ley una subida progresiva del SMI con un suelo permanente del 60% del salario medio neto.",
     "57"
    ],
    "vox": [
     "na",
     "No fija cifra ni objetivo de salario mínimo; habla de trabajo estable y salarios dignos sin concretar (medida 8).",
     "10-11"
    ]
   }
  },
  "t3": {
   "t": "¿Rebaja las cuotas de los autónomos?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Nuevos autónomos sin cuota el primer año, y el segundo si no llegan al salario mínimo (medida 170).",
     "59"
    ],
    "psoe": [
     "na",
     "No propone rebajar las cuotas: habla de seguir avanzando en la cotización por ingresos reales y de mejorar la protección social de los autónomos (medida 117).",
     "43"
    ],
    "sum": [
     "parcial",
     "Cotización fija bonificada, sin pérdida de derechos, para autónomos cuyos ingresos reales sean inferiores al SMI anual. No es una rebaja general de cuotas.",
     "103"
    ],
    "vox": [
     "si",
     "Cuota de cero euros para los autónomos cuyos ingresos no lleguen al SMI y, por encima, cuota progresiva desde 50 euros (medida 2).",
     "7"
    ]
   }
  },
  "p1": {
   "t": "¿Revaloriza las pensiones con el IPC cada año?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Revalorizar las pensiones con el IPC cada año dentro de un Pacto de Toledo reconstruido (medida 108).",
     "42-43"
    ],
    "psoe": [
     "si",
     "Blindar en la Constitución el sistema público de pensiones y su revalorización conforme al IPC (medidas 100 y 365).",
     "41; 90"
    ],
    "sum": [
     "si",
     "Llevará a la Constitución la revalorización automática de las pensiones con el IPC y que ninguna sea inferior al SMI.",
     "63"
    ],
    "vox": [
     "na",
     "No trata la revalorización con el IPC; solo plantea garantizar la sostenibilidad del sistema con crecimiento y natalidad (medida 7).",
     "8-9"
    ]
   }
  },
  "p2": {
   "t": "¿Cambia la edad legal de jubilación?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "na",
     "No trata la edad legal de jubilación.",
     ""
    ],
    "psoe": [
     "na",
     "No cambia la edad legal de jubilación; propone evaluar mejores coeficientes reductores por penosidad y menos penalización en la jubilación anticipada involuntaria (medida 103).",
     "41"
    ],
    "sum": [
     "si",
     "Devolverá la edad de jubilación a los 65 años y la reducirá en oficios penosos (construcción, limpieza, ayuda a domicilio, pesca…), que podrán jubilarse a los 60.",
     "63-64"
    ],
    "vox": [
     "na",
     "No trata la edad legal de jubilación.",
     "—"
    ]
   }
  },
  "i1": {
   "t": "¿Baja el IRPF?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Eleva los mínimos, deflacta la tarifa y rebaja el IRPF a los jóvenes de 18 a 35 años (medidas 177-179).",
     "60"
    ],
    "psoe": [
     "parcial",
     "No hay una rebaja general: una deducción en el IRPF que se activa cuando suben los precios, para rentas medias y bajas, y convertir el mínimo por descendiente en un crédito fiscal reembolsable (medidas 88 y 134).",
     "38-39; 50"
    ],
    "sum": [
     "si",
     "Bajará el IRPF a las rentas del trabajo de hasta 27.000 € (quien cobre el SMI no pagará IRPF); a la vez añade tramos desde 120.000 € y sube el tipo marginal hasta el 52% desde 300.000 €.",
     "51"
    ],
    "vox": [
     "si",
     "Simplificación y bajada del IRPF, con un tipo menor según el número de hijos (medida 2).",
     "7"
    ]
   }
  },
  "i2": {
   "t": "¿Sube impuestos a grandes fortunas, banca o energéticas?",
   "a": {
    "pod": [
     "na",
     "No menciona impuestos; solo habla de recuperar poder adquisitivo frente a quienes tienen beneficios sin límite.",
     "web"
    ],
    "pp": [
     "na",
     "No trata grandes fortunas ni banca; sí propone suprimir el impuesto del 7 % a la producción eléctrica (medida 229).",
     "71-72"
    ],
    "psoe": [
     "si",
     "Tributación complementaria de los grandes patrimonios, tipos de hasta el 35% para las rentas del capital por encima de 300.000 €, más impuestos a las grandes tecnológicas y un impuesto a las viviendas de grandes propietarios (medidas 127, 130, 131 y 70). No habla de banca ni energéticas.",
     "48-49; 32-33"
    ],
    "sum": [
     "si",
     "Patrimonios de más de un millón de euros tributarán al menos un 2% y los de más de 50 millones un 3% (tasa Zucman); tipo mínimo efectivo del 20% en Sociedades para grandes grupos y gravámenes estructurales a energéticas (1,2% de la cifra de negocios) y banca.",
     "49-50"
    ],
    "vox": [
     "na",
     "No trata grandes fortunas, banca ni energéticas: propone revisar y reducir todos los impuestos (medida 2) y una fiscalidad agravada solo para compradores no comunitarios y operaciones especulativas de fondos o sociedades en vivienda (medida 35).",
     "7, 21"
    ]
   }
  },
  "i3": {
   "t": "¿Rebaja el IVA de los alimentos básicos?",
   "a": {
    "pod": [
     "na",
     "No lo trata; solo dice que hay que bajar el coste de la vida.",
     "web"
    ],
    "pp": [
     "si",
     "IVA del 0 % en alimentos básicos, incluidos carne, pescado y conservas, mientras dure la inflación (medida 180).",
     "61"
    ],
    "psoe": [
     "parcial",
     "No propone una rebaja propia del IVA de los alimentos; se compromete a que cualquier rebaja del IVA de los alimentos básicos llegue al precio final, reforzando la CNMC (medida 94).",
     "39"
    ],
    "sum": [
     "parcial",
     "Bajará el IVA de bienes y servicios básicos de consumo general (sin gluten al 0%, pañales al superreducido) y propone IVA reducido o exento para alimentos ecológicos y de proximidad, pero no habla de los alimentos básicos en general.",
     "52, 99"
    ],
    "vox": [
     "parcial",
     "Rebaja de los tipos general y reducido del IVA atendiendo prioritariamente a productos esenciales y de primera necesidad, sin nombrar los alimentos (medida 2).",
     "7"
    ]
   }
  },
  "m1": {
   "t": "¿Plantea una regularización extraordinaria de inmigrantes?",
   "a": {
    "pod": [
     "na",
     "No lo trata; solo dice que España tiene que ser un refugio, dentro de la medida sobre la paz.",
     "web"
    ],
    "pp": [
     "no",
     "Prohíbe por ley las regularizaciones masivas; el arraigo, solo como vía individual excepcional (medida 42).",
     "22-23"
    ],
    "psoe": [
     "na",
     "No plantea una regularización extraordinaria; propone simplificar trámites, contratación en origen y ampliar vías legales.",
     "93"
    ],
    "sum": [
     "parcial",
     "Se compromete a culminar la regularización extraordinaria de 2026 ya en marcha y a crear un procedimiento estable y permanente de regularización en la Ley de Extranjería; no plantea una nueva regularización extraordinaria.",
     "149"
    ],
    "vox": [
     "no",
     "Prohíbe las regularizaciones masivas: quien entre de forma ilegal jamás podrá regularizar su situación (medida 9); suprime el arraigo (medida 11).",
     "13"
    ]
   }
  },
  "m2": {
   "t": "¿Prioriza ayudas o servicios por arraigo o nacionalidad?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Prioridad en ayudas y prestaciones a quien tenga arraigo verificable, sin basarse solo en la nacionalidad (medida 98).",
     "40"
    ],
    "psoe": [
     "no",
     "El Plan de Integración y Ciudadanía promueve la igualdad de derechos de las personas migrantes; no prioriza ayudas por nacionalidad ni arraigo (medida 388).",
     "93"
    ],
    "sum": [
     "no",
     "Blindará por ley la atención sanitaria universal con independencia del estatus administrativo y propone eliminar barreras de acceso a derechos (empadronamiento flexible, cuenta bancaria básica); no prioriza por arraigo ni nacionalidad.",
     "30, 149"
    ],
    "vox": [
     "si",
     "«Prioridad nacional»: acceso preferente de los españoles a vivienda pública, guarderías, ayudas y prestaciones, e IMV solo para españoles (medidas 18 y 22).",
     "16"
    ]
   }
  },
  "m3": {
   "t": "¿Endurece las expulsiones?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Expulsión como regla para extranjeros condenados por delitos sexuales, de sangre o multirreincidencia (medida 44).",
     "23"
    ],
    "psoe": [
     "na",
     "No trata las expulsiones; habla de luchar contra las mafias y de una gestión eficaz del asilo y las fronteras en el marco europeo (medida 479).",
     "111"
    ],
    "sum": [
     "no",
     "Cerrará los CIE, derogará el «rechazo en frontera» y prohíbe las devoluciones encubiertas; rechaza los centros de retorno en terceros países.",
     "149-150"
    ],
    "vox": [
     "si",
     "Repatriación de quien esté en situación ilegal y deportación de quien cometa delitos graves o reiterados (medidas 12 y 14).",
     "13"
    ]
   }
  },
  "c1": {
   "t": "¿Alarga la vida de las centrales nucleares?",
   "a": {
    "pod": [
     "na",
     "No lo trata.",
     "web"
    ],
    "pp": [
     "si",
     "Elimina el calendario de cierre de las cinco centrales y tramita su extensión en cien días (medida 228).",
     "71"
    ],
    "psoe": [
     "no",
     "Mantener el calendario de cierre de las centrales nucleares hasta 2035, con proyectos de transición justa en las comarcas afectadas (medida 240).",
     "67"
    ],
    "sum": [
     "no",
     "Cumplirá el calendario de cierre de las centrales nucleares.",
     "71"
    ],
    "vox": [
     "si",
     "Deroga el calendario de cierre de las centrales nucleares y estudia instalar nuevas junto a las actuales (medida 8).",
     "10"
    ]
   }
  },
  "c2": {
   "t": "¿Endurece o adelanta los objetivos climáticos?",
   "a": {
    "pod": [
     "na",
     "Solo menciona la lucha contra el cambio climático, sin objetivos ni plazos.",
     "web"
    ],
    "pp": [
     "no",
     "Revisa por sectores el ritmo de la transición climática, de forma «ordenada y realista» (medida 232).",
     "72"
    ],
    "psoe": [
     "parcial",
     "Fija objetivos (81% de generación eléctrica renovable en 2030, hoja de ruta para abandonar los combustibles fósiles, defender y profundizar el Pacto Verde), pero no dice que endurezca o adelante los objetivos vigentes (medidas 234, 235 y 299).",
     "66; 74-75"
    ],
    "sum": [
     "si",
     "Revisará al alza el PNIEC y la Ley de Cambio Climático: emisiones −38% en 2035 y −85% en 2040 respecto a 1990, neutralidad en 2050, y generación renovable del 81% en 2030, 90% en 2035 y 100% en 2040.",
     "67"
    ],
    "vox": [
     "no",
     "Al contrario: revertir las normas inspiradas en el Pacto Verde Europeo y la Agenda 2030 (motores de combustión, impuestos al CO2) y acabar con las ZBE (medidas 8 y 44).",
     "9-10, 25"
    ]
   }
  }
 },
 "props": {
  "vivienda": {
   "pod": [
    [
     "Que nadie que quiera especular pueda comprar una vivienda en España, porque la vivienda no puede ser un negocio.",
     "web",
     false,
     false,
     false
    ],
    [
     "Precios de la vivienda justos que no se lleven la mayor parte del salario.",
     "web",
     false,
     false,
     false
    ]
   ],
   "pp": [
    [
     "Un millón de viviendas movilizando suelo público y privado, con licencias en tres meses y silencio positivo. (medida 144)",
     "53",
     true,
     false,
     false
    ],
    [
     "IVA de la primera vivienda del 10 % al 4 % para menores de 40 años e ITP reducido en vivienda usada. (medida 153)",
     "54-55",
     true,
     false,
     false
    ],
    [
     "Recuperar la vivienda ocupada en 48 horas, con exención de suministros e impuestos durante la ocupación. (medida 157)",
     "55",
     true,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Movilizar cada año un 1% del PIB para garantizar el acceso a la vivienda, sumando a todas las administraciones y al ICO (medida 38).",
     "28",
     true,
     true,
     false
    ],
    [
     "Parque público estatal de 100.000 viviendas, construidas o compradas por CASA 47, para venta o alquiler estable a precio asequible (medida 42).",
     "29",
     true,
     false,
     false
    ],
    [
     "Congelar temporalmente las rentas que superen los índices de referencia en las zonas tensionadas y alargar los contratos de alquiler (medidas 61-62).",
     "31",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "1% del PIB al año (unos 17.000 M€) para incorporar 1,5 millones de viviendas públicas en 12 años y llegar al 20% del parque en 2035.",
     "13",
     true,
     true,
     true
    ],
    [
     "Tope legal del alquiler en zonas tensionadas: el menor entre el 25% de la renta media del hogar de la sección censal y el índice SERPAVI, con un 30% más de rebaja en grandes ciudades y zonas turísticas.",
     "16",
     true,
     false,
     false
    ],
    [
     "Ley de Expropiación de Viviendas a Propietarios Corporativos, por fases: tenedores de más de 1.000 viviendas, luego de más de 700 y después de más de 50.",
     "13",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Desalojo de la vivienda okupada en menos de 24 horas, con asistencia jurídica gratuita y exención de impuestos y suministros mientras dure la ocupación (medida 31).",
     "20",
     true,
     false,
     false
    ],
    [
     "IVA del 0 % en la compra de la primera vivienda habitual nueva, bonificación del 100 % del ITP en la de segunda mano y vuelta de la deducción por vivienda habitual (medida 34).",
     "20",
     true,
     false,
     false
    ],
    [
     "Derogar la Ley de Vivienda, con incentivos fiscales al alquiler de larga duración y deducciones para inquilinos españoles (medida 30).",
     "19-20",
     true,
     false,
     false
    ]
   ]
  },
  "sanidad": {
   "pod": [
    [
     "Sanidad pública con recursos suficientes y más profesionales mejor pagados, financiado con el dinero que se gasta en armas.",
     "web",
     false,
     true,
     false
    ]
   ],
   "pp": [
    [
     "Al menos 4.500 médicos más en Atención Primaria y guardias más cortas. (medida 220)",
     "69",
     true,
     false,
     false
    ],
    [
     "Plan Nacional de Salud Mental 2027-2037 con financiación garantizada. (medida 223)",
     "70",
     true,
     false,
     true
    ],
    [
     "Pacto de Estado por la Sanidad Pública y plan urgente contra las listas de espera. (medida 219)",
     "68-69",
     false,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Financiación pública de la sanidad en torno al 7% del PIB para acabar con las listas de espera (medida 136).",
     "50",
     true,
     false,
     false
    ],
    [
     "Plan Sonríe: tratamientos dentales básicos en la pública para adultos y, mientras tanto, ayuda de hasta 200 € al año empezando por rentas medias y bajas (medida 137).",
     "50",
     true,
     false,
     false
    ],
    [
     "Atención psicológica gratuita en la sanidad pública con primera consulta en un máximo de 30 días (medida 143).",
     "51",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "8% del PIB para la sanidad pública desde los Presupuestos Generales del Estado y el 25% del gasto sanitario para atención primaria.",
     "30",
     true,
     true,
     false
    ],
    [
     "Ley de Gestión Pública del SNS: gestión directa como regla, derogación de la Ley 15/1997 e internalización paulatina de servicios privatizados.",
     "30",
     true,
     false,
     false
    ],
    [
     "Dentista público para al menos el 50% de la población al final de la legislatura, gafas y lentillas gratuitas para todas las edades y audífonos en la cartera común.",
     "31",
     true,
     false,
     true
    ]
   ],
   "vox": [
    [
     "Tarjeta sanitaria única con historia clínica compartida en toda España (medida 60).",
     "32",
     true,
     false,
     false
    ],
    [
     "Plan nacional contra las listas de espera, con colaboración público-privada cuando ayude a reducir demoras e indicadores públicos periódicos (medida 62).",
     "32",
     false,
     false,
     false
    ],
    [
     "Excluir de la sanidad pública a los extranjeros en situación ilegal salvo urgencia grave y auditar el coste de la inmigración en la sanidad (medida 20).",
     "16",
     true,
     false,
     false
    ]
   ]
  },
  "educacion": {
   "pod": [
    [
     "Educación pública con recursos suficientes y más profesionales mejor pagados, financiado con el dinero que se gasta en armas.",
     "web",
     false,
     true,
     false
    ]
   ],
   "pp": [
    [
     "Nuevo marco educativo que sustituya la LOMLOE, con detección temprana y refuerzo en horario escolar. (medida 209)",
     "67",
     true,
     false,
     false
    ],
    [
     "Elección de colegio en todo el municipio y conciertos de al menos seis años que cubran el coste real. (medida 212)",
     "67",
     true,
     false,
     false
    ],
    [
     "Escuela infantil de 0 a 3 años gratuita, financiada a medias por el Estado y las comunidades, al final de la legislatura. (medida 163)",
     "57",
     true,
     true,
     true
    ]
   ],
   "psoe": [
    [
     "Universalizar la educación de 0 a 3 años aumentando poco a poco las escuelas infantiles públicas (medida 157).",
     "52-53",
     false,
     false,
     false
    ],
    [
     "Bajar el abandono escolar temprano por debajo del 10% antes de 2030 (medida 160).",
     "53",
     true,
     false,
     true
    ],
    [
     "Matrícula gratuita del primer curso de grado en las universidades públicas (medida 179).",
     "55",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "Ley de Financiación Educativa que blinde un suelo de gasto público que llegue al 7% del PIB en 2030.",
     "35",
     true,
     true,
     true
    ],
    [
     "Educación de 0 a 3 años universal, con plazas públicas gratuitas para toda familia que la pida, comedor gratuito y ratios de 4, 6 y 8 niños por educador según la edad.",
     "29",
     true,
     false,
     false
    ],
    [
     "Ratios máximas por ley (15 en Primaria y FP, 20 en Secundaria, 23 en Bachillerato) y un máximo de 18 horas lectivas en Secundaria y de 23 en Infantil y Primaria.",
     "35-36",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Derogar la LOMLOE, prohibir los móviles en clase y un plan nacional contra el acoso escolar (medida 69).",
     "35",
     true,
     false,
     false
    ],
    [
     "Currículo común, evaluaciones nacionales, reválidas, EVAU única y educación en español en todo el territorio (medida 66).",
     "35",
     true,
     false,
     false
    ],
    [
     "Libre elección de centro con distrito único y prioridad nacional en plazas de guardería y becas de comedor y transporte (medida 74).",
     "36",
     true,
     false,
     false
    ]
   ]
  },
  "empleo": {
   "pod": [
    [
     "Salario mínimo de 1.800 euros fijado por ley.",
     "web",
     true,
     false,
     false
    ],
    [
     "Jornada laboral de 30 horas semanales.",
     "web",
     true,
     false,
     false
    ]
   ],
   "pp": [
    [
     "Nuevos autónomos sin cuota el primer año, y el segundo si no llegan al salario mínimo. (medida 170)",
     "59",
     true,
     false,
     false
    ],
    [
     "Autónomos con menos de 85.000 euros de facturación exentos de IVA y con declaraciones semestrales. (medida 171)",
     "59",
     true,
     false,
     false
    ],
    [
     "Hasta el 100 % de la base reguladora en bajas de enfermos graves de larga duración. (medida 175)",
     "60",
     true,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Completar la reducción de la jornada a 37,5 horas sin pérdida salarial e incentivar las 35 horas en la negociación colectiva (medida 108).",
     "42",
     true,
     false,
     false
    ],
    [
     "Blindar por ley el SMI por encima del 60% del salario medio (medida 87).",
     "38",
     true,
     false,
     false
    ],
    [
     "Que un contrato a tiempo parcial que supere el 80% de la jornada ordinaria cuente como jornada completa (medida 123).",
     "44",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "Jornada de 37,5 horas de forma inmediata en 2026 (35 en el sector público) y reducción progresiva hasta 32 horas sin bajar el salario.",
     "61",
     true,
     false,
     true
    ],
    [
     "Suelo legal del SMI equivalente al 60% del salario medio neto, sin que pueda absorberse con complementos.",
     "57",
     true,
     false,
     false
    ],
    [
     "Cotización fija bonificada para autónomos con ingresos inferiores al SMI y exención de liquidaciones periódicas de IVA si facturan menos de 85.000 € al año.",
     "103",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Cuota de cero euros para autónomos con ingresos por debajo del SMI y cuota progresiva desde 50 euros por encima (medida 2).",
     "7",
     true,
     false,
     false
    ],
    [
     "Derogar la legislación laboral del Gobierno de Sánchez (medida 8).",
     "11",
     false,
     false,
     false
    ],
    [
     "Plan Nacional de Reindustrialización contra las deslocalizaciones y la pérdida de empleo industrial (medida 8).",
     "10",
     false,
     false,
     false
    ]
   ]
  },
  "pensiones": {
   "pod": [],
   "pp": [
    [
     "Reconstruir el Pacto de Toledo, revalorizar las pensiones con el IPC cada año y deducción en IRPF por jubilación activa. (medida 108)",
     "42-43",
     true,
     false,
     false
    ],
    [
     "Pacto de Estado por la Dependencia con el Estado pagando el 50 % y deducción del 40 % por cuidados profesionales. (medida 114)",
     "44",
     true,
     true,
     false
    ],
    [
     "Atención presencial a los mayores y modernización del IMSERSO. (medida 110)",
     "43",
     false,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Blindar en la Constitución el sistema público de pensiones y su revalorización con el IPC (medida 100).",
     "41",
     true,
     false,
     false
    ],
    [
     "Un año adicional de cotización por cada hijo para reducir la brecha de género en las pensiones (medida 101).",
     "41",
     true,
     false,
     false
    ],
    [
     "Subir la pensión de orfandad del 20% al 30% (medida 106).",
     "42",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "Reforma constitucional para blindar la revalorización con el IPC y que ninguna pensión sea inferior al SMI.",
     "63",
     true,
     false,
     false
    ],
    [
     "Edad de jubilación de nuevo a los 65 años y a los 60 en oficios de especial penosidad.",
     "63-64",
     true,
     false,
     false
    ],
    [
     "Eliminar los coeficientes reductores en la jubilación anticipada involuntaria de quienes han cotizado más de 40 años.",
     "64",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Garantizar la sostenibilidad de las pensiones con más crecimiento, empleo y apoyo a la natalidad (medida 7).",
     "8-9",
     false,
     false,
     false
    ],
    [
     "Cotización a la Seguridad Social pagada por el Estado para los españoles que se dedican al cuidado de sus hijos, para que no les penalice en la jubilación (medida 94).",
     "44",
     true,
     false,
     false
    ],
    [
     "Más presupuesto para dependencia, ayudas al cuidado en el hogar y más plazas en residencias (medida 95).",
     "45",
     false,
     false,
     false
    ]
   ]
  },
  "impuestos": {
   "pod": [],
   "pp": [
    [
     "IRPF para jóvenes de 18 a 35 años: reducción del 100 %, 75 %, 50 % y 25 % en sus cuatro primeros años. (medida 179)",
     "60",
     true,
     false,
     false
    ],
    [
     "IVA del 0 % en alimentos básicos, incluidos carne y pescado, mientras dure la inflación. (medida 180)",
     "61",
     true,
     false,
     false
    ],
    [
     "Deflactar la tarifa del IRPF con la inflación. (medida 178)",
     "60",
     true,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Subir progresivamente el tipo de las rentas del capital hasta el 35% por encima de 300.000 €, sin tocar los dos primeros tramos (medida 130).",
     "49",
     true,
     false,
     false
    ],
    [
     "Convertir el mínimo por descendiente del IRPF en un crédito fiscal reembolsable que llegaría a 2 millones de hogares (medida 134).",
     "50",
     true,
     false,
     false
    ],
    [
     "Doblar la tasa Tobin sobre transacciones financieras, del 0,2% al 0,4% (medida 135).",
     "50",
     true,
     false,
     false
    ]
   ],
   "sum": [
    [
     "Mínimo del 2% para patrimonios de más de un millón de euros y tasa Zucman del 3% anual sobre los de más de 50 millones, que financiará la Prestación Universal por Crianza.",
     "50",
     true,
     false,
     false
    ],
    [
     "Tipo mínimo efectivo del 20% en Sociedades para grandes grupos, gravamen estructural del 1,2% a las grandes energéticas y gravamen bancario permanente.",
     "49",
     true,
     false,
     false
    ],
    [
     "Bajar el IRPF a las rentas del trabajo de hasta 27.000 € y subir el marginal hasta el 52% desde 300.000 €.",
     "51",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Simplificar y bajar el IRPF, con un tipo menor según el número de hijos (medida 2).",
     "7",
     false,
     false,
     false
    ],
    [
     "Rebajar los tipos general y reducido del IVA, priorizando productos esenciales, y bajar el Impuesto de Sociedades (medida 2).",
     "7",
     false,
     false,
     false
    ],
    [
     "Gravamen sobre las remesas enviadas al extranjero (medida 21).",
     "16",
     true,
     false,
     false
    ]
   ]
  },
  "inmigracion": {
   "pod": [],
   "pp": [
    [
     "Prohibir por ley las regularizaciones masivas; el empadronamiento no bastará para ayudas no urgentes. (medida 42)",
     "22-23",
     true,
     false,
     false
    ],
    [
     "Expulsión como regla para extranjeros condenados por delitos sexuales, de sangre o multirreincidencia. (medida 44)",
     "23",
     true,
     false,
     false
    ],
    [
     "Visados por puntos según formación, experiencia, idioma e integración. (medida 40)",
     "22",
     true,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Plan de Integración y Ciudadanía 2026-2030 con 500 millones de euros iniciales (medida 388).",
     "93",
     true,
     true,
     true
    ],
    [
     "Ampliar las vías legales y seguras de protección internacional y reforzar el sistema público de acogida y asilo (medida 389).",
     "93",
     false,
     false,
     false
    ],
    [
     "Acogida digna para los menores que lleguen solos, con el interés superior del menor en el centro (medida 391).",
     "94",
     false,
     false,
     false
    ]
   ],
   "sum": [
    [
     "Culminar la regularización extraordinaria de 2026 y crear en la Ley de Extranjería un procedimiento estable y permanente de regularización.",
     "149",
     true,
     false,
     false
    ],
    [
     "Cerrar los CIE y derogar la disposición de la Ley de Extranjería sobre el «rechazo en frontera».",
     "149-150",
     true,
     false,
     false
    ],
    [
     "Cita en las oficinas de extranjería en un máximo de siete días y reagrupación familiar resuelta en tres meses, con silencio positivo.",
     "149, 151",
     true,
     false,
     true
    ]
   ],
   "vox": [
    [
     "Prohibir las regularizaciones masivas: quien entre ilegalmente nunca podrá regularizarse; supresión del arraigo (medidas 9 y 11).",
     "13",
     true,
     false,
     false
    ],
    [
     "Repatriación de quien esté en situación ilegal y plan de «remigración» para extranjeros que vivan de subsidios (medidas 12-13).",
     "13",
     true,
     false,
     false
    ],
    [
     "«Prioridad nacional» en vivienda pública, guarderías, ayudas y prestaciones, e IMV solo para españoles (medidas 18 y 22).",
     "16",
     true,
     false,
     false
    ]
   ]
  },
  "clima": {
   "pod": [
    [
     "Lucha contra el cambio climático, financiada con el dinero que se gasta en armas.",
     "web",
     false,
     true,
     false
    ]
   ],
   "pp": [
    [
     "Eliminar el calendario de cierre de las centrales nucleares y tramitar su extensión en cien días. (medida 228)",
     "71",
     true,
     false,
     true
    ],
    [
     "Suprimir el impuesto del 7 % a la producción eléctrica y crear una tarifa social única. (medida 229)",
     "71-72",
     true,
     false,
     false
    ],
    [
     "Objetivos climáticos con ritmos sectoriales realistas, sin calendarios que dañen la competitividad. (medida 232)",
     "72-73",
     false,
     false,
     false
    ]
   ],
   "psoe": [
    [
     "Renovables hasta el 81% de la generación eléctrica en 2030, priorizando las Zonas de Aceleración Renovable (medida 234).",
     "66",
     true,
     false,
     true
    ],
    [
     "Mantener el calendario de cierre de las centrales nucleares hasta 2035 (medida 240).",
     "67",
     true,
     false,
     true
    ],
    [
     "Reducir el vertido de residuos por debajo del 30% en 2030 (medida 246).",
     "67",
     true,
     false,
     true
    ]
   ],
   "sum": [
    [
     "Destinar por ley el 3,5% del PIB anual a la transición ecológica.",
     "67",
     true,
     true,
     false
    ],
    [
     "Emisiones −38% en 2035 y −85% en 2040 (sobre 1990), neutralidad en 2050 y generación eléctrica 100% renovable en 2040.",
     "67",
     true,
     false,
     true
    ],
    [
     "Tres horas de luz gratis al día en la franja solar para todos los hogares, pagadas con el gravamen a las grandes energéticas.",
     "71",
     true,
     false,
     false
    ]
   ],
   "vox": [
    [
     "Derogar el calendario de cierre de las centrales nucleares y estudiar nuevas centrales junto a las actuales (medida 8).",
     "10",
     true,
     false,
     false
    ],
    [
     "Revertir las normas del Pacto Verde Europeo y la Agenda 2030, incluida la prohibición de motores de combustión y los impuestos al CO2 (medida 8).",
     "9-10",
     true,
     false,
     false
    ],
    [
     "Acabar con las zonas de bajas emisiones e impedir las macroplantas renovables en suelo agrícola (medidas 44 y 54).",
     "25, 29",
     true,
     false,
     false
    ]
   ]
  }
 }
};
