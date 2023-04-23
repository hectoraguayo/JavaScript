// Trabajando con fechas
const fecha = new Date()
console.log(fecha);

// ATENCION - Los meses inicializaron en 0 (0 - Enero)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha2);

const fecha3 = new Date(0)
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5);

console.log(fecha2 === fecha5); // ERROR - No se pueden comparar fechas de esta manera

