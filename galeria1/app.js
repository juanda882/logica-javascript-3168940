const titulo = document.getElementById('titulo');
const contenedor = document.getElementById('contenedor');
const btnPrev = document.getElementById('Prev');
const btnNext = document.getElementById('Next');
const titulos = [
    "Primera Imagen",
    "Segunda Imagen",
    "Tercera Imagen",
    "Cuarta Imagen",
    "Quinta Imagen",
]
let i = 1

function prev(){
    console.log(i)
    if(i === 0){
        i = 5
    }
    titulo.textContent = titulos[i - 1]
    contenedor.style.marginLeft = `-${400 * (i - 1)}px`
    contenedor.style.transitionDuration = ".5s"
    i-- //i=4
}

function next(){
    console.log(i)
    if(i === 5){
        i = 0
    }   
    titulo.textContent = titulos[i]
    contenedor.style.marginLeft = `-${400 * i}px`
    contenedor.style.transitionDuration = ".5s"
    i++ //i=1
}

btnPrev.addEventListener("click", prev)
btnNext.addEventListener("click", next)

