// ===== GUARDAR =====
// Tocás 🔖 en cualquier tarjeta y se guarda una copia en "Guardadas".

// Lista de ideas guardadas
let guardadas = JSON.parse(localStorage.getItem('guardadas')) || [];

// El título de una tarjeta (lo usamos para reconocerla)
function tituloDe(tarjeta) {
    return tarjeta.querySelector('.tarjeta-titulo').textContent.trim();
}

// Convierte cada "🔖 Guardar" de las tarjetas en un botón
function prepararBotones() {
    document.querySelectorAll('.tarjeta .tarjeta-acciones span').forEach(function (span) {
        if (span.textContent.includes('🔖')) {
            span.classList.add('boton-guardar');
            span.setAttribute('role', 'button');
            span.setAttribute('tabindex', '0');
        }
    });
}

// Pinta cada botón según si la idea está guardada o no
function pintarGuardadas() {
    document.querySelectorAll('.boton-guardar').forEach(function (boton) {
        const titulo = tituloDe(boton.closest('.tarjeta'));
        const estaGuardada = guardadas.some(function (g) {
            return g.titulo === titulo;
        });

        if (estaGuardada) {
            boton.textContent = '🔖 Guardada';
            boton.classList.add('guardada');
        } else {
            boton.textContent = '🔖 Guardar';
            boton.classList.remove('guardada');
        }
        boton.setAttribute('aria-pressed', estaGuardada);
    });
}

// En la página Guardadas: muestra las copias guardadas
function mostrarGuardadas() {
    const lista = document.getElementById('lista-guardadas');
    const vacio = document.getElementById('sin-guardadas');

    lista.innerHTML = '';
    guardadas.forEach(function (g) {
        lista.insertAdjacentHTML('afterbegin', g.html);
    });

    if (guardadas.length === 0) {
        vacio.style.display = 'block';
    } else {
        vacio.style.display = 'none';
    }

    prepararBotones();
    pintarGuardadas();
}

// Cuando tocan un 🔖 en cualquier parte de la página
document.addEventListener('click', function (evento) {
    const boton = evento.target.closest('.boton-guardar');
    if (!boton) {
        return;
    }

    const tarjeta = boton.closest('.tarjeta');
    const titulo = tituloDe(tarjeta);
    const yaEsta = guardadas.some(function (g) {
        return g.titulo === titulo;
    });

    if (yaEsta) {
        guardadas = guardadas.filter(function (g) {
            return g.titulo !== titulo;
        });
    } else {
        const copia = tarjeta.cloneNode(true);
        copia.style.display = '';
        copia.querySelectorAll('.boton-seguir, .para-vos').forEach(function (b) {
            b.remove();
        });
        guardadas.push({ titulo: titulo, html: copia.outerHTML });

        // Le avisamos a quien la publicó
        if (typeof notificar === 'function') {
            notificar(tarjeta.dataset.email, (localStorage.getItem('nombre') || 'Alguien') +
                ' guardó tu idea "' + titulo + '".', 'idea.html?id=' + tarjeta.dataset.id);
        }
    }

    localStorage.setItem('guardadas', JSON.stringify(guardadas));

    if (document.getElementById('lista-guardadas')) {
        mostrarGuardadas();
    } else {
        pintarGuardadas();
    }
});

// Al abrir la página
prepararBotones();
if (document.getElementById('lista-guardadas')) {
    mostrarGuardadas();
} else {
    pintarGuardadas();
}
