<script>
    import { createEventDispatcher } from "svelte";
    import { computerGrid } from "./stores";

    export let cell;
    export let started;

    const dispatch = createEventDispatcher();

    function handleKeyDown(event) {
        if ((event.key = "Enter")) {
            handleClick();
        }
    }

    function handleClick() {
        if (!started) return;
        computerGrid.update((grid) => {
            grid[cell.number].clicked = true;
            return grid;
        });
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
    class:bg-missed={cell.clicked && !cell.boat}
    class:bg-shot={cell.clicked && cell.boat}
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

    .bg-missed {
        background-color: #121212;
    }
    .bg-shot {
        background: url("data:image/svg+xml;utf-8, <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='black' stroke-width='3' /><path d='M0 0 L 100 100 ' stroke='black' stroke-width='3' /></svg>");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%, auto;
        background-color: lightcoral;
    }
</style>
