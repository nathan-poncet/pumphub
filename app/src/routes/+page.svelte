<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/features/global/Hero.svelte';
	import FindYourActivity from '$lib/features/global/FindYourActivity.svelte';
	import ShareYourActivity from '$lib/features/global/ShareYourActivity.svelte';
	import Faq from '$lib/features/global/Faq.svelte';
	import CategoriesList from '$lib/features/categories/CategoriesList.svelte';
</script>

<div class="relative -mt-20 w-full">
	<Hero />

	<CategoriesList />

	<FindYourActivity />

	<ShareYourActivity />

	<Faq />
</div>
