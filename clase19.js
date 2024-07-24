// --------------------------------------------
// Introducción a arrays : Transformar arrays
// --------------------------------------------
// El método map() itera sobre los elementos de un array en el orden de
// inserción y devuelve array nuevo con los elementos modificados.

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

const pasarAlturaACms = persona => {
  // creamos un nuevo objeto para no sobreescribir el objeto original
  return {
    ...persona,
    altura: persona.altura * 100
  }
}
var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms)

// Otra forma de hacerlo
const pasarAlturaACms_v2 = persona => ({
  ...persona,
  altura: persona.altura * 100
})
var personasCms_v2= personas.map(pasarAlturaACms_v2)
console.log(personasCms_v2)
