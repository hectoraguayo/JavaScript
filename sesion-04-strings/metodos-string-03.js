// Métodos de cadenas de texto (parte 3)
// https://regexr.com
let texto_largo = "Non los adipisicinglos reprehenderit aute los non culpa. Consectetur eiusmod duis do consequat qui consectetur ex officia aute. Tempor ipsum ex do deserunt sit los id aliqua magna reprehenderit tempor ea ipsum. In quis consectetur dolore culpa labore los excepteur Lorem excepteur irure dolor commodo do consectetur est. Quis amet dolor dolore est ut id nisi dolore duis."

console.log(texto_largo.match(/los/g))

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("excepteur"))

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Non los adi"))

// Saber si un texto termina con otra pálabra
console.log(texto_largo.endsWith("duis."))