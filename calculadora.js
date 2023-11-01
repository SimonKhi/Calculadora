// Constantes para obtener los valores de cada boton
const btnNumero = document.getElementsByName("data-number");
const btnOpera = document.getElementsByName("data-opera");
const btnIgual = document.getElementsByName("data-result")[0];
const btnBorrar = document.getElementsByName("data-clear")[0];
const btnBorrarTodo = document.getElementsByName("data-all-clear")[0];

// Variables para hacer las operaciones 
var resultado = document.getElementById("result");
var valorActual = '';
var valorAnterior = '';
var operacion = undefined;

// Identificar el número de cada botón y añadir el evento click
btnNumero.forEach((boton) => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.innerText);
    })
});

// Identificar el operador y añadir en evento click
btnOpera.forEach((boton) => {
    boton.addEventListener('click', () => {
        seleccionarOperacion(boton.innerText);
    })
});

// Hacer la operacion y mostrar
btnIgual.addEventListener('click', () => {
    calcular();
    actualidarDisplay();
});

// Borrar un número
btnBorrar.addEventListener('click', () => {
    borrarNumero();
    actualidarDisplay();
});

// Borrar todo
btnBorrarTodo.addEventListener('click', () => {
    borrarTodo();
    actualidarDisplay();
});

/*-------------- Funciones --------------*/

function agregarNumero(num) {
    valorActual = valorActual.toString() + num.toString();
    actualidarDisplay();
}

function seleccionarOperacion(op) {
    if(valorActual === '') 
        return;
    if(valorAnterior !== '')
        calcular();
    operacion = op.toString();
    valorAnterior = valorActual;
    valorActual = '';
}

function calcular() {
    var calculo;
    const anterio = parseFloat(valorAnterior);
    const actual = parseFloat(valorActual);

    if(isNaN(anterio) || isNaN(actual)) 
        return;
    switch(operacion) {
        case '+':
            calculo = anterio + actual;
            break;
        case '-':
            calculo = anterio - actual;
            break;
        case 'x':
            calculo = anterio * actual;
            break;
        case '/':
            calculo = anterio / actual;
            break;
        case '%':
            calculo = anterio % actual;
            break;
        default:
            break;
    }
    valorActual = calculo;
    operacion = undefined;
    valorAnterior = '';
}

function borrarNumero() {
    valorActual = valorActual.slice(0, valorActual.length - 1);
}

function borrarTodo() {
    valorActual = '';
    valorAnterior = '';
    operacion = undefined;
}

function actualidarDisplay() {
    resultado.value = valorActual;
}

borrarNumero();
borrarTodo();