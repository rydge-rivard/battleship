import { Ship, Gameboard, Player } from "./game.js";
import { modDOM } from "./dom.js";
import { modModal } from "./modal.js";
export { game };

const game = (function () {
  const player1 = Player("Rydge", Gameboard(), false);
  const player2 = Player("Computer", Gameboard(), true);

  const ship5a = Ship(5, 0, false);
  const ship3a = Ship(3, 0, false);

  const ship5b = Ship(5, 0, false);
  const ship2b = Ship(2, 0, false);
  const ship3b = Ship(3, 0, false);
  const ship4b = Ship(4, 0, false);

  player1.board.placeShipH(ship5a, player1.board.row7, 5);
  player1.board.placeShipH(ship3a, player1.board.row9, 3);

  player2.board.placeShipH(ship5b, player2.board.row1, 3);
  player2.board.placeShipH(ship2b, player2.board.row2, 4);
  player2.board.placeShipH(ship3b, player2.board.row4, 6);
  player2.board.placeShipH(ship4b, player2.board.row10, 0);

  function checkWinner() {
    if (player1.board.gameOver()) {
      alert("The computer has sunk your battleships, you lose.");
    } else if (player2.board.gameOver()) {
      alert("Congratulations, you win!");
    }
  }

  function attackComputer(row, x, player, computer) {
    player.attack(computer, row, x);
    modDOM.resetBoard(".board-2 div");
    modDOM.resetBoard(".board-1 div");
    modDOM.printBoard(player);
    modDOM.printComputerBoard(computer, player);
    checkWinner();
  }
  return { checkWinner, attackComputer, player1, player2 };
})();
