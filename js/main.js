// Variables
// Primitivos
// number
// string
// boolean
// undefined

// Arreglos, inician en 0

const arreglo = [1, 1.2, 'Uno', true, undefined];

// Métodos

arreglo.forEach(elemento => {
  console.log(elemento)
})

//Objetos literales

const miObj = {
  name: 'Juan',
  lastName: 'Bensa',
  age: '30',
  salario: undefined,
  tutorial: [
    'leaflet', 'Laravel', 'Sf6'
  ]
}

console.warn(miObj)
console.table(miObj)


// Objetos globales

// * console
// * window

// Diferencias de tipos de variables

const constante = 10;// no se sobreescribe

let lets = 10; // permite sobreescribir pero no redeclarar

var vars = 10; // variable global, permite sobreescribir y redeclarar incluso las de objeto window

// Funciones

function funcionOne() {
  return 'hola'
}

const funcionTwo = () => {
  return ' Mundo';
}

const funcionThree = function () {
  return ' desde MDZ'
}

const hello = funcionOne();
const world = funcionTwo();
const desde = funcionThree();

console.log('Saludo', hello)
console.log('Saludo: ', hello, world)
console.log('Saludo3 ', hello, world, desde)


// Argumentos

const sumando = (a, b) => {
  return a + b;
}

const yoSumando = sumando(2, 8);

console.log('Resultado de la suma: ' + yoSumando)

// Ciclos Ejecutar tareas varias veces


const myArray = [5, 6, 7, 8];

// A mano


console.log(sumando(myArray[0], 6))
console.log(sumando(myArray[1], 6))
console.log(sumando(myArray[2], 6))
console.log(sumando(myArray[3], 6))

// Iterando

for (let elem of myArray) {
  const total = sumando(elem, 6)
  console.log(total)
}
let cuenta = 0
console.log(myArray.length)
while (cuenta < myArray.length) {
  console.log(sumando(myArray[cuenta], 6))
  cuenta = cuenta + 1;
}

// Estructura de control

/// If

const resultado = sumando(5, 5)
if (resultado > 20) {
  console.log('mayor >')
} else if (resultado === 10) {
  console.log('igual')
} else {
  console.log('menor <')
}

/// switch

switch (resultado) {
  case 10:
    console.log(' 10 ')
    break;
  case 3:
    console.log(' 3 ')
    break;
  default:
    console.error(' sin datos ')
}
