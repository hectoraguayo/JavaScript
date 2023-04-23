// Lista de compras
const compras = ["Huevos", "Leche", "Jugo", "Tortillas", "Pastel"]
console.log(compras);
compras.push("Aceite de Girasol")
console.log(compras)

compras.pop()
console.log(compras)

const movies = [
    { 
        titulo: "Divergente",
        director: "Neil Burger",
        fecha: new Date(2014, 03, 01)
    },
    { 
        titulo: "Avatar",
        director: "James Cameron",
        fecha: new Date(2009, 12, 17)
    },
    { 
        titulo: "IronMan",
        director: "Jon Favreu",
        fecha: new Date(2008, 04, 30)
    },
]
console.log(movies)

const ordenDate = movies.filter(pelicula => pelicula.fecha > new Date(2010, 00, 01));
console.log(ordenDate)

const director = movies.map(pelicula => pelicula.director)
console.log(director)

const pelis = movies.map(pelicula => pelicula.titulo)
console.log(pelis)

const concatenar = director.concat(pelis)
console.log(concatenar);

const concatenar_prop = [...director, ...pelis];
console.log(concatenar_prop)