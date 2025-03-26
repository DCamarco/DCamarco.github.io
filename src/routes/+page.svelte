<script>
	import Hero from '$lib/components/Hero/Hero.svelte';
	let theme = $state('light');
	function toggleTheme() {
		let outerHTML = document.getElementsByTagName('html')[0];
		if (theme === 'light') {
			theme = 'dark';
			outerHTML.className = 'dark';
		} else {
			theme = 'light';
			outerHTML.className = 'light';
		}
	}
</script>

<Hero />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a>
<button onclick={() => toggleTheme()} class="btn preset-filled-primary-500">
	Dark/Light Mode
</button>
