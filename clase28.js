// ----------------------------------------------------
// Asincronismo en JavasScript
// Funciones como parámetros
// ----------------------------------------------------
/* En JavaScript, los parámetros de funciones son por defecto undefined.
De todos modos, en algunas situaciones puede ser útil colocar un valor
por defecto diferente que lo evalúe como verdadero. */

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
    if (fn) {
      // fn=> 0, null, '', undefines, NaN === false
      // fn=> [], {} === true
      fn(this.nombre, this.apellido);
    }
  }
  soyAlto() {
    return this.altura >= 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
    if (fn) {
      // fn=> 0, null, '', undefines, NaN === false
      // fn=> [], {} === true
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev)
    console.log(`No sabía que eras desarrollador`)
}

var Yoana = new Persona('Yoana', 'Marrero', '1.72');
var Pilar = new Persona('Pilar', 'Rodríguez', '1.69');
var Gabriel = new Desarrollador('Gabriel', 'Jimenez', '1.85');

// Podemos incluir la llamada a la funcion responderSaludo.
Yoana.saludar()
Pilar.saludar(responderSaludo)
Gabriel.saludar(responderSaludo)
