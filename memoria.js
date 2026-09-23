const cantantes = [
    "ROSALIA",
    "SHAKIRA",
    "BAD BUNNY",
    "TAYLOR SWIFT",
    "BRUNO MARS",
    "BEYONCE",
    "QUEVEDO",
    "LA PANTERA"
];

const letras = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let cantante;
let palabraOculta;
let vidas = 5;

const palabra = document.querySelector("#palabra");
const teclado = document.querySelector("#teclado");
const contadorVidas = document.getElementById('vidas'); 
const mensaje = document.querySelector("#mensaje");
const reiniciar = document.querySelector("#reiniciar");


function elegirCantante() {
    const posicion = (Math.random() * cantantes.length) | 0;
    cantante = cantantes[posicion];

    palabraOculta = "";

    for (let i = 0; i < cantante.length; i++) {
        if (cantante[i] === " ") {
            palabraOculta += " ";
        } else {
            palabraOculta += "_";
        }
    }

    palabra.textContent = palabraOculta;
}

function restarVida() {
    if (vidas > 0) {
        vidas--; 
        contadorVidas.textContent = vidas; 
    }
}

function crearTeclado() {
    for (let i = 0; i < letras.length; i++) {
        const boton = document.createElement("button");

        boton.textContent = letras[i];
        boton.classList.add("letra");

        boton.addEventListener("click", () => {
            comprobarLetra(letras[i], boton);
        });

        teclado.appendChild(boton);
    }
}

function comprobarLetra(letra, boton) {
    let acierto = false;
    let nuevaPalabra = "";

    for (let i = 0; i < cantante.length; i++) {
        if (cantante[i] === letra) {
            nuevaPalabra += cantante[i];
            acierto = true;
        } else {
            nuevaPalabra += palabraOculta[i];
        }
    }

    palabraOculta = nuevaPalabra;
    palabra.textContent = palabraOculta;
    boton.disabled = true;

    if (acierto === false) {
        restarVida();
    }

    comprobarVictoria();
    comprobarDerrota();
}

function comprobarVictoria() {
    if (palabraOculta === cantante) {
        mensaje.textContent = "¡Has acertado! 🎉";
        desactivarTeclado();
    }
}

function comprobarDerrota() {
    if (vidas === 0) {
        mensaje.textContent = "Has perdido. Era " + cantante;
        desactivarTeclado();
    }
}

function desactivarTeclado() {
    const botones = document.querySelectorAll(".letra");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}

function reiniciarJuego() {
    vidas = 5; 
    contadorVidas.textContent = vidas;
    mensaje.textContent = "";
    palabraOculta = "";
    teclado.textContent = "";

    elegirCantante();
    crearTeclado();
}

reiniciar.addEventListener("click", reiniciarJuego);

elegirCantante();
crearTeclado();