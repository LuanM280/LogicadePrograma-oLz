let prompt = require("prompt-sync")()

let time1 = parseInt (prompt("Digite os gols do time 1: "))
let time2 = parseInt (prompt("Digite os gols do time 2: "))

if(time1 > time2){
    console.log("O time 1 venceu!")
} else if(time2 > time1){
    
}