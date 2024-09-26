const bounds = L.latLngBounds([
  [-32.43118581140628, -67.67390747070314],
  [-37.48100996893788, -69.67753906250001]
])

const map = L.map('map', {
  center: [-32.92118581140628, -68.7890747070314],
  zoom: 13,
  zoomControl: false,
  attributionControl: true,
  keyboard: true,
  minZoom: 10,
  maxZoom: 25,
  maxBounds: bounds
})

// map.fitBounds(bounds); // No lo uso porque ya lo tengo en mi lugar de interés

const escala = L.control.scale({
  position: 'bottomright'
}).addTo(map)


const baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxNativeZoom: 19,
  maxZoom: 25,

  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="#!">MPF</a>'
}).addTo(map);

const grupo = L.featureGroup().addTo(map)

const layersBase = {
  "Calles": baseMap,
  }

  const overlayers = {
  "Grupo features": grupo
  }

  const layersControl = L.control.layers(layersBase, overlayers, {
  collapsed: false
}).addTo(map)





