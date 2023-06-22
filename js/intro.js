// const textoInput1 = document.querySelector('#input1')
// const btn1 = document.querySelector('#btn1')
//
// textoInput1.value = 'Hello Mdz'
//
//
// btn1.addEventListener('click', () => {
//   const valorTexto1 = textoInput1.value
//   console.log(valorTexto1)
// })

const operator = document.querySelectorAll('.btn-success')
const number = document.querySelectorAll('.btn-light')
const borrar = document.querySelector('.btn-warning')
const accion = document.querySelector('.btn-danger')
const result = document.querySelector('header')
const sacarCuenta = () => {
  const cuantoEra = result.innerText.replaceAll('x', '*');

  try {
    result.innerText = eval(cuantoEra);
  } catch (error) {
    result.innerText = 'Error de sintaxis'
  }

}

const updateValue = (valorRecibido) => {
  const valueNow = result.innerText;

  let valueNew = "";

  if (valueNow == 0) valueNew = valorRecibido
    else if(valueNow === 'Error de sintaxis'){
      valueNew = '0';
  }
  else valueNew = valueNow + valorRecibido;

  result.innerText = valueNew.replaceAll(' ', '')

}


operator.forEach(btn => {
  btn.addEventListener('click', () => {
    const valorOperator = btn.textContent;
    updateValue(valorOperator)

  })
})

number.forEach(btn => {
  btn.addEventListener('click', () => {
    const valorNumber = btn.textContent;
    updateValue(valorNumber)
  })
})

borrar.addEventListener('click', () => {
  result.innerText = 0;
})

accion.addEventListener('click', () => {
  sacarCuenta()
})
