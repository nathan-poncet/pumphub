import { writable } from 'svelte/store';

export const selectedPlace = writable<{place_name: string} | null>(null);
