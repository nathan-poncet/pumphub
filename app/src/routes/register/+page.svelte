<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';

	export let form;
	let loading = false;
</script>

<section class="flex w-full items-center px-5 py-12 md:px-12 lg:px-20">
	<div class="mx-auto w-full max-w-xl">
		<h2 class="text-4xl text-black">Register</h2>
		<form
			method="POST"
			action="?/register"
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
					<label class="label pt-0" for="password">
						<span class="label-text">Passord</span>
					</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="********"
						class="input w-full"
						class:input-error={form?.error && form.data.password}
					/>
					{#if form?.error && form.data.password}
						<p class="text-error mt-3 text-sm">{form.data.password.message}</p>
					{/if}
				</div>
				<div class="col-span-full">
					<label class="label pt-0" for="passwordConfirm">
						<span class="label-text">Confirm Password</span>
					</label>
					<input
						type="password"
						id="passwordConfirm"
						name="passwordConfirm"
						placeholder="********"
						class="input w-full"
						class:input-error={form?.error && form.data.passwordConfirm}
					/>
					{#if form?.error && form.data.passwordConfirm}
						<p class="text-error mt-3 text-sm">{form.data.passwordConfirm.message}</p>
					{/if}
				</div>

				<div class="col-span-full">
					{#if form?.error && Object.keys(form.data).length === 0}
						<p class="text-error mt-4 text-sm">{form.message}</p>
					{/if}
				</div>

				<div class="col-span-full">
					<button class="btn variant-filled w-full" type="submit" disabled={loading}>
						{#if loading}
							<svg
								class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
						{:else}
							Register
						{/if}
					</button>
				</div>
			</div>
		</form>

		<div class="mt-16">
			<div class="text-md text-center font-medium">
				Already have an account? &nbsp;
				<a href="login" class="link-primary">Login</a>
			</div>
		</div>
	</div>
</section>
