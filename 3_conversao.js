let prompt = require("prompt-sync")()

let n1 = prompt("Digite uma número: ")//Guardar texto normal
n1 = parseInt(n1)//transformar o texto em número por etapas

//Receber o texto e somar com paraInt
let n2 = prompt("Digite outro número: ")
n2 = parseInt(n2)
let conta = n1+n2
console.log(" A conta é: "+conta)