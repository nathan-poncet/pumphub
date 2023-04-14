<script lang="ts">
	import ActivitiesSelect from '$lib/features/activities/ActivitiesSelect.svelte';
	import CategoriesSelect from '$lib/features/categories/CategoriesSelect.svelte';
	import GeolocationPlacesAutocomplete from '$lib/features/geolocation/GeolocationPlacesAutocomplete.svelte';
	import MdSearch from 'svelte-icons/md/MdSearch.svelte';
	import { selectedCategory } from '../categories/store/selectedCategory';
	import { selectedActivity } from '../activities/store/selectedActivity';
	import { selectedPlace } from '../geolocation/store/selectedPlace';
</script>

<label for="post-search-moadal">
	<div class="flex rounded-full border bg-white p-2">
		<div
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 flex flex-1 items-center rounded-full px-6 text-gray-500 sm:hidden"
		>
			Ma recherche
		</div>
		<div
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:flex"
			class:text-gray-900={$selectedCategory}
		>
			{$selectedCategory?.title || 'Dance'}
		</div>
		<div class="mx-2 my-1 hidden border-r-2 sm:block" />
		<div
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:flex"
			class:text-gray-900={$selectedActivity}
		>
			{$selectedActivity?.title || 'Break Dance'}
		</div>
		<div class="mx-2 my-1 hidden border-r-2 sm:block" />
		<div
			class="btn btn-ghost hover:bg-base-100 focus:bg-base-100 hidden flex-1 items-center rounded-full px-6 text-gray-500 sm:flex"
			class:text-gray-900={$selectedPlace}
		>
			{$selectedPlace?.place_name || 'Lyon'}
		</div>
		<div class="mx-2" />
		<button class="btn btn-primary rounded-full p-2">
			<MdSearch />
		</button>
	</div>
</label>

<input type="checkbox" id="post-search-moadal" class="modal-toggle" />
<label for="post-search-moadal" class="modal cursor-pointer text-left">
	<label
		for=""
		class="bg-base-100 h-full max-h-screen w-full overflow-y-auto rounded-lg p-4 shadow-xl sm:p-6 md:h-auto md:w-[80vw] md:max-w-5xl"
	>
		<div>
			<label for="post-search-moadal" class="btn btn-outline btn-sm btn-circle">✕</label>
		</div>

		<div class="mt-8" />

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
	</label>
</label>
