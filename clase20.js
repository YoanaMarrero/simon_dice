// ----------------------------------------------------
// Introducción a arrays : Reducir un array a un valor
// ----------------------------------------------------
// El método reduce() nos permite reducir, mediante una función que se aplica
// a cada uno de los elementos del array, todos los elementos de dicho array,
// a un valor único.

var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  altura: 1.72,
  cantidadDeLibros: 90
}
var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  altura: 1.76,
  cantidadDeLibros: 91
}
var fran = {
  nombre: 'Francisco',
  apellido: 'Javier',
  altura: 1.80,
  cantidadDeLibros: 182
}

var personas = [yoana, pilar, fran]

// var acum = 0
// for (var i = 0; i < personas.length; i++) {
//  acum = acum + personas[i].cantidadDeLibros
// }
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log (`En total todos tienen ${totalDeLibros} libros`)
