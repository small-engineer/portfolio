(() => {
  // assets/js/paging.js
  document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll(".paged-section");
    let currentIndex = 0;
    function showSection(index) {
      sections.forEach((section, i) => {
        section.style.display = i === index ? "block" : "none";
      });
    }
    sections.forEach((section, i) => {
      let nextButton = section.querySelector(".next-button");
      let prevButton = section.querySelector(".prev-button");
      if (nextButton) {
        nextButton.addEventListener("click", () => {
          if (i < sections.length - 1) {
            currentIndex = i + 1;
            showSection(currentIndex);
          }
        });
      }
      if (prevButton) {
        prevButton.addEventListener("click", () => {
          if (i > 0) {
            currentIndex = i - 1;
            showSection(currentIndex);
          }
        });
      }
    });
    showSection(currentIndex);
  });
})();
