<script lang="ts">
	import type { IconType } from './Icons.svelte';

	export let name: IconType;
</script>

<svg viewBox="0 0 24 24">
	<use xlink:href="#svg-{name}" />
</svg>

<style>
	svg {
		height: 1em;
		width: 1em;
	}
</style>
