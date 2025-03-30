<script lang="ts">
	import { onMount, onDestroy } from 'svelte'; // onMount/onDestroy is appropriate here
	import DocImage from '$lib/assests/Doc_Image.jpeg'; // Assuming this path is correct
	import GitHubBtn from '../Buttons/GitHubBtn.svelte';
	import LinkedInBtn from '../Buttons/LinkedInBtn.svelte';

	let displayText = $state('');
	const descriptions = [
		'Software Engineer',
		'Full-Stack Developer',
		'Svelte Enthusiast',
		'Lifelong Learner',
		'Golfer'
	];
	let currentIndex = $state(0);
	let isDeleting = $state(false);
	let typingSpeed = $state(100);
	let timer: ReturnType<typeof setTimeout>;

	function typeEffect() {
		const currentDescription = descriptions[currentIndex];

		if (!isDeleting) {
			// Typing
			if (displayText.length < currentDescription.length) {
				displayText = currentDescription.substring(0, displayText.length + 1);
				typingSpeed = 100;
			} else {
				// Pause at end
				isDeleting = true;
				typingSpeed = 1500; // Pause duration
			}
		} else {
			// Deleting
			if (displayText.length > 0) {
				displayText = displayText.substring(0, displayText.length - 1);
				typingSpeed = 50; // Deleting speed
			} else {
				// Switch to next description
				isDeleting = false;
				currentIndex = (currentIndex + 1) % descriptions.length;
				typingSpeed = 700; // Delay before typing next
			}
		}
		timer = setTimeout(typeEffect, typingSpeed);
	}

	onMount(() => {
		timer = setTimeout(typeEffect, 700); // Initial delay
	});

	onDestroy(() => {
		clearTimeout(timer);
	});
</script>

<section
	id="home"
	class="section flex h-[calc(100vh-64px)] items-center justify-center text-center"
>
	<div
		class="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-12 md:text-left"
	>
		<img
			src={DocImage}
			alt="Dominic Camarco"
			class="card-hover size-48 rounded-full object-cover shadow-lg md:size-64"
		/>
		<div class="space-y-4">
			<h1 class="h1 font-serif font-bold">Dominic (Doc) Camarco</h1>
			<h2 class="h3">
				I'm a <span class="typewriter text-primary-500 font-semibold">{displayText}</span><span
					class="cursor">|</span
				>
			</h2>
			<p class="max-w-xl opacity-80">
				Passionate about building performant and user-friendly web applications. Always exploring
				new technologies and seeking challenging projects.
			</p>
			<div class="flex justify-center gap-4 md:justify-start">
				<GitHubBtn />
				<LinkedInBtn />
			</div>
		</div>
	</div>
</section>

<style>
	/* Simple typewriter cursor blink */
	.typewriter {
		display: inline-block;
		min-height: 1.2em; /* Prevent layout shift */
	}

	.cursor {
		display: inline-block;
		font-weight: bold;
		animation: blink 1s step-end infinite;
		color: var(--color-primary-500); /* Use theme color */
		margin-left: 2px;
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
