<script lang="ts">
	import { categories } from './store/categories';
	import { getImageURL } from '$lib/utils/getImageURL';
</script>

<section class="bg-white py-24 sm:py-32">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-widest text-gray-900 sm:text-4xl">
				Toutes les catégories
			</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Learn how to grow your business with our expert advice.
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			{#each $categories as category}
				<div
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
				>
					<img
						src={getImageURL(category.collectionId, category.id, category.image ?? '')}
						alt=""
						class="absolute inset-0 -z-10 h-full w-full object-cover"
					/>
					<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
					<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

					<h3 class="mt-3 text-lg font-semibold leading-6 tracking-widest text-white">
						<a href="/">
							<span class="absolute inset-0" />
							{category.title}
						</a>
					</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

		