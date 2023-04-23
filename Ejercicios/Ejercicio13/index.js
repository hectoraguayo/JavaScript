// Una cadena de texto con tu Nombre
/* eslint-disable */

let nombre = "Héctor";
/* eslint-enable */

// Otra cadena de texto con tu Apellido
const apellido = "Aguayo"

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = (nombre.concat(" ", apellido))
console.log(estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = (estudiante.toUpperCase())
console.log(estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = (estudiante.toLowerCase())
console.log(estudianteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const numeroLetras = (estudiante.length)
console.log(numeroLetras)

// Una variable que contenga la primera letra del Nombre
const primerLetra = (nombre.charAt(0))
console.log(primerLetra)

// Otra variable que contenga la última letra del Apellido
const ultimaLetra = (apellido.charAt(5))
console.log(ultimaLetra)

// Una cadena de texto que elimine los espacios de la variable "estudiante"
const eliminarEspacios = (estudiante.replace(" ", ""))
console.log(eliminarEspacios)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const boolean = (estudiante.indexOf("Héctor Aguayo"))
console.log(boolean)
