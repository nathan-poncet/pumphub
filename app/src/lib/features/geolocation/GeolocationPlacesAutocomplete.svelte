<script lang="ts">
	import {
		Autocomplete,
		popup,
		type AutocompleteOption,
		type PopupSettings,
		ListBox,
		ListBoxItem
	} from '@skeletonlabs/skeleton';

	let valueSingle: string = 'places';
	let input: string = '';
	let inputOptions = <AutocompleteOption[]>[];
	let popupSettings: PopupSettings = {
		event: 'focus',
		target: 'popupGeolocationPlacesAutocomplete',
		placement: 'bottom-start'
	};

	function onPopupSelect(event: any): void {
		input = event.detail.label;
	}

	let fetchPlaces = async () => {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=pk.eyJ1IjoiMWNibTEiLCJhIjoiY2xnNW43OXl3MDU5NjNscWlpdHA3amU0MyJ9.Xp14hyPIhCn_J5y1LBzBpA`
		);

		const json = await response.json();

		inputOptions = json.features.map((result: any) => ({ label: result.text, value: result.id }));
	};

	$: (input || input === '') && fetchPlaces();
</script>

<input
	type="search"
	class="autocomplete focus:bg-tertiary-300 h-full w-full rounded-full border-0 px-6 focus:ring-0"
	name="autocomplete-geolocation-places"
	placeholder="Genève"
	bind:value={input}
	use:popup={popupSettings}
/>
<div data-popup="popupGeolocationPlacesAutocomplete">
	{#key inputOptions}
		<Autocomplete
			bind:input
			options={inputOptions}
			on:selection={onPopupSelect}
			class="card w-full max-w-sm p-4"
		/>
	{/key}
</div>
