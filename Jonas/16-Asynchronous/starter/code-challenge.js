"use strict";

// Code challenge #1
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const getJSON = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderCounrty = function (data, className = "") {
  const language = Object.values(data.languages)[0];

  const currency = Object.values(data.currencies)[0].name;

  const card = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(2)}M people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", card);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getCountryDataPromises = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCounrty(data[0]);
      // console.log(data[0]);
      let neighbour = data[0].borders[0];
      // const neighbour = 'asdawd'
      // if (!neighbour) neighbour = data[0].borders;
      if (!neighbour) throw new Error("No neighbour found");
      // console.log(neighbour);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((neighbourData) => {
      // console.log(neighbourData);
      renderCounrty(neighbourData[0], "neighbour");
    })
    .catch((err) => {
      renderError(err.message);
      // console.log(err.message);
    })
    .finally(() => {
      console.log("promise finished");
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, long) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=a15434b551ad4fc48c638920b4640e0e`
  )
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error("Wrong coordinates");
      return res.json();
    })
    .then((res2) => {
      console.log(
        `You are in ${res2.results[0].city} city in ${res2.results[0].country} country`
      );
      getCountryDataPromises(res2.results[0].country);
    })
    .catch((err) => {
      renderError(err.message);
      console.log(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// whereAmI(-3321323.933, 1821312.474);
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
