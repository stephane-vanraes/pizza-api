import pizzas from './pizza';

const ingredientCountMap = pizzas.reduce((acc: Map<string, number>, pizza) => {
	pizza.ingredients.forEach((ingredient) => {
		const count = acc.get(ingredient) || 0;
		acc.set(ingredient, count + 1);
	});
	return acc;
}, new Map<string, number>());

const ingredients = Array.from(ingredientCountMap.keys());
const ingredientCountArray: [string, number][] = Array.from(ingredientCountMap);

export default {
	ingredients,
	ingredientCountArray,
	ingredientCountMap
};
