<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';

	// Theme Toggle State
	let themeIsDark = $state(true); // Default to dark as per app.html

	function toggleTheme() {
		themeIsDark = !themeIsDark;
		// Accessing document directly is necessary here for theme switching.
		// Ensure this code only runs on the client if using SSR without hydration,
		// but for a typical SvelteKit app, this runs client-side after hydration.
		document.documentElement.classList.toggle('dark', themeIsDark);
		document.documentElement.classList.toggle('light', !themeIsDark);
	}
</script>

<AppBar
	toolbarGridCols="grid-cols-3"
	centerAlign="place-self-center"
	shadow="shadow-md"
	background="preset-filled-surface-100-900"
	base="sticky top-0 z-50 w-full"
>
	<!-- Lead Slot -->
	{#snippet lead()}
		<a href="/" class="h3 font-serif font-bold">Dominic.</a>
	{/snippet}

	<!-- Default Slot (Center) -->
	<div class="flex items-center justify-center gap-4 md:gap-8">
		<a class="anchor" href="#about">About</a>
		<a class="anchor" href="#projects">Projects</a>
		<a class="anchor" href="#contact">Contact</a>
	</div>

	<!-- Trail Slot -->
	{#snippet trail()}
		<button
			class="btn btn-sm preset-icon hover:preset-tonal"
			onclick={toggleTheme}
			aria-label="Toggle Theme"
		>
			{#if themeIsDark}
				<IconSun size={20} />
			{:else}
				<IconMoon size={20} />
			{/if}
		</button>
	{/snippet}
</AppBar>
