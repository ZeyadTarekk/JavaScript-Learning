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
const myNameArr = [...myName];
console.log(myNameArr);

const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);
