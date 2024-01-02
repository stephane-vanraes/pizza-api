import pizzas from '$lib/data/pizza.js';

export const load = async ({ params }) => {
	const id = params.id;
	const pizza = pizzas.find((p) => p.id == id);
	return pizza;
};
