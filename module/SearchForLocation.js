import UpdateMap from "./RenderMap.js";
import LinkShare from "./LinkShare.js";
export default class SearchForLocation {
  constructor(themap) {
    this.themap = themap;
    this.formDefault();
    this.loading = document.querySelector(".loading-cont");
  }
  formDefault() {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    let input = form.querySelector(".search-input");
    let formBtn = form.querySelector("button");
    formBtn.addEventListener("click", () => {
      this.loading.classList.remove("hidden");
      if (input.value == "") {
        this.loading.classList.add("hidden");
        alert("Please Fill the Input !!!");
        return;
      }
      this.searchRequest(input.value);
      input.value = "";
    });
  }
  async searchRequest(val) {
    try {
      console.log(val);
      let request = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${val}&apiKey=5138f30a311e491fb0dbb0f43c14319e`,
        {
          method: "GET",
        }
      );
      let data = await request.json();
      this.loading.classList.add("hidden");
      console.log(data);
      if (data.features.length == 0) {
        alert("There No Such Address With That Name !!!!!");
        return;
      }
      let theLoc = data.features[0].geometry.coordinates;
      let [lng, lat] = theLoc;
      console.log(lat, lng);
      new UpdateMap(lat, lng, true, this.themap);
      new LinkShare(lat, lng);
    } catch (error) {
      this.loading.classList.add("hidden");
      alert("Error!!");
    }
  }
}
