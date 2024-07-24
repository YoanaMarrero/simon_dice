// ----------------------------------------------------
// Cómo funcionan las clases en JavasScript
// ----------------------------------------------------
/*
Un poco de teoría interesante:
Hablar de objetos en javascript es hablar de prototipos y no tanto de clases.
this hace referencia al nuevo objeto que se acaba de crear.
la función que define al prototipo retorna implícitamente this, es decir retorna el nuevo objeto que se creo.
La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
*/

// La siguiente función es lo que se conoce como un constructor.
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

Yoana.saludar()
Pilar.saludar()
Gabriel.saludar()

// Reto de la clase
Persona.prototype.soyAlto = function () {
  this.altura >= 1.8 ? console.log(`${this.nombre} es alto`)
    : console.log(`${this.nombre} es bajo`)
}

Yoana.soyAlto()
Pilar.soyAlto()
Gabriel.soyAlto()
