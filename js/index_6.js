const sidebar = document.querySelector('#sidebar')

// const map = L.map('map').setView([-32.89961293027149, -68.8368502461025 ], 17);
// Lat y Lon


const map = L.map('map', {
  center: [-32.89961293027149, -68.8368502461025],
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


// L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
//   maxZoom: 20,
//   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
// }).addTo(map);

const latlng =
  map.on('click', (evento) => {
    const {lat, lng} = evento.latlng;
    // console.log(lat, lng)
  })

map.on('zoomend', (evento) => {
  const zoom = map.getZoom();
  msj = document.querySelector('#msj')

  const element = document.getElementById("dataZoom");
  if (element) {
    element.remove()
  }

  let spanZoom = document.createElement("span");
  spanZoom.id = 'dataZoom'


  // spanZoom.innerText =''
  msj.append(spanZoom)
  spanZoom.innerText = `
    zoom: ${zoom}
    `


})

map.on('moveend', (evento) => {
  // const center = evento.target._lastCenter
  const centerMap = map.getCenter();

  // console.log('el centro ' + centerMap)
  const bounds = map.getBounds();

  // console.log(bounds)
})

const mover = (latlng, nombre) => {

  const [lat, lng] = latlng
  // console.log(latlng)
  map.setView(latlng, 17)
  msj = document.querySelector('#msj')
  msj.classList.remove('hidden')
  msj.innerText = `Coordinadas son
  Latitud: ${lat}
  Longitud: ${lng}
  y es de ${nombre}`;

  const marca = L.marker(latlng, {
    draggable: true,
  }).addTo(map)

  marca.on('dragend', () => {
    const newCoor = marca.getLatLng();
    // console.log('dd' + newCoor)
    msj.innerText = `Se movió a
  Latitud: ${newCoor}
  `;


  })


}

const clearPlaceLi = () => {
  const allLi = document.querySelectorAll("li");
  allLi.forEach(li => {
    li.classList.remove("active")
  })
}


const lugares = () => {
  const ul = document.createElement("ul");
  ul.classList.add("list-group")
  sidebar.prepend(ul)
  places.forEach(lugar => {
    const li = document.createElement("li")
    li.innerText = lugar.nombre
    li.classList.add("list-group-item")
    ul.append(li)

    li.addEventListener('click', () => {
      clearPlaceLi()
      li.classList.add("active")
      mover(lugar.coordenadas, lugar.nombre)
    })
  })
}

const ico = L.icon({
  iconUrl: '/img/placeholder.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [-3, -76],
});

const marcador_ciudad = L.marker([-32.919909400738334, -68.85367886061664], {
  icon: ico,
  draggable: true
})


const path = {
  stroke: true,
  color: 'black',
  width: '3px',
  fillColor: 'red'

}

const path2 = {
  stroke: false,
  color: 'green',
  width: '1px',
  fillColor: 'blue',
  // opacity: 0.8

}

const path3 = {
  stroke: true,
  color: 'yellow',
  width: '1px',
  fillColor: 'black',
  opacity: 0

}

const path4 = {
  stroke: true,
  color: 'blue',
  width: '5',
  opacity: 1,
  fillColor: 'red',
  fillOpacity: 0,
  dashArray: '5, 10'

}

const path5 = {
  stroke: true,
  color: 'blue',
  width: '5',
  opacity: 0.8,
  fillColor: 'red',
  fillOpacity: 0.3,
  dashArray: '5, 10'

}

const redondo = L.circle([-32.89, -68.85], {radius: 200, ...path});
// const redondo2 =  L.circle([-32.89, -68.85], {radius: 400, ...path2}).addTo(map);


// setTimeout(() => {
//   redondo.setRadius(100)
//   redondo.getLanLng()
//   redondo.setStyle(...path2)
//
//
// }, 3000)


redondo.on('mouseover', () => {
  redondo.setStyle(path2)
  // console.log(path2)
})

redondo.on('mouseout', () => {
  redondo.setStyle(path)
  // console.log(path)
})


const marcador_redondo = L.circleMarker([-32.89, -68.85], {radius: 200, ...path3});

marcador_redondo.setRadius(100)

const latlngs = [
  [-32.88, -68.84],
  [-32.90, -68.86],
  [-32.89, -68.58],
  [-32.91, -68.78],
  [-32.89, -68.72],


];

const latlngs_ext = [
  [-32.89, -68.58],
  [-32.91, -68.78],
  [-32.89, -68.72],
];


const polyline = L.polyline(latlngs, {
  // color: 'red',
  // smoothFactor: 0.5,
  ...path4,

});


const ext_poly = polyline.getBounds();

map.fitBounds(ext_poly);


// setTimeout(() => {
//   polyline.addLatLng(latlngs_ext[0])
//   const agrega = polyline.getBounds();
//   map.fitBounds(agrega)
// }, 3000
// )
// setTimeout(() => {
//   polyline.addLatLng(latlngs_ext[1])
//   const agrega = polyline.getBounds();
//   map.fitBounds(agrega)
// }, 6000
// )
// setTimeout(() => {
//   polyline.addLatLng(latlngs_ext[2])
//   const agrega = polyline.getBounds();
//   map.fitBounds(agrega)
// }, 9000
// )


const boundsRect = [[-32.8869689020603, -68.8543075227812], [-32.9069689020603, -68.8743075227812]];
const rectan = L.rectangle(boundsRect, {...path5});

map.fitBounds(rectan.getBounds())


const latlngsPolyg = [
  [-32.8869689020603, -68.8543075227812],
  [-32.9269689020603, -68.8743075227812],
  [-32.8869689020603, -68.8943075227812]
  // [-32.9269689020603, -68.8943075227812],
  // [-32.8569689020603, -68.8543075227812]
];

const polygon = L.polygon(latlngsPolyg, {color: '#0a0a0a'});

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());

const poliJson = polygon.toGeoJSON()

// console.log(poliJson)

lugares()

const styleHover = {color: "violet"};
const styleDefault = {color: "white"};
const geoLayer = L.geoJSON(geoMapa, {
  pointToLayer: (feature, latlng) => {
    return L.circleMarker(latlng, {
      color: 'red'
    });
  },
  style: (feature) => {
    const {name} = feature.properties;
    if (name === 'points') {
      return {color: 'brown'};
    }
  },
  // filter: (feature) => {
  //   return ['points', 'lines'].includes(feature.properties.name)
  // },
  onEachFeature: (feature, layer) => {
    layer.on('mouseover', () => {
      layer.setStyle(styleHover)
    })
    layer.on('mouseout', () => {
      layer.setStyle(styleDefault)
    })
    layer.on('click', () => {
      if (feature.geometry.type === 'Point') {
        map.setView(layer.getLatLng(), map.getMinZoom())
      } else {
        map.fitBounds(layer.getBounds())
      }
    })
  }
}).addTo(map)

map.fitBounds(geoLayer.getBounds())


geoLayer.on('layeradd', (e) => {
  console.log(e)
  const {layer} = e;
  map.fitBounds(geoLayer.getBounds())

  layer.setStyle(styleDefault)
})
setTimeout(() => {
  geoLayer.res
  geoLayer.addData(otraFeature);

  geoLayer.eachLayer((layer) => {
    layer.setStyle({color: 'red'})
  })
  const layers = geoLayer.getLayers()

}, 3000)


// LayerGroup

const layerGroup = L.layerGroup().addTo(map);


layerGroup.addLayer(marcador_ciudad);
layerGroup.addLayer(redondo);
layerGroup.addLayer(marcador_redondo);
layerGroup.addLayer(polyline);
layerGroup.addLayer(rectan);
layerGroup.addLayer(polygon);


marcador_ciudad.on('dragend', () => {
  const newCoor = marcador_ciudad.getLatLng();
  // console.log('dd' + newCoor)
  msj.innerText = `Se movió a
  Latitud: ${newCoor}
  `;
})

const donde = redondo.getBounds();

map.fitBounds(donde)


// console.log(layerGroup.toGeoJSON())
//
// setTimeout(() => {
//   layerGroup.clearLayers()
// }, 3000)

// Feature Group

const grupoFeature = L.featureGroup().addTo(map);

// grupoFeature.bindPopup(
//   "Elemento añadido"
// )

// grupoFeature.addLayer(redondo);
// grupoFeature.addLayer(marcador_redondo);
// grupoFeature.addLayer(polyline);
// grupoFeature.addLayer(rectan);
// grupoFeature.addLayer(polygon);

// grupoFeature.eachLayer(layer => {
//   layer.on('click', (e) => {
//     const {latlng} = e;
//     layer.bindPopup(`
//     Ubicación:
//     Latitud: ${latlng.lat}
//     Longitud: ${latlng.lng}
//     `).openPopup();
//   })
// })

// grupoFeature.on('click', (e) => {
//   const {layer, latlng} = e;
//   layer.bindPopup(`
//     Ubicación:
//     Latitud: ${latlng.lat}
//     Longitud: ${latlng.lng}
//     `).openPopup();
// })

//
// const popup = L.popup([-32.8869689020603,-68.8543075227812], {
//   content: 'Este es el centro de Mendoza Capital',
//   closeButton: false,
//   closeOnClick: false
// })

const my_popup = L.popup();

map.on('click', (e) => {
  const {latlng} = e;

// map.flyTo(latlng)
console.log(latlng)
  my_popup
    .setLatLng(latlng)
    .setContent(`Estamos en ${latlng} <br/> el Tel 1234 -555`)
    .openOn(map)
})

// marcador_ciudad.bindPopup('<i>Ingreso</i>').openPopup()

// setTimeout(() => {
//   marcador_ciudad.setPopupContent('Otro contenido')
// }, 6000)

marcador_ciudad.bindTooltip('<i>Tooltip</i>').openTooltip()

// setTimeout(() => {
//   marcador_ciudad.setPopupContent('Otro contenido')
// }, 6000)

// WMS imágenes cuadradas en png con datos del servicio

const my_wms = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: "Weather data © 2012 IEM Nexrad"
});

// una forma de referenciar una imagen dentro de la capa del mapa
const imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
  imageBounds = [[-32.900615, -68.837628], [-32.879389, -68.839967]];
L.imageOverlay(imageUrl, imageBounds, {
  opacity: 0.3
})

const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
  videoBounds = [[ 32, -130], [ 13, -100]];
L.videoOverlay(videoUrl, imageBounds ).addTo(map);
