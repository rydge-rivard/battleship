export { modDOM };

const modDOM = (function () {
  const body = document.querySelector("body");
  const board1 = body.querySelector(".board-1");

  function test() {
    return console.log("test");
  }

  function printBoard(board) {
    for (const row in board) {
      if (typeof board[row] === "object" && row.includes("row"))
        board[row].forEach((square) => {
          const div = document.createElement("div");
          board1.appendChild(div);
        });
    }
  }

  return { test, printBoard };
})();
