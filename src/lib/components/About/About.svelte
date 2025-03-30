<script lang="ts">
	import IconCode from '@lucide/svelte/icons/code';
	import IconServer from '@lucide/svelte/icons/server';
	import IconDatabase from '@lucide/svelte/icons/database';

	const skills = $state([
		{ name: 'Svelte / SvelteKit', icon: IconCode, category: 'Frontend' },
		{ name: 'React / Next.js', icon: IconCode, category: 'Frontend' },
		{ name: 'TypeScript', icon: IconCode, category: 'Frontend' },
		{ name: 'Tailwind CSS', icon: IconCode, category: 'Frontend' },
		{ name: 'HTML & CSS', icon: IconCode, category: 'Frontend' },
		{ name: 'Node.js', icon: IconServer, category: 'Backend' },
		{ name: 'Python', icon: IconServer, category: 'Backend' },
		{ name: 'PostgreSQL', icon: IconDatabase, category: 'Database' },
		{ name: 'MongoDB', icon: IconDatabase, category: 'Database' },
		{ name: 'SurrealDB', icon: IconDatabase, category: 'Database' },
		{ name: 'Docker', icon: IconServer, category: 'DevOps' },
		{ name: 'Git', icon: IconCode, category: 'Tools' },
		{ name: 'StrapiCMS', icon: IconDatabase, category: 'Database' },
		{ name: 'GraphQL', icon: IconCode, category: 'Tools' },
		{ name: 'Apollo', icon: IconCode, category: 'Tools' }
	]);
</script>

<section id="about" class="section py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="section-title text-center">
			<h2 class="h2 mb-4 font-bold">About Me</h2>
			<p class="mx-auto max-w-2xl opacity-80">
				A brief overview of my background, passion for software development, and key skills.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
			<div class="message-box space-y-4">
				<h3 class="h4 font-semibold">My Journey</h3>
				<p class="opacity-90">
					Driven by a deep drive to learn and change the world through solving meaningful problems,
					I ventured into the world of software development. I thrive on solving complex problems
					and crafting elegant, efficient solutions. My experience spans both frontend and backend
					development, allowing me to build complete and robust applications.
				</p>
				<p class="opacity-90">
					I'm a strong believer in continuous learning and staying updated with the latest industry
					trends. Collaboration and clear communication are key aspects of my work ethic. Let's
					build something amazing together!
				</p>
				<!-- <a
					href=""
					download="DominicCamarco_CV.pdf"
					class="btn preset-outlined hover:preset-filled mt-4"
				>
					<span>Download CV</span>
				</a> -->
			</div>

			<div class="skills-section">
				<h3 class="h4 mb-6 text-center font-semibold md:text-left">Core Skills</h3>
				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
					{#each skills as skill (skill.name)}
						<div class="card preset-tonal-surface flex items-center gap-3 p-3">
							<skill.icon size={20} class="opacity-75" />
							<span class="text-sm">{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
