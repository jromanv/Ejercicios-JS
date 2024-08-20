//While

/*let i=0;
while(i<10){
    console.log(`Número ${i}`)
    i++;
}*/

let numero = parseInt(prompt("Ingrese un número"));
while(numero){
    if (numero % 2 == 0){
    console.log(`el número ${numero} es Par`);
    }
    else{
        console.log(`el número ${numero} es Impar`);
    }
}