<script>
    import ComputerCell from "./ComputerCell.svelte";
    import { getEnemyFleet } from "./ComputerService";

    export let started;

    export const restart = () => {
        grid = getEnemyFleet();
    };
    let grid = getEnemyFleet();
</script>

<div class="grid">
    {#each grid as cell}
        <ComputerCell started {cell} />
    {/each}
</div>

<style>
    .grid {
        border-radius: 5em;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
