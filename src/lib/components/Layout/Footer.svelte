<script lang="ts">
	import IconGithub from '@lucide/svelte/icons/github';
	import IconLinkedin from '@lucide/svelte/icons/linkedin';
	import IconMail from '@lucide/svelte/icons/mail';

	const currentYear = new Date().getFullYear();
</script>

<footer class="copyrights border-surface-300-700 border-t py-8">
	<div class="container mx-auto px-4">
		<div class="footer-distributed flex flex-col items-center justify-between gap-4 md:flex-row">
			<div class="footer-left text-center md:text-left">
				<p class="footer-company-name text-sm opacity-75">
					&copy; {currentYear} Dominic Camarco. All Rights Reserved.
				</p>
				<!-- Optional Links -->
				<!-- <p class="footer-links text-sm mt-1">
					<a href="#home" class="anchor hover:text-primary-500">Home</a>
					<a href="#about" class="anchor hover:text-primary-500">About</a>
					<a href="#projects" class="anchor hover:text-primary-500">Projects</a>
					<a href="#contact" class="anchor hover:text-primary-500">Contact</a>
				</p> -->
			</div>
			<div class="footer-right flex items-center gap-4">
				<a
					href="mailto:your.email@example.com"
					class="text-surface-500 hover:text-primary-500"
					aria-label="Email"
				>
					<IconMail size={20} />
				</a>
				<a
					href="https://github.com/your-github"
					target="_blank"
					rel="noopener noreferrer"
					class="text-surface-500 hover:text-primary-500"
					aria-label="GitHub"
				>
					<IconGithub size={20} />
				</a>
				<a
					href="https://linkedin.com/in/your-linkedin"
					target="_blank"
					rel="noopener noreferrer"
					class="text-surface-500 hover:text-primary-500"
					aria-label="LinkedIn"
				>
					<IconLinkedin size={20} />
				</a>
			</div>
		</div>
	</div>
	<!-- end container -->
</footer>
<!-- end copyrights -->
