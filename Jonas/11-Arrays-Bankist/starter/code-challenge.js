const juliaArr1 = [3, 5, 2, 12, 7];
const kateArr1 = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  const arr1Correct = arr1.slice(1, 3);
  const wholeDogs = [...arr1Correct, ...arr2];
  console.log(wholeDogs);
  wholeDogs.forEach(function (dog, i) {
    if (dog >= 3)
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    else console.log(`Dog number ${i + 1} is still a puppy`);
  });
};
checkDogs(juliaArr1, kateArr1);
console.log(juliaArr1, kateArr1);
