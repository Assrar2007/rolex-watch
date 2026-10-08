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
    const previous = document.querySelector(".hero-previous");
    const next = document.querySelector(".hero-next");
    const pause = document.querySelector(".hero-pause");

    if (!slides.length) return;

    let currentSlide = 0;
    let timer = null;
    let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function showSlide(index) {

        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            const active = i === currentSlide;
            slide.classList.toggle("active", active);
            slide.setAttribute("aria-hidden", String(!active));
        });

        dots.forEach((dot, i) => {
            const active = i === currentSlide;
            dot.classList.toggle("active", active);
            dot.setAttribute("aria-selected", String(active));
        });

    }

    function schedule() {
        if (timer) clearInterval(timer);
        if (!paused) timer = setInterval(() => showSlide(currentSlide + 1), 6000);
    }

    function setPaused(value) {
        paused = value;
        if (pause) {
            pause.setAttribute("aria-pressed", String(paused));
            pause.textContent = paused ? "Play" : "Pause";
            pause.setAttribute("aria-label", `${paused ? "Play" : "Pause"} campaign rotation`);
        }
        schedule();
    }

    showSlide(currentSlide);
    dots.forEach((dot, index) => dot.addEventListener("click", () => {
        showSlide(index);
        schedule();
    }));
    if (previous) previous.addEventListener("click", () => { showSlide(currentSlide - 1); schedule(); });
    if (next) next.addEventListener("click", () => { showSlide(currentSlide + 1); schedule(); });
    if (pause) pause.addEventListener("click", () => setPaused(!paused));
    setPaused(paused);

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

    if (!heroWrapper || !window.VenturoCatalog) return;

    const paramKey = (new URLSearchParams(window.location.search).get("product") || "datejust").toLowerCase();
    const data = window.VenturoCatalog.get(paramKey) || window.VenturoCatalog.get("datejust");
    const isDaytona = data.family === "Cosmograph Daytona";
    const title = isDaytona ? "Cosmograph Daytona" : data.variant;
    const description = isDaytona
        ? `Rolex ref. ${data.exactReference}: ${data.material}, ${data.size}. Photo shows family reference 126528LN, not this model. Reference research only; no Venturo stock or offer.`
        : data.description;

    document.title = `Venturo Chronométrie | ${title}${isDaytona ? ` · Ref. ${data.exactReference}` : ""}`;
    document.body.setAttribute("data-product", data.canonicalId);
    document.body.classList.toggle("reference-only-route", data.saleStatus === "unavailable");

    const heroSection = document.getElementById("watch-hero");
    if (heroSection) {
        heroSection.style.background = "";
        heroSection.dataset.product = data.canonicalId;
        heroSection.classList.remove("is-scroll-active");
    }

    const eyebrow = document.getElementById("watchEyebrow");
    if (eyebrow) eyebrow.textContent = data.eyebrow;

    const titleElement = document.getElementById("watchTitle");
    if (titleElement) titleElement.textContent = title;

    const introDesc = document.getElementById("watchIntroDesc");
    if (introDesc) introDesc.textContent = description;

    const imgTeaser = document.getElementById("watchImgTeaser");
    const daytonaDiagram = isDaytona ? "assets/media/daytona-chronograph-diagram.svg" : null;
    const daytonaFamilyPhoto = isDaytona ? "assets/media/daytona-126528ln-hero.jpg" : null;
    if (imgTeaser) {
        const teaserMedia = data.image || daytonaDiagram;
        if (teaserMedia) {
            imgTeaser.src = teaserMedia;
            imgTeaser.style.display = "";
        } else {
            imgTeaser.removeAttribute("src");
            imgTeaser.style.display = "none";
        }
        imgTeaser.alt = daytonaDiagram ? "Generic three-counter chronograph diagram; not product photography or a specific model configuration" : `Reference photograph used for ${data.variant}; depicted watch attribution and exact match unverified`;
    }

    const heroImg = document.getElementById("watchHeroImg");
    if (heroImg) {
        const heroMedia = data.image || daytonaFamilyPhoto || daytonaDiagram;
        if (heroMedia) {
            heroImg.src = heroMedia;
            heroImg.hidden = false;
        } else {
            heroImg.removeAttribute("src");
            heroImg.hidden = true;
        }
        heroImg.alt = isDaytona
            ? `Rolex Cosmograph Daytona reference 126528LN in a motorsport-context photograph. The selected reference is ${data.exactReference}; this image does not depict that exact reference.`
            : `Reference photograph used for ${data.variant}; depicted watch attribution and exact match unverified`;
    }

    const heroSource = document.getElementById("watchHeroSource");
    if (heroSource) heroSource.srcset = data.image || daytonaFamilyPhoto || daytonaDiagram || "";

    const heroAttribution = document.getElementById("watchHeroAttribution");
    if (heroAttribution) {
        if (isDaytona) {
            heroAttribution.innerHTML = `Family-context photo: Rolex Cosmograph Daytona reference 126528LN. Selected reference ${data.exactReference} is not shown. Photo by Verygoodlord, Wikimedia Commons, CC BY-SA 4.0. <a href="https://commons.wikimedia.org/wiki/File:Rolex_Le_Mans_Daytona_126528LN.jpg" target="_blank" rel="noopener noreferrer">Source and licence</a>`;
            heroAttribution.hidden = false;
        } else {
            heroAttribution.textContent = "";
            heroAttribution.hidden = true;
        }
    }

    const price = document.getElementById("watchPrice");
    if (price) price.textContent = window.VenturoCatalog.money(data);

    const specsTitle = document.getElementById("specsTitle");
    if (specsTitle) specsTitle.textContent = `${isDaytona ? `${title} · ${data.exactReference}` : data.variant} Technical Profile`;

    const specsDesc = document.getElementById("specsDescription");
    if (specsDesc) specsDesc.textContent = data.family === "Cosmograph Daytona"
        ? `${description} Rolex India source reviewed 8 October 2026.`
        : description;

    const storyHeadline = document.getElementById("watchStoryHeadline");
    if (storyHeadline) storyHeadline.textContent = data.storyHeadline || "A refined watch story";

    const storyLead = document.getElementById("watchStoryLead");
    if (storyLead) storyLead.textContent = data.storyLead || description;

    const storyBody = document.getElementById("watchStoryBody");
    if (storyBody) {
        storyBody.textContent = data.storyBody || `${data.movement}, ${data.powerReserve} power reserve, ${data.size} case in ${data.material}. ${data.bracelet} bracelet.`;
    }

    const specCalibre = document.getElementById("specCalibre");
    if (specCalibre) specCalibre.textContent = data.movement;

    const specReserve = document.getElementById("specReserve");
    if (specReserve) specReserve.textContent = data.powerReserve;

    const specCase = document.getElementById("specCase");
    if (specCase) specCase.textContent = [data.size, data.material].filter(Boolean).join(", ") || "Not available in this reference record";

    const specWater = document.getElementById("specWater");
    if (specWater) specWater.textContent = data.waterResistance;

    const specDial = document.getElementById("specDial");
    if (specDial) specDial.textContent = data.dial;

    const specBracelet = document.getElementById("specBracelet");
    if (specBracelet) specBracelet.textContent = data.bracelet;

    const heroBtn = document.getElementById("heroConfigureBtn");
    if (heroBtn) {
        heroBtn.setAttribute("data-id", data.canonicalId);
        heroBtn.setAttribute("aria-label", `Add ${data.variant} to Cart`);
        const unavailable = data.saleStatus === "unavailable";
        heroBtn.disabled = unavailable;
        heroBtn.hidden = unavailable;
        heroBtn.textContent = unavailable ? "Reference only" : "Add to saved cart";
    }

    const referenceConfigLink = document.getElementById("referenceConfigLink");
    if (referenceConfigLink) referenceConfigLink.hidden = data.family !== "Cosmograph Daytona";
    const finderLink = document.getElementById("watchFinderLink");
    if (finderLink) finderLink.hidden = data.family !== "Cosmograph Daytona";
    const enquiryLink = document.getElementById("watchEnquiryLink");
    if (enquiryLink) enquiryLink.hidden = data.saleStatus === "unavailable";
    const priceLabel = document.querySelector(".purchase-price-group .price-label");
    if (priceLabel && data.family === "Cosmograph Daytona") priceLabel.textContent = "Venturo price";
    if (price && data.family === "Cosmograph Daytona") price.textContent = "Not offered";

    const specsCartBtn = document.getElementById("specsAddToCartBtn");
    if (specsCartBtn) {
        specsCartBtn.setAttribute("data-id", data.canonicalId);
        specsCartBtn.setAttribute("aria-label", `Add ${data.variant} to Cart`);
        specsCartBtn.disabled = data.saleStatus === "unavailable";
        specsCartBtn.hidden = data.saleStatus === "unavailable";
    }

    const specsWishlistBtn = document.getElementById("specsWishlistBtn");
    if (specsWishlistBtn) {
        specsWishlistBtn.setAttribute("data-id", data.canonicalId);
        specsWishlistBtn.setAttribute("aria-label", `Save ${data.variant} to Wishlist`);
    }

    const galleryTitle = document.getElementById("galleryTitle");
    if (galleryTitle) galleryTitle.textContent = data.galleryTitle || `${data.variant} reference image`;

    const galleryDescription = document.getElementById("galleryDescription");
    if (galleryDescription) {
        galleryDescription.textContent = data.galleryDescription || "The inspected reference photograph is retained as demo media until its source and permission basis are resolved.";
    }

    const galleryImage = document.getElementById("galleryImage");
    if (galleryImage) {
        const galleryMedia = data.image || daytonaDiagram;
        if (galleryMedia) {
            galleryImage.src = galleryMedia;
            galleryImage.hidden = false;
        } else {
            galleryImage.removeAttribute("src");
            galleryImage.hidden = true;
        }
        galleryImage.alt = daytonaDiagram ? "Original three-counter chronograph schematic; not product photography and not a specific variant" : `Reference photograph used for ${data.variant}; depicted watch attribution and exact match unverified`;
    }

    const galleryCaption = document.getElementById("galleryCaption");
    if (galleryCaption) galleryCaption.textContent = daytonaDiagram ? "Original Venturo schematic for chronograph orientation only; it is not a Rolex product image and does not show this model’s configuration." : (data.galleryCaption || "Reference photograph; exact identity and reuse permission remain unverified.");
    const galleryEyebrow = document.getElementById("galleryEyebrow");
    if (galleryEyebrow && daytonaDiagram) galleryEyebrow.textContent = "SCHEMATIC · NOT PRODUCT PHOTOGRAPHY";

    ["1", "2", "3"].forEach(index => {
        const featureTitle = document.getElementById(`featureTitle${index}`);
        const featureBody = document.getElementById(`featureBody${index}`);
        if (featureTitle && data[`featureTitle${index}`]) featureTitle.textContent = data[`featureTitle${index}`];
        if (featureBody && data[`featureBody${index}`]) featureBody.textContent = data[`featureBody${index}`];
    });

    const contextHeading = document.getElementById("contextHeading");
    if (contextHeading) contextHeading.textContent = data.contextHeading || "Attributed reference context";

    const contextBody = document.getElementById("contextBody");
    if (contextBody) contextBody.textContent = data.contextBody || "The historical and product identity information on this page remains attributed reference material.";

    const contextLink = document.getElementById("contextLink");
    if (contextLink) {
        contextLink.href = data.referenceUrl || "https://www.rolex.com/en-in/watches/datejust";
    }

    if (isDaytona) {
        if (galleryTitle) galleryTitle.textContent = "Chronograph layout schematic";
        if (galleryDescription) galleryDescription.textContent = "An original Venturo diagram explains the three-counter chronograph. It is a function illustration, not a Rolex product photograph or a selectable reference configuration.";
        if (galleryCaption) galleryCaption.textContent = "Original schematic for chronograph orientation only; not product photography and not a model-specific configuration.";
        if (galleryEyebrow) galleryEyebrow.textContent = "CHRONOGRAPH FUNCTION · SCHEMATIC";
        const storyTag = document.getElementById("watchStoryTag");
        if (storyTag) storyTag.textContent = "ROLEX REFERENCE CONTEXT";
        const storyOverlay = document.getElementById("watchStoryOverlay");
        if (storyOverlay) storyOverlay.setAttribute("aria-label", `Rolex Cosmograph Daytona reference story ${data.exactReference}`);
        const related = document.getElementById("watchRelatedLinks");
        if (related) related.innerHTML = `
            <a href="cosmograph-daytona.html">Cosmograph Daytona family <span aria-hidden="true">→</span></a>
            <a href="finder.html?family=Cosmograph%20Daytona">Find Daytona references <span aria-hidden="true">→</span></a>
            <a href="configure.html?family=cosmograph-daytona&amp;product=${data.canonicalId}">Explore reference options <span aria-hidden="true">→</span></a>
            <a href="https://www.rolex.com/en-in/watches/cosmograph-daytona/features" target="_blank" rel="noopener noreferrer">Rolex chronograph features <span aria-hidden="true">↗</span></a>
            <a href="https://www.rolex.com/en-in/watches/cosmograph-daytona/beyond-the-racetrack" target="_blank" rel="noopener noreferrer">Rolex motorsport story <span aria-hidden="true">↗</span></a>`;
        const legal = document.getElementById("watchLegalText");
        if (legal) legal.textContent = `Rolex reference ${data.exactReference} and specifications, accessed 8 October 2026. Reference research only: Venturo does not manufacture, certify, stock or sell this watch. No Venturo price or exact-variant product photograph is supplied.`;
        const contextDisclaimer = document.getElementById("watchContextDisclaimer");
        if (contextDisclaimer) contextDisclaimer.textContent = `This page presents Rolex reference ${data.exactReference} for research. The photograph above shows a different Daytona reference (126528LN) for family context; it is not an image of reference ${data.exactReference}. Venturo does not manufacture, certify, stock or sell Rolex watches.`;
        const cartDrawer = document.getElementById("cartDrawer");
        if (cartDrawer) cartDrawer.hidden = true;
        const cartButton = document.getElementById("cartBtn");
        if (cartButton) cartButton.hidden = true;
    }

    if (data.family === "Cosmograph Daytona") {
        const titleTag = document.getElementById("specCalibre")?.closest(".spec-card")?.querySelector(".spec-note");
        if (titleTag) titleTag.textContent = "Rolex reference specification";
        const reserveTag = document.getElementById("specReserve")?.closest(".spec-card")?.querySelector(".spec-note");
        if (reserveTag) reserveTag.textContent = "Approximately 72 hours; Rolex model-page specification";
        const caseTag = document.getElementById("specCase")?.closest(".spec-card")?.querySelector(".spec-note");
        if (caseTag) caseTag.textContent = `Exact Rolex reference ${data.exactReference}; not Venturo inventory`;
        const waterTag = document.getElementById("specWater")?.closest(".spec-card")?.querySelector(".spec-note");
        if (waterTag) waterTag.textContent = "Rolex model-page specification; not a Venturo product claim";
        const dialTag = document.getElementById("specDial")?.closest(".spec-card")?.querySelector(".spec-note");
        if (dialTag) dialTag.textContent = "Reference-page description; exact-variant image is not supplied";
        const braceletTag = document.getElementById("specBracelet")?.closest(".spec-card")?.querySelector(".spec-note");
        if (braceletTag) braceletTag.textContent = "Rolex model-page description; see linked source";
    }

    if (["datejust", "daydate", "datejust-rose", "airking"].includes(data.canonicalId)) {
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
    const storyOverlay = document.getElementById("watchStoryOverlay");
    const scrollIndicator = document.getElementById("watchScrollIndicator");

    if (!heroSection || !heroImg) return;

    const desktopQuery = window.matchMedia("(min-width: 993px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function reset() {
        heroSection.classList.remove("is-scroll-active");
        heroImg.style.transform = "";
        if (headerOverlay) headerOverlay.style.cssText = "";
        if (storyOverlay) storyOverlay.style.cssText = "";
        if (scrollIndicator) scrollIndicator.style.cssText = "";
    }

    function render() {
        frame = 0;
        if (!desktopQuery.matches || reducedMotionQuery.matches) {
            reset();
            return;
        }

        heroSection.classList.add("is-scroll-active");
        const sectionTop = heroSection.getBoundingClientRect().top + window.scrollY;
        const travel = Math.max(1, heroSection.offsetHeight - window.innerHeight);
        const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / travel));
        const storyProgress = Math.max(0, Math.min(1, (progress - 0.48) / 0.28));

        heroImg.style.transform = `translate3d(0, ${progress * -68}%, 0)`;
        if (headerOverlay) {
            headerOverlay.style.opacity = String(1 - Math.min(1, progress * 5));
            headerOverlay.style.transform = `translate3d(0, ${progress * -35}px, 0)`;
        }
        if (scrollIndicator) {
            scrollIndicator.style.opacity = String(1 - Math.min(1, progress * 6));
            scrollIndicator.style.transform = `translate3d(-50%, ${progress * 18}px, 0)`;
        }
        if (storyOverlay) {
            storyOverlay.style.opacity = String(storyProgress);
            storyOverlay.style.transform = `translate3d(0, ${(1 - storyProgress) * 35}px, 0)`;
        }
    }

    function schedule() {
        render();
    }

    desktopQuery.addEventListener("change", schedule);
    reducedMotionQuery.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    render();

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

