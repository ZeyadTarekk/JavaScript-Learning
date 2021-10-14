"use strict";

// let hasDriversLic = false;
// const passTest = true;

// if (passTest) hasDriversLi = true;

// if (hasDriversLic) console.log("I Have lic");

// // and also reserved words that may be used in the furure

// const interface = 123;
// console.log(interface);

function logger() {
  console.log("I'm Zeyad Tarek");
}

logger();
logger();

function zeyad(z1, z2) {
  return z1 + z2;
}

let funcTest = zeyad("ZE", 3);
console.log(funcTest);

console.log(getAge1(2001));

//Function declaration
function getAge1(birthYear) {
  return 2021 - birthYear;
}

//Function Expression

const getAge2 = function (birthYear) {
  return 2021 - birthYear;
};
console.log(getAge2(2000));
// console.log(getAge3(1999));

const printName = function (name1, name2) {
  return name1 + " " + name2;
};

let nameZ = printName("Zeyad", "Tarek");
console.log(nameZ);

const ageYear = (birthYear2, nameZey) => nameZey + " " + (2021 - birthYear2);

console.log(ageYear(2001, "Zeyad"));

const yearsUntilRetirement = (birthYear3) => {
  const age = 2021 - birthYear3;
  return 60 - age;
};

console.log(yearsUntilRetirement(2001));
