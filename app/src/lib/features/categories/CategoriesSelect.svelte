<script lang="ts">
	import { getImageURL } from '$lib/utils/getImageURL';
	import { onDestroy } from 'svelte';
	import { categories } from './store/categories';
	import { selectedCategory } from './store/selectedCategory';

	let input: string = '';
	let isFocus = false;

	const unsubscribeSelectedCategory = selectedCategory.subscribe((value) => {
		if (value != null) return;
		input = '';
	});

	onDestroy(() => {
		unsubscribeSelectedCategory();
	});
</script>

<label for="categorySearch" class="label pt-0">
	<span class="label-text">Category</span>
</label>
<input
	type="text"
	name="categorySearch"
	id="categorySearch"
	class="input w-full"
	placeholder="Break Dance"
	bind:value={input}
	on:focus={() => (isFocus = true)}
	on:blur={() => {
		isFocus = false;
		input = $selectedCategory?.title ?? '';
	}}
/>

<div
	class="mt-0 max-h-0 overflow-y-auto rounded-md bg-white transition-all duration-500 ease-out"
	class:max-h-80={isFocus}
	class:mt-5={isFocus}
>
	<ul class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each $categories as category}
			<li>
				<button
					class="w-full overflow-hidden rounded-full border px-6 py-6 text-left text-white shadow sm:px-6"
					style="background-image: url('{getImageURL(
						category.collectionId,
						category.id,
						category.image ?? ''
					)}'); background-size: cover;"
					on:focus={() => (isFocus = true)}
					on:blur={() => (isFocus = false)}
					on:click={() => {
						isFocus = false;
						input = category.title ?? '';
						selectedCategory.set(category);
					}}
				>
					<span class="text-xl font-semibold">
						{category.title}
					</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
