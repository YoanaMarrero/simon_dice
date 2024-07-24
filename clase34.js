// ----------------------------------------------------
// callbacks
// Manejando el Orden y el Asincronismo en JavaScript
// ----------------------------------------------------
/*
Una manera de asegurar que se respete la secuencia en que hemos realizado
múltiples tareas es utilizando callbacks, con lo que se ejecutará luego,
en cada llamada. Lo importante es que el llamado al callback se haga a
través de una función anónima. Sin embargo, al hacerlo de esta manera
generamos una situación poco deseada llamada CallbackHell.
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, function (persona){
    console.log(`Hola, yo soy ${persona.name}.`)

    if (callback) {
      callback()
    }
  })
}

// Para garantizar el orden debemos utilizar llamadas callbacks
// perdiendo por consiguiente el paralelismo
obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3)
  })
})

// Si seguimos escribiendo con callbacks esto acabará siendo un infierno de
// callbacks.
