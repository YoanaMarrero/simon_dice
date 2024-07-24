// -----------------------------------------
// Introducción a arrays
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

var personas = [yoana, pilar, fran, gabriel, ana, jose]
  // personas[0].altura es lo mismo que personas[0]['altura']

for (var i = 0; i < personas.length; i++) {
  console.log(`${personas[i].nombre} mide ${personas[i].altura}mts`)
}
