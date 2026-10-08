// Lista de ideas que me gustan (las reconocemos por el título)
let megusta = JSON.parse(localStorage.getItem('megusta')) || [];

function tituloDeTarjeta(tarjeta) {
    return tarjeta.querySelector('.tarjeta-titulo').textContent.trim();
}

// Busca el ♡ de cada tarjeta y se acuerda del número que tenía
function prepararCorazones() {
    document.querySelectorAll('.tarjeta .tarjeta-acciones span').forEach(function (span) {
        const texto = span.textContent;
        if (texto.includes('♡') || texto.includes('❤️')) {
            if (!span.dataset.base) {
                span.dataset.base = parseInt(texto.replace(/\D/g, '')) || 0;
            }
            span.classList.add('boton-megusta');
        }
    });
}

// Pinta cada corazón: rojo y +1 si me gusta, como estaba si no
function pintarCorazones() {
    document.querySelectorAll('.boton-megusta').forEach(function (corazon) {
        const titulo = tituloDeTarjeta(corazon.closest('.tarjeta'));
        const base = Number(corazon.dataset.base);

        if (megusta.includes(titulo)) {
            corazon.textContent = '❤️ ' + (base + 1);
            corazon.classList.add('activo');
        } else {
            corazon.textContent = '♡ ' + base;
            corazon.classList.remove('activo');
        }
    });
}

// Un solo sensor para toda la página
document.addEventListener('click', function (evento) {
    const corazon = evento.target.closest('.boton-megusta');
    if (!corazon) {
        return;
    }

    const titulo = tituloDeTarjeta(corazon.closest('.tarjeta'));

    if (megusta.includes(titulo)) {
        megusta = megusta.filter(function (t) { return t !== titulo; });
    } else {
        megusta.push(titulo);
    }

    localStorage.setItem('megusta', JSON.stringify(megusta));
    pintarCorazones();
});

prepararCorazones();
pintarCorazones();