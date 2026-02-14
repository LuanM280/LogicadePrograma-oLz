let prompt = require("prompt-sync")()

let usuari_padrao = "Lua"
let senha_padrao = "123"

let resposta = prompt("Digite um para cadastrar ou 2 para logar")
if(resposta == 1){
    usuari_padrao = prompt("Crie o usuário: ")
    senha_padrao = prompt("Crie uma senha: ") 
    console.log("Cadastro reslizado com sucesso\n---------------\n")
}


let usuario = prompt("Digite o usuário: ")
let senha = prompt("Digite a senha: ")

if(usuario == usuari_padrao && senha == senha_padrao){
    console.log("✅Usuário autenticado com sucesso!")
} else{
    console.log("❌Usuário ou senha incorretos...")
}