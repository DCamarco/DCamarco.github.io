<script lang="ts">
	import '../app.css';
	import Navigation from '../lib/components/Navigation/Navigation.svelte';

	let { children } = $props();
</script>

<div class="container">
	<Navigation />
	<span class="my-96"></span>
	<span class="my-96"></span>
	{@render children()}
</div>
