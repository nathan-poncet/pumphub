<script lang="ts">
	import {
		popup,
		type AutocompleteOption,
		type PopupSettings,
		Autocomplete
	} from '@skeletonlabs/skeleton';
	import type { ActivitiesResponse } from '../../../pocketbase-types';

	export let activities: ActivitiesResponse[];

	let input: string = '';

	$: inputOptions = activities.map((category) => ({
		label: category.title ?? '',
		value: category.id,
		meta: category
	}));

	let popupSettings: PopupSettings = {
		event: 'focus',
		target: 'popupActivitiesAutocomplete',
		placement: 'bottom'
	};

	function onPopupSelect(event: any): void {
		input = event.detail.label;
	}
</script>

<input
	type="search"
	class="autocomplete focus:bg-tertiary-300 h-full w-full rounded-full border-0 px-6 focus:ring-0"
	name="autocomplete-activities"
	placeholder="Activities"
	bind:value={input}
	use:popup={popupSettings}
/>
<div data-popup="popupActivitiesAutocomplete">
	<Autocomplete bind:input options={inputOptions} on:selection={onPopupSelect} />
</div>
