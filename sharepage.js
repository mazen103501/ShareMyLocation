let url = new URL(location.href);
let querys = url.searchParams;
let coords = {
  lat: querys.get("lat"),
  lng: querys.get("lng"),
};

var tileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution: false,
});

var map = L.map("map", {
  zoomControl: true,
  layers: [tileLayer],
  maxZoom: 18,
  minZoom: 6,
}).setView([+coords.lat, +coords.lng], 15);
setTimeout(function () {
  map.invalidateSize();
}, 800);
