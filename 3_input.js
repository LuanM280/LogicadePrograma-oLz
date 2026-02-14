//Input para entrade de dados

let prompt = require("prompt-sync")()

console.log("Olá, bom dia")
let nome = prompt("Digite o seu nome aqui: ")
let sobrenome = prompt("Digite o seu sobrenome: ")
let nome_completo = nome+" "+sobrenome

console.log("Seji bem-vindo(a) "+nome_completo)
