<script lang="ts">
	import HeaderAccount from '$lib/features/global/header/HeaderAccount.svelte';
	import HeaderSearchBar from '$lib/features/global/header/HeaderSearchBar.svelte';
</script>

<header class="bg-white border">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div>
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">PumpHub</span>
				<h1>PumpHub</h1>
			</a>
		</div>
		<div class="flex-1">
			<HeaderSearchBar />
		</div>
		<HeaderAccount />
	</nav>
</header>
