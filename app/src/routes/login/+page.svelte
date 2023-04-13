<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';

	export let form;
</script>

<div class="mx-auto flex w-full max-w-xl items-center">
	<div class="w-full">
		<h1 class="mb-8 text-2xl">Login</h1>
		<form
			method="POST"
			action="?/login"
			class="w-full"
			use:enhance={() => {
				return async ({ result }) => {
					pb.authStore.loadFromCookie(document.cookie);
					await applyAction(result);
				};
			}}
		>
			<div class="mb-4 gap-2">
				<label class="label">
					<span>Email</span>
					<input type="email" name="email" placeholder="Email" class="input" required />
					{#if form?.error && form.data.email}
						<p class="text-error-600 mt-4 text-sm">{form.data.email.message}</p>
					{/if}
				</label>
				<label class="label mt-4">
					<span>Password</span>
					<input type="password" name="password" placeholder="Password" class="input" required />
					{#if form?.error && form.data.password}
						<p class="text-error-600 mt-4 text-sm">{form.data.password.message}</p>
					{/if}
				</label>
				{#if form?.error && Object.keys(form.data).length === 0}
					<p class="text-error-600 mt-4 text-sm" id="email-error">{form.message}</p>
				{/if}
				<button class="btn variant-filled mt-8">Log in</button>
			</div>
		</form>
	</div>
</div>
