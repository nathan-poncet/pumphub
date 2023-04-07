<script lang="ts">
	import { getImageURL } from '$lib/utils/getImageURL';
	import { categories } from '../global/store/categories';

	let input: string = '';
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
	/>
</div>
<div class="my-5" />
<div class="overflow-hidden rounded-md bg-white">
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<ul role="list" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
		{#each $categories as category}
			<li
				class="w-full overflow-hidden rounded-full border bg-white px-6 py-6 text-white shadow sm:px-6"
				style="background-image: url('{getImageURL(
					category.collectionId,
					category.id,
					category.image ?? ''
				)}'); background-size: cover;"
			>
				<span class="text-xl">
					{category.title}
				</span>
			</li>
		{/each}
	</ul>
</div>
