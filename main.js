import { modDOM } from "./modules/dom.js";
import { game } from "./modules/controller.js";
import { Ship, Gameboard, Player } from "./modules/game.js";
import { modModal } from "./modules/modal.js";

modDOM.printBoard(game.player1, modModal.modalCont);
modModal.showModal();
