"use strict";

(() => {
    const hero = document.getElementById("gmt-master-ii-hero");
    const stage = hero?.querySelector(".gmt-master-ii-sticky-stage");
    const image = stage?.querySelector(".gmt-master-ii-hero-image");
    const intro = hero?.querySelector(".gmt-master-ii-hero-copy");
    const story = hero?.querySelector(".gmt-master-ii-scroll-story");
    const indicator = hero?.querySelector(".gmt-master-ii-scroll-indicator");
    if (!hero || !stage || !image) return;

    const desktopQuery = window.matchMedia("(min-width: 993px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function reset() {
        hero.classList.remove("is-scroll-active");
        image.style.transform = "";
        if (intro) {
            intro.style.opacity = "";
            intro.style.transform = "";
        }
        if (story) {
            story.style.opacity = "";
            story.style.transform = "";
            story.setAttribute("aria-hidden", "true");
        }
        if (indicator) {
            indicator.style.opacity = "";
            indicator.style.transform = "";
        }
    }

    function render() {
        if (!desktopQuery.matches || reducedMotionQuery.matches) {
            reset();
            return;
        }

        hero.classList.add("is-scroll-active");
        const sectionTop = hero.getBoundingClientRect().top + window.scrollY;
        const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / travel));
        const storyProgress = Math.max(0, Math.min(1, (progress - 0.46) / 0.3));

        image.style.transform = `translate3d(0, ${progress * -66}%, 0)`;
        if (intro) {
            intro.style.opacity = String(1 - Math.min(1, progress * 5));
            intro.style.transform = `translate3d(0, ${progress * -32}px, 0)`;
        }
        if (indicator) {
            indicator.style.opacity = String(1 - Math.min(1, progress * 6));
            indicator.style.transform = `translate3d(-50%, ${progress * 18}px, 0)`;
        }
        if (story) {
            story.setAttribute("aria-hidden", String(storyProgress < 0.05));
            story.style.opacity = String(storyProgress);
            story.style.transform = `translate3d(0, ${(1 - storyProgress) * 35}px, 0)`;
        }
    }

    desktopQuery.addEventListener("change", render);
    reducedMotionQuery.addEventListener("change", render);
    window.addEventListener("scroll", render, { passive: true });
    window.addEventListener("resize", render);
    render();
})();

