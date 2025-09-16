const formulario = document.querySelector(".form")
const loginContainer = document.querySelector(".login")
const inputNombre = document.querySelector(".inputNombre")
const listaColores = document.querySelector("#color")
const userPage = document.querySelector(".userPage")
const imgEquipo = document.querySelector(".img-equipo")
const textSaludo = document.querySelector(".text-saludo")
const textEquipo = document.querySelector(".text-equipo")
const btnVolver = document.querySelector(".btn-volver")

const enviarData = (e) => {
  const equipo = document.querySelector('input[name="equipo"]:checked')

  e.preventDefault() 
  const userInfo = {
    nombre: inputNombre.value,
    color: listaColores.value,
    equipo: equipo.value
  }
  console.log(userInfo)
  document.body.style.background = userInfo.color
  userPage.style.display = "block"
  loginContainer.style.display = "none"
  //
  //

  btnVolver.addEventListener("click", () => {
  userPage.style.display = "none"
  loginContainer.style.display = "block"
  document.body.style.background = "#d81010ff"
})
}

formulario.addEventListener("submit",enviarData)