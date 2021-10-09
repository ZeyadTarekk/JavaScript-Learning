// let markMass = 78;
// let markHeight = 1.69;

// let markBMI = markMass / markHeight ** 2;

// let johnMass = 92;
// let johnHeight = 1.95;

// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = false;
// if (markBMI > johnBMI) markHigherBMI = true;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

// markMass = 95;
// markHeight = 1.88;

// markBMI = markMass / markHeight ** 2;

// johnMass = 85;
// johnHeight = 1.76;

// johnBMI = johnMass / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// let newString = `Mark BMI = ${markBMI} and John BMI = ${johnBMI} `;
// console.log(newString);

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

const DolphinsAVG = (97 + 112 + 101) / 3;
const KoalasAVG = (109 + 95 + 106) / 3;

if (DolphinsAVG > KoalasAVG) console.log("Dolphins WON!");
else if (DolphinsAVG < KoalasAVG) console.log("Koalas WON!");
else console.log("DRAW!!");

if (DolphinsAVG > KoalasAVG && DolphinsAVG > 100) console.log("Dolphins WON!");
else if (DolphinsAVG < KoalasAVG && KoalasAVG > 100) console.log("Koalas WON!");
else if (DolphinsAVG === KoalasAVG && KoalasAVG > 100) console.log("DRAW!!");
else console.log("NO ONE WON");
