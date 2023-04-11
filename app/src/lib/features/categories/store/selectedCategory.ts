import { writable } from 'svelte/store';
import type { CategoriesResponse } from '../../../../pocketbase-types';

export const selectedCategory = writable<CategoriesResponse | null>(null);
