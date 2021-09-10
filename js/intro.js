function main() {
    const nombre = "cesar"
    console.log(nombre)

    let num1 = 13
    const num2 = 13.7
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)

    num1 = "Hola"
    if (num1 % 2 == 0 || num2 % 2 == 0) {
        console.log("Es un numero par")
    } else if (num1 % 2 == 1 || num2 % 2 == 1) {
        console.log("Es un numero impar")
    } else {
        console.log("Es un numero erroneo")
    }

    let i = 0;
    while (i < 10) {
        console.log(i + 1)
        i++
    }

    for (let j = 0; j < 10; j++) {
        console.log(j + 21)
    }

}

function mostrarEnPantalla() {
    const inputName = document.getElementById("nombre");
    const salida = document.getElementById("Salida");

    let resultado = "";
    for (let i = 0; i < 5; i++) {
        resultado += "<div class='col'>" + inputName.value + " " + (i + 1) + "</div>";
    }
    salida.innerHTML = "<div class='row row-cols-3'>" + resultado + "</div>";
    // inputName.value = "";
}

function activarTexto() {
    const inputName = document.getElementById("nombre");
    inputName.removeAttribute("readonly");
}

function bloquearTexto() {
    const inputName = document.getElementById("nombre");
    inputName.setAttribute("readonly", "true");
}