// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas)
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   else if (avgKoalas >= 2 * avgDolphins)
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   else return `no team wins!`;
// }

// let avgDol = calcAverage(44, 23, 71);
// let avgKoa = calcAverage(65, 54, 49);

// let firstCheck = checkWinner(avgDol, avgKoa);
// console.log(firstCheck);

// avgKoa = calcAverage(85, 54, 41);
// avgDol = calcAverage(23, 34, 27);

// let secondCheck = checkWinner(avgDol, avgKoa);
// console.log(secondCheck);

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) return bill * 0.15;
//   else return bill * 0.2;
// }

// // console.log(calcTip(400));
// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "Johm Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!"`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!"`
//   );
// }

//22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) return bill * 0.15;
  else return bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const avg = calcAverage(total);
console.log(avg);
