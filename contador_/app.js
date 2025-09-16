//seleccionar los elementos con los que va a interactura o los que corresponden a la interaccion 
const body = document.querySelector(".body");
const pantalla = document.querySelector(".pantalla");
const btnMas = document.querySelector(".btn-mas");
const btnMenos = document.querySelector(".btn-menos");
let counter = 0

// 2. funcion 
function incrementar(){
     pantalla.textContent = ++ counter
 if (counter >= 10){
   
    pantalla.style.color = "red";
    pantalla.textContent = counter;

} 
 if (counter >= 30){
    document.body.style.backgroundColor = "green"
    
 } else {
    document.body.style.backgroundColor = ''
 }
 
}


function decrementar(){
    if (counter > 0) {
    pantalla.textContent = -- counter;
    if (counter < 10){
    pantalla.style.color = "black";
    pantalla.textContent = counter;
}
if (counter <= 29) {
    document.body.style.backgroundColor = ""
    
} else {
    document.body.backgroundColor =  ''
}
    
} 
}

// 3. crear el evneto 
btnMas.addEventListener("click", incrementar);
btnMenos.addEventListener("click", decrementar);


