
let prompt = require("prompt-sync")()
/*

1 - Peça para o usuário digitar uma senha e em seguida repetir a mesma senha.
Mostre uma mensagem informando se as senhas são iguais ou não.

2 - Pergunte um número para o usuário e, em seguida, mostre se o número digitado
é positivo ou negativo

3 - Peça para o usuário digitar duas notas de um aluno e faça uma média, mostrando se
está aprovado ou reprovado, sendo a média 7 para aprovação.

4 - Faça um programa para postos de combustível. Pergunte a quantidade de litros desejado
e o tipo de combustível do carro, sendo as opções:
A (Álcool, custando R$ 4,29)
G (Gasolita, custando R$ 5,90)
Mostre a mensagem: "Para abastecer X Litros de Y fica no total de R$ Z"
sendo X a quantidade de litros, Y o nome do combustível e Z o total da conta

5 - As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se 
forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs 
compradas, calcule e escreva o custo total da compra

6 - Escreva um programa que leia a velocidade de um carro.
Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.
A multa vai custar R$7,00 por cada Km acima do limite.

7 - Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa. 
Pergunte o valor da casa, o salário do comprador e em quantos anos ele vai pagar.
A prestação mensal não pode exceder 30% do salário ou então o empréstimo será negado.

*/

/* Exercício 1
let prompt = require("prompt-sync")()

let senha = prompt("Digite uma senha: ")
let s_repetida = prompt("Comfirme a senha: ")
if(senha != s_repetida){
    console.log("As senhas não são iguais, Por favor verifique novamente")
} else{
    console.log("As senha são iguais, confirmação aprovada")
}
*/

/* Exercício 2
let n = parseFloat (prompt("Digite um número: "))
if(n >= 0){
    console.log("O número escolhido é Positivo")
}else{
    console.log("O número escolhido é Negativo")
}
*/

/* Exercício 3
let nota1 = parseInt (prompt("Digite a primeira Nota: "))
let nota2 = parseInt (prompt("Digite a segunda Nota: "))
let soma_notas = nota1+nota2
let media = soma_notas/2
if(media >= 7){
    console.log("A média das suas notas é: "+media+" você está aprovado!")
}else{
    console.log("A média das suas notas é: "+media+" você não foi aprovado")
}
*/

/* Exercicio 4
let A = 4.29
let G = 5.90
let litros = parseFloat (prompt("Quantos litros de combustível: "))
let combustível = prompt("Escolha entre A ou G: ")
let Z_A_total = litros*A
let Z_G_total = litros*G
if(combustível == "A"){
    console.log("O total a ser pago sera: R$"+Z_A_total)
}else{
    if(combustível == "G"){
        console.log("O total a ser pago sera: R$"+Z_G_total)
    }

}
*/

/* Exercício 5
let n_macas = parseInt (prompt("Escolha o número de maçãs: "))
if(n_macas >= 12 ){
    console.log("O custo total de maçãs sera de: R$"+n_macas*1.00)
} else{
    console.log("O total de maçãs sera de: R$"+n_macas*1.30)
} 
*/

/* Exercício 6
let km_h = parseFloat(prompt("digite a leitura de Kms/h de um carro: "))
let multa = km_h-80
if(km_h >= 80){
    console.log("Você recebera uma multa por ultapassar a felocidade máxima permitida! Sua multa sera de: R$"+multa*7)
}else{
    console.log("Velocidade permitida")
}
*/

/* Exercício 7
let casa_valor = parseFloat (prompt("Digite o valor da casa: R$"))
let salario = parseFloat (prompt("Digite seu salário: R$"))
let anos = parseInt (prompt("Digite quantos anos você tem: "))
let prest_x = casa_valor/anos 
let prest_y = prest_x*0.3
if(salario <= prest_y){
    console.log("Seu salário é menos que a prestação mensal, você não pode fazer o empréstimo")
}else{
    console.log("Parabéns pelo Empréstimo!")
}
*/

