/* 

Image Gallery ----------------------------------------------------------------------------------------------

*/

function selectImage(event) {

  const buttons = document.querySelectorAll(".orphanage-images button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  let clickedButton = event.currentTarget
  clickedButton.classList.add("active")

  let currentImage = document.querySelector(".main-img")
  let clickedImage = clickedButton.children[0]
  
  currentImage.src = clickedImage.src

}


/* 

LeafLet & MapBox -------------------------------------------------------------------------------------------

*/


/* Map Invocation & Main Settings */

const settings = {
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const geoCoordinates = document.querySelector('.map-container span')
const lat = geoCoordinates.dataset.lat
const lng = geoCoordinates.dataset.lng

const mymap = L.map("mapid", settings).setView([lat, lng], 13);

/* MapBox Connection & Style Preferences */


L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 14,
    minZoom: 14,
    id: "mapbox/light-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZWxpYXNiaW9uZG8iLCJhIjoiY2tnbDQ2N3h1MmJxMTJ5cGRnNTYyZGxkZCJ9.EipaBPniLTEUhfd3lbPt_g",
  }
).addTo(mymap);


/* Marker style */

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

/* Active markers */

let newMarker = L.marker([lat, lng], { icon }).addTo(mymap);

/* LeafLet Assignment Eraser */

document.getElementsByClassName(
  "leaflet-control-attribution"
)[0].style.display = "none";
