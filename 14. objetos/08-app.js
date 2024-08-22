//Habilitar método estricto
"use strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

//Object mhetods
//Evitar que se modofique un objeto
Object.freeze(producto);

producto.disponible = false;
producto.imagen = "imagen.jpg";
console.log(producto);

//Verificar si un objeto está congelado
console.log(Object.isFrozen(producto));