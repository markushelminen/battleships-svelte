<script>
    import { createEventDispatcher } from "svelte";

    export let cell;

    const dispatch = createEventDispatcher();

    function handleKeydown(event) {
        if (event.key === "Enter") {
            placeBoat();
        }
    }

    function placeBoat() {
        dispatch("addboat", { cell });
    }

    function handleMouseEnter() {
        dispatch("showboat", {
            cell,
        });
    }

    function handleMouseLeave() {
        dispatch("hideboat", {
            cell,
        });
    }
</script>

<div
    role="cell"
    tabindex="0"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:keydown={handleKeydown}
    on:click={placeBoat}
    class="cell"
    class:bg-hover={cell.hover && !cell.boat}
    class:bg-boat={cell.boat}
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

    .bg-boat {
        background-color: #dfdfdf;
    }

    .bg-hover {
        background-color: coral;
        cursor: pointer;
    }
</style>
