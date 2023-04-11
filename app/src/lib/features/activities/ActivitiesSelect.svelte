<script lang="ts">
	import { getImageURL } from '$lib/utils/getImageURL';
	import { onDestroy } from 'svelte';
	import { selectedCategory } from '../categories/store/selectedCategory';
	import { activities } from './store/activities';
	import { selectedActivity } from './store/selectedActivity';

	let input: string = '';
	let isFocus = false;

	const unsubscribeSelectedCategory = selectedCategory.subscribe((_) => {
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

<div
	class="rounded-md px-4 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
>
	<label for="activitySearch" class="block text-xs font-medium text-gray-900">Activity</label>
	<input
		type="text"
		name="activitySearch"
		id="activitySearch"
		class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
		placeholder="Dance"
		bind:value={input}
		on:focus={() => (isFocus = true)}
		on:blur={() => {
			isFocus = false;
			input = $selectedActivity?.title ?? '';
		}}
	/>
</div>
<div
	class="{isFocus
		? 'max-h-80'
		: 'max-h-0'} overflow-y-auto rounded-md bg-white transition-all duration-300 ease-out"
>
	<div class="my-5" />
	<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each $activities.filter((activity) => activity.category === $selectedCategory?.id) as activity}
			<li>
				<button
					class="w-full overflow-hidden rounded-full border px-6 py-6 text-left text-white shadow sm:px-6"
					style="background-image: url('{getImageURL(
						activity.collectionId,
						activity.id,
						activity.image ?? ''
					)}'); background-size: cover;"
					on:click={() => {
						input = activity.title ?? '';
						selectedActivity.set(activity);
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
