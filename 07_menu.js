let prompt = require("prompt-sync")()

let resposta = 7
let r2 = Math.floor(Math.random() * 10);
let tentativas = 0
let numero = 0

/*
while(true){
    let numero = parseInt (prompt("Digite um número: "))
    if(numero == resposta){
        console.log("Acerto mizeravi vigarista!")
        break
    } else{
        console.log("Você errou...")
    }
}
*/

while(numero != r2){
    let numero = parseInt (prompt("Digite um número: "))
  if(numero == r2){
    console.log("Aceryo mizeravii vigarista!")
    break
    } else{
        console.log("Você errou...")
        tentativas++
  }
  if(tentativas >= 10){
    console.log("Você errou, acabaram as tentativas...(T-T)")
    break
}

}

