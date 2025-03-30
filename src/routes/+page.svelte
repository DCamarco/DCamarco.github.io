<script lang="ts">
	import Hero from '$lib/components/Hero/Hero.svelte';
	import About from '$lib/components/About/About.svelte';
	import Projects from '$lib/components/Projects/Projects.svelte';
	import Contact from '$lib/components/Contact/Contact.svelte';
</script>

<svelte:head>
	<title>Dominic Camarco - Software Engineer</title>
	<meta
		name="description"
		content="Personal portfolio website for Dominic Camarco, showcasing projects and skills in software development."
	/>
	<meta property="og:title" content="Dominic Camarco - Software Engineer" />
	<meta property="og:description" content="Portfolio showcasing projects and skills." />
</svelte:head>

<Hero />
<About />
<Projects />
<Contact />
