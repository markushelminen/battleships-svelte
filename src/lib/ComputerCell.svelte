<script>
    import { createEventDispatcher } from "svelte";

    export let cell;
    export let started;

    const dispatch = createEventDispatcher();

    function handleKeyDown(event) {
        if ((event.key = "Enter")) {
            handleClick();
        }
    }

    function handleClick() {
        dispatch("fire", { cell });
    }
</script>

<div
    class="cell"
    tabindex="0"
    role="cell"
    on:keydown={handleKeyDown}
    on:click={handleClick}
    class:bg-boat={cell.boat}
    class:bg-hover={started}
>
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
    .bg-hover:hover {
        background-color: coral;
        cursor: pointer;
    }
    .bg-boat {
        background-color: #dfdfdf;
    }
</style>
