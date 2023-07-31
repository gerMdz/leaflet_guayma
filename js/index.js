const sidebar = document.querySelector('#sidebar')

// const map = L.map('map').setView([-32.89961293027149, -68.8368502461025 ], 17);
// Lat y Lon


const map = L.map('map', {
  center: [-31.93118581140628, -67.47390747070314],
  zoom: 8,
  zoomControl: true,
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

const bounds = [[-32.900615, -68.837628], [-32.879389, -68.839967]];

const latlong2 = L.latLng(-32.900615, -68.837628, 500)
const latlong1 = L.latLng([-31.93118581140628, -67.47390747070314, 500])
const latlong3 = L.latLng({
  lat: -32.879389,
  lng: -68.839967,
  alt: 500
})

map.setView(latlong1)
setTimeout(()=>{
alert('cambio')
  map.setView(latlong2)
}, 3000)


const marcador1 = L.marker(latlong1)
const marcador2 = L.marker(latlong2)
const marcador3 = L.marker(latlong3)
marcador1.addTo(map)
marcador2.addTo(map)
marcador3.addTo(map)


console.log(latlong3.equals(latlong3));
console.log(latlong2.toString());
console.log(latlong2.distanceTo(marcador3.getLatLng()));
console.log(latlong2.toBounds(5));
