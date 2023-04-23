// Qué son las funciones, como se declaran y cómo se utilizan 
const nom = "Hector"

// saludar("Hector")
saludar(nom)
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

//////

let nombre_2 = "Juan"
console.log(nombre_2);

despedir(nombre_2)
console.log(nombre_2);

function despedir(nombre){
    nombre = "Duego"
    console.log(`Adios ${nombre}`)
}

///////

let persona = {nombre: "Juan", apellido: "Gonzalez" }

saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar()

//////////

function imprimeNumero(numero = 7) { //Parametros por defecto
    console.log(numero)
}

imprimeNumero()

//////////

function imprimir(...parametros) {
    console.log(parametros);
}

imprimir(1, 2, 3, 9, 2, "Hola", { id: 9})

///////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15)

console.log(s);

//////
let variable = "Hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "Adios"
    console.log(variable_interna);
    return a * b
}

console.log(multiplicar(4, 9));