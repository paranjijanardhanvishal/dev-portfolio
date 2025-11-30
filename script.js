// script.js - animations + navbar + particles + slider

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     FADE-UP STAGGER ON PAGE LOAD
  -------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-up");
  fadeEls.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), 200 + i * 100);
  });

  /* ------------------------------
     NAVBAR HIDE ON SCROLL
  -------------------------------- */
  const nav = document.querySelector(".navbar");
  let lastScroll = window.scrollY;

  function handleScroll() {
    const current = window.scrollY;

    if (current <= 60) {
      nav.classList.add("visible");
      nav.classList.remove("hidden");
    } else {
      if (current > lastScroll) {
        nav.classList.add("hidden");
        nav.classList.remove("visible");
      } else {
        nav.classList.add("visible");
        nav.classList.remove("hidden");
      }
    }

    lastScroll = current;
  }

  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
  });

  nav.classList.add("visible");
});



/* ------------------------------
   PARTICLES - HERO SECTION
-------------------------------- */
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true, distance: 150, color: "#1e88e5" },
    color: { value: "#1e88e5" }
  }
});


/* ------------------------------
   PARTICLES - ABOUT SECTION
-------------------------------- */
if (document.getElementById("particles-about")) {
  particlesJS.load("particles-about", "particles.json");
}



/* ------------------------------
   INTERSECTION OBSERVER (reveal)
-------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach(el => revealObserver.observe(el));



/* ------------------------------
   SCROLL ANIMATE ELEMENTS
-------------------------------- */
const scrollElements = document.querySelectorAll(".scroll-animate");

const scroller = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.2 }
);

scrollElements.forEach(el => scroller.observe(el));



/* -----------------------------------------
   PROJECT SLIDER — LEFT/RIGHT BUTTONS
------------------------------------------ */
const track = document.querySelector(".projects-track");
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");

if (track && btnLeft && btnRight) {

  const cardWidth = track.querySelector(".project-card").offsetWidth + 40; 
  let scrollAmount = 0;

  btnRight.addEventListener("click", () => {
    track.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  btnLeft.addEventListener("click", () => {
    track.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });
}
