"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr1 = ["a", "b", "c", "d", "e"];
// let arr2 = [...arr1]; // deep copy of array similar to arr2 = arr1.slice()
let arr2 = arr1.slice();
// let arr2 = arr1; // Shallow copy of the array : any change in the first array reflects on the second one
console.log(arr1);
console.log(arr2);
arr1[0] = "z";
arr1[1] = "x";
arr2[4] = "m";
// arr1 = [1, 2, 3];
console.log(arr1);
console.log(arr2);

for (const [i, mov] of movements.entries()) {
  console.log(`Movement ${i + 1}, ${mov}`);
}
console.log("---");
movements.forEach(function (mov, i, arr) {
  console.log(`Movement ${i + 1}, ${mov}`);
});

// maps
currencies.forEach(function (value, key, map) {
  console.log(`${value}: ${key}`);
});

// sets

const currenciesUnique = new Set(currencies.keys());
console.log(currenciesUnique);

const euroToUsd = 1.1;

const convertedArray = movements.map((elem) => elem * euroToUsd);
console.log(movements);
console.log(convertedArray);

const withdrawls = movements.filter(function (move) {
  return move < 0;
});

console.log(withdrawls);

console.log(movements);

const balance = movements.reduce(function (acc, val, i, arr) {
  console.log(acc, val, i);
  return acc + val;
}, 0);

// console.log(balance);

const max = movements.reduce((acc, val) => {
  let num = val > acc ? val : acc;
  return num;
}, movements[0]);
console.log(max);

const testArr = [1, 2, 3, 4];

const elem = testArr.find((element) => element > 1);
console.log(elem);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

const index = testArr.findIndex((elem) => elem === 3);
console.log(index);

const arr = [900, 700, 1000, 1200, 700];

// a is the current value and b is the next number
console.log(
  arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  })
);

const x = new Array(7);
console.log(x);
console.log(x.fill(3));

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const dice = Array.from(
  { length: 100 },
  () => 1 + Math.floor(Math.random() * 6)
);

console.log(dice);

const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);
