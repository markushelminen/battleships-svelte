import { randomIntFromInterval } from "./ComputerService";

export function computerCellToShoot(grid, shotsLanded, lastShotCell, firstBoatCell, orientationCounter) {
    console.log(
        `shots landed: ${shotsLanded}, last shot shell: ${lastShotCell}, first boat cell shot: ${firstBoatCell}, orientation counter: ${orientationCounter}`
    );
    let cellToShoot = 0;
    if (shotsLanded !== 0 || orientationCounter !== 0) {
        [cellToShoot, orientationCounter] = getNextOrientationCell(
            grid,
            lastShotCell,
            firstBoatCell,
            orientationCounter
        );
    } else {
        orientationCounter = 0;
        cellToShoot = randomCellToShoot(grid);
    }
    console.log(cellToShoot);
    return [cellToShoot, orientationCounter];
}

function randomCellToShoot(grid) {
    let cell = NaN;
    let shotValid = false;
    while (!shotValid) {
        cell = randomIntFromInterval(0, 99);
        // Computer shoots only everyother cell to be efficient
        if (cell % 2 === 0) cell + 1;
        if (grid[cell].clicked === false) {
            shotValid = true;
        }
    }
    console.log("random cell");

    return cell;
}

function getNextOrientationCell(grid, lastShotCell, firstBoatCell, orientationCounter) {
    let cell = NaN;
    switch (orientationCounter) {
        case 1:
            cell = lastShotCell - 10;
            break;
        case 2:
            cell = lastShotCell + 10;
            break;
        case 3:
            cell = lastShotCell - 1;
            break;
        case 4:
            cell = lastShotCell + 1;
            break;

        default:
            orientationCounter = 0;
            return [randomCellToShoot(grid), orientationCounter];
    }
    if (grid[cell] && grid[cell].clicked === false) {
        return [cell, orientationCounter];
    }
    orientationCounter++;
    return getNextOrientationCell(grid, lastShotCell, firstBoatCell, orientationCounter);
}

function shootRestOfTheBoat(grid, lastShotCell, firstBoatCell, orientationCounter) {
    let offset = getOffset(orientationCounter);
    if (grid[lastShotCell + offset] && grid[lastShotCell + offset].clicked == false) {
        return lastShotCell + offset;
    } else if (grid[lastShotCell + offset].clicked == true) {
        return shootRestOfTheBoat(grid, lastShotCell + offset, firstBoatCell, orientationCounter);
    } else {
        return 69;
    }
}

function getOffset(orientationCounter) {
    switch (orientationCounter) {
        case 1:
            return 10;
        case 2:
            return -10;
        case 3:
            return 1;
        case 4:
            return -1;
        default:
            return NaN;
    }
}
