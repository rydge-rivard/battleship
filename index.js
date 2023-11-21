export { Ship, Gameboard };

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
  row10
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

  function placeShipH(ship, row, xPosition) {
    if (row.length - xPosition < ship.length) {
      return this;
    } else if (checkShips(ship, row, xPosition)) {
      return this;
    } else {
      for (let i = 0; i < ship.length; i++) {
        row[xPosition] = 1;
        xPosition++;
      }
      return this;
    }
  }

  function checkShips(ship, row, xPosition) {
    for (let i = 0; i < ship.length; i++) {
      if (row[xPosition] === 0) {
        return false;
      } else return true;
    }
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
    placeShipH,
  };
}
