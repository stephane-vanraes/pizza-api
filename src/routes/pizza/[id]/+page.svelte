<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import type { Pizza } from '$lib/data/pizza';

	export let data: Pizza;
</script>

<a href="/pizza">
	<Icon name="arrow-left" />
	<span>Back to list</span>
</a>

<div>
	<img src="/images/{data.image}" alt="" />
	<div>
		<h2>{data.name}</h2>
		<p>{data.description}</p>
		<ul>
			{#each data.ingredients as ingredient}
				<li>{ingredient}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	a {
		inline-size: max-content;
		margin-block-end: 2rem;
		padding: 0.25rem 1rem;
	}
	a:is(:active, :focus, :hover) {
		background-color: white;
	}
	div {
		align-items: center;
		display: flex;
		gap: 1rem;
	}
	img {
		border-radius: 2rem;
	}
	div > div {
		flex-direction: column;
	}
	h2 {
		border-block-end: 2px solid black;
		font-weight: 600;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		font-size: 0.75rem;
		gap: 0.5rem;
		text-transform: lowercase;
	}
</style>
