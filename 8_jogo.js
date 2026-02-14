let prompt = require("prompt-sync")()

let resposta = Math.floor(Math.random() * 1000 + 1)
let tentativas = 0
let max = 10
//console.log("A resposta é: "+resposta)

while(tentativas < max){
    let numero = parseInt(prompt("Digite um número até acertar: "))
    if(numero == resposta){
        console.log("Ae vigarista sortudo acertou!")
        break
        
    }else if(numero < resposta){
         console.log("Errrrroooooouuuuuu!")
        console.log("O número é Maior")
        tentativas++
    }else if(numero > resposta){
         console.log("Errrrroooooouuuuuu!")
        console.log("O número é Menor")
        tentativas++
    } else{
        console.log("Errrrroooooouuuuuu!")
        console.log("Perdeu tudo!")
        tentativas++
    }
    
}

console.log("--- Fim de jogo ---")
console.log("A resposta era: "+resposta)