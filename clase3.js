// ---------------------------
// números
// ---------------------------
var edad = 27

// Incrementos
edad = edad + 1
edad += 1

// Decrementos
var peso = 75
peso = peso - 2
peso -= 2

// Sumas y Restas
var sandwich = 1

peso = peso + sandwich
peso += sandwich

var jugarAlFutbol = 3
peso = peso -jugarAlFutbol
peso -= jugarAlFutbol

// Decimales
var precioVino = 200.3
var total = precioVino * 3
  // esto daría como resultado 600.9000000000001
  // esto es debido a la manera que JS guarda los decimales
  // Una forma de solucionarlo es realizar lo siguiente
  total = precioVino * 100 * 3 / 100  // total = 600.9

  // Otra forma sería hacer uso de la clase Math
  // Esto funciona independiente de la cantidad de decimales
  total = Math.round(precioVino * 100 * 3) / 100

  // Para formatear los decimales
  var totalStr = total.toFixed(2)   // total = "600.90"
  var total2 = parseFloat(totalStr) // total = 600.90

  // Divisiones
  var pizza = 8
  var personas = 2
  var cantidadPorcionesPersona = pizza / personas
