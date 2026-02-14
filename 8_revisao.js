// Revisão de Loops
let prompt = require("prompt-sync")()
let veiculo = false

while(true){
    console.log("\nBem-vindo ao Yukis's Park!\n")
    let resposta = prompt("Digite 1 pra estacionar, 2 pra retirar ou 3 pra sair: ")
    if(resposta == "1"){
        //estacionar
        veiculo = true
        console.log("🚘Veículo estaconado com sucesso!")
    }else if(resposta == "2"){
        // Retirar
        if(veiculo == true){
            veiculo = false
            console.log("✅Veículo retirado no estavionamento")
        }else{
            console.log("❌Não há veículos estacionados neste momento...")
        }
    } else if(resposta == 3){
        //Sair
       console.log("---- VOCÊ SAIU TO SISTEMA----")
       break
    }else{
        //errou o comando
        console.log("Resposta inválida...")
    
    }
}

