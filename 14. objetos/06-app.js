
//Objetos dentro de otri objeto
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

const {nombre,informacion:{fabricacion}} = producto;

console.log(nombre);
console.log(fabricacion);
