const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible : true
}

const medidas ={
    peso: "1 kg",
    altura: "1 m"
}

console.log(producto);
console.log(medidas);


//Unir objetos
const resultado = Object.assign(producto,medidas);

//Spread o rest
const resultado2 = { ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);

