<script>
    import profileImage from "$lib/assets/images/profile_image.png";
    import {Button, Card, Checkbox, Img, Input, Label, Textarea} from "flowbite-svelte";
    import {onMount} from "svelte";
    import { setupScrollAnimation } from "$lib/assets/animations/staggering.js";

    // Skills logos animation
    let logosAnimation;

    onMount(() => {
        logosAnimation = setupScrollAnimation("#skills-container", ".logo")();

        return () => {
            logosAnimation();
        };
    });

</script>

<div class="flex flex-col gap-10">

    <section id="home-section" class="flex flex-col h-screen justify-center items-center gap-3">

        <div class="text-center m-10">
            <p class="text-6xl mb-2">Alec Petit-Siejak</p>
            <h2 class="text-xl">Étudiant en informatique</h2>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row items-center">
            <form action="#about">
                <input class="text-text-dark dark:text-text border border-primary outline-none bg-primary rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200 ease-in-out" type="submit" value="À propos de moi" />
            </form>

            <a
                    href="/src/lib/assets/images/cv-alec-petit-siejak.pdf"
                    download="cv-alec-petit-siejak.pdf"
                    class="download-button text-primary hover:text-text-dark dark:hover:text-text border border-primary hover:bg-primary outline-none rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out"
            >
                Télécharger mon CV
            </a>

        </div>

    </section>

    <!--About Me-->
    <section id="about" class="my-10">

        <h1 class="text-center">À propos de moi</h1>

        <div class="flex flex-col sm:flex-row w-full gap-5">
            <img class="sm:w-1/3 bg-linear-to-t from-accent to-secondary" src={profileImage} alt="Profile Image" />

            <div class="sm:w-2/3 p-3">
                <p class="leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id congue eros.
                    Nam accumsan rutrum ligula, id bibendum risus feugiat sit amet.
                    Nunc venenatis dignissim gravida. Cras lacinia, mi sed sollicitudin congue, lorem nibh lobortis elit, nec mattis tellus lacus semper lectus.
                    Duis tristique ipsum non erat venenatis, eget dictum nulla lobortis.
                </p>

                <form class="flex justify-center mt-7" action="#contact">
                    <input class="text-primary hover:text-text-dark dark:hover:text-text border border-primary hover:bg-primary outline-none rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out" type="submit" value="Contactez-moi" />
                </form>
            </div>
        </div>

    </section>

    <!--Skills-->
    <section class="my-10">
        <h1 class="text-center">Mes compétences</h1>

        <div id="skills-container" class="flex flex-wrap justify-center gap-8">
            <Img class="logo" src="src/lib/assets/images/logos/html-logo.svg" alt="HTML Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/css-logo.svg" alt="CSS Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/javascript-logo.svg" alt="Javascript Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/tailwind-logo.svg" alt="Tailwind Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/php-logo.svg" alt="PHP Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/mysql-logo.svg" alt="MySQL Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/mongodb-logo.svg" alt="MongoDB Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/java-logo.svg" alt="Java Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/linux-logo.svg" alt="Linux Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/svelte-logo.svg" alt="Svelte Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/symfony-logo.svg" alt="Symfony Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/android-studio-icon.svg" alt="Android Studio Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/git-logo.svg" alt="Git Logo" imgClass="h-20" />
            <Img class="logo" src="src/lib/assets/images/logos/godot-logo.svg" alt="Godot Logo" imgClass="h-20" />
        </div>
    </section>

    <!--Portfolio-->
    <section class="my-10">
        <h1 class="text-center">Mon portfolio</h1>

        <div class="flex flex-col items-center gap-10">
            <Card class="dark:bg-secondary-dark" img="src/lib/assets/images/projects/smartdesk-project.png" href="/" horizontal size="xl">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SmartDesk</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </Card>

            <Card class="dark:bg-secondary-dark" img="src/lib/assets/images/projects/paniervip-project.png" href="/" horizontal size="xl" reverse>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PanierVIP</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </Card>
        </div>

    </section>

    <!--Contact Me-->
    <section id="contact" class="my-10">
        <h1 class="text-center">Contactez-moi</h1>

        <Card class="dark:bg-secondary-dark rounded-xl" size="xl">
            <form class="flex flex-col space-y-6" action="/">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">Envoyez-moi un petit message !</h3>

                <Label class="space-y-2">
                    <span>Nom</span>
                    <Input class="dark:bg-tertiary-dark" type="text" name="name" placeholder="Feldspath" required />
                </Label>
                <Label class="space-y-2">
                    <span>Email</span>
                    <Input class="dark:bg-tertiary-dark" type="email" name="email" placeholder="feldspath@atrebois.com" required />
                </Label>
                <Label class="space-y-2">
                    <span>Message</span>
                    <Textarea class="dark:bg-tertiary-dark" name="message" placeholder='“Laisse-moi deviner… Un Coelacanthe ?”' rows="4"  required />
                </Label>

                <Button type="submit" class="w-full">Envoyer</Button>
            </form>
        </Card>

    </section>

</div>



