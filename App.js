import RenderMap from "./module/RenderMap.js";
import GetMyLocation from "./module/GetMyLocation.js";
import SearchForLocaton from "./module/SearchForLocation.js";
class App {
  constructor() {
    this.start();
  }
  start() {
    let renderMap = new RenderMap(51.509865, -0.118092, false);
    let getLocation = new GetMyLocation(renderMap.themap);
    let searchLocation = new SearchForLocaton(renderMap.themap);
  }
}
let app = new App();

// const apiKey =
//   "dbf35f5a51ab1385555f178d3177d0e9fb96d6c0d2b5d8e3d621fb1c20666687";
// const basemapEnum = "ArcGIS:Streets";

// const map = L.map("map", {
//   minZoom: 2,
// }).setView([34.02, -118.805], 13);

// L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

// var requestOptions = {
//   method: "GET",
// };

// fetch(
//   `https://api.geoapify.com/v1/geocode/search?text=${theLocation}&apiKey=5138f30a311e491fb0dbb0f43c14319e`,
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result.features[0].geometry.coordinates))
//   .catch((error) => console.log("error", error));

// https://myprojects.geoapify.com/api/KVvl2uD8SnmSVny6P0kC/keys
