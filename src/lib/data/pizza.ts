type Pizza = {
	id: string;
	name: string;
	description: string;
	ingredients: string[];
	image: string;
};

const pizzas: Pizza[] = [
	{
		id: '8b5d4ef6-cc29-4e0e-88b3-25106e52bb6f',
		name: 'Oceanic Delight Pizza',
		description:
			'Immerse your taste buds in a symphony of flavors with our Oceanic Delight Pizza. Succulent shrimp, vibrant broccoli florets, and the creamy richness of Camembert cheese come together atop our signature crust, creating a culinary masterpiece that transcends traditional pizza boundaries. The briny essence of the shrimp, the earthy freshness of the broccoli, and the velvety texture of Camembert meld harmoniously, delivering a sensational experience with every bite. Indulge in the fusion of land and sea, crafted to perfection and served exclusively at our restaurant.',
		ingredients: ['shrimp', 'broccoli', 'Camembert cheese'],
		image: '450c720d-96d0-4586-b0e9-d0acd4cc9adf.png'
	},
	{
		id: '93a4c511-539d-43c0-bdcb-8d9d5aa7e2b5',
		name: 'Spicy Crunch Fusion Pizza',
		description:
			'Heat up your taste adventure with our Spicy Crunch Fusion Pizza. Experience the bold kick of fresh chili peppers, the crisp bite of cucumber slices, and the nutty goodness of flax seeds, all artfully combined on our artisanal crust. This pizza is a tantalizing dance of flavors and textures that will ignite your palate. The zingy spiciness of the chili peppers, the cool and refreshing crunch of cucumber, and the wholesome nuttiness of flax seeds create a sensation that is both daring and delightful. Embark on a culinary journey that celebrates the vibrant diversity of tastes, exclusively crafted for you.',
		ingredients: ['cucumber', 'chili peppers', 'flax seeds'],
		image: 'c5d7266f-e351-4bb8-9a94-c3a117eb4c08.png'
	},
	{
		id: 'bd1a64f7-2f38-49c4-bc9c-37a72bf2f49e',
		name: 'Mango Tango Fiesta Pizza',
		description:
			'Embark on a flavor fiesta with our Mango Tango Fiesta Pizza. Sweet mango slices, tangy goat cheese, and aromatic basil unite on a golden crust, creating a lively celebration of tropical tastes. The juicy sweetness of mango, the tanginess of goat cheese, and the aromatic notes of basil blend seamlessly to transport your taste buds to a sun-soaked paradise. Revel in the harmonious dance of flavors, exclusively curated for a fiesta of your senses.',
		ingredients: ['mango', 'goat cheese', 'basil'],
		image: '88b2b6ff-5f5b-44fb-8c72-08fc6466597c.png'
	},
	{
		id: '3a5f77b7-8c1c-4b06-9d69-0728472a7d6a',
		name: 'Blueberry Balsamic Bliss Pizza',
		description:
			'Experience a blissful symphony of sweet and savory with our Blueberry Balsamic Bliss Pizza. Juicy blueberries, rich balsamic reduction, and velvety Gorgonzola cheese intertwine on a thin crust. The burst of juicy sweetness from the blueberries, the richness of balsamic reduction, and the velvety texture of Gorgonzola create a delightful harmony. Indulge in a pizza that transcends expectations, exclusively crafted for those who seek the extraordinary.',
		ingredients: ['blueberries', 'balsamic reduction', 'Gorgonzola cheese'],
		image: 'a3ad3938-7a95-4781-b994-52fe9699d6fd.png'
	},
	{
		id: 'eb743af4-95e1-4ee6-8f0f-9209a70f8f19',
		name: 'Peachy Pesto Paradise Pizza',
		description:
			'Escape to a paradise of flavors with our Peachy Pesto Paradise Pizza. Fresh peaches, vibrant arugula, and zesty pesto grace a whole wheat crust, offering a unique fusion of sweet and savory. The sweetness of ripe peaches, the peppery kick of arugula, and the zesty notes of pesto create a symphony that will transport your taste buds to a blissful paradise. Indulge in a culinary escape, exclusively at our restaurant.',
		ingredients: ['peaches', 'arugula', 'pesto'],
		image: '775fe409-5300-42a6-a833-9ae0a53c128d.png'
	},
	{
		id: 'a03b38dd-c20a-4f66-9643-7acca5484ee4',
		name: 'Fig and Prosciutto Elegance Pizza',
		description:
			'Indulge in sophistication with our Fig and Prosciutto Elegance Pizza. Sweet figs, salty prosciutto, and creamy goat cheese on a crispy crust create a harmonious blend of refined flavors. The sweetness of figs, the savory richness of prosciutto, and the creamy texture of goat cheese combine to elevate your pizza experience. Savor an elegant composition exclusively crafted for those who appreciate culinary refinement.',
		ingredients: ['figs', 'prosciutto', 'goat cheese'],
		image: '7e109939-8690-40e9-a3d7-5917e25230d4.png'
	},
	{
		id: '431ef85d-9eb3-41ea-9a48-79dd0e29c973',
		name: 'Pineapple and Pickle Party Pizza',
		description:
			'Join the party for your taste buds with our Pineapple and Pickle Party Pizza. Tropical pineapple chunks, tangy dill pickle slices, and melted cheddar on a fluffy crust create a playful and savory celebration. The tropical sweetness of pineapple, the tanginess of dill pickles, and the gooey richness of melted cheddar come together for a pizza that promises a party in every bite. Experience a pizza extravaganza exclusively at our restaurant.',
		ingredients: ['pineapple', 'dill pickles', 'cheddar'],
		image: '5b8bd1ce-9da1-46cc-a977-0ad8a3c1881e.png'
	},
	{
		id: '3c7964f0-d4c3-44fc-8486-4f4e4fc4ebe6',
		name: 'Cranberry and Walnut Wonder Pizza',
		description:
			'Discover wonder in every bite with our Cranberry and Walnut Wonder Pizza. Tart cranberries, crunchy walnuts, and creamy blue cheese on a rustic crust create a delightful medley of textures and flavors. The burst of tartness from cranberries, the crunch of walnuts, and the creaminess of blue cheese combine to offer a pizza that is truly a wonder. Indulge in this exclusive creation at our restaurant.',
		ingredients: ['cranberries', 'walnuts', 'blue cheese'],
		image: '0f2a6dcb-2b27-4608-a927-c8ae12e647ac.png'
	},
	{
		id: '18d3907b-63b3-4df9-9bf3-26e99945c87c',
		name: 'Spinach and Strawberry Surprise Pizza',
		description:
			'Experience a surprising twist with our Spinach and Strawberry Surprise Pizza. Fresh spinach leaves, juicy strawberries, and tangy feta on a thin whole wheat crust create a refreshing and unexpected combination. The crispness of spinach, the sweetness of strawberries, and the tanginess of feta unite to surprise your taste buds. Enjoy this unique pizza exclusively at our restaurant.',
		ingredients: ['spinach', 'strawberries', 'feta'],
		image: 'bd68b0cf-dc68-416b-83ba-1578fd5484b3.png'
	},
	{
		id: '15aaea15-ff1d-40a2-a7e8-18399f314c17',
		name: 'Artichoke and Almond Delight Pizza',
		description:
			'Delight in Mediterranean flavors with our Artichoke and Almond Delight Pizza. Marinated artichoke hearts, roasted almonds, and Parmesan shavings on a golden crust create a symphony of textures and tastes. The tanginess of artichoke hearts, the crunch of almonds, and the richness of Parmesan come together to deliver a delightful experience. Experience this exclusive creation only at our restaurant.',
		ingredients: ['artichoke hearts', 'almonds', 'Parmesan'],
		image: 'f27b95bf-6d6d-4df9-afc0-a4940542b15c.png'
	},
	{
		id: 'e5c827ab-0e3d-4d89-b5a5-30b15034b5d5',
		name: 'Beetroot and Blue Cheese Bliss Pizza',
		description:
			'Experience bliss on a crust with our Beetroot and Blue Cheese Bliss Pizza. Roasted beet slices, crumbled blue cheese, and arugula on a thin crust create a vibrant and flavorful sensation. The earthiness of roasted beets, the pungency of blue cheese, and the peppery kick of arugula combine for a truly blissful pizza. Indulge in this exclusive creation available only at our restaurant.',
		ingredients: ['beet slices', 'blue cheese', 'arugula'],
		image: '7b74bec0-e117-49e0-b07f-15eee2c362a1.png'
	},
	{
		id: '1b7c0d20-8b49-4ab5-9f79-8c6a0a6f2245',
		name: 'Apricot and Bacon Bonanza Pizza',
		description:
			'Embark on a bonanza of flavors with our Apricot and Bacon Bonanza Pizza. Sweet apricot slices, crispy bacon, and smoky Gouda on a hand-tossed crust create a symphony of sweet, savory, and smoky delights. The sweetness of apricot, the crispiness of bacon, and the smokiness of Gouda combine for a pizza bonanza. Savor this unique creation exclusively at our restaurant.',
		ingredients: ['apricot slices', 'bacon', 'Gouda'],
		image: '9a01d9eb-1947-4163-9443-a835bb70dc37.png'
	},
	{
		id: '95123133-c10d-4e56-aa89-28c554e4199d',
		name: 'Avocado and Pistachio Perfection Pizza',
		description:
			'Discover perfection with our Avocado and Pistachio Perfection Pizza. Creamy avocado slices, roasted pistachios, and tangy goat cheese on a multigrain crust create a perfect harmony of creamy and crunchy. The creaminess of avocado, the crunch of pistachios, and the tanginess of goat cheese combine for a pizza that is a true perfection. Indulge in this exclusive creation only at our restaurant.',
		ingredients: ['avocado', 'pistachios', 'goat cheese'],
		image: 'e4f4bea6-15d7-4d6c-9faf-70721a47fa61png'
	},
	{
		id: '7fe4c5cf-3471-471d-8a3b-073b4f04d6d9',
		name: 'Date and Gorgonzola Gastronomy Pizza',
		description:
			'Embark on a gastronomic journey with our Date and Gorgonzola Gastronomy Pizza. Caramelized date pieces, pungent Gorgonzola cheese, and fresh thyme on a thin artisan crust create a symphony of sweet and savory. The sweetness of caramelized dates, the pungency of Gorgonzola, and the aroma of fresh thyme combine for a gastronomic delight. Savor this exclusive creation only at our restaurant.',
		ingredients: ['dates', 'Gorgonzola', 'thyme'],
		image: 'dba2a96c-b4e0-4d61-8656-e00fbeecbd5d.png'
	},
	{
		id: '4c9a1b3e-5454-4485-9c13-cfa99c6b4eb1',
		name: 'Raspberry and Ricotta Rhapsody Pizza',
		description:
			'Immerse yourself in a rhapsody of flavors with our Raspberry and Ricotta Rhapsody Pizza. Juicy raspberries, velvety ricotta, and honey drizzle on a whole grain crust create a symphony of sweet and creamy notes. The burst of juicy sweetness from raspberries, the velvety texture of ricotta, and the drizzle of honey combine for a pizza rhapsody. Indulge in this exclusive creation only at our restaurant.',
		ingredients: ['raspberries', 'ricotta', 'honey'],
		image: '7570ac79-21e7-4f4d-b567-4cf43d718509.png'
	},
	{
		id: '1d12ff63-1d01-4089-9f72-366aa4a38bd2',
		name: 'Sun-dried Tomato and Pecan Pleasure Pizza',
		description:
			'Indulge in a pleasure for your taste buds with our Sun-dried Tomato and Pecan Pleasure Pizza. Intense sun-dried tomatoes, crunchy pecans, and mozzarella on a crispy thin crust create a satisfying and delightful experience. The richness of sun-dried tomatoes, the crunch of pecans, and the gooeyness of mozzarella combine for a pizza that is truly a pleasure. Savor this exclusive creation only at our restaurant.',
		ingredients: ['sun-dried tomatoes', 'pecans', 'mozzarella'],
		image: '062782b1-c5ae-47fb-a598-844558152af2.png'
	},
	{
		id: 'ad9c71e3-10d4-4701-869f-1629d5bc4c1a',
		name: 'Lemon and Asparagus Extravaganza Pizza',
		description:
			'Embark on an extravagant burst of citrus and freshness with our Lemon and Asparagus Extravaganza Pizza. Zesty lemon zest, tender asparagus spears, and creamy goat cheese on a golden crust create a refreshing and citrusy experience. The zingy freshness of lemon, the tenderness of asparagus, and the creaminess of goat cheese combine for an extravaganza of flavors. Savor this exclusive creation only at our restaurant.',
		ingredients: ['lemon zest', 'asparagus', 'goat cheese'],
		image: 'dac9590c-095e-427c-afd6-ea4ef4533118.png'
	},
	{
		id: 'e8a394ac-3031-4d3f-816a-36b9d88201e2',
		name: 'Pomegranate and Walnut Wonder Pizza',
		description:
			'Discover wonder in every bite with our Pomegranate and Walnut Wonder Pizza. Juicy pomegranate seeds, toasted walnuts, and crumbled feta on a multigrain crust create a delightful wonder of sweet and nutty delights. The burst of juiciness from pomegranate seeds, the crunch of walnuts, and the creaminess of feta combine for a pizza that is truly a wonder. Indulge in this exclusive creation only at our restaurant.',
		ingredients: ['pomegranate seeds', 'walnuts', 'feta'],
		image: '2755825d-1669-4cc5-987c-c3b3518fad1e.png'
	},
	{
		id: '37a0c3a5-4829-4fe2-b17f-dce6e4b22b51',
		name: 'Green Olive and Fig Fantasy Pizza',
		description:
			'Embark on a fantasy of Mediterranean flavors with our Green Olive and Fig Fantasy Pizza. Salty green olives, sweet figs, and Gouda on a thin whole wheat crust create a fantasy of flavors. The saltiness of green olives, the sweetness of figs, and the richness of Gouda combine for a pizza that takes you on a Mediterranean journey. Savor this exclusive creation only at our restaurant.',
		ingredients: ['green olives', 'figs', 'Gouda'],
		image: 'fb2872cb-3245-48fc-a715-044f0f20ff92.png'
	},
	{
		id: 'ea228a65-79d4-43f5-a95d-b5a46c2e8f91',
		name: 'Caramelized Onion and Apple Affair Pizza',
		description:
			'Indulge in an affair of sweet and savory bliss with our Caramelized Onion and Apple Affair Pizza. Rich caramelized onions, crisp apple slices, and sharp cheddar on a golden crust create an affair of sweet and savory delights. The richness of caramelized onions, the crispness of apple slices, and the sharpness of cheddar combine for a pizza that is truly an affair. Savor this exclusive creation only at our restaurant.',
		ingredients: ['caramelized onions', 'apple slices', 'cheddar'],
		image: '2d6050cd-9486-4976-bbbe-105060fa6f71.png'
	}
];

export default pizzas;
