const producto ='Monitor de 20 pulgadas';
console.log(producto);

//Método para reemplazar los strings
console.log(producto.replace('Monitor','Monitor Curvo'));

//Método para cortar
console.log(producto.slice(10,20));
console.log(producto.slice(5));
console.log(producto.slice(5,2));//no es válido

//Método alternativa a slice
console.log(producto.substring(5,15));
console.log(producto.substring(5,2));//lo invierte lo modifica

const usuario ="José";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0,1));

