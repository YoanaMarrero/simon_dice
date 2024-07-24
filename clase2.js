// ---------------------------
// strings
// ---------------------------
var nombre = '', apellido = 'Marrero'

// Convertir en mayúsculas
var nombreEnMayusculas = nombre.toUpperCase()

// Convertir en minúsculas
var apellidoEnMinusculas = apellido.toLowerCase()

// primer caracter de un String
var primeraLetraDelNombre = nombre.charAt(0)

// Longitud de un string
var cantidadDeLetrasDelNombre = nombre.length

// Concatenar 2 Strings
var nombreCompleto = nombre + ' ' + apellido

// Otra forma de concatenar (interpolación de texto)
var nombreCompleto_nuevo = `${nombre} ${apellido}`

// dentro de las {} podemos añadir código javascript
var nombreCompleto_nuevo2 = `${nombre} ${apellido.toUpperCase()}`

// Sustraer parte una variable
// - caracteres
var str = nombre.charAt(1) + nombre.charAt(2)
var str2 = nombre.substr(1,2)

// Desafío: última letra de mi nombre
var nombre_desafio = 'Yoana'
var ultimaLetra = nombre_desafio.substr(-1);
var ultimaLetra2 = nombre_desafio.charAt(nombre_desafio.length-1);
