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
    class:bg-missed={cell.clicked && !cell.boat}
    class:bg-shot={cell.clicked && cell.boat}
>
    <p>{cell.boat ? 1 : 0} {cell.clicked ? 1 : 0}</p>
    <strong>{cell.number}</strong>
</div>

<style>
    .cell {
        background-color: whitesmoke;
        width: 50px;
    }

    .bg-boat {
        background-color: lightcoral;
    }

    .bg-hover {
        background-color: coral;
        cursor: pointer;
    }
    .bg-missed {
        background-color: #121212;
    }
    .bg-shot {
        background: url("data:image/svg+xml;utf-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='black' stroke-width='3' /><path d='M0 0 L 100 100 ' stroke='black' stroke-width='3' /></svg>");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%, auto;
        background-color: #dfdfdf;
    }
    p {
        margin: 0px;
    }
</style>
