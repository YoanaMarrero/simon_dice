// -----------------------------------------
// Arrow functions
// -----------------------------------------
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 28
}
var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  edad: 17
}

const MAYORIA_DE_EDAD = 18

// Funcion anónima
var esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad_v2 = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

// Arrow functions
const esMayorDeEdad_v3 = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad_v4 = persona => {
  return persona.edad >= MAYORIA_DE_EDAD
}

const esMayorDeEdad_v5 = persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad_v6 = ({edad}) => edad >= MAYORIA_DE_EDAD

// nota: practicamente una función anonima es similar a un arrow function
//.-

function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad_v6(persona)) {
      console.log(`${persona.nombre} es mayor de edad.`)
  } else {
      console.log(`${persona.nombre} es menor de edad.`)
  }
}

function permitirAcceso(persona){
  if (!esMayorDeEdad_v6(persona)) {
    console.log('ACCESO DENEGADO')
  }
}

// Reto clase 12
const esMenorDeEdad = persona => !esMayorDeEdad_v6(persona)
