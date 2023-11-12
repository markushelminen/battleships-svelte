<script>
    import ComputerCell from "./ComputerCell.svelte";
    import { makeEmptyGrid } from "./InitService";

    $: grid = makeEmptyGrid();
</script>

<div class="grid">
    {#each grid as cell}
        <ComputerCell {cell} />
    {/each}
</div>

<style>
    .grid {
        border-radius: 5em;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }
</style>
