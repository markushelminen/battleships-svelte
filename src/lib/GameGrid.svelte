<script>
    import ComputerGrid from "./ComputerGrid.svelte";
    import PlayerGrid from "./PlayerGrid.svelte";
    let vertical = false;
    let started = false;

    function canStart(event) {
        if (event.detail.start) {
            console.log("start");
            started = true;
        }
    }
    function reset() {
        console.log("reset");

        started = false;
    }
</script>

<div class="container">
    <section>
        <h2>Player</h2>
        <PlayerGrid {vertical} {started} on:start={canStart} />
    </section>
    <section class="middle-column">
        {#if started}
            <button on:click={reset}>Reset</button>
        {:else}
            <button>Add boats</button>
        {/if}
        <div>
            <label for="vertical">Vertical</label>
            <input id="vertical" bind:checked={vertical} type="checkbox" />
        </div>
    </section>
    <section>
        <h2>Computer</h2>
        <ComputerGrid />
    </section>
</div>

<style>
    button {
        margin: 0.83em;
        height: 48px;
    }
    .container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
    }

    .middle-column {
        display: flex;
        flex-direction: column;
    }
</style>
