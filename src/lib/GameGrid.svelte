<script>
  import Grid from "./Grid.svelte";
  import { makeEmptyGrid } from "./InitService";
  let playerGrid = makeEmptyGrid();
  let computerGrid = makeEmptyGrid();
</script>

<div class="container">
  <section>
    <h2>Player</h2>
    <Grid computer={false} grid={playerGrid} />
  </section>
  <section>
    <h2>Computer</h2>
    <Grid computer={true} grid={computerGrid} />
  </section>
</div>

<style>
  .container {
    display: flex;
    gap: 20px;
  }
</style>
