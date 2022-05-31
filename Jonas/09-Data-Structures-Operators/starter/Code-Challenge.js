"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

const [gk1, ...fieldPlayers1] = players1;
// console.log(gk1, fieldPlayers1);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

const { team1, x: Draw, team2 } = { ...game.odds };
// const { odds:{team1, x: Draw, team2} } =  game ;
console.log(team1, Draw, team2);

function printGoals(...playersNames) {
  for (let i = 0; i < playersNames.length; i++) {
    console.log(`${playersNames[i]} : ${playersNames.length}`);
  }
}

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team2 is more likely to win");

// Challenge #2

for (const player of game.scored.entries()) {
  console.log(`Goal ${player[0] + 1}: ${player[1]}`);
}

let sum = 0;
let oddsArr = Object.values(game.odds);
const number = oddsArr.length;
for (const num of oddsArr) sum += num;
console.log(`Average of odds = ${(sum / number).toPrecision(3)}`);

for (const odd of Object.entries(game.odds)) {
  if (odd[0] != "x")
    console.log(`Odd of victory of ${game[odd[0]]}: ${odd[1]}`);
  else console.log(`Odd of Draw: ${odd[1]}`);
}
const scorers = {};

for (const player of game.scored) {
  if (scorers[player] == undefined) scorers[player] = 1;
  else scorers[player]++;
}
console.log(scorers);
