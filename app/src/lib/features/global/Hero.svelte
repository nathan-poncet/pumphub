<script lang="ts">
	import logo from '$lib/assets/undraw_friends_online_re_r7pq.svg';

	const details = [
		'Nous donnons de la visibilité au activités locales',
		'Le sport près de chez soi',
		'Accessible pour tous le monde',
		'Participez au développement de la culture !'
	];
</script>

<section class="max-w-7xl mx-auto flex min-h-screen flex-col items-center gap-16 px-4 py-12">
	<div class="flex flex-1 flex-col gap-16 items-center justify-center md:flex-row">
		<div class="py-12 text-center md:w-1/2 md:px-8 md:text-left">
			<h1 class="mb-6 text-xl tracking-wide text-pink-600 md:text-2xl">
				Nouveau: <span class="tracking text-lg tracking-widest text-gray-800 md:text-xl">
					Ouverture le 20 juin 2023
				</span>
			</h1>
			<h2 class="text-4xl font-bold tracking-widest">Trouve ton Sport facilement</h2>
			<div class="my-6 h-[40px] overflow-hidden text-xl font-light md:text-2xl">
				<ul class="animate">
					{#each details as detail}
						<li class="max-w-[80vw] overflow-hidden text-ellipsis whitespace-nowrap leading-[40px] xl:pl-3">
							{detail}
						</li>
					{/each}
				</ul>
			</div>
			<p class="text-4xl font-bold tracking-widest">tu cherches une activité ? Pense à nous !</p>
		</div>
		<div class="w-1/2">
			<img src={logo} alt="AWE.SOME hero" />
		</div>
	</div>
	<a class="btn btn-primary" href="#about">More Information</a>
</section>

<style>
	.animate {
		animation: change 20s ease-in-out infinite;
	}

	@keyframes change {
		0%,
		12.66%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%,
		29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%,
		45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%,
		62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%,
		79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%,
		95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
</style>
