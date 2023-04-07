<script lang="ts">
	import '../app.postcss';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/Header.svelte';

	export let data: LayoutData;
</script>

<Header />
<div class="container mx-auto h-full p-4">
	<slot />
</div>
<Footer />
