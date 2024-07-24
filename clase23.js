// ----------------------------------------------------
// Cómo funcionan las clases en JavasScript
// El contexto de las funciones: ¿quién es this?
// ----------------------------------------------------
// quién es this en las arrow functions === Windows

/* En esta clase explicamos por qué al introducir el arrow function salió
un error. El error del contexto de this en JavaScript es uno de los errores
más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia
al espacio global, a windows.

*/

// ¿Por qué el ejemplo no es válido si creamos un arrow functions?
// Porque this no es la persona, es 'Window'
Persona.prototype.soyAlto = () => {
  debugger;
  return this.altura >= 1.8
}


function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
}

var Yoana = new Persona('Yoana', 'Marrero', '1.72');
var Pilar = new Persona('Pilar', 'Rodríguez', '1.69');
var Gabriel = new Persona('Gabriel', 'Jimenez', '1.85');

Yoana.soyAlto()   // return false
Pilar.soyAlto()   // return false
Gabriel.soyAlto() // return false
