//Modificar Textos e imágenes

const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

/*
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);//Se trae el html*/

document.querySelector(".contenido-hero h1").textContent="Nuevo encabezado";

const imagen = document.querySelector(".card img");
console.log(imagen);