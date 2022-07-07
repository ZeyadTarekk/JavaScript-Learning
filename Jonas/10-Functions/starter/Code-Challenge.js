// Challenge #1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const message = `What is your favourite programming language?\n${this.options.join(
      "\n"
    )} \n(Write option number) `;
    console.log(message);
    let selection = Number(prompt(message));
    while (selection == NaN || !(selection >= 0 && selection <= 3))
      selection = prompt("Wrong selection " + message);

    // console.log(selection);
    this.answers[selection]++;
    // console.log(this.answers);
    // displayResults.call(this);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}`);
    else console.log(this.answers);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

console.log(typeof "hello");
// const displayResults = function (type = "string") {
//   if (type === "string")
//     console.log(`Poll results are ${this.answers.join(", ")}`);
//   else console.log(this.answers);
// };

const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];

// displayResults(Data1);
poll.displayResults.call({ answers: Data1 });
poll.displayResults.call({ answers: Data1 }, "string");
poll.displayResults.call({ answers: Data2 });
poll.displayResults.call({ answers: Data2 }, "string");

// Challenge #2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
