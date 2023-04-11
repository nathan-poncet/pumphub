<script lang="ts">
	import ActivitiesSelect from '$lib/features/activities/ActivitiesSelect.svelte';
	import CategoriesSelect from '$lib/features/categories/CategoriesSelect.svelte';
	import GeolocationPlacesAutocomplete from '$lib/features/geolocation/GeolocationPlacesAutocomplete.svelte';
	import MdSearch from 'svelte-icons/md/MdSearch.svelte';
	import { clickOutside } from 'svelte-use-click-outside';

	let categoryInput = '';
	let actityInput = '';
	let placeInput = '';

	let isMenuOpen = false;
</script>

<div
	class="relative z-50 flex justify-center"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
	use:clickOutside={() => (isMenuOpen = false)}
>
	<div class="flex h-full rounded-full border bg-white p-2">
		<button
			class="{categoryInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6 py-2"
			on:click={() => (isMenuOpen = true)}
		>
			{categoryInput || 'Category'}
		</button>
		<div class="mx-2 my-1 border-r-2" />
		<button
			class="{actityInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6 py-2"
			on:click={() => (isMenuOpen = true)}
		>
			{actityInput || 'Activity'}
		</button>
		<div class="mx-2 my-1 border-r-2" />
		<button
			class="{placeInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6 py-2"
			on:click={() => (isMenuOpen = true)}
		>
			{placeInput || 'Place'}
		</button>
		<div class="mx-2" />
		<button class="w-12 rounded-full bg-rose-500 p-2 text-white">
			<MdSearch />
		</button>
	</div>

	<!-- Backdrop -->
	<button
		class="{isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
	fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-out"
		on:click={() => (isMenuOpen = false)}
	/>

	<!-- Modal -->
	<div
		class="{isMenuOpen
			? 'translate-y-0 opacity-100 sm:scale-100'
			: 'pointer-events-none translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95'} fixed md:w-[80vw] md:max-w-5xl overflow-hidden rounded-lg bg-gray-50 p-4 shadow-xl transition-all duration-300 ease-out max-md:inset-0 sm:p-6 md:absolute md:top-full md:mt-6"
	>
		<h2 class="text-xl font-bold sm:text-2xl">Search your best sport !</h2>

		<div class="mt-6" />

		<div
			class="rounded-lg border bg-white p-4 shadow-xl transition-all duration-300 ease-out sm:p-6"
		>
			<CategoriesSelect />
		</div>
			<div class="mt-4" />
		<div
			class="rounded-lg border bg-white p-4 shadow-xl transition-all duration-300 ease-out sm:p-6"
		>
			<ActivitiesSelect />
		</div>
			<div class="mt-4" />
		<div
			class="rounded-lg border bg-white p-4 shadow-xl transition-all duration-300 ease-out sm:p-6"
		>
			<GeolocationPlacesAutocomplete />
		</div>
	</div>
</div>
