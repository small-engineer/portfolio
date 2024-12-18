(() => {
  // assets/js/blog-sort.js
  document.addEventListener("DOMContentLoaded", () => {
    let sortDirections = {};
    function sortTable(columnIndex) {
      const table = document.getElementById("blogTable");
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.rows);
      sortDirections[columnIndex] = !sortDirections[columnIndex];
      const direction = sortDirections[columnIndex] ? 1 : -1;
      const isNumeric = rows.some((row) => {
        const text = row.cells[columnIndex].innerText.trim();
        return !isNaN(parseFloat(text)) && isFinite(text);
      });
      const isDate = rows.some((row) => {
        const text = row.cells[columnIndex].innerText.trim();
        return !isNaN(Date.parse(text));
      });
      const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.trim();
        const bText = b.cells[columnIndex].innerText.trim();
        if (isNumeric) {
          return (parseFloat(aText) - parseFloat(bText)) * direction;
        } else if (isDate) {
          return (new Date(aText) - new Date(bText)) * direction;
        } else {
          return aText.localeCompare(bText) * direction;
        }
      });
      tbody.innerHTML = "";
      sortedRows.forEach((row) => tbody.appendChild(row));
    }
    document.querySelectorAll("#blogTable th").forEach((th, index) => {
      th.addEventListener("click", () => sortTable(index));
    });
  });
})();
