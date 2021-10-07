let country = "Egypt";
let continent = "Africa";
let population = 100;

console.log(country);
console.log(continent);
console.log(population);

let isIsLand = false;
const language = "Arabic";

console.log(typeof isIsLand);
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
