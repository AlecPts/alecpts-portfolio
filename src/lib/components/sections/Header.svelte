<script>
	import { onMount } from 'svelte';

	let header;
	let posY;

	onMount(() => {
		const handleScroll = () => {

			const header = document.querySelector('.fixed');

			if (window.scrollY < posY) {
				header.classList.remove('-translate-y-full');
				header.classList.add('translate-y-0');
			} else {
				header.classList.remove('translate-y-0');
				header.classList.add('-translate-y-full');
			}
			posY = window.scrollY;
			console.log(posY);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
	});
</script>

<div bind:this={header} class="fixed inset-x-0 w-full bg-white z-10 px-5 py-6 transition-all duration-300 ease-in-out">
	<div class="flex justify-between items-center max-w-screen-xl mx-auto">
		<a href="/static" class="text-xl"><strong>Alec</strong>Pts</a>
		<nav class="flex items-center space-x-7">
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#skills">Skills</a>
			<a href="#contact">Contact</a>
		</nav>
	</div>
</div>
