<script>
    import { boats, makeEmptyGrid } from "./InitService";
    import { createEventDispatcher } from "svelte";
    import PlayerCell from "./PlayerCell.svelte";
    export let started;
    export let vertical;
    let boatCounter = boats.length - 1;
    //let grid = makeEmptyGrid();
    const dispatch = createEventDispatcher();

    let grid = makeEmptyGrid();

    function addBoatWrapper(event) {
        addBoat(event.detail.cell);
    }
    function showBoatWrapper(event) {
        showBoat(event.detail.cell);
    }
    function hideBoatWrapper(event) {
        hideBoat(event.detail.cell);
    }

    /**
     * @param {{ number: any; boat: any; clicked?: boolean; hover?: boolean; }} cell
     */
    function addBoat(cell) {
        if (started) return;
        if (boatCounter === -1) return;
        if (cell.boat) return;
        const boat = boats[boatCounter];
        const boatIndexes = [];

        for (let i = 0; i < boat.size; i++) {
            if (vertical) {
                if (cell.number + 10 * (boat.size - 1) > 99) return;
                if (grid[cell.number + 10 * i].boat) return;
                boatIndexes.push(cell.number + 10 * i);
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                if (grid[cell.number + i].boat) return;
                boatIndexes.push(cell.number + i);
            }
        }
        addBoatsToGrid(boatIndexes);
        boatCounter--;
        if (boatCounter === -1) dispatch("start", true);
    }

    /**
     * @param {any[]} boatIndexes
     */
    function addBoatsToGrid(boatIndexes) {
        for (let i of boatIndexes) {
            grid[i].boat = true;
        }
    }

    /**
     * @param {{ number: any; boat?: boolean; clicked?: boolean; hover: any; }} cell
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
                grid[index].hover = true;
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                grid[cell.number + i].hover = true;
            }
        }
        grid = grid;
    }

    function hideBoat(cell) {
        if (started) return;
        if (boatCounter === -1) return;
        const boat = boats[boatCounter];
        for (let i = 0; i < boat.size; i++) {
            if (vertical) {
                if (cell.number + 10 * (boat.size - 1) > 99) return;
                const index = cell.number + 10 * i;
                grid[index].hover = false;
            } else {
                if (cell.number % 10 > 10 - boat.size) return;
                grid[cell.number + i].hover = false;
            }
        }
        grid = grid;
    }
</script>

<div class="grid">
    {#each grid as cell (cell.number)}
        <PlayerCell on:addboat={addBoatWrapper} on:hideboat={hideBoatWrapper} on:showboat={showBoatWrapper} bind:cell />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
