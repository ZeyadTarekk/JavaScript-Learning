"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
////////////////////////////////////////////////////

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

const getCountryAndNeighbour = function (country) {
  // ajax call 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    console.log(request.responseText);
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    // redner country
    renderCounrty(data);

    const [_, neighbour] = data.borders;
    if (!neighbour) return;

    // ajax call 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(request2.responseText);
      // redner country
      renderCounrty(data2, "neighbour");
    });
    // get neighbour country
  });
};

// getCountryAndNeighbour("egypt");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("germany");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getJSON = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryDataPromises = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCounrty(data[0]);
      console.log(data[0]);
      let neighbour = data[0].borders;
      // const neighbour = 'asdawd'
      // if (!neighbour) neighbour = data[0].borders;
      if (!neighbour) throw new Error("No neighbour found");
      console.log(neighbour);
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((neighbourData) => {
      console.log(neighbourData);
      renderCounrty(neighbourData[0], "neighbour");
    })
    .catch((err) => {
      renderError(err.message);
      console.log(err.message);
    })
    .finally(() => {
      console.log("promise finished");
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryDataPromises("australia");
});
// getCountryDataPromises("egssypt");

// console.log("Test Started");
// setTimeout(() => console.log("0 Sec Timer"), 0);
// Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved Promise 2").then((res) => {
//   // for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log("Test End");

// const testPromise = new Promise(function (resolve, reject) {
//   console.log("Promise Started");
//   setTimeout(() => {
//     const number = Math.random();
//     console.log(number);
//     if (number >= 0.5) {
//       resolve("You WON!");
//     } else {
//       reject(new Error("You lost"));
//     }
//   }, 2000);
// });

// testPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// Promisifying setTimeOut
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("After 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("1 more second"));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();

    const { latitude: lat, longitude: long } = pos.coords;

    const resultsGeo = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=a15434b551ad4fc48c638920b4640e0e`
    );
    if (!resultsGeo.ok) throw new Error("Problem getting the location data");

    const results = await resultsGeo.json();

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${results.results[0].country}`
    );

    if (!res.ok) throw new Error("Problem getting the location data");

    const [json] = await res.json();
    renderCounrty(json);
    countriesContainer.style.opacity = 1;
    return `You are in ${results.results[0].city}, ${results.results[0].country}`;
  } catch (err) {
    console.log(err.message);
    renderError(err.message);
    countriesContainer.style.opacity = 1;
    throw err;
  }
};

console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);
whereAmI()
  .then((city) => console.log(city))
  .catch((err) => console.log("Error catched", err.message));
console.log("2: Finished getting location");

// const helloFunc = function (name) {
//   console.log(`Hello ${name}`);
// };

// setTimeout(() => {
//   helloFunc("zeyad");
// }, 1000);

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