function initLegacyStorytellingScroll() {

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
 DETERMINISTIC STORY SCENE OVERRIDE
=========================================================*/

function initStorytellingScroll() {
    const section = document.getElementById("storytelling");
    const video = document.getElementById("storyVideo");
    const toggle = document.getElementById("storyVideoToggle");
    const cards = [...document.querySelectorAll(".story-panel-card")];
    const welcomeImage = document.getElementById("welcomeBackImage");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    if (!section) return;

    function setVideoLabel() {
        if (!toggle || !video) return;
        toggle.textContent = video.paused ? "Play film" : "Pause film";
        toggle.setAttribute("aria-pressed", String(video.paused));
    }

    function updateScene() {
        frame = 0;
        if (window.innerWidth <= 992 || reducedMotion.matches) {
            section.style.setProperty("--story-progress", "1");
            cards.forEach(card => {
                card.setAttribute("aria-hidden", "false");
                card.querySelectorAll("a").forEach(link => link.tabIndex = 0);
            });
            return;
        }
        const range = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
        section.style.setProperty("--story-progress", progress.toFixed(4));
        cards.forEach((card, index) => {
            const visible = progress >= [.32, .53, .74][index];
            card.setAttribute("aria-hidden", String(!visible));
            card.querySelectorAll("a").forEach(link => link.tabIndex = visible ? 0 : -1);
        });
    }

    function requestUpdate() {
        if (!frame) frame = requestAnimationFrame(updateScene);
    }

    if (video) {
        video.addEventListener("play", setVideoLabel);
        video.addEventListener("pause", setVideoLabel);
        video.addEventListener("error", setVideoLabel);
        if (toggle) toggle.addEventListener("click", () => {
            if (video.paused) video.play().catch(() => {});
            else video.pause();
        });
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && window.innerWidth > 992 && !reducedMotion.matches) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.15 });
        observer.observe(video);
        setVideoLabel();
    }

    if (welcomeImage) {
        welcomeImage.addEventListener("error", () => {
            welcomeImage.hidden = true;
            welcomeImage.parentElement.classList.add("welcome-back-image-missing");
        });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", requestUpdate);
    requestUpdate();
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

    let restoreFocus = menuToggle;
    const panel = document.getElementById("navMenuPanel");

    function setBackgroundInert(isInert) {
        document.querySelectorAll("body > *").forEach(element => {
            if (element !== overlay && element.id !== "searchOverlay") {
                element.inert = isInert;
            }
        });
    }

    function trapFocus(event) {
        if (event.key !== "Tab" || !overlay.classList.contains("open") || !panel) return;
        const focusable = panel.querySelectorAll("a[href], button:not([disabled]), input, [tabindex]:not([tabindex='-1'])");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    function openMenu() {

        document.dispatchEvent(new CustomEvent("venturo:close-search"));
        restoreFocus = document.activeElement || menuToggle;
        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
        setBackgroundInert(true);

        if (closeBtn) {

            setTimeout(() => closeBtn.focus(), 100);

        }

    }

    function closeMenu() {

        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");

        setBackgroundInert(false);
        (restoreFocus || menuToggle).focus();

    }

    document.addEventListener("venturo:close-menu", closeMenu);

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

        trapFocus(e);

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

        if (card.dataset.detailsBound === "true") return;
        card.dataset.detailsBound = "true";

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

window.initProductCards = initProductCards;

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
