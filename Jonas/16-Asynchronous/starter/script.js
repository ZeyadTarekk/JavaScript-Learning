"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText); //this.responseText => request.responseText
//     // console.log(data);
//     // console.log(data.flags.svg);
//     // console.log(data.name.common);
//     // console.log(data.currencies.EUR.name);
//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name} </p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name} </p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText); //this.responseText => request.responseText
//     console.log(data);
//     // Render country 1
//     renderCounrty(data);
//     // Render country 2
//     const neighbour = data.borders[0];
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(request2.responseText);
//       console.log(data2);
//       renderCounrty(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("USA");
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data[0]);
//       renderCounrty(data[0]);
//     });
// };
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((res) => {
      console.log(res);
      // if (!res.ok) {
      //   throw new Error(`Country Not found (${res.status})`);
      // }
      return res.json();
    })
    .then((data) => {
      // console.log(data[0]);
      renderCountry(data[0]);
      if (!data[0].borders) throw new Error("No Neighbours");
      const neighbour = data[0].borders[0];
      // const neighbour = "asd";
      // console.log(neighbour);
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((res2) => {
      console.log(res2);
      return res2.json();
    })
    .then((data2) => renderCountry(data2, "neighbour"))
    .catch((err) => {
      console.error(`${err}💥💥💥`);
      renderError(`Something Went Wrong ${err.message} Try Again`);
    });
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
// getCountryData("asd");
// getCountryData("portugal");
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=a15434b551ad4fc48c638920b4640e0e`
  )
    .then((Response) => {
      console.log(Response);
      return Response.json();
    })
    .then((data) => {
      console.log(data.results[0].country);
      if (data.results[0].country) {
        const myCount = data.results[0].country;
        getCountryData(myCount);
      } else {
        throw new Error("No Such Country");
      }
    })
    .catch((err) => {
      console.log(err.message);
      renderError(err.message);
    });
};
// console.log(whereAmI(52.508, 13.381));
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
// console.log(country);
// getCountryData(country);

*/
