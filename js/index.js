const sidebar = document.querySelector('#sidebar')

// const map = L.map('map').setView([-32.89961293027149, -68.8368502461025 ], 17);
// Lat y Lon


const map = L.map('map', {
  center: [-31.93118581140628, -67.47390747070314],
  zoom: 8,
  zoomControl: false,
  attributionControl: true,
  keyboard: true,
  minZoom: 10,
  maxZoom: 29,
  // maxBounds: [
  //   [-31.93118581140628, -67.47390747070314],
  //   [-37.98100996893788, -69.47753906250001]
  // ]

})


//Cartografía base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30,
  bounds: [
    [-31.93118581140628, -67.47390747070314],
    [-37.98100996893788, -69.47753906250001]
  ],
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="#!">MPF</a>'
}).addTo(map);


// Zoom Cap 65

const control = L.control.zoom({
  zoomInText: '<span >+</span>',
  zoomInTitle: 'Acercar',
  zoomOutText: '<span > - </span>',
  zoomOutTitle: 'Alejar',
  position: 'bottomright'
}).addTo(map)

console.log(control.getPosition());

setTimeout(() => {
  control.setPosition('topright')
}, 3000)
