const searchForm = document.querySelector("form");
const SearchResultDiv = document.querySelector(".search-result");
const contener = document.querySelector(".contaner");
let searchQuiry = "";
const applicationId = "11126060";
const apiKey = "858a4ce1e2110e5fdadb26a506864a64";
const searchBt1 = document.querySelector("#search-btn1");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuiry = e.target.querySelector("input").value;
  console.log(searchQuiry);
  fatchApi();
});
searchBt1.addEventListener("click", () => {
  fatchApi();
});
async function fatchApi() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuiry}&app_id=${applicationId}&app_key=${apiKey}`;
  const respons = await fetch(baseURL);
  const data = await respons.json();
  generatHtml(data.hits);
  // console.log(data);
}

function generatHtml(result) {
  let genetedHtm = "";
  result.map((result) => {
    genetedHtm += `
        <div class="itm">
                <img src="${result.recipe.image}" alt="">
                <div class="flex-contsiner">
                    <h1 class="title">${result.recipe.label}</h1>
                    <a class="view-btn" href="${
                      result.recipe.url
                    }" target="_blank">View Recipe</a>
                </div>
                <p class="itm-data">caliri:${result.recipe.calories.toFixed(
                  2
                )}</p>
                <p class="itm-data">Diet Label:${result.recipe.dietLabels}</p>
                <p class="itm-data">Helth lable:${
                  result.recipe.healthLabels
                }</p>
            </div>
        `;
  });
  SearchResultDiv.innerHTML = genetedHtm;
}
