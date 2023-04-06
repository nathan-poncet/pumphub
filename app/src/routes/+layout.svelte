<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';
	import HeaderNavBar from '$lib/features/header/HeaderNavBar.svelte';
	import HeaderAccount from '$lib/features/header/HeaderAccount.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell>
	<svelte:fragment slot="header">
		<nav class="navbar flex justify-between border-b py-8">
			<div>
				<a href="/" class="btn text-xl normal-case">Moveeasy</a>
			</div>
			<div class="max-w-4xl flex-1">
				<HeaderNavBar categories={data.categories} activities={data.activities} />
			</div>
			<HeaderAccount />
		</nav>
	</svelte:fragment>
	<div class="container mx-auto h-full p-4">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>

	<Toast />
</AppShell>
