const bounds = L.latLngBounds([
  [13.274277, -80.067026],
  [-5.100372, -65.924605]
])

const pathDefault = {
  color:'black'
}

const pathGroup = {
  color:'blue'
}

const divIcon = L.divIcon({
  className: 'fa-solid fa-heart iconDiv',
  iconSize: [80,80],
  iconAnchor: [40,80],
  popupAnchor:[0, -80]

})

const map = L.map('map', {
  minZoom: 6,
  maxZoom: 22,
  center: [4.881759, -73.437706],
  maxBounds: bounds
})

map.fitBounds(bounds);

const escala = L.control.scale({
  position: 'bottomright'
}).addTo(map)


const baseMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxNativeZoom: 20,
  maxZoom: 22,

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

grupo.on('layeradd', (elEvent) => {
  const  { layer } = elEvent;

  if(layer?.dragging){
      layer.setIcon(divIcon)
  }else{
    layer.setStyle(pathGroup)
  }
})

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
  else if (type === 'circleMarker') layer = L.circleMarker(latlng, {...pathDefault});
  else if (type === 'polygon') layer = L.polygon(latlng, {...pathDefault});
  else if (type === 'polyline') layer = L.polyline(latlng, {...pathDefault});

  if(grouped === true) {
    grupo.addLayer(layer)
  }else{
    layer.addTo(map);
    layersControl.addOverlay(layer, type)
  }
}







