<script lang="ts">
	import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';
	import { selectedPlace } from './store/selectedPlace';

	let input: string = '';
	let options = <any>{};
	let isFocus = false;

	const fetchPlaces = async () => {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?limit=4&country=fr,ch&types=district,place,locality,neighborhood,address&access_token=pk.eyJ1IjoiMWNibTEiLCJhIjoiY2xnNW43OXl3MDU5NjNscWlpdHA3amU0MyJ9.Xp14hyPIhCn_J5y1LBzBpA`
		);

		options = await response.json();
	};
</script>

<label for="geolocationSearch" class="label pt-0">
	<span class="label-text">Geolocation</span>
</label>
<input
	type="text"
	name="geolocationSearch"
	id="geolocationSearch"
	class="input w-full"
	placeholder="Paris"
	bind:value={input}
	on:input={fetchPlaces}
	on:focus={() => (isFocus = true)}
	on:blur={() => (isFocus = false)}
/>

<div
	class="{isFocus
		? 'max-h-80'
		: 'max-h-0'} overflow-y-auto rounded-md bg-white transition-all duration-500 ease-out"
>
	<div class="my-5" />
	<ul class="flex flex-col gap-4">
		{#if options.features}
			{#each options.features as option}
				<li>
					<button
						class="flex w-full items-center gap-4 overflow-hidden rounded-full border bg-white px-4 py-4 shadow sm:px-4"
						on:focus={() => (isFocus = true)}
						on:blur={() => (isFocus = false)}
						on:click={() => {
							isFocus = false;
							input = option.place_name ?? '';
							selectedPlace.set(option);
						}}
					>
						<div class="w-8">
							<MdLocationOn />
						</div>
						<span class="text-xl">
							{option.place_name}
						</span>
					</button>
				</li>
			{/each}
		{/if}
	</ul>
</div>
