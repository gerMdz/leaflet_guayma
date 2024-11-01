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

const providersMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
  minZoom: 0,
  maxNativeZoom: 20,
  maxZoom: 22,
  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ext: 'png'
});

const grupo = L.featureGroup().addTo(map)

const layersBase = {
  "Calles": baseMap,
  "providersLocal": providersMap
  }

  const overlayers = {
  "Grupo features": grupo
  }

  const layersControl = L.control.layers(layersBase, overlayers, {
  collapsed: false
}).addTo(map)

const  createCapa = (latlng, type, grouped) => {
  console.log(latlng, type, grouped)

  let layer;
  if (type === 'marker') layer = L.marker(latlng, { draggable: true});
  else if (type === 'circleMarker') layer = L.circleMarker(latlng);
  else if (type === 'polygon') layer = L.polygon(latlng);
  else if (type === 'polyline') layer = L.polyline(latlng);

  if(grouped === true) {

  }else{
    layer.addTo(map);
  }
}





