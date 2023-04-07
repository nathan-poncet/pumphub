<script lang="ts">
	import { popup, type PopupSettings, Autocomplete } from '@skeletonlabs/skeleton';
	import type { CategoriesResponse } from '../../../pocketbase-types';

	export let categories: CategoriesResponse[];

	let input: string = '';

	$: inputOptions = categories.map((category) => ({
		label: category.title ?? '',
		value: category.id,
		meta: category
	}));

	let popupSettings: PopupSettings = {
		event: 'focus',
		target: 'popupCategoriesAutocomplete',
		placement: 'bottom-start'
	};

	function onPopupSelect(event: any): void {
		input = event.detail.label;
	}
</script>

<input
	type="search"
	class="autocomplete focus:bg-tertiary-300 h-full w-full rounded-full border-0 px-6 focus:ring-0"
	name="autocomplete-categories"
	placeholder="Categories"
	bind:value={input}
	use:popup={popupSettings}
/>
<div data-popup="popupCategoriesAutocomplete">
	<Autocomplete
		bind:input
		options={inputOptions}
		on:selection={onPopupSelect}
		class="card max-h-48 w-full max-w-sm overflow-y-auto p-4"
	/>
</div>
