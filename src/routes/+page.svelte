<script>
    import profileImage from "$lib/assets/profile_image.png";

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
    <section id="home-section" class="scroll-section">
        <div class="h-40"></div>

        <div class="text-center m-10">
            <h1 class="text-6xl mb-2">Alec Petit-Siejak</h1>
            <h2 class="text-xl">Étudiant en informatique</h2>
        </div>

        <div class="h-20"></div>
    </section>

<!--    <div class="flex justify-center">-->
<!--        <div class="bg-primary w-3xs rounded-xl">-->
<!--            &lt;!&ndash;            <img src={profileImage} alt="Profile Image" />&ndash;&gt;-->
<!--        </div>-->
<!--    </div>-->

    <!--About Me-->
    <div class="text-2xl my-10">
        <h1>À propos de moi</h1>
    </div>

    <!--Projects-->
    <div class="text-2xl my-10">
        <h1>Mes projets</h1>
    </div>

    <!--Skills-->
    <div class="text-2xl my-10">
        <h1>Mes compétences</h1>
    </div>

    <!--Contact Me-->
    <div class="text-2xl my-10">
        <h1>Contactez-moi</h1>
    </div>

    <div class="h-96"></div>
    <div class="h-96"></div>
    <div class="h-96"></div>

</div>



