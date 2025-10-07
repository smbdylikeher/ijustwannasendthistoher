gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/* ---------------- SCENE 1 ---------------- */
let scene1 = gsap.timeline();
ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "45% 100%",
  scrub: 3,
});

// hills animation
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9 }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
  animation: clouds,
  trigger: ".scrollElement",
  start: "top top",
  end: "70% 100%",
  scrub: 1,
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* ---------------- Tambahan: Ucapan Scroll ---------------- */
gsap.to("#textScroll1", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "top top",
    end: "20% 100%",
    scrub: true,
  },
});

gsap.to("#textScroll1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "25% top",
    end: "35% 100%",
    scrub: true,
  },
});

gsap.to("#textScroll2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "35% top",
    end: "55% 100%",
    scrub: true,
  },
});

gsap.to("#textScroll2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "60% top",
    end: "70% 100%",
    scrub: true,
  },
});

/* ---------------- Lagu Otomatis ---------------- */
const song = document.getElementById("song");

// beberapa browser butuh interaksi dulu, jadi coba play setelah scroll atau klik pertama
function tryPlay() {
  song.play().catch(() => {});
  document.removeEventListener("click", tryPlay);
  window.removeEventListener("scroll", tryPlay);
}
document.addEventListener("click", tryPlay);
window.addEventListener("scroll", tryPlay);

/* ---------------- Fullscreen Toggle ---------------- */
let fullscreen;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = "Exit Fullscreen";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = "Go Fullscreen";
  }
});

/* Reset scrollbar position after refresh */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

