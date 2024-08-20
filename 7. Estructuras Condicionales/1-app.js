//Condicionales Simples

let puntaje = prompt("Ingrese el Punteo obtenido");
if (puntaje == 1000){
    console.log("Obtuvo el punteo máximo");
}

//ejemplo 2
let edad = prompt("Ingrese su Edad");
if (edad >= 18){
    console.log("Usted es Mayor de Edad");
}

//ejemplo 3
let nota1 = parseInt(prompt("Ingrese su 1ra. Nota"));
let nota2 = parseInt(prompt("Ingrese su 2da. Nota"));
let nota3 = parseInt(prompt("Ingrese su 3ra. Nota"));
let promedio= (nota1+nota2+nota3)/3;
if (promedio >= 60){
    console.log("Alumno Aprobado");
}

