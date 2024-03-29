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
// marcador1.addTo(map)
// marcador2.addTo(map)
// marcador3.addTo(map)


// console.log(latlong3.equals(latlong3));
// console.log(latlong2.toString());
// console.log(latlong2.distanceTo(marcador3.getLatLng()));
// console.log(latlong2.toBounds(5));

// latLngBounds

const latlngBounds = L.latLngBounds(latlong2, latlong3);
// const latlngBounds2 = L.latLngBounds([latlong1, latlong3]);
const latlngBounds2 = L.latLngBounds(bounds);

// console.log(latlngBounds2);
// latlngBounds2.extend(latlngBounds)
// console.log(latlngBounds2.getCenter());

const [coor1,coor2,coor3,coor4, coor5] = [latlngBounds2.getSouthWest(),latlngBounds2.getNorthWest(),latlngBounds2.getSouthEast(),latlngBounds2.getNorthEast(), latlngBounds2.getCenter()]

L.marker(coor1).addTo(map);
L.marker(coor2).addTo(map);
L.marker(coor3).addTo(map);
L.marker(coor4).addTo(map);

map.fitBounds(latlngBounds2)

// ##### L.point
// Valor en pixels de la pantalla
// L.pint

const punto = L.point(200,300);
const punto2 = L.point(100,150);

punto.add(punto2)
punto.scaleBy(punto2)

setTimeout(()=> {
  map.panBy(punto)
}, 3000)


// Bounds
// Recibe tipos Points o array(Points)

const bounds_1 = L.bounds(punto, punto2);
// console.log(bounds_1)
// console.log(bounds_1.getCenter())
// console.log(bounds_1.getSize())

// Icon

const ico_1 = L.icon({
  iconUrl: './img/sitio.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [-3, -50],
  className: 'p-1 bg-primary'
});


const marker_0510 = L.marker(coor5, {
  icon: ico_1}).addTo(map);

marker_0510.bindPopup('Leaflet Hello').openPopup()


// DIV icon

const divconicon = L.divIcon({
  className: 'mi-icon-custom'
  }

);

const divconicon2 = L.divIcon({
  className: 'fa-solid fa-map-pin mi-color'
  }

);
L.marker(coor1, { icon: divconicon2}).addTo(map);
L.marker(coor2, { icon: divconicon2}).addTo(map);
L.marker(coor3, { icon: divconicon2}).addTo(map);
marca_4 = L.marker(coor4, { icon: divconicon2}).addTo(map);

marca_4.bindPopup('Marcaddor 4').openPopup();
