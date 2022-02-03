const from = document.querySelector("form");
const fact = document.querySelector(".fact");

from.addEventListener("submit", (e) => {
  e.preventDefault();
  const no = e.target.querySelector('input[type="number"]').value;
  console.log(no);
  const lod = "wait ..";
  fact.innerHTML = lod;
  fetch("http://numberapi.com/" + no)
    .then((Response) => Response.text())
    .then((text) => {
      fact.innerHTML = text;
    })
    .catch((err) => {
      fact.innerHTML = err;
    });
});
