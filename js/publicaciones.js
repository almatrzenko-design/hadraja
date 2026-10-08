// Nombre y color de cada categoría
const categorias = {
    juegos: { nombre: 'Juegos', etiqueta: 'etiqueta-juegos' },
    recursos: { nombre: 'Recursos', etiqueta: 'etiqueta-recursos' },
    dinamicas: { nombre: 'Dinámicas', etiqueta: 'etiqueta-dinamicas' },
    hilos: { nombre: 'Hilos conductores', etiqueta: 'etiqueta-hilos' }
};

// Para que si alguien escribe < o > no se rompa la página
function limpiar(texto) {
    return String(texto || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Arma la fila de datos rápidos: edad, duración, janijim y materiales
function armarFicha(pub) {
    let datos = '<li>🧒 ' + limpiar(pub.edad) + '</li>';

    if (pub.duracion) {
        datos += '<li>⏱️ ' + limpiar(pub.duracion) + '</li>';
    }
    if (pub.participantes) {
        datos += '<li>👥 ' + limpiar(pub.participantes) + '</li>';
    }
    if (pub.materiales) {
        if (pub.materiales.length === 0) {
            datos += '<li>🎒 Sin materiales</li>';
        } else {
            datos += '<li>🎒 ' + pub.materiales.length + ' materiales</li>';
        }
    }

    return '<ul class="ficha">' + datos + '</ul>';
}

// Muestra las publicaciones de una categoría (o 'todas')
function mostrarPublicaciones(categoriaElegida) {
    const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
    const lugar = document.getElementById('publicaciones-nuevas');

    publicaciones.forEach(function (pub) {
        if (categoriaElegida !== 'todas' && pub.categoria !== categoriaElegida) {
            return;
        }

        const cat = categorias[pub.categoria];

        // Si la publicación tiene id, el link abre ESA idea
        let link = 'idea.html';
        if (pub.id) {
            link = 'idea.html?id=' + pub.id;
        }

        const tarjeta = `
            <article class="tarjeta">
                <div class="tarjeta-autor">
                    <span class="avatar">${limpiar(pub.autor.charAt(0).toUpperCase())}</span>
                    <div>
                        <p class="autor-nombre">${limpiar(pub.autor)}</p>
                        <p class="autor-movimiento">Idea nueva</p>
                    </div>
                </div>
                <span class="etiqueta ${cat.etiqueta}">${cat.nombre}</span>
                <h2 class="tarjeta-titulo"><a href="${link}">${limpiar(pub.titulo)}</a></h2>
                <p class="tarjeta-texto">${limpiar(pub.descripcion)}</p>
                ${armarFicha(pub)}
                <div class="tarjeta-acciones">
                    <span>♡ 0</span>
                    <span>💬 0</span>
                    <span>🔖 Guardar</span>
                </div>
            </article>
        `;

        lugar.insertAdjacentHTML('afterbegin', tarjeta);
    });
}