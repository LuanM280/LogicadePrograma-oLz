
// Ativ. 1 -> Mostre o valor da compra de um produto e o valor pago
//            pelo cliente e exiba qual é o troco

let valor_compra = 38
let valor_cliente = 50
let troco = valor_cliente - valor_compra
console.log("O troco será de R$ "+troco)

// Ativ. 2 -> Converta um valor em reais para dólar e euro
let reais = 50
let dolar = 0.19
let euro = 0.16
let reais_para_dolar = dolar*reais
let reais_para_euro = euro*reais

console.log("\nConverdendo 50 reais para dolares temos: US$ "+reais_para_dolar+"")
console.log("Converdendo 50 reais para euros temos: € "+reais_para_euro+"\n")

// Ativ. 3: transforme uma temperatura de graus Celsius para
//          graus Kelvin e para graus Farenheight
let Celsius = 20
let Kelvin = Celsius+273.25
let Farenheight = (Celsius*9/5)+32
console.log("\nConverdendo 20°C para Kelvin temos: °K "+Kelvin)
console.log("Converdendo 20°C para Farenheight temos: °F "+Farenheight+"\n")

// Ativ. 4: descubra qual é a distância da borda de um círculo 
//          até o centro
let diametro = 25
let raio = diametro/2
console.log("A distância seria o Raio do círculo, que é o Diâmetro dividido por 2, então se o diâmetro for 25 o raio seria: "+raio)

// Ativ. 5: calcule o tamanho da área de um quadrado
let lado1 = 25
let lado2 = 25
let lado3 = 25
let lado4 = 25
let area_quadrado = lado1+lado2+lado3+lado4
console.log("A área de um quadrado é a soma de todos os seus lados, então considerando que temos um quadrado equilatero com 25cm, sua área seria de: "+area_quadrado+"cm")

// Ativ. 6: calcule o tamanho da área de um retangulo
let base = 25
let altura = 50
let area_retangulo = base*altura
console.log("A área de um quadrado é a multiplicação de sua base, então considerando que temos um retangulo com altura 50cm e basa 25cm, sua área seria de: "+area_retangulo+"cm"+"\n")

// Ativ. 7: um aluno tipo na primeira prova a nota 7
//          na segunda prova a nota 9
//          Mostre a média final do aluno (o resultado tem que ser 8)

let prova1 = 8
let prova2 = 8
let soma_notas = prova1+prova2
let media_notas = soma_notas/2
console.log("A médias das suas notas são: "+media_notas)