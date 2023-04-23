// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(0, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10)
console.log(substring_str)

/*
let substr_str = str_substr(5, 10)
console.log(substr_str)
*/

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka"
console.log(cadena)

// Al utilizar strings sólo remplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel')) 

let texto_largo = "Non los adipisicinglos reprehenderit aute los non culpa. Consectetur eiusmod duis do consequat qui consectetur ex officia aute. Tempor ipsum ex do deserunt sit los id aliqua magna reprehenderit tempor ea ipsum. In quis consectetur dolore culpa labore los excepteur Lorem excepteur irure dolor commodo do consectetur est. Quis amet dolor dolore est ut id nisi dolore duis."

// Al utilizar strings sólo remplaza la primera instancia
console.log(texto_largo.replace('los', 'cinco'))

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))