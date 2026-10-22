// ===== SESIÓN: "el patovica" + lo de la cuenta =====
// Se carga en el <head> de todas las páginas de adentro.

// Si nadie inició sesión, lo mandamos a iniciar sesión
if (!localStorage.getItem('sesion')) {
    location.replace('iniciar-sesion.html');
}

// La cuenta de quien inició sesión (o null)
function cuentaActual() {
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    const email = localStorage.getItem('sesion');
    return cuentas.find(function (c) { return c.email === email; }) || null;
}

// Cambia datos de la cuenta que inició sesión
function guardarCuenta(cambios) {
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    const email = localStorage.getItem('sesion');
    cuentas.forEach(function (c) {
        if (c.email === email) {
            Object.assign(c, cambios);
        }
    });
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
}

// Deja una notificación para alguien (por su mail). Nunca para uno mismo.
function notificar(paraEmail, texto, link) {
    if (!paraEmail || paraEmail === localStorage.getItem('sesion')) {
        return;
    }
    const lista = JSON.parse(localStorage.getItem('notificaciones')) || [];
    lista.push({ para: paraEmail, texto: texto, link: link || 'feed.html', fecha: Date.now(), leida: false });
    localStorage.setItem('notificaciones', JSON.stringify(lista));
}

// Cuando tocan "Cerrar sesión", le sacamos la pulsera
document.addEventListener('click', function (evento) {
    if (evento.target.closest('.cerrar-sesion')) {
        localStorage.removeItem('sesion');
        localStorage.removeItem('nombre');
    }
});

// Accesibilidad: los ♡, 🔖 y 💬 se pueden usar con el teclado (Enter o Espacio)
document.addEventListener('keydown', function (evento) {
    const elemento = evento.target;
    if ((evento.key === 'Enter' || evento.key === ' ') && elemento.getAttribute('role') === 'button') {
        evento.preventDefault();
        elemento.click();
    }
});
