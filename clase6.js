// ---------------------------
// Objetos
// ---------------------------
// Declaracion de un objeto
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 38
}

var pilar = {
  nombre: 'Pilar',
  apellido: 'Rodríguez',
  edad: 37
}

function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas(yoana)

// Otra forma: 
function imprimirNombreEnMayusculas2({ nombre }) {
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas2(pilar)
imprimirNombreEnMayusculas2({nombre : 'Pepito'})
