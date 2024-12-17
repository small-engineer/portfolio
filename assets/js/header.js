import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll(".opacity-0");
elements.forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

const header = document.querySelector("header");
let lastScrollY = window.scrollY;
const scrollThreshold = 100;
let isHidden = false;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (
    currentScrollY > scrollThreshold &&
    currentScrollY > lastScrollY &&
    !isHidden
  ) {
    gsap.to(header, { y: -100, duration: 0.3, ease: "power1.out" });
    isHidden = true;
  } else if (currentScrollY < lastScrollY && isHidden) {
    gsap.to(header, { y: 0, duration: 0.3, ease: "power1.out" });
    isHidden = false;
  }

  lastScrollY = currentScrollY;
});
