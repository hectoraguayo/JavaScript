// Ejercicio 05

// Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 172;
console.log(altura_cm);

// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.72;
console.log(altura_m);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 55;
console.log(peso_kg);

// Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(altura_m));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(altura_m));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(sonIguales);