let prompt = require("prompt-sync")()

console.log("--- Cadastro de Produtos ---")
let nome = prompt("Digite o nome do produto: ")
let quantidade = parseInt(prompt("Digite a quantidade: "))
let preco = prompt("Digite o preço : R$ ")
preco = parseFloat(preco)

let venda_total = quantidade*preco
console.log("\nO total des vendas será: "+venda_total)

let desconto = prompt("\nInforme o desconto à vista: %")
desconto = parseFloat(desconto)

let total_desconto = venda_total - desconto/100*venda_total
console.log("\nO seu desconto total é de: %"+total_desconto)