import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scroll-btn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function (event) {
      event.preventDefault();

      gsap.to(window, {
        duration: 1,
        scrollTo: "#Section",
        ease: "power2.inOut",
      });
    });
  }
});
