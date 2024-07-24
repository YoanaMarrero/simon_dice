// -----------------------------------------
// Parámetros por valor o por referencia
// -----------------------------------------
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

// Importante! JS al pasarle un objeto como parametro
// automaticamente se pasa por referencia.
function cumpleanos(persona) {
  persona.edad += 1
}

// Otra cosa que podemos hacer es JS es devolver
// un nuevo objeto con las mismas caractericticas que el
// pasado por parámetro con las modificaciones deseadas o
// incluso añadirle nuevas propiedades
function cumpleanos2(persona) {
  return {
    ...persona,
    edad: persona.edad +1,
    colorFavorito: 'Azul'
  }
}
