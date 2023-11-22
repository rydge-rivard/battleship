export { modDOM };

const modDOM = (function () {
  function test() {
    return console.log("test");
  }

  return { test };
})();
