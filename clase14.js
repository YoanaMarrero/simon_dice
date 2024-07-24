// -----------------------------------------
// Estructuras repetitivas: while
// -----------------------------------------
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${yoana.nombre} pesa ${yoana.peso}kg.`)

const INCREMENTO_PESO = 0.3
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = yoana.peso - 3

var dias = 0

while (yoana.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(yoana)
  }
  if (realizaDeporte()) {
    adelgazar(yoana)
  }
  dias += 1
}

console.log(`Tras ${dias} días ${yoana.nombre} pesa ${yoana.peso.toFixed(2)}kg.`)
