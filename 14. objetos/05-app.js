//Objetos dentro de otro objeto
const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 300,
    disponoble: true,
    informacion: {
        medidas :{
            peso: "1 Kg",
            medida: "1 M"
        },
        fabricacion:{
            pais: "China"
        }
    }
}

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.informacion.fabricacion.pais);