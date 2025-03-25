<script>
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	let value = $state('');
</script>

<Navigation.Bar
	{value}
	onValueChange={(newValue) => (value = newValue)}
	background="bg-transparent"
	tilesJustify="justify-between"
	padding="px-40"
	classes="sticky top-0 z-50"
>
	<div class="flex items-center justify-center">
		<Navigation.Tile href="#/"><h1>Dominic.</h1></Navigation.Tile>
	</div>
	<div class="flex items-center justify-evenly">
		<Navigation.Tile href="#about">About</Navigation.Tile>
		<Navigation.Tile href="#projects">Projects</Navigation.Tile>
		<Navigation.Tile href="#contact">Contact</Navigation.Tile>
	</div>
</Navigation.Bar>
