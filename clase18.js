// -----------------------------------------
// Introducción a arrays : Filtrar un array
// -----------------------------------------
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  altura: 1.72
}
var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  altura: 1.76
}
var fran = {
  nombre: 'Francisco',
  apellido: 'Javier',
  altura: 1.80
}
var gabriel = {
  nombre: 'Gabriel',
  apellido: 'José',
  altura: 1.82
}
var ana = {
  nombre: 'Ana',
  apellido: 'María',
  altura: 1.66
}
var jose = {
  nombre: 'Jose',
  apellido: 'Antonio',
  altura: 1.70
}

const esAlta = ({altura}) => altura >= 1.8
var personas = [yoana, pilar, fran, gabriel, ana, jose]
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

// Reto clase 18
const esBaja = persona => !esAlta(persona)
var personasBajas = personas.filter(esBaja)
console.log(personasBajas)

// Otra forma equivalente
var personasAltas_v2 = personas.filter(function ({altura}) {
  return altura >= 1.8
})
console.log(personasAltas_v2)
