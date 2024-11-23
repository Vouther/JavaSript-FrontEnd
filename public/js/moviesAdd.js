const h1 = document.querySelector('h1');
const section = document.querySelector('section');
const article = document.querySelector('article');

h1.innerText = 'AGREGAR PELÍCULAS'
h1.classList.add('titulo');
article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD');

const boton = document.querySelector('.botonAgregar');

boton.addEventListener('mouseover', () => {
    boton.style.backgroundColor = 'red';
});

boton.addEventListener('mouseout', () => {
    boton.style.backgroundColor = 'green';
});


let secretSequence = ['s', 'e', 'c', 'r', 'e', 't','o'];
let inputIndex = 0;

const titulo = document.querySelector('#title');

titulo.addEventListener('keydown', (event) => {
    if (event.key == secretSequence[inputIndex]) {
        inputIndex++;
        if (inputIndex == secretSequence.length) {
            alert('SECRETO MAGICO');
            inputIndex = 0; // Reiniciar el índice para la próxima vez
        }
    } else {
        inputIndex = 0; // Reiniciar el índice si la secuencia no coincide
    }
});