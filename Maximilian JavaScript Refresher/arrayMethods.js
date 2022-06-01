const numbers = [6, 7, 3, 4];

// map takes a function and this function gets executed on each element on the array
const doubleNum = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNum);

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);
