const sidebar = document.querySelector('#sidebar')

// const map = L.map('map').setView([-32.89961293027149, -68.8368502461025 ], 17);
// Lat y Lon


const map = L.map('map', {
  center: [-32.89961293027149, -68.8368502461025],
  zoom: 17,
  zoomControl: true,
  attributionControl: true,
  keyboard: true,
  minZoom: 10,
  maxZoom: 29,
  maxBounds: [
    [-31.93118581140628, -67.47390747070314],
    [-37.98100996893788,  -69.47753906250001]
  ]

})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="#!">MPF</a>'
}).addTo(map);

const latlng =
map.on('click', (evento)=>{
  const {lat,lng} = evento.latlng;
  console.log(lat, lng)
})

map.on('zoomend', (evento) => {
  const zoom = evento.target._zoom
  console.log(zoom)
})

map.on('moveend', (evento) => {
  // const center = evento.target._lastCenter
  const centerMap = map.getCenter();

  console.log('el centro ' + centerMap)
  const bounds = map.getBounds();

  console.log(bounds)
})

const mover = (latlng) => {
  map.flyTo(latlng, 17)
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
    sidebar.append(ul)
    places.forEach( lugar => {
      const li = document.createElement("li")
      li.innerText = lugar.nombre
      li.classList.add("list-group-item")
      ul.append(li)

      li.addEventListener('click', () => {
        clearPlaceLi()
        li.classList.add("active")
        mover(lugar.coordenadas)
      })
    })
}

lugares()

