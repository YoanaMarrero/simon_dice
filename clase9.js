// -----------------------------------------
// Comparaciones en javascript
// -----------------------------------------
var x = 4, y = '4'

console.log(x == y)
  // retorna true porque x lo convierte a string
console.log(x === y)
  // retorna false porque son distintos tipos

// -----------------------------------------
// A continuación vamos a comporar objetos
// -----------------------------------------
var yoana = {
  nombre: 'Yoana'
}

var otraPersona = {
  nombre: 'Yoana'
}

console.log(yoana == otraPersona)
console.log(yoana === otraPersona)
  // retorna false en ambos casos, porque al comparar objetos JS
  // pregunta a la referencia por la variable que estamos
  // utilizando.

// ------------------------------------------------------------------
// ¿Cómo hacemos para que al comparar objetos la comparación de true?
// ------------------------------------------------------------------
var terceraPersona = yoana
  // Lo que estamos haciendo es indicar que terceraPersona apunta a la
  // misma referencia (posicion de memoria RAM) que apunta la variable yoana
console.log(yoana == terceraPersona)  // retorna true
console.log(yoana === terceraPersona) // retorna true

  // Esto implica que si cambiamos el objeto yoana tambien modificaremos
  // el objeto terceraPersona porque en esencia son el mismo
  yoana.nombre = 'Pilar'
  console.log(terceraPersona.nombre) //retorna Pilar

// ------------------------------------------------------------------
// ¿Cómo creamos un nuevo objeto a partir del objeto yoana?
// ------------------------------------------------------------------
var cuartaPersona = {
  ...yoana
}
  // Lo que implica que si hacemos...
  console.log(yoana == cuartaPersona)   // retorna false
  console.log(yoana === cuartaPersona)  // retorna false
  // porque ya no apuntan a la misma referencia (otra posicion de memoria RAM)
  // y por lo tanto no son lo mismo
