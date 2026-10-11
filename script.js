/* ==========================================================
   KHUDZAIFAH HANNAN PORTFOLIO
   JavaScript
========================================================== */


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* ==========================================================
   NAVBAR SCROLL
========================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==========================================================
   MOBILE MENU
========================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");


menuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

    const icon = menuBtn.querySelector("i");


    if (mobileNav.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU */

document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });



/* ==========================================================
   DARK MODE
========================================================== */

const themeBtn = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("hannan-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "hannan-theme",
        darkMode ? "dark" : "light"
    );


    if (darkMode) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});



/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);



/* ==========================================================
   BACK TO TOP
========================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================================
   SMOOTH INTERNAL LINKS
========================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                targetId === "#"
                || targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



/* ==========================================================
   PROJECT HOVER
========================================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        const image =
            card.querySelector(".project-placeholder");


        if (!image) return;


        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width;


                const y =
                    (event.clientY - rect.top)
                    / rect.height;


                const moveX =
                    (x - .5) * 5;


                const moveY =
                    (y - .5) * 5;


                image.style.transform =
                    `translate(${moveX}px, ${moveY}px) rotate(-1deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "translate(0,0) rotate(-2deg)";

            }
        );

    });



/* ==========================================================
   IMAGE FALLBACK
========================================================== */

const profileImage =
    document.querySelector(".photo-image img");


if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            profileImage.style.display = "none";

            const parent =
                profileImage.parentElement;

            parent.style.background =
                "linear-gradient(135deg, #d6cdbd, #bdb3a1)";

            parent.innerHTML +=
                '<span style="position:absolute;inset:0;display:grid;place-items:center;font-family:Georgia;font-size:3rem;color:#6e7654;">KH</span>';

        }
    );

}



/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(`

%cKH. HANNAN

%cPersonal Portfolio

HTML • CSS • JavaScript

`);

console.log(
    "Built by Khudzaifah Hannan Burhanuddin."
);