"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const weekDays = ["sun", "mon", "tue", "thu", "fri", "sat"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  names: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza(mainIngredient, ...others) {
    console.log(`The main ingredient is: ${mainIngredient}`);
    if (others.length > 0) {
      console.log(`And the other are: `);
      for (let i = 0; i < others.length; i++) console.log(others[i]);
    }
  },
};

const arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr;
console.log(a, b, c);
a = 6;
console.log(a);
console.log(arr);

let [myOrder1, myOrder2] = restaurant.order(1, 2);
console.log(myOrder1, myOrder2);

const { names, mainMenu } = restaurant;
console.log(names, mainMenu);

const arrCopy = [...restaurant.mainMenu];
console.log(arrCopy);
console.log(restaurant.mainMenu);

arrCopy[0] = "Zeyad";
console.log(arrCopy);
console.log(restaurant.mainMenu);

let myName = "Zeyad";
// spread because it is in the rhs of the =
const myNameArr = [...myName];
console.log(myNameArr);

// 1) destructuring
// rest because it is in the lhs of the =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

const { sat, ...otherDays } = restaurant.openingHours;
console.log(sat, otherDays);

// 2) Functions

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}

console.log(add(1));
console.log(add(1, 3));
console.log(add(1, 3, 5));

// using spread operator to send arguments to the function
const numbersSum = [5, 6, 4];
console.log(add(...numbersSum));

restaurant.orderPizza("Tomato", "Cheese", "Onion");
restaurant.orderPizza("Tomato");

// Short circuiting
console.log("--- OR ---");
console.log(3 || "Zeyad");
console.log("" || "Zeyad");
console.log(true || 0);
console.log(undefined || null);
// how it works? it gives the first non falsy value or the last falsy value
console.log(undefined || 0 || "" || "Hello" || 23 || nul);

const gusets1 = restaurant.numGuests || 10;
// const gusets1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(gusets1);

console.log("--- AND ---");
console.log(0 && "Zeyad");
console.log(7 && "Zeyad");
console.log(7 && 0);

if (restaurant.orderPizza) restaurant.orderPizza("Mushroom", "Cheese");
restaurant.orderPizza && restaurant.orderPizza("Mushrroom", "Cheese");

const valueNeeded = 0;
const newValue = valueNeeded || 10;
console.log(newValue);

// Nullish values : null and undefined (NOT 0, "")
const newValueCorrect = valueNeeded ?? 10;
console.log(newValueCorrect);

const arrNew = ["Zeyad", "Tarek", 320, 403];
// For of loop
for (let item of arrNew) {
  if (item === 320) continue;
  console.log(item);
}
// Getting index in the for of loop
for (const it of arrNew.entries()) {
  console.log(`Element no: ${it[0]} : ${it[1]}`);
}
// Getting index and element in the for of loop by destructing
for (const it of arrNew.entries()) {
  console.log(`Element no: ${it[0]} : ${it[1]}`);
}

console.log(openingHours.fri?.open);

const days = ["sun", "mon", "tue", "thu", "fri", "sat"];
// console.log(openingHours[days[4]]);
for (const day of days) {
  if (openingHours[day] != undefined) {
    console.log(day);
    console.log(openingHours[day]);
  }
}

console.log(restaurant.order?.(2, 1) ?? "Method doesn't exist");
console.log(restaurant.orderFood?.(2, 1) ?? "Method doesn't exist");

const usersArray = [{ name: "Zeyad", email: "Zeyad,ta01@gmail.com" }];
const usersArray2 = [];

console.log(usersArray[0]?.name ?? "User doesn't exist");
console.log(usersArray2[0]?.name ?? "User doesn't exist");

// const keys = Object.keys(openingHours);
// const values = Object.values(openingHours);

// console.log(keys);
// console.log(values);

// let stringValue = `We open at ${keys.length} days each week: `;
// for (const day of keys) {
//   stringValue += `${day}, `;
// }
// console.log(stringValue);
// const objectEntries = Object.entries(openingHours);
// console.log(objectEntries);

// for (const [key, { open, close }] of objectEntries) {
//   console.log(`On day ${key} we open at ${open} and close at ${close}`);
// }

// Loopint through objects
console.log("Printing keys");
const properties = Object.keys(openingHours);
console.log(properties);

console.log("Printing values");
const values = Object.values(openingHours);
console.log(values);

console.log("Printing entries");
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x[0], x[1]);
}

const newSet = new Set(["Zeyad", "Tarek"]);
console.log(newSet);

console.log(newSet.add("ahmed"));
console.log(newSet.entries);

for (const item of newSet) console.log(item);

const newMap = new Map();

newMap.set("Zeyad", "CS");
newMap.set("Fahd", "IS");
// console.log(newMap[0]);
const testingArr = [1, 2];
newMap.set(testingArr, "Array of 1 and 2");
console.log(newMap);
console.log(newMap.get(testingArr));
testingArr[2] = 3;
console.log(testingArr);
console.log(newMap.get(testingArr));

const mapArray = new Map([
  ["zeyad", "CMP"],
  ["amr", "sbme"],
]);

console.log(mapArray);
console.log(mapArray.get("zeyad"));
mapArray.set("zeyad", "MLH");
console.log(mapArray.get("zeyad"));

for (const [key, value] of mapArray) {
  console.log(`${key} is maped to the value => ${value}`);
}

const newArrFromMap = [...mapArray];
console.log("values", [...mapArray.values()]);
console.log("keys", [...mapArray.keys()]);
console.log(newArrFromMap);
