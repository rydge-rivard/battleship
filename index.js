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

  return { row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 };
}
