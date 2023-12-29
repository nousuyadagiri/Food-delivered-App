(() => {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", () => {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });

  /* Start: tooltip */
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
  });
  /* End: tooltip */

  /* Start: scrolltopup */
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  scrollToTopButton.addEventListener("click", () => {
    console.log("haefuai");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  /* End: scrolltopup */
})();
