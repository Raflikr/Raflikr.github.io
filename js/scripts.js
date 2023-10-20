window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function validateForm() {
  var name = document.getElementById("usr").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("comment").value;
  var namePattern = /^[a-zA-Z]+$/;

  if (name.trim() === "" || !name.match(namePattern)) {
    alert("Please enter a valid name using only alphabet characters.");
    return false;
  }

  if (email.trim() === "") {
    alert("Please enter your email.");
    return false;
  }

  if (
    !(email.includes("@") && email.includes(".")) &&
    (!/^\d+$/.test(email) || email.charAt(0) !== "0")
  ) {
    alert("Please enter a valid email address or phone number.");
    return false;
  }

  if (message.trim() === "") {
    alert("Please enter your message and impressions.");
    return false;
  }

  return true;
}

