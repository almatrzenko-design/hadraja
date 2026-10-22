// ===== TARJETAS DE IDEAS =====
// Arma las tarjetas de las ideas publicadas (y de las de ejemplo cuando hace falta).

// Nombre y color de cada categoría
const categorias = {
    juegos: { nombre: 'Juegos', etiqueta: 'etiqueta-juegos' },
    recursos: { nombre: 'Recursos', etiqueta: 'etiqueta-recursos' },
    dinamicas: { nombre: 'Dinámicas', etiqueta: 'etiqueta-dinamicas' },
    hilos: { nombre: 'Hilos conductores', etiqueta: 'etiqueta-hilos' }
};

// Para que si alguien escribe < o > no se rompa la página
function limpiar(texto) {
    return String(texto || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// "Tami Levy" → "TL"
function iniciales(nombre) {
    return String(nombre || '?').trim().split(' ').slice(0, 2).map(function (parte) {
        return parte.charAt(0).toUpperCase();
    }).join('');
}

// Arma la fila de datos rápidos: edad, duración, janijim, materiales y tipo
function armarFicha(idea) {
    let datos = '<li>🧒 ' + limpiar(idea.edad) + '</li>';

    if (idea.duracion) {
        datos += '<li>⏱️ ' + limpiar(idea.duracion) + '</li>';
    }
    if (idea.participantes) {
        datos += '<li>👥 ' + limpiar(idea.participantes) + '</li>';
    }
    if (idea.materiales) {
        if (idea.materiales.length === 0) {
            datos += '<li>🎒 Sin materiales</li>';
        } else if (idea.materiales.length === 1) {
            datos += '<li>🎒 1 material</li>';
        } else {
            datos += '<li>🎒 ' + idea.materiales.length + ' materiales</li>';
        }
    }
    if (idea.subcategorias && idea.subcategorias.length > 0) {
        datos += '<li>🏷️ ' + limpiar(idea.subcategorias.join(', ')) + '</li>';
    }

    return '<ul class="ficha">' + datos + '</ul>';
}

// El HTML de una tarjeta
function tarjetaHTML(idea) {
    const cat = categorias[idea.categoria];

    // Si la idea tiene id, el link abre ESA idea
    let link = 'idea.html';
    if (idea.id) {
        link = 'idea.html?id=' + idea.id;
    }

    return `
        <article class="tarjeta"
            data-id="${limpiar(idea.id)}"
            data-autor="${limpiar(idea.autor)}"
            data-email="${limpiar(idea.email)}"
            data-edad="${limpiar(idea.edad)}"
            data-subcategorias="${limpiar((idea.subcategorias || []).join('|'))}">
            <div class="tarjeta-autor">
                <span class="avatar">${limpiar(iniciales(idea.autor))}</span>
                <div>
                    <p class="autor-nombre">${limpiar(idea.autor)}</p>
                    <p class="autor-movimiento">${limpiar(idea.comunidad || 'Idea nueva')}</p>
                </div>
            </div>
            <span class="etiqueta ${cat.etiqueta}">${cat.nombre}</span>
            <h2 class="tarjeta-titulo"><a href="${link}">${limpiar(idea.titulo)}</a></h2>
            <p class="tarjeta-texto">${limpiar(idea.descripcion)}</p>
            ${armarFicha(idea)}
            <div class="tarjeta-acciones">
                <span>♡ ${idea.likes || 0}</span>
                <span>💬 ${idea.comentarios || 0}</span>
                <span>🔖 Guardar</span>
            </div>
        </article>
    `;
}

// Muestra las publicaciones de una categoría (o 'todas')
function mostrarPublicaciones(categoriaElegida) {
    const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
    const lugar = document.getElementById('publicaciones-nuevas');

    publicaciones.forEach(function (pub) {
        if (categoriaElegida !== 'todas' && pub.categoria !== categoriaElegida) {
            return;
        }
        lugar.insertAdjacentHTML('afterbegin', tarjetaHTML(pub));
    });
}

// Busca una idea por su id: primero en las de ejemplo, después en las publicadas
function buscarIdea(id) {
    const ejemplos = typeof EJEMPLOS !== 'undefined' ? EJEMPLOS : [];
    const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
    return ejemplos.concat(publicaciones).find(function (idea) { return idea.id === id; }) || null;
}
