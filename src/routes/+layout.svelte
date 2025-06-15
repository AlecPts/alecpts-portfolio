<script>
	import '../app.css';
	import Header from '$lib/components/sections/Header.svelte';

	let { children } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
