const key = "fffd6e0c052444eb8d7123822221907";
let form = document.querySelector("form");
const dataClimate = document.querySelector(".data");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameCity = document.querySelector(".input__city").value;
  let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${nameCity}&lang=pt`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      dataClimate.innerHTML = `
      <img src=${data.current.condition.icon} class="icon__climate__city" />
      <span class="climate__city">${data.current.condition.text}</span>
      <span class="name__city">${data.location.name} / ${data.location.region}</span>
      
    `;
    });
});
