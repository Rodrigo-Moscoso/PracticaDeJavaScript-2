/* PRACTICA JAVASPRIT 2: CALCULADORA */
/* (1) Crea una funcion para cada una de las operaciones aritmeticas mas comunes 
utilizando las diferentes formas de sintaxis de una funcion estudiadas 
en el curso */

/* (2) Llama a estas funciones con diferentes parametros e imprime los resultados
en consola.*/

/*DECLARACIÓN DE FUNCIÓN*/

function sumar(numero1, numero2) {
  let suma = numero1 + numero2;
  return suma;
}
console.log("Con Declaración de Función: " + sumar(2, 6));

function restar(numero1, numero2) {
  let resta = numero1 - numero2;
  return resta;
}
console.log("Con Declaración de Función: " + restar(2, 6));

function multiplicar(numero1, numero2) {
  let multiplicacion = numero1 * numero2;
  return multiplicacion;
}
console.log("Con Declaración de Función: " + multiplicar(2, 6));

function dividir(numero1, numero2) {
  let division = numero1 / numero2;
  return division;
}
console.log("Con Declaración de Función: " + dividir(2, 6));

/*EXPRESIÓN DE FUNCIÓN */

let sumar2 = function (numero1, numero2) {
  return numero1 + numero2;
};
console.log("Con Expresión de Función: " + sumar2(2, 3));

let restar2 = function (numero1, numero2) {
  return numero1 - numero2;
};
console.log("Con Expresión de Función: " + restar2(2, 3));

let multiplicar2 = function (numero1, numero2) {
  return numero1 * numero2;
};
console.log("Con Expresión de Función: " + multiplicar2(2, 3));

let dividir2 = function (numero1, numero2) {
  return numero1 / numero2;
};
console.log("Con Expresión de Función: " + dividir2(2, 3));

/*FUNCION TIPO FLECHA */

let sumar3 = (numero1, numero2) => {
  return numero1 + numero2;
};
console.log("Con Expresión Tipo Flecha: " + sumar3(5, 3));

let restar3 = (numero1, numero2) => {
  return numero1 - numero2;
};
console.log("Con Expresión Tipo Flecha: " + restar3(5, 3));

let multiplicar3 = (numero1, numero2) => {
  return numero1 * numero2;
};
console.log("Con Expresión Tipo Flecha: " + multiplicar3(5, 3));

let dividir3 = (numero1, numero2) => {
  return numero1 / numero2;
};
console.log("Con Expresión Tipo Flecha: " + dividir3(5, 3));

/* (3) Crea una funcion que reciba un array con numeros y te devuelva la suma de 
todos los números.*/

function sumar(x) {
  suma = 0;
  for (let i = 0; i < x.length; i++) {
    suma += x[i];
  }
  return suma;
}
let listaNumeros = [4, 5, 6];
console.log("Suma de un Array: " + sumar(listaNumeros));
