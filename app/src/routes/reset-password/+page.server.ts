import { type Actions, fail } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	resetPassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email?: string;
		};

		try {
			await locals.pb.collection('users').requestPasswordReset(data?.email ?? '');
		} catch (e) {
			console.log(e);
			
			if (e instanceof ClientResponseError)
				return fail(400, {
					error: true,
					message: e.response.message,
					data: e.response.data
				});

			throw e;
		}
	}
};
