<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="grid flex-1 place-content-center px-4">
	<div class="text-center">
		<h1 class="text-9xl font-black text-gray-200">{$page.status}</h1>

		<p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

		<p class="mt-4 text-gray-500">{$page.error?.message}</p>

		<a href="/" class="btn btn-primary mt-6">Go Back Home </a>
	</div>
</div>
