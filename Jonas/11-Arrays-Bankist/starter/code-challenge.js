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

const juliaArr2 = [5, 2, 4, 1, 15, 8, 3];
const kateArr2 = [4, 16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
  const humanAge = arr.map((element) => {
    if (element <= 2) return element * 2;
    else return 16 + element * 4;
  });
  console.log(humanAge);
  const adults = humanAge.filter((elem) => elem >= 18);
  console.log(humanAge);

  const sum = adults.reduce((acc, val) => acc + val, 0);
  console.log(sum / adults.length);
};
calcAverageHumanAge(juliaArr2);
const calcAverageHumanAge2 = (arr) => {
  let length = 0;
  const sum = arr
    .map((element) => {
      if (element <= 2) return element * 2;
      else return 16 + element * 4;
    })
    .filter((elem) => elem >= 18)
    .reduce((acc, val) => {
      length++;
      return acc + val;
    }, 0);

  console.log(sum / length);
};
calcAverageHumanAge2(juliaArr2);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
