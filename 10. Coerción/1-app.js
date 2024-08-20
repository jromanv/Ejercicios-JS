//Coerción: es el proceso automático o implícito de convertir un valor de un tipo de dato a otro.

/*1. Coerción Implícita
Este tipo de coerción ocurre automáticamente cuando JavaScript necesita convertir tipos
de datos para realizar una operación.*/
const dato = "5" + 3;
console.log(dato); //Salida 53 porque se concatena

const dato2 = "5" - 3;
console.log(dato2); //Salida 2 porque se realiza la operación

/*2. Coerción Explícita
Este tipo de coerción ocurre cuando el programador convierte explícitamente un valor de un
tipo de dato a otro usando funciones o operadores específicos.*/ 

let cadena = "123";
let numero = Number(cadena);
console.log(numero); // Salida: 123
console.log(typeof numero); // Salida: "number"

let numero2 = 456;
let cadena2 = String(numero2);
console.log(cadena2); // Salida: "456"
console.log(typeof cadena2); // Salida: "string"