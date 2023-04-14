<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/features/global/Hero.svelte';
	import FindYourActivity from '$lib/features/global/FindYourActivity.svelte';
	import ShareYourActivity from '$lib/features/global/ShareYourActivity.svelte';
	import Faq from '$lib/features/global/Faq.svelte';
	import CategoriesList from '$lib/features/categories/CategoriesList.svelte';

	export let data: PageData;
</script>

<div class="-mt-20 w-full relative">
	<Hero />
	<div class="my-40" />

	<CategoriesList />

	<div class="my-40" />

	<FindYourActivity />

	<div class="my-40" />

	<ShareYourActivity />

	<div class="my-40" />

	<Faq />

	<div class="my-40" />
</div>
