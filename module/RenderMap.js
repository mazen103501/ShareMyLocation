export default class RenderMap {
  constructor(lat, lng, exist, mapObj) {
    this.lng = lng;
    this.lat = lat;
    this.exist = exist;
    this.themap = mapObj;
    this.check();
  }
  check() {
    if (this.exist) {
      this.updateMap();
      return;
    }
    this.startMap();
  }
  startMap() {
    console.log("start");
    var tileLayer = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution: false,
    });
    // console.log(map);
    var map = L.map("map", {
      zoomControl: true,
      layers: [tileLayer],
      maxZoom: 18,
      minZoom: 6,
    }).setView([this.lat, this.lng], 15);
    setTimeout(function () {
      map.invalidateSize();
    }, 800);
    this.themap = map;
  }
  updateMap() {
    console.log("update");
    this.themap.panTo(new L.LatLng(this.lat, this.lng));
  }
}
