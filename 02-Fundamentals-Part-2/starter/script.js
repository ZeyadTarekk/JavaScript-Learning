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

//Arrays
const friends = ["zeyad", "ahmed", "mohamed", "ali"];
friends[4] = "moaz";
console.log(friends[4]);

const years = new Array(1991, 2001, 2004, 2006, 2010);
console.log(years);
years[4] = 2021;
years[6] = 2029;
console.log(years);
console.log(years[5]);

console.log(years.length);

//error
// years = [2001, 2003];
// console.log(years);

const myInfo = ["Zeyad", "Tarek", 20, "Student", years];
console.log(myInfo);

const names = ["Zeyad", "Ahmed", "Mohamed"];
console.log(names);
console.log(`Size ${names.push("Ali")}`);
console.log(names);
console.log(names.pop());
console.log(names);

console.log(names.unshift("Adel"));
console.log(names);

console.log(names.indexOf("Zeyad"));

names.shift();
console.log(names);

console.log(names.includes("Zeyad"));
console.log(names.includes("Zeya"));

const zeyadObject = {
  firstName: "Zeyad",
  lastName: "Tarek",
  age: 2021 - 2001,
  friends: ["Ali", "Mohamed"],
};

console.log(zeyadObject);
console.log(zeyadObject.lastName);
console.log(zeyadObject["lastName"]);

const nameKey = "Name";

console.log(zeyadObject[`first${nameKey}`]);
console.log(zeyadObject["last" + nameKey]);

// const property = prompt("What do you want to know about zeyad?");
// console.log(zeyadObject[property]);

zeyadObject.location = "Egypt";
zeyadObject["job"] = "Student";
console.log(zeyadObject);

console.log(
  `${zeyadObject.firstName} has ${zeyadObject.friends.length} friends and his best friend called ${zeyadObject.friends[0]}`
);

const zeyadObject2 = {
  firstName: "Zeyad",
  lastName: "Tarek",
  birthYear: 2001,
  friends: ["Ali", "Mohamed"],
  job: "Student",
  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },
  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },
  hasDriverslicense: true,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriverslicense ? "a" : "no"} driver's license`;
  },
};

// console.log(zeyadObject2.calcAge(zeyadObject2.birthYear));
// console.log(zeyadObject2["calcAge"](2000));
console.log(zeyadObject2.calcAge());
console.log(zeyadObject2.age);
console.log(zeyadObject2.getSummary());

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition no ${i} 🏋️‍♂️🏋️‍♂️`);
}

for (let i = 1; i <= 15; i++) {
  if (i == 5) break;
  console.log(i);
}

const zeyadArray = ["Zeyad", "Tarek", 2001, ["Ali", "Mohamed"], "Student"];
console.log(zeyadArray);

for (let i = zeyadArray.length - 1; i >= 0; i--) console.log(zeyadArray[i]);

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition no ${rep} 🏋️‍♂️🏋️‍♂️`);
  rep++;
}
