<script>
    // Importations CSS et modules
    import '../app.css';
    import { Header } from "$lib/index.js";
    // import particlesJS from 'particles.js';
    // import {onMount} from "svelte";
    //
    // // Initialisation des variables
    let { children } = $props();
    //
    // onMount(() => {
    //     if (typeof window !== 'undefined') {
    //         particlesJS.load('particles', '/particles.json', function() {
    //             console.log('particles.js config loaded');
    //         });
    //     }
    // });

</script>


<div>
    <Header/>
    <div id="particles"></div>
    <main class="max-w-screen-lg mx-auto sm:max-w-full md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md px-4">
        {@render children()}
    </main>
</div>

