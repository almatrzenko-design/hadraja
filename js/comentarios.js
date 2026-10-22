// ===== COMENTARIOS EN VENTANITA (pop-up) =====
// Tocás el 💬 de cualquier tarjeta y se abre una ventanita
// con los comentarios de esa idea y un casillero para comentar.

// Todos los comentarios: un "cajón" por idea (el nombre del cajón es el título)
let comentariosPorIdea = JSON.parse(localStorage.getItem('comentariosTarjetas')) || {};

// Para que si alguien escribe < o > no se rompa la página
function escaparTexto(texto) {
    return String(texto || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// El título de la idea: el botón lo trae anotado (en idea.html) o lo sacamos de su tarjeta
function tituloDeLaTarjeta(elemento) {
    if (elemento.dataset.titulo) {
        return elemento.dataset.titulo;
    }
    return elemento.closest('.tarjeta').querySelector('.tarjeta-titulo').textContent.trim();
}

// Busca el 💬 de cada tarjeta y se acuerda del número que tenía
function prepararGlobitos() {
    document.querySelectorAll('.tarjeta .tarjeta-acciones span').forEach(function (span) {
        if (span.textContent.includes('💬') && !span.classList.contains('boton-comentar')) {
            if (!span.dataset.base) {
                span.dataset.base = parseInt(span.textContent.replace(/\D/g, '')) || 0;
            }
            span.classList.add('boton-comentar');
            span.setAttribute('role', 'button');
            span.setAttribute('tabindex', '0');
            span.setAttribute('aria-label', 'Comentarios');
        }
    });
}

// Número de cada globito: el que tenía + los comentarios nuevos
function pintarGlobitos() {
    document.querySelectorAll('.boton-comentar').forEach(function (globito) {
        const titulo = tituloDeLaTarjeta(globito);
        const nuevos = (comentariosPorIdea[titulo] || []).length;
        globito.textContent = '💬 ' + (Number(globito.dataset.base) + nuevos);
    });
}

// Abre la ventanita de comentarios de una idea
function abrirComentarios(titulo, emailAutor, idIdea) {
    const fondo = document.createElement('div');
    fondo.className = 'ventana-fondo';
    fondo.innerHTML = `
        <div class="ventana" role="dialog" aria-modal="true" aria-label="Comentarios">
            <div class="ventana-cabecera">
                <div>
                    <h2 class="ventana-titulo">Comentarios</h2>
                    <p class="ventana-sub">${escaparTexto(titulo)}</p>
                </div>
                <button type="button" class="ventana-cerrar" aria-label="Cerrar">✕</button>
            </div>
            <div class="ventana-lista"></div>
            <form class="ventana-form">
                <input type="text" placeholder="Escribí un comentario..." aria-label="Tu comentario">
                <button type="submit">Enviar</button>
            </form>
        </div>
    `;
    document.body.appendChild(fondo);

    const lista = fondo.querySelector('.ventana-lista');
    const form = fondo.querySelector('.ventana-form');
    const campo = form.querySelector('input');

    function dibujarLista() {
        const comentarios = comentariosPorIdea[titulo] || [];
        if (comentarios.length === 0) {
            lista.innerHTML = '<p class="ventana-vacia">Todavía no hay comentarios. ¡Sé la primera persona en comentar!</p>';
            return;
        }
        lista.innerHTML = comentarios.map(function (c) {
            return `
                <div class="ventana-comentario">
                    <span class="avatar ventana-avatar">${escaparTexto(c.autor.charAt(0).toUpperCase())}</span>
                    <div>
                        <p class="ventana-autor">${escaparTexto(c.autor)}</p>
                        <p class="ventana-texto">${escaparTexto(c.texto)}</p>
                    </div>
                </div>
            `;
        }).join('');
        lista.scrollTop = lista.scrollHeight; // bajamos al último
    }

    function cerrar() {
        fondo.remove();
        document.removeEventListener('keydown', cerrarConEsc);
    }

    function cerrarConEsc(evento) {
        if (evento.key === 'Escape') {
            cerrar();
        }
    }

    // Se cierra con la X, tocando afuera o con la tecla Esc
    fondo.querySelector('.ventana-cerrar').addEventListener('click', cerrar);
    fondo.addEventListener('click', function (evento) {
        if (evento.target === fondo) {
            cerrar();
        }
    });
    document.addEventListener('keydown', cerrarConEsc);

    // Mandar un comentario
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const texto = campo.value.trim();
        if (texto === '') {
            return;
        }

        const comentarios = comentariosPorIdea[titulo] || [];
        comentarios.push({ autor: localStorage.getItem('nombre') || 'Miri', texto: texto });
        comentariosPorIdea[titulo] = comentarios;
        localStorage.setItem('comentariosTarjetas', JSON.stringify(comentariosPorIdea));

        // Le avisamos a quien la publicó
        if (typeof notificar === 'function') {
            notificar(emailAutor, (localStorage.getItem('nombre') || 'Alguien') +
                ' comentó tu idea "' + titulo + '": "' + texto + '"', 'idea.html?id=' + idIdea);
        }

        campo.value = '';
        dibujarLista();
        pintarGlobitos();
    });

    dibujarLista();
    campo.focus();
}

// Un solo sensor para todos los 💬 de la página
document.addEventListener('click', function (evento) {
    const globito = evento.target.closest('.boton-comentar');
    if (globito) {
        const tarjeta = globito.closest('.tarjeta');
        const datos = tarjeta ? tarjeta.dataset : globito.dataset;
        abrirComentarios(tituloDeLaTarjeta(globito), datos.email, datos.id);
    }
});

prepararGlobitos();
pintarGlobitos();
