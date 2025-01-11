import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("fullscreen-overlay");
  const loadingBar = document.getElementById("loading-bar");

  const referrer = document.referrer;
  const isExternalReferrer =
    !localStorage.getItem("visited") &&
    (referrer === "" || !referrer.includes(window.location.hostname));

  const debugMode = false;

  if (debugMode || isExternalReferrer) {
    overlay.style.display = "flex";
    overlay.style.opacity = 1;

    gsap.to(loadingBar, {
      duration: 1.5,
      width: "100%",
      ease: "power2.out",
      onComplete: () => {
        gsap.to(overlay, {
          duration: 0.7,
          opacity: 0,
          y: "100%",
          ease: "power2.inOut",
          onComplete: () => {
            overlay.style.display = "none";
          },
        });
      },
    });

    if (!debugMode) {
      localStorage.setItem("visited", "true");
    }
  } else {
    overlay.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    "#Section",
    { opacity: 0, y: -100 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#Section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    },
  );
});
