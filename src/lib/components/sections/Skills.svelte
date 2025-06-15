<script>
	import { onMount } from 'svelte';
	import skills from "$lib/assets/json/skills.json"

	let gradient;
	let skillsSection;

	onMount(() => {
		const handleScroll = () => {
			const sectionTop = skillsSection.offsetTop;
			const sectionHeight = skillsSection.offsetHeight;
			const scrollY = window.scrollY + window.innerHeight / 2;

			if (scrollY < sectionTop || scrollY > sectionTop + sectionHeight)
				return;

			const progress = Math.min(1, Math.max(0, (scrollY - sectionTop) / sectionHeight));
			const yStart = progress * 1147;
			const yEnd = yStart + 50;

			console.log(progress);

			if (gradient) {
				gradient.setAttribute('y1', yStart.toFixed(2));
				gradient.setAttribute('y2', yEnd.toFixed(2));
			}
		};

		window.addEventListener('scroll', handleScroll)
		handleScroll();
	});
</script>

<section bind:this={skillsSection} id="skills" class="section max-w-screen-xl w-full mx-auto">
	<h2 class="section-title">MES COMPETENCES</h2>
	<div class="flex justify-around lg:gap-5">

		{#each skills as skill, i}
			<div class="flex flex-col items-center w-1/3 gap-7">
				<h3 class="text-xl lg:text-3xl">{skill.category}</h3>

				<div class="group flex flex-col items-center overflow-hidden w-60 h-200 gap-7">
					{#each Array(2) as _}
						<div class="{i % 2 === 0 ? 'animate-slide-up-infinite' : 'animate-slide-down-infinite'} group-hover:motion-paused flex flex-col gap-7">
							{#each skill.technologies as tech}
								<img
									alt={tech.name}
									src={tech.image}
									class="w-18 lg:w-30 h-18 lg:h-30"
								/>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/each}

	</div>
</section>