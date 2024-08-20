//Mandar a llamr a varias Funciones
iniciarApp();
function iniciarApp(){
    console.log("Iniciando App..");    
    segundafuncion();
}

function segundafuncion(){
    console.log("Desde segunda función");
    usuarioAutenticado("José");
}

function usuarioAutenticado(usuario){
    console.log("Autenticando Usuario ... espere...");
    console.log(`Usuario Autenticado Exitosamente ${usuario}`);
}

