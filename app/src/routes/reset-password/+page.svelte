<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';

	export let form;
	let loading = false;
</script>

<section class="flex w-full items-center px-5 py-12 md:px-12 lg:px-20">
	<div class="mx-auto w-full max-w-xl">
		<h2 class="text-4xl text-black">Reset Your Password</h2>
		<p class="mt-1">We'll send you an email with a link to reset your password.</p>
		<form
			action="?/resetPassword"
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ result }) => {
					loading = false;
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
					{#if form?.error && Object.keys(form.data).length === 0}
						<p class="text-error mt-4 text-sm">{form.message}</p>
					{/if}
				</div>

				<div class="col-span-full">
					<button class="btn variant-filled w-full" type="submit">Request Password Reset</button>
				</div>
			</div>
		</form>
	</div>
</section>
