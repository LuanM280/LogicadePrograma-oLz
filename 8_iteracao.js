let prompt = require("prompt-sync")()

let contador = 0

while(contador < 500 + 1){
   // console.log("O contador é: "+contador)
   if(contador == 10){
    console.log("aee bateu a meta, chegou no 10!")
   }
   if(contador > 50 && contador < 60){
    console.log("Cheguei no número "+contador)
   }
   if (contador == 100){
    console.log("aee bateu a meta, chegou no 100!")
   }
    contador++ // iteração
}