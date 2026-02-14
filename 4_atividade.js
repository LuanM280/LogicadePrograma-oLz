// Atividade de condição
let prompt = require("prompt-sync")()

/* Atividade do Número Maior
let n1 = parseFloat (prompt("Digite um Número: "))
let n2 = parseFloat (prompt("Digite outro Número: "))

if(n1>n2){
    console.log("O maior número é: "+n1)
} else{
    console.log("O maior número é: "+n2)
}
*/

/* Atividade do número Válido
let numero = parseFloat (prompt("Digite um número MENOR do que 10: "))
if(numero < 10){
    console.log("Parabéns você digitou corretamente!")
} else{
    console.log("Oba,você digitou um número errado, tente novamente amigão!")
}
*/

/* Quiz do Cavalo Branco
console.log("Qual é a cor do cavalo branco de Napoleão?")
console.log("Branco")
console.log("Preto")
console.log("Azul")
console.log("ou Transparente")
let resposta = prompt("Digite sua resposta: ")
if(resposta == "Azul"){
    console.log("Parabéns você acertou!")
}else{
    console.log("Foi mal, você errou, tente novamente!")
}
*/

let valor = parseInt = prompt("DIgite o valor de compra: R$")
let a_vista = prompt("Você vai pagar à vista? Resposta: ")

//
let total = valor
if(a_vista == "sim"){
    total = valor - valor * 0.10
}
console.log("O valor final será: "+total)