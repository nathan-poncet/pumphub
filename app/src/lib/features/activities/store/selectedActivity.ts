import { writable } from 'svelte/store';
import type { ActivitiesResponse } from '../../../../pocketbase-types';

export const selectedActivity = writable<ActivitiesResponse | null>(null);
