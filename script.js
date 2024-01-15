document.addEventListener("DOMContentLoaded", function () {
  let bgBlue = document.querySelector(".bg-blue");
  let bgNone = document.querySelector(".bg-none");
  let changecolors = document.querySelectorAll(".color-text");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
      bgBlue.style.backgroundColor = "#fff";
      bgNone.style.backgroundColor = "#02557d";

      changecolors.forEach(function (element) {
        element.style.color = "#02557d";
      });
    } else {
      bgBlue.style.backgroundColor = "#02557d";
      bgNone.style.background = "none";

      changecolors.forEach(function (element) {
        element.style.color = "#fff";
      });
    }
  });
});
