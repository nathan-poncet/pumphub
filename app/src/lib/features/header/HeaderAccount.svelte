<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { currentUser, pb } from '$lib/pocketbase';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'headerAccountPopup',
		closeQuery: '.closePopup'
	};

	let navigation = <{ name: string; href: string }[]>[];

	$: classesActive = (href: string) =>
		href === $page.url.pathname ? 'bg-primary-active-token' : '';
</script>

<button class="btn" use:popup={popupSettings}>
	<div class="w-10 overflow-hidden rounded-full">
		<img src="https://ui-avatars.com/api/?name=nathan" alt="User avatar" />
	</div>
</button>
<div data-popup="headerAccountPopup">
	<div class="card w-full space-y-4 p-4">
		<nav class="list-nav">
			<ul>
				{#each navigation as { name, href }, i}
					<li class="closePopup">
						<a {href} class={classesActive(href)}>
							<span class="flex-auto">{name}</span>
						</a>
					</li>
				{/each}

				{#if !$currentUser}
					<li class="closePopup">
						<a href="/login" class={classesActive('/login')}>
							<span class="flex-auto">Login</span>
						</a>
					</li>
					<li class="closePopup">
						<a href="/register" class={classesActive('/register')}>
							<span class="flex-auto">Register</span>
						</a>
					</li>
				{:else}
					<li>
						<form
							action="/logout"
							method="POST"
							use:enhance={() => {
								return async ({ result }) => {
									pb.authStore.clear();
									await applyAction(result);
								};
							}}
						>
							<button type="submit" class="btn flex-auto">
								Logout
							</button>
						</form>
					</li>
				{/if}
			</ul>
		</nav>
	</div>
</div>
