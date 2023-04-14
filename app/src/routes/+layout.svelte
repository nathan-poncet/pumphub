<script lang="ts">
	import '../app.postcss';
	import Footer from '$lib/features/global/Footer.svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/features/global/header/Header.svelte';
	import { activities } from '$lib/features/activities/store/activities';
	import { categories } from '$lib/features/categories/store/categories';

	export let data: LayoutData;

	categories.set(data.categories);
	activities.set(data.activities);
</script>

<div class="h-full max-h-screen overflow-auto">
	<div class="flex min-h-screen flex-col bg-white">
		<Header />
		<div class="mt-20 flex flex-1">
			<slot />
		</div>
		<Footer />
	</div>
</div>
