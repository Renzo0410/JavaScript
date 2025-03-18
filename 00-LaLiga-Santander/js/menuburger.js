// Menú de hamburguesa

const button = document.querySelector('.icon-button-burger');
const nav = document.querySelector('.nav-secundario');

button.addEventListener('click', () => {
    nav.classList.toggle('desplazar')
})