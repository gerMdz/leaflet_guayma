const textoInput1 = document.querySelector('#input1')
const btn1 = document.querySelector('#btn1')

textoInput1.value = 'Hello Mdz'


btn1.addEventListener('click', () => {
  const valorTexto1 = textoInput1.value
  console.log(valorTexto1)
})


