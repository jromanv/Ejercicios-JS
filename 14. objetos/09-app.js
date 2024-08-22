//Habilitar método estricto
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

//No se puede eliminar ni agregar un obejeto pero si modificar
Object.seal(producto);

producto.disponible = false;
console.log(producto);

//saber si un objeto está sellado

console.log(Object.isSealed(producto));