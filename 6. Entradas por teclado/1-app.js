//Entradas por teclado

let nombre = prompt("Ingrese su nombre");
console.log(`Su nombre es: ${nombre}`);

let respuesta = confirm("¿Estás seguro de que quieres continuar?");
if (respuesta) {
    console.log("El usuario confirmó");
} else {
    console.log("El usuario canceló");
}

