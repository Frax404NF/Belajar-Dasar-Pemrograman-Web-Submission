function smoothScrollToTarget() {
  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.includes("#")) {
        const targetId = href.split("#")[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          setTimeout(() => {
            targetElement.focus();
            if (!targetElement.matches(":focus")) {
              targetElement.setAttribute("tabindex", "-1");
              targetElement.focus();
            }
          }, 1000);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const navList = document.querySelector(".nav-list");

  toggleButton.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    const isClickInside =
      navList.contains(event.target) || toggleButton.contains(event.target);
    if (!isClickInside && navList.classList.contains("active")) {
      navList.classList.remove("active");
    }
  });

  smoothScrollToTarget();
});
