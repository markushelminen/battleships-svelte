import { writable } from "svelte/store";
import { makeEmptyGrid } from "./InitService";
import { getEnemyFleet } from "./ComputerService";

export let playerGrid = writable(makeEmptyGrid());

export let computerGrid = writable(getEnemyFleet());
