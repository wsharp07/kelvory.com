const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const yearNodes = document.querySelectorAll("[data-current-year]");

for (const node of yearNodes) {
  node.textContent = String(new Date().getFullYear());
}

if (menuToggle && siteNav) {
  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(!siteNav.classList.contains("is-open"));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.closest("a")) {
      setMenuState(false);
    }
  });

  const desktopMedia = window.matchMedia("(min-width: 821px)");
  const handleDesktopChange = (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  };

  if (typeof desktopMedia.addEventListener === "function") {
    desktopMedia.addEventListener("change", handleDesktopChange);
  } else {
    desktopMedia.addListener(handleDesktopChange);
  }
}

const revealNodes = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  for (const node of revealNodes) {
    node.classList.add("is-visible");
  }
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.15,
    }
  );

  for (const node of revealNodes) {
    observer.observe(node);
  }
}
