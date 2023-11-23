export { modDOM };
import { modModal } from "./modal.js";
import { game } from "./controller.js";

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");
  const board2 = body.querySelector(".board-2");

  printBoard(game.player1);
  printComputerBoard(game.player2, game.player1);
  printBoard(game.player1, modModal.modalCont);

  function printBoard(player, location = board1) {
    for (const row in player.board) {
      if (typeof player.board[row] === "object" && row.includes("row"))
        player.board[row].forEach((square) => {
          const div = addShipClass(square);
          location.appendChild(div);
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
          bindEvents(div, row, i, player, computer, computer.board[row][i]);
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

  function bindEvents(element, row, x, player, computer, value) {
    if (value === 0 || typeof value === "object") {
      element.addEventListener("click", () =>
        game.attackComputer(row, x, player, computer)
      );
    }
  }

  function resetBoard(cssClass) {
    const board = document.querySelectorAll(cssClass);
    board.forEach((element) => {
      element.remove();
    });
  }

  return { printBoard, printComputerBoard, resetBoard };
})();
