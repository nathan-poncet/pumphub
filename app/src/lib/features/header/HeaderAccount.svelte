<script lang="ts">
	import { clickOutside } from 'svelte-use-click-outside';
	import { applyAction, enhance } from '$app/forms';
	import { currentUser, pb } from '$lib/pocketbase';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';

	let isMenuOpen = false;
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	$: navigation = {
		pages: [
			{ name: 'Publish an activity', href: '/' },
			{ name: 'Contact Us', href: '/' }
		],
		auth: $currentUser
			? [{ name: 'Account Settings', href: '/' }]
			: [
					{ name: 'Login', href: '/login' },
					{ name: 'Register', href: '/register' }
			  ]
	};
</script>

<div class="relative">
	<button
		class="flex items-center gap-4 rounded-full border p-2"
		on:click={toggleMenu}
		use:clickOutside={() => {
			isMenuOpen = false;
		}}
	>
		<div class="w-6">
			<MdMenu />
		</div>
		<img
			class="inline-block h-10 w-10 rounded-full"
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			alt=""
		/>
	</button>

	<div
		class="{isMenuOpen
			? 'translate-y-0 opacity-100'
			: 'pointer-events-none translate-y-1 opacity-0'} absolute right-0 top-full -mr-0.5 mt-3 w-60 origin-top-right scale-100 transform divide-y divide-gray-100 rounded-lg bg-white text-sm font-normal text-slate-900 shadow-md ring-1 ring-slate-900/5 focus:outline-none sm:-mr-3.5"
		role="menu"
		tabindex="0"
	>
		<p class="truncate px-3.5 py-3" role="none">
			<span class="block text-xs text-gray-500" role="none">
				{$currentUser ? 'Signed in as' : 'Welcome'}
			</span>
			{#if $currentUser}
				<span class="mt-0.5 font-semibold" role="none">{$currentUser.email}</span>
			{/if}
		</p>
		<div class="py-1.5" role="none">
			{#each navigation.pages as { name, href }, i}
				<a
					class="block block px-3.5 py-1.5 py-1.5 hover:bg-slate-100"
					role="menuitem"
					tabindex="-1"
					{href}
				>
					{name}
				</a>
			{/each}
		</div>
		<div class="py-1.5" role="none">
			{#each navigation.auth as { name, href }, i}
				<a
					class="block block px-3.5 py-1.5 py-1.5 hover:bg-slate-100"
					role="menuitem"
					tabindex="-1"
					{href}
				>
					{name}
				</a>
			{/each}
			{#if $currentUser}
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
					<button
						type="button"
						class="block block w-full w-full px-3.5 py-1.5 py-1.5 text-left text-left hover:bg-slate-100"
						role="menuitem"
						tabindex="-1"
					>
						Sign out
					</button>
				</form>
			{/if}
		</div>
	</div>
</div>
