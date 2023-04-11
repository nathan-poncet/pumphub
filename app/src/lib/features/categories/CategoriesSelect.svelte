<script lang="ts">
	import { getImageURL } from '$lib/utils/getImageURL';
	import { categories } from './store/categories';
	import { selectedCategory } from './store/selectedCategory';

	let input: string = '';
	let isFocus = false;
</script>

<div
	class="rounded-md px-4 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
>
	<label for="categorySearch" class="block text-xs font-medium text-gray-900">Category</label>
	<input
		type="text"
		name="categorySearch"
		id="categorySearch"
		class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
		placeholder="Dance"
		bind:value={input}
		on:focus={() => (isFocus = true)}
		on:blur={() => {
			isFocus = false;
			input = $selectedCategory?.title ?? '';
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
		{#each $categories as category}
			<li>
				<button
					class="w-full overflow-hidden rounded-full border px-6 py-6 text-left text-white shadow sm:px-6"
					style="background-image: url('{getImageURL(
						category.collectionId,
						category.id,
						category.image ?? ''
					)}'); background-size: cover;"
					on:click={() => {
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
