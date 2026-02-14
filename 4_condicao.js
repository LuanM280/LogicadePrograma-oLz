// Aula 04: Condições
let prompt = require("prompt-sync")()

console.log("Olá, bem-vindo ao DETRAN!")
let idade = parseInt (prompt("Digite sua idade: "))
if(idade>=18){
    console.log("Parábens, você já pode tirar a CNH!")
} else{
    console.log("Você ainda não tem idade pra tirar CNH...")
}
console.log("Fim do sistema")