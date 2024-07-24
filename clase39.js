// ----------------------------------------------------
// Async-await: lo último en asincronismo
// ----------------------------------------------------
/*
Async-await es la manera más simple y clara de realizar tareas asíncronas.
Await detiene la ejecución del programa hasta que todas las promesas sean
resueltas. Para poder utilizar esta forma, hay que colocar async antes de la
definición de la función, y encerrar el llamado a Promises.all() dentro de un
bloque try … catch.

NOTA: Hay que tener en cuenta que no todos los navegadores lo soportan.
Chrome si lo soporta, en el caso de otros navegadores deberíamos utilizar un
‘polifield’
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
  console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
}

async function obtenerPersonajes () {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))

  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()
