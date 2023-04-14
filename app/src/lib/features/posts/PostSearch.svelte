<script lang="ts">
	import ActivitiesSelect from '$lib/features/activities/ActivitiesSelect.svelte';
	import CategoriesSelect from '$lib/features/categories/CategoriesSelect.svelte';
	import GeolocationPlacesAutocomplete from '$lib/features/geolocation/GeolocationPlacesAutocomplete.svelte';
	import MdSearch from 'svelte-icons/md/MdSearch.svelte';
	import { clickOutside } from 'svelte-use-click-outside';
	import { selectedCategory } from '../categories/store/selectedCategory';
	import { selectedActivity } from '../activities/store/selectedActivity';
	import { selectedPlace } from '../geolocation/store/selectedPlace';

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
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 block flex flex-1 items-center rounded-full px-6 text-gray-500 sm:hidden"
			on:click={() => (isMenuOpen = true)}
		>
			Ma recherche
		</button>
		<button
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 flex hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:block"
			class:text-gray-900={$selectedCategory}
			on:click={() => (isMenuOpen = true)}
		>
			{$selectedCategory?.title || 'Dance'}
		</button>
		<div class="mx-2 my-1 hidden border-r-2 sm:block" />
		<button
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 flex hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:block"
			class:text-gray-900={$selectedActivity}
			on:click={() => (isMenuOpen = true)}
		>
			{$selectedActivity?.title || 'Break Dance'}
		</button>
		<div class="mx-2 my-1 hidden border-r-2 sm:block" />
		<button
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 flex hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:block"
			class:text-gray-900={$selectedPlace}
			on:click={() => (isMenuOpen = true)}
		>
			{$selectedPlace?.place_name || 'Lyon'}
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
			class="bg-base-100 h-full w-full overflow-hidden rounded-lg p-4 shadow-xl sm:p-6 md:h-auto md:w-[80vw] md:max-w-5xl"
			class:pointer-events-auto={isMenuOpen}
		>
			<div class="flex">
				<button type="button" class="btn h-full min-h-0 p-2" on:click={() => (isMenuOpen = false)}>
					<span class="sr-only">Dismiss</span>
					<svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
						/>
					</svg>
				</button>
			</div>

			<div class="mt-4" />

			<h2 class="text-xl font-bold sm:text-2xl">Trouve ton sport !</h2>

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
			<div
				class="absolute bottom-0 left-0 right-0 flex justify-end bg-white p-4 sm:relative sm:bg-transparent"
			>
				<button type="button" class="btn btn-primary">Rechercher</button>
			</div>
		</div>
	</div>
</div>
