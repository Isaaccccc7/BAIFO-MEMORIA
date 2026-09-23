const cantantes = ["ROSALIA","SHAKIRA","BAD BUNNY","TAYLOR SWIFT","BRUNO MARS","QUEVEDO","LA PANTERA"];

const letras = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const pistas = ["La flamenca motera", "Vale por dos de 22", "Un verano sin tirar fotos","La más dolido", "Un romantico 🌹", "Es un caprichisoooo","Quiero más quiiii"]

let cantante;
let palabraOculta;
let vidas = 5;
let posicionCantante;

const palabra = document.querySelector("#palabra");
const teclado = document.querySelector("#teclado");
const contadorVidas = document.getElementById('vidas'); 
const botonPista = document.querySelector("#pista");
const mensaje = document.querySelector("#mensaje");
const reiniciar = document.querySelector("#reiniciar");


function elegirCantante() {
    const posicion = (Math.random() * cantantes.length) | 0;
    cantante = cantantes[posicion];
    posicionCantante = posicion;
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
        mensaje.textContent = "Ahí lo tienes!!!!!!";
        desactivarTeclado();
    }
}

function comprobarDerrota() {
    if (vidas === 0) {
        mensaje.textContent = "Has perdido. Era " + cantante;
        mostrarDerrota();
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
    const Pista = document.querySelector(".card-pista");
    if (Pista) {
        Pista.remove();
    }
    const Derrota = document.querySelector(".card-derrota");
    if (Derrota) {
        Derrota.remove();
    }

    botonPista.disabled = true;

    elegirCantante();
    crearTeclado();

}

function mostrarPista() {
    if (vidas < 3) {
        const cardPista = document.createElement("div");
        cardPista.classList.add("card-pista");
        cardPista.textContent = pistas[posicionCantante];
        document.body.appendChild(cardPista);
        botonPista.disabled = true;
    }
}

function mostrarDerrota() {
    const Derrota = document.createElement("div");
    Derrota.classList.add("card-derrota");
    Derrota.textContent = "El cantante era: " + cantante;
    document.body.appendChild(Derrota);
}

reiniciar.addEventListener("click", reiniciarJuego);
botonPista.addEventListener("click", mostrarPista);
elegirCantante();
crearTeclado();
