const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // return false;
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble = console.log(miFuncion("21a"));
const numero = "8";

try {
    // Codigo de aqui que puede fallar
    console.log("Esta ejecutandose de manera correcta");
    const doble = miFuncion(numero)
    console.log(doble);
} catch (e) {
    // En caso de que falle, quiero que ejecutes
    console.error("ERROR!!!!");
    console.error(e);
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno");
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
