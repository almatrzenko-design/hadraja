// ===== ME GUSTA =====
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
            span.setAttribute('role', 'button');
            span.setAttribute('tabindex', '0');
            span.setAttribute('aria-label', 'Me gusta');
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
        corazon.setAttribute('aria-pressed', megusta.includes(titulo));
    });
}

// Un solo sensor para toda la página
document.addEventListener('click', function (evento) {
    const corazon = evento.target.closest('.boton-megusta');
    if (!corazon) {
        return;
    }

    const tarjeta = corazon.closest('.tarjeta');
    const titulo = tituloDeTarjeta(tarjeta);

    if (megusta.includes(titulo)) {
        megusta = megusta.filter(function (t) { return t !== titulo; });
    } else {
        megusta.push(titulo);

        // Le avisamos a quien la publicó
        if (typeof notificar === 'function') {
            notificar(tarjeta.dataset.email, (localStorage.getItem('nombre') || 'Alguien') +
                ' le dio me gusta a tu idea "' + titulo + '".', 'idea.html?id=' + tarjeta.dataset.id);
        }
    }

    localStorage.setItem('megusta', JSON.stringify(megusta));
    pintarCorazones();
});

prepararCorazones();
pintarCorazones();
