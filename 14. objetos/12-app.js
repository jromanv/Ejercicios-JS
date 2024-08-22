// Object Literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

// Object Constructor
function producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}