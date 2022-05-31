"use strict";

// if (true) {
//   var fName = "zeyad";
// }

// console.log(fName); // will work if it is var only because var is not block scoped but if it is let or const it will give referrence error

// // function calcAge(birthYear) {
// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   // console.log(firstName);
//   console.log("Hello");
//   return age;
// }
// calcAge(2001);
// let firstName = "Zeyaddddd";

const firstObject = {
  firstName: "Zeyad",
  secName: "Ahmed",
  age: 21,
  family: ['Zeyad','Tarek']
};

const secondObject = { ...firstObject };
secondObject.age = 22;
secondObject.family.push('Ahmed');
secondObject.family.push('Mohamed');
console.log(firstObject);
console.log(secondObject);
