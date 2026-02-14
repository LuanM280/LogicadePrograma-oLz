let prompt = require("prompt-sync")()

let saldo = 300
let resposta = prompt(" Digite 1 para depositar ou 2 para sacar: ")

let valor = parseFloat (prompt("Digite o valor: "))

if(resposta == "1"){

    if(valor >= 1){
        saldo += valor
    }else{
        console.log("O valor minímo para depositar é de R$1,00")
    }
    
}else{
    if(valor > saldo){
        console.log("Você não tem saldo suficiente")
    } else{
        saldo -= valor
    }
}
console.log("Operação efetuado com sucesso! Novo valor R$"+saldo)