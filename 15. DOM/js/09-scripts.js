//Eliminar elementos del DOM

//Elimnar elemento por si mismo
/*
const primerenlace = document.querySelector("a");
primerenlace.remove();
console.log(primerenlace);*/

//Elimiar desde el padre
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);