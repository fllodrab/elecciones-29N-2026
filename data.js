// Datos de la web. Lo actualiza la revisión diaria de fuentes: ver CLAUDE.md.
// El bloque tras «window.ELECCIONES=» es JSON estricto (lo comprueba scripts/validar.js).
window.ELECCIONES={
 "meta": {
  "revisado": "2026-11-18",
  "estado": "Estado: incorporada la versión revisada del programa del Frente Amplio («Un programa como una casa», actualizada el 17 de noviembre). Tienen programa 2026 Frente Amplio, PP, PSOE y Vox; Podemos sigue sin él.",
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
     "61-62"
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
     "Mantendrá la tarifa plana de 88 euros mientras los ingresos reales del autónomo sean inferiores al SMI anual (hoy se pierde a los dos años), sin pérdida de derechos. No es una rebaja general de cuotas.",
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
     "64"
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
     "62",
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
     "Tarifa plana de 88 euros mientras se ingrese menos del SMI y opción de quedar exentos de las liquidaciones trimestrales de IVA si facturan menos de 85.000 € al año.",
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
     "64",
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
 },
 "votos": {
  "nota": "Votaciones del Pleno del Congreso en la legislatura 2023-2026: todas las votaciones finales de leyes y convalidaciones de decretos-ley cuyo título oficial trata de este tema, de la más antigua a la más reciente. Sale de los datos abiertos del Congreso (voto de cada diputado). Frente Amplio: Grupo Plurinacional Sumar, sin los diputados de Podemos. «Dividido»: sus diputados no votaron todos igual. Muestra lo que votaron, sin valorar si es coherente con su programa.",
  "temas": {
   "vivienda": [
    {
     "t": "Prórroga de la suspensión de desahucios de colectivos vulnerables",
     "o": "Real Decreto-ley 1/2024, de 14 de mayo, por el que se prorrogan las medidas de suspensión de lanzamientos sobre la vivienda habitual para la protección de los colectivos vulnerables.",
     "f": "2024-06-13",
     "r": "convalidado",
     "tot": [
      347,
      0,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=13/06/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion046/20240613/Votacion024/VOT_20240613125236.json",
     "v": {
      "sum": [
       "si",
       "26 a favor, 1 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "137 a favor"
      ],
      "psoe": [
       "si",
       "119 a favor, 1 no votó"
      ],
      "vox": [
       "div",
       "32 a favor, 1 abst."
      ]
     }
    },
    {
     "t": "Medidas en el alquiler por la guerra de Irán",
     "o": "Real Decreto-ley 8/2026, de 20 de marzo, de medidas en el alquiler en respuesta a las consecuencias económicas y sociales de la Guerra de Irán.",
     "f": "2026-04-28",
     "r": "derogado",
     "tot": [
      166,
      177,
      5
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=28/04/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion175/20260428/Votacion003/VOT_20260428200330.json",
     "v": {
      "sum": [
       "si",
       "25 a favor, 1 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    }
   ],
   "sanidad": [
    {
     "t": "Ley ELA: calidad de vida de personas con ELA y enfermedades irreversibles",
     "o": "Proposición de Ley para mejorar la calidad de vida de personas con Esclerosis Lateral Amiotrófica y otras enfermedades o procesos de alta complejidad y curso irreversible",
     "f": "2024-10-10",
     "r": "aprobada",
     "tot": [
      344,
      0,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=10/10/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion066/20241010/Votacion015/VOT_20241010194930.json",
     "v": {
      "sum": [
       "si",
       "25 a favor, 2 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "136 a favor, 1 no votó"
      ],
      "psoe": [
       "si",
       "117 a favor, 3 no votó"
      ],
      "vox": [
       "si",
       "33 a favor"
      ]
     }
    },
    {
     "t": "Ley de la Agencia Estatal de Salud Pública",
     "o": "Proyecto de Ley por la que se crea la Agencia Estatal de Salud Pública y se modifica la Ley 33/2011, de 4 de octubre, General de Salud Pública.",
     "f": "2025-03-20",
     "r": "rechazada",
     "tot": [
      167,
      176,
      2
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=20/03/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion101/20250320/Votacion019/VOT_20250320125720.json",
     "v": {
      "sum": [
       "si",
       "26 a favor, 1 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "135 en contra, 2 no votó"
      ],
      "psoe": [
       "div",
       "119 a favor, 1 en contra"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Cambio del copago farmacéutico",
     "o": "Real Decreto-ley 11/2026, de 12 de mayo, por el que se modifica la aportación de los usuarios y sus beneficiarios en la prestación farmacéutica ambulatoria.",
     "f": "2026-05-28",
     "r": "convalidado",
     "tot": [
      164,
      33,
      149
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=28/05/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion183/20260528/Votacion012/VOT_20260528125351.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "136 abst., 1 no votó"
      ],
      "psoe": [
       "si",
       "119 a favor, 2 no votó"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    }
   ],
   "educacion": [
    {
     "t": "Ley de enseñanzas artísticas superiores",
     "o": "Proyecto de Ley por la que se regulan las enseñanzas artísticas superiores y se establece la organización y equivalencias de las enseñanzas artísticas profesionales.",
     "f": "2024-03-14",
     "r": "aprobada",
     "tot": [
      175,
      32,
      139
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=14/03/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion029/20240314/Votacion051/VOT_20240314123806.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "136 abst., 1 no votó"
      ],
      "psoe": [
       "si",
       "118 a favor, 2 no votó"
      ],
      "vox": [
       "div",
       "32 en contra, 1 abst."
      ]
     }
    }
   ],
   "empleo": [
    {
     "t": "Reforma del subsidio por desempleo (decreto de 2023)",
     "o": "Real Decreto-ley 7/2023, de 19 de diciembre, por el que se adoptan medidas urgentes, para completar la transposición de la Directiva (UE) 2019/1158, del Parlamento Europeo y del Consejo, de 20 de junio de 2019, relativa a la conciliación de la vida familiar y la vida profesional de los progenitores y los cuidadores, y por la que se deroga la Directiva 2010/18/UE del Consejo, y para la simplificación y mejora del nivel asistencial de la protección por desempleo.",
     "f": "2024-01-10",
     "r": "derogado",
     "tot": [
      167,
      176,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=10/01/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion015/20240110/Votacion003/VOT_20240111114814.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "no",
       "5 en contra"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Reforma del subsidio por desempleo (decreto de 2024)",
     "o": "Real Decreto-ley 2/2024, de 21 de mayo, por el que se adoptan medidas urgentes para la simplificación y mejora del nivel asistencial de la protección por desempleo, y para completar la transposición de la Directiva (UE) 2019/1158 del Parlamento Europeo y del Consejo, de 20 de junio de 2019, relativa a la conciliación de la vida familiar y la vida profesional de los progenitores y los cuidadores, y por la que se deroga la Directiva 2010/18/UE del Consejo.",
     "f": "2024-06-20",
     "r": "convalidado",
     "tot": [
      178,
      0,
      171
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=20/06/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion049/20240620/Votacion019/VOT_20240620132741.json",
     "v": {
      "sum": [
       "si",
       "26 a favor, 1 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "137 abst."
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "abst",
       "33 abst."
      ]
     }
    },
    {
     "t": "Ampliación del permiso de nacimiento y cuidado",
     "o": "Real Decreto-ley 9/2025, de 29 de julio, por el que se amplía el permiso de nacimiento y cuidado, mediante la modificación del texto refundido de la Ley del Estatuto de los Trabajadores, aprobado por el Real Decreto Legislativo 2/2015, de 23 de octubre, el texto refundido de la Ley del Estatuto Básico del Empleado Público, aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre, y el texto refundido de la Ley General de la Seguridad Social, aprobado por el Real Decreto Legislativo 8/2015, de 30 de octubre, para completar la transposición de la Directiva (UE) 2019/1158 del Parlamento Europeo y del Consejo, de 20 de junio de 2019, relativa a la conciliación de la vida familiar y la vida profesional de los progenitores y los cuidadores, y por la que se deroga la Directiva 2010/18/UE del Consejo.",
     "f": "2025-09-09",
     "r": "convalidado",
     "tot": [
      313,
      0,
      33
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=09/09/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion129/20250909/Votacion003/VOT_20250909221801.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "135 a favor, 2 no votó"
      ],
      "psoe": [
       "si",
       "118 a favor, 2 no votó"
      ],
      "vox": [
       "abst",
       "33 abst."
      ]
     }
    },
    {
     "t": "Retribuciones del sector público",
     "o": "Real Decreto-ley 14/2025, de 2 de diciembre, por el que se aprueban medidas urgentes en materia de retribuciones en el ámbito del sector público.",
     "f": "2025-12-11",
     "r": "convalidado",
     "tot": [
      309,
      32,
      7
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=11/12/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion154/20251211/Votacion012/VOT_20251211175055.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "137 a favor"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "32 en contra, 1 no votó"
      ]
     }
    },
    {
     "t": "Protección laboral y social frente a los incendios forestales",
     "o": "Real Decreto-ley 20/2026, de 29 de julio, por el que se establecen medidas urgentes de protección laboral y social frente a los incendios forestales.",
     "f": "2026-09-09",
     "r": "convalidado",
     "tot": [
      312,
      30,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=09/09/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion195/20260909/Votacion001/VOT_20260909195430.json",
     "v": {
      "sum": [
       "si",
       "25 a favor, 1 no votó"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "135 a favor, 2 no votó"
      ],
      "psoe": [
       "si",
       "120 a favor, 1 no votó"
      ],
      "vox": [
       "no",
       "30 en contra, 2 no votó"
      ]
     }
    }
   ],
   "pensiones": [
    {
     "t": "Compatibilidad de la pensión de jubilación con el trabajo",
     "o": "Real Decreto-ley 11/2024, de 23 de diciembre, para la mejora de la compatibilidad de la pensión de jubilación con el trabajo.",
     "f": "2025-01-22",
     "r": "convalidado",
     "tot": [
      298,
      51,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=22/01/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion089/20250122/Votacion003/VOT_20250122154429.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "no",
       "4 en contra"
      ],
      "pp": [
       "si",
       "137 a favor"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Revalorización de las pensiones de 2026",
     "o": "Real Decreto-ley 3/2026, de 3 de febrero, para la revalorización de las pensiones públicas y otras medidas urgentes en materia de Seguridad Social.",
     "f": "2026-02-26",
     "r": "convalidado",
     "tot": [
      317,
      33,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=26/02/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion164/20260226/Votacion023/VOT_20260226153430.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "si",
       "137 a favor"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Mutualidades alternativas a la Seguridad Social",
     "o": "Proposición de Ley de modificación del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social en relación con las mutualidades alternativas reguladas en sus disposiciones adicionales 18ª y 19ª.",
     "f": "2026-06-11",
     "r": "aprobada",
     "tot": [
      180,
      0,
      168
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=11/06/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion185/20260611/Votacion040/VOT_20260611145751.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "135 abst., 2 no votó"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "abst",
       "33 abst."
      ]
     }
    },
    {
     "t": "Jubilación parcial del personal laboral de las Administraciones",
     "o": "Real Decreto-ley 19/2026, de 29 de junio, de medidas urgentes en materia de jubilación parcial anticipada del personal laboral de las Administraciones Públicas y de complemento de insularidad en Illes Balears.",
     "f": "2026-07-23",
     "r": "convalidado",
     "tot": [
      167,
      37,
      144
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=23/07/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion193/20260723/Votacion008/VOT_20260723211941.json",
     "v": {
      "sum": [
       "si",
       "25 a favor, 1 no votó"
      ],
      "pod": [
       "no",
       "4 en contra"
      ],
      "pp": [
       "abst",
       "136 abst., 1 no votó"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "no",
       "32 en contra"
      ]
     }
    }
   ],
   "impuestos": [
    {
     "t": "Impuesto mínimo a multinacionales e impuesto a la banca",
     "o": "Proyecto de Ley por la que se establecen un Impuesto Complementario para garantizar un nivel mínimo global de imposición para los grupos multinacionales y los grupos nacionales de gran magnitud, un Impuesto sobre el margen de intereses y comisiones de determinadas entidades financieras y un Impuesto sobre los líquidos para cigarrillos electrónicos y otros productos relacionados con el tabaco, y se modifican otras normas tributarias",
     "f": "2024-11-21",
     "r": "aprobada",
     "tot": [
      178,
      171,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=21/11/2024",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion079/20241121/Votacion062/VOT_20241121173859.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Medidas económicas, tributarias y de Seguridad Social (diciembre de 2024)",
     "o": "Real Decreto-ley 9/2024, de 23 de diciembre, por el que se adoptan medidas urgentes en materia económica, tributaria, de transporte, y de Seguridad Social, y se prorrogan determinadas medidas para hacer frente a situaciones de vulnerabilidad social.",
     "f": "2025-01-22",
     "r": "derogado",
     "tot": [
      171,
      177,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=22/01/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion089/20250122/Votacion001/VOT_20250122154425.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Gravamen temporal energético para 2025",
     "o": "Real Decreto-ley 10/2024, de 23 de diciembre, para el establecimiento de un gravamen temporal energético durante el año 2025.",
     "f": "2025-01-22",
     "r": "derogado",
     "tot": [
      165,
      183,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=22/01/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion089/20250122/Votacion002/VOT_20250122154427.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Prórroga de medidas de vulnerabilidad social y medidas tributarias (diciembre de 2025)",
     "o": "Real Decreto-ley 16/2025, de 23 de diciembre, por el que se prorrogan determinadas medidas para hacer frente a situaciones de vulnerabilidad social, y se adoptan medidas urgentes en materia tributaria y de Seguridad Social.",
     "f": "2026-01-27",
     "r": "derogado",
     "tot": [
      171,
      178,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=27/01/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion156/20260127/Votacion001/VOT_20260127153134.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Vulnerabilidad social y medidas tributarias (febrero de 2026)",
     "o": "Real Decreto-ley 2/2026, de 3 de febrero, por el que se adoptan medidas urgentes para hacer frente a situaciones de vulnerabilidad social, en materia tributaria y relativas a los recursos de los sistemas de financiación territorial.",
     "f": "2026-02-26",
     "r": "derogado",
     "tot": [
      172,
      177,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=26/02/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion164/20260226/Votacion022/VOT_20260226153428.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "121 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    }
   ],
   "inmigracion": [
    {
     "t": "Atención a menores migrantes en contingencias migratorias extraordinarias",
     "o": "Real Decreto-ley 2/2025, de 18 de marzo, por el que se aprueban medidas urgentes para la garantía del interés superior de la infancia y adolescencia ante situaciones de contingencias migratorias extraordinarias.",
     "f": "2025-04-10",
     "r": "convalidado",
     "tot": [
      179,
      170,
      1
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=10/04/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion106/20250410/Votacion015/VOT_20250410155154.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Nacionalidad española para saharauis nacidos bajo administración española",
     "o": "Proposición de Ley sobre concesión de nacionalidad española a las y los saharauis nacidos bajo la administración española.",
     "f": "2026-09-10",
     "r": "aprobada",
     "tot": [
      168,
      31,
      145
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=10/09/2026",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion196/20260910/Votacion003/VOT_20260910180631.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "136 abst., 1 no votó"
      ],
      "psoe": [
       "si",
       "119 a favor, 2 no votó"
      ],
      "vox": [
       "no",
       "31 en contra, 1 no votó"
      ]
     }
    }
   ],
   "clima": [
    {
     "t": "Ayudas a la movilidad eléctrica (MOVES III) para 2025",
     "o": "Real Decreto-ley 3/2025, de 1 de abril, por el que se establece el programa de incentivos ligados a la movilidad eléctrica (MOVES III) para el año 2025.",
     "f": "2025-04-10",
     "r": "convalidado",
     "tot": [
      180,
      33,
      137
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=10/04/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion106/20250410/Votacion013/VOT_20250410155152.json",
     "v": {
      "sum": [
       "si",
       "27 a favor"
      ],
      "pod": [
       "si",
       "4 a favor"
      ],
      "pp": [
       "abst",
       "137 abst."
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Refuerzo del sistema eléctrico",
     "o": "Real Decreto-ley 7/2025, de 24 de junio, por el que se aprueban medidas urgentes para el refuerzo del sistema eléctrico.",
     "f": "2025-07-22",
     "r": "derogado",
     "tot": [
      165,
      183,
      0
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=22/07/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion128/20250722/Votacion017/VOT_20250722200830.json",
     "v": {
      "sum": [
       "div",
       "25 a favor, 1 en contra"
      ],
      "pod": [
       "no",
       "4 en contra"
      ],
      "pp": [
       "no",
       "137 en contra"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    },
    {
     "t": "Ley de Movilidad Sostenible",
     "o": "Proyecto de Ley de Movilidad Sostenible.",
     "f": "2025-10-08",
     "r": "aprobada",
     "tot": [
      174,
      170,
      4
     ],
     "u": "https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=08/10/2025",
     "j": "https://www.congreso.es/webpublica/opendata/votaciones/Leg15/Sesion136/20251008/Votacion116/VOT_20251008195430.json",
     "v": {
      "sum": [
       "si",
       "26 a favor"
      ],
      "pod": [
       "abst",
       "4 abst."
      ],
      "pp": [
       "no",
       "136 en contra, 1 no votó"
      ],
      "psoe": [
       "si",
       "120 a favor"
      ],
      "vox": [
       "no",
       "33 en contra"
      ]
     }
    }
   ]
  }
 },
 "corrupcion": {
  "revisado": "2026-11-19",
  "nota": "Condenas firmes por corrupción desde el año 2000, comprobadas en las notas oficiales del Consejo General del Poder Judicial y del Tribunal Constitucional. Cuenta un caso por cada sentencia firme en la que (a) el partido es condenado a devolver dinero como partícipe a título lucrativo, o (b) es condenada por cohecho, malversación, prevaricación, tráfico de influencias, fraude a la Administración o financiación ilegal una persona que ha sido ministra, diputada o senadora en las Cortes, presidenta o consejera autonómica, o tesorera o gerente nacional del partido, por hechos ocurridos mientras militaba en él. Una misma persona puede sumar varios casos si tiene varias sentencias firmes. No incluye investigaciones abiertas, sentencias recurridas ni cargos municipales o provinciales. Los partidos no han tenido las mismas oportunidades de gobernar: Vox se fundó en 2013, Podemos en 2014 y el Frente Amplio en 2026. La lista puede no estar completa.",
  "casos": [
   {
    "p": "pp",
    "n": "Auditorio de Puerto Lumbreras",
    "f": "2026-09-24",
    "tr": "Tribunal Supremo",
    "q": "Pedro Antonio Sánchez, expresidente de la Región de Murcia, por hechos de su etapa de alcalde: 3 años de prisión.",
    "d": "Prevaricación y falsedad documental",
    "u": "https://www.poderjudicial.es/portal/site/cgpj/menuitem.65d2c4456b6ddb628e635fc1dc432ea0/?vgnextoid=80a547ab153d0a10VgnVCM1000004648ac0aRCRD&vgnextchannel=3f99c38cb605c210VgnVCM100000cb34e20aRCRD&vgnextfmt=default&vgnextlocale=es_ES"
   },
   {
    "p": "pp",
    "n": "Gürtel, pieza de Boadilla del Monte",
    "f": "2022-04-05",
    "tr": "Audiencia Nacional; recursos resueltos por el Tribunal Supremo (sentencia 849/2023)",
    "q": "El PP, como partícipe a título lucrativo: debe devolver 204.198,64 € gastados en su beneficio en las campañas municipales de 2003 y 2007. El partido no figura entre los recurrentes ante el Supremo.",
    "d": "Cohecho, prevaricación, malversación y otros (de los condenados)",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/El-Tribunal-Supremo-confirma-la-condena-que-la-Audiencia-Nacional-impuso-al-exalcalde-de-Boadilla-en-el-caso-Gurtel"
   },
   {
    "p": "pp",
    "n": "Hospital de Son Espases",
    "f": "2021-11-02",
    "tr": "Tribunal Supremo",
    "q": "Jaume Matas: 10 meses de prisión y 10 años de inhabilitación.",
    "d": "Tráfico de influencias e inducción a prevaricación y fraude a la Administración",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunales-Superiores-de-Justicia/TSJ-Illes-Balears/Oficina-de-Comunicacion/Archivo-de-notas-de-prensa/El-Tribunal-Supremo-confirma-la-condena-por-trafico-de-influencias-al-expresidente-del-Gobierno-balear-por-el-caso--Son-Espases-"
   },
   {
    "p": "pp",
    "n": "Gürtel, primera época (Majadahonda y Pozuelo)",
    "f": "2020-10-14",
    "tr": "Tribunal Supremo, sentencia 507/2020",
    "q": "El PP, como partícipe a título lucrativo: debe devolver 245.492,80 € por actos electorales pagados por la trama. Entre los 29 condenados, su extesorero Luis Bárcenas.",
    "d": "Cohecho, malversación, prevaricación, fraude a la Administración, tráfico de influencias y otros (según el condenado)",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/El-Tribunal-Supremo-confirma-penas-de-hasta-51-anos-de-prision-para-los-procesados-en-el--caso-Gurtel-"
   },
   {
    "p": "pp",
    "n": "Teatro de la ópera de Palma",
    "f": "2019-06-18",
    "tr": "Tribunal Supremo",
    "q": "Jaume Matas: 7 meses de prisión, 10 años de inhabilitación y devolución de 1,2 millones de euros.",
    "d": "Prevaricación y tráfico de influencias",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/Noticias-Judiciales/El-Tribunal-Supremo-confirma-la-condena-al-expresidente-del-Govern-Balear-a-devolver-a-la-comunidad-autonoma-1-2-millones-euros-que-cobro-el-arquitecto-Santiago-Calatrava"
   },
   {
    "p": "pp",
    "n": "Caso Nóos",
    "f": "2018-06-12",
    "tr": "Tribunal Supremo",
    "q": "Jaume Matas: 3 años y 8 meses de prisión por la contratación del Instituto Nóos por el Govern balear.",
    "d": "Delitos de la causa: prevaricación, malversación, fraude a la Administración y tráfico de influencias",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/Noticias-Judiciales/El-Tribunal-Supremo-condena-a-Inaki-Urdangarin-a-5-anos-y-10-meses-de-prision-por-malversacion--prevaricacion--fraude--dos-delitos-fiscales-y-trafico-de-influencias-en-el--caso-Noos-"
   },
   {
    "p": "pp",
    "n": "Gürtel-Fitur",
    "f": "2018-05-08",
    "tr": "Tribunal Supremo",
    "q": "Milagrosa Martínez, exconsejera de Turismo de la Generalitat Valenciana: 9 años de prisión.",
    "d": "Malversación, cohecho y prevaricación, entre otros",
    "u": "https://www.poderjudicial.es/cgpj/ca/Poder-Judicial/Tribunal-Suprem/Noticies-Judicials/El-Tribunal-Supremo-confirma-todas-las-condenas-del--caso-Gurtel-Fitur---primer-juicio-a-la-trama"
   },
   {
    "p": "pp",
    "n": "Caso Cooperación",
    "f": "2015-06-10",
    "tr": "Tribunal Supremo",
    "q": "Rafael Blasco, exconsejero de la Generalitat Valenciana: 6 años y 6 meses de prisión por desviar fondos de cooperación con Nicaragua.",
    "d": "Malversación y prevaricación, en concurso con falsedad",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunales-Superiores-de-Justicia/TSJ-Comunidad-Valenciana/Oficina-de-Comunicacion/Archivo-de-notas-de-prensa/El-Tribunal-Supremo-condena-a-seis-anos-y-medio-al-exconseller--de-la-Comunidad-Valenciana-Rafael-Blasco"
   },
   {
    "p": "pp",
    "n": "Pagos de un hotelero a la esposa del presidente balear",
    "f": "2015-02-13",
    "tr": "Tribunal Supremo",
    "q": "Jaume Matas: multa de 9.000 euros y comiso de 42.111 euros.",
    "d": "Cohecho pasivo impropio",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/El-Tribunal-Supremo-confirma-la-pena-de-multa-a-Jaume-Matas-por-los-pagos-de-un-hotelero-mallorquin-a-su-mujer"
   },
   {
    "p": "pp",
    "n": "Palma Arena (pieza Nimbus)",
    "f": "2013-07-23",
    "tr": "Tribunal Supremo",
    "q": "Jaume Matas, expresidente del Govern balear y exministro: 9 meses de prisión.",
    "d": "Tráfico de influencias",
    "u": "https://www.poderjudicial.es/portal/site/cgpj/menuitem.65d2c4456b6ddb628e635fc1dc432ea0/?vgnextoid=853a5025c1c00410VgnVCM1000006f48ac0aRCRD&vgnextchannel=05bc3da6cbe0a210VgnVCM100000cb34e20aRCRD&vgnextfmt=default&vgnextlocale=es"
   },
   {
    "p": "psoe",
    "n": "Caso mascarillas",
    "f": "2026-06-22",
    "tr": "Tribunal Supremo",
    "q": "José Luis Ábalos, exministro de Transportes y exsecretario de Organización del PSOE: 24 años y 3 meses de prisión.",
    "d": "Organización criminal, cohecho, malversación y tráfico de influencias",
    "u": "https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Tribunal-Supremo/Oficina-de-Comunicacion/Notas-de-prensa/El-Tribunal-Supremo-condena-al-exministro-Jose-Luis-Abalos-y-a-su-exasesor-Koldo-Garcia-a-24-anos-y-19-anos-de-prision--respectivamente--por-delitos-de-organizacion-criminal--cohecho--malversacion-y-trafico-de-influencias"
   },
   {
    "p": "psoe",
    "n": "ERE de Andalucía (pieza política)",
    "f": "2022-09-13",
    "tr": "Tribunal Supremo (sentencia 749/2022); en 2024 el Constitucional anuló parte de las condenas, no la de José Antonio Viera (STC 90/2024)",
    "q": "José Antonio Viera, exconsejero de Empleo de la Junta de Andalucía: 7 años y 1 día de prisión. Las condenas de los expresidentes Chaves y Griñán, anuladas en parte por el Constitucional en 2024, no se tienen en cuenta aquí.",
    "d": "Prevaricación y malversación",
    "u": "https://hj.tribunalconstitucional.es/HJ/es/Resolucion/Show/30204"
   },
   {
    "p": "psoe",
    "n": "Caso Marea (Asturias)",
    "f": "2019-09-12",
    "tr": "Tribunal Supremo",
    "q": "José Luis Iglesias Riopedre, exconsejero de Educación del Principado de Asturias: 5 años y 2 meses de prisión.",
    "d": "Prevaricación, cohecho, fraude a la Administración y falsedad",
    "u": "https://www.poderjudicial.es/cgpj/gl/Poder-Xudicial/Tribunais-Superiores-de-Xustiza/TSX-Asturias/Sala-de-prensa/Hemeroteca/El-Tribunal-Supremo-impone-penas-de-hasta-nueve-anos-de-prision-a-los-principales-acusados-del--caso-Marea--por-delitos-de-prevaricacion--malversacion--cohecho-y-falsedad"
   }
  ]
 }
};
