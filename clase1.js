// ---------------------------
// variables
// ---------------------------

//Declarar una Variables
var nombre

// Asignar valor a una Variable
nombre = 'Usuario'


// ¿sabías que el ; es opcional, es meramente convencional?
// Existen casos muy puntuales en los que si es necesario utilizar el ;

console.log('Hola ' + nombre)


// Declarar y asignar en una sola línea
var nombre2 = 'Usuario2'
var apellido2 = 'Apellido'
console.log('Hola ' + nombre2 + ' ' + apellido2)

// Declarar/asignar diferentes variables en una sola línea
var nombre3 = 'Usuario3', apellido3 = 'Apellido3'
console.log('Hola ' + nombre3 + ' ' + apellido3)

//JS es un lenguaje debilmente tipado, esto quiere decir que no existe
// nada que diga que una variable es de tipo texto y por lo tanto
// solo puede recibir texto.
var edad = 30;
console.log('Tengo ' +edad + ' años')

edad = '30 años';
console.log('Tengo ' +edad)
