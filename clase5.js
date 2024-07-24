// ---------------------------
// Alcance de las funciones
// ---------------------------

// Variable de alcance global
var nombre = 'Yoana', nombre2 = 'Pilar'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas()
  // resultado la variable nombre = 'YOANA'

// Un ejemplo mejor sería
function imprimirNombreEnMayusculas2(nombre) {
    // nombre variable local != nombre variable global
    // para utilizar la variable global deberíamos utilizar window.nombre
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas2(nombre2)
  // resultado: nombre2 = 'Pilar'
