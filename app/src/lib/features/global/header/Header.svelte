<script lang="ts">
	import HeaderAccount from '$lib/features/global/header/HeaderAccount.svelte';
</script>

<header class="fixed top-0 z-10 w-full border bg-white">
	<nav class="flex h-20 items-center justify-between px-6 py-2 lg:px-8" aria-label="Global">
		<a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">PumpHub</span>
			<h1 class="text-xl font-semibold">PumpHub</h1>
		</a>
		<HeaderAccount />
	</nav>
</header>
