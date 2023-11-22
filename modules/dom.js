export { modDOM };

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");
  const board2 = body.querySelector(".board-2");

  function test() {
    return console.log("test");
  }

  function printBoard(board, location) {
    for (const row in board) {
      if (typeof board[row] === "object" && row.includes("row"))
        board[row].forEach((square) => {
          const div = document.createElement("div");
          location.appendChild(div);
        });
    }
  }

  function printComputerBoard(computer, player) {
    for (const row in computer.board) {
      if (typeof computer.board[row] === "object" && row.includes("row"))
        for (let i = 0; i < computer.board[row].length; i++) {
          const div = addClass(computer.board[row][i]);
          board2.appendChild(div);
          bindEvents(div, row, i, player, computer);
        }
    }
  }

  function addClass(value) {
    const div = document.createElement("div");
    if (value === "o") {
      div.classList.add("miss");
    } else if (value === "x") {
      div.classList.add("hit");
    } else {
      div.classList.add("open");
    }
    return div;
  }

  function bindEvents(element, row, x, player, computer) {
    element.addEventListener("click", () =>
      attackComputer(row, x, player, computer)
    );
  }

  function attackComputer(row, x, player, computer) {
    player.attack(computer, row, x);
    updateComputerBoard();
    printComputerBoard(computer, player);
  }

  function updateComputerBoard() {
    const board = document.querySelectorAll(".board-2 div");
    board.forEach((element) => {
      element.remove();
    });
  }

  return { test, printBoard, printComputerBoard };
})();
