"use strict";

/*=========================================================
  Venturo Chronométrie
  Main JavaScript
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initHeroSlider();
    initHeroDiscover();
    initWatchDetailPage();
    initStorytellingScroll();
    initNavbar();
    initNavigationMenu();
    initProductCards();
    initBackToTop();
    initScrollProgress();
    initSmoothScrolling();
    initCounterAnimation();

});

/*=========================================================
 HERO SLIDER
=========================================================*/

function initHeroSlider() {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slide-indicator .dot");

    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.toggle("active", i === index);

        });

        dots.forEach((dot, i) => {

            dot.classList.toggle("active", i === index);

        });

    }

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}

/*=========================================================
 HERO DISCOVER INTERACTION
 Navigates to distinct watch.html detail page
=========================================================*/

function initHeroDiscover() {

    const discoverButtons = document.querySelectorAll(".hero-discover-btn");

    discoverButtons.forEach(btn => {

        const href = btn.getAttribute("href");

        // Only intercept in-page anchors
        if (href && href.startsWith("#")) {

            btn.addEventListener("click", e => {

                const target = document.querySelector(href);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            });

        }

    });

}

/*=========================================================
 WATCH DETAIL PAGE DYNAMIC POPULATION
 Reads ?product= parameter and updates hero, specs, and cart
=========================================================*/

