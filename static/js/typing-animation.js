(() => {
  // assets/js/typing-animation.js
  document.addEventListener("DOMContentLoaded", function () {
    const text =
      "\u67AF\u308C\u305F/\u6280\u8853/\u3068/\u5F79\u7ACB\u305F\u306A\u3044/\u8AF8\u3005\u306E/\u5099\u5FD8\u9332";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    const cursor = document.createElement("span");
    cursor.className = "typed-cursor";
    cursor.textContent = "|";
    typingElement.appendChild(cursor);
    function typeText() {
      if (index < text.length) {
        if (text[index] === "/") {
          const lineBreak = document.createElement("wbr");
          cursor.before(lineBreak);
          index++;
          setTimeout(typeText, 90);
        } else {
          cursor.before(text[index]);
          index++;
          setTimeout(typeText, 70);
        }
      }
    }
    typeText();
  });
})();
