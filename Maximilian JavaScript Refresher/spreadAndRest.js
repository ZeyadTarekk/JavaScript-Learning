const numbers = [1, 2, 3];
const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers);
const person = {
  name: "zeyad",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

person.name = "mohamed";
console.log(person);
console.log(newPerson);

// array.filter function : Returns the elements of an array that meet the condition specified in a callback function.
const filter = (...arguments) => {
  return arguments.filter((el) => {
    return el >= 3;
  });
};

console.log(filter(0, 1, -1, 2, 3, 4));
