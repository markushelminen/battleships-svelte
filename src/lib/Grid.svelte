<script>
  import Cell from "./Cell.svelte";

  export let computer = false;
  export let grid = [];
</script>

<div class="grid">
  {#each grid as cell}
    <Cell {cell} />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
</style>
