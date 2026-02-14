let prompt = require("prompt-sync")()

/* ATV 1
let peso_max = 50
let peso_peixes = parseFloat (prompt("O peso dos peixes é de: "))
let excesso_peixes = peso_peixes - peso_max
let multa = excesso_peixes * 4.25
if(peso_max < peso_peixes){
    console.log("O peso dos peixes excedeu "+excesso_peixes+" do peso limite")
    console.log("A multa será de "+multa)
} else{
    console.log("O peso dos peixes está dentro do limite, muito obrigado por pesar")
}
*/

/* ATV 2
let salario = parseFloat(prompt("Diga seu salário: "))
let reajuste_15 = salario * 0.15
let reajuste_10 = salario * 0.10
let reajuste_5 = salario * 0.05
if(salario < 1500){
    console.log("Seu salário está dentro do limite de R$1500, seu reajuste será de 15%")
    console.log("Seu salário será de R$"+(reajuste_15+salario))
} else if(salario < 2350){
    console.log("Seu é maior que R$1500, seu reajuste será de 10%")
    console.log("Seu salário será de R$"+(reajuste_10+salario))
}else{
    console.log("Seu salário é maior que R$2350, seu reajuste será de 5%")
    console.log(" Seu salário será de R$"+(reajuste_5+salario))
}
*/

/* ATV 3

let time1 = parseInt(prompt("Digite os gols do time 1: "))
let time2 = parseInt(prompt("Digite os gols do time 2: "))
if(time1 > time2){
    console.log("O time 1 venceu!")
} else if(time2 > time1){
    console.log("O time 2 venceu!")
} else{
    console.log("EMPATE")
}
*/

/* ATV 4

let produto = prompt("Escolha o produto: ")
let produto_preco = parseFloat(prompt("Preço do produto: "))
let dinheiro_pix = produto_preco - (produto_preco * 0.15)
let cartao_cretido = produto_preco - (produto_preco * 0.10)
let parcelado_2 = produto_preco
let juros = produto * 0.10
let parcelado_3_mais = produto_preco + juros

let forma_pagamento = prompt("Escolha a forma de pagamento, pix,dinheiro,crédito, parcelodo 2 vezes ou percelado 3 vezes ou mais: ")
if (forma_pagamento == "pix" || forma_pagamento == "dinheiro") {
    console.log("Seu produto custara R$" + dinheiro_pix)

}

if (forma_pagamento == "2") {
    console.log("Seu produto custara R$" + parcelado_2)
}

if (forma_pagamento == "credito") {
    console.log("Seu produto custara R$" + cartao_cretido)
}
if (forma_pagamento == "3") {
    console.log("Seu produto custara R$" + parcelado_3_mais)
}
*/

let telefone = prompt("Telefonou para a vítima? R: ")
let local = prompt("Esteve no local do crime? R:")
let mora = prompt("Mora perto da vítima? R:")
let devia = prompt("Devia para a vítima? R:")
let trabalho = prompt("Já trabalhou com a vítima? R:")
if(telefone == "sim" && local == "não" && mora == "não" && devia == "não" && trabalho == "não"){
    console.log("Você e considerando Suspeito!")
    if(telefone == "sim" && local == "sim" && mora == "não" && devia == "não" && trabalho == "não"){
        console.log("Você e considerando Cúmplice!")
    }else if
}else if(telefone == "sim" && local == "sim" && mora == "não" && devia == "não" && trabalho == "não"){
    
}