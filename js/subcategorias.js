// Las subcategorías de cada categoría
// (son las mismas de los chips de cada página)
const SUBCATEGORIAS = {
    juegos: ['Rompehielos', 'Con música', 'En ronda', 'Con pelota', 'Carreras', 'Para pensar', 'Para días de lluvia'],
    recursos: ['Individuales', 'Para todos', 'Canciones', 'Imprimibles', 'Para días de lluvia', 'Para majané'],
    dinamicas: ['Para majané', 'Para peulá', 'Grupales', 'En parejas', 'Para días de lluvia'],
    hilos: ['Majané', 'Peulá', 'Proyecto']
};

// Hace que los chips filtren las tarjetas de la página
function activarFiltroSubcategorias() {
    const chips = document.querySelectorAll('.chips .chip');
    const tarjetas = document.querySelectorAll('.tarjeta');
    const aviso = document.getElementById('sin-resultados');

    chips.forEach(function (chip) {
        chip.addEventListener('click', function (evento) {
            // Los chips son links con href="#": frenamos que salten arriba
            evento.preventDefault();

            // Pintamos solo el chip tocado
            chips.forEach(function (otro) { otro.classList.remove('activo'); });
            chip.classList.add('activo');

            // "" es "Todos"
            const elegida = chip.dataset.sub;
            let visibles = 0;

            tarjetas.forEach(function (tarjeta) {
                const suyas = (tarjeta.dataset.subcategorias || '').split('|');
                const mostrar = elegida === '' || suyas.includes(elegida);
                tarjeta.style.display = mostrar ? '' : 'none';
                if (mostrar) {
                    visibles++;
                }
            });

            aviso.style.display = visibles === 0 ? 'block' : 'none';
        });
    });
}

// Si la página tiene chips de subcategorías, los activamos
if (document.querySelector('.chip[data-sub]')) {
    activarFiltroSubcategorias();
}
