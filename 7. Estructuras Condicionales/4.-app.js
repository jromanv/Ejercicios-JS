//Estructura Switch
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese otro número"));
let resultado;
let opcion = parseInt(prompt("Ingrese un número entre 1 y 4"));
switch (opcion){
    case 1: 
        resultado=numero1+numero2;
        console.log(`La Suma de ${numero1} y ${numero2} es: ${resultado}`)
        break;
    case 2: 
        resultado=numero1-numero2;
        console.log(`La Resta de ${numero1} y ${numero2} es: ${resultado}`)
        break;
    case 3: 
        resultado=numero1*numero2;
        console.log(`La Multi9plicación de ${numero1} y ${numero2} es: ${resultado}`)
        break;
    case 4: 
        resultado=numero1/numero2;
        console.log(`La División de ${numero1} y ${numero2} es: ${resultado}`)
        break;
    default:
        console.log("No es una opción válida");
        break;    
}