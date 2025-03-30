<script lang="ts">
	import IconMail from '@lucide/svelte/icons/mail';
	import IconGithub from '@lucide/svelte/icons/github';
	import IconLinkedin from '@lucide/svelte/icons/linkedin';
</script>

<section id="contact" class="section db py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="section-title text-center">
			<h2 class="h2 mb-4 font-bold text-white">Get In Touch</h2>
			<p class="text-surface-300-700 mx-auto max-w-2xl">
				Interested in collaborating or have a question? Feel free to reach out!
			</p>
		</div>

		<div class="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
			<a href="mailto:your.email@example.com" class="btn preset-filled-primary-500 btn-lg">
				<IconMail size={20} />
				<span>your.email@example.com</span>
			</a>
			<a
				href="https://github.com/your-github"
				target="_blank"
				rel="noopener noreferrer"
				class="btn preset-outlined-surface btn-lg"
				aria-label="GitHub Profile"
			>
				<IconGithub size={20} />
				<span>GitHub</span>
			</a>
			<a
				href="https://linkedin.com/in/your-linkedin"
				target="_blank"
				rel="noopener noreferrer"
				class="btn preset-outlined-surface btn-lg"
				aria-label="LinkedIn Profile"
			>
				<IconLinkedin size={20} />
				<span>LinkedIn</span>
			</a>
		</div>

		<!-- Optional: Add a simple contact form later if needed using SvelteKit actions and Skeleton form components -->
		<!-- <div class="row">
			<div class="col-md-12">
				<div class="contact_form"> ... </div>
			</div>
		</div> -->
	</div>
</section>
