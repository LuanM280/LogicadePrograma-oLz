// Aula 04: Atividade de Revisão

// 1 = ALUGUEL DE CARROS

let prompt = require("prompt-sync")()
// Todo prompt recebido vem como texto > PRESISA CONVERTER EM NÚMERO
let dias_alugados = parseInt (prompt("Quauantos dia você aluguol o caro?: "))
let km_rodados = parseFloat (prompt("Quantos Kms foram rodados com o carro?:  "))
let total_aluguel = dias_alugados*60.50
console.log("Total a ser pago por dias com o carro R$"+total_aluguel)
let total_kms = km_rodados*0.15
console.log("Total a ser pago por Km rodado R$"+total_kms)

let total_pagar = total_aluguel+total_kms
console.log("\nvocê devera pagar um total de R$"+total_pagar)


// ATIVIDADE DO ANTECESSOR E SUCESSOR

let n1 = parseInt (prompt("\nDigite um Número: "))
let sucessor = n1+1
let antecessor = n1-1
console.log("O sucessor do número escolhido é: "+sucessor)
console.log("O antecessor do número escolhido é: "+antecessor)


// ATIVIDADE DO REAJUSTE SALARIAL
let salario = parseFloat (prompt("\nDigite seu Salario: R$"))
let reajuste = salario/100*15
let reajustado = salario+reajuste
console.log("Seu salário reajustado é de: R$"+reajustado)