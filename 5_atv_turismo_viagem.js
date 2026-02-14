let prompt = require("prompt-sync")()

console.log("Olá seja bem-vindo a companhia Yuki Dream! Vamos inciar seu Cadastro!")
let p_nome = prompt("Digite seu primeiro nome ")
let s_nome = prompt("Digite seu sobre nome ")
console.log("Olá, Sr(a). "+p_nome+" "+s_nome+" vamos continuar seu cadastro...")
let endereco = prompt("endereço: ")
let bairro = prompt("Bairro: ")
let cidade = prompt("Cidade: ")
let estado = prompt("Estado: ")
console.log("O Sr(a) "+s_nome+" mora na cidade de "+cidade+"-"+estado+", no esdereço "+endereco+", localizado no bairro "+bairro)
let viagens_passadas = parseInt (prompt("\nQuantas viagens você fez no anos passado? R: "))
let viagens_agr = parseInt (prompt("Quantas viagens planeja fazer esse ano? R: "))
let soma_viagens = viagens_agr+viagens_passadas
let viagens_faltam = 10 - soma_viagens
let media_viagens = soma_viagens/2
let intervalo_viagens_agr = 12/viagens_agr
console.log("\nVocê já vez um total de "+soma_viagens+" viagens")
if(soma_viagens < 10){
    console.log("Faltam "+viagens_faltam+" para completar 10 viagens ao todo")
}
console.log("Sua média de viagens é de "+media_viagens)
console.log("O intervalo de meses para as viagens deste ano é de "+intervalo_viagens_agr)
console.log("Obrigado "+p_nome+" "+s_nome+", o seu cadastro foi realixado com sucesso!")

let cupom = prompt("\nDigite seu cupom de desconto: ")
if(cupom == "Conradito10"){
    console.log("Parabéns, você recebeu 10% de desconto na sua próxima viagem!")
} else{
    console.log("Este cupom não existe")
   let promocoes = prompt(console.log("Você gostaria de receber promoções no seu e-mail?"))
    if(promocoes == "SIM"){
        console.log("Obrigado "+p_nome+", por se registrar, você receberá e-mails em breve")
    }else{
        console.log("Ok, você não receberá e-mails de promoções")
    }
}
console.log("Obrigado, e volte sempre!")


