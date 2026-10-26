/* =========================================================
   NEXAFORM STUDIO
   SCROLL INTERACTION
========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   SMOOTH SCROLL
========================================================= */

let lenis = null;

if (window.Lenis) {

    lenis = new Lenis({
        duration: 0.55,
        smoothWheel: true,
        wheelMultiplier: 1.15,
        touchMultiplier: 1
    });


    lenis.on(
        "scroll",
        ScrollTrigger.update
    );


    gsap.ticker.add((time) => {

        lenis.raf(
            time * 1000
        );

    });


    gsap.ticker.lagSmoothing(0);
}


/* =========================================================
   HERO VIDEO
========================================================= */

const heroVideo =
    document.getElementById("heroVideo");


if (heroVideo) {

    heroVideo.muted = true;
    heroVideo.playsInline = true;


    const playHeroVideo = () => {

        const playPromise =
            heroVideo.play();


        if (playPromise !== undefined) {

            playPromise.catch(() => {

                console.log(
                    "Hero video autoplay is waiting for browser permission."
                );

            });

        }

    };


    if (heroVideo.readyState >= 2) {

        playHeroVideo();

    } else {

        heroVideo.addEventListener(
            "loadeddata",
            playHeroVideo,
            {
                once: true
            }
        );

    }

}


/* =========================================================
   HERO INTRO
========================================================= */

const heroIntro =
    gsap.timeline({

        defaults: {
            ease: "power3.out"
        }

    });


heroIntro

    .from(
        ".site-header",
        {
            opacity: 0,
            y: -15,
            duration: 0.65
        }
    )

    .from(
        ".hero-label",
        {
            opacity: 0,
            y: 18,
            duration: 0.45
        },
        "-=0.25"
    )

    .from(
        ".hero-copy h1 span",
        {
            opacity: 0,
            y: 65,
            stagger: 0.08,
            duration: 0.75
        },
        "-=0.25"
    )

    .from(
        ".developer-sticker",
        {
            opacity: 0,
            scale: 0.75,
            rotation: -15,
            duration: 0.55,
            ease: "back.out(1.7)"
        },
        "-=0.35"
    )

    .from(
        ".hero-description",
        {
            opacity: 0,
            y: 20,
            duration: 0.5
        },
        "-=0.30"
    );


/* =========================================================
   INITIAL SCANNER STATES
========================================================= */

gsap.set(
    [
        ".profile-card",
        ".about-card",
        ".skills-card",
        ".profile-connector",
        ".about-connector",
        ".skills-connector",
        ".scan-complete",
        ".discover-popup"
    ],
    {
        autoAlpha: 0
    }
);


gsap.set(
    ".scan-line",
    {
        autoAlpha: 0,
        bottom: "12%"
    }
);


gsap.set(
    ".scan-flash",
    {
        opacity: 0
    }
);


/* =========================================================
   ELEVATOR SCROLL STORY
========================================================= */

const scanTimeline =
    gsap.timeline({

        scrollTrigger: {

            trigger:
                ".scan-section",

            start:
                "top top",

            end:
                "+=1800",

            scrub:
                0.45,

            pin:
                true,

            anticipatePin:
                1

        }

    });


/* =========================================================
   1. ELEVATOR ENTERS
========================================================= */

scanTimeline.fromTo(

    ".elevator-wrap",

    {
        scale: 0.92,
        opacity: 0.7,
        y: 35
    },

    {
        scale: 1,
        opacity: 1,
        y: 0,

        duration: 0.55,

        ease: "power2.out"
    },

    0

);


/* =========================================================
   2. BLUE GLOW
========================================================= */

scanTimeline.to(

    ".scan-flash",

    {
        opacity: 1,
        duration: 0.35
    },

    0.20

);


/* =========================================================
   3. SCANNER APPEARS AT FEET
========================================================= */

scanTimeline.to(

    ".scan-line",

    {
        autoAlpha: 1,
        bottom: "12%",
        duration: 0.12
    },

    0.35

);


/* =========================================================
   4. SCANNER MOVES UP BODY
========================================================= */

scanTimeline.to(

    ".scan-line",

    {
        bottom: "82%",
        duration: 1,
        ease: "none"
    },

    0.47

);


/* =========================================================
   5. SCANNER FADES
========================================================= */

scanTimeline.to(

    ".scan-line",

    {
        autoAlpha: 0,
        duration: 0.18
    },

    1.47

);


/* =========================================================
   6. SCAN COMPLETE
========================================================= */

scanTimeline.fromTo(

    ".scan-complete",

    {
        autoAlpha: 0,
        y: 18,
        scale: 0.9
    },

    {
        autoAlpha: 1,
        y: 0,
        scale: 1,

        duration: 0.32,

        ease: "back.out(1.7)"
    },

    1.48

);


/* =========================================================
   7. PROFILE CARD
========================================================= */

scanTimeline.fromTo(

    ".profile-card",

    {
        autoAlpha: 0,
        x: -35,
        y: 10
    },

    {
        autoAlpha: 1,
        x: 0,
        y: 0,

        duration: 0.35
    },

    1.70

);


scanTimeline.to(

    ".profile-connector",

    {
        autoAlpha: 1,
        duration: 0.20
    },

    1.78

);


/* =========================================================
   8. DESCRIPTION CARD
========================================================= */

scanTimeline.fromTo(

    ".about-card",

    {
        autoAlpha: 0,
        x: -35,
        y: 10
    },

    {
        autoAlpha: 1,
        x: 0,
        y: 0,

        duration: 0.35
    },

    1.87

);


