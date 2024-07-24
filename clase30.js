// ----------------------------------------------------
// Cómo funciona el tiempo en JavaScript
// ----------------------------------------------------
/*
En principio, cualquier tarea que se haya delegado al navegador a través
de un callback, deberá esperar hasta que todas las instrucciones del programa
principal se hayan ejecutado. Por esta razón el tiempo de espera definido en
funciones como setTimeout, no garantizan que el callback se ejecute en ese
tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando
la cola de tareas se haya vaciado.
*/

console.log('a')
//console.log('b')
setTimeout(function(){
  console.log('b')
}, 2000)

// Otra forma, con un arrow function...
// setTimeout(() => console.log('b'), 2000)

/*
¿Por qué no se puede poner de la siguiente forma?
setTimeout(console.log('b'), 2000)
Porque si no el console.log('b') se ejecutaría inmediatamente, lo
que hay que hacer es una referencia a la función.
*/

/*
Si en vez de poner 2 segundos ponemos 0 ¿qué pasará?
setTimeout(() => console.log('b'), 0)
Se ejecutará al final, porque la función se ha añadido a la cola de tareas
*/

console.log('c')
