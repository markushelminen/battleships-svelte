<script>
    import { boats, makeEmptyGrid } from "./InitService";
    import { createEventDispatcher } from "svelte";
    import PlayerCell from "./PlayerCell.svelte";
    import { playerGrid } from "./stores";
    export let started;
    export let vertical;
    let boatCounter = boats.length - 1;
    const dispatch = createEventDispatcher();

    export function reset() {
        playerGrid.set(makeEmptyGrid());
        boatCounter = boats.length - 1;
    }
    function addBoatWrapper(event) {
        addBoat(event.detail.cell);
    }
    function showBoatWrapper(event) {
        showBoat(event.detail.cell);
    }
    function hideBoatWrapper(event) {
        hideBoat(event.detail.cell);
    }

    /** @typedef {{number: number; boat: boolean; clicked: boolean; hover: boolean}} Cell */

    /**
     * @param { Cell } cell
     */
    function addBoat(cell) {
        console.log(`started: ${started}, boatcounter: ${boatCounter}`);
        if (started) return;
        if (boatCounter === -1) return;
        if (cell.boat) return;
        const boat = boats[boatCounter];
        const boatIndexes = [];

        for (let i = 0; i < boat.size; i++) {
            if (vertical) {
                if (cell.number + 10 * (boat.size - 1) > 99) return;
                if ($playerGrid[cell.number + 10 * i].boat) return;
                boatIndexes.push(cell.number + 10 * i);
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                if ($playerGrid[cell.number + i].boat) return;
                boatIndexes.push(cell.number + i);
            }
        }
        addBoatsToGrid(boatIndexes);
        boatCounter--;
        if (boatCounter === -1) dispatch("start", true);
    }

    /**
     * @param {number[]} boatIndexes
     */
    function addBoatsToGrid(boatIndexes) {
        for (let i of boatIndexes) {
            playerGrid.update((grid) => {
                grid[i].boat = true;
                return grid;
            });
        }
    }

    /**
     * @param {Cell} cell
     */
    function showBoat(cell) {
        if (started) return;
        if (cell.boat) return;
        if (boatCounter === -1) return;
        const boat = boats[boatCounter];
        for (let i = 0; i < boat.size; i++) {
            if (vertical) {
                if (cell.number + 10 * (boat.size - 1) > 99) return;
                const index = cell.number + 10 * i;
                playerGrid.update((grid) => {
                    grid[index].hover = true;
                    return grid;
                });
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                playerGrid.update((grid) => {
                    grid[cell.number + i].hover = true;
                    return grid;
                });
            }
        }
    }

    /**
     * @param {{ number: number; }} cell
     */
    function hideBoat(cell) {
        if (started) return;
        if (boatCounter === -1) return;
        const boat = boats[boatCounter];
        for (let i = 0; i < boat.size; i++) {
            if (vertical) {
                if (cell.number + 10 * (boat.size - 1) > 99) return;
                const index = cell.number + 10 * i;
                playerGrid.update((grid) => {
                    grid[index].hover = false;
                    return grid;
                });
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                playerGrid.update((grid) => {
                    grid[cell.number + i].hover = false;
                    return grid;
                });
            }
        }
    }
</script>

<div class="grid">
    {#each $playerGrid as cell (cell.number)}
        <PlayerCell on:addboat={addBoatWrapper} on:hideboat={hideBoatWrapper} on:showboat={showBoatWrapper} bind:cell />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
