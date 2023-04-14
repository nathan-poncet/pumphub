<script lang="ts">
	import { categories } from './store/categories';
	import { getImageURL } from '$lib/utils/getImageURL';
</script>

<section class="my-24 sm:my-32">
	<div class="mx-auto max-w-screen-2xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 space-y-16">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-widest text-gray-900 sm:text-4xl">
				Toutes les catégories
			</h2>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Learn how to grow your business with our expert advice.
			</p>
		</div>
		<div
			class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			{#each $categories.slice($categories.length < 4 ? -$categories.length : -4) as category}
				<div
					class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-24 sm:pt-48 lg:pt-80"
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
		<div class="mx-auto max-w-2xl text-center">
			<a href="/" class="btn btn-primary">Voir Plus</a>
		</div>
	</div>
</section>
