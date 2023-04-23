// Ejercicio3

const fechaHoy = new Date()
console.log(fechaHoy);

const fechaNacimiento = new Date(2002, 00, 3, 14, 08)
console.log(fechaNacimiento);

const fechaMayor = fechaHoy > fechaNacimiento;
console.log(fechaMayor);

const dia = fechaNacimiento.getDate()
const mes = fechaNacimiento.getMonth()
const anyo = fechaNacimiento.getFullYear()
console.log(dia);
console.log(mes);
console.log(anyo);



