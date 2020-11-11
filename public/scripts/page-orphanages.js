// create map
const mymap = L.map("mapid").setView([-23.3127, -51.158], 13);

// Mapbox connection and map style
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    minZoom: 12,
    id: "mapbox/light-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZWxpYXNiaW9uZG8iLCJhIjoiY2tnbDQ2N3h1MmJxMTJ5cGRnNTYyZGxkZCJ9.EipaBPniLTEUhfd3lbPt_g",
  }
).addTo(mymap);


// Marker
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// ---------------

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach((span) => {

  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)

})

function addMarker({id, name, lat, lng}) {
  
    // Popup
    const popup = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 240,
      minHeight: 240,
    }).setContent(
      `<span class="orphanage-name"> ${name} </span> <a href="orphanage?id=${id}" class="choose-orphanage"> <img id="popup-arrow" src="/images/arrow-white.svg"> </a>`
    );

    // Markers
     L.marker([lat, lng], { icon })
      .addTo(mymap)
      .bindPopup(popup);

}


document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
