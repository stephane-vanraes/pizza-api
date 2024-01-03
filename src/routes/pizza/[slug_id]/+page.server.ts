import { error } from '@sveltejs/kit';

import lookup from '$lib/data/lookup.js';

export const load = async ({ params }) => {
	const pizza = lookup[params.slug_id];
	console.log(pizza);
	if (!pizza) throw error(404);
	return pizza;
};
