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
