<script lang="ts">
	export let data;
</script>

<ul>
	{#each data.pizzas as pizza}
		<li>
			<a href="/pizza/{pizza.slug}">{pizza.name}</a>
		</li>
	{/each}
</ul>

<style>
	li {
		background-color: var(--yellow);
	}
	li:nth-child(2n) {
		background-color: var(--orange);
	}
	li:is(:active, :focus-within, :hover) {
		background-color: var(--green);
	}
	a {
		display: block;
		padding: 0.25rem 1rem;
	}
</style>
