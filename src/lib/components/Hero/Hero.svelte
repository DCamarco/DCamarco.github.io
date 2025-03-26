<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import DocImage from '$lib/assests/Doc_Image.jpeg';

	let displayText = '';
	const descriptions = ['Web Developer', 'Golfer', 'Gamer', 'Musician'];
	let currentIndex = 0;
	let isDeleting = false;
	let timer: ReturnType<typeof setTimeout>;

	function typeEffect() {
		const currentDescription = descriptions[currentIndex];

		if (!isDeleting) {
			if (displayText.length < currentDescription.length) {
				displayText = currentDescription.substring(0, displayText.length + 1);
				timer = setTimeout(typeEffect, 100);
			} else {
				isDeleting = true;
				timer = setTimeout(typeEffect, 1500);
			}
		} else {
			if (displayText.length > 0) {
				displayText = displayText.substring(0, displayText.length - 1);
				timer = setTimeout(typeEffect, 50);
			} else {
				isDeleting = false;
				currentIndex = (currentIndex + 1) % descriptions.length;
				timer = setTimeout(typeEffect, 700);
			}
		}
	}

	onMount(() => {
		timer = setTimeout(typeEffect, 700);
	});

	onDestroy(() => {
		clearTimeout(timer);
	});
</script>

<div class="flex h-96 w-full flex-row items-center justify-center gap-5">
	<img
		src={DocImage}
		alt="Hero"
		class="shadow-secondary-500 h-full w-full max-w-80 rounded-2xl shadow-md"
	/>
	<div>
		<h1 class="font-serif text-xl font-bold">Hello! I'm Dominic (Doc) Camarco</h1>
		<p>I'm a <span class="typewriter">{displayText}</span><span class="cursor">|</span></p>
	</div>
</div>

<style>
	.typewriter {
		display: inline-block;
	}

	.cursor {
		display: inline-block;
		font-weight: bold;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
