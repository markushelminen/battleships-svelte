<script>
    import { createEventDispatcher } from "svelte";
    import { computerCellToShoot } from "./AIFireService";
    import ComputerCell from "./ComputerCell.svelte";
    import { getEnemyFleet } from "./ComputerService";
    import { computerGrid, playerGrid } from "./stores";

    export let started;
    const dispatch = createEventDispatcher();

    let computerFiredShots = [];
    let toFireList = [];

    export function reset() {
        console.log("restart");
        computerGrid.set(getEnemyFleet());
    }

    function onFire() {
        /*if (orientationCounter === 0 && lastShotLandedCount === 0) {
            firstBoatCell = -1;
        }
        let firedCellNumber = -1;
        [firedCellNumber, orientationCounter] = computerCellToShoot(
            $playerGrid,
            lastShotLandedCount,
            lastShotCell,
            firstBoatCell,
            orientationCounter
        );

        */
        let firedCellNumber = -1;
        console.log(toFireList);
        [firedCellNumber, toFireList] = computerCellToShoot(
            $playerGrid,
            toFireList
        );
        console.log("Number: " + firedCellNumber);

        playerGrid.update((grid) => {
            grid[firedCellNumber].clicked = true;
            return grid;
        });

        // Add boat neighbors to the list of potential boats
        if ($playerGrid[firedCellNumber].boat === true) {
            toFireList.push(firedCellNumber + 1);
            toFireList.push(firedCellNumber - 1);
            toFireList.push(firedCellNumber + 10);
            toFireList.push(firedCellNumber - 10);
        }
        computerFiredShots.push(firedCellNumber);
        dispatch("isgameover");
    }
</script>

<div class="grid">
    {#each $computerGrid as cell (cell.number)}
        <ComputerCell on:fire={onFire} {started} {cell} />
    {/each}
</div>

<style>
    .grid {
        border-radius: 5em;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
