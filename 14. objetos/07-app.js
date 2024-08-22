const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

//los objetos con const si se pueden reasignar valores
producto.disponible= false;
delete producto.precio;

console.log(producto);