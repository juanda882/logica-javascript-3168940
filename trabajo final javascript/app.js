
/*******************************
 * 1. CONTADOR INTERACTIVO
 *******************************/
const pantalla = document.querySelector(".pantalla");
const btnMas = document.querySelector(".btn-mas");
const btnMenos = document.querySelector(".btn-menos");
let counter = 0;

function incrementar() {
  counter++;
  pantalla.textContent = counter;
  if (counter >= 10) {
    pantalla.style.color = "red";
  }
  if (counter >= 30) {
    document.body.style.backgroundColor = "green";
  } else if (counter < 30) {
    document.body.style.backgroundColor = "";
  }
}

function decrementar() {
  if (counter > 0) {
    counter--;
    pantalla.textContent = counter;
    if (counter < 10) {
      pantalla.style.color = "black";
    }
    if (counter <= 29) {
      document.body.style.backgroundColor = "";
    }
  }
}

btnMas?.addEventListener("click", incrementar);
btnMenos?.addEventListener("click", decrementar);

/*******************************
 * 2. GALERÍA DESLIZANTE
 *******************************/
const titulo = document.getElementById("titulo");
const contenedor = document.getElementById("contenedor");
const btnPrev = document.getElementById("Prev");
const btnNext = document.getElementById("Next");

const titulos = ["Primera Imagen", "Segunda Imagen"];
let i = 0;

function prev() {
  i = (i - 1 + titulos.length) % titulos.length;
  titulo.textContent = titulos[i];
  contenedor.style.marginLeft = `-${400 * i}px`;
  contenedor.style.transitionDuration = ".5s";
}

function next() {
  i = (i + 1) % titulos.length;
  titulo.textContent = titulos[i];
  contenedor.style.marginLeft = `-${400 * i}px`;
  contenedor.style.transitionDuration = ".5s";
}

btnPrev?.addEventListener("click", prev);
btnNext?.addEventListener("click", next);

/*******************************
 * 3. SCROLL TRACKER + PELOTA
 *******************************/
const mainScroll = document.getElementById("main-scroll");
const valorVertical = document.getElementById("valorVertical");
const valorHorizontal = document.getElementById("valorHorizontal");
const pelota = document.querySelector(".pelota");

function verScroll() {
  const top = mainScroll.scrollTop;
  const left = mainScroll.scrollLeft;
  valorVertical.textContent = `V: ${top}`;
  valorHorizontal.textContent = `H: ${left}`;
  pelota.style.top = `${80 + top}px`; // desplazamiento con espacio
  pelota.style.left = `${80 + left}px`;
}

mainScroll?.addEventListener("scroll", verScroll);

/*******************************
 * 4. LIGHTBOX
 *******************************/
const flotante = document.querySelector('#flotante');
const cuadro = document.querySelector('#cuadro');
const equis = document.querySelector('#equis');
const sig = document.querySelector('#sig');
const ant = document.querySelector('#ant');
const imgPrincipal = document.querySelector('#imgprincipal');
const fath = document.querySelector('.miniaturas');

let imagenes = [];
let indiceActual = 0;

if (fath) {
  imagenes = Array.from(fath.getElementsByTagName("img")).map(img => img.src);

  function abrirLightBox(src) {
    flotante.style.top = '0';
    imgPrincipal.src = src;
  }

  function cerrarLightBox() {
    flotante.style.top = '-100vh';
  }

  fath.querySelectorAll("img").forEach((img, index) => {
    img.addEventListener("click", () => {
      abrirLightBox(img.src);
      indiceActual = index;
    });
  });

  sig?.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    imgPrincipal.src = imagenes[indiceActual];
  });

  ant?.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    imgPrincipal.src = imagenes[indiceActual];
  });

  equis?.addEventListener('click', cerrarLightBox);
  cuadro?.addEventListener('click', e => {
    if (e.target === cuadro) cerrarLightBox();
  });

  imgPrincipal?.addEventListener('click', cerrarLightBox);
}

/*******************************
 * 5. FORMULARIO 
 *******************************/
const formVibracion = document.getElementById("form-vibracion");
const resultadoBox = document.querySelector(".resultado-box");
const nombreInput = document.getElementById("nombre");
const auraInput = document.getElementById("aura");
const btnVolver = document.getElementById("btn-volver");

const saludoNombre = document.getElementById("usuario-nombre");
const saludoAura = document.getElementById("usuario-aura");
const saludoGenero = document.getElementById("usuario-genero");

formVibracion?.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = nombreInput.value;
  const aura = auraInput.value;
  const genero = formVibracion.querySelector('input[name="genero"]:checked')?.value;

  if (!nombre || !aura || !genero) return;

  saludoNombre.textContent = nombre;
  saludoAura.textContent = aura;
  saludoGenero.textContent = genero;

  formVibracion.parentElement.style.display = "none";
  resultadoBox.style.display = "block";
});

btnVolver?.addEventListener("click", () => {
  resultadoBox.style.display = "none";
  formVibracion.parentElement.style.display = "block";
});