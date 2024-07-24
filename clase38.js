// ----------------------------------------------------
// Múltiples Promesas en paralelo
// ----------------------------------------------------
/*
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids
con el que luego construimos otro arreglo de Promesas, que pasaremos como
parámetro a Promise.all( arregloDePromesas ), con las promesas podemos
encadenar llamadas en paralelo, algo que no es posible usando callbacks.
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

var ids = [1, 2, 3, 4, 5, 6, 7]
/*
var promesas = ids.map(function(id){
  return obtenerPersonaje(id)
})
*/
// otra forma
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)
