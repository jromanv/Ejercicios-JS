//Scope de variables es el alcance que tiene una variable, globales y locales

//Declaración Global
let nombre = "José Román";


///Declaracion local

function datos(){
    let edad = 20; //Variable Local
    console.log(`Mi Nombre es: ${nombre}`);
    console.log(`Mi Edad es: ${edad}`);
}
datos();
console.log(`Mi Nombre es: ${nombre}`);
console.log(`Mi Edad es: ${edad}`); // Error porque es local