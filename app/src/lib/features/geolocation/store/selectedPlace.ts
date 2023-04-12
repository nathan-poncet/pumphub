import { writable } from 'svelte/store';

export const selectedPlace = writable<unknown | null>(null);
