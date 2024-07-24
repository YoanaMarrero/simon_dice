// -----------------------------------------
// Condicionales
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

function imprimirProfesiones (persona) {
  // Mediante el uso de la template string
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero == true)
    console.log('Ingeniero')
  else {
    console.log('No es Ingeniero')
  }
  if (persona.cocinero == true)
    console.log('Cocinero')
  else {
    console.log('No es Cocinero')
  }
  if (persona.cantante == true)
    console.log('Cantante')
  if (persona.dj == true)
    console.log('Dj')
  if (persona.guitarrista == true)
    console.log('Guitarrista')
  if (persona.amigurumi == true)
    console.log('Hace amigurumi')
}

// Desafio clase 10
function imprimirSiEsMayorDeEdad(persona){
  if (persona.edad > 18) {
      console.log(`${persona.nombre} es mayor de edad.`)
  } else {
      console.log(`${persona.nombre} es menor de edad.`)
  }
}