function initWatchDetailPage() {

    const heroWrapper = document.getElementById("watchHeroWrapper");

    if (!heroWrapper) return; // Only execute on watch.html

    const watchProducts = {

        datejust: {
            id: "daydate",
            eyebrow: "VENTURO CHRONOMÉTRIE",
            title: "Datejust",
            bgGradient: "transparent",
            desktopImg: "assets/images/hero4.png",
            teaserImg: "assets/images/hero4.png",
            mobileImg: "assets/images/hero4.png",
            alt: "Venturo Green Dial Datejust Watch",
            price: "₹8,50,000",
            specsTitle: "Datejust Technical Profile",
            specsDesc: "The archetype of the classic watch, celebrated for its timeless aesthetics, distinguished fluted bezel, and vibrant mint green sunray dial.",
            calibre: "Calibre 3255",
            reserve: "70 Hours",
            case: "41 mm, Oystersteel & Gold",
            water: "100 m / 330 ft",
            dial: "Mint Green Sunray with Chromalight",
            bracelet: "Jubilee, five-piece links"
        },

        daydate: {
            id: "daydate",
            eyebrow: "VENTURO CHRONOMÉTRIE",
            title: "Datejust",
            bgGradient: "transparent",
            desktopImg: "assets/images/hero4.png",
            teaserImg: "assets/images/hero4.png",
            mobileImg: "assets/images/hero4.png",
            alt: "Venturo Green Dial Datejust Watch",
            price: "₹8,50,000",
            specsTitle: "Datejust Technical Profile",
            specsDesc: "The archetype of the classic watch, celebrated for its timeless aesthetics, distinguished fluted bezel, and vibrant mint green sunray dial.",
            calibre: "Calibre 3255",
            reserve: "70 Hours",
            case: "41 mm, Oystersteel & Gold",
            water: "100 m / 330 ft",
            dial: "Mint Green Sunray with Chromalight",
            bracelet: "Jubilee, five-piece links"
        },

        skydweller: {
            id: "skydweller",
            eyebrow: "ANNUAL CALENDAR",
            title: "Sky-Dweller",
            bgGradient: "radial-gradient(circle at 50% 50%, #203a58 0%, #0d1a2d 100%)",
            desktopImg: "assets/images/hero2.png",
            mobileImg: "assets/images/hero2.png",
            alt: "Venturo Sky-Dweller Dual Time Watch",
            price: "₹9,20,000",
            specsTitle: "Sky-Dweller Technical Profile",
            specsDesc: "The Sky-Dweller combines dual time functionality with an annual calendar, making it the ideal companion for international travelers.",
            calibre: "Calibre 9002",
            reserve: "72 Hours",
            case: "42 mm, Oystersteel & White Gold",
            water: "100 m / 330 ft",
            dial: "Intense White with Saros calendar",
            bracelet: "Oyster, three-piece solid links"
        },

        seadweller: {
            id: "seadweller",
            eyebrow: "SATURATION DIVER",
            title: "Sea-Dweller",
            bgGradient: "radial-gradient(circle at 50% 50%, #17384a 0%, #091a24 100%)",
            desktopImg: "assets/images/hero3.png",
            mobileImg: "assets/images/hero3.png",
            alt: "Venturo Sea-Dweller Diver Watch",
            price: "₹9,80,000",
            specsTitle: "Sea-Dweller Technical Profile",
            specsDesc: "Engineered for professional divers, the Sea-Dweller withstands extreme underwater conditions while maintaining exceptional precision.",
            calibre: "Calibre 3235",
            reserve: "70 Hours",
            case: "43 mm, Oystersteel",
            water: "1,220 m / 4,000 ft",
            dial: "Black with Cerachrom ceramic bezel",
            bracelet: "Oyster with Glidelock extension"
        }

    };

    const urlParams = new URLSearchParams(window.location.search);
    const paramKey = (urlParams.get("product") || "datejust").toLowerCase();
    const data = watchProducts[paramKey] || watchProducts.datejust;

    document.title = `Venturo Chronométrie | ${data.title}`;

    const heroSection = document.getElementById("watch-hero");
    if (heroSection) {
        if (paramKey === "datejust" || paramKey === "daydate") {
            heroSection.style.background = "";
        } else {
            heroSection.style.background = data.bgGradient;
        }
    }

    const eyebrow = document.getElementById("watchEyebrow");
    if (eyebrow) eyebrow.textContent = data.eyebrow;

    const title = document.getElementById("watchTitle");
    if (title) title.textContent = data.title;

    const introDesc = document.getElementById("watchIntroDesc");
    if (introDesc) introDesc.textContent = data.specsDesc;

    const imgTeaser = document.getElementById("watchImgTeaser");
    if (imgTeaser) {
        if (data.teaserImg) {
            imgTeaser.src = data.teaserImg;
            imgTeaser.style.display = "";
        } else {
            imgTeaser.style.display = "none";
        }
    }

    const heroImg = document.getElementById("watchHeroImg");
    if (heroImg) {
        heroImg.src = data.desktopImg;
        heroImg.alt = data.alt;
    }

    const heroSource = document.getElementById("watchHeroSource");
    if (heroSource) heroSource.srcset = data.mobileImg;

    const price = document.getElementById("watchPrice");
    if (price) price.textContent = data.price;

    const specsTitle = document.getElementById("specsTitle");
    if (specsTitle) specsTitle.textContent = data.specsTitle;

    const specsDesc = document.getElementById("specsDescription");
    if (specsDesc) specsDesc.textContent = data.specsDesc;

    const specCalibre = document.getElementById("specCalibre");
    if (specCalibre) specCalibre.textContent = data.calibre;

    const specReserve = document.getElementById("specReserve");
    if (specReserve) specReserve.textContent = data.reserve;

    const specCase = document.getElementById("specCase");
    if (specCase) specCase.textContent = data.case;

    const specWater = document.getElementById("specWater");
    if (specWater) specWater.textContent = data.water;

    const specDial = document.getElementById("specDial");
    if (specDial) specDial.textContent = data.dial;

    const specBracelet = document.getElementById("specBracelet");
    if (specBracelet) specBracelet.textContent = data.bracelet;

    // Synchronize action button product IDs
    const heroBtn = document.getElementById("heroConfigureBtn");
    if (heroBtn) heroBtn.setAttribute("data-id", data.id);

    const specsCartBtn = document.getElementById("specsAddToCartBtn");
    if (specsCartBtn) specsCartBtn.setAttribute("data-id", data.id);

    const specsWishlistBtn = document.getElementById("specsWishlistBtn");
    if (specsWishlistBtn) specsWishlistBtn.setAttribute("data-id", data.id);

    // Initialize smooth scroll-driven feature for green Datejust watch
    if (paramKey === "datejust" || paramKey === "daydate") {
        initDatejustScrollExperience();
    } else if (heroSection) {
        heroSection.classList.remove("is-scroll-active");
    }

}

