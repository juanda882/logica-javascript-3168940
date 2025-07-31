//boolean(...)

console.log('"5" == "5"', "5" == "5")//true
console.log('"5" === "5"', "5" === "5")//true
console.log(' 5 === "5"', 5 === "5")//false
console.log('5 == 5"', 5 === "5")//true
console.log(' 5 == (3+2)', "5" === (3+2))//false
console.log('5 == 5', 5 === 5) //true

//concatenar (+)

console.log ( 5 + "3") // 53
console.log (5 + Number("3")) // 8
console.log ( 5 + "3" ) // 15
console.log ( 5 + 3 ) // 8

//pedir dos datos al usuario y sumarlo 

let num1 = Number (prompt ('dame num1') )
let num2 = Number (prompt ('dame num2') )
let resultado = num1 + num2
alert ("el resultado de tu suma es" + resultado) 











