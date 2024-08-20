//Condicionales Compuestos

/*let puntaje = prompt("Ingrese el Punteo obtenido");
if (puntaje == 1000){
    console.log("Obtuvo el punteo máximo");
}
else{
    console.log(`Su punteo es de ${puntaje} y es menor al máximo`);
}

//ejemplo 2
let edad = prompt("Ingrese su Edad");
if (edad >= 18){
    console.log("Usted es Mayor de Edad");
}
else{
    console.log("Usted es Meno de Edad");
}*/

//ejemplo 3
let nota1 = parseInt(prompt("Ingrese su 1ra. Nota"));
let nota2 = parseInt(prompt("Ingrese su 2da. Nota"));
let nota3 = parseInt(prompt("Ingrese su 3ra. Nota"));
let promedio;
promedio=(nota1 + nota2 + nota3)/3;
if (promedio>=0 && promedio<60){
    console.log("Alumno Reprobado");
}
else if(promedio>=60 && promedio<70){
    console.log("Alumno Nivelado");
}
else if(promedio>= 70 && promedio<=100){
    console.log("Alumno Aprobado");
}
else{
    console.log("No es una nota válida");
}

