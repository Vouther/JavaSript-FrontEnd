const body = document.querySelector('body');
const h1 = document.querySelector('h1');

/*
const modo = confirm('¿Desea modo oscuro?')

if (modo) {
    body.style.backgroundColor = '#7f7f7f​'
    body.classList.add('fondoMoviesList');
}
*/

const logo = document.querySelector('figure')

logo.addEventListener('mouseover', () => {
    body.style.backgroundColor = '#7f7f7f​'
    body.classList.toggle('fondoMoviesList');
})

h1.innerText = "LISTADO DE PELÍCULAS"
h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.padding = '20px'