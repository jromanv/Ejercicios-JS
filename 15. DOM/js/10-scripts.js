//Crear un nuevo enlace

const enlace = document.createElement("A");

enlace.textContent = "Nuevo Enlace";
enlace.href = "/nuevo-enlace";

console.log(enlace);

//seleccionar navegacion
const nav = document.querySelector(".navegacion");
//nav.appendChild(enlace);