/*=========================================================
 DATEJUST SCROLL-DRIVEN EXPERIENCE
 - Single continuous master photographic hero (hero4.png)
 - Opening view: Upper half of watch enters from bottom, title & desc visible in upper viewport
 - Scroll transition: Same continuous image glides smoothly upward through viewport
 - Story view: Watch travels toward/past top of viewport as horology story appears beneath it
 - Reversible bidirectional scrub, responsive & accessible fallback
=========================================================*/

function initDatejustScrollExperience() {

    const heroSection = document.getElementById("watch-hero");
    const heroImg = document.getElementById("watchHeroImg");
    const headerOverlay = document.getElementById("watchHeaderOverlay");
    const titleGroup = document.getElementById("watchTitleGroup");
    const storyOverlay = document.getElementById("watchStoryOverlay");
    const scrollIndicator = document.getElementById("watchScrollIndicator");

    if (!heroSection || !heroImg) return;

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Responsive and reduced-motion handling
    const mm = gsap.matchMedia();

    mm.add({
        isDesktop: "(min-width: 993px) and (prefers-reduced-motion: no-preference)",
        isMobileOrReduced: "(max-width: 992px), (prefers-reduced-motion: reduce)"
    }, (context) => {
        const { isDesktop } = context.conditions;

        if (isDesktop) {
            heroSection.classList.add("is-scroll-active");

            // Initial baseline state:
            // Single master image hero4.png is anchored at top: 0 with natural height
            gsap.set(heroImg, {
                yPercent: 0,
                scale: 1.0,
                transformOrigin: "center top"
            });

            if (headerOverlay) {
                gsap.set(headerOverlay, { opacity: 1, y: 0 });
            }

            if (scrollIndicator) {
                gsap.set(scrollIndicator, { opacity: 1, y: 0 });
            }

            if (storyOverlay) {
                gsap.set(storyOverlay, {
                    opacity: 0,
                    y: 40
                });
            }

            // Master continuous scrubbed timeline tied directly to scroll progress
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true
                }
            });

            // 1. Opening composition -> Scroll begins:
            // Fade out the header overlay (title, intro desc, configure btn) and scroll indicator cleanly
            if (headerOverlay) {
                tl.to(headerOverlay, {
                    opacity: 0,
                    y: -35,
                    duration: 0.22,
                    ease: "power1.out"
                }, 0.02);
            }

            if (scrollIndicator) {
                tl.to(scrollIndicator, {
                    opacity: 0,
                    y: 18,
                    duration: 0.16,
                    ease: "power1.out"
                }, 0.02);
            }

            // 2. Continuous upward movement of the SAME continuous photograph:
            // As visitor scrolls down, the image moves smoothly upward to reveal the rest
            // of the watch face, fluted bezel, and lower bracelet progressively, then travels
            // into the upper viewport so only the bracelet tip remains visible at the top.
            tl.to(heroImg, {
                yPercent: -68,
                duration: 0.95,
                ease: "power1.inOut"
            }, 0);

            // 3. Story View:
            // As the watch travels toward the top of the viewport,
            // the authentic Venturo horology story appears naturally beneath it.
            if (storyOverlay) {
                tl.to(storyOverlay, {
                    opacity: 1,
                    y: 0,
                    duration: 0.40,
                    ease: "power2.out"
                }, 0.52);
            }

        } else {
            // Mobile or reduced motion: clean natural-scroll layout without pinned effects
            heroSection.classList.remove("is-scroll-active");
            gsap.set([heroImg, titleGroup, headerOverlay, storyOverlay, scrollIndicator], {
                clearProps: "all"
            });
        }
    });

    // Ensure ScrollTrigger measures proper layout dimensions
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
    });

}

/*=========================================================
 SCROLL-PINNED STORYTELLING VIDEO & THREE RISING CARDS
 - Shows video full-screen by itself first with ample scroll space
 - Pins section and pauses video on its current frame
 - Dims and gently scales video container, reveals section header
 - Reveals Card 1 and holds long enough for visitor to see it
 - Then reveals Card 2 and holds
 - Then reveals Card 3 and holds (each card has its own distinct, generous interval)
 - One-time sequence: cards never close, shrink, hide, reset, or replay when scrolling continues or when scrolling back up
 - Finishes sequence inside storytelling section, then releases pin
 - 3 cards and video scroll upward naturally, revealing Welcome Back cleanly below
 - Mobile & reduced-motion: uses natural scroll without pinning
=========================================================*/

