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
	class="relative z-50"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
	use:clickOutside={() => (isMenuOpen = false)}
>
	<div class="flex rounded-full border bg-white p-2">
		<button
			class="{categoryInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6"
			on:click={() => (isMenuOpen = true)}
		>
			{categoryInput || 'Category'}
		</button>
		<div class="mx-2 my-1 border-r-2" />
		<button
			class="{actityInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6"
			on:click={() => (isMenuOpen = true)}
		>
			{actityInput || 'Activity'}
		</button>
		<div class="mx-2 my-1 border-r-2" />
		<button
			class="{placeInput ? 'text-gray-900' : 'text-gray-500'} flex flex-1 items-center px-6"
			on:click={() => (isMenuOpen = true)}
		>
			{placeInput || 'Place'}
		</button>
		<div class="mx-2" />
		<button class="btn btn-primary rounded-full p-2">
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
			: 'translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95'} pointer-events-none fixed inset-0 flex items-center justify-center transition-all duration-300 ease-out"
	>
		<div
			class="h-full w-full md:h-auto overflow-hidden rounded-lg bg-gray-50 p-4 shadow-xl sm:p-6 md:w-[80vw] md:max-w-5xl"
			class:pointer-events-auto={isMenuOpen}
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

			<div class="mt-6" />
			<div class="flex justify-end">
				<button type="button" class="btn btn-primary">Rechercher</button>
			</div>
		</div>
	</div>
</div>
