//Selecciona elementos por su clase

let header = document.getElementsByClassName("header");
console.log(header);

const hero = document.getElementsByClassName("hero");
console.log(hero);

//si las clases existen mas de una vez
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);


//Si una clase no existe
const noExiste = document.getElementsByClassName("nohay");
console.log(noExiste);
