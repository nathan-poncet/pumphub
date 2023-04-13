<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';

	export let form;
</script>

<section class="flex w-full items-center px-5 py-12 md:px-12 lg:px-20">
	<div class="mx-auto w-full max-w-xl">
		<h2 class="text-4xl text-black">Sign In</h2>
		<form
			method="POST"
			action="?/login"
			use:enhance={() => {
				return async ({ result }) => {
					pb.authStore.loadFromCookie(document.cookie);
					await applyAction(result);
				};
			}}
		>
			<div class="mt-4 space-y-6">
				<div class="col-span-full">
					<label class="label pt-0" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						class="input w-full"
						class:input-error={form?.error && form.data.email}
						required
					/>
					{#if form?.error && form.data.email}
						<p class="text-error mt-3 text-sm">{form.data.email.message}</p>
					{/if}
				</div>
				<div class="col-span-full">
					<label class="label pt-0" for="password">
						<span class="label-text">Passord</span>
					</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						class="input w-full"
						class:input-error={form?.error && form.data.password}
					/>
					{#if form?.error && form.data.password}
						<p class="text-error mt-3 text-sm">{form.data.password.message}</p>
					{/if}
				</div>

				<div class="col-span-full">
					{#if form?.error && Object.keys(form.data).length === 0}
						<p class="text-error mt-4 text-sm">{form.message}</p>
					{/if}
				</div>

				<div class="col-span-full">
					<button class="btn variant-filled w-full" type="submit">Log in</button>
				</div>
			</div>
		</form>
	</div>
</section>
