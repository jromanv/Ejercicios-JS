const carrito=[];

const producto ={
    nombre: "Monitor de 20 pulgadas",
    precio: 800
};
const product2 ={
    nombre: "Teclado Gamer",
    precio: 200
};
const producto3 ={
    nombre: "Mouse Xtech",
    precio: 75
};
const producto4 ={
    nombre: "procesador Inter",
    precio: 954
};
const producto5 ={
    nombre: "Memoria RAM",
    precio: 451
};

carrito.push(producto);
carrito.push(product2);
carrito.push(producto3);
carrito.push(producto4);
carrito.push(producto5);

console.table(carrito);

//Eliminar último elemento de un arreglo
carrito.pop();
console.table(carrito);

//Eliminar el primer elemento de un arreglo
carrito.shift();
console.table(carrito);

//Eliminar elementos de otra posición de un arreglo
carrito.splice(1,1);
console.table(carrito);
