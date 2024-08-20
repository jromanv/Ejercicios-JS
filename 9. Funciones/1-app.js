//Declaración de Función

/*Define una función con un nombre y puede ser llamada en cualquier parte del código,
incluso antes de su definición, gracias al hoisting. El hoisting en JavaScript
eleva las declaraciones de funciones al principio del ámbito.*/
function sumar(){
    console.log(2+2);
}
sumar();

//Expresión de la función
const sumar2 = function(){
    console.log(3+3);
}
sumar2();