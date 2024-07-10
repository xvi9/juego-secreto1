function mostrarHola () {
    console.log("hola mundo!");
}


function mostrarHolaNombre(nombre) {
   console.log(`hola, ${nombre}!`);
}
mostrarHolaNombre("Xavi");


function calcularDoble(numero) {
    return numero * 2;
}
let resultadoDoble = calcularDoble(7);
console.log(resultadoDoble);


function calcularPromedio(a, b, c) {
return (a + b + c) /3;

}
let pronedio = calcularPromedio(5, 7, 10);
console.log(pronedio);


function encontraMayor(a, b) {
    return a > b ? a : b;
}
let numeroMayor = encontraMayor(20, 15);
    console.log(numeroMayor);


function cuadro(numero) {
    return numero * numero;
}
let resultado = cuadro(2);
console.log(resultado);