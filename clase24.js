// ----------------------------------------------------
// La verdad oculta sobre las clases en JavasScript
// ----------------------------------------------------
// JS no soporta la herencia basicamente porque no soporta las Clases
// En JS si existe la herencia prototipal.

/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades.
Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos
acceder a la propiedad de un objeto, la propiedad no sólo se busca en el
propio objeto sino también en el prototipo del objeto, en el prototipo del
prototipo, y así sucesivamente hasta que se encuentre una propiedad que
coincida con el nombre o se alcance el final de la cadena de prototipos. */

/* Antiguamente en JS la única forma de hacer una herencia era crear
una función que asignaba al nuevo prototipo, todas las características
del prototipo padre. */
function heredaDe(prototipoHijo, prototipoPadre){
  // var noop  = ... (noop = variable que no hace nada)
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
}

Persona.prototype.soyAlto =  function () {
  return this.altura >= 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

// Para pisar el saludo de la clase padre debemos crear la nueva función
// despues de llamar a la función heredaDe
Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


// var Yoana = new Persona('Yoana', 'Marrero', '1.72');
// var Pilar = new Persona('Pilar', 'Rodríguez', '1.69');
// var Gabriel = new Persona('Gabriel', 'Jimenez', '1.85');

var Yoana = new Persona('Yoana', 'Marrero', '1.72');
Yoana.saludar()

var Gabriel = new Desarrollador('Gabriel', 'Jimenez', '1.85');
Gabriel.saludar()

/*
En la consola si ponemos Persona obtenemos la definición del constructor.
Si ponemos Persona.prototype devuelve todo el contenido de la clase.
Es interesante conocer el atributo _proto_ 
*/
