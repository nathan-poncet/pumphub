<script lang="ts">
	import Hero from '$lib/features/global/Hero.svelte';
	import PostCard from '$lib/features/posts/PostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="-mt-20 w-full">
	<Hero />
	<div class="my-40" />

	<h2 class="text-3xl font-bold">All our activities</h2>
	<div class="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</div>

	<div class="my-40" />
</div>
