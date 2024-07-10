let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);// se cambia la asignacion "h1" por elementos (son variables)
    elementoHTML.innerHTML = texto; // se modifica el mensaje y se pone texto (son variables)
    return;
}

function verificarIntento() { 
 let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

 if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`acertastes el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
 } else{
    //el usuario no acerto.
    if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p","el numero secreto es menor!");
    } else{
        asignarTextoElemento("p","el numero secreto es mayor!");
    }
 intentos++;
 limpiarCaja();
}
return; 
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
 
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaDeNumerosSorteados);
// si ya sorteamos todos los numeros
if (listaDeNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento("p", "ya se sortearon todos los numero posibles");
} else {
    //si el numero generado esta en la lista
if (listaDeNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
}else{
    listaDeNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
 }
   }  
 }

function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto!");
    asignarTextoElemento("p", `índica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja.
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
     //inicializar el numero de intentos
     condicionesIniciales();
    //desahabilitar el boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
