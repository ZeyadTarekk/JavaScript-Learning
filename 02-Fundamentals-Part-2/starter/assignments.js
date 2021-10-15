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

const percentageOfWorld2 = function (popul) {
  return (popul / 7900) * 100;
};

const pop1 = percentageOfWorld1(1441);
const pop2 = percentageOfWorld1(100);
const pop3 = percentageOfWorld1(2541);
console.log(pop1, pop2, pop3);

const pop4 = percentageOfWorld2(1441);
const pop5 = percentageOfWorld2(100);
const pop6 = percentageOfWorld2(2541);
console.log(pop4, pop5, pop6);

const percentageOfWorld3 = (populationz) => (populationz / 7900) * 100;
const pop7 = percentageOfWorld3(1441);
const pop8 = percentageOfWorld3(100);
const pop9 = percentageOfWorld3(2541);
console.log(pop7, pop8, pop9);
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

const test1 = describePopulation("Egypt", 100);
const test2 = describePopulation("China", 1450);

console.log(test1 + "\n" + test2);

function func() {
  console.log("Before return");
  return;
  console.log("After return");
}

func();

const populations = [100, 1400, 230, 2900];
console.log(populations);
if (populations.length === 4) console.log("True");
else console.log("false");

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const names = ["Zeyad", "Ahmed", "Mohamed"];
console.log(names);
console.log(`Size ${names.push("Ali")}`);
console.log(names);
console.log(names.pop());
console.log(names);
