import { Ship, Gameboard, Player } from "./modules/game.js";
import { modDOM } from "./modules/dom.js";

const player1 = Player("Rydge", Gameboard(), false);
const player2 = Player("Computer", Gameboard(), true);
const board1 = document.querySelector(".board-1");
const board2 = document.querySelector(".board-2");

const ship5 = Ship(5, 0, false);
const ship2 = Ship(2, 0, false);

player1.board.placeShipH(ship5, player1.board.row3, 0);
player1.board.placeShipH(ship2, player1.board.row4, 2);

player2.board.placeShipH(ship5, player2.board.row10, 4);
player2.board.placeShipH(ship2, player2.board.row6, 0);

console.log(player1.board);
console.log(player2.board);

modDOM.printBoard(player1.board, board1);
modDOM.printComputerBoard(player2.board, board2);
