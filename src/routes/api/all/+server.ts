import pizzas from '$lib/data/pizza';
import { json } from '@sveltejs/kit';

export const GET = async () => json(pizzas);
