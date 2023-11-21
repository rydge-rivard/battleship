export { Ship };

function Ship(length, hits, sunk) {
  function hit() {
    this.hits++;
    return this;
  }

  return { length, hits, sunk, hit };
}
