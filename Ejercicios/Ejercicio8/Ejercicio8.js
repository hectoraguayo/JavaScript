function alwaysTrue(){
    return true;
}

console.log(alwaysTrue());

async function promesa(){
    return setTimeout(()=> console.log("Hola soy una promesa"),5000);
}

console.log(promesa());

function* autoPares(){
    let num = 0;
    while (true) {
        yield num+=2;
    }
}

const generar = autoPares();
console.log(generar.next());
console.log(generar.next());
console.log(generar.next());