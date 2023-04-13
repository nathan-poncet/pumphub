<script lang="ts">
	import logo from '$lib/assets/undraw_friends_online_re_r7pq.svg';
</script>

<div class="flex min-h-screen flex-col items-center px-4 py-12">
	<div class="flex flex-1 flex-col items-center md:flex-row">
		<div class="py-12 text-center md:px-8 md:text-left">
			<h1 class="mb-6 text-2xl tracking-wide text-pink-600">
				Nouveau: <span class="tracking text-xl tracking-widest text-gray-800"
					>Ouverture le 20 juin 2023</span
				>
			</h1>
			<h2 class="text-4xl font-bold tracking-widest">Trouve ton Sport facilement</h2>
			<span class="content__container text-browngray my-6 block text-2xl font-light">
				<ul class="content__container__list">
					<li class="content__container__list__item xl:pl-3">Facile</li>
					<li class="content__container__list__item xl:pl-3">Pres de chez toi</li>
					<li class="content__container__list__item xl:pl-3">Pour tous</li>
					<li class="content__container__list__item xl:pl-3">Facile</li>
					<li class="content__container__list__item xl:pl-3">Pres de chez toi</li>
					<li class="content__container__list__item xl:pl-3">Pour tous</li>
					<li class="content__container__list__item xl:pl-3">Puissance</li>
				</ul>
			</span>
			<p class="text-4xl font-bold tracking-widest">tu cherches une activité ? Pense à Nous!</p>
		</div>
		<div class="md:w-1/2">
			<img src={logo} alt="AWE.SOME hero" />
		</div>
	</div>
	<a class="btn btn-primary" href="#about">More Information</a>
</div>

<style>
	.content__container {
		overflow: hidden;
		height: 40px;
	}

	.content__container__list {
		list-style: none;

		animation-name: change;
		animation-duration: 20s;
		animation-iteration-count: infinite;
	}

	.content__container__list__item {
		margin: 0;
		line-height: 40px;
	}

	@keyframes change {
		0%,
		7.14%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		14.28% {
			transform: translate3d(0, -14.28%, 0);
		}
		21.42% {
			transform: translate3d(0, -28.57%, 0);
		}
		28.57% {
			transform: translate3d(0, -42.85%, 0);
		}
		35.71% {
			transform: translate3d(0, -57.14%, 0);
		}
		42.85% {
			transform: translate3d(0, -71.42%, 0);
		}
		53.5% {
			transform: translate3d(0, -85.71%, 0);
		}
		64.28% {
			transform: translate3d(0, -71.42%, 0);
		}
		71.42% {
			transform: translate3d(0, -57.14%, 0);
		}
		78.54% {
			transform: translate3d(0, -42.85%, 0);
		}
		85.71% {
			transform: translate3d(0, -28.57%, 0);
		}
		92.85% {
			transform: translate3d(0, -14.28%, 0);
		}
	}
</style>
