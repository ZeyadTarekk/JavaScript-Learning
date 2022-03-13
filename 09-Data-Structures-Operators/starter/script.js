"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  names: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
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
  },
  orderPizza: function (mainIngredient, ...others) {
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
