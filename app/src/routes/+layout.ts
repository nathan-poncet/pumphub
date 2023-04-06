import { pb } from '$lib/pocketbase';
import { type CategoriesResponse, Collections, type ActivitiesResponse } from '../pocketbase-types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = (async () => {
	return {
		categories: await pb.collection(Collections.Categories).getFullList<CategoriesResponse>(),
		activities: await pb.collection(Collections.Activities).getFullList<ActivitiesResponse>()
	};
}) satisfies LayoutLoad;
