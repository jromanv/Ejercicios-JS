//Estructuras Anidadas
/*
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
    if (promedio==100){
        console.log(`Tiene la Nota de ${promedio} puntos`)
    }
}
else{
    console.log("No es una nota válida");
}*/

let usuario = prompt("Ingrese su Usuario");
if (usuario=="José"){
    let contraseña = prompt("Ingrese su Contraseña"); 
    if (contraseña==2024){
        console.log(`${usuario} Bienvenido al Sistema`);
    }
    else{
        console.log(`Error Contraseña Inválida`);
    }    
}
else{
    console.log(`Error Usuario Inválido`);
}