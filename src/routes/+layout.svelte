<script lang="ts">
	import '../app.css'; // Import global styles
	import Navigation from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import { ToastProvider } from '@skeletonlabs/skeleton-svelte'; // Import ToastProvider

	let { children } = $props();
</script>

<!-- ToastProvider should wrap the main content -->
<ToastProvider>
	<div class="relative container flex min-h-screen flex-col">
		<Navigation />
		<main class="flex-grow">
			{@render children()}
		</main>
		<Footer />
	</div>
</ToastProvider>
