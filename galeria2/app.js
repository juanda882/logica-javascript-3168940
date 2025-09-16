const titulo = document.querySelector('.titulo');
const screen = document.querySelector('.screen');
const miniaturas = document.querySelector('.container-min');
const body = document.body;
console.log(titulo);
console.log(screen);
console.log(miniaturas);

// 2 funcion

function cambiarImg(event) {
    if (!event.target.src) return;
    titulo.textContent = event.target.name
    screen.src = event.target.src
    document.body.style.backgroundImage = `url(${event.target.src})`
} 


    miniaturas.addEventListener("click",cambiarImg)




