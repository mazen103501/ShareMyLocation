export default class LinkShare {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.copyBtn = document.querySelector(".share button");
    this.shareInput = document.querySelector(".share input");
    this.shareFunc();
  }
  shareFunc() {
    let url = encodeURI(
      `${location.origin}/ShareMyLocation/sharedlinkespage.html?lat=${this.lat}&lng=${this.lng}`
    );
    // console.log(url);
    this.copyBtn.disabled = false;
    this.copyBtn.classList.remove("disabled");
    this.shareInput.value = url;
    this.copyBtn.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(this.shareInput.value)
          .then((r) => {
            alert("Copied!!");
          })
          .catch((e) => {
            alert("Something wrong!");
          });
        return;
      }
      alert("Please Copy manually!!");
      this.shareInput.select();
    });
  }
}
