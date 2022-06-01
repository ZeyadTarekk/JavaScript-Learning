[a, b] = ["Zeyad", "Tarek"];
console.log(a);
console.log(b);

const obj = {
  personName: "Ahmed",
  Age: 21,
};

const obj2 = {
  myName: "Mohamed",
  myAge: 22,
};

const { personName: neededName, Age } = obj;
console.log(neededName, Age);
let myName, myAge;
({ myName, myAge } = obj2);
console.log(myName, myAge);
