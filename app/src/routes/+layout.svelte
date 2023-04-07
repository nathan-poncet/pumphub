<script lang="ts">
	import '../app.postcss';
	import Footer from '$lib/features/global/Footer.svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/features/global/header/Header.svelte';
	import { activities } from '$lib/features/global/store/activities';
	import { categories } from '$lib/features/global/store/categories';

	export let data: LayoutData;

	categories.set(data.categories);
	activities.set(data.activities);
</script>

<Header />
<div class="container mx-auto h-full p-4">
	<slot />
</div>
<Footer />
