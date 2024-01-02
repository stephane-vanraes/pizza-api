<script lang="ts">
	import { page } from '$app/stores';
	import Icons from '$lib/components/Icons.svelte';
	import '../app.css';
</script>

<header>
	<h1>Pizza-API</h1>
	<nav>
		<a href="/" class:active={$page.route.id == '/'}>Home</a>
		<a href="/pizza" class:active={$page.route.id?.startsWith('/pizza')}>Pizza</a>
		<a href="/about" class:active={$page.route.id == '/about'}>About</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<span>&copy; 2024 Stephane Vanraes</span>
</footer>

<Icons />

<style>
	main {
		flex: 1;
		margin: auto;
		max-width: 96ch;
		width: 100%;
	}

	header {
		align-items: center;
		background-color: var(--red);
		color: white;
		display: flex;
		justify-content: space-between;
	}
	h1 {
		font-weight: 600;
		padding: 0.5rem 1rem;
	}
	nav {
		display: flex;
	}

	nav > a {
		padding: 0.5rem 1rem;
	}
	nav > a:where(:active, :focus, :hover, .active) {
		background-color: white;
		color: var(--red);
	}

	footer {
		background-color: var(--red);
		color: white;
		padding: 0.5rem 1rem;
	}
</style>
