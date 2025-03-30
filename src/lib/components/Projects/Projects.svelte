<script lang="ts">
	import IconExternalLink from '@lucide/svelte/icons/external-link';

	const projects = $state([
		{
			title: 'Goldfinch',
			description:
				'A cutting-edge modern headless e-commerce front-end framework. Web application demonstrating modern frontend techniques with TypeScript, TailwindCSS, using Next.js. For our content management system, we used Strapi CMS to manage content and data, combined with BigCommerce.',
			imageUrl: '/goldfinch.png',
			techStack: [
				'TypeScript',
				'TailwindCSS',
				'React',
				'Nextjs',
				'BigCommerce',
				'StrapiCMS',
				'GraphQL'
			],
			liveUrl: 'https://westernsafety.com'
		},
		{
			title: 'Avalore Agency',
			description:
				'Working as the primary frontend developer this website is mainly a static website, designed with TailwindCSS and Next.js. Using TypeScript and React, we built a responsive and user-friendly website that showcases our services and portfolio. The website is optimized for SEO and mobile responsiveness. Using Strapi CMS to manage content and data, we created a highly authorable and customizable website that allows us to easily update and manage our content at a moments notice.',
			imageUrl: '/avalore.png',
			techStack: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'StrapiCMS'],
			liveUrl: 'https://avaloreagency.com'
		},
		{
			title: 'Frameflow',
			description:
				'Working as the primary frontend developer, this unique platform is designed to streamline the process of hiring content-creators in an e-commerce like scenario, by creating and managing digital content. Using React and Next.js, we built a responsive and user-friendly platform that allows users to easily create and manage their content. Primary features include using Stripe as the payment gateway, StreamChat as the chat platform, and StrapiCMS as the backend.',
			imageUrl: 'Frameflow.png',
			techStack: [
				'Typescript',
				'React',
				'Next.js',
				'TailwindCSS',
				'StrapiCMS',
				'Stripe',
				'StreamChat'
			],
			liveUrl: 'https://frameflow.co'
		}
		// Add more projects here
	]);
</script>

<section id="projects" class="section lb py-32 md:py-24">
	<div class="container mx-auto px-4">
		<div class="section-title text-center">
			<h2 class="h2 mb-4 font-bold">Projects</h2>
			<p class="mx-auto max-w-2xl opacity-80">
				A selection of projects I've worked on, showcasing strong technical skills and ability to
				deliver high-quality results.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.title)}
				<div
					class="card preset-filled-surface-100-900 border-surface-200-800 card-hover flex flex-col items-center justify-between overflow-hidden border-[1px]"
				>
					<header>
						<img
							src={project.imageUrl}
							alt="{project.title} screenshot"
							class="aspect-video max-h-fit w-full object-cover"
							loading="lazy"
						/>
					</header>
					<article class="space-y-4 p-4">
						<h3 class="h5 font-bold">{project.title}</h3>
						<p class="text-sm opacity-80">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2 overflow-scroll">
							{#each project.techStack as tech (tech)}
								<span class="chip preset-tonal-primary text-xs">{tech}</span>
							{/each}
						</div>
					</article>
					<footer class="border-surface-200-800 flex items-center justify-end gap-2 border-t p-4">
						{#if project.liveUrl}
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm preset-outlined-primary"
								aria-label="Live Demo for {project.title}"
							>
								<IconExternalLink size={16} />
								<span>Live URL</span>
							</a>
						{/if}
						<!-- {#if project?.repoUrl}
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm preset-outlined-surface"
								aria-label="GitHub Repository for {project.title}"
							>
								<IconGithub size={16} />
								<span>Code</span>
							</a>
						{/if} -->
					</footer>
				</div>
			{/each}
		</div>
	</div>
</section>
