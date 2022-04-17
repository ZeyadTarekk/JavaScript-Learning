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
