/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
sr.reveal(".contact__title, .contact__message, .contact__email-button", {
  interval: 200,
});

/*================== DARK MODE TOGGLER ================================== */
const darkModeToggle = document.getElementById("darkModeToggle");
const header = document.querySelector(".l-header");

// Function to toggle dark mode on body and header
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");

  // Save the dark mode state to localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
};

// Function to toggle Boxicons icon based on dark mode state
const toggleIcon = () => {
  const icon = document.querySelector("#darkModeToggle i");
  icon.classList.toggle("bxs-moon");
  icon.classList.toggle("bxs-sun");
};

// Event listener for dark mode toggle button
darkModeToggle.addEventListener("click", () => {
  toggle();
});

const toggle = () => {
  toggleDarkMode();
  toggleIcon();
};

// Check localStorage for dark mode state on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode) {
    const isDarkMode = JSON.parse(savedDarkMode);
    if (isDarkMode) {
      toggle();
    }
  } else {
    //Default mode -> dark
    toggle();
  }

  /*==========EXPERIENCE TAB SELECTED ACTIVE ============ */
  const tabs = document.querySelectorAll(".experience__tab-button");
  const panels = document.querySelectorAll(".experience__tab-panel");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      panels.forEach((p) => p.classList.remove("fade-enter-done"));

      tab.classList.add("active-tab");
      panels[index].classList.add("fade-enter-done");
    });
  });

  /*========================== EMAIL COPY ================== */
  const emailElement = document.querySelector(".footer__email");
  const emailPopper = document.getElementById("popper-message");

  emailElement.addEventListener("click", function () {
    const eId = emailElement.textContent || emailElement.innerText;
    navigator.clipboard.writeText(eId.trim());
    // Show popper message
    emailPopper.classList.add("show");

    // Hide popper message after 3 seconds
    setTimeout(() => {
      emailPopper.classList.remove("show");
    }, 3000);
  });
});
