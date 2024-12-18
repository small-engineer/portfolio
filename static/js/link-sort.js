(() => {
  // assets/js/link-sort.js
  document.addEventListener("DOMContentLoaded", () => {
    let sortDirections = {};
    function sortTable(columnIndex) {
      const table = document.getElementById("linksTable");
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.rows);
      sortDirections[columnIndex] = !sortDirections[columnIndex];
      const direction = sortDirections[columnIndex] ? 1 : -1;
      const sortedRows = rows.sort((a, b) => {
        const aText = a.cells[columnIndex].innerText.trim();
        const bText = b.cells[columnIndex].innerText.trim();
        return aText.localeCompare(bText) * direction;
      });
      tbody.innerHTML = "";
      sortedRows.forEach((row) => tbody.appendChild(row));
    }
    function filterTable() {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      const table = document.getElementById("linksTable");
      const rows = Array.from(table.querySelectorAll("tbody tr"));
      rows.forEach((row) => {
        const searchData = row.getAttribute("data-search").toLowerCase();
        if (searchData.includes(searchInput)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    }
    document.querySelectorAll("#linksTable th").forEach((th, index) => {
      th.addEventListener("click", () => sortTable(index));
    });
    document.getElementById("searchInput").addEventListener("input", filterTable);
  });
})();
