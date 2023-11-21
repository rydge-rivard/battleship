import { Ship, Gameboard } from "./index.js";

test("create Ship obj from constructor", () => {
  expect(Ship(5, 0, false)).toMatchObject({
    length: 5,
    hits: 0,
    sunk: false,
  });
});

// const ship = Ship(5, 0, false);

test("hit function increments hit value by 1", () => {
  expect(Ship(5, 0, false).hit()).toMatchObject({
    length: 5,
    hits: 1,
    sunk: false,
  });
});

test("is the ship sunk", () => {
  expect(Ship(5, 5, false).isSunk()).toMatchObject({
    length: 5,
    hits: 5,
    sunk: true,
  });
});

test("is the ship sunk when already sunk", () => {
  expect(Ship(5, 5, true).isSunk()).toMatchObject({
    length: 5,
    hits: 5,
    sunk: true,
  });
});

test("is the ship sunk when not sunk", () => {
  expect(Ship(5, 4, false).isSunk()).toMatchObject({
    length: 5,
    hits: 4,
    sunk: false,
  });
});

test("create 10x10 gameboard", () => {
  expect(Gameboard()).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship horizontal on row 5", () => {
  const board = Gameboard();
  expect(board.placeShipH(Ship(5, 0, false), board.row5, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship horizontal on row from third array position", () => {
  const board = Gameboard();
  expect(board.placeShipH(Ship(5, 0, false), board.row5, 3)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

// test("place ship vertically", () => {
//   expect(Gameboard().placeShip("v", Ship(5, 0, false))).toMatchObject({
//     row1: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row2: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row3: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row4: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row5: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   });
// });
