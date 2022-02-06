class PhotoGallery {
  constructor() {
    this.Apikey = "563492ad6f91700001000001a7277dfe459c4e92b52dc393c2d26542";
    this.galleryDiv = document.querySelector(".gallery");
    this.searchFrom = document.querySelector(".header form");
    this.loadMore = document.querySelector(".load-more");
    this.logo = document.querySelector(".logo");
    this.pageIndex = 1;
    this.eventHandle();
    this.searchValueFor = "";
  }
  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {
      this.getImage(1);
    });
    this.searchFrom.addEventListener("submit", (e) => {
      this.getSearchImage(e);
    });
    this.loadMore.addEventListener("click", (e) => {
      this.loadMoreImages(e);
    });
    this.logo.addEventListener("click", () => {
      this.pageIndex = 1;
      this.galleryDiv.innerHTML = "";
      this.getImage(this.pageIndex);
    });
  }
  async getImage(index) {
    this.loadMore.setAttribute("data-img", "curated");
    const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
    const data = await this.fatchImages(baseURL);
    this.GeneraterHtml(data.photos);
  }
  async fatchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.Apikey
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  GeneraterHtml(photos) {
    photos.forEach((element) => {
      const itm = document.createElement("div");
      itm.classList.add("itm");
      itm.innerHTML = `
          <a href="${element.src.large}">
          <img src="${element.src.medium}" alt="">
          <h3>${element.photographer}</h3>
          </a>
          `;
      this.galleryDiv.appendChild(itm);
    });
  }
  async getSearchImage(e) {
    e.preventDefault();
    this.pageIndex = 1;
    this.loadMore.setAttribute("data-img", "search");
    const serchValue = e.target.querySelector("input").value;
    this.searchValueFor = serchValue;
    // e.target.querySelector('input').value="";
    e.target.reset();
    const baseURL = await `https://api.pexels.com/v1/search?query=${serchValue}&page=1&per_page=12`;
    const data = await this.fatchImages(baseURL);
    this.galleryDiv.innerHTML = "";
    this.GeneraterHtml(data.photos);
  }
  async getSearchMoreImage(index) {
    const serchValue = this.searchValueFor;
    // e.target.querySelector('input').value="";
    // e.target.reset();
    const baseURL = await `https://api.pexels.com/v1/search?query=${serchValue}&page=${index}&per_page=12`;
    const data = await this.fatchImages(baseURL);
    //his.galleryDiv.innerHTML="";
    this.GeneraterHtml(data.photos);
  }
  async loadMoreImages(e) {
    this.pageIndex++;
    const dta = e.target.getAttribute("data-img");
    if (dta === "curated") {
      this.getImage(this.pageIndex);
    } else {
      this.getSearchMoreImage(this.pageIndex);
    }
  }
}
const gallery = new PhotoGallery();
