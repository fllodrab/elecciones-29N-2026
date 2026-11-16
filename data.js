// Datos de la web. Lo actualiza la revisión diaria de fuentes: ver CLAUDE.md.
// El bloque tras «window.ELECCIONES=» es JSON estricto (lo comprueba scripts/validar.js).
window.ELECCIONES={
 "meta": {
  "revisado": "2026-11-16",
  "estado": "Estado: incorporado el programa 2026 del PSOE («La fuerza de seguir avanzando», presentado el 15 de noviembre). Tienen programa 2026 PP, PSOE y Vox; Frente Amplio y Podemos siguen sin él.",
  "notaFuentes": "PP, PSOE y Vox ya han publicado programa para el 29-N (el de Vox se enlaza desde la copia de Demócrata, porque la web de Vox no es accesible desde aquí). El Frente Amplio (Movimiento Sumar, IU, Más Madrid y Comuns) se estrena en 2026, así que se usa el programa de Sumar de 2023, su principal integrante, marcado en ámbar. Podemos no tiene programa propio desde 2023, cuando concurrió dentro de Sumar: se usa su web de campaña, con cinco medidas."
 },
 "parties": [
  {
   "id": "sum",
   "n": "Frente Amplio",
   "ab": "FA",
   "k": "2023",
   "kl": "Programa 2023",
   "t": "Programa de Sumar 2023, «Un programa para ti» · 183 p. Movimiento Sumar, IU, Más Madrid y Comuns",
   "u": "https://movimientosumar.es/wp-content/uploads/2023/07/Un-Programa-para-ti.pdf"
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
   "t": "«Es sentido común» · 55 p., 115 medidas. Copia de Demócrata",
   "u": "https://www.democrata.es/uploads/s1/35/26/90/2/programa-elecct-vox.pdf"
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
     "Aplicará la regulación de alquileres a todas las zonas de mercado tensionado y busca garantizar el control de alquileres en toda España; precios de referencia en zonas tensionadas fijados en el 30% de los ingresos del hogar inquilino.",
     "77-79 (también 9)"
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
     "No trata la okupación ni el desalojo de viviendas ocupadas; solo menciona vivienda alternativa frente a los desahucios y cita 'el fenómeno de la ocupación' como ejemplo de publicidad que alimenta la sensación de inseguridad.",
     "77, 133"
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
     "Constituir en menos de diez años un parque de viviendas sociales y asequibles en alquiler de dos millones de inmuebles, con un gasto medio del 1% del PIB.",
     "79 (también 76)"
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
     "El gasto sanitario público aumentará anualmente medio punto del PIB hasta igualar el promedio de los diez países europeos con mayor gasto; parte sustancial a atención primaria. No cuantifica plantillas.",
     "89"
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
     "Blindará el carácter público del SNS, impidiendo las formas de gestión privatizadas; también propone sacar a los funcionarios de las mutualidades/seguros privados colectivos.",
     "89, 92"
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
     "Propone incorporar a los servicios sanitarios públicos salud bucodental, óptica, audioprotésica, psicoterapia, entre otras, y un Plan de Choque en Salud Mental.",
     "89-90"
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
     "No propone derogar ni sustituir la LOMLOE; solo la cita de pasada ('cumpliendo la LOMLOE') en el apartado de educación en bienestar animal.",
     "56"
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
     "Suprimirá de forma inmediata los conciertos con centros que segregan por sexo o seleccionan alumnado y pide que la concertada sea realmente subsidiaria de la pública.",
     "155"
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
     "Universalización de la cobertura pública gratuita de 0 a 3 años, con creación acelerada de plazas públicas hasta una cobertura del 90%.",
     "9-10, 154"
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
     "En 2024 se establecerá por ley una jornada máxima de 37,5 horas semanales y se abrirá un proceso de diálogo hacia las 32 horas, sin reducción de salario.",
     "7, 24"
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
     "parcial",
     "Subirá el SMI por encima del IPC anual; recuerda que con 1.080 € ya se alcanzó el 60% del salario medio, pero no fija nueva cifra.",
     "7, 26"
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
     "Régimen específico de cotización para autónomos con bajos ingresos: cotización fija bonificada sin pérdida de derechos cuando sus ingresos reales sean inferiores al SMI anual. No es una rebaja general.",
     "29-30"
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
     "Mantiene la actualización automática de las pensiones con el IPC; las mínimas y no contributivas subirán por encima del IPC hasta alcanzar al menos el umbral de pobreza.",
     "15, 34"
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
     "na",
     "No modifica la edad legal de jubilación; solo menciona el derecho a la prolongación voluntaria de la vida laboral.",
     "24"
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
     "no",
     "No baja el IRPF; añade tramos por encima de 120.000 € y sube el tipo marginal del 45% al 52% para rentas desde 300.000 €, y las rentas del capital hasta el 30%.",
     "17"
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
     "Impuesto permanente a grandes fortunas de al menos el 4% para los mayores patrimonios; mantiene los impuestos extraordinarios a energéticas y entidades financieras hasta reformar Sociedades (mínimo efectivo del 15%).",
     "16"
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
     "na",
     "No trata el IVA de los alimentos; solo propone una cesta básica a precios asequibles sin detalle fiscal y un impuesto a bebidas azucaradas y ultraprocesados.",
     "9, 17, 91"
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
     "Propone reformar la Ley de Extranjería para introducir un procedimiento de regularización permanente, no una regularización extraordinaria.",
     "104-105"
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
     "Garantiza el acceso universal al SNS a solicitantes de asilo y migrantes en situación irregular y extiende el ingreso mínimo a migrantes irregulares, sin priorizar por arraigo o nacionalidad.",
     "86, 106"
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
     "Propone cerrar los CIE en todo el territorio y eliminar la disposición de la Ley de Extranjería que ampara las devoluciones sumarias en frontera.",
     "106, 149"
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
     "Se compromete a mantener el calendario de cierre del parque nuclear y a una moratoria de nuevas iniciativas nucleares.",
     "48"
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
     "Objetivos para 2030: 55% de reducción de emisiones, 90% de renovables en generación eléctrica y 50% de electrificación; emisiones netas nulas en 2040.",
     "41"
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
     "Parque de dos millones de viviendas sociales y asequibles en alquiler en menos de diez años, con un gasto medio del 1% del PIB.",
     "79",
     true,
     true,
     true
    ],
    [
     "Regulación de alquileres en todas las zonas tensionadas con precios de referencia del 30% de los ingresos del hogar y retirada de deducciones de IRPF al arrendador por encima de ese nivel.",
     "77-78",
     true,
     false,
     false
    ],
    [
     "Bono de emergencia de 1.000 € para hogares con hipoteca a tipo variable, financiado con el impuesto extraordinario a la banca.",
     "8, 79",
     true,
     true,
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
     "Aumento anual del gasto sanitario público de medio punto del PIB hasta igualar la media de los diez países europeos que más gastan, reforzando la atención primaria.",
     "89",
     true,
     false,
     false
    ],
    [
     "Incorporar a la cartera pública salud bucodental, óptica, audioprotésica, psicoterapia, fisioterapia y nutrición, y un Plan de Choque en Salud Mental.",
     "89-90",
     false,
     false,
     false
    ],
    [
     "Crear una empresa farmacéutica pública que investigue, fabrique y comercialice medicamentos, terapias esenciales y vacunas.",
     "91",
     true,
     false,
     false
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
     "Universalizar la cobertura pública gratuita de 0 a 3 años con plazas públicas hasta el 90% de cobertura.",
     "9-10, 154",
     true,
     false,
     false
    ],
    [
     "Suprimir de forma inmediata los conciertos con centros que segregan por sexo o seleccionan alumnado.",
     "155",
     true,
     false,
     true
    ],
    [
     "Plan contra el calor en los centros educativos ('Centros educativos contra la crisis climática') y plan de salud mental en los centros.",
     "158",
     false,
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
     "Jornada máxima legal de 37,5 horas semanales en 2024 y diálogo social hacia 32 horas sin reducción salarial.",
     "7, 24",
     true,
     false,
     true
    ],
    [
     "Subir el SMI por encima del IPC anual.",
     "7",
     true,
     false,
     false
    ],
    [
     "Cotización fija bonificada para autónomos cuyos ingresos reales sean inferiores al SMI anual, sin pérdida de protección.",
     "29-30",
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
     "Revalorización automática de las pensiones con el IPC, fijada por ley.",
     "15, 34",
     true,
     false,
     false
    ],
    [
     "Subir las pensiones mínimas y no contributivas por encima del IPC hasta alcanzar al menos el umbral de pobreza.",
     "15",
     true,
     false,
     false
    ],
    [
     "Mejorar las fuentes de financiación del sistema (nuevos mecanismos y más cotizantes) para no ajustar vía recortes de prestaciones.",
     "15, 35",
     false,
     true,
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
     "Impuesto permanente a las grandes fortunas con un tipo de al menos el 4% para los mayores patrimonios, que financiaría una herencia universal de 20.000 € a los 23 años.",
     "15-16",
     true,
     true,
     false
    ],
    [
     "IRPF: más tramos por encima de 120.000 € y tipo marginal del 52% desde 300.000 €; rentas del capital hasta el 30%.",
     "17",
     true,
     false,
     false
    ],
    [
     "Tipo mínimo efectivo del 15% en Sociedades y mantenimiento de los impuestos extraordinarios a energéticas y financieras hasta completar la reforma.",
     "16",
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
     "Reformar la Ley de Extranjería para introducir un procedimiento de regularización permanente.",
     "104-105",
     true,
     false,
     false
    ],
    [
     "Cierre de los Centros de Internamiento de Extranjeros (CIE) en todo el territorio.",
     "106",
     true,
     false,
     false
    ],
    [
     "Garantizar el acceso universal al SNS a solicitantes de asilo y migrantes en situación irregular, y sistematizar el asilo por vía diplomática en embajadas y consulados.",
     "105-106",
     true,
     false,
     false
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
     "Objetivos 2030: 55% de reducción de emisiones, 90% de renovables en la generación eléctrica y 50% de electrificación de la demanda; emisiones netas nulas en 2040.",
     "41",
     true,
     false,
     true
    ],
    [
     "Mantener el calendario de cierre nuclear y moratoria a nuevas iniciativas nucleares.",
     "48",
     true,
     false,
     true
    ],
    [
     "Rehabilitar 500.000 viviendas al año (100% eléctricas), reduciendo su demanda energética un 50%.",
     "10, 41, 47",
     true,
     false,
     true
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
