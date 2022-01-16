import UpdateMap from "./RenderMap.js";
import LinkShare from "./LinkShare.js";
export default class GetMyLocation {
  constructor(themap) {
    this.themap = themap;
    this.getMyLocation();
  }
  getMyLocation() {
    let getLocationBtn = document.querySelector(".get-location-btn");
    getLocationBtn.addEventListener("click", this.locationFunc.bind(this));
  }
  locationFunc() {
    let loading = document.querySelector(".loading-cont");
    loading.classList.remove("hidden");
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        console.log(loc);
        let { latitude, longitude } = loc.coords;
        console.log(latitude, longitude);
        new UpdateMap(latitude, longitude, true, this.themap);
        new LinkShare(latitude, longitude);
        // console.log(map);
        loading.classList.add("hidden");
      },
      (err) => {
        alert(err.message);
        loading.classList.add("hidden");
      }
    );
  }
}
