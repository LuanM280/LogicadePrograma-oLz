//Listas / Vetor / Array

let prompt = require("prompt-sync")()

let nomes = ["Pedro", "Luan", "Luiz", "Esabele" ]

console.log("O primeiro nome é: "+ nomes[0]+ "e o ultimo é: "+ nomes[3])

nomes[3] = "Yzabeli"
nomes[2] = null // Limpar um item da lista(não remove)
console.log("O último nome agora é: "+ nomes[3]+ "e o terceiro é "+ nomes[2]) 

//Adicionar um item novo na lista
nomes.push("Leonardo")
console.log("Lista final: "+nomes)