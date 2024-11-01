// Clase 72

const botoncito = document.querySelector('#btn-add')
const select = document.querySelector('select')
const chequeado = document.querySelector('#checkbox')

botoncito.addEventListener('click', () => {
  const {value} = select
  const {checked} = chequeado

  if(value){
    console.log(value, checked)

    if(['marker', 'circleMarker'].includes(value)){
      const data = generatePoints(1);
      createCapa(data.flat(), value, checked)
    }
    else if( value === 'polygon'){
      const data = generatePoints(5);
      createCapa(data, value, checked)
    }
    else if( value === 'polyline'){
      const data = generatePoints(3);
      createCapa(data, value, checked)
    }
  }
})

