<script lang="ts">
	import ActivitiesSelect from '$lib/features/activities/ActivitiesSelect.svelte';
	import CategoriesSelect from '$lib/features/categories/CategoriesSelect.svelte';
	import MdSearch from 'svelte-icons/md/MdSearch.svelte';
	import GeolocationPlacesAutocomplete from '../geolocation/GeolocationPlacesAutocomplete.svelte';
	import type { ActivitiesResponse, CategoriesResponse } from '../../../pocketbase-types';


	export let categories: CategoriesResponse[];
	export let activities: ActivitiesResponse[];
</script>

<div class="flex h-full rounded-full bg-white p-2">
	<div class="flex-1">
		<CategoriesSelect {categories} />
	</div>
	<div class="mx-2 my-1 border-r-2" />
	<div class="flex-1">
		<ActivitiesSelect {activities} />
	</div>
	<div class="mx-2 my-1 border-r-2" />
	<div class="flex-1">
		<GeolocationPlacesAutocomplete />
	</div>
	<div class="mx-2" />
	<button class="btn variant-filled-primary w-12 rounded-full p-2">
		<MdSearch />
	</button>
</div>
