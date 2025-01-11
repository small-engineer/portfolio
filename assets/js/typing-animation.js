document.addEventListener("DOMContentLoaded", function () {
  const text = "枯れた/技術/と/役立たない/諸々の/備忘録";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  // カーソルを最初に追加
  const cursor = document.createElement("span");
  cursor.className = "typed-cursor";
  cursor.textContent = "|";
  typingElement.appendChild(cursor);

  function typeText() {
    if (index < text.length) {
      if (text[index] === "/") {
        // 改行を挿入し、一時停止
        const lineBreak = document.createElement("wbr");
        cursor.before(lineBreak);
        index++;
        setTimeout(typeText, 90); // 息継ぎ時間
      } else {
        // カーソルの前に文字を追加
        cursor.before(text[index]);
        index++;
        setTimeout(typeText, 70); // タイピング速度
      }
    }
  }

  typeText();
});
