// ----------------------------------------------------
// callbacks
// ----------------------------------------------------

/*
En esta clase aprenderemos que son los callbacks y usaremos una librería
externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento.
Esta función se invoca, después, dentro de la función externa para completar
alguna acción.

Lecturas recomendadas
jQuery CDN (content delivery network: nos proporciona la ip más cercana a nosotros
del archivo que buscamos)
https://code.jquery.com

jQuery
https://jquery.com

SWAPI - The Star Wars API
https://swapi.dev/
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

// Request con jQuery
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true}

$.get(lukeUrl, opts, function(){
  // Para saber qué parámetros nos llegan podemos consultar la documentación
  // de jQuery.get()
  // arguments es una variable que tienen todas las funciones que nos devuelve
  // un array con los parámetros que recibe la función.
  console.log(arguments)
})

$.get(lukeUrl, opts, function(luke){
  // Para saber qué parámetros nos llegan podemos consultar la documentación
  // de jQuery.get()
  // arguments es una variable que tienen todas las funciones que nos devuelve
  // un array con los parámetros que recibe la función.
  console.log(`Hola me llamo ${luke.name}.`)
})

// Otra forma de hacerlo
const onPeopleResponse = function (persona){
  console.log(`Hola yo soy, ${persona.name}.`)
}
$.get(lukeUrl, opts, onPeopleResponse)