scanTimeline.to(

    ".about-connector",

    {
        autoAlpha: 1,
        duration: 0.20
    },

    1.95

);


/* =========================================================
   9. SKILLS CARD
========================================================= */

scanTimeline.fromTo(

    ".skills-card",

    {
        autoAlpha: 0,
        x: 35,
        y: 10
    },

    {
        autoAlpha: 1,
        x: 0,
        y: 0,

        duration: 0.35
    },

    2.02

);


scanTimeline.to(

    ".skills-connector",

    {
        autoAlpha: 1,
        duration: 0.20
    },

    2.10

);


/* =========================================================
   10. EXPLORE MESSAGE
========================================================= */

scanTimeline.fromTo(

    ".discover-popup",

    {
        autoAlpha: 0,
        y: 15,
        scale: 0.9
    },

    {
        autoAlpha: 1,
        y: 0,
        scale: 1,

        duration: 0.35,

        ease: "back.out(1.7)"
    },

    2.20

);


/* =========================================================
   FLOATING ARROW
========================================================= */

gsap.to(

    ".discover-arrow",

    {
        y: 7,

        duration: 0.65,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"
    }

);


/* =========================================================
   PROJECTS SECTION HEADING
========================================================= */

gsap.from(

    ".projects-header-top",

    {

        scrollTrigger: {

            trigger:
                ".projects-section",

            start:
                "top 80%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 25,

        duration: 0.6,

        ease:
            "power3.out"

    }

);


gsap.from(

    ".projects-heading h2",

    {

        scrollTrigger: {

            trigger:
                ".projects-heading",

            start:
                "top 82%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 70,

        duration: 0.85,

        ease:
            "power3.out"

    }

);


gsap.from(

    ".projects-heading p",

    {

        scrollTrigger: {

            trigger:
                ".projects-heading",

            start:
                "top 80%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 35,

        duration: 0.7,

        delay: 0.12,

        ease:
            "power3.out"

    }

);


/* =========================================================
   NEW PROJECT SHOWCASE REVEAL
========================================================= */

gsap.utils
    .toArray(".portfolio-project")
    .forEach((project, index) => {

        const image =
            project.querySelector(
                ".project-image-wrap"
            );

        const details =
            project.querySelector(
                ".project-details"
            );


        /* ---------------------------------------------
           IMAGE REVEAL
        --------------------------------------------- */

        if (image) {

            gsap.from(
                image,
                {

                    scrollTrigger: {

                        trigger:
                            project,

                        start:
                            "top 82%",

                        toggleActions:
                            "play none none reverse"

                    },

                    opacity: 0,

                    y: 75,

                    scale: 0.965,

                    duration: 0.9,

                    ease:
                        "power3.out"

                }
            );

        }


        /* ---------------------------------------------
           PROJECT DETAILS
        --------------------------------------------- */

        if (details) {

            gsap.from(
                details,
                {

                    scrollTrigger: {

                        trigger:
                            project,

                        start:
                            "top 78%",

                        toggleActions:
                            "play none none reverse"

                    },

                    opacity: 0,

                    y: 45,

                    duration: 0.8,

                    delay: 0.12,

                    ease:
                        "power3.out"

                }
            );

        }


        /* ---------------------------------------------
           SUBTLE IMAGE PARALLAX
        --------------------------------------------- */

        const projectImage =
            project.querySelector(
                ".project-image"
            );


        if (projectImage) {

            gsap.fromTo(

                projectImage,

                {
                    yPercent: -2
                },

                {
                    yPercent: 2,

                    ease: "none",

                    scrollTrigger: {

                        trigger:
                            project,

                        start:
                            "top bottom",

                        end:
                            "bottom top",

                        scrub:
                            0.5

                    }

                }

            );

        }

    });


/* =========================================================
   PROJECT END MESSAGE
========================================================= */

gsap.from(

    ".projects-end",

    {

        scrollTrigger: {

            trigger:
                ".projects-end",

            start:
                "top 90%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 25,

        duration: 0.6,

        ease:
            "power3.out"

    }

);


/* =========================================================
   CONTACT SECTION
========================================================= */

gsap.from(

    ".contact-label",

    {

        scrollTrigger: {

            trigger:
                ".contact-section",

            start:
                "top 75%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 20,

        duration: 0.55,

        ease:
            "power2.out"

    }

);


gsap.from(

    ".contact-section h2",

    {

        scrollTrigger: {

            trigger:
                ".contact-section",

            start:
                "top 72%",

            toggleActions:
                "play none none reverse"

        },

        y: 65,

        opacity: 0,

        duration: 0.8,

        ease:
            "power3.out"

    }

);


gsap.from(

    ".contact-link",

    {

        scrollTrigger: {

            trigger:
                ".contact-section",

            start:
                "top 65%",

            toggleActions:
                "play none none reverse"

        },

        y: 18,

        opacity: 0,

        duration: 0.55,

        ease:
            "power2.out"

    }

);


/* =========================================================
   FOOTER REVEAL
========================================================= */

gsap.from(

    ".footer",

    {

        scrollTrigger: {

            trigger:
                ".footer",

            start:
                "top 95%",

            toggleActions:
                "play none none reverse"

        },

        opacity: 0,

        y: 35,

        duration: 0.7,

        ease:
            "power3.out"

    }

);


/* =========================================================
   REFRESH AFTER EVERYTHING LOADS
========================================================= */

window.addEventListener(

    "load",

    () => {

        setTimeout(

            () => {

                ScrollTrigger.refresh();

            },

            200

        );

    }

);