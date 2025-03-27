<script>
    import profileImage from "$lib/assets/profile_image.png";
    import {Button, Input} from "flowbite-svelte";

    // Mange SVG lines
    const nbLinesSvg = 5;
    const spacing = -5;
    const tabLinesOffset = [];
    for (let i = 0; i < nbLinesSvg; i++) {
        tabLinesOffset.push(i * spacing);
    }

</script>

<div>
<!--    <svg class="line absolute" viewBox="0 0 600 800" width="100%" height="100%">-->
<!--        {#each tabLinesOffset as offset}-->
<!--            <path-->
<!--                    d="-->
<!--                    M {580 + offset},0-->
<!--                    V 170-->
<!--                    L {530 + offset} 220-->
<!--                    H {300 + offset}-->
<!--                    V {800 + offset}-->
<!--                    "-->

<!--                    fill="none" stroke="var(&#45;&#45;color-line)" stroke-width="1.5px"-->
<!--            />-->
<!--        {/each}-->
<!--    </svg>-->
    <section id="home-section" class="flex flex-col h-screen justify-center items-center gap-3">

        <div class="text-center m-10">
            <h1 class="text-6xl mb-2">Alec Petit-Siejak</h1>
            <h2 class="text-xl">Étudiant en informatique</h2>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row items-center">
            <form action="#about-section">
                <input class="text-text-dark dark:text-text border border-primary outline-none bg-primary rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2" type="submit" value="A propos de moi" />
            </form>
            <input class="text-primary hover:text-text-dark dark:hover:text-text border border-primary hover:bg-primary outline-none rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2" type="button" value="Télécharger mon CV" />
        </div>

    </section>

    <!--About Me-->
    <section id="about-section" class="flex flex-col sm:flex-row items-center my-10">

        <div class="bg-primary w-1/3">
            <img src={profileImage} alt="Profile Image" />
        </div>

        <div class="w-2/3 mx-10 my-5">
            <h1 class="text-2xl mb-5 text">A propos de moi</h1>
            <p class="leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id congue eros.
                Nam accumsan rutrum ligula, id bibendum risus feugiat sit amet.
                Nunc venenatis dignissim gravida. Cras lacinia, mi sed sollicitudin congue, lorem nibh lobortis elit, nec mattis tellus lacus semper lectus.
                Duis tristique ipsum non erat venenatis, eget dictum nulla lobortis.
            </p>
        </div>

    </section>

    <!--Skills-->
    <div class="text-2xl my-10">
        <h1>Mes compétences</h1>
    </div>

    <!--Portfolio-->
    <div class="text-2xl my-10">
        <h1>Mon portfolio</h1>
    </div>

    <!--Contact Me-->
    <div class="text-2xl my-10">
        <h1>Contactez-moi</h1>
    </div>

    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>

</div>



