// ----------------------------------------------------
// callbacks
// Manejo de errores con callbacks
// ----------------------------------------------------
/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar,
en medio de una sucesión de callbacks utilizamos el método fail().
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

// Para garantizar el orden debemos utilizar llamadas callbacks
// perdiendo por consiguiente el paralelismo
obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, yo soy ${personaje.name}.`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}.`)
    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola, yo soy ${personaje.name}.`)
    })
  })
})
