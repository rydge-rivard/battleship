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

modDOM.printBoard(player1.board);
modDOM.printComputerBoard(player2, player1);
