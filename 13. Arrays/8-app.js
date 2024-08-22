const carrito = [
    {nombre:"Monitor",precio:800},
    {nombre:"Teclado",precio:250},
    {nombre:"Mouse",precio:80},
    {nombre:"CPU",precio:1200},
    {nombre:"RAM",precio:300},
    {nombre:"SSD",precio:250},
];

//Array mhetod Foreach

carrito.forEach(function(producto){
    console.log(`${producto.nombre} ${producto.precio}`)
});