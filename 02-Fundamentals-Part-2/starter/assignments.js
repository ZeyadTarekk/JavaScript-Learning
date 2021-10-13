"use strict";
let country = "Egypt";
let continent = "Africa";
let population = 100;
let capital = "Cairo";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = "Arabic";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let description =
  "'" +
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  "'";
console.log(description);

let newDiscription = `'${country} is in ${continent}, and its ${population} million people speak ${language}'`;
console.log(newDiscription);

if (population > 33) {
  console.log(`${country}'s' population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} below average '`);
}

// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

if (language === "English" && population < 50 && !isIsland)
  console.log("You should live in Egypt :)");
else console.log("Egypt does not meet your criteria :(");

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

function describeCountry(country1, population1, capitalCity) {
  return `${country1} has ${population1} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry(country, population, capital));

function percentageOfWorld1(popul) {
  return (popul / 7900) * 100;
}

const percentageOfWorld2 = function (popula) {
  return (popul / 7900) * 100;
};

const pop1 = percentageOfWorld1(1441);
const pop2 = percentageOfWorld1(100);
const pop3 = percentageOfWorld1(2541);
console.log(pop1, pop2, pop3);

const pop4 = percentageOfWorld1(1441);
const pop5 = percentageOfWorld1(100);
const pop6 = percentageOfWorld1(2541);
console.log(pop4, pop5, pop6);
