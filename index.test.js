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
