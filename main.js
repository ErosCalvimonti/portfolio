// Progressive enhancement only: the page is fully readable without this file.

// Theme toggle
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme");
  if (!button) return;

  function current() {
    return root.dataset.theme || "dark";
  }

  button.hidden = false;
  button.setAttribute("aria-pressed", String(current() === "dark"));
  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    button.setAttribute("aria-pressed", String(next === "dark"));
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
