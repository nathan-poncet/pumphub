<script lang="ts">
	import { getImageURL } from '$lib/utils/getImageURL';
	import { onDestroy } from 'svelte';
	import { selectedCategory } from '../categories/store/selectedCategory';
	import { activities } from './store/activities';
	import { selectedActivity } from './store/selectedActivity';
	import { categories } from '../categories/store/categories';

	let input: string = '';
	let isFocus = false;

	const unsubscribeSelectedCategory = selectedCategory.subscribe((value) => {
		if (value?.id === $selectedActivity?.category) return;
		selectedActivity.set(null);
	});

	const unsubscribeSelectedActivity = selectedActivity.subscribe((value) => {
		if (value != null) return;
		input = '';
	});

	onDestroy(() => {
		unsubscribeSelectedCategory();
		unsubscribeSelectedActivity();
	});
</script>

<label for="activitySearch" class="label pt-0">
	<span class="label-text">Activity</span>
</label>
<input
	type="text"
	name="activitySearch"
	id="activitySearch"
	class="input w-full"
	placeholder="Dance"
	bind:value={input}
	on:focus={() => (isFocus = true)}
	on:blur={() => {
		isFocus = false;
		input = $selectedActivity?.title ?? '';
	}}
/>

<div
	class="mt-0 max-h-0 overflow-y-auto rounded-md bg-white transition-all duration-500 ease-out"
	class:max-h-80={isFocus}
	class:mt-5={isFocus}
>
	<div class="my-5" />
	<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each $activities.filter((activity) => activity.category === ($selectedCategory?.id || activity.category)) as activity}
			<li>
				<button
					class="w-full overflow-hidden rounded-full border px-6 py-6 text-left text-white shadow sm:px-6"
					style="background-image: url('{getImageURL(
						activity.collectionId,
						activity.id,
						activity.image ?? ''
					)}'); background-size: cover;"
					on:focus={() => (isFocus = true)}
					on:blur={() => (isFocus = false)}
					on:click={() => {
						isFocus = false;
						input = activity.title ?? '';
						selectedActivity.set(activity);
						selectedCategory.set(
							$categories.find((category) => category.id === activity.category) ?? null
						);
					}}
				>
					<span class="text-xl font-semibold">
						{activity.title}
					</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
