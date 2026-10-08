// Si nadie inició sesión, lo mandamos a iniciar sesión
if (!localStorage.getItem('sesion')) {
    location.replace('iniciar-sesion.html');
}

// Cuando tocan "Cerrar sesión", le sacamos la pulsera
document.addEventListener('click', function (evento) {
    if (evento.target.closest('.cerrar-sesion')) {
        localStorage.removeItem('sesion');
        localStorage.removeItem('nombre');
    }
});