<script lang="ts">
	import MdLocationOn from 'svelte-icons/md/MdLocationOn.svelte';

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

<div
	class="rounded-md px-4 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
>
	<label for="geolocationSearch" class="block text-xs font-medium text-gray-900">geolocation</label>
	<input
		type="text"
		name="geolocationSearch"
		id="geolocationSearch"
		class="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
		placeholder="Dance"
		bind:value={input}
		on:input={fetchPlaces}
		on:focus={() => (isFocus = true)}
		on:blur={() => (isFocus = false)}
	/>
</div>
<div
	class="{isFocus
		? 'max-h-80'
		: 'max-h-0'} overflow-y-auto rounded-md bg-white transition-all duration-300 ease-out"
>
	<div class="my-5" />
	<ul class="flex flex-col gap-4">
		{#if options.features}
			{#each options.features as option}
				<li>
					<button
						class="flex w-full items-center gap-4 overflow-hidden rounded-full border bg-white px-4 py-4 shadow sm:px-4"
						on:click={() => (input = option.place_name ?? '')}
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
