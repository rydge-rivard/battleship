export { Ship, Gameboard, Player };

function Ship(length, hits, sunk) {
  function hit() {
    this.hits++;
    return this;
  }

  function isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
      return this;
    }
    return this;
  }

  return { length, hits, sunk, hit, isSunk };
}

function Gameboard(
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
  row7,
  row8,
  row9,
  row10,
  ships
) {
  row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  row10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ships = [];

  function placeShipH(ship, row, xPosition) {
    if (row.length - xPosition < ship.length) {
      return this;
    } else if (checkShipsH(ship, row, xPosition)) {
      return this;
    } else {
      for (let i = 0; i < ship.length; i++) {
        row[xPosition] = ship;
        xPosition++;
      }
      this.ships.push(ship);
      return this;
    }
  }

  function checkShipsH(ship, row, xPosition) {
    for (let i = 0; i < ship.length; i++) {
      if (row[xPosition] === 0) {
        return false;
      } else return true;
    }
  }

  function placeShipV(ship, startRow, xPosition) {
    let j = 100;
    const firstRow = Object.keys(this)[startRow];
    if (startRow + ship.length > 10) {
      return this;
    } else if (checkShipsV(ship, xPosition, this, j, firstRow)) {
      return this;
    } else {
      for (const key in this) {
        if (key == firstRow) {
          j = 0;
          this[key][xPosition] = ship;
          j++;
        } else if (j < ship.length) {
          this[key][xPosition] = ship;
          j++;
        }
      }
      this.ships.push(ship);
      return this;
    }
  }

  function checkShipsV(ship, xPosition, board, j, firstRow) {
    let conflict = false;
    for (const key in board) {
      if (key == firstRow && board[key][xPosition] !== 0) {
        j = 0;
        conflict = true;
        break;
      } else if (j < ship.length && board[key][xPosition] !== 0) {
        conflict = true;
        break;
      } else {
      }
    }
    return conflict;
  }

  function receiveAttack(x, row) {
    row = checkAttackRow(this, row);
    if (row[x] === 0) {
      row[x] = "o";
      return this;
    } else if (typeof row[x] === "object") {
      const ship = row[x];
      ship.hit();
      row[x] = "x";
      return this;
    } else {
      return this;
    }
  }

  function checkAttackRow(board, row) {
    if (typeof row === "string") {
      let objectKey;
      for (const key in board) {
        if (key == row) {
          objectKey = board[key];
        }
      }
      return objectKey;
    }
    return row;
  }

  function gameOver() {
    let isGameOver = true;
    this.ships.forEach((ship) => {
      ship.isSunk();
      if (ship.sunk === false) {
        isGameOver = false;
      }
    });
    console.log(this);
    return isGameOver;
  }

  return {
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
    ships,
    placeShipH,
    placeShipV,
    receiveAttack,
    gameOver,
  };
}

function Player(name, board, isTurn) {
  function attack(opponent, row, x) {
    if (this.name === "Computer") {
      x = Math.floor(Math.random() * 10);
      row = randomRow(opponent.board);
      opponent.board.receiveAttack(x, row);
    } else {
      opponent.board.receiveAttack(x, row);
      opponent.attack(this);
    }
    this.isTurn = false;
    opponent.isTurn = true;
    return opponent;
  }

  function randomRow(board) {
    let keys = Object.keys(board);
    return keys[(10 * Math.random()) << 0];
  }

  return { name, board, isTurn, attack };
}

function GameController() {}
