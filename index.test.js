import { Ship } from "./index.js";

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
