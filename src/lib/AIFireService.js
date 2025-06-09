import { randomIntFromInterval } from "./ComputerService";

export function computerCellToShoot(grid, toFireList) {
    let cellToShoot = 0;
    let newToFireList = [];
    if (toFireList.length !== 0) {
        [cellToShoot, newToFireList] = shootNextFromList(grid, toFireList);
    } else {
        cellToShoot = randomCellToShoot(grid);
    }
    console.log(cellToShoot);
    return [cellToShoot, newToFireList];
}

function randomCellToShoot(grid) {
    let cell = NaN;
    let shotValid = false;
    while (!shotValid) {
        cell = randomCellNumber();
        if (grid[cell].clicked === false) {
            shotValid = true;
        }
    }
    return cell;
}

function shootNextFromList(playerGrid, shootList) {
    let legalShot = false;
    let cellToShoot = shootList.shift();
    while (!legalShot) {
        if (
            cellToShoot >= 0 &&
            cellToShoot <= 99 &&
            playerGrid[cellToShoot] &&
            playerGrid[cellToShoot].clicked === false
        ) {
            legalShot = true;
        } else if (shootList.length === 0) {
            cellToShoot = randomCellToShoot(playerGrid);
        } else {
            cellToShoot = shootList.shift();
        }
    }

    return [cellToShoot, shootList];
}

function randomCellNumber() {
    const numbers = [
        1, 3, 5, 7, 9, 10, 12, 14, 16, 18, 21, 23, 25, 27, 29, 30, 32, 34, 36, 38, 41, 43, 45, 47, 49, 50, 52, 54, 56,
        58, 61, 63, 65, 67, 69, 70, 72, 74, 76, 78, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98,
    ];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    console.log(randomIndex);
    console.log(numbers[randomIndex]);
    return numbers[randomIndex];
}
