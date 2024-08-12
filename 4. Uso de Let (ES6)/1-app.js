//Let es un Scope de Bloque
//Var es un Scope Global

function datos (){
    if (true){
        let nombre = "José";   
    }
    console.log(nombre);
}
datos();

function datos2 (){
    if (true){
        var nombre2 = "José";   
    }
    console.log(nombre2);
}
datos2();