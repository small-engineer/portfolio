import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".about-section");
  sections.forEach((section) => {
    const index = parseInt(section.getAttribute("data-index"), 10);
    gsap.from(section, {
      opacity: 0,
      y: 20,
      delay: index * 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  });
});
