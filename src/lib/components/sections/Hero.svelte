<script>
	import { onMount } from 'svelte';
	import AvatarIcon from '$lib/components/AvatarIcon.svelte';
	import DownloadIcon from '$lib/components/DownloadIcon.svelte';

	let vantaRef;

	onMount(() => {
		const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-blue').trim();

		const effect = window.VANTA.DOTS({
			el: vantaRef,
			mouseControls: true,
			touchControls: true,
			gyroControls: true,
			minHeight: 200,
			minWidth: 200,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0xffffff,
			backgroundColor,
			showLines: false
		});

		return () => {
			effect?.destroy();
		};
	});
</script>

<section
	bind:this={vantaRef} id="hero"
	class="section relative flex flex-col items-center justify-center min-h-screen w-full mx-auto text-white"
>
	<div class="flex flex-col items-center text-center pt-10">
		<h1 class="text-5xl lg:text-9xl font-bold mb-3 lg:mb-8">Alec Petit-Siejak</h1>
		<h2 class="text-2xl lg:text-5xl">Étudiant en informatique</h2>

		<div class="flex flex-col lg:flex-row items-center mt-20 gap-5">
			<form action="#about">
				<button type="submit" class="group flex items-center text-md font-bold text-white bg-yellow outline-none rounded-full px-5 py-3 text-center gap-3">
					<AvatarIcon />
					A propos de moi
				</button>
			</form>

			<a
				href="/images/cv-alec-petit-siejak-2025.pdf"
				download="cv-alec-petit-siejak-2025.pdf"
				class="download-button group flex items-center text-md font-bold text-white border border-white outline-none rounded-full px-5 py-3 text-center gap-3"
			>
				<DownloadIcon />
				Télécharger mon CV
			</a>
		</div>
	</div>
</section>