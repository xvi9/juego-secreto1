function calcularIMC(altura, peso) {
var IMC = peso / (altura * altura);
return IMC;
}


function calcularFactorial(numero) {
 if (numero === 0 || numero === 1 ) {
    return 1;
 }else{
    return numero * calcularFactorial(numero - 1);
 }
}
//ejemplo de uso
//let numero = 5;
let resultado = calcularFactorial (numero);
console.log(`el factorial de ${numero} es ${resultado}`);


function convertirDolarAReales(dolares){
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar
    return reales;
}
//ejemplos de uso
let valorDolar = 50;
let valorReales = convertirDolarAReales(valorDolar);
console.log(` ${valorDolar} dolares en R$ ${valorReales}`);


function calcularAreaYPerimetroRectangular(area){
var area = altura * anchura;
var perimetro = 2* (altura * anchura);
console.log("area:" + area);
console.log("perimetro:" + perimetro);
}
//ejemplo de uso
let altura = 7; //en metros
let anchura = 10; //en metros
calcularAreaYPerimetroRectangular(altura, anchura);


function calcularAreaYPerimetroCircular(radio){
let pi = 3.14;
let area = radio * radio;
let perimetro = 2 * pi * radio;
console.log("area: " + area);
console.log("perimetro: " + perimetro);
}
//ejemplo de uso
let radio = 4;//en metros
calcularAreaYPerimetroCircular(radio);

function mostrarTablaDeMultiplicar(numero) {
for (var i = 1; i <= 10; + i++) {
   var resultado = numero * 1;
   console.log(numero + "x" + i + " = " + resultado)
}
}
//ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);