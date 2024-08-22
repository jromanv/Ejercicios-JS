const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

console.log(producto.nombre);

//Object destructuring
const {nombre,precio,disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);


