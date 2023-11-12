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

export const boats = [
    {
        name: "patrol boat",
        size: 2,
        vertical: false,
    },
    {
        name: "submarine",
        size: 3,
        vertical: false,
    },
    {
        name: "destroyer",
        size: 3,
        vertical: false,
    },
    {
        name: "battleship",
        size: 4,
        vertical: false,
    },
    {
        name: "aircraft carrier",
        size: 5,
        vertical: false,
    },
];
