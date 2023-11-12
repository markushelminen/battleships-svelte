<script>
    import { onDestroy } from "svelte";
    import { shootPlayer } from "./AIFireService";
    import ComputerCell from "./ComputerCell.svelte";
    import { getEnemyFleet } from "./ComputerService";
    import { computerGrid } from "./stores";

    export let started;

    export function reset() {
        console.log("restart");
        computerGrid.set(getEnemyFleet());
    }

    function onFire() {
        shootPlayer();
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
