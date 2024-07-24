// ----------------------------------------------------
// callbacks
// Haciendo múltiples requests
// ----------------------------------------------------
/*
En esta clase accederemos a múltiples datos al mismo tiempo.
Continuaremos trabajando con los jQuery y swapi.
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

const onPeopleResponse = function (persona){
  console.log(`Hola, yo soy ${persona.name}.`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

// Esto no garantiza que recibamos a los actores en el que fueron llamados.
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
