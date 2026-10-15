/* ==========================================================
   KHUDZAIFAH HANNAN PORTFOLIO
   JavaScript
========================================================== */


/* ==========================================================
   LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});


/* ==========================================================
   NAVBAR SCROLL
========================================================== */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ==========================================================
   MOBILE MENU
========================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");


if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

        const icon =
            menuBtn.querySelector("i");


        if (!icon) return;


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

                const icon =
                    menuBtn.querySelector("i");

                if (!icon) return;

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

}


/* ==========================================================
   DARK MODE
========================================================== */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("hannan-theme");


if (themeBtn) {

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

}


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

    if (!backTop) return;


    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


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
   PROFILE IMAGE FALLBACK
========================================================== */

const profileImage =
    document.querySelector(".photo-image img");


if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            profileImage.style.display =
                "none";

            const parent =
                profileImage.parentElement;


            if (!parent) return;


            parent.style.background =
                "linear-gradient(135deg, #d6cdbd, #bdb3a1)";

            parent.innerHTML +=
                '<span style="position:absolute;inset:0;display:grid;place-items:center;font-family:Georgia;font-size:3rem;color:#6e7654;">KH</span>';

        }
    );

}


/* ==========================================================
   CERTIFICATE MODAL
========================================================== */

const certificateModal =
    document.getElementById(
        "certificateModal"
    );

const certificateModalImage =
    document.getElementById(
        "certificateModalImage"
    );

const certificateModalClose =
    document.getElementById(
        "certificateModalClose"
    );


/*
   Ambil SEMUA gambar sertifikat,
   bukan hanya gambar pertama.
*/

const certificateImages =
    document.querySelectorAll(
        ".certificate-image-wrapper img"
    );


/* ==========================================================
   OPEN CERTIFICATE
========================================================== */

function openCertificate(image) {

    if (
        !certificateModal ||
        !certificateModalImage ||
        !image
    ) {

        return;

    }


    certificateModalImage.src =
        image.currentSrc || image.src;

    certificateModalImage.alt =
        image.alt || "Certificate";


    /*
       CSS menggunakan class "open",
       jadi JS juga harus menggunakan "open".
    */

    certificateModal.classList.add("open");

    certificateModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* ==========================================================
   CLOSE CERTIFICATE
========================================================== */

function closeCertificateModal() {

    if (!certificateModal) return;


    certificateModal.classList.remove("open");

    certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    if (certificateModalImage) {

        certificateModalImage.src =
            "";

    }

}


/* ==========================================================
   CERTIFICATE CLICK
========================================================== */

certificateImages.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            openCertificate(image);

        }
    );

});


/* ==========================================================
   CLOSE BUTTON
========================================================== */

if (certificateModalClose) {

    certificateModalClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


/* ==========================================================
   CLICK OUTSIDE MODAL
========================================================== */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificateModal();

            }

        }
    );

}


/* ==========================================================
   ESC TO CLOSE CERTIFICATE
========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            certificateModal &&
            certificateModal.classList.contains("open")
        ) {

            closeCertificateModal();

        }

    }
);


/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.log(
    "%cKH. HANNAN",
    "font:700 20px Georgia;color:#6e7654;"
);

console.log(
    "Personal Portfolio · HTML, CSS, JavaScript"
);

console.log(
    "Built by Khudzaifah Hannan Burhanuddin."
);


/* ==========================================================
   LANYARD ID CARD
   Fisika tali Verlet tanpa library. Tali = rantai titik dengan
   jarak tetap; kartu = dua titik (ujung tali dan dasar kartu).
   Kartu juga miring ke arah gerakan (efek 3D) dan mengikuti
   kursor saat di-hover. Pantulan cahaya di holder bergerak
   sesuai kemiringan.
========================================================== */

