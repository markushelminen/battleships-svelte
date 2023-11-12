<script>
    import ComputerGrid from "./ComputerGrid.svelte";
    import PlayerGrid from "./PlayerGrid.svelte";
    import { playerGrid, computerGrid } from "./stores";
    let vertical = false;
    let started = false;
    let player_reset;
    let computer_reset;

    function canStart(event) {
        console.log(event);
        if (event.detail) {
            started = true;
        }
    }
    function reset() {
        console.log("reset");
        started = false;
        player_reset();
        computer_reset();
    }

    function checkForWinner() {
        let playerCounter = 0;
        let computerCounter = 0;
        for (let cell of $playerGrid) {
            if (cell.clicked && cell.boat) {
                playerCounter++;
            }
        }
        for (let cell of $computerGrid) {
            if (cell.clicked && cell.boat) {
                computerCounter++;
            }
        }
        if (playerCounter === 17) {
            alert("Computer Won :(");
            reset();
        }
        if (computerCounter === 17) {
            alert("You Won!!!!");
            reset();
        }
    }
</script>

<div class="container">
    <section>
        <div class="player-row">
            <div class="w-5" />
            <h2>Player</h2>
            <div class="vertical">
                <label for="vertical">Vertical</label>
                <input id="vertical" bind:checked={vertical} type="checkbox" />
            </div>
        </div>
        <PlayerGrid bind:reset={player_reset} {vertical} {started} on:start={canStart} />
    </section>
    <section class="middle-column">
        {#if started}
            <button class="reset" on:click={reset}>Reset</button>
        {:else}
            <p>Add boats</p>
        {/if}
    </section>
    <section>
        <h2>Computer</h2>
        <ComputerGrid {started} on:isgameover={checkForWinner} bind:reset={computer_reset} />
    </section>
</div>

<style>
    .container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }

    .player-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .vertical {
        width: 5rem;
    }

    .middle-column {
        display: flex;
        flex-direction: column;
        width: 10rem;
        & p {
            padding-top: 0.5rem;
            font-size: 1em;
            color: white;
            background-color: #15616d;
            border-radius: 8px;
            padding: 0.6em 1.2em;
            margin: 0.83em;
        }
    }

    .w-5 {
        width: 5rem;
    }

    .reset {
        background-color: red;
    }

    button {
        margin: 0.83em;
        height: 48px;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        background-color: #15616d;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover,
    p:hover {
        border-color: #00243d;
    }
    button:focus,
    button:focus-visible,
    p:focus,
    p:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
