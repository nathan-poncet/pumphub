import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email?: string;
			password?: string;
		};

		try {
			await locals.pb.collection('users').authWithPassword(data?.email ?? '', data?.password ?? '');
		} catch (e) {
			console.error(e);

			if (e instanceof ClientResponseError)
				return fail(400, {
					error: true,
					message: e.response.message,
					data: e.response.data
				});

			throw e;
		}

		throw redirect(303, '/');
	}
};
