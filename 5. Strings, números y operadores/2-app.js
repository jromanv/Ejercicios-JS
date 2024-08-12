const producto ="Monitor de 20 pulgadas ";
const precio ="30 Quetzales ";

//Concatenación
console.log(producto.concat(precio));
console.log(producto.concat("en descuento"))

//Otra opción de concatenar
console.log(producto + "Con un precio de "+ precio)
console.log("El producto "+producto+"Tiene un precio de"+precio)
console.log("El producto ",producto,"Tiene un precio de",precio)

//Template strings acento backtick
console.log(`Èl Prodcuto ${producto} tiene un precio de ${precio}`)