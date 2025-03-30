<script lang="ts">
	import IconMail from '@lucide/svelte/icons/mail';
	import GitHubBtn from '../Buttons/GitHubBtn.svelte';
	import LinkedInBtn from '../Buttons/LinkedInBtn.svelte';
</script>

<section id="contact" class="section db py-16 md:py-24">
	<div class=" mx-auto px-4">
		<div class="section-title text-center">
			<h2 class="h2 mb-4 font-bold text-white">Get In Touch</h2>
			<p class="text-surface-300-700 mx-auto max-w-2xl">
				Interested in collaborating or have a question? Feel free to reach out!
			</p>
		</div>

		<div class="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
			<a href="mailto:doccamarco@gmail.com" class="btn preset-filled-primary-500 btn-lg">
				<IconMail size={20} />
				<span>doccamarco@gmail.com</span></a
			>
			<GitHubBtn />
			<LinkedInBtn />
		</div>

		<!-- Optional: Add a simple contact form later if needed using SvelteKit actions and Skeleton form components -->
		<!-- <div class="row">
			<div class="col-md-12">
				<div class="contact_form"> ... </div>
			</div>
		</div> -->
	</div>
</section>
