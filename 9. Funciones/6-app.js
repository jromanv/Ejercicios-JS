let total=0;
function agregarCarrito(precio){
    return total +=precio
}
function calcularImpuesto(total){
    return total *1.5
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(50);

console.log(total)
totalapagar = calcularImpuesto(total);
console.log(`El Total a Pagar es ${totalapagar}`)