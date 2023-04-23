// Sesion 4 - Strings (cadenas de caracteres)
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";


console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"

console.log(str_comillas_dobles)

////////// Comillas invertidas (backticks)
let str_backticks = `string backticks`;
console.log(str_backticks);

let nombre = "Gorka"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo);

//Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>`

console.log(plantilla)

/// Introducción de variables en HTML
let lista = ["Empieza por el porque", "El monje que vendió su Ferrari", "El poder del ahora"]