const carrito=[];

//Definir un producto con un objeto
const producto={
    nombre: "Monitor de 20 pulgadas",
    marca: "HP",
    precio: 500
};
const producto2={
    nombre: "Teclado Gamer",
    marca: "Razer",
    precio: 250
};

//Forma imperativa

carrito.push(producto);
carrito.push(producto2);

console.table(carrito);
