// -----------------------------------------
// Condional múltiple: switch
// -----------------------------------------
var signo = prompt('¿Cuál es tu signo')

console.log(signo)

switch (signo) {
  case 'leo':
    console.log('No espere que los asuntos que tiene entre manos se solucionen con rapidez. Mantenga la paciencia para afrontar la jornada y verá que todo se acomodará.')
    break
  case 'libra':
    console.log('Entienda que para conseguir buenos resultados y los éxitos deseados, deberá operar de una forma más positiva. Abandone la negatividad que tanto lo caracteriza.')
    break
  case 'acuario':
    console.log('No espere que los asuntos que tiene entre manos se solucionen con rapidez. Mantenga la paciencia para afrontar la jornada y verá que todo se acomodará.')
    break
  case 'escorpio':
    console.log('Elabore un balance completo y detallado de la marcha de sus proyectos, ya que le será muy positivo para las decisiones en su futuro. Intente organizarse')
    break
  case 'aries':
    console.log('Sepa que todo lo que deba hacer hoy, le requerirá de suma paciencia. Será el momento para que trate de reflexionar antes de accionar sin pensar las consecuencias.')
    break
  case 'geminis':
  case 'géminis':
    console.log('Entretanto no se deje ganar por la indecisión, podrá concretar ese proyecto que lo llenará de gratificación en su vida personal. Sea más concluyente.')
    break
  default:
    console.log('No es un signo zodiacal válido')
    break
}
