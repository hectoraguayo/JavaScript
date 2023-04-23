const datos = {
    nombre: "Hector",
    apellido: "Aguayo",
    edad: "21",
    altura: 1.73,
    eresDesarrollador: true
}

const edad = datos.edad
console.log(edad);

const datosPersonales = [datos, 
    amigo1 = {
        nombre: "Mauricio",
        apellido: "Garcia",
        edad: "23",
        altura: 1.76,
        eresDesarrollador: false
    },
    amigo2 = {
        nombre: "Alejandro",
        apellido: "Orendai",
        edad: "22",
        altura: 1.76,
        eresDesarrollador: false
    }
]
console.log(datosPersonales);

datosPersonales.sort((a, b) => a.edad - b.edad)
console.log(datosPersonales)