(function () {

    "use strict";

    const stage = document.getElementById("stage");
    const canvas = document.getElementById("lanyardCanvas");
    const card = document.getElementById("idCard");
    const tiltEl = document.getElementById("idTilt");
    const flipBtn = document.getElementById("flipBtn");
    const note = document.getElementById("stageNote");
    const person = document.getElementById("idPerson");
    const shadow = document.getElementById("idShadow");

    if (!stage || !canvas || !card) return;

    /* bayangan foto memakai gambar yang sama */
    if (person && shadow) shadow.src = person.src;

    const ctx = canvas.getContext("2d");
    const area = stage.parentElement;

    const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;


    /* --- parameter --- */

    const SEGMENTS = 12;
    const GRAVITY = 0.62;
    const DAMPING = prefersReduced ? 0.97 : 0.989;
    const ITERATIONS = 18;
    const STEP = 1000 / 60;

    /* tali kain bermotif kotak */
    const STRAP_W = 24;
    const CELL = 12;
    const STRAP_A = "#c65a3a";
    const STRAP_B = "#f8f3e8";
    const STRAP_EDGE = "rgba(25, 23, 19, 0.88)";

    const isWide = () => window.matchMedia("(min-width: 1101px)").matches;


    let W = 0, H = 0, dpr = 1;
    let builtW = 0, builtH = 0;
    let anchorY = 26;
    let cardW = 0, cardH = 0, segLen = 0, ropeLen = 0;
    let pts = [];
    let rests = [];
    let drag = null;
    let running = false;
    let lastT = 0, acc = 0, calm = 0;
    let firstBuild = true;
    let startTimer = 0;

    const tilt = { rx: 0, ry: 0 };
    const hover = { rx: 0, ry: 0 };

    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));


    function addPoint(x, y, mass) {

        pts.push({
            x: x, y: y, ox: x, oy: y,
            inv: mass === 0 ? 0 : 1 / mass
        });

    }


    /* Di layar lebar, tali ditarik sampai tepi atas halaman */
    function layoutStage() {

        if (isWide()) {

            const top = area.getBoundingClientRect().top + window.scrollY;

            stage.style.top = (-top) + "px";

        } else {

            stage.style.top = "";

        }

    }


    function build() {

        layoutStage();

        const r = stage.getBoundingClientRect();

        W = r.width;
        H = r.height;
        builtW = W;
        builtH = H;

        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        cardW = card.offsetWidth;
        cardH = card.offsetHeight;

        anchorY = isWide() ? -16 : 26;

        /* tali: cukup panjang, tapi kartu harus tetap muat di layar */
        let rope = H - cardH - anchorY - 120;

        if (isWide()) {
            rope = Math.min(rope, window.innerHeight - 70 - cardH - anchorY);
        }

        ropeLen = clamp(rope, 50, 460);
        segLen = ropeLen / SEGMENTS;

        const tiltAngle = firstBuild && !prefersReduced ? 0.55 : 0;
        const wasFirst = firstBuild;

        firstBuild = false;

        const ax = W / 2;

        pts = [];
        rests = [];

        addPoint(ax, anchorY, 0);

        for (let i = 1; i <= SEGMENTS; i++) {

            const d = segLen * i;

            addPoint(
                ax + Math.sin(tiltAngle) * d,
                anchorY + Math.cos(tiltAngle) * d,
                i === SEGMENTS ? 2.5 : 1
            );

            rests.push(segLen);

        }

        const d2 = ropeLen + cardH;

        addPoint(
            ax + Math.sin(tiltAngle) * d2,
            anchorY + Math.cos(tiltAngle) * d2,
            4
        );

        rests.push(cardH);

        render();

        if (wasFirst && !prefersReduced) {

            clearTimeout(startTimer);
            startTimer = setTimeout(wake, 1000);

        } else {

            wake();

        }

    }


    function simulate() {

        for (let i = 1; i < pts.length; i++) {

            const p = pts[i];

            const vx = (p.x - p.ox) * DAMPING;
            const vy = (p.y - p.oy) * DAMPING;

            p.ox = p.x;
            p.oy = p.y;

            p.x += vx;
            p.y += vy + GRAVITY;

        }


        if (drag) {

            const C = pts[SEGMENTS];
            const B = pts[SEGMENTS + 1];

            const gx = C.x + (B.x - C.x) * drag.t;
            const gy = C.y + (B.y - C.y) * drag.t;

            let dx = drag.x - gx;
            let dy = drag.y - gy;

            const len = Math.hypot(dx, dy);
            const maxPull = 46;

            if (len > maxPull) {
                dx *= maxPull / len;
                dy *= maxPull / len;
            }

            C.x += dx * (1 - drag.t) * 0.9;
            C.y += dy * (1 - drag.t) * 0.9;
            B.x += dx * drag.t * 0.9;
            B.y += dy * drag.t * 0.9;

        }


        for (let k = 0; k < ITERATIONS; k++) {

            for (let i = 0; i < rests.length; i++) {

                const a = pts[i];
                const b = pts[i + 1];

                const dx = b.x - a.x;
                const dy = b.y - a.y;

                const dist = Math.hypot(dx, dy) || 0.0001;
                const diff = (dist - rests[i]) / dist;
                const wsum = a.inv + b.inv;

                if (wsum === 0) continue;

                const ca = (diff * a.inv) / wsum;
                const cb = (diff * b.inv) / wsum;

                a.x += dx * ca;
                a.y += dy * ca;
                b.x -= dx * cb;
                b.y -= dy * cb;

            }

            for (let i = 1; i < pts.length; i++) {

                const p = pts[i];

                const mx = i >= SEGMENTS ? cardW * 0.62 + 6 : 8;
                const bottom = i === SEGMENTS + 1 ? 14 + cardW * 0.2 : 8;

                p.x = clamp(p.x, mx, W - mx);
                p.y = clamp(p.y, -80, H - bottom);

            }

        }

    }


    /* kemiringan 3D mengikuti kecepatan kartu + posisi kursor */
    function updateTilt() {

        if (!tiltEl) return 0;

        if (prefersReduced) {
            tiltEl.style.transform = "";
            return 0;
        }

        const C = pts[SEGMENTS];

        const vx = C.x - C.ox;
        const vy = C.y - C.oy;

        const targetRy = clamp(vx * 2.8 + hover.ry, -34, 34);
        const targetRx = clamp(-vy * 1.5 + hover.rx, -18, 18);

        const dRy = targetRy - tilt.ry;
        const dRx = targetRx - tilt.rx;

        tilt.ry += dRy * 0.16;
        tilt.rx += dRx * 0.16;

        tiltEl.style.transform =
            "rotateX(" + tilt.rx.toFixed(2) + "deg) " +
            "rotateY(" + tilt.ry.toFixed(2) + "deg)";

        /* pantulan cahaya bergeser mengikuti kemiringan */
        tiltEl.style.setProperty("--gx", (30 - tilt.ry * 1.8).toFixed(1) + "%");
        tiltEl.style.setProperty("--gy", (18 + tilt.rx * 2.4).toFixed(1) + "%");

        return Math.abs(dRy) + Math.abs(dRx);

    }


    /* --- menggambar tali kain bermotif kotak --- */

    function drawStrap(rope) {

        /* alas: warna dasar + garis tepi */
        const path = () => {

            ctx.beginPath();
            ctx.moveTo(rope[0].x, rope[0].y);

            for (let i = 1; i < rope.length - 1; i++) {

                const mx = (rope[i].x + rope[i + 1].x) / 2;
                const my = (rope[i].y + rope[i + 1].y) / 2;

                ctx.quadraticCurveTo(rope[i].x, rope[i].y, mx, my);

            }

            const last = rope[rope.length - 1];

            ctx.lineTo(last.x, last.y);

        };

        ctx.lineJoin = "round";
        ctx.lineCap = "butt";

        path();
        ctx.lineWidth = STRAP_W + 3;
        ctx.strokeStyle = STRAP_EDGE;
        ctx.stroke();

        path();
        ctx.lineWidth = STRAP_W;
        ctx.strokeStyle = STRAP_B;
        ctx.stroke();


        /* motif kotak: 2 kolom kotak yang mengikuti lengkung tali */
        const segs = [];
        let total = 0;

        for (let i = 0; i < rope.length - 1; i++) {

            const dx = rope[i + 1].x - rope[i].x;
            const dy = rope[i + 1].y - rope[i].y;
            const len = Math.hypot(dx, dy) || 0.0001;

            segs.push({ i: i, len: len, ux: dx / len, uy: dy / len, start: total });

            total += len;

        }

        const at = d => {

            let s = segs[segs.length - 1];

            for (let k = 0; k < segs.length; k++) {
                if (d <= segs[k].start + segs[k].len) { s = segs[k]; break; }
            }

            const t = clamp(d - s.start, 0, s.len);

            return {
                x: rope[s.i].x + s.ux * t,
                y: rope[s.i].y + s.uy * t,
                nx: -s.uy,
                ny: s.ux
            };

        };

        const cells = Math.ceil(total / CELL);

        ctx.fillStyle = STRAP_A;

        for (let k = 0; k < cells; k++) {

            const p0 = at(k * CELL);
            const p1 = at(Math.min((k + 1) * CELL, total));

            for (let col = 0; col < 2; col++) {

                if ((k + col) % 2) continue;

                const o0 = -STRAP_W / 2 + col * (STRAP_W / 2);
                const o1 = o0 + STRAP_W / 2;

                ctx.beginPath();
                ctx.moveTo(p0.x + p0.nx * o0, p0.y + p0.ny * o0);
                ctx.lineTo(p1.x + p1.nx * o0, p1.y + p1.ny * o0);
                ctx.lineTo(p1.x + p1.nx * o1, p1.y + p1.ny * o1);
                ctx.lineTo(p0.x + p0.nx * o1, p0.y + p0.ny * o1);
                ctx.closePath();
                ctx.fill();

            }

        }

    }


    function render() {

        ctx.clearRect(0, 0, W, H);

        const rope = pts.slice(0, SEGMENTS + 1);

        drawStrap(rope);

        /* layar sempit: tali dijepit oleh klip kecil di atas */
        if (anchorY > 0) {

            const a = rope[0];

            ctx.fillStyle = "#191713";
            ctx.beginPath();

            if (ctx.roundRect) {
                ctx.roundRect(a.x - 20, a.y - 16, 40, 18, 6);
            } else {
                ctx.rect(a.x - 20, a.y - 16, 40, 18);
            }

            ctx.fill();

            ctx.fillStyle = "rgba(248, 243, 232, 0.35)";
            ctx.fillRect(a.x - 12, a.y - 10, 24, 3);

        }


        const C = pts[SEGMENTS];
        const B = pts[SEGMENTS + 1];

        const phi = Math.atan2(-(B.x - C.x), B.y - C.y);

        card.style.transform =
            "translate3d(" + (C.x - cardW / 2).toFixed(2) + "px, " +
            C.y.toFixed(2) + "px, 0) rotate(" + phi.toFixed(4) + "rad)";

    }


    function loop(t) {

        if (!lastT) lastT = t;

        acc += Math.min(t - lastT, 64);
        lastT = t;

        while (acc >= STEP) {
            simulate();
            acc -= STEP;
        }

        const tiltDelta = updateTilt();

        render();

        let energy = tiltDelta * 0.05;

        for (let i = 1; i < pts.length; i++) {
            energy += Math.abs(pts[i].x - pts[i].ox) +
                      Math.abs(pts[i].y - pts[i].oy);
        }

        calm = energy < 0.06 && !drag ? calm + 1 : 0;

        if (calm > 40) {
            running = false;
            lastT = 0;
            return;
        }

        requestAnimationFrame(loop);

    }


    function wake() {

        calm = 0;

        if (running) return;

        running = true;
        lastT = 0;
        acc = 0;

        requestAnimationFrame(loop);

    }


    /* --- interaksi --- */

    function stagePoint(e) {

        const r = stage.getBoundingClientRect();

        return { x: e.clientX - r.left, y: e.clientY - r.top };

    }

    function hideNote() {
        if (note) note.classList.add("hide");
    }

    function toggleFlip() {

        const flipped = card.classList.toggle("flipped");

        if (flipBtn) flipBtn.setAttribute("aria-pressed", String(flipped));

    }


    card.addEventListener("pointerdown", e => {

        if (e.target.closest("a, button")) return;

        e.preventDefault();

        try { card.setPointerCapture(e.pointerId); } catch (err) { /* abaikan */ }

        clearTimeout(startTimer);

        const s = stagePoint(e);
        const C = pts[SEGMENTS];
        const B = pts[SEGMENTS + 1];

        const vx = B.x - C.x;
        const vy = B.y - C.y;

        const t = clamp(
            ((s.x - C.x) * vx + (s.y - C.y) * vy) / (vx * vx + vy * vy),
            0.2, 0.98
        );

        drag = {
            id: e.pointerId, t: t,
            x: s.x, y: s.y, sx: s.x, sy: s.y,
            time: performance.now(), moved: false
        };

        hover.rx = 0;
        hover.ry = 0;

        card.classList.add("dragging");
        hideNote();
        wake();

    });


    card.addEventListener("pointermove", e => {

        if (drag && e.pointerId === drag.id) {

            const s = stagePoint(e);

            drag.x = s.x;
            drag.y = s.y;

            if (Math.hypot(s.x - drag.sx, s.y - drag.sy) > 6) drag.moved = true;

            wake();
            return;

        }

        /* kemiringan 3D mengikuti kursor (hanya mouse) */
        if (e.pointerType === "mouse" && !prefersReduced) {

            const r = card.getBoundingClientRect();

            const px = clamp((e.clientX - r.left) / r.width, 0, 1);
            const py = clamp((e.clientY - r.top) / r.height, 0, 1);

            hover.ry = (px - 0.5) * 36;
            hover.rx = -(py - 0.5) * 20;

            wake();

        }

    });


    card.addEventListener("pointerleave", () => {

        hover.rx = 0;
        hover.ry = 0;

        wake();

    });


    function endDrag(e) {

        if (!drag || e.pointerId !== drag.id) return;

        const quick = performance.now() - drag.time < 450;

        if (!drag.moved && quick) toggleFlip();

        drag = null;
        card.classList.remove("dragging");
        wake();

    }

    card.addEventListener("pointerup", endDrag);
    card.addEventListener("pointercancel", endDrag);


    if (flipBtn) {

        flipBtn.addEventListener("click", () => {

            toggleFlip();
            hideNote();

            const B = pts[SEGMENTS + 1];

            if (B && !prefersReduced) B.ox -= 4;

            wake();

        });

    }


    /* --- ukuran --- */

    let resizeTimer;

    function checkSize() {

        layoutStage();

        const r = stage.getBoundingClientRect();

        if (Math.abs(r.width - builtW) < 1 &&
            Math.abs(r.height - builtH) < 1) return;

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(build, 120);

    }

    if ("ResizeObserver" in window) {
        new ResizeObserver(checkSize).observe(area);
    }

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(build, 150);
    });

    window.addEventListener("load", checkSize);

    build();

})();
