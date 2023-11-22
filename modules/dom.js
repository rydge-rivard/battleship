export { modDOM };

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");

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

  function bindEvents(element, row, x) {
    element.addEventListener("click", () => console.log(`(${row}, ${x})`));
  }

  function printComputerBoard(board, location) {
    for (const row in board) {
      if (typeof board[row] === "object" && row.includes("row"))
        for (let i = 0; i < board[row].length; i++) {
          const div = document.createElement("div");
          location.appendChild(div);
          bindEvents(div, row, i);
        }
    }
  }

  return { test, printBoard, printComputerBoard };
})();
