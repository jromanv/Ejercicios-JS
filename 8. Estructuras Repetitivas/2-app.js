//Do While

/*
let i= 0;
do{
    console.log(i)
    i++;
}while(i<10);*/

let numero = parseInt(prompt("Ingrese un número"));
do{
    if (numero % 2 == 0){
    console.log(`el número ${numero} es Par`);
    }
    else{
        console.log(`el número ${numero} es Impar`);
    }
}while(numero);