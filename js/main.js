// Variables
// Primitivos
  // number
  // string
  // boolean
  // undefined

// Arreglos, inician en 0

const arreglo = [1, 1.2 ,'Uno', true, undefined];

// Métodos

arreglo.forEach( elemento => {
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

function funcionOne(){
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

console.log('Saludo' , hello)
console.log('Saludo: ' , hello, world)
console.log('Saludo3 ' , hello, world, desde)
