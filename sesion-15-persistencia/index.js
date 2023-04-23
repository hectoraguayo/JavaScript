// localStorage.setItem("nombre", "Hector")
// localStorage.setItem("nombre", "Aguayo")

// console.log(localStorage.getItem("nombre"));

// localStorage.setItem("persona", JSON.stringify({ nombre: "Hector", edad: 21 }))

// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de un objeto Javasscript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-session", "Hector")

/* Cookies */ 
document.cookie = "nombreCookie=GorkaCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie);
