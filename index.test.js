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
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipH(ship5, board.row5, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, ship5, ship5, ship5, ship5, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship horizontal on row from third array position", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipH(ship5, board.row5, 3)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, ship5, ship5, ship5, ship5, ship5, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("prevent ship horizontal placement while too long for board", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipH(ship5, board.row5, 7)).toMatchObject({
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

test("prevent ship horizontal placement if space is already taken", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipH(ship5, board.row3, 0);
  expect(board.placeShipH(Ship(5, 0, false), board.row3, 3)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, ship5, ship5, ship5, ship5, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship horizontal beside other ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  const ship2 = Ship(2, 0, false);
  board.placeShipH(ship5, board.row3, 0);
  expect(board.placeShipH(ship2, board.row3, 6)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, ship5, ship5, ship5, ship5, 0, ship2, ship2, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship vertically on row 1 x position 0", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipV(ship5, 0, 0)).toMatchObject({
    row1: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship vertically starting on row 3 x position 0", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipV(ship5, 2, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship vertically starting on row 3 x position 5", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipV(ship5, 2, 5)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, ship5, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, ship5, 0, 0, 0, 0],
    row5: [0, 0, 0, 0, 0, ship5, 0, 0, 0, 0],
    row6: [0, 0, 0, 0, 0, ship5, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, ship5, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("prevent ship vertical placement while too long for board", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  expect(board.placeShipV(ship5, 7, 2)).toMatchObject({
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

test("prevent ship vertical placement if space is already taken", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipV(ship5, 1, 0);
  expect(board.placeShipV(Ship(5, 0, false), 4, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("place ship vertically beside other ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  const ship2 = Ship(2, 0, false);
  board.placeShipV(ship5, 1, 0);
  expect(board.placeShipV(ship2, 7, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [ship2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [ship2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("receiveAttack determines whether or not the attack hit a ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  const ship2 = Ship(2, 0, false);
  board.placeShipV(ship5, 1, 0);
  expect(board.placeShipV(ship2, 7, 0)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [ship2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [ship2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("receiveAttack determines if attack missed a ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipV(ship5, 2, 0);
  expect(board.receiveAttack(0, board.row2)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: ["o", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("receiveAttack determines if attack hit a ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipV(ship5, 2, 0);
  expect(board.receiveAttack(0, board.row3)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("receiveAttack determines if attack recorded hit on the ship", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipV(ship5, 2, 0);
  board.receiveAttack(0, board.row3);
  expect(ship5).toMatchObject({
    length: 5,
    hits: 1,
    sunk: false,
  });
});

test("receiveAttack determines if coords have already been attacked", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  board.placeShipV(ship5, 2, 0);
  board.receiveAttack(0, board.row3);
  expect(board.receiveAttack(0, board.row3)).toMatchObject({
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row5: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row7: [ship5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
});

test("add all ships to board array", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 0, false);
  const ship2 = Ship(2, 0, false);
  board.placeShipH(ship5, board.row3, 0);
  board.placeShipH(ship2, board.row4, 2);
  expect(board).toMatchObject({ ships: [ship5, ship2] });
});

test("determine if all ships are sunk on board", () => {
  const board = Gameboard();
  const ship5 = Ship(5, 5, true);
  const ship2 = Ship(2, 2, true);
  board.placeShipH(ship5, board.row3, 0);
  board.placeShipH(ship2, board.row4, 2);
  expect(board.gameOver()).toBe(true);
});
