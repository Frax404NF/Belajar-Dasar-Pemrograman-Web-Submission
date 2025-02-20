$(document).ready(function () {
  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
});

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
});
