import { Ship, Gameboard, Player } from "./game.js";
import { modDOM } from "./dom.js";
import { game } from "./controller.js";
export { modModal };

const modModal = (function () {
  const dialog = document.querySelector("dialog");
  const confirmBtn = dialog.querySelector("#confirm");
  const modalCont = dialog.querySelector(".modal-board");

  confirmBtn.addEventListener("click", () => confirmShipCoords());

  function showModal() {
    dialog.showModal();
  }

  function confirmShipCoords() {
    event.preventDefault();
    const row = dialog.querySelector("#row").value;
    const column = dialog.querySelector("#column").value;
    const direction = dialog.querySelector("#dir").value;

    if (direction === "h") {
      game.player1.board.placeShipH(Ship(5, 0, false), row, column);
    } else {
      game.player1.board.placeShipV(Ship(2, 0, false), 0, 8);
      console.log(game.player1.board);
    }
    dialog.close();
    modDOM.printBoth();
  }

  return {
    showModal,
    modalCont,
  };
})();
