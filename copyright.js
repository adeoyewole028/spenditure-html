let copyrightEl = document.getElementById("copyright");

function thisYear() {
  let year = new Date();
  let thisYear = year.getFullYear();

  copyrightEl.textContent = thisYear;
}
thisYear();
