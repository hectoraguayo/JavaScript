const btn = document.querySelector("#btn-click")
btn.addEventListener("click", () => alert ("Click en el botón"))

$("#btn-click").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})