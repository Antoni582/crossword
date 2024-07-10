document.addEventListener("DOMContentLoaded", function () {
  const crossword = document.getElementById("crossword");
  const words = [
    { word: "apple", start: [0, 0], direction: "across" },
    { word: "green", start: [0, 0], direction: "down" },
  ];

  const grid = Array.from({ length: 5 }, () => Array(5).fill(""));

  for (let { word, start, direction } of words) {
    let [x, y] = start;
    for (let i = 0; i < word.length; i++) {
      grid[x][y] = word[i];

      if (direction === "across") {
        y++;
      } else {
        x++;
      }
    }
  }

  // Create grid cells
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      const input = document.createElement("input");
      input.maxLength = 1;
      cell.appendChild(input);
      crossword.appendChild(cell);
    }
  }
});

function checkAnswers() {
  const inputs = document.querySelectorAll("#crossword .cell input");
  const correctAnswers = ["a", "p", "p", "l", "e", "g", "r", "e", "e", "n"];
  let isCorrect = true;
  console.log(inputs);

  //   for (let i = 0; i < inputs.length; i++) {
  //     if (inputs[i].value.toLowerCase() !== correctAnswers[i]) {
  //       isCorrect = false;
  //       break;
  //     }
  //   }

  if (isCorrect) {
    alert("Congratulations, you solved the puzzle!");
  } else {
    alert("Some answers are incorrect, try again.");
  }
}
