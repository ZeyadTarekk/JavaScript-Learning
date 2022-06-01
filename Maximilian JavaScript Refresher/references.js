const person = {
  hisName: "Zeyad",
};
const secondPerson = person;

person.hisName = "Ahmed";
console.log(secondPerson); //Now the name in the second person is also ahmed

// Solution
const newPerson = {
  hisName: "Mohamed",
};

const secondNewPerson = {
  ...newPerson,
};

newPerson.hisName = "Hamada";

console.log(secondNewPerson); //Here it still mohamed
