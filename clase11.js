// -----------------------------------------
// Funciones que retornan valores
// -----------------------------------------
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  amigurumi: true
}
var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  edad: 17
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}
function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} es mayor de edad.`)
  } else {
      console.log(`${persona.nombre} es menor de edad.`)
  }
}
