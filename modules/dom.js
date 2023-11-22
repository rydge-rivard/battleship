export { modDOM };

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");
  const board2 = body.querySelector(".board-2");

  function printBoard(player) {
    for (const row in player.board) {
      if (typeof player.board[row] === "object" && row.includes("row"))
        player.board[row].forEach((square) => {
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
    resetBoard(".board-2 div");
    resetBoard(".board-1 div");
    printBoard(player);
    printComputerBoard(computer, player);
  }

  function resetBoard(cssClass) {
    const board = document.querySelectorAll(cssClass);
    board.forEach((element) => {
      element.remove();
    });
  }

  return { printBoard, printComputerBoard };
})();
