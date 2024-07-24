// ---------------------------
// Desestructurar Objetos
// ---------------------------
// Declaracion de un objeto
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 28
}

var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre  forma 'normal' de asignar el valor
    var { nombre } = persona
    console.log(nombre)
}

imprimirNombreEnMayusculas(yoana)

// Reto: imprimir nombre y edad
function imprimirNombreYEdad(persona) {
  var { nombre } = persona
  var { edad } = persona

  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}
imprimirNombreYEdad(yoana)
imprimirNombreYEdad(pilar)