function initStorytellingScroll() {

    const storySection = document.getElementById("storytelling");
    const video = document.getElementById("storyVideo") || document.querySelector(".story-pinned-video");
    const videoContainer = document.getElementById("storyVideoContainer") || document.querySelector(".story-video-container");
    const videoDim = document.getElementById("storyVideoDim") || document.querySelector(".story-video-dim");
    const header = document.getElementById("storyPanelsHeader") || document.querySelector(".story-panels-header");
    const cards = document.querySelectorAll(".story-panel-card");

    if (!storySection) return;

    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop: Screen width > 992px and no reduced motion preference
    mm.add("(min-width: 993px) and (prefers-reduced-motion: no-preference)", () => {

        // State tracking flags for each stage
        let stage1Active = false; // Video pause, dim, scale, header
        let card1Active = false;  // Card 1
        let card2Active = false;  // Card 2
        let card3Active = false;  // Card 3

        // Set initial visual states (hidden below)
        gsap.set(header, { opacity: 0, y: 35 });
        gsap.set(cards, { opacity: 0, y: 130 });
        gsap.set(videoContainer, { scale: 1, borderRadius: "0px" });
        gsap.set(videoDim, { opacity: 0 });

        // Approach trigger: start video playback as visitor approaches storytelling section
        ScrollTrigger.create({
            trigger: storySection,
            start: "top 95%",
            end: "bottom top",
            onEnter: () => {
                if (video && !stage1Active) {
                    video.play().catch(() => {});
                }
            },
            onLeaveBack: () => {
                if (video && !stage1Active) {
                    video.pause();
                }
            }
        });

        // ScrollTrigger for the storytelling sequence driven by scrolling through the section
        // (Viewport pinning is cleanly handled by CSS position: sticky on .story-sticky-stage,
        // eliminating any leftover position: fixed or stuck element states)
        const storyTrigger = ScrollTrigger.create({
            trigger: storySection,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const p = self.progress;

                // --- STAGE 1: Video pause, scale down to 0.96 (24px radius), dim & header reveal (Threshold: 0.15) ---
                if (p >= 0.15) {
                    if (!stage1Active) {
                        stage1Active = true;
                        if (video && !video.paused) {
                            video.pause();
                        }
                        gsap.to(videoContainer, {
                            scale: 0.96,
                            borderRadius: "24px",
                            duration: 0.6,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                        gsap.to(videoDim, {
                            opacity: 0.72,
                            duration: 0.6,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                        gsap.to(header, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                    }
                } else {
                    // Reverse scroll: return smoothly to full-screen video
                    if (stage1Active) {
                        stage1Active = false;
                        gsap.to(videoContainer, {
                            scale: 1,
                            borderRadius: "0px",
                            duration: 0.6,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                        gsap.to(videoDim, {
                            opacity: 0,
                            duration: 0.6,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                        gsap.to(header, {
                            opacity: 0,
                            y: 35,
                            duration: 0.5,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                        if (video && video.paused) {
                            video.play().catch(() => {});
                        }
                    }
                }

                // --- STAGE 2: Card 1 (Threshold: 0.32) ---
                if (p >= 0.32) {
                    if (!card1Active) {
                        card1Active = true;
                        if (cards[0]) {
                            gsap.to(cards[0], {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                } else {
                    // Reverse scroll: Card 1 moves naturally out of view
                    if (card1Active) {
                        card1Active = false;
                        if (cards[0]) {
                            gsap.to(cards[0], {
                                opacity: 0,
                                y: 130,
                                duration: 0.6,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                }

                // --- STAGE 3: Card 2 (Threshold: 0.54) ---
                if (p >= 0.54) {
                    if (!card2Active) {
                        card2Active = true;
                        if (cards[1]) {
                            gsap.to(cards[1], {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                } else {
                    // Reverse scroll: Card 2 moves naturally out of view
                    if (card2Active) {
                        card2Active = false;
                        if (cards[1]) {
                            gsap.to(cards[1], {
                                opacity: 0,
                                y: 130,
                                duration: 0.6,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                }

                // --- STAGE 4: Card 3 (Threshold: 0.76) ---
                if (p >= 0.76) {
                    if (!card3Active) {
                        card3Active = true;
                        if (cards[2]) {
                            gsap.to(cards[2], {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                } else {
                    // Reverse scroll: Card 3 moves naturally out of view
                    if (card3Active) {
                        card3Active = false;
                        if (cards[2]) {
                            gsap.to(cards[2], {
                                opacity: 0,
                                y: 130,
                                duration: 0.6,
                                ease: "power2.out",
                                overwrite: "auto"
                            });
                        }
                    }
                }
            },
            onLeave: () => {
                // When leaving section toward Welcome Back, lock all cards in fully visible state
                stage1Active = true;
                card1Active = true;
                card2Active = true;
                card3Active = true;
                if (video) video.pause();
                gsap.set(header, { opacity: 1, y: 0 });
                cards.forEach(card => gsap.set(card, { opacity: 1, y: 0 }));
                gsap.set(videoContainer, { scale: 0.96, borderRadius: "24px" });
                gsap.set(videoDim, { opacity: 0.72 });
            },
            onEnterBack: () => {
                // When scrolling back up from Welcome Back into storytelling, ensure cards are visible in place
                stage1Active = true;
                card1Active = true;
                card2Active = true;
                card3Active = true;
                if (video) video.pause();
                gsap.set(header, { opacity: 1, y: 0 });
                cards.forEach(card => gsap.set(card, { opacity: 1, y: 0 }));
                gsap.set(videoContainer, { scale: 0.96, borderRadius: "24px" });
                gsap.set(videoDim, { opacity: 0.72 });
            }
        });

        return () => {
            storyTrigger.kill();
        };
    });

    // Mobile / Reduced-Motion: Natural scroll, no pinning, elements visible
    mm.add("(max-width: 992px), (prefers-reduced-motion: reduce)", () => {
        if (video) video.play().catch(() => {});
        gsap.set(header, { opacity: 1, y: 0, clearProps: "all" });
        cards.forEach(card => {
            gsap.set(card, { opacity: 1, y: 0, clearProps: "all" });
        });
        if (videoContainer) gsap.set(videoContainer, { scale: 1, borderRadius: "0px", clearProps: "all" });
        if (videoDim) gsap.set(videoDim, { opacity: 0, clearProps: "all" });
    });

    // Recalculate ScrollTrigger on full window load to guarantee pinpoint accuracy
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

}

/*=========================================================
 NAVBAR EFFECTS
=========================================================*/

function initNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        }

        else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/*=========================================================
 EXPANDED NAVIGATION MENU
=========================================================*/

function initNavigationMenu() {

    const menuToggle = document.getElementById("menuToggleBtn");
    const closeBtn = document.getElementById("closeMenuBtn");
    const overlay = document.getElementById("navOverlay");
    const navLinks = document.querySelectorAll(".menu-nav-link, .menu-sub-link, .nav-menu-tile");

    if (!menuToggle || !overlay) return;

    function openMenu() {

        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");

        if (closeBtn) {

            setTimeout(() => closeBtn.focus(), 100);

        }

    }

    function closeMenu() {

        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");

        menuToggle.focus();

    }

    menuToggle.addEventListener("click", () => {

        const isOpen = overlay.classList.contains("open");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", closeMenu);

    }

    // Close on backdrop click outside the panel
    overlay.addEventListener("click", (e) => {

        if (e.target === overlay) {

            closeMenu();

        }

    });

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && overlay.classList.contains("open")) {

            closeMenu();

        }

    });

    // Close on link click & optionally open target product
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

            const productId = link.dataset.product;

            if (productId) {

                const targetCard = document.querySelector(`.product-card[data-product="${productId}"]`);

                if (targetCard) {

                    setTimeout(() => {

                        targetCard.click();

                    }, 450);

                }

            }

        });

    });

}

/*=========================================================
 ACTIVE NAV LINK
=========================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

/*=========================================================
 PRODUCT DETAILS
=========================================================*/

function initProductCards() {

    const cards = document.querySelectorAll(".product-card");
    const details = document.querySelectorAll(".product-details");

    if (!cards.length) return;

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.product;

            const target = document.getElementById(id);

            if (!target) return;

            details.forEach(detail => {

                if (detail !== target) {

                    detail.style.display = "none";

                }

            });

            if (target.style.display === "block") {

                target.style.display = "none";

            }

            else {

                target.style.display = "block";

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }

        });

    });

}

/*=========================================================
 BACK TO TOP BUTTON
=========================================================*/

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.classList.add("show");

        }

        else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================================
 SCROLL PROGRESS BAR
=========================================================*/

function initScrollProgress() {

    const progress = document.getElementById("scroll-progress");

    if (!progress) return;

    window.addEventListener("scroll", () => {

        const totalHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const percentage =

            (window.scrollY / totalHeight) * 100;

        progress.style.width = percentage + "%";

    });

}

/*=========================================================
 SMOOTH SCROLL
=========================================================*/

function initSmoothScrolling() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}

/*=========================================================
 COUNTER ANIMATION (Future Stats Section)
=========================================================*/

function initCounterAnimation() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

    });

}

/*=========================================================
 SCROLL REVEAL
=========================================================*/

function initRevealAnimations() {

    const reveals = document.querySelectorAll(".reveal");

    function reveal() {

        const windowHeight = window.innerHeight;

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < windowHeight - 120) {

                item.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

}

initRevealAnimations();

/*=========================================================
 RIPPLE BUTTON EFFECT
=========================================================*/

const rippleButtons = document.querySelectorAll(".ripple-btn");

rippleButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        const rect = this.getBoundingClientRect();

        circle.style.left = e.clientX - rect.left - diameter / 2 + "px";
        circle.style.top = e.clientY - rect.top - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 700);

    });

});

/*=========================================================
 IMAGE HOVER ZOOM
=========================================================*/

document.querySelectorAll(".product-img").forEach(image => {

    image.addEventListener("mousemove", e => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*=========================================================
 PRODUCT CARD TILT
=========================================================*/

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * -10;

        const rotateY = (x / rect.width - 0.5) * 10;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/*=========================================================
 PARALLAX HERO
=========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.backgroundPositionY =
        window.pageYOffset * 0.5 + "px";

});

/*=========================================================
 GSAP HERO ANIMATION
=========================================================*/
/*
if (typeof gsap !== "undefined") {

    gsap.from(".hero-text h1", {

        y: 80,
        opacity: 0,
        duration: 1

    });

    gsap.from(".hero-text p", {

        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: .4

    });

    gsap.from(".hero-btn", {

        y: 20,
        opacity: 0,
        duration: 1,
        delay: .8

    });

}

/*=========================================================
 LAZY IMAGE LOADING
=========================================================*/

const lazyImages = document.querySelectorAll("img");

const lazyObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        if (img.dataset.src) {

            img.src = img.dataset.src;

        }

        lazyObserver.unobserve(img);

    });

});

lazyImages.forEach(img => {

    lazyObserver.observe(img);

});

/*=========================================================
 COPY EMAIL
=========================================================*/

const email = document.querySelector(".contact-section p");

if (email) {

    email.addEventListener("click", () => {

        navigator.clipboard.writeText("support@venturo.com");

        console.log("Email copied.");

    });

}

/*=========================================================
 KEYBOARD SHORTCUTS
=========================================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    if (e.key === "End") {

        window.scrollTo({

            top: document.body.scrollHeight,

            behavior: "smooth"

        });

    }

});

/*=========================================================
 PAGE LOADED
=========================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================================
 HOVER SOUND PLACEHOLDER
=========================================================*/

const hoverItems = document.querySelectorAll(".product-card");

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        // future luxury hover sound

    });

});

/*=========================================================
 PREVENT DOUBLE CLICK
=========================================================*/

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("dblclick", e => {

        e.preventDefault();

    });

});

/*=========================================================
 WINDOW RESIZE
=========================================================*/

window.addEventListener("resize", () => {

    console.log(
        "Viewport:",
        window.innerWidth,
        window.innerHeight
    );

});

