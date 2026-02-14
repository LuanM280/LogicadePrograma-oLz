let prompt = require("prompt-sync")()

// Aula 1: Mensagem
console.log("\nÓla, mundo vigarista!!!")
console.log("\nComeçando a reisão\n")

//Aula 2: Variáveis
let nome = "Mochi"
let salarios = 5000
let parcelas = 12
let valor_por_parcela = salarios*parcelas

console.log("O senhora "+nome+" vai receper "+ valor_por_parcela)

//Aula 4: consição
if(salarios > 5000){
    console.log("Sim é maior tá recebendo muito bem!")
}else{
    console.log("Não está rebendo tudo isso...")
}

//AULA 5:COnsição dentro de outra condição (IF aninhado)
if(parcelas= 2){
    salarios = salarios * 0.05
}else{
    if (parcelas <= 10){
        salarios-=salarios * 0.1
    }else{
        salarios = salarios * 0.85
    }
}
  
//Aula 6: Consições com ELSE IF
if(salarios < 1200){
    salarios += 100
}else if(salarios < 2500){
    salarios += 235
}else if(salarios < 5000){
    salarios += 300
}else{
    console.log("Você não recebe bonificação...")
}

//Aula 7: Laçõs de repetição WHile
let i = 0
while(i < 101){
    console.log(i)

    if(i >= 50){
        i++
    }
    i++
}

//Aula 8: Listas
let lista_compras = ["Arroz", "Feijão", "Batata"]
lista_compras.push("Macarrão")
lista_compras.push("Laranja")
console.log("O segundo item é: "+lista_compras[1])
lista_compras[3] = Macarroon