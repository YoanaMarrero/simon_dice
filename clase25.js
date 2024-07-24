// ----------------------------------------------------
// Clases en JavasScript (Prototipos)
// ----------------------------------------------------
/*
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son
una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de
clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un
objeto creado a partir de una clase.
*/

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
  }
  soyAlto() {
    return this.altura >= 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    // super llama al constructor de la clase padre.
    super(nombre, apellido, altura)
    // A partir de aquí, sí podríamos usar this
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }
}

// var Yoana = new Persona('Yoana', 'Marrero', '1.72');
// var Pilar = new Persona('Pilar', 'Rodríguez', '1.69');
// var Gabriel = new Persona('Gabriel', 'Jimenez', '1.85');

var Yoana = new Persona('Yoana', 'Marrero', '1.72');
Yoana.soyAlto()
Yoana.saludar()

var Gabriel = new Desarrollador('Gabriel', 'Jimenez', '1.85');
Gabriel.saludar()
