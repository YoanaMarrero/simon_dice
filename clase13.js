// -----------------------------------------
// Estructuras repetitivas: for
// -----------------------------------------
var yoana = {
  nombre: 'Yoana',
  apellido: 'Marrero',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${yoana.nombre} pesa ${yoana.peso}kg.`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
   var random = Math.random()

   if (random < 0.25) {
     aumentarDePeso(yoana)
   } else if (random < 0.5) {
     adelgazar(yoana)
   }
 }

console.log(`Al final del año ${yoana.nombre} pesa ${yoana.peso.toFixed(2)}kg.`)
