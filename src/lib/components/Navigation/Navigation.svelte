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
		<a href="/"><h1 class="font-serif text-2xl font-bold">Dominic.</h1></a>
	</div>
	<div class="flex items-center justify-evenly">
		<Navigation.Tile href="#about">About</Navigation.Tile>
		<Navigation.Tile href="#projects">Projects</Navigation.Tile>
		<Navigation.Tile href="#contact">Contact</Navigation.Tile>
	</div>
</Navigation.Bar>
