function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas)
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  else if (avgKoalas >= 2 * avgDolphins)
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  else return `no team wins!`;
}

let avgDol = calcAverage(44, 23, 71);
let avgKoa = calcAverage(65, 54, 49);

let firstCheck = checkWinner(avgDol, avgKoa);
console.log(firstCheck);

avgKoa = calcAverage(85, 54, 41);
avgDol = calcAverage(23, 34, 27);

let secondCheck = checkWinner(avgDol, avgKoa);
console.log(secondCheck);
