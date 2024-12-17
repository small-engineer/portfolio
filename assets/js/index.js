import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("fullscreen-overlay");
  const loadingBar = document.getElementById("loading-bar");

  const referrer = document.referrer;
  const isExternalReferrer =
    referrer && !referrer.includes(window.location.hostname);

  const debugMode = false;

  if (debugMode || (!localStorage.getItem("visited") && isExternalReferrer)) {
    overlay.classList.remove("hidden");

    gsap.to(loadingBar, {
      duration: 1.5,
      width: "100%",
      ease: "power2.out",
      onComplete: () => {
        // 上から下にスライドしながら消えるアニメーション
        gsap.to(overlay, {
          duration: 0.7, // アニメーション時間
          opacity: 0,
          y: "100%", // 下にスライドする
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
        toggleActions: "play none none reverse",
      },
    },
  );
});
