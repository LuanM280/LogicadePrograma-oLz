let prompt = require("prompt-sync")()

let lista_nomes = []
let max_lista = 0

while(true){
    let nome = prompt("Digite seu nome: ")
    let idade = parseInt(prompt("Digite sua idade: "))
    if(idade >= 18){
        lista_nomes.push(nome)
        console.log("Você é maior de idade seu nome foi adicinado na lista")
        console.log("A lista atualizada é :"+lista_nomes)
        max_lista++
    }else{
        console.log("Você não é de maior ainda, seu nome não pode ser adicionado a lista")
        console.log("A lista atualizada é: "+lista_nomes)
    }
    if(max_lista == 6 ){
        console.log("Número máximo de possoas adingida")
        break
    }
}

