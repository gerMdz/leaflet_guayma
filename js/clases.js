class Auto{
  constructor( cilindrada,  modelo,  mecanica,  peso) {
    // this.ruedas = ruedas ;
    this.cilindrada = cilindrada ;
    this.modelo = modelo ;
    this.mecanica = mecanica ;
    this.peso = peso ;
    this.calc_ruedas()
  }

  ruedas = 4;
  cilindrada;
  modelo;
  mecanica;
  peso;

  calc_ruedas(){
    this.ruedas =  this.cilindrada > 500? 4:2;
  }
}


const miAuto = {
  ruedas: 4,
  cilindrada: '1000cc',
  modelo: 'Honda',
  mecanica: true,
  peso:'900Kg'
}

const miAuto2 = {
  ruedas: 2,
  cilindrada: '300cc',
  modelo: 'Yamaha',
  mecanica: false,
  peso:'300Kg'
}

console.log(miAuto)
console.log(miAuto2)
console.log(Auto)

const instanciaAuto = new Auto(150,'Caterpiller', true, '200kg');
const instanciaAuto2 = new Auto(900,'Mazda', false, '1200kg');

console.log(instanciaAuto)
console.log(instanciaAuto2)
