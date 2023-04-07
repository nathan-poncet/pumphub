import { writable } from 'svelte/store';
import type { ActivitiesResponse } from '../../../../pocketbase-types';

export const activities = writable<ActivitiesResponse[]>([]);