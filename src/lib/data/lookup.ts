import pizzas, { type Pizza } from './pizza';

const lookup = pizzas.reduce(
	(pre, cur) => {
		pre[cur.id] = cur;
		pre[cur.slug] = cur;
		return pre;
	},
	{} as Record<string, Pizza>
);

export default lookup;
