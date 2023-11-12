<script>
    import ComputerGrid from "./ComputerGrid.svelte";
    import PlayerGrid from "./PlayerGrid.svelte";
    let vertical = false;
    let started = false;
    let restart;

    function canStart(event) {
        console.log(event);
        if (event.detail) {
            started = true;
        }
    }
    function reset() {
        console.log("reset");
        started = false;
        restart();
    }
</script>

<div class="container">
    <section>
        <h2>Player</h2>
        <PlayerGrid bind:restart {vertical} {started} on:start={canStart} />
    </section>
    <section class="middle-column">
        {#if started}
            <button class="reset" on:click={reset}>Reset</button>
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
        <ComputerGrid started bind:restart />
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

    .reset {
        background-color: red;
    }
</style>
