import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';
import { z } from 'zod';

const formDataSchema = z
	.object({
		email: z.string().email(),
		password: z.string(),
		passwordConfirm: z.string()
	});

export const actions: Actions = {
	register: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			const dataParsed = formDataSchema.safeParse(data);

			if (!dataParsed.success) {
				throw Error('Invalid data');
			}

			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').requestVerification(dataParsed.data.email);
			await locals.pb.collection('users').authWithPassword(dataParsed.data.email, dataParsed.data.password);
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
