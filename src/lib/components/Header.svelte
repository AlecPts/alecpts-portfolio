<script>
    import {DarkMode} from "flowbite-svelte";
    import {onMount} from "svelte";

    let header;

    onMount(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add("shadow-(--shadow)", "dark:shadow-(--shadow-dark)");
            } else if (window.scrollY === 0) {
                header.classList.remove("shadow-(--shadow)", "dark:shadow-(--shadow-dark)");
            }
        })
    });

</script>

<header
        class="w-full fixed bg-background dark:bg-background-dark z-10 transition-all duration-200 ease-in-out"
        bind:this={header}
>
    <div class="max-w-screen-lg mx-auto sm:max-w-full md:max-w-screen-md lg:max-w-screen-md xl:max-w-screen-md flex justify-between items-center px-4 py-2">
        <a href="#"><p class="text-lg">Alec</p></a>
        <DarkMode/>
    </div>

</header>