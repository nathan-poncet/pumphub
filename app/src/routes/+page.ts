import { pb } from '$lib/pocketbase';
import { Collections, type PostsResponse } from '../pocketbase-types';
import type { PageLoad } from './$types';

export const load: PageLoad = (async () => {
	const posts = await pb.collection(Collections.Posts).getFullList<PostsResponse>();
	
	return { posts };
}) satisfies PageLoad;
