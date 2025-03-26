<script>
    import '../app.css';
    import { Header } from "$lib/index.js";

    let {children} = $props();
</script>

<div>
    <Header/>
    <main class="max-w-screen-lg mx-auto sm:max-w-full md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-lg px-4">
        {@render children()}
    </main>
</div>

