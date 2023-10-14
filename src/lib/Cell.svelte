<script>
  export let cell;
</script>

<div class="cell">
  <p>{cell.boat ? 1 : 0} {cell.clicked ? 1 : 0}</p>
  <strong>{cell.number}</strong>
</div>

<style>
  p {
    text-align: center;
  }
  .cell {
    background-color: #dfdfdf;
    width: 50px;
  }
</style>
