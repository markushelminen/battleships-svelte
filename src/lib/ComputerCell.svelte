<script>
    export let cell;
    export let started;
</script>

<div class="cell" class:bg-boat={cell.boat}>
    <p>{cell.boat ? 1 : 0} {cell.clicked ? 1 : 0}</p>
    <strong>{cell.number}</strong>
</div>

<style>
    p {
        text-align: center;
    }
    .cell {
        background-color: whitesmoke;
        width: 50px;
    }
    .cell:hover {
        background-color: coral;
        cursor: pointer;
    }
    .bg-boat {
        background-color: #dfdfdf;
    }
</style>
