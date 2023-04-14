<script lang="ts">
	import { currentUser, pb } from '$lib/pocketbase';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { getImageURL } from '$lib/utils/getImageURL';

	$: navigation = {
		pages: [
			{ name: 'Publish an activity', href: '/user/projects' },
			{ name: 'Contact Us', href: '/contact_us' }
		],
		auth: $currentUser
			? [{ name: 'Account Settings', href: '/' }]
			: [
					{ name: 'Login', href: '/login' },
					{ name: 'Register', href: '/register' }
			  ]
	};
</script>

<div class="dropdown dropdown-end">
	<button tabindex="0" class="flex items-center gap-4 rounded-full border p-2">
		<div class="w-6">
			<MdMenu />
		</div>
		{#if $currentUser}
			<div class="h-10 w-10 rounded-full bg-gray-600">
				{#if $currentUser.avatar}
					<img
						class="h-full w-full rounded-full"
						src={getImageURL($currentUser.collectionId, $currentUser.id, $currentUser.avatar)}
						alt=""
					/>
				{/if}
			</div>
		{/if}
	</button>

	<ul
		role="menu"
		tabindex="0"
		class="menu dropdown-content bg-white rounded-box mt-4 w-52 p-2 shadow"
	>
		{#each navigation.pages as { name, href }, i}
			<li>
				<a role="menuitem" {href}>
					{name}
				</a>
			</li>
		{/each}

		<li class="border" />

		{#each navigation.auth as { name, href }, i}
			<li>
				<a role="menuitem" {href}>
					{name}
				</a>
			</li>
		{/each}
		{#if $currentUser}
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
					<button type="submit" role="menuitem">Sign out</button>
				</form>
			</li>
		{/if}
	</ul>
</div>
