let prompt = require("prompt-sync")()

console.log("Bem-vindo ao sistema de estoque da Lojinha MochiiYuki\n\n ---CADASTRO DE PRODUTOS---")
let nome_produto = prompt("Insira o nome do produto:")
let tamanho_produto = prompt("(P, M OU G):")
let cor_produto = prompt("Insira a cor do produto:")
console.log("\nProduto cadastrado com sucesso!\n\n -- LISTAGEM DE PRODUTO -- ")
console.log(nome_produto+", no tamanho "+tamanho_produto+" e cor "+cor_produto)
