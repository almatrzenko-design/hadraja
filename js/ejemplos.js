// ===== IDEAS DE EJEMPLO =====
// Las tarjetas de ejemplo están escritas en cada página (el resumen).
// Acá está la ficha completa de cada una, para verla en idea.html?id=...

const EJEMPLOS = [
    // ---------- Juegos ----------
    {
        id: 'busqueda-tesoro', likes: 24, comentarios: 8, titulo: 'Búsqueda del tesoro', categoria: 'juegos',
        subcategorias: ['Carreras', 'Para pensar'], autor: 'Tami Levy', comunidad: 'Kvutzá Arazim',
        edad: '9 a 11 años', duracion: '1 hora', participantes: '20 a 40',
        descripcion: 'Juego por equipos con pistas escondidas, ideal para janijim de 9 a 11 años.',
        materiales: ['Pistas impresas', 'Sobres de colores', 'Un premio simbólico'],
        pasos: ['Esconder las pistas 20 minutos antes.', 'Armar equipos de 5.', 'Cada equipo recibe la primera pista.', 'Cada pista lleva a la siguiente hasta el tesoro.']
    },
    {
        id: 'nudo-humano', likes: 32, comentarios: 5, titulo: 'El nudo humano', categoria: 'juegos',
        subcategorias: ['Rompehielos', 'En ronda'], autor: 'Tami Levy', comunidad: 'Kvutzá Arazim',
        edad: '12 a 14 años', duracion: '10 min', participantes: '10 a 20',
        descripcion: 'En ronda, todos se agarran de las manos cruzadas y tienen que desenredarse sin soltarse.',
        materiales: [],
        pasos: ['Todos en ronda, hombro con hombro.', 'Cada uno agarra la mano de alguien que no tenga al lado.', 'Lo mismo con la otra mano, con otra persona.', 'Sin soltarse, tienen que desarmar el nudo.']
    },
    {
        id: 'mimica', likes: 18, comentarios: 3, titulo: 'Dígalo con mímica', categoria: 'juegos',
        subcategorias: ['Para días de lluvia', 'Para pensar'], autor: 'Dani Bergman', comunidad: 'Kvutzá Erez',
        edad: '12 a 14 años', duracion: '30 min', participantes: '10 a 20',
        descripcion: 'Dos equipos adivinan películas y canciones actuadas sin hablar. No necesita materiales.',
        materiales: [],
        pasos: ['Dividir en dos equipos.', 'Un janij saca un papelito y lo actúa para su equipo.', 'Tienen un minuto para adivinar.', 'Si no adivinan, el otro equipo puede robar el punto.']
    },
    {
        id: 'quemado', likes: 33, comentarios: 4, titulo: 'Quemado cooperativo', categoria: 'juegos',
        subcategorias: ['Con pelota', 'Carreras'], autor: 'Joni Rosen', comunidad: 'Kvutzá Tamar',
        edad: '9 a 11 años', duracion: '30 min', participantes: '20 a 40',
        descripcion: 'El quemado de siempre, pero un compañero te puede salvar atrapando la pelota en el aire.',
        materiales: ['Pelota blanda', 'Conos o buzos para marcar la cancha'],
        pasos: ['Dos equipos, cada uno en su mitad.', 'Si te queman, vas atrás del equipo contrario.', 'Si un compañero atrapa la pelota en el aire, vuelve uno de los quemados.']
    },
    {
        id: 'sillas-musicales', likes: 41, comentarios: 6, titulo: 'Sillas musicales al revés', categoria: 'juegos',
        subcategorias: ['Con música', 'Rompehielos', 'Para días de lluvia'], autor: 'Iael Katz', comunidad: 'Kvutzá Erez',
        edad: '6 a 8 años', duracion: '20 min', participantes: '10 a 20',
        descripcion: 'Cuando para la música se sacan sillas, pero nadie queda afuera: hay que entrar todos.',
        materiales: ['Una silla por janij', 'Parlante'],
        pasos: ['Sillas en ronda, mirando para afuera.', 'Suena la música y caminan alrededor.', 'Cuando para, todos tienen que estar sentados en alguna silla.', 'Se saca una silla por vuelta.']
    },

    // ---------- Recursos ----------
    {
        id: 'cancionero', likes: 40, comentarios: 9, titulo: 'Cancionero de fogón', categoria: 'recursos',
        subcategorias: ['Canciones', 'Para majané', 'Para todos'], autor: 'Noa Schwartz', comunidad: 'Kvutzá Tamar',
        edad: 'todas las edades', duracion: '30 min', participantes: 'Más de 40',
        descripcion: 'Las letras de las canciones más cantadas en los majanot, con los acordes para guitarra.',
        materiales: ['Cancioneros impresos', 'Guitarra (opcional)'],
        pasos: ['Arrancar con una canción que todos conozcan.', 'Presentar una canción nueva cantándola una vez.', 'Cantarla juntos dos veces.', 'Cerrar con la más movida.']
    },
    {
        id: 'bingo-valores', likes: 27, comentarios: 4, titulo: 'Bingo de valores', categoria: 'recursos',
        subcategorias: ['Imprimibles', 'Para todos', 'Para días de lluvia'], autor: 'Iael Katz', comunidad: 'Kvutzá Erez',
        edad: '9 a 11 años', duracion: '30 min', participantes: '20 a 40',
        descripcion: 'Cartones para imprimir con valores del movimiento. Ideal para cerrar una peulá.',
        materiales: ['Cartones impresos', 'Lápices'],
        pasos: ['Repartir los cartones.', 'Leer la definición de un valor sin decir cuál es.', 'Quien lo tiene, lo marca.', 'El primero en completar una línea grita "¡Bingo!".']
    },
    {
        id: 'diario-madrij', likes: 15, comentarios: 2, titulo: 'Diario del madrij', categoria: 'recursos',
        subcategorias: ['Individuales', 'Imprimibles'], autor: 'Maia Goldberg', comunidad: 'Kvutzá Arazim',
        edad: 'todas las edades', duracion: '10 min', participantes: 'Menos de 10',
        descripcion: 'Hojas para imprimir y anotar después de cada peulá qué salió bien y qué cambiarías.',
        materiales: ['Hojas impresas', 'Una carpeta'],
        pasos: ['Imprimir las hojas.', 'Después de cada peulá, completar una.', 'Releerlas antes de planificar la próxima.']
    },

    // ---------- Dinámicas ----------
    {
        id: 'telarana', likes: 35, comentarios: 6, titulo: 'La telaraña', categoria: 'dinamicas',
        subcategorias: ['Grupales', 'Para peulá'], autor: 'Maia Goldberg', comunidad: 'Kvutzá Arazim',
        edad: '12 a 14 años', duracion: '20 min', participantes: '10 a 20',
        descripcion: 'En ronda, cada uno dice algo de sí y le pasa el ovillo a otro. Al final queda una red que une a todo el grupo.',
        materiales: ['Un ovillo de lana'],
        pasos: ['Todos en ronda, parados.', 'El madrij agarra la punta, dice algo de sí y tira el ovillo.', 'Quien lo recibe hace lo mismo sin soltar el hilo.', 'Al final se forma la telaraña: ¿qué pasa si alguien suelta?']
    },
    {
        id: 'entrevista-cruzada', likes: 22, comentarios: 4, titulo: 'Entrevista cruzada', categoria: 'dinamicas',
        subcategorias: ['En parejas', 'Para peulá', 'Para días de lluvia'], autor: 'Joni Rosen', comunidad: 'Kvutzá Tamar',
        edad: '15 a 17 años', duracion: '30 min', participantes: '10 a 20',
        descripcion: 'En parejas se hacen preguntas y después cada uno presenta al otro frente al grupo.',
        materiales: [],
        pasos: ['Armar parejas de gente que no se conozca tanto.', 'Tienen 8 minutos para entrevistarse.', 'Cada uno presenta al otro en un minuto.']
    },
    {
        id: 'debate-libertad', likes: 36, comentarios: 7, titulo: 'Debate: ¿qué es ser libre?', categoria: 'dinamicas',
        subcategorias: ['Para majané', 'Grupales'], autor: 'Dani Bergman', comunidad: 'Kvutzá Erez',
        edad: '15 a 17 años', duracion: '45 min', participantes: '20 a 40',
        descripcion: 'Situaciones reales en tarjetas para debatir en grupos chicos, de noche, alrededor del fuego.',
        materiales: ['Tarjetas con situaciones'],
        pasos: ['Grupos de 4 o 5.', 'Cada grupo recibe 2 tarjetas.', 'Debaten: ¿esa persona es libre? ¿Por qué?', 'Cada grupo cuenta su conclusión.']
    },

    // ---------- Hilos conductores ----------
    {
        id: 'majane-pesaj', likes: 51, comentarios: 12, titulo: 'Majané de Pesaj', categoria: 'hilos',
        subcategorias: ['Majané'], autor: 'Dani Bergman', comunidad: 'Kvutzá Erez',
        edad: '12 a 14 años', duracion: 'Más de 1 hora', participantes: '20 a 40',
        descripcion: 'Un programa de tres días sobre la libertad. Cada actividad trabaja una parte de la historia de Pesaj y la conecta con la vida de los janijim hoy.',
        materiales: ['Elementos del seder', 'Afiches y fibrones'],
        pasos: ['Juego de bienvenida: rompehielos para armar los equipos del majané.', 'Peulá "¿Qué es ser libre?": debate en grupos chicos.', 'Seder creativo: cada equipo prepara una parte del seder a su manera.']
    },
    {
        id: 'tikun-olam', likes: 38, comentarios: 7, titulo: 'Proyecto Tikún Olam', categoria: 'hilos',
        subcategorias: ['Proyecto'], autor: 'Dani Bergman', comunidad: 'Kvutzá Erez',
        edad: '15 a 17 años', duracion: 'Más de 1 hora', participantes: '10 a 20',
        descripcion: 'Un proyecto de varias semanas para hacer algo concreto por la comunidad.',
        materiales: ['Guantes y bolsas (para la jornada final)'],
        pasos: ['Semana 1: la cadena de valores.', 'Semana 2: elegir entre todos qué acción hacer.', 'Semana 3: organizar la acción.', 'Semana 4: jornada de Tikún Olam en el barrio.']
    },
    {
        id: 'identidad-judia', likes: 29, comentarios: 6, titulo: 'Peulá identidad judía', categoria: 'hilos',
        subcategorias: ['Peulá'], autor: 'Noa Schwartz', comunidad: 'Kvutzá Tamar',
        edad: '12 a 14 años', duracion: '1 hora', participantes: '10 a 20',
        descripcion: 'Una peulá para pensar qué significa para cada uno ser parte del pueblo judío.',
        materiales: ['Fotos u objetos de familia (los traen los janijim)', 'Hojas y lápices'],
        pasos: ['Cada uno muestra su foto u objeto y cuenta su historia.', 'En grupos chicos buscan cosas en común y cosas distintas.', 'Arman entre todos un mapa del grupo.']
    },
    {
        id: 'majane-verano', likes: 44, comentarios: 10, titulo: 'Majané verano', categoria: 'hilos',
        subcategorias: ['Majané'], autor: 'Joni Rosen', comunidad: 'Kvutzá Tamar',
        edad: '9 a 11 años', duracion: 'Más de 1 hora', participantes: 'Más de 40',
        descripcion: 'Programa para el majané de verano, con juegos al aire libre y fogón.',
        materiales: ['Bolsas de arpillera', 'Pelotas', 'Cancioneros'],
        pasos: ['Día 1: ronda de nombres y búsqueda del tesoro.', 'Día 2: quemado cooperativo y carrera de embolsados.', 'Día 3: fogón de cierre.']
    }
];
