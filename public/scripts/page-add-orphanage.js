/* 

LeafLet & MapBox -------------------------------------------------------------------------------------------

*/

/* Map Invocation & Main Settings */

const settings = {
  touchZoom: true,
  doubleClickZoom: true,
  scrollWheelZoom: true,
  zoomControl: true,
};

const mymap = L.map("mapid", settings).setView([-23.3127, -51.158], 13);

/* MapBox Connection & Style Preferences */

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

/* LeafLet Assignment Eraser */

document.getElementsByClassName(
  "leaflet-control-attribution"
)[0].style.display = "none";

// Marker
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

/* Add new marker */

var theMarker = {};
const latitudeInput = document.querySelector("#lat")
const longitudeInput = document.querySelector("#lng")

mymap.on("click", function (event) {
  lat = event.latlng.lat;
  lon = event.latlng.lng;

  latitudeInput.value = lat
  longitudeInput.value = lon

  //Clear existing marker,

  if (theMarker != undefined) {
    mymap.removeLayer(theMarker);
  }

  //Add a marker to show where you clicked.
  theMarker = L.marker([lat, lon], { icon }).addTo(mymap);
});




/* 

Add images -------------------------------------------------------------------------------------------

*/

/* Clear Input Link */

function removeLink(event) {
  let removeLinkBtn = event.currentTarget;
  let inputParent = removeLinkBtn.parentNode;
  let input = inputParent.children[0];


  if (input.value == false) {
    window.alert(
      "Não foi possível limpar este campo porque ele já se encontra vazio."
    );
  } else {
      if (confirm("Você realmente deseja limpar este campo?")) {
        input.value = "";
      }
  }
}

/* Add New Image Link */

let execTimes = 0;

function addNewImage() {
  if (execTimes >= 5) {
    window.alert("Você não pode adicionar mais que 6 imagens");
  } else {
    execTimes = execTimes + 1;

    const currentImageLinkInput = document.querySelector(".image-section");
    const imageUploadDiv = document.createElement("div");
    imageUploadDiv.className = "image-upload";

    const imageUploadInput = document.createElement("input");
    imageUploadInput.name = "images";
    imageUploadInput.placeholder = "Insira o link da imagem aqui";
    imageUploadInput.required = true;
    imageUploadInput.type = "url"

    const imageUploadSpan = document.createElement("span");
    imageUploadSpan.onclick = function removeLinkInput(event) {
      let removeLinkBtn = event.currentTarget;
      let inputParent = removeLinkBtn.parentNode;
      let input = inputParent.firstChild;

      if (input.value != "") {
        if (confirm("Você realmente deseja remover este link?")) {
          inputParent.remove();
          execTimes = execTimes - 1;
        }
      } else {
        inputParent.remove();
        execTimes = execTimes - 1;
      }
    };

    const imageUploadSpanImage = document.createElement("img");
    imageUploadSpanImage.src = "/images/close-icon.svg";
    imageUploadSpanImage.alt = "Excluir imagem";

    currentImageLinkInput.appendChild(imageUploadDiv);
    imageUploadDiv.appendChild(imageUploadInput);
    imageUploadDiv.appendChild(imageUploadSpan);
    imageUploadSpan.appendChild(imageUploadSpanImage);
  }
}

/* Weekend Friendly Choose Option */

function weekendFriendlyChooseOption(event) {
  const weekendFriendlyValue = document.querySelector("#weekend-friendly");
  const buttons = document.querySelectorAll(
    ".weekend-friendly-choose-buttons button"
  );
  const clickedButton = event.currentTarget;

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  clickedButton.classList.add("active");
  weekendFriendlyValue.value = clickedButton.value;
  console.log(weekendFriendlyValue.value)
  console.log(clickedButton.value)
}