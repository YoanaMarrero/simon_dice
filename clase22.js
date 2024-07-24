// ----------------------------------------------------
// Cómo funcionan las clases en JavasScript
// Modificando un prototipo
// ----------------------------------------------------
/*
En esta clase veremos cómo se modifican las clases de herencias. JavaScript
funciona con una estructura orientada a objetos y cada objeto tiene una
propiedad privada que mantiene un enlace a otro objeto llamado prototipo.
*/

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
}

// Reto de la clase anterior
Persona.prototype.soyAlto = function () {
  this.altura >= 1.8 ? console.log(`${this.nombre} es alto`)
    : console.log(`${this.nombre} es bajo`)
}
//.-

Persona.prototype.soyAlto_v2 = function () {
  return this.altura >= 1.8
}

var Yoana = new Persona('Yoana', 'Marrero', '1.72');
var Pilar = new Persona('Pilar', 'Rodríguez', '1.69');
var Gabriel = new Persona('Gabriel', 'Jimenez', '1.85');

Yoana.soyAlto()
Pilar.soyAlto()
Gabriel.soyAlto()
