export { modDOM };

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");
  const board2 = body.querySelector(".board-2");

  function printBoard(board) {
    for (const row in board) {
      if (typeof board[row] === "object" && row.includes("row"))
        board[row].forEach((square) => {
          const div = addShipClass(square);
          board1.appendChild(div);
        });
    }
  }

  function addShipClass(value) {
    const div = document.createElement("div");
    if (typeof value === "object") {
      div.classList.add("ship");
    } else if (value === "o") {
      div.classList.add("miss");
    } else if (value === "x") {
      div.classList.add("hit");
    }
    return div;
  }

  function printComputerBoard(computer, player) {
    for (const row in computer.board) {
      if (typeof computer.board[row] === "object" && row.includes("row"))
        for (let i = 0; i < computer.board[row].length; i++) {
          const div = addAttackClass(computer.board[row][i]);
          board2.appendChild(div);
          bindEvents(div, row, i, player, computer);
        }
    }
  }

  function addAttackClass(value) {
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
    resetComputerBoard();
    printComputerBoard(computer, player);
  }

  function resetComputerBoard() {
    const board = document.querySelectorAll(".board-2 div");
    board.forEach((element) => {
      element.remove();
    });
  }

  return { printBoard, printComputerBoard };
})();
