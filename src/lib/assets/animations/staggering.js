import anime from "animejs";

export function setupScrollAnimation(containerSelector, logoSelector) {
    let elements;
    let skillsContainer;
    let logosAnimation;
    let lastScrollY = window.scrollY; // Garde en mémoire la dernière position du scroll

    function updateAnimation() {
        const rect = skillsContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";
        lastScrollY = window.scrollY;

        let percent = (viewportHeight - rect.top) / (viewportHeight - rect.height);
        percent = Math.min(Math.max(percent, 0), 1);

        // Si l'utilisateur défile vers le bas et sort de la div, inverse l'animation
        if (scrollDirection === "down" && rect.top > viewportHeight) {
            logosAnimation.reverse();
        }
        // Si l'utilisateur revient dans la div, rejoue l'animation normalement
        else if (scrollDirection === "up" && rect.bottom > 0) {
            logosAnimation.reverse();
        }

        logosAnimation.seek(logosAnimation.duration * percent);
    }

    function initAnimation() {
        elements = document.querySelectorAll(logoSelector);
        skillsContainer = document.querySelector(containerSelector);

        logosAnimation = anime({
            targets: elements,
            translateY: [270, 0],
            delay: anime.stagger(100, { from: "center" }),
            duration: 5000,
            easing: "easeInOutSine",
            autoplay: false
        });

        window.addEventListener("scroll", updateAnimation);
        updateAnimation();

        return () => {
            window.removeEventListener("scroll", updateAnimation);
        };
    }

    return initAnimation;
}
