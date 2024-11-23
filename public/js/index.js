const main = document.querySelector('main')
const h2 = document.querySelector('h2')
const a = document.querySelector('a')
const p = document.querySelectorAll('p')

const nombre = prompt('Ingrese su nombre')

if (nombre){
    h2.innerText += nombre
} else {
    h2.innerText += 'Invitado'
}

a.style.color = '#E51B3E'

const band = confirm('¿Desea colocar un fondo de pantalla?')

if (band){
    document.querySelector('body').classList.add('fondo')
}

for (let i = 0; i < p.length; i++){
    if(i%2 == 0){
        p[i].classList.add('descatadoPar')
    }else{
        p[i].classList.add('destacadoImpar')
    }
}

main.style.display = 'block'


const menu = document.querySelector('#menu')
const logo = document.querySelector('.logoDH')

logo.addEventListener('click', function() {
    menu.style.display = 'block'
    menu.classList.toggle('mostrar')
})

menu.addEventListener('mouseleave',function(){
    menu.style.display='none'
})