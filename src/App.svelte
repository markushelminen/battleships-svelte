<script>
    import GameGrid from "./lib/GameGrid.svelte";
</script>

<main>
    <h1>Battle Ships</h1>
    <i>a thesis by Markus Helminen</i>
    <GameGrid />
    <div class="p-4" />
    <i>sourcecode available on <a href="https://github.com/markushelminen/battleships-svelte">github</a></i>
</main>

<style>
    .p-4 {
        padding: 24px;
    }
    a {
        font-weight: 500;
        color: #496ddb;
        text-decoration: inherit;
    }
    a:hover {
        color: #717ec3;
    }
</style>
