"use strict";
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

console.log(typeof createBooking);

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

// console.log(oneWord("Zeyad Tarek Khairy"));

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(" ");
  return firstWord.toUpperCase() + " " + others.join(" ");
};

// console.log(upperFirstWord("Zeyad Tarek Khairy"));

// Higher order Function
const transformer = function (str, fn) {
  console.log(`Before transformation: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best ever", upperFirstWord);
// console.log(transformer("Javascript is the best ever", upperFirstWord));
transformer("Javascript is the best ever", oneWord);

const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingArrow = (greeting) => (personName) => {
  console.log(`${greeting} ${personName}`);
};

const greeterHey = greetingArrow("hey");
greeterHey("Zeyad");
greeterHey("Tarek");
console.log(typeof greeterHey);

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);

console.log(addVAT(100));
