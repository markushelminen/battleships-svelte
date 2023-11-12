import { boats, makeEmptyGrid } from "./InitService";

/** @typedef {{number: number; boat: boolean; clicked: boolean; hover: boolean}[]} Grid */

export function getEnemyFleet() {
    let enemyGrid = makeEmptyGrid();

    for (let i = 0; i < boats.length; i++) {
        enemyGrid = placeBoat(boats[boats.length - 1 - i], enemyGrid);
    }

    return enemyGrid;
}

/**
 * @param {{ name?: string; size: any; vertical: any; }} boat
 * @param {Grid} grid
 */
function placeBoat(boat, grid) {
    boat.vertical = Math.random() > 0.5 ? true : false;
    const cellNumber = randomCell(boat, grid);

    if (boat.vertical) {
        for (let i = 0; i < boat.size; i++) {
            grid[cellNumber + i * 10].boat = true;
        }
    } else {
        for (let i = 0; i < boat.size; i++) {
            grid[cellNumber + i].boat = true;
        }
    }
    return grid;
}
/**
 * @param {{ vertical: any; size: number; }} boat
 * @param {Grid} grid
 */
function randomCell(boat, grid) {
    let illegalPlacement = true;
    let randomCellNumber = 0;
    while (illegalPlacement) {
        randomCellNumber = randomIntFromInterval(1, 99);
        if (boat.vertical) {
            if (randomCellNumber + (boat.size - 1) * 10 < 99) {
                for (let j = 0; j < boat.size; j++) {
                    if (randomCellNumber + 10 * j <= 99) {
                        if (grid[randomCellNumber + j * 10].boat === false) {
                            illegalPlacement = false;
                        } else {
                            illegalPlacement = true;
                            break;
                        }
                    }
                }
            }
        } else {
            if (randomCellNumber + boat.size - 1 <= 99) {
                if ((randomCellNumber + boat.size - 1) % 10 > boat.size) {
                    for (let k = 0; k < boat.size; k++) {
                        if (grid[randomCellNumber + k].boat === false) {
                            illegalPlacement = false;
                        } else {
                            illegalPlacement = true;
                            break;
                        }
                    }
                }
            }
        }
    }
    return randomCellNumber;
}

/**
 * @param {number} min
 * @param {number} max
 */
export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
