export function makeEmptyGrid() {
  let grid = [];
  for (let i = 0; i < 100; i++) {
    grid.push({
      number: i,
      boat: false,
      clicked: false,
      hover: false,
    });
  }
  return grid;
}
