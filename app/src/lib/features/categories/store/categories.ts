import { writable } from 'svelte/store';
import type { CategoriesResponse } from '../../../../pocketbase-types';

export const categories = writable<CategoriesResponse[]>([]);
