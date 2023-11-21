// import {} from "./index.js";

test("create Ship obj from constructor", () => {
  expect(Ship(5, 0, false)).toEqual({
    length: 5,
    hit: 0,
    sunk: false,
  });
});

test("hit function increments hit value by 1", () => {
  expect(Ship(5, 0, false).hit()).toEqual({
    length: 5,
    hit: 1,
    sunk: false,
  });
});
