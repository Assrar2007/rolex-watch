"use strict";

(() => {
    const hero = document.querySelector("[data-reference-scroll-hero]");
    const stage = hero?.querySelector(".reference-scroll-stage");
    const image = stage?.querySelector(".reference-scroll-image");
    const intro = stage?.querySelector(".reference-scroll-intro");
    const story = stage?.querySelector(".reference-scroll-story");
    const indicator = stage?.querySelector(".reference-scroll-indicator");
    if (!hero || !stage || !image) return;

    const desktop = window.matchMedia("(min-width: 993px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function reset() {
        hero.classList.remove("is-scroll-active");
        image.style.transform = "";
        if (intro) {
            intro.style.opacity = "";
            intro.style.transform = "";
            intro.style.pointerEvents = "";
        }
        if (story) {
            story.style.opacity = "";
            story.style.transform = "";
            story.setAttribute("aria-hidden", "false");
        }
        if (indicator) {
            indicator.style.opacity = "";
            indicator.style.transform = "";
        }
    }

    function render() {
        frame = 0;
        if (!desktop.matches || reducedMotion.matches) {
            reset();
            return;
        }

        hero.classList.add("is-scroll-active");
        const top = hero.getBoundingClientRect().top + window.scrollY;
        const travel = Math.max(1, hero.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, (window.scrollY - top) / travel));
        const reveal = Math.max(0, Math.min(1, (progress - 0.48) / 0.28));

        image.style.transform = `translate3d(0, ${-68 * progress}%, 0) scale(${1 + 0.035 * progress})`;
        if (intro) {
            intro.style.opacity = String(1 - Math.min(1, progress * 5));
            intro.style.transform = `translate3d(0, ${-35 * progress}px, 0)`;
            intro.style.pointerEvents = progress > 0.2 ? "none" : "";
        }
        if (story) {
            story.style.opacity = String(reveal);
            story.style.transform = `translate3d(0, ${(1 - reveal) * 35}px, 0)`;
            story.setAttribute("aria-hidden", String(reveal < 0.05));
        }
        if (indicator) {
            indicator.style.opacity = String(1 - Math.min(1, progress * 6));
            indicator.style.transform = `translate3d(-50%, ${18 * progress}px, 0)`;
        }
    }

    function schedule() {
        if (!frame) frame = window.requestAnimationFrame(render);
    }

    desktop.addEventListener("change", schedule);
    reducedMotion.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    render();
})();
