const map = L.map('map', {
  center: [-32.92118581140628, -68.7890747070314],
  zoom: 13,
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
const baseLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30,
  // bounds: [
  //   [-31.93118581140628, -67.47390747070314],
  //   [-37.98100996893788, -69.47753906250001]
  // ],
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="#!">MPF</a>'
}).addTo(map);

const delLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 25,
  bounds: [
    [-32.43118581140628, -67.67390747070314],
    [-37.48100996893788, -69.67753906250001]
  ],
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="#!">MPF</a>'
}).addTo(map);
