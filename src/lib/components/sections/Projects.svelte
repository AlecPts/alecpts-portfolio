<script>
	import projects from "$lib/assets/json/projects.json"
	import skills from "$lib/assets/json/skills.json"

	const allTechnologies = skills.flatMap(skill => skill.technologies);
	function findTechByName(name) {
		return allTechnologies.find(tech => tech.name === name);
	}
</script>

<section id="projects" class="section max-w-screen-xl w-full mx-auto">
	<h2 class="section-title">PROJETS SELECTIONNES</h2>
	{#each projects as project}
		<div class="group border-t-2 last:border-b-2 border-gray-300">
			<div class="flex flex-col lg:flex-row justify-between">
				<div class="overflow-hidden h-30 group-hover:h-100 lg:h-40 lg:group-hover:h-100 transition-all duration-500 ease-in-out">
					<h3 class="my-10 text-4xl lg:text-7xl">{project.title}</h3>
					<p class="max-w-xl py-1 mb-6">{project.details}</p>
					<div class="flex space-x-3">
						{#each project.techs as tech}
							<img
								alt={tech}
								src={findTechByName(tech).image}
								class="w-10 h-10"
							/>
						{/each}
					</div>
				</div>

				<div class="relative flex items-center justify-center overflow-hidden h-0 group-hover:h-80 lg:h-40 lg:group-hover:h-100 transition-all duration-500 ease-in-out">
					<div class="absolute right-0">
						<p class="text-center invisible lg:visible">{project.description}</p>
					</div>
					<img
						alt={project.title}
						src={project.image}
						class="max-w-150 h-80 lg:translate-x-full lg:group-hover:translate-x-0 transition-all duration-500 ease-in-out"
					/>
				</div>
			</div>
		</div>
	{/each}
</section>